"use client";

import Image from "next/image"
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/app/lib/store/authStore'

export default function Hero() {
    const router = useRouter()
    const { user, isLoading } = useAuthStore()


    const handleClick = () => {
        console.log("Auth state:", { user, isLoading }) // Debugging log
        if (user) {
            router.push('/pages/artistlisting')
        } else {
            console.log("User not logged in, redirecting to login") // Debugging log
            router.push('/pages/login')
        }
    }

    return (
        <div className="relative  md:pt-12">
            <div className="relative w-full h-[247px] md:h-[548px]">
                <Image src="/images/Hero.png" alt="Hero image"
                    sizes="100vw"
                    priority
                    fill
                    style={{
                        objectFit: 'cover',
                    }}
                    className="z-10 object-cover "
                />
            </div>
            <div className="absolute p-6 max-w-[270px] md:max-w-[565px] text-wrap top-10 md:top-48 md:left-20 z-20">
                <h1 className="max-sm:hidden font-normal text-[10px] md:text-xs mb-2 md:mb-0 text-white">&quot;Discover Beauty at Your Doorstep with MUA: Your Personal Makeup Artist Awaits.&quot;</h1>
                <h1 className="font-normal font-[Staatliches] text-[22px] md:text-5xl leading-7 md:leading-normal text-white z-20">Find The Best <span className="text-[#EA2793] font-bold text-[22px] md:text-5xl z-20">Make-Up</span> Artist For You.</h1>
                <button
                    onClick={handleClick}
                    className="bg-transparent w-16 md:w-32 h-5 md:h-10 rounded-full font-semibold text-white border  border-pink-500 text-[10px] md:text-sm mt-4 md:mt-8 hover:shadow-md  hover:shadow-[#F27BBD]"
                >
                    Click here !
                </button>
            </div>
        </div>
    )
}