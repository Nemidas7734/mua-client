"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

export default function Gallery() {
    return (
        <div id="gallery" className="flex flex-col justify-center items-center w-full px-4 md:px-8 mt-12 md:mt-16 mb-1 md:mb-4 overflow-hidden">
            <h1 className="font-bold text-2xl md:text-3xl mb-8 md:mb-10">Gallery</h1>
            <div className="w-full max-w-[427px] md:max-w-[1024px] relative pb-8 md:pb-12">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
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
                    pagination={{ 
                        clickable: true,
                        el: '.swiper-pagination',
                    }}
                    modules={[Autoplay, EffectCoverflow, Pagination]}
                    className="w-full"
                >
                    {[...Array(8)].map((_, index) => (
                        <SwiperSlide key={index} className="w-[240px] sm:w-[300px] md:w-[377px] h-[280px] sm:h-[350px] md:h-[420px]">
                            <Image 
                                src="/gallery/gallery2.jpg" 
                                alt={`Slide_image_${index + 1}`} 
                                width={475} 
                                height={414} 
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-pagination absolute bottom-0 left-0 right-0"></div>
            </div>
        </div>
    )
}