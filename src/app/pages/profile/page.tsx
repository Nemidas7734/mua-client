import Image from "next/image"

export default function Profile(){
    return(
        <section className="flex flex-col items-center mt-16">
            <div className="w-44 h-20 text-2xl font-bold font-sans">Profile</div>
            <div className="flex justify-center gap-4 mt-10">
                <div className="h-[560px] w-[265px] ">
                    <div className="flex flex-col gap-6">
                        <div className="w-full h-[263px] rounded mt-2">
                            <Image src="/profile_pic.jpeg" alt="profile pic" width={265} height={263} className="object-cover object-top h-full rounded-md" />
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="font-bold text-xl">Ankita Bankar</div>
                            <div className="w-4 h-4 flex justify-center items-center mr-2">
                                <Image src="/images/illustrations/add.png" alt="" width={15} height={15} className="object-cover"/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 mt-2">
                            <div className="flex items-center justify-between w-[253px] h-[48px] border border-black">
                                    <div className="flex justify-center items-center w-[52px] h-[48px] bg-blue-500">
                                        <Image src="/images/illustrations/add.png" alt="" width={30} height={30} className="object-cover"/>
                                    </div>
                                    <div className="w-[177px] text-wrap text-sm">Import Images</div>
                            </div>
                            <div className="flex items-center justify-between w-[253px] h-[48px] border border-black">
                                    <div className="flex justify-center items-center w-[52px] h-[48px] bg-blue-500">
                                        <Image src="/images/illustrations/add.png" alt="" width={30} height={30} className="object-cover"/>
                                    </div>
                                    <div className="w-[177px] text-wrap text-sm">Import Videos</div>
                            </div>
                            <div className="flex items-center justify-between w-[253px] h-[48px] border border-black">
                                    <div className="flex justify-center items-center w-[52px] h-[48px] bg-blue-500">
                                        <Image src="/images/illustrations/add.png" alt="" width={30} height={30} className="object-cover"/>
                                    </div>
                                    <div className="w-[177px] text-wrap text-sm">Share Link</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[2px] h-[560px] bg-black"></div>
                <div className="bg-pink-200 h-[560px] w-[713px] "></div>
            </div>
        </section>
    )
}