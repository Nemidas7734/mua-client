import Image from "next/image"
import Link from "next/link"

export default function Hero() {
    return (
        <div className="relative">
            <div className="absolute p-6 max-w-[265px] md:max-w-[565px] text-wrap top-1/4 md:top-48 left-5 sm:left-20 z-20">
                <h1 className="font-normal text-[10px] md:text-xs text-white">&quot;Discover Beauty at Your Doorstep with MUA: Your Personal Makeup Artist Awaits.&quot;</h1>
                <h1 className="font-normal font-[Staatliches] text-3xl md:text-5xl md:leading-normal text-white z-20">Find The Best <span className="text-pink-400 font-bold text-3xl md:text-5xl z-20">Make-Up</span> Artist For You.</h1>
                <Link href="/pages/artistlisting">
                    <button className="bg-transparent w-24 md:w-32 h-7 md:h-10 rounded-full font-semibold text-white border  border-pink-500 text-sm mt-4 md:mt-8 hover:shadow-md hover:shadow-[#F27BBD]">Click here !</button>
                </Link>
            </div>
            <div className="relative w-full h-[400px] md:h-[548px]">
                <Image src="/images/Hero.png" alt="Hero image"
                    quality={100}
                    height={1300}
                    width={1600}
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                        objectPosition: '60% 60%',
                    }}
                    className="z-10 w-full h-full pt-10 max-sm:object-right md:pt-12"
                />
            </div>
        </div>
    )
}