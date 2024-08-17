import Image from "next/image"
import Ratings from "./Ratings"
import { useState, useEffect } from "react"
import { addReview, updateReview, getReviewByUser, getUserName } from "@/app/firebase/utils/firebaseData"
import { useAuthStore } from '@/app/lib/store/authStore'

interface Review {
    id: string;
    text: string;
    rating: number;
    date: string;
    userName?: string;
    userId?: string;
}

interface ArtistReviewsProps {
    artistId: string;
    reviews?: Review[];
}

export default function ArtistReviews({ artistId, reviews = [] }: ArtistReviewsProps) {
    const [newReview, setNewReview] = useState("")
    const [rating, setRating] = useState(0)
    const [userReview, setUserReview] = useState<Review | null>(null)
    const [isEditing, setIsEditing] = useState(false)
    const [showAllReviews, setShowAllReviews] = useState(false)
    const { role, userId } = useAuthStore()

    useEffect(() => {
        const fetchUserReview = async () => {
            if (userId) {
                const review = await getReviewByUser(artistId, userId)
                setUserReview(review)
                if (review) {
                    setNewReview(review.text)
                    setRating(review.rating)
                }
            }
        }
        fetchUserReview()
    }, [artistId, userId])

    const handleSubmit = async () => {
        if (newReview && rating && userId && artistId) {
            try {
                const userName = await getUserName(userId);
                const review: Review = {
                    id: userReview?.id || Date.now().toString(),
                    text: newReview,
                    rating,
                    date: new Date().toISOString(),
                    userId,
                    userName
                }
                console.log("Submitting review:", review); // Debug log
                console.log("artistId:", artistId); // Debug log
                if (userReview) {
                    await updateReview(artistId, userReview.id!, review);
                } else {
                    await addReview(artistId, review);
                }
                setUserReview(review);
                setIsEditing(false);
            } catch (error) {
                console.error("Error submitting review:", error);
            }
        } else {
            console.error("Missing required fields for review submission");
        }
    }

    const handleEdit = () => {
        setIsEditing(true)
        setNewReview(userReview!.text)
        setRating(userReview!.rating)
    }

    const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 3)

    return (
        <section className="flex flex-col items-center gap-4 w-full max-w-[1120px] mx-auto p-4 rounded-xl border-2 shadow-2xl shadow-[#0000001F] mt-2">
            {role !== 'artist' && (
                <div className="flex flex-col w-full gap-4 sm:flex-row sm:justify-between sm:items-start">
                    {userReview && !isEditing ? (
                        <div className="w-full">
                            <p>You have already submitted a review:</p>
                            <p>{userReview.text}</p>
                            <button onClick={handleEdit} className="mt-2 text-blue-500 underline underline-offset-4">Edit your review</button>
                        </div>
                    ) : (
                        <>
                            <div className="w-full sm:w-2/3">
                                <textarea
                                    className="p-2 w-full h-32 sm:h-28 rounded-xl border-2 shadow-[#F27BBD] border-[#F27BBD] resize-none"
                                    placeholder="Write a review..."
                                    value={newReview}
                                    onChange={(e) => setNewReview(e.target.value)}
                                ></textarea>
                            </div>
                            <div className="flex flex-col gap-2 w-full sm:w-1/3">
                                <h2 className="text-lg font-semibold">Rate Now</h2>
                                <Ratings rating={rating} setRating={setRating} />
                                <div className="flex gap-2 mt-2">
                                    <button className="flex-1 py-2 bg-[#EA2793] text-white text-sm rounded-full">Add Photos</button>
                                    <button className="flex-1 py-2 bg-[#EA2793] text-white text-sm rounded-full" onClick={handleSubmit}>
                                        {isEditing ? "Update" : "Submit"}
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-4">
                {displayedReviews.map((review, index) => (
                    <div key={index} className="p-4 flex flex-col rounded-xl bg-[#F7FF003B]">
                        <Ratings rating={review.rating} />
                        <p className="mt-2 font-normal text-sm">{review.text}</p>
                        <h3 className="mt-4 font-semibold text-sm">-{review.userName || "Anonymous"}</h3>
                    </div>
                ))}
            </div>
            {reviews.length > 3 && (
                <button
                    className="mt-4 font-semibold text-sm underline underline-offset-2"
                    onClick={() => setShowAllReviews(!showAllReviews)}
                >
                    {showAllReviews ? "Show Less" : "See all Reviews"}
                </button>
            )}
        </section>
    )
}