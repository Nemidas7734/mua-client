import Image from "next/image"

export default function Founder() {
    return (
        <div className="flex items-center justify-center mt-2 md:mt-5">
            <div className="md:flex md:items-center md:justify-center md:gap-10 bg-[#1640D6] mt-20 md:mt-28 w-[374px] md:w-[1120px] h-[216px] md:h-48 p-4 rounded-md">
                <div className="flex justify-between">
                    <Image src="/CEO.jpg" alt="" height={130} width={132} className="h-[70px] md:h-[130px] w-[71px] md:w-[132px] rounded-full object-cover" />
                    <div className="md:hidden flex-col pt-2 pr-4">
                        <h1 className="text-xl text-white font-bold">Vaibhav Janunkar</h1>
                        <h2 className="italic text-white flex justify-end">CEO</h2>
                    </div>
                </div>
                <div className="flex-col">
                    <div className="md:text-white mt-2 md:mt-0 text-wrap text-xs md:text-sm max-w-[350px] md:max-w-[800px]">The app is designed to be extremely user-friendly. Any user searching for makeup services will have their inquiries directly visible in the makeup artist&apos;s lead box. We encourage all makeup artists to register and create their profiles on the MUA app to take advantage of these benefits and grow their business.<br></br>Join MUA today and showcase your talent to a wider audience!.</div>
                    <div className="max-sm:hidden flex-col mt-1">
                        <h1 className="font-semibold">Vaibhav Janunkar</h1>
                        <h2 className="italic">CEO</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}