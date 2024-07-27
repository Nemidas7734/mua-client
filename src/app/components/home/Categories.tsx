"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper/modules';

export default function Categories() {
    return (
        <section className="flex flex-col items-center justify-center mt-20 md:mt-24">
                <h2 className="flex justify-center font-bold text-2xl md:text-3xl mb-2 md:mb-5">CATEGORIES</h2>
                <div className="flex gap-4 items-center">
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper w-[300px] md:w-[480px] h-[340px] md:h-[480px] mt-8 md:mt-10 "
                    >
                        <SwiperSlide className='flex justify-center items-center rounded-2xl w-full h-full'>
                                <Image src="/gallery/bridal.png" alt='' width={480} height={480} className='h-full w-full object-cover overflow-hidden'/>
                        </SwiperSlide>
                        <SwiperSlide className='flex justify-center items-center rounded-2xl w-full h-full'>
                                <Image src="/gallery/hairstyle.png" alt='' width={480} height={480} className='h-full w-full object-cover overflow-hidden'/>
                        </SwiperSlide>
                        <SwiperSlide className='flex justify-center items-center rounded-2xl w-full h-full'>
                                <Image src="/gallery/party.png" alt='' width={480} height={480} className='h-full w-full object-cover overflow-hidden'/>
                        </SwiperSlide>
                        <SwiperSlide className='flex justify-center items-center rounded-2xl w-full h-full'>
                                <Image src="/gallery/engagement.png" alt='' width={480} height={480} className='h-full w-full object-cover overflow-hidden'/>               
                        </SwiperSlide>
                    </Swiper>
                </div>
        </section>
    )
}