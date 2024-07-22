'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';


function MuaSection() {
  return (
    <div className="w-full">
      <div>
        <Image src="/MUA_Banner.png" alt="" width={1440} height={300} className='w-full h-64' />
      </div>
      <div className="flex flex-col mt-20 justify-center items-center">
        <div className='flex flex-col items-center max-w-[658px] h-[300px] text-wrap'>
          <h1 className="font-semibold font-[Saira] text-5xl leading-tight text-black z-20">&quot;<span className="text-pink-500 font-semibold font-[Saira] text-5xl z-20">Beauty</span> At Your Fingertips : Your Ultimate <span className="text-pink-500 font-semibold font-[Saira] text-5xl z-20">Make-Up Artist</span> Booking Place.&quot;</h1>
          <Link href="/pages/artistlisting">
            <button className="bg-[#EA2793] w-28 h-7 rounded-full text-white font-semibold text-sm mt-10 hover:shadow-md hover:shadow-[#F27BBD]">Check Out !</button>
          </Link>
        </div>
      </div>
      <div className='relative'>
        <ul className='absolute flex flex-col items-center justify-center w-[720px] h-[628px] font-[Staatliches] text-white text-3xl leading-snug font-normal z-20'>
          <li>WEDDING MAKEUP ARTIST</li>
          <li>PRE SHOOT MAKEUP ARTIST</li>
          <li>ALBUM SHOOT MAKEUP ARTIST</li>
          <li>CELEBRITY MAKEUP ARTIST</li>
          <li>CORPORATE EVENTS MAKEUP ARTIST</li>
          <button className='text-white bg-[black] w-[110px] h-[27px] text-sm font-normal mt-10 rounded-full'>And More ...</button>
        </ul>
        <Image src="/poster.jpg" alt="" width={1440} height={628} quality={100} className='w-full h-[580px]' />
      </div>
    </div>
  );
};

export default MuaSection;
