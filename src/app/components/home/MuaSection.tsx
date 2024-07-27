'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';


function MuaSection() {
  return (
    <div className="w-full">
      <div>
        <Image src="/MUA_Banner.png" alt="" width={1440} height={300} className='w-full h-[90px] md:h-64' />
      </div>
      <div className="flex flex-col mt-10 md:mt-20 justify-center items-center">
        <div className='flex flex-col items-center max-w-[350px] md:max-w-[658px] h-44 md:h-[300px] text-wrap'>
          <h1 className="font-semibold font-[Saira] text-2xl md:text-5xl leading-tight text-black z-20">&quot;<span className="text-pink-500 font-semibold font-[Saira] text-2xl md:text-5xl z-20">Beauty</span> At Your Fingertips : Your Ultimate <span className="text-pink-500 font-semibold font-[Saira] text-2xl md:text-5xl z-20">Make-Up Artist</span> Booking Place.&quot;</h1>
          <Link href="/pages/artistlisting">
            <button className="bg-[#EA2793] w-24 md:w-28 h-6 md:h-7 rounded-full text-white font-semibold text-xs md:text-sm mt-7 md:mt-10 hover:shadow-md hover:shadow-[#F27BBD]">Check Out !</button>
          </Link>
        </div>
      </div>
      <div className='relative'>
        <ul className='absolute ml-5 md:ml-0 mt-12 md:mt-0 md:flex md:flex-col md:items-center md:justify-center w-full md:w-[720px] h-[333px] md:h-[628px] font-[Staatliches] text-white text-xs md:text-3xl leading-snug font-normal z-20'>
          <li>WEDDING MAKEUP ARTIST</li>
          <li>PRE SHOOT MAKEUP ARTIST</li>
          <li>ALBUM SHOOT MAKEUP ARTIST</li>
          <li>CELEBRITY MAKEUP ARTIST</li>
          <li>CORPORATE EVENTS MAKEUP ARTIST</li>
          <button className='text-white bg-[black] w-[65px] md:w-[110px]  h-[17px] md:h-[27px] text-[10px] md:text-sm font-normal mt-4 md:mt-10 rounded-full'>And More ...</button>
        </ul>
        <Image src="/poster.jpg" alt="" width={1440} height={628} quality={100} className='object-cover object-left w-full h-[200px] md:h-[580px]' />
      </div>
    </div>
  );
};

export default MuaSection;
