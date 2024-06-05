import Image from "next/image";
import Navbar from "./components/Navbar";
import { Span } from "next/dist/trace";
import City from "./components/City";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className="">
      <div className="absolute p-6 max-w-96 text-wrap top-48 left-48">
          <h1 className="font-bold text-5xl leading-normal text-white z-20">Find The Best <span className="text-pink-400 font-bold text-5xl z-20">Make-Up</span> Artist For You.</h1>
        </div>
        <Image src="/images/Hero.png" alt="Hero image"
                  quality={100}
                  height={1300}
                  width={1600}
                  sizes="100vw"
                  style={{
                    objectFit: 'cover',
                    // objectPosition: '80% 40%',
                    height: '500px',
                    width: '100vw',
                  }}
                  className="z-10"
        />
      </div>
      <City/>
    </main>
  );
}
