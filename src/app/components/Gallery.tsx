import Image from "next/image"
export default function Gallery(){
    return(
        <div className="flex-col justify-center mt-14">
            <h2 className="flex justify-center font-bold text-4xl p-6 ">Gallery</h2>
            <div className="flex justify-center gap-4 mt-4 mb-10">
                <Image src="/images/Ellipse 1.png" alt="" height={240} width={260} quality={100} className="w-[265px] h-[227px]"/>
                <Image src="/images/Ellipse 2.png" alt="" height={240} width={260} quality={100} className="w-[265px] h-[227px]"/>
                <Image src="/images/Ellipse 1.png" alt="" height={240} width={260} quality={100} className="w-[265px] h-[227px]"/>
                <Image src="/images/Ellipse 2.png" alt="" height={240} width={260} quality={100} className="w-[265px] h-[227px]"/>
            </div>
        </div>
    )
}