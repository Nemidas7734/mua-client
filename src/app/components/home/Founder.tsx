import Image from "next/image"

export default function Founder(){
    return(
        // <section className="flex justify-center mt-28 ">
            <div className="flex items-center justify-center ">
                <div className="flex items-center justify-center gap-10 bg-[#1640D6] mt-28 w-[1120px] h-48 p-4 rounded-md">
                    <Image src="/CEO.jpg" alt="" height={80} width={120} className="h-[130px] w-[132px] rounded-full object-cover"/>
                    <div className="flex-col">
                        <div className="text-white text-wrap max-w-[800px]">The app is designed to be extremely user-friendly. Any user searching for makeup services will have their inquiries directly visible in the makeup artist's lead box. We encourage all makeup artists to register and create their profiles on the MUA app to take advantage of these benefits and grow their business.<br></br>Join MUA today and showcase your talent to a wider audience!.</div>
                        <h1 className="font-semibold">Vaibhav Janunkar</h1>
                        <h2 className="italic">CEO</h2>
                    </div>
                </div>
            </div>
        // </section
    )
}