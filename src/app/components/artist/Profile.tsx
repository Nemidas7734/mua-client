import Image from "next/image"
export default function Profile(){
    return(
        <section className="flex flex-col">
            <div className="w-full h-[101px] flex flex-col justify-center bg-gradient-to-b from-[#EA2793] to-[#F27BBD] shadow-xl shadow-gray-400 rounded-md">
                <h1 className="ml-6 text-3xl font-bold">Ankita Bankar</h1>
                <div className="ml-6 flex gap-2"><Image src = "/images/illustrations/star.png" alt = "" height={12} width={12} className="object-contain"/><Image src = "/images/illustrations/star.png" alt = "" height={12} width={12} className="object-contain"/><Image src = "/images/illustrations/star.png" alt = "" height={12} width={12} className="object-contain"/><Image src = "/images/illustrations/star.png" alt = "" height={12} width={12} className="object-contain"/><Image src = "/images/illustrations/star.png" alt = "" height={12} width={12} className="object-contain"/><h1 className="font-semibold">5.0</h1></div>
            </div>
            <div className="w-full h-[311px]" >
                <div className="p-6">
                    <h1 className="text-wrap font-normal text-lg">Hii ...</h1>
                    <p className="text-wrap font-normal text-lg">Elevate Your Beauty Experience With Ankita.</p>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    )
}