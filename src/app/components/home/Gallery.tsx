"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {  Autoplay, EffectCoverflow, Pagination } from "swiper/modules";



export default function Gallery() {
    return (
        <div id="gallery" className="flex flex-col justify-center items-center m-auto  w-full max-w-[427px] md:max-w-[1024px] h-auto min-h-[292px] md:min-h-[535px] gap-8 md:gap-10 mt-12 md:mt-16 mb-1 md:mb-4 ">
            <h1 className="font-bold text-2xl md:text-3xl">Gallery</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                // speed={100}
                // spaceBetween={50}
                // preventClicks={true}
                initialSlide={2}
                loop={true}
                slidesPerView={3}
                slidesPerGroupAuto
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 300,
                    modifier: 1,
                }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                modules={[Autoplay,EffectCoverflow, Pagination]}
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
                <SwiperSlide className="w-[425px] h-[420px] aspect-[3/4] rounded-xl border-2 border-white">
                    <Image src="/gallery/gallery2.jpg" alt="Slide_image" width={475} height={414} className="object-cover  rounded-xl block"/>
                </SwiperSlide>
                <SwiperSlide className="w-[425px] h-[420px] aspect-[3/4] rounded-xl border-2 border-white">
                    <Image src="/gallery/gallery2.jpg" alt="Slide_image" width={475} height={414} className="object-cover  rounded-xl block"/>
                </SwiperSlide>
                <SwiperSlide className="w-[425px] h-[420px] aspect-[3/4] rounded-xl border-2 border-white">
                    <Image src="/gallery/gallery2.jpg" alt="Slide_image" width={475} height={414} className="object-cover  rounded-xl block"/>
                </SwiperSlide>
                <SwiperSlide className="w-[425px] h-[420px] aspect-[3/4] rounded-xl border-2 border-white">
                    <Image src="/gallery/gallery2.jpg" alt="Slide_image" width={475} height={414} className="object-cover  rounded-xl block"/>
                </SwiperSlide>
                <SwiperSlide className="w-[425px] h-[420px] aspect-[3/4] rounded-xl border-2 border-white">
                    <Image src="/gallery/gallery2.jpg" alt="Slide_image" width={475} height={414} className="object-cover  rounded-xl block"/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}