import Image from "next/image"

export default function Profile() {
    return (
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
                                <Image src="/images/illustrations/add.png" alt="" width={15} height={15} className="object-cover" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 mt-2">
                            <div className="flex items-center justify-between w-[253px] h-[48px] border border-black">
                                <div className="flex justify-center items-center w-[52px] h-[48px] bg-blue-500">
                                    <Image src="/images/illustrations/add.png" alt="" width={30} height={30} className="object-cover" />
                                </div>
                                <div className="w-[177px] text-wrap text-sm">Import Images</div>
                            </div>
                            <div className="flex items-center justify-between w-[253px] h-[48px] border border-black">
                                <div className="flex justify-center items-center w-[52px] h-[48px] bg-blue-500">
                                    <Image src="/images/illustrations/add.png" alt="" width={30} height={30} className="object-cover" />
                                </div>
                                <div className="w-[177px] text-wrap text-sm">Import Videos</div>
                            </div>
                            <div className="flex items-center justify-between w-[253px] h-[48px] border border-black">
                                <div className="flex justify-center items-center w-[52px] h-[48px] bg-blue-500">
                                    <Image src="/images/illustrations/add.png" alt="" width={30} height={30} className="object-cover" />
                                </div>
                                <div className="w-[177px] text-wrap text-sm">Share Link</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[2px] h-[560px] bg-black"></div>

                <div className="flex flex-col gap-8 mt-2 h-[560px] w-[713px] ">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-1" >
                            <div className="text-xl">Description</div>
                            <div className="w-4 h-4 flex justify-center items-center mr-2">
                                    <Image src="/images/illustrations/add.png" alt="" width={15} height={15} className="object-cover" />
                            </div>
                        </div>
                        <textarea
                            name="postContent"
                            defaultValue="Hi !!!                                                                                           Elevate Your Beauty Experience with Ankita"
                            rows={4}
                            cols={40}
                            className="border border-black w-[350px] h-[65px] p-2 text-xs"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-1" >
                            <div className="text-xl ">Expertise</div>
                            <div className="w-4 h-4 flex justify-center items-center mr-2">
                                    <Image src="/images/illustrations/add.png" alt="" width={15} height={15} className="object-cover" />
                            </div>
                        </div>
                        <textarea
                            name="postContent"
                            defaultValue="Hair Styling, Draping, Makeup, False Lashes"
                            rows={4}
                            cols={40}
                            className="border border-black w-[350px] h-[65px] p-2 text-xs"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-1" >
                            <div className="text-xl">About</div>
                            <div className="w-4 h-4 flex justify-center items-center mr-2">
                                    <Image src="/images/illustrations/add.png" alt="" width={15} height={15} className="object-cover" />
                            </div>
                        </div>
                        <textarea
                            name="postContent"
                            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et pellentesque elit, pretium ullamcorper dolor. Suspendisse mattis porta tortor id feugiat. In mollis venenatis erat, sit amet maximus sapien tristique id.

                                            Morbi sed leo quis quam egestas tincidunt.
                                            Sed tempus libero at nibh auctor ornare.
                                            Quisque rutrum tortor quis pulvinar sodales.
                                            Phasellus egestas diam eget malesuada scelerisque.
                                            Mauris maximus metus ut mattis luctus"
                            rows={4}
                            cols={40}
                            className="border border-black w-[713px] h-[232px] p-2 text-xs"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-[#FDFFC2] w-[1025px] h-[403px] mt-24 mb-14 flex flex-col justify-center gap-4 rounded-lg">
                        <div className="w-full h-8 flex justify-evenly  border-b-[2px] border-black">
                            <h1>Photos</h1>
                            <h1>Videos</h1>
                        </div>
                        <div className="flex flex-row justify-center items-center">
                            <div className="w-[462px] h-[319px] p-2 grid grid-rows-2 grid-flow-col gap-4 justify-center">
                                <div className="w-24 h-[87px] border-[3px] border-white bg-black "></div>
                                <div className="w-24 h-[87px] border-[3px] border-white bg-black "></div>
                                <div className="w-24 h-[87px] border-[3px] border-white bg-black "></div>
                                <div className="w-24 h-[87px] border-[3px] border-white bg-black "></div>
                                <div className="w-24 h-[87px] border-[3px] border-white bg-black "></div>
                                <div className="w-24 h-[87px] border-[3px] border-white bg-black "></div>
                                <div className="w-24 h-[87px] border-[3px] border-white bg-black "></div>
                                <div className="w-24 h-[87px] border-[3px] border-white bg-black "></div>
                                <div className="w-24 h-[87px] border-[3px] border-white bg-black "></div>
                                <div className="w-24 h-[87px] border-[3px] border-white bg-black "></div>
                                <div className="w-24 h-[87px] border-[3px] border-white bg-black "></div>
                                <div className="w-24 h-[87px] border-[3px] border-white bg-black "></div>
                               
                            </div>
                        </div>
                    </div> 
        </section>
    )
}