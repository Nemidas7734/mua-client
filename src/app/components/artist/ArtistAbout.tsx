"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image";


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

export default function ArtistAbout() {
    return (
        <section className="max-sm:grid max-sm:grid-rows-2 md:grid md:grid-cols-2 md:gap-2 w-full md:w-[1120px] h-[420px] md:h-[348px] rounded-xl border-2 shadow-2xl shadow-[#0000001F] md:mt-2">
            <div className="flex flex-col gap-10 md:gap-32 pl-6 md:pl-12">
                <p className="max-w-[330px] text-wrap text-sm md:text-lg font-normal pt-5">Hi !!!<br></br>Elevate Your Beauty Experience with Kritika. Hair Styling, Draping, Makeup, False Lashes + Inshort tichya baddal info</p>
                <div className="">
                    <h1 className="w-[265px] font-semibold text-base md:text-xl">Starting Price</h1>
                    <h1 className="font-semibold text-base md:text-xl text-[#EA2793]">Rs. 20000 onwards</h1>
                </div>
            </div>
            <div className="w-[293px] md:w-[420px] h-[176px] md:h-[254px] m-auto max-sm:mt-0">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    preventClicks={true}
                    initialSlide={3}
                    loop={true}
                    slidesPerView={2}
                    slidesPerGroupAuto
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                    }}
                    modules={[Autoplay, EffectCoverflow]}
                    className="w-full "
                >
                    {[...Array(8)].map((_, index) => (
                        <SwiperSlide key={index} className="w-[132px] md:w-[190px] h-[176px] md:h-[254px] rounded-xl">
                            <Image 
                                src="/gallery/gallery2.jpg" 
                                alt={`Slide_image_${index + 1}`} 
                                width={200} 
                                height={260} 
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}