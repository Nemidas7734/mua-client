import Image from "next/image"

export default function ArtistsCard(){
    return(
        <div className="relative w-[355px] h-[273px] rounded-xl border border-pink-300 shadow-sm shadow-pink-400">
            <div className="absolute w-full h-[135px] p-2 pt-3 rounded-xl z-20">
                <Image src="/Hero2.jpg" alt="" width={350} height={135} className="w-full h-full object-cover rounded-xl"/>
            </div>
            <div className="mt-24 absolute w-full h-[176px] rounded-xl bg-gradient-to-r from-[#EA2793] to-[#FFFFFF]">
                <div className="mt-8 p-2">
                    <h1 className="text-xl font-bold text-white">Dashing Makeover</h1>
                    <div className="flex flex-row items-center w-[80px] h-[12px]">
                        <div><Image src="/images/illustrations/location.png" alt="" width={12} height={12} className="object-cover"/></div>
                        <h1 className="text-xs font-light">Katraj,Pune</h1>
                    </div>
                    <h1 className="text-xs font-light pl-3">Hair Styling, Draping, Makeup, False Lashes +</h1>
                    <h1 className="text-xs font-light pl-3">Experience 3+ years</h1>
                    <p className="text-xs font-light pl-3">Hi !!!<br></br>Elevate Your Beauty Experience with Kritika.</p>
                    <h1 className="text-xs font-bold text-white mt-1 pl-3">Starting Price : <span className="text-[15px] font-bold text-black">Rs.7000 </span>onwards</h1>
                </div>
            </div>
        </div>
    )
}