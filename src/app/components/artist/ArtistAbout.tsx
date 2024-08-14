import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

interface ArtistData {
    description: string;
    startingPrice: number;
    galleryUrls: string[];
    skills: string | number | boolean | null | undefined;
  }
interface ArtistAboutProps {
    artistData: ArtistData;
}

export default function ArtistAbout({ artistData }: ArtistAboutProps) {
    return (
        <section className="max-sm:grid max-sm:grid-rows-3 md:grid md:grid-cols-2 md:gap-2 w-full md:w-[1120px] rounded-xl border-2 shadow-2xl shadow-[#0000001F] md:mt-2">
            <div className="flex flex-col gap-6 md:gap-10 pl-6 md:pl-12">
                <p className="max-w-[330px] text-wrap text-sm md:text-lg font-normal pt-5">{artistData.description}</p>
                <div>
                    <h2 className="font-semibold text-base md:text-xl mb-2">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                        {typeof artistData.skills === 'string'
                            ? artistData.skills.split(',').map((skill, index) => (
                                <span key={index} className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                    {skill.trim()}
                                </span>
                            ))
                            : artistData.skills
                                ? <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                    {String(artistData.skills)}
                                </span>
                                : <span className="text-gray-500">No skills listed</span>
                        }
                    </div>
                </div>
                <div className="mb-4">
                    <h1 className="w-[265px] font-semibold text-base md:text-xl">Starting Price</h1>
                    <h1 className="font-semibold text-base md:text-xl text-[#EA2793]">Rs. {artistData.startingPrice} onwards</h1>
                </div>
            </div>
            <div className="w-[300px] md:w-[420px] h-[196px] md:h-[254px] m-auto max-sm:mt-0 overflow-hidden">
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
                    className="w-full h-full"
                >
                    {artistData?.galleryUrls?.map((url, index) => (
                        <SwiperSlide key={index} className="w-full h-full">
                            <div className="relative w-full h-full">
                                <Image
                                    src={url}
                                    alt={`Slide_image_${index + 1}`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-xl"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}