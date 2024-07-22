import Image from "next/image"
import Link from "next/link"

export default function Hero() {
    return (
        <div className="">
            <div className="absolute p-6 max-w-[565px] text-wrap top-48 left-20">
                <h1 className="font-normal text-xs text-white">&quot;Discover Beauty at Your Doorstep with MUA: Your Personal Makeup Artist Awaits.&quot;</h1>
                <h1 className="font-normal font-[Staatliches] text-5xl leading-normal text-white z-20">Find The Best <span className="text-pink-400 font-bold text-5xl z-20">Make-Up</span> Artist For You.</h1>
                <Link href="/pages/artistlisting">
                    <button className="bg-transparent w-32 h-10 rounded-full font-semibold text-white border  border-pink-500 text-sm mt-10 hover:shadow-md hover:shadow-[#F27BBD]">Click here !</button>
                </Link>
            </div>
            <Image src="/images/Hero.png" alt="Hero image"
                quality={100}
                height={1300}
                width={1600}
                sizes="100vw"
                style={{
                    objectFit: 'cover',
                    // objectPosition: '80% 40%',
                    height: '548px',
                    width: '100vw',
                }}
                className="z-10 pt-12"
            />
        </div>
    )
}