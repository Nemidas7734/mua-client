import Image from "next/image"
export default function Blogs(){
    return(
        <section className="flex flex-col gap-16 mb-6">
            <h1 className="flex justify-center mt-16 text-2xl font-bold">BLOGS</h1>
            <div className="flex justify-center ">
                <div className="grid grid-flow-col justify-between  w-[1100px]">
                    <div className="bg-[#F27BBD] rounded-lg shadow-2xl h-[580PX] w-[430PX]">
                        <Image src="/gallery/gallery_1.jpeg" alt="" height={150} width={220} className="p-6 pt-2 rounded-full"/>
                        <div className="pr-10 pt-2 text-wrap pl-6 text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                        <h1 className="pl-6 pt-6 text-sm">Read More...</h1>
                    </div>
                    <div className="bg-[#F27BBD] rounded-lg shadow-2xl h-[580px] w-[430px]">
                        <Image src="/gallery/gallery_1.jpeg" alt="" height={150} width={220} className="p-6 pt-2 rounded-full"/>
                        <div className="pr-10 pt-2 text-wrap pl-6 text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                        <h1 className="pl-6 pt-6 text-sm">Read More...</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}