'use client'
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/app/lib/store/authStore';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';

function MuaSection() {
  const router = useRouter();
  const { user } = useAuthStore();

  const handleCheckout = () => {
    if (user) {
      router.push('/pages/artistlisting');
    } else {
      router.push('/pages/login');
    }
  };

  return (
    <div className="w-full">
      <div className="mua-swiper-container relative pb-8 md:pb-12">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          initialSlide={1}
          pagination={{ 
            clickable: true,
            el: '.mua-swiper-container .swiper-pagination',
          }}
          modules={[Autoplay, Pagination]}
          className="w-full h-[90px] md:h-64"
        >
          <SwiperSlide>
            <Image src="/images/MuaSection1.jpg" alt="MUA Banner" layout="fill" objectFit="cover" objectPosition="30% 100%" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/MuaSection2.jpg" alt="MUA Banner 2" layout="fill" objectFit="cover" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/MuaSection3.jpg" alt="MUA Banner 3" layout="fill" objectFit="cover" />
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination absolute bottom-0 left-0 right-0"></div>
      </div>
      <div className='flex flex-col mt-10 md:mt-16 m-auto items-center max-w-[350px] md:max-w-[710px] h-44 md:h-[300px] text-wrap'>
        <h1 className="font-semibold font-[sans-serif] text-2xl md:text-5xl leading-tight md:leading-snug text-black z-20"><span className='ml-2 md:ml-4'>&quot;<span className='text-pink-500 font-semibold font-[sans-serif] text-2xl md:text-5xl z-20'>Beauty </span>At Your Fingertips: </span><span className="">Your Ultimate <span className='text-pink-500 font-semibold font-[sans-serif] text-2xl md:text-5xl z-20'>Make-Up Artist </span></span><span className='mx-20 md:mx-32 font-semibold font-[sans-serif] text-2xl md:text-5xl z-20'>Booking Place.&quot;</span></h1>
        <button
          onClick={handleCheckout}
          className="bg-[#EA2793] w-24 md:w-28 h-6 md:h-7 rounded-full text-white font-semibold font-[sans-serif] text-xs md:text-sm mt-7 md:mt-8 hover:shadow-md hover:shadow-[#F27BBD]"
        >
          Check Out !
        </button>
      </div>
      <div className='relative'>
        <ul className='absolute ml-5 md:ml-0 mt-12 md:mt-0 md:flex md:flex-col md:items-center md:justify-center md:gap-2 w-auto md:w-[720px] h-[120px] md:h-[628px] font-[sans-serif] text-white text-xs md:text-3xl leading-snug font-normal z-20'>
          <li>WEDDING MAKEUP ARTIST</li>
          <li>PRE SHOOT MAKEUP ARTIST</li>
          <li>ALBUM SHOOT MAKEUP ARTIST</li>
          <li>CELEBRITY MAKEUP ARTIST</li>
          <li>CORPORATE EVENTS MAKEUP ARTIST</li>
          <button className='text-black hover:underline hover:underline-offset-4 w-[65px] md:w-[110px]  h-[17px] md:h-[27px] text-sm md:text-lg font-normal mt-4 md:mt-10 rounded-full'><a href="/#category">And More</a></button>
        </ul>
        <Image src="/poster.jpg" alt="" width={1440} height={628} quality={100} className='object-cover object-left w-full h-[200px] md:h-[580px]' />
      </div>
    </div>
  );
};

export default MuaSection;
