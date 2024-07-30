"use client"
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function Categories() {
    return (
        <section id='category' className="flex flex-col items-center justify-center h-[340px] md:h-[576px] mt-16 md:mt-24 overflow-hidden">
            <h2 className="font-bold text-2xl md:text-3xl mb-6 md:mb-12 text-center">CATEGORIES</h2>
            <div className="w-[280px] sm:w-[300px] md:w-[460px]">
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper w-full h-[300px] md:h-[480px]"
                >
                    {[
                        { src: "/gallery/bridal.png", alt: "Bridal" },
                        { src: "/gallery/hairstyle.png", alt: "Hairstyle" },
                        { src: "/gallery/party.png", alt: "Party" },
                        { src: "/gallery/engagement.png", alt: "Engagement" }
                    ].map((image, index) => (
                        <SwiperSlide key={index} className='flex justify-center items-center rounded-2xl w-full h-full overflow-hidden'>
                            <Image 
                                src={image.src} 
                                alt={image.alt} 
                                width={480} 
                                height={480}
                                style={{objectPosition:"40% 100%"}} 
                                className='h-full w-full object-cover object-left'
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}