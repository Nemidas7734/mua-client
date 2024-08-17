import Image from "next/image";

interface RatingsProps {
  rating: number;
  setRating?: (rating: number) => void;
}

export default function Ratings({ rating, setRating }: RatingsProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <div 
            key={star} 
            className="p-[2px] cursor-pointer"
            onClick={() => setRating && setRating(star)}
          >
            <Image 
              src={star <= rating ? "/images/illustrations/star-filled.png" : "/images/illustrations/star-empty.png"} 
              alt="" 
              width={24} 
              height={24} 
              className="object-contain" 
            />
          </div>
        ))}
      </div>
      {rating > 0 && <span className="font-semibold text-sm">{rating.toFixed(1)}</span>}
    </div>
  )
}