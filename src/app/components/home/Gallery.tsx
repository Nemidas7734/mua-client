"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

export default function Gallery() {
    return (
        <div id="gallery" className="flex flex-col justify-center items-center m-auto w-full max-w-[427px] md:max-w-[1024px] h-auto min-h-[292px] md:min-h-[535px] gap-8 md:gap-10 mt-12 md:mt-16 mb-1 md:mb-4">
            <h1 className="font-bold text-2xl md:text-3xl">Gallery</h1>
            <div className="w-full relative pb-8 md:pb-12">
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
                    className="w-full px-12 py-8"
                >
                    {[...Array(8)].map((_, index) => (
                        <SwiperSlide key={index} className="w-[300px] sm:w-[377px] h-[350px] sm:h-[420px] rounded-xl">
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