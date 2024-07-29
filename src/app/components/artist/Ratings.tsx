import Image from "next/image";

export default function Ratings(){
    return(
        <div className="flex items-center gap-2">
        <div className="flex items-center">
            <div className="p-[2px] md:p-1">
                <Image src="/images/illustrations/star.png" alt="" height={12} width={12} className="object-contain" />
            </div>
            <div className="p-[2px] md:p-1">
                <Image src="/images/illustrations/star.png" alt="" height={12} width={12} className="object-contain" />
            </div>
            <div className="p-[2px] md:p-1">
                <Image src="/images/illustrations/star.png" alt="" height={12} width={12} className="object-contain" />
            </div>
            <div className="p-[2px] md:p-1">
                <Image src="/images/illustrations/star.png" alt="" height={12} width={12} className="object-contain" />
            </div>
            <div className="p-[2px] md:p-1">
                <Image src="/images/illustrations/star.png" alt="" height={12} width={12} className="object-contain" />
            </div>
        </div>
        <h1 className="font-semibold text-sm md:text-base md:mt-[2px]">5.0</h1>
    </div>
    )
}