import Image from "next/image"

export default function Founder(){
    return(
        <section className="flex justify-center mt-28 ">
            <div className="flex items-center justify-center bg-[#1640D6] w-[1100px] h-48">
                <div className="flex items-center justify-center gap-10 p-4">
                    <Image src="/gallery/gallery_1.jpeg" alt="" height={80} width={120} className="rounded-full"/>
                    <div className="flex-col">
                        <div className="text-white text-wrap max-w-[800px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eius, voluptas illum repudiandae earum fugiat, qui sunt aliquam harum, incidunt dolorum amet veritatis impedit suscipit ipsam consequuntur est labore. Dignissimos.</div>
                        <h1 className="font-semibold">Vaibhav Janunkar</h1>
                        <h2 className="italic">CEO</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}