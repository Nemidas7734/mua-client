import Image from "next/image";

interface RatingsProps {
  rating?: number;
}

export default function Ratings({ rating = 5 }: RatingsProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <div key={index} className="p-[2px]">
            <Image 
              src={index < rating ? "/images/illustrations/star.png" : "/images/illustrations/star.png"} 
              alt="" 
              width={12} 
              height={12} 
              className="object-contain" 
            />
          </div>
        ))}
      </div>
      <span className="font-semibold text-sm">{rating.toFixed(1)}</span>
    </div>
  )
}