import Image from "next/image"
import { FC } from 'react'

interface BlogCardProps {
    imageSrc: string;
    text: string;
    className?: string;
}

const BlogCard: FC<BlogCardProps> = ({ imageSrc, text, className = "" }) => {
    return (
        <div className={`bg-gradient-to-b from-[#001B79] to-[#1640d6] rounded-lg shadow-2xl w-full min-h-[232px] md:min-h-[522px] md:w-[430px] p-2 md:p-6 flex md:flex-col items-start md:items-center gap-4 md:gap-10 ${className}`}>
            <Image
                src={imageSrc}
                alt="Blog image"
                height={120}
                width={120}
                className="object-cover min-w-[70px] h-[75px] md:w-[120px] md:h-[120px] rounded-lg md:rounded-full"
            />
            <div className="text-white max-w-[270px] md:max-w-[330px] text-wrap text-[13px] font-normal md:text-base">
                {text}
            </div>
        </div>
    )
}

const Blogs: FC = () => {
    return (
        <>
            <section id="blogs" className="flex flex-col justify-center items-center gap-8 md:gap-16 mb-4 md:mb-6 px-4 md:px-0">
                <h1 className="mt-10 md:mt-16 text-2xl md:text-3xl font-bold">Blogs</h1>
                <div className="w-full max-w-[374px]  md:max-w-[1100px] flex flex-col md:flex-row md:justify-center md:gap-8 lg:gap-20">
                    <BlogCard
                        imageSrc="/CEO.jpg"
                        text="The app is designed to be extremely user-friendly. Any user searching for makeup services will have their inquiries directly visible in the makeup artist's lead box. We encourage all makeup artists to register and create their profiles on the MUA app to take advantage of these benefits and grow their business. Join MUA today and showcase your talent to a wider audience!"
                    />
                    <BlogCard
                        imageSrc="/CEO.jpg"
                        text="The MUA stands out for its unique features that cater specifically to makeup artists. On this site, makeup artists can create their own profiles and upload photos and videos of their work. This allows potential customers to view their portfolio and place orders directly. Additionally, the app offers options for date locking and bookings, ensuring artists receive a robust response."
                        className="hidden md:flex"
                    />
                </div>
            </section>
            <div>
                <Image src="/MUA_Banner.png" alt="" width={1440} height={300} style={{ objectPosition: "30% 100%" }} className='w-auto h-[90px] mt-8 md:mt-10 object-cover object-left md:h-64' />
            </div>
        </>
    )
}

export default Blogs