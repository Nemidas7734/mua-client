import Image from "next/image"
import Ratings from "./Ratings"

interface ArtistData {
    name: string;
    location: string;
    expertise: string | number | boolean | null | undefined;
    coverImageUrl?: string;
    profileImageUrl?: string;
    reviews: Array<{
        id: string;
        text: string;
        rating: number;
        date: string;
        userName?: string;
        userId?: string;
      }>;
}

interface ArtistInfoProps {
    artistData: ArtistData;
}

const calculateAverageRating = (reviews: ArtistData['reviews']): number => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return sum / reviews.length;
};


export default function ArtistInfo({ artistData }: ArtistInfoProps) {

    const averageRating = calculateAverageRating(artistData.reviews);

    // Function to render expertise badges
    const renderExpertiseBadges = () => {
        if (Array.isArray(artistData.expertise)) {
            return artistData.expertise.map((exp, index) => (
                <span key={index} className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-green-600/20 whitespace-nowrap">
                    {exp}
                </span>
            ));
        } else if (typeof artistData.expertise === 'string' && artistData.expertise.trim() !== '') {
            return artistData.expertise.split(',').map((exp, index) => (
                <span key={index} className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 whitespace-nowrap">
                    {exp.trim()}
                </span>
            ));
        }
        return <span className="text-gray-500">No expertise listed</span>;
    };

    return (
        <div className="w-full max-w-[1120px] mx-auto rounded-xl border-2 shadow-2xl shadow-[#0000001F] mt-4 sm:mt-10 md:mt-20 overflow-hidden">
            <div className="relative w-full h-32 sm:h-48 md:h-64 lg:h-[356px]">
                <Image
                    src={artistData.coverImageUrl || "/images/Hero.png"}
                    alt="Cover photo"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                />
                <div className="absolute bottom-0 left-4 sm:left-6 md:left-8 transform translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full bg-stone-400 flex items-center justify-center overflow-hidden">
                    {artistData.profileImageUrl ? (
                        <Image
                            src={artistData.profileImageUrl}
                            alt="Profile"
                            layout="fill"
                            objectFit="cover"
                        />
                    ) : (
                        <svg className="w-3/4 h-3/4 text-black" viewBox="0 0 36 35" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 0.236328C13.05 0.236328 9 5.06252 9 11.0091C9 16.9556 13.05 21.7818 18 21.7818C22.95 21.7818 27 16.9556 27 11.0091C27 5.06252 22.95 0.236328 18 0.236328ZM8.595 21.7818C3.825 21.9973 0 25.7462 0 30.4V34.7091H36V30.4C36 25.7462 32.22 21.9973 27.405 21.7818C24.975 24.4104 21.645 26.0909 18 26.0909C14.355 26.0909 11.025 24.4104 8.595 21.7818Z" />
                        </svg>
                    )}
                </div>
            </div>
            <div className="flex flex-col px-4 sm:px-6 md:px-8 pt-12 sm:pt-16 md:pt-20 pb-6">
                <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">{artistData.name}</h1>
                <h2 className="font-normal text-sm sm:text-base md:text-lg lg:text-xl mt-1">{artistData.location}</h2>
                <div className="flex flex-wrap gap-2 mt-2">
                    {renderExpertiseBadges()}
                </div>
                <div className="mt-2">
                    <Ratings rating={averageRating}/>
                </div>
                <div className="flex gap-3 sm:gap-4 mt-3 sm:mt-4">
                    <button className="px-4 py-2 bg-[#EA2793] rounded-full text-xs sm:text-sm md:text-base text-white">Message</button>
                    <button className="px-4 py-2 bg-[#EA2793] rounded-full text-xs sm:text-sm md:text-base text-white">Contact</button>
                </div>
            </div>
        </div>
    )
}