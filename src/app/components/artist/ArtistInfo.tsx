import Image from "next/image"
import Ratings from "./Ratings"

export default function ArtistInfo() {
    return (
        <div className="w-full md:w-[1120px] h-[330px] md:h-[737px] rounded-xl border-2 shadow-2xl shadow-[#0000001F] mt-9 md:mt-24">
            <div className="w-full h-[152px] md:h-[356px]">
                <Image src="/images/Hero.png" alt="Cover photo" width={1120} height={356} className="relative rounded-t-xl  object-cover" />
            </div>
            <div className="absolute w-[73px] md:w-[166px] h-[74px] md:h-[166px] rounded-full transform translate-x-5 -translate-y-10 md:transform md:translate-x-12 md:-translate-y-20  z-20 bg-stone-400">
                <svg className="w-full h-full md:w-36 object-cover p-4 m-auto" width="140" height="140" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 0.236328C13.05 0.236328 9 5.06252 9 11.0091C9 16.9556 13.05 21.7818 18 21.7818C22.95 21.7818 27 16.9556 27 11.0091C27 5.06252 22.95 0.236328 18 0.236328ZM8.595 21.7818C3.825 21.9973 0 25.7462 0 30.4V34.7091H36V30.4C36 25.7462 32.22 21.9973 27.405 21.7818C24.975 24.4104 21.645 26.0909 18 26.0909C14.355 26.0909 11.025 24.4104 8.595 21.7818Z" fill="black" />
                </svg>
            </div>
            <div className="flex flex-col  ml-6 md:ml-12 mt-10 md:mt-[104px]">
                <h1 className="font-bold text-sm md:text-3xl">Kritika Gajban</h1>
                <h1 className="font-normal text-sm md:text-xl">Katraj,Pune</h1>
                <h1 className="font-normal text-sm md:text-base">Hair Styling, Draping, Makeup, False Lashes +</h1>
                <div className="flex items-center max-sm:w-[190px] max-sm:h-[22px]">
                    <Ratings/>
                </div>
                <div className="flex gap-5 mt-1 md:mt-2">
                    <button className="w-[100px] md:w-[144px] h-[27px] md:h-[37px] bg-[#EA2793] rounded-full text-sm md:text-base text-white">Message</button>
                    <button className="w-[100px] md:w-[144px] h-[27px] md:h-[37px] bg-[#EA2793] rounded-full text-sm md:text-base text-white">Contact</button>
                </div>
            </div>
        </div>
    )
}