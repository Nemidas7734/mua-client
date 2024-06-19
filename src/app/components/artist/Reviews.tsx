import Image from "next/image"

export default function Reviews(){
    return(
        <section className="flex flex-col justify-center gap-4 ml-16 mt-10">
            <h1 className="mb-10">Reviews</h1>
            <div className="flex justify-center gap-4 rounded-md">
                <div className="w-[292px] h-[127px] flex flex-col gap-2 bg-[#D9D9D9]">
                    <div className="flex flex-row justify-between w-full h-[17px]">
                        <h1>Name</h1>
                        <div className="flex flex-row justify-center  gap-1">
                            <h2>5</h2>
                            <div className="p-1">
                                <Image src = "/images/illustrations/star.png" alt = "" height={14} width={14} className="object-contain"/></div>
                            </div>
                    </div>
                    <div className="text-wrap w-full h-[48px]">Reviews based on experience</div>
                    <div className="flex justify-evenly">
                        <div className="h-[16px] w-auto bg-slate-500">Excellent</div>
                        <div className="h-[16px] w-auto bg-slate-500">Good Job</div>
                        <div className="h-[16px] w-auto bg-slate-500">Great service</div>
                    </div>
                </div>
                <div className="w-[292px] h-[127px] flex flex-col gap-2 bg-[#D9D9D9]">
                    <div className="flex justify-between w-full h-[17px]">
                        <h1>Name</h1>
                        <div className="flex flex-row justify-center  gap-1">
                            <h2>5</h2>
                            <div className="p-1">
                                <Image src = "/images/illustrations/star.png" alt = "" height={14} width={14} className="object-contain"/></div>
                            </div>
                    </div>
                    <div className="text-wrap w-full h-[48px]">Reviews based on experience</div>
                    <div className="flex justify-evenly">
                        <div className="h-[16px] w-auto bg-slate-500">Excellent</div>
                        <div className="h-[16px] w-auto bg-slate-500">Good Job</div>
                        <div className="h-[16px] w-auto bg-slate-500">Great service</div>
                    </div>
                </div>
                <div className="w-[292px] h-[127px] flex flex-col gap-2 bg-[#D9D9D9]">
                    <div className="flex justify-between w-full h-[17px]">
                        <h1>Name</h1>
                        <div className="flex flex-row justify-center  gap-1">
                            <h2>5</h2>
                            <div className="p-1">
                                <Image src = "/images/illustrations/star.png" alt = "" height={14} width={14} className="object-contain"/></div>
                            </div>
                    </div>
                    <div className="text-wrap w-full h-[48px]">Reviews based on experience</div>
                    <div className="flex justify-evenly">
                        <div className="h-[16px] w-auto bg-slate-500">Excellent</div>
                        <div className="h-[16px] w-auto bg-slate-500">Good Job</div>
                        <div className="h-[16px] w-auto bg-slate-500">Great service</div>
                    </div>
                </div>
                <div className="w-[292px] h-[127px] flex flex-col gap-2 bg-[#D9D9D9]">
                    <div className="flex justify-between w-full h-[17px]">
                        <h1>Name</h1>
                        <div className="flex flex-row justify-center  gap-1">
                            <h2>5</h2>
                            <div className="p-1">
                                <Image src = "/images/illustrations/star.png" alt = "" height={14} width={14} className="object-contain"/></div>
                            </div>
                    </div>
                    <div className="text-wrap w-full h-[48px]">Reviews based on experience</div>
                    <div className="flex justify-evenly">
                        <div className="h-[16px] w-auto bg-slate-500">Excellent</div>
                        <div className="h-[16px] w-auto bg-slate-500">Good Job</div>
                        <div className="h-[16px] w-auto bg-slate-500">Great service</div>
                    </div>
                </div>
            </div>
        </section>
    )
}