import Image from "next/image"
import Ratings from "./Ratings"

export default function ArtistReviews() {
    return (
        <section className="flex flex-col items-center gap-4 w-[1120px] h-[451px] rounded-xl border-2 shadow-2xl shadow-[#0000001F] mt-2">
            <div className="flex mt-8 justify-center items-center">
                <div className="w-[761px] h-[122px]">
                    <textarea className="p-2 w-full h-full rounded-xl border-2  shadow-[#F27BBD] border-[#F27BBD]" placeholder="write a review..."></textarea>
                </div>
                <div className="flex flex-col pl-2 gap-3 min-w-[290px] h-[122px]">
                    <h1>Rate Now</h1>
                    <div className="flex items-center">
                        <div className="p-1">
                            <Image src="/images/illustrations/star.png" alt="" height={39} width={39} className="object-contain" />
                        </div>
                        <div className="p-1">
                            <Image src="/images/illustrations/star.png" alt="" height={39} width={39} className="object-contain" />
                        </div>
                        <div className="p-1">
                            <Image src="/images/illustrations/star.png" alt="" height={39} width={39} className="object-contain" />
                        </div>
                        <div className="p-1">
                            <Image src="/images/illustrations/star.png" alt="" height={39} width={39} className="object-contain" />
                        </div>
                        <div className="p-1">
                            <Image src="/images/illustrations/star.png" alt="" height={39} width={39} className="object-contain" />
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <button className="w-[109px] h-[27px] bg-[#EA2793] rounded-full">Add Photos</button>
                        <button className="w-[109px] h-[27px] bg-[#EA2793] rounded-full">Submit</button>
                    </div>

                </div>
            </div>
            <div className="grid grid-cols-3  w-[1064px] max-h-[186px] gap-0 p-2">
                <div className="flex flex-col min-h-[131px] max-w-[330px] rounded-xl bg-[#F7FF003B]">
                    <Ratings />
                    <p className="pl-2 font-normal text-base">The Service was really amazing.love your work</p>
                    <h1 className="mt-4 pl-2 font-semibold pb-4">-Himanshu Chavhan</h1>
                </div>
                <div className="min-h-[131px] max-w-[330px] rounded-xl bg-[#F7FF003B]">
                    <Ratings />
                    <p className="pl-2 font-normal text-base">The Service was really amazing.but you need to focus upon customer management and also use new products</p>
                    <h1 className="mt-4 pl-2 font-semibold pb-4">-Himanshu Chavhan</h1>
                </div>
                <div className="min-h-[131px] max-w-[330px] rounded-xl bg-[#F7FF003B]">
                    <Ratings />
                    <p className="pl-2 font-normal text-base">Good !!</p>
                    <h1 className="mt-4 pl-2 font-semibold pb-4">-Himanshu Chavhan</h1>
                </div>
            </div>
            <button>See More Reviews</button>
        </section>
    )
}