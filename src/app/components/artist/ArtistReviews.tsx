import Image from "next/image"
import Ratings from "./Ratings"

export default function ArtistReviews() {
    return (
        <section className="flex flex-col items-center gap-4 w-full md:w-[1120px] h-[463px] md:h-[451px] rounded-xl border-2 shadow-2xl shadow-[#0000001F] mt-2">
            <div className="flex flex-col md:flex md:flex-row mt-8 md:justify-center md:items-center">
                <div className="w-[384px] md:w-[761px] h-[158px] md:h-[122px]">
                    <textarea className="p-2 w-full h-full rounded-xl border-2  shadow-[#F27BBD] border-[#F27BBD]" placeholder="write a review..."></textarea>
                </div>
                <div className="flex flex-row md:flex md:flex-col pl-2 gap-1 md:gap-3 min-w-[290px] md:h-[122px]">
                    <h1>Rate Now</h1>
                    <div className="flex items-center">
                        <div className="p-1">
                            <Image src="/images/illustrations/star.png" alt="" height={39} width={39} className="max-sm:h-[20px] max-sm:w-[20px] object-contain" />
                        </div>
                        <div className="p-1">
                            <Image src="/images/illustrations/star.png" alt="" height={39} width={39} className="max-sm:h-[20px] max-sm:w-[20px] object-contain" />
                        </div>
                        <div className="p-1">
                            <Image src="/images/illustrations/star.png" alt="" height={39} width={39} className="max-sm:h-[20px] max-sm:w-[20px] object-contain" />
                        </div>
                        <div className="p-1">
                            <Image src="/images/illustrations/star.png" alt="" height={39} width={39} className="max-sm:h-[20px] max-sm:w-[20px] object-contain" />
                        </div>
                        <div className="p-1">
                            <Image src="/images/illustrations/star.png" alt="" height={39} width={39} className="max-sm:h-[20px] max-sm:w-[20px] object-contain" />
                        </div>
                    </div>
                    <div className="flex gap-5 max-sm:hidden">
                        <button className="w-[109px] h-[27px] bg-[#EA2793] text-white text-sm rounded-full">Add Photos</button>
                        <button className="w-[109px] h-[27px] bg-[#EA2793] text-white text-sm rounded-full">Submit</button>
                    </div>
                </div>
                <button className="md:hidden w-[80px] md:w-[109px] h-[24px] md:h-[27px] mt-2 ml-2 bg-[#EA2793] text-white text-sm rounded-full">Submit</button>
            </div>
            <div className="md:grid md:grid-cols-3  md:w-[1064px] md:max-h-[186px] gap-0 p-2">
                <div className="p-1 flex flex-col min-h-[131px] max-w-[330px] rounded-xl bg-[#F7FF003B]">
                    <Ratings />
                    <p className="pl-2 font-normal text-base">The Service was really amazing.love your work</p>
                    <h1 className="mt-4 pl-2 font-semibold pb-4"> -Himanshu Chavhan</h1>
                </div>
                <div className="max-sm:hidden p-1 min-h-[131px] max-w-[330px] rounded-xl bg-[#F7FF003B]">
                    <Ratings />
                    <p className="pl-2 font-normal text-base">The Service was really amazing.but you need to focus upon customer management and also use new products</p>
                    <h1 className="mt-4 pl-2 font-semibold pb-4">-Himanshu Chavhan</h1>
                </div>
                <div className="max-sm:hidden p-1 min-h-[131px] max-w-[330px] rounded-xl bg-[#F7FF003B]">
                    <Ratings />
                    <p className="pl-2 font-normal text-base">Good !!</p>
                    <h1 className="mt-4 pl-2 font-semibold pb-4">-Himanshu Chavhan</h1>
                </div>
            </div>
            <button className="max-sm:hidden mt-2 font-semibold hover:underline hover:underline-offset-2">See all Reviews</button>
        </section>
    )
}