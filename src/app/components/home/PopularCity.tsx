import Image from "next/image"

export default function PopularCity() {
    return (
            <div className="flex flex-col justify-center items-center min-h-[340px] bg-gradient-to-r from-[#F27BBD] to-[#FFFFFF]">
                <h2 className="flex justify-center font-bold text-3xl">POPULAR CITIES</h2>
                <div className="relative flex-col w-[1170px] h-[104px] border-b-2 shadow-2xl shadow-[#EA2793] rounded-full bg-pink-200 mt-6">
                    <div className="flex justify-center items-center gap-11">
                        <Image src="/images/illustrations/red-fort.png" alt="" width={70} height={60} quality={100} />
                        <Image src="/images/illustrations/gate-of-india.png" alt="" width={80} height={70} quality={100} />
                        <Image src="/images/illustrations/red-fort.png" alt="" width={70} height={60} quality={100} />
                        <Image src="/images/illustrations/gate-of-india.png" alt="" width={80} height={70} quality={100} />
                        <Image src="/images/illustrations/red-fort.png" alt="" width={70} height={60} quality={100} />
                        <Image src="/images/illustrations/gate-of-india.png" alt="" width={80} height={70} quality={100} />
                        <Image src="/images/illustrations/red-fort.png" alt="" width={70} height={60} quality={100} />
                        <Image src="/images/illustrations/gate-of-india.png" alt="" width={80} height={70} quality={100} />
                        <Image src="/images/illustrations/red-fort.png" alt="" width={70} height={60} quality={100} />
                        <span className="mt-8"><Image src="/images/illustrations/add.png" alt="Explore more" height={40} width={40} quality={100} /></span>
                    </div>
                    <div className="flex items-start ml-10 gap-16">
                        <h6 className="text-md">DELHI</h6>
                        <h6 className="text-md">MUMBAI</h6>
                        <h6 className="text-md">DELHI</h6>
                        <h6 className="text-md">MUMBAI</h6>
                        <h6 className="text-md">DELHI</h6>
                        <h6 className="text-md">MUMBAI</h6>
                        <h6 className="text-md">DELHI</h6>
                        <h6 className="text-md">MUMBAI</h6>
                        <h6 className="text-md">DELHI</h6>
                    </div>
                </div>
            </div>
    )
}