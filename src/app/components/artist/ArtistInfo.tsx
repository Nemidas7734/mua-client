import Image from "next/image"
import Ratings from "./Ratings"

export default function ArtistInfo() {
    return (
        <div className="w-full max-w-[1120px] mx-auto rounded-xl border-2 shadow-2xl shadow-[#0000001F] mt-4 sm:mt-8 md:mt-16 overflow-hidden">
            <div className="relative w-full h-32 sm:h-48 md:h-64 lg:h-[356px]">
                <Image 
                    src="/images/Hero.png" 
                    alt="Cover photo" 
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                />
                <div className="absolute bottom-0 left-4 sm:left-6 md:left-8 transform translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full bg-stone-400 flex items-center justify-center">
                    <svg className="w-3/4 h-3/4 text-black" viewBox="0 0 36 35" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 0.236328C13.05 0.236328 9 5.06252 9 11.0091C9 16.9556 13.05 21.7818 18 21.7818C22.95 21.7818 27 16.9556 27 11.0091C27 5.06252 22.95 0.236328 18 0.236328ZM8.595 21.7818C3.825 21.9973 0 25.7462 0 30.4V34.7091H36V30.4C36 25.7462 32.22 21.9973 27.405 21.7818C24.975 24.4104 21.645 26.0909 18 26.0909C14.355 26.0909 11.025 24.4104 8.595 21.7818Z" />
                    </svg>
                </div>
            </div>
            <div className="flex flex-col px-4 sm:px-6 md:px-8 pt-12 sm:pt-16 md:pt-20 pb-6">
                <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">Kritika Gajban</h1>
                <h2 className="font-normal text-sm sm:text-base md:text-lg lg:text-xl mt-1">Katraj, Pune</h2>
                <p className="font-normal text-xs sm:text-sm md:text-base mt-1">Hair Styling, Draping, Makeup, False Lashes +</p>
                <div className="mt-2">
                    <Ratings />
                </div>
                <div className="flex gap-3 sm:gap-4 mt-3 sm:mt-4">
                    <button className="px-4 py-2 bg-[#EA2793] rounded-full text-xs sm:text-sm md:text-base text-white">Message</button>
                    <button className="px-4 py-2 bg-[#EA2793] rounded-full text-xs sm:text-sm md:text-base text-white">Contact</button>
                </div>
            </div>
        </div>
    )
}