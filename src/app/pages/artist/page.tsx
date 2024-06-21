import About from "@/app/components/artist/About"
import Profile from "@/app/components/artist/Profile"
import Reviews from "@/app/components/artist/Reviews"
import Image from "next/image"

export default function Artist(){
    return(
        <>
        <section className="flex justify-center">
            <div className="flex gap-10 mt-14">
                <div className="w-[645px] min-h-[890px] mb-32">
                    <div className="w-full max-h-96 mb-20 ">
                        <Image src="/images/Hero.png" alt="" height={360} width={645} className="h-[356px] mb-4 object-cover object-right rounded-md"/>
                        <div className="flex justify-end mr-20 transform -translate-y-28">
                            <div className="h-[154px] w-[167px] bg-white">
                                <Image src="/gallery/gallery_4.jpeg" alt="" height={150} width={167} className="h-[154px] w-[167px] object-cover object-top rounded-md"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-[565px] h-10 bg-white border border-gray-400 mb-6 shadow-xl shadow-slate-300 rounded-xl">
                        <div className="flex w-[260px] h-10 justify-evenly items-center">
                            <h1 className="hover:text-pink-600">Gallery</h1>
                            <h1 className="hover:text-pink-600">About</h1>
                            <h1 className="hover:text-pink-600">Reviews</h1>
                        </div>    
                    </div>
                    <div className="bg-[#FDFFC2] w-[565px] h-[404px] flex flex-col justify-center gap-4 rounded-lg">
                        <div className="w-full h-8 flex justify-evenly  border-b-[2px] border-black">
                            <h1>Photos</h1>
                            <h1>Videos</h1>
                        </div>
                        <div className="flex flex-row justify-center items-center">
                            <div className="w-[462px] h-[319px] p-2 grid grid-rows-3 grid-flow-col gap-4 justify-between">
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
                    <About/>   
                </div> 
                <div className="w-[400px] h-[412px]">
                    <Profile/>
                </div>
            </div>
        </section>
            <Reviews/>
       </>    
    )
}