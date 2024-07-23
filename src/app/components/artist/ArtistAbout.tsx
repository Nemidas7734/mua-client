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
        <section className="grid grid-cols-2 gap-2 w-[1120px] h-[347px] rounded-xl border-2 shadow-2xl shadow-[#0000001F] mt-2">
            <div className="flex flex-col gap-32 pl-12">
                <p className="w-[375px] text-wrap pt-5">Hi !!!<br></br>Elevate Your Beauty Experience with Kritika. Hair Styling, Draping, Makeup, False Lashes + Inshort tichya baddal info</p>
                <div className="">
                    <h1 className="w-[265px] font-semibold text-xl">Starting Price</h1>
                    <h1 className="font-normal text-lg text-[#EA2793]">Rs. 20000 onwards</h1>
                </div>
            </div>
            <div className="w-[420px] h-[254px] m-auto">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                    // speed={100}
                    // spaceBetween={50}
                    preventClicks={true}
                    initialSlide={3}
                    loop={true}
                    slidesPerView={2}
                    // slidesPerGroupAuto
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                    }}
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    modules={[Autoplay, EffectCoverflow]}
                    className="w-full "
                >
                    <SwiperSlide className="w-[190px] h-[254px] rounded-xl ">
                        <Image src="/gallery/gallery2.jpg" alt="Slide_image" width={190} height={254} className="block w-full object-cover rounded-xl" />
                    </SwiperSlide>
                    <SwiperSlide className="w-[190px] h-[254px] rounded-xl ">
                        <Image src="/gallery/gallery2.jpg" alt="Slide_image" width={190} height={254} className="block w-full object-cover rounded-xl" />
                    </SwiperSlide>
                    <SwiperSlide className="w-[190px] h-[254px] rounded-xl ">
                        <Image src="/gallery/gallery2.jpg" alt="Slide_image" width={190} height={254} className="block w-full object-cover rounded-xl" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}