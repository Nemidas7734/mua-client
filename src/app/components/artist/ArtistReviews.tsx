import Image from "next/image"
import Ratings from "./Ratings"
import { useState } from "react"
import { addReview } from "@/app/firebase/utils/firebaseData"

interface Review {
  text: string;
  rating: number;
  date: string;
  userName?: string;
}

interface ArtistReviewsProps {
  artistId: string;
  reviews: Review[];
}

export default function ArtistReviews({ artistId, reviews }: ArtistReviewsProps) {
  const [newReview, setNewReview] = useState("")
  const [rating, setRating] = useState(0)

  const handleSubmit = async () => {
    if (newReview && rating) {
      const review: Review = {
        text: newReview,
        rating,
        date: new Date().toISOString(),
      }
      await addReview(artistId, review)
      setNewReview("")
      setRating(0)
    }
  }

    return (
        <section className="flex flex-col items-center gap-4 w-full max-w-[1120px] mx-auto p-4 rounded-xl border-2 shadow-2xl shadow-[#0000001F] mt-2">
            <div className="flex flex-col w-full gap-4 sm:flex-row sm:justify-between sm:items-start">
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
                    <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <div key={star} className="p-1" onClick={() => setRating(star)}>
                                <Image 
                                    src={star <= rating ? "/images/illustrations/star.png" : "/images/illustrations/star.png"} 
                                    alt="" 
                                    width={24} 
                                    height={24} 
                                    className="object-contain" 
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-2 mt-2">
                        <button className="flex-1 py-2 bg-[#EA2793] text-white text-sm rounded-full">Add Photos</button>
                        <button className="flex-1 py-2 bg-[#EA2793] text-white text-sm rounded-full" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-4">
                {reviews.map((review, index) => (
                    <div key={index} className="p-4 flex flex-col rounded-xl bg-[#F7FF003B]">
                        <Ratings rating={review.rating} />
                        <p className="mt-2 font-normal text-sm">{review.text}</p>
                        <h3 className="mt-4 font-semibold text-sm">-{review.userName || "Anonymous"}</h3>
                    </div>
                ))}
            </div>
            <button className="mt-4 font-semibold text-sm hover:underline hover:underline-offset-2">See all Reviews</button>
        </section>
    )
}