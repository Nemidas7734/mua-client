import Image from "next/image"
export default function Profile(){
    return(
        <section className="flex flex-col">
            <div className="w-full h-[101px] flex flex-col justify-center bg-gradient-to-b from-[#EA2793] to-[#F27BBD] shadow-xl shadow-gray-400 rounded-md">
                <h1 className="ml-6 text-3xl font-bold">Ankita Bankar</h1>
                <div className="ml-6 flex gap-2"><Image src = "/images/illustrations/star.png" alt = "" height={12} width={12} className="object-contain"/><Image src = "/images/illustrations/star.png" alt = "" height={12} width={12} className="object-contain"/><Image src = "/images/illustrations/star.png" alt = "" height={12} width={12} className="object-contain"/><Image src = "/images/illustrations/star.png" alt = "" height={12} width={12} className="object-contain"/><Image src = "/images/illustrations/star.png" alt = "" height={12} width={12} className="object-contain"/><h1 className="font-semibold">5.0</h1></div>
            </div>
            <div className="w-full h-[341px] shadow-xl rounded-md" >
                <div className="pt-4 pl-6">
                    <h1 className="text-wrap font-normal text-lg">Hii ...</h1>
                    <p className="text-wrap font-normal text-lg">Elevate Your Beauty Experience With Ankita.</p>
                    <hr className="h-[2px] my-1 w-full bg-black "></hr>
                </div>
                <div className="pt-2 pl-6">
                    <div className="flex gap-1">
                        <Image src = "/images/illustrations/location.png" alt = "" height={15} width={15} className="object-contain"/> 
                        <h1 className="text-wrap">Pune</h1>
                    </div>
                    <div className="flex gap-1">
                        <Image src = "/images/illustrations/makeup.png" alt = "" height={15} width={15} className="object-contain"/>
                        <h1 className="text-wrap">Hair Styling, Draping, Makeup, False Lashes</h1>
                    </div>
                    <div className="flex gap-1">
                        <Image src = "/images/illustrations/telephone.png" alt = "" height={15} width={15} className="object-contain"/> 
                        <h1 className="text-wrap">Contact</h1>
                    </div>
                    <hr className="h-[2px] my-1 w-full bg-black "></hr>
                </div>
                <div className="pt-2 pl-6">
                    <h1 className="font-bold text-xl">Starting Price</h1>
                    <h1 className="text-[#EA2793] text-lg">Rs. 20000 onwards</h1>
                    <hr className="h-[2px] my-1 w-full bg-black "></hr>
                </div>
                <div className="pt-4 pl-6 flex justify-between">
                    <button className="bg-[#F27BBD] p-2 w-[170px] h-[30px] rounded-full flex justify-center items-center text-white">Send Message</button>
                    <button className="bg-[#F27BBD] p-2 w-[170px] h-[30px] rounded-full flex justify-center items-center text-white">Contact</button>
                </div>
            </div>
        </section>
    )
}