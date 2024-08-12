import Image from "next/image"

export default function Founder() {
    return (
        <div className="flex items-center justify-center px-4 md:px-0 mt-20 md:mt-28">
            <div className="bg-[#1640D6] w-full max-w-[374px] md:max-w-[1120px] p-4 md:p-6 rounded-md">
                <div className="flex flex-col md:flex-row md:items-center md:gap-6">
                    <div className="flex items-center mb-4 md:mb-0">
                        <Image 
                            src="/CEO.jpg" 
                            alt="CEO" 
                            height={130} 
                            width={132} 
                            className="h-[70px] w-[70px] md:h-[130px] md:w-[132px] rounded-full object-cover"
                        />
                        <div className="md:hidden ml-4">
                            <h1 className="text-lg text-black font-bold font-[sans-serif]">Vaibhav Janunkar</h1>
                            <h2 className="text-sm italic text-black font-[sans-serif]">CEO</h2>
                        </div>
                    </div>
                    <div className="flex-1">
                        <p className="text-white text-sm md:text-base mb-4 font-[sans-serif]">
                            The app is designed to be extremely user-friendly. Any user searching for makeup services will have their inquiries directly visible in the makeup &apos; lead box. We encourage all makeup artists to register and create their profiles on the MUA app to take advantage of these benefits and grow their business.<br /><br />
                            Join MUA today and showcase your talent to a wider audience!
                        </p>
                        <div className="hidden md:block">
                            <h1 className="text-black font-bold font-[sans-serif]">Vaibhav Janunkar</h1>
                            <h2 className="text-black italic font-[sans-serif]">CEO</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}