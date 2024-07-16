import Image from "next/image"

export default function ArtistInfo() {
    return (
        <div className="w-[1120px] h-[725px] rounded-xl border-2 shadow-2xl shadow-[#0000001F] mb-8">
            <div className="w-full h-[356px]">
                <Image src="/images/Hero.png" alt="Cover photo" width={1120} height={356} className="relative rounded-t-xl  object-cover" />
                <div className="absolute w-[166px] h-[166px] rounded-full transform translate-x-16 -translate-y-20  z-20 bg-stone-400">
                    <svg className="object-cover p-4 m-auto" width="140" height="140" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 0.236328C13.05 0.236328 9 5.06252 9 11.0091C9 16.9556 13.05 21.7818 18 21.7818C22.95 21.7818 27 16.9556 27 11.0091C27 5.06252 22.95 0.236328 18 0.236328ZM8.595 21.7818C3.825 21.9973 0 25.7462 0 30.4V34.7091H36V30.4C36 25.7462 32.22 21.9973 27.405 21.7818C24.975 24.4104 21.645 26.0909 18 26.0909C14.355 26.0909 11.025 24.4104 8.595 21.7818Z" fill="black" />
                    </svg>
                </div>
                <div className="flex flex-row gap-28 ml-16 mt-28">
                    <div className="flex flex-col gap-4 ">
                        <input className="w-[260px] h-[36px] border-[1px] p-2 rounded-md border-stone-700 font-normal placeholder:text-black" placeholder="Name"></input>
                        <input className="w-[260px] h-[36px] border-[1px] p-2 rounded-md border-stone-700 font-normal placeholder:text-black" placeholder="Area, City"></input>
                        <input className="w-[260px] h-[36px] border-[1px] p-2 rounded-md border-stone-700 font-normal placeholder:text-black" placeholder="Whatspp Number"></input>
                        <input className="w-[260px] h-[36px] border-[1px] p-2 rounded-md border-stone-700 font-normal placeholder:text-black" placeholder="Contact Number"></input>
                    </div>
                    <div className="flex flex-col gap-4">
                        <textarea className="w-[350px] h-[92px] border-[1px] p-2 rounded-md border-stone-700 font-normal placeholder:text-black" placeholder="Description"></textarea>
                        <input className="w-[260px] h-[36px] border-[1px] p-2 rounded-md border-stone-700 font-normal placeholder:text-black" placeholder="Expertise"></input>
                        <input className="w-[260px] h-[36px] border-[1px] p-2 rounded-md border-stone-700 font-normal placeholder:text-black" placeholder="Starting Price"></input>
                    </div>
                </div>
            </div>
        </div>
    )
}