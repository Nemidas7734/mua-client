"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

export default function Gallery() {
    const images = [
        "/gallery/image1.jpeg",
        "/gallery/image2.jpeg",
        "/gallery/image3.jpeg",
        "/gallery/image4.jpeg",
        "/gallery/image5.jpeg",
        "/gallery/image6.jpeg",
        "/gallery/image7.jpeg",
        "/gallery/image8.jpg"
    ];

    return (
        <div id="gallery" className="flex flex-col justify-center items-center w-full px-4 md:px-8 mt-12 md:mt-16 mb-1 md:mb-4 overflow-hidden">
            <h1 className="font-bold  font-[sans-serif] text-2xl md:text-3xl mb-8 md:mb-10">Gallery</h1>
            <div className="gallery-swiper w-full max-w-[427px] md:max-w-[1024px] relative pb-8 md:pb-12">
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
                    slidesPerView={2}
                    slidesPerGroupAuto
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 300,
                        modifier: 1,
                    }}
                    pagination={{ 
                        clickable: true,
                        el: '.gallery-swiper .swiper-pagination',
                    }}
                    modules={[Autoplay, EffectCoverflow, Pagination]}
                    className="w-full"
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                            initialSlide: 2,
                        }
                    }}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index} className="w-[240px] sm:w-[300px] md:w-[377px] h-[280px] sm:h-[350px] md:h-[420px]">
                            <Image 
                                src={image}
                                alt={`Slide_image_${index + 1}`} 
                                width={350} 
                                height={430} 
                                className="max-w-[160px] max-h-[200px] md:max-w-[342px] md:max-h-[425px] object-cover rounded-xl"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-pagination absolute bottom-0 left-0 right-0"></div>
            </div>
        </div>
    )
}