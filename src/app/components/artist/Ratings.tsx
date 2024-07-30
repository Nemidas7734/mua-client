import Image from "next/image";

export default function Ratings() {
    return (
        <div className="flex items-center gap-2">
            <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((_, index) => (
                    <div key={index} className="p-[2px]">
                        <Image src="/images/illustrations/star.png" alt="" width={12} height={12} className="object-contain" />
                    </div>
                ))}
            </div>
            <span className="font-semibold text-sm">5.0</span>
        </div>
    )
}