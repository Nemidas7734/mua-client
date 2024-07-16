import Image from "next/image"

export default function ArtistInfo() {
    return (
        <div className="w-[1120px] h-[656px] rounded-xl border-2 shadow-2xl shadow-[#0000001F] mt-16">
            <div className="w-full h-[356px]">
                <Image src="/images/Hero.png" alt="Cover photo" width={1120} height={356} className="relative rounded-t-xl  object-cover" />
            </div>
            <div className="absolute w-[166px] h-[166px] rounded-full transform translate-x-12 -translate-y-20  z-20 bg-stone-400">
                <svg className="object-cover p-4 m-auto" width="140" height="140" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 0.236328C13.05 0.236328 9 5.06252 9 11.0091C9 16.9556 13.05 21.7818 18 21.7818C22.95 21.7818 27 16.9556 27 11.0091C27 5.06252 22.95 0.236328 18 0.236328ZM8.595 21.7818C3.825 21.9973 0 25.7462 0 30.4V34.7091H36V30.4C36 25.7462 32.22 21.9973 27.405 21.7818C24.975 24.4104 21.645 26.0909 18 26.0909C14.355 26.0909 11.025 24.4104 8.595 21.7818Z" fill="black" />
                </svg>
            </div>
            <div className="flex flex-col gap-1 ml-12 mt-[104px]">
                <h1 className="font-bold text-3xl">Kritika Gajban</h1>
                <h1 className="font-normal text-xl">Katraj,Pune</h1>
                <h1 className="font-normal text-base">Hair Styling, Draping, Makeup, False Lashes +</h1>
                <div className="flex items-center gap-2">
                    <div className="flex items-center">
                        <div className="p-1">
                            <Image src="/images/illustrations/star.png" alt="" height={12} width={12} className="object-contain" />
                        </div>
                        <div className="p-1">
                            <Image src="/images/illustrations/star.png" alt="" height={12} width={12} className="object-contain" />
                        </div>
                        <div className="p-1">
                            <Image src="/images/illustrations/star.png" alt="" height={12} width={12} className="object-contain" />
                        </div>
                        <div className="p-1">
                            <Image src="/images/illustrations/star.png" alt="" height={12} width={12} className="object-contain" />
                        </div>
                        <div className="p-1">
                            <Image src="/images/illustrations/star.png" alt="" height={12} width={12} className="object-contain" />
                        </div>
                    </div>
                    <h1 className="font-semibold text-base mt-[2px]">5.0</h1>
                </div>
                <div className="flex gap-5">
                    <button className="w-[144px] h-[37px] bg-[#EA2793] rounded-full text-white">Message</button>
                    <button className="w-[144px] h-[37px] bg-[#EA2793] rounded-full text-white">Contact</button>
                </div>
            </div>
        </div>
    )
}