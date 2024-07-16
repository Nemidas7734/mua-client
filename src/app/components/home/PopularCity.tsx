import Image from "next/image"

export default function PopularCity() {
    return (
        <div className="flex flex-col justify-center items-center min-h-[340px] bg-gradient-to-r from-[#F27BBD] to-[#FFFFFF]">
            <h2 className="flex justify-center font-bold text-3xl">POPULAR CITIES</h2>
            <div className="relative flex flex-row justify-center items-center gap-10 w-[1167px] h-[104px] border-b-2 rounded-full bg-pink-200 mt-6">
                <div className="flex flex-col  gap-0 bg-slate-200w-[120px] h-full">
                    <Image src="/pune.png" alt="" width={120} height={80} quality={100} className="object-cover pt-5 overflow-hidden" />
                    <h1 className="m-auto text-base font-normal">PUNE</h1>
                </div>
                <div className="flex flex-col gap-0 bg-slate-200w-[120px] h-full">
                    <Image src="/mumbai.png" alt="" width={120} height={80} quality={100} className="object-cover pt-3 pl-2 pr-2 overflow-hidden" />
                    <h1 className="m-auto text-base font-normal">MUMBAI</h1>
                </div>
                <div className="flex flex-col  gap-0 bg-slate-200w-[120px] h-full">
                    <Image src="/pune.png" alt="" width={120} height={80} quality={100} className="object-cover pt-5 overflow-hidden" />
                    <h1 className="m-auto text-base font-normal">PUNE</h1>
                </div>
                <div className="flex flex-col gap-0 bg-slate-200w-[120px] h-full">
                    <Image src="/mumbai.png" alt="" width={120} height={80} quality={100} className="object-cover pt-3 pl-2 pr-2 overflow-hidden" />
                    <h1 className="m-auto text-base font-normal">MUMBAI</h1>
                </div>
                <div className="flex flex-col  gap-0 bg-slate-200w-[120px] h-full">
                    <Image src="/pune.png" alt="" width={120} height={80} quality={100} className="object-cover pt-5 overflow-hidden" />
                    <h1 className="m-auto text-base font-normal">PUNE</h1>
                </div>
                <div className="flex flex-col gap-0 bg-slate-200w-[120px] h-full">
                    <Image src="/mumbai.png" alt="" width={120} height={80} quality={100} className="object-cover pt-3 pl-2 pr-2 overflow-hidden" />
                    <h1 className="m-auto text-base font-normal">MUMBAI</h1>
                </div>
                <span className=""><Image src="/images/illustrations/add.png" alt="Explore more" height={40} width={40} quality={100} /></span>
            </div>
        </div>
    )
}