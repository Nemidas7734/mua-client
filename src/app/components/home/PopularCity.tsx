import Image from "next/image"

export default function PopularCity() {
    return (
        <div className="flex flex-col justify-center items-center h-[190px] md:h-[340px] bg-gradient-to-r from-[#F27BBD] to-[#FFFFFF]">
            <h2 className="mx-auto font-bold text-xl md:text-3xl">POPULAR CITIES</h2>
            <div className="relative flex justify-center items-center gap-6 md:gap-10 w-full md:w-[1167px] h-20 md:h-[104px] border-b-2 md:rounded-full bg-pink-200 mt-6 mb-6">
                <div className="flex flex-col  gap-0 bg-slate-200w-[120px] h-full">
                    <Image src="/pune.png" alt="" width={120} height={80} quality={100} className="h-14 md:h-20 w-24 md:w-[120px] object-cover pt-4 md:pt-5 pl-1 pr-1 overflow-hidden" />
                    <h1 className="m-auto text-xs md:text-base font-normal">PUNE</h1>
                </div>
                <div className="flex flex-col gap-0 bg-slate-200w-[120px] h-full">
                    <Image src="/mumbai.png" alt="" width={120} height={80} quality={100} className="h-14 md:h-20 w-24 md:w-[120px] object-cover pt-2 md:pt-3 pl-1 md:pl-2 pr-1 md:pr-2 overflow-hidden" />
                    <h1 className="m-auto text-xs md:text-base font-normal">MUMBAI</h1>
                </div>
                <div className="flex flex-col  gap-0 bg-slate-200w-[120px] h-full">
                    <Image src="/pune.png" alt="" width={120} height={80} quality={100} className="h-14 md:h-20 w-24 md:w-[120px] object-cover pt-4 md:pt-5 pl-1 pr-1 overflow-hidden" />
                    <h1 className="m-auto text-xs md:text-base font-normal">PUNE</h1>
                </div>
                <div className="max-sm:hidden flex flex-col gap-0 bg-slate-200w-[120px] h-full">
                    <Image src="/mumbai.png" alt="" width={120} height={80} quality={100} className="h-14 md:h-20 w-24 md:w-[120px] object-cover pt-2 md:pt-3 pl-1 md:pl-2 pr-1 md:pr-2 overflow-hidden" />
                    <h1 className="m-auto text-xs md:text-base font-normal">MUMBAI</h1>
                </div>
                <div className="max-sm:hidden flex flex-col  gap-0 bg-slate-200w-[120px] h-full">
                    <Image src="/pune.png" alt="" width={120} height={80} quality={100} className="h-14 md:h-20 w-24 md:w-[120px] object-cover pt-4 md:pt-5 pl-1 pr-1 overflow-hidden" />
                    <h1 className="m-auto text-xs md:text-base font-normal">PUNE</h1>
                </div>
                <div className="max-sm:hidden flex flex-col gap-0 bg-slate-200w-[120px] h-full">
                    <Image src="/mumbai.png" alt="" width={120} height={80} quality={100} className="h-14 md:h-20 w-24 md:w-[120px] object-cover pt-2 md:pt-3 pl-1 md:pl-2 pr-1 md:pr-2  overflow-hidden" />
                    <h1 className="m-auto text-xs md:text-base font-normal">MUMBAI</h1>
                </div>
                <span className=""><Image src="/images/illustrations/add.png" alt="Explore more" height={40} width={40} quality={100} className="h-6 md:h-10 w-6 md:w-10" /></span>
            </div>
        </div>
    )
}