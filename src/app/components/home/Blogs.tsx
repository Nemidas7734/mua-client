import Image from "next/image"
export default function Blogs(){
    return(
        <section id="blogs" className="flex flex-col gap-16 mb-6">
            <h1 className="flex justify-center mt-16 text-2xl font-bold">BLOGS</h1>
            <div className="flex justify-center ">
                <div className="grid grid-flow-col justify-center gap-20  w-[1100px] mb-10">
                    <div className="bg-gradient-to-b from-[#001B79] to-[#1640D6] rounded-lg shadow-2xl h-[580PX] w-[430PX]">
                        <Image src="/gallery/gallery_1.jpeg" alt="" height={200} width={200} className="p-6 m-auto  rounded-full"/>
                        <div className="pr-10 pt-2 text-wrap pl-6 text-lg">The app is designed to be extremely user-friendly. Any user searching for makeup services will have their inquiries directly visible in the makeup artist&apos;s lead box. We encourage all makeup artists to register and create their profiles on the MUA app to take advantage of these benefits and grow their business.<br></br>Join MUA today and showcase your talent to a wider audience!.</div>
                        {/* <h1 className="pl-6 pt-6 text-sm">Read More...</h1> */}
                    </div>
                    <div className="bg-gradient-to-b from-[#001B79] to-[#1640D6] rounded-lg shadow-2xl h-[580px] w-[430px]">
                        <Image src="/gallery/gallery_1.jpeg" alt="" height={200} width={200} className="p-6  m-auto rounded-full"/>
                        <div className="pr-10 pt-2 text-wrap pl-6 text-lg">The MUA stands out for its unique features that cater specifically to makeup artists. On this site, makeup artists can create their own profiles and upload photos and videos of their work. This allows potential customers to view their portfolio and place orders directly. Additionally, the app offers options for date locking and bookings, ensuring artists receive a robust response.</div>
                        {/* <h1 className="pl-6 pt-6 text-sm">Read More...</h1> */}
                        
                    </div>
                </div>
            </div>
        </section>
    )
}