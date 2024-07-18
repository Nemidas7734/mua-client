"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from "swiper/modules";
import { useSwiper } from 'swiper/react';


export default function Gallery() {
    const swiper = useSwiper();
    return (
        <div id="gallery" className="flex flex-col justify-center items-center m-auto w-[1024px] h-[535px] gap-10 mt-16 mb-4">
            <h1 className="font-bold text-3xl">Gallery</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                // speed={100}g
                // spaceBetween={50}
                // preventClicks={true}
                initialSlide={3}
                loop={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 80,
                    depth: 300,
                    modifier: 1,
                }}
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                modules={[EffectCoverflow, Pagination]}
                className="w-full p-12 m-1"
            >
                <SwiperSlide className="w-[377px] h-[420px] aspect-[3/4] rounded-xl border-2 border-white">
                    <Image src="/gallery/gallery2.jpg" alt="Slide_image" width={377} height={420} className="block w-full object-cover rounded-xl"/>
                </SwiperSlide>
                <SwiperSlide className="w-[377px] h-[420px] aspect-[3/4] rounded-xl border-2 border-white">
                    <Image src="/gallery/gallery2.jpg" alt="Slide_image" width={377} height={420} className="block w-full object-cover rounded-xl"/>
                </SwiperSlide>
                <SwiperSlide className="w-[377px] h-[420px] aspect-[3/4] rounded-xl border-2 border-white">
                    <Image src="/gallery/gallery2.jpg" alt="Slide_image" width={377} height={420} className="block w-full object-cover rounded-xl"/>
                </SwiperSlide>
                <SwiperSlide className="w-[425px] aspect-[3/4] rounded-xl border-2 border-white">
                    <Image src="/gallery/gallery2.jpg" alt="Slide_image" width={475} height={414} className="object-cover  rounded-xl block"/>
                </SwiperSlide>
                <SwiperSlide className="w-[425px] aspect-[3/4] rounded-xl border-2 border-white">
                    <Image src="/gallery/gallery2.jpg" alt="Slide_image" width={475} height={414} className="object-cover  rounded-xl block"/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}