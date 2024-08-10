"use client"
import Image from "next/image"
import { useRouter } from 'next/navigation'  
import { useAuthStore } from '@/app/lib/store/authStore'

export default function PopularCity() {
    const router = useRouter()
    const { user, isLoading } = useAuthStore()

    const handleClick = () => {
        // console.log("Auth state:", { user, isLoading }) 
        if (user) {
            router.push('/pages/artistlisting')
        } else {
            // console.log("User not logged in, redirecting to login")
            router.push('/pages/login')
        }
    }

    return (
        <div className="flex flex-col justify-center items-center h-[190px] md:h-[340px] bg-gradient-to-r from-[#F27BBD] to-[#FFFFFF]">
            <h2 className="mx-auto font-bold text-xl md:text-3xl">POPULAR CITIES</h2>
            <div className="relative flex justify-center items-center gap-6 md:gap-10 w-full md:w-[1167px] h-20 md:h-[104px] md:rounded-full bg-pink-200 mt-6 mb-6">
                <div onClick={handleClick} className="flex flex-col  gap-0 w-24 md:w-[120px] h-full">
                    <Image src="/pune.png" alt="" width={120} height={80} quality={100} className="h-14 md:h-20 w-24 md:w-[120px] object-cover pt-4 md:mt-3 md:pt-5 pl-1 md:pl-2 pr-1 md:pr-2 overflow-hidden" />
                    <h1 className="m-auto text-xs md:text-base font-normal">PUNE</h1>
                </div>
                <div onClick={handleClick} className="max-sm:hidden flex flex-col gap-0 w-24 md:w-[120px] h-full">
                    <Image src="/building.png" alt="" width={120} height={80} quality={100} className="h-14 md:h-20 w-24 md:w-[120px]  transform translate-y-2 overflow-hidden" />
                    <h1 className="m-auto text-xs md:text-base font-normal">AKOLA</h1>
                </div>
                <div onClick={handleClick} className="flex flex-col gap-0 w-24 md:w-[120px] h-full">
                    <Image src="/mumbai.png" alt="" width={120} height={80} quality={100} className="h-14 md:h-20 w-24 md:w-[120px] object-cover pt-2 md:pt-4 pl-1 md:pl-3 pr-1 md:pr-3 md:mt-1 overflow-hidden" />
                    <h1 className="m-auto text-xs md:text-base font-normal">MUMBAI</h1>
                </div>
                <div onClick={handleClick} className="max-sm:hidden flex flex-col gap-0 w-24 md:w-[120px] h-full">
                    <Image src="/building.png" alt="" width={120} height={80} quality={100} className="h-14 md:h-20 w-24 md:w-[120px]  transform translate-y-2 overflow-hidden" />
                    <h1 className="m-auto text-xs md:text-base font-normal">NASHIK</h1>
                </div>
                <div onClick={handleClick} className="flex flex-col gap-0 w-24 md:w-[120px] h-full">
                    <Image src="/delhi.png" alt="" width={120} height={80} quality={100} className="h-14 md:h-20 w-24 md:w-[120px] object-cover pt-2 md:pt-1 pl-1 md:pl-[14px] pr-1 md:pr-[14px] md:mt-5 overflow-hidden" />
                    <h1 className="m-auto text-xs md:text-base font-normal">DELHI</h1>
                </div>
                <div onClick={handleClick} className="max-sm:hidden flex flex-col gap-0 w-24 md:w-[120px] h-full">
                    <Image src="/building.png" alt="" width={120} height={80} quality={100} className="h-14 md:h-20 w-24 md:w-[120px]  transform translate-y-2 overflow-hidden" />
                    <h1 className="m-auto text-xs md:text-base font-normal">NAGPUR</h1>
                </div>
                <span onClick={handleClick} className="pr-2 md:pr-0"><Image src="/images/illustrations/add.png" alt="Explore more" height={40} width={40} quality={100} className="h-6 md:h-10 w-6 md:w-10 object-contain" /></span>
            </div>
        </div>
    )
}