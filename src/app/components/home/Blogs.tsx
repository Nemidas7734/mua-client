import Image from "next/image"
export default function Blogs() {
    return (
        <section id="blogs" className="flex flex-col  justify-center items-center gap-10 md:gap-16 mb-4 md:mb-6">
            <h1 className="mt-10 md:mt-16 text-2xl md:text-3xl font-bold">Blogs</h1>
            <div className="md:grid md:grid-flow-col md:justify-center md:gap-20 w-[374px] md:w-[1100px] md:mb-10">
                <div className="max-sm:flex max-sm:gap-4 bg-gradient-to-b from-[#001B79] to-[#1640D6] rounded-lg shadow-2xl h-[216px] md:h-[580PX] w-[374px] md:w-[430PX]">
                    <Image src="/gallery/gallery_1.jpeg" alt="" height={200} width={200} className="max-sm:w-[69px] max-sm:h-[75px] p-[6px] mt-[6px] md:mt-0 md:p-6 md:m-auto rounded-lg md:rounded-full" />
                    <div className="md:pr-10 pt-2 w-[270px] md:w-[400px] text-wrap md:pl-6 text-xs text-white md:text-lg">The app is designed to be extremely user-friendly. Any user searching for makeup services will have their inquiries directly visible in the makeup artist&apos;s lead box. We encourage all makeup artists to register and create their profiles on the MUA app to take advantage of these benefits and grow their business.<br></br>Join MUA today and showcase your talent to a wider audience!.</div>
                </div>
                <div className="max-sm:hidden bg-gradient-to-b from-[#001B79] to-[#1640D6] rounded-lg shadow-2xl h-[580px] w-[430px]">
                    <Image src="/gallery/gallery_1.jpeg" alt="" height={200} width={200} className="p-6  m-auto rounded-full" />
                    <div className="pr-10 pt-2 text-wrap pl-6 text-white text-lg">The MUA stands out for its unique features that cater specifically to makeup artists. On this site, makeup artists can create their own profiles and upload photos and videos of their work. This allows potential customers to view their portfolio and place orders directly. Additionally, the app offers options for date locking and bookings, ensuring artists receive a robust response.</div>

                </div>
            </div>
            <div>
                <Image src="/MUA_Banner.png" alt="" width={1440} height={300} className='w-full h-[90px] md:h-64' />
            </div>
        </section>
    )
}