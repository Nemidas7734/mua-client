"use client";

import { useState } from "react";

export default function ArtistGallery() {
  const [more, setMore] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setMore(!more);
    setOpen(!open);
  };

  return (
    <div className="flex flex-col gap-4 items-center w-full md:w-[1120px] min-h-[788px] md:min-h-[370px] pb-4 rounded-xl border-2 shadow-2xl shadow-[#0000001F] mt-2">
      <h1 className="flex justify-center font-semibold text-base md:text-2xl mt-2 md:mt-4">Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-10">
        <div className="w-[163px] md:w-[190px] h-[198px] md:h-[254px] bg-[#DADADA] rounded-xl border-[1px] border-black"></div>
        <div className="w-[163px] md:w-[190px] h-[198px] md:h-[254px] bg-[#DADADA] rounded-xl border-[1px] border-black"></div>
        <div className="w-[163px] md:w-[190px] h-[198px] md:h-[254px] bg-[#DADADA] rounded-xl border-[1px] border-black"></div>
        <div className="w-[163px] md:w-[190px] h-[198px] md:h-[254px] bg-[#DADADA] rounded-xl border-[1px] border-black"></div>
        <div className="md:hidden w-[163px] md:w-[190px] h-[198px] md:h-[254px] bg-[#DADADA] rounded-xl border-[1px] border-black"></div>
        <div className="md:hidden w-[163px] md:w-[190px] h-[198px] md:h-[254px] bg-[#DADADA] rounded-xl border-[1px] border-black"></div>
        {more && (
          <>
            <div className="w-[163px] md:w-[190px] h-[198px] md:h-[254px] bg-[#DADADA] rounded-xl border-[1px] border-black"></div>
            <div className="w-[163px] md:w-[190px] h-[198px] md:h-[254px] bg-[#DADADA] rounded-xl border-[1px] border-black"></div>
            <div className="w-[163px] md:w-[190px] h-[198px] md:h-[254px] bg-[#DADADA] rounded-xl border-[1px] border-black"></div>
            <div className="w-[163px] md:w-[190px] h-[198px] md:h-[254px] bg-[#DADADA] rounded-xl border-[1px] border-black"></div>
            <div className="w-[163px] md:w-[190px] h-[198px] md:h-[254px] bg-[#DADADA] rounded-xl border-[1px] border-black"></div>
            <div className="w-[163px] md:w-[190px] h-[198px] md:h-[254px] bg-[#DADADA] rounded-xl border-[1px] border-black"></div>
            <div className="w-[163px] md:w-[190px] h-[198px] md:h-[254px] bg-[#DADADA] rounded-xl border-[1px] border-black"></div>
            <div className="w-[163px] md:w-[190px] h-[198px] md:h-[254px] bg-[#DADADA] rounded-xl border-[1px] border-black"></div>
          </>
        )}
      </div>
      <h1
        onClick={handleClick}
        className="font-light italic text-base text-[#001B79] hover:underline hover:underline-offset-2"
      >
        {open ? "<< Back" : "Explore >>"}
      </h1>
    </div>
  );
}
