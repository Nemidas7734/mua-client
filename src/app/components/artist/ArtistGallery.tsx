"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageObject {
  url: string;
  alt: string;
}

interface ArtistGalleryProps {
  images: ImageObject[];
}

export default function ArtistGallery({ images }: ArtistGalleryProps) {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  const displayedImages = showMore ? images : images.slice(0, 6);

  return (
    <div id="artistgallery" className="flex flex-col gap-4 items-center w-full max-w-[1120px] mx-auto p-4 rounded-xl border-2 shadow-2xl shadow-[#0000001F] mt-2">
      <h1 className="font-semibold text-xl sm:text-2xl mt-2 sm:mt-4">Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {displayedImages.map((image, index) => (
          <div
            key={index}
            className="w-full max-w-[190px] h-full max-h-[254px] bg-[#DADADA] rounded-xl border border-black overflow-hidden"
          >
            <Image
              src={image.url}
              alt={image.alt || `Artwork ${index + 1}`}
              layout="responsive"
              width={190}
              height={254}
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      {images.length > 6 && (
        <button
          onClick={handleToggle}
          className="font-light italic text-base text-[#001B79] hover:underline hover:underline-offset-2"
        >
          {showMore ? "<< Show Less" : "Show More >>"}
        </button>
      )}
    </div>
  );
}