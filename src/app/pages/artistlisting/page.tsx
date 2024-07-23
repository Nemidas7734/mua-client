"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ArtistCard from '@/app/components/artist/ArtistCard';

export default function ArtistListing() {
  const [artists, setArtists] = useState([]);
  const [city, setCity] = useState('');

  //   useEffect(() => {
  //     fetchArtists();
  //   }, [city]);

  //   const fetchArtists = async () => {
  //     const res = await fetch(`/api/artists${city ? `?city=${city}` : ''}`);
  //     const data = await res.json();
  //     setArtists(data);
  //   };

  return (
    <div className='flex flex-col gap-14'>
      <div className='flex justify-end pr-8'>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search by city"
          className='mt-20 placeholder:text-black w-36 h-7 p-2  bg-[#FFBCE1] rounded-xl'
        />
      </div>
      <h1 className='text-4xl font-bold m-auto'>Makeup Artists in <span className='text-[#EA2793]'>Pune</span></h1>
      <div className="grid grid-flow-row grid-cols-3  m-auto gap-12 justify-center">
        {/* {artists.map(artist => ( */}
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        {/* ))} */}
      </div>
      <div>
        <Image src="/MUA_Banner.png" alt="" width={1440} height={300} className='w-full h-64' />
      </div>
      <div className="grid grid-flow-row grid-cols-3  m-auto gap-8 gap-y-12 justify-center">
        {/* {artists.map(artist => ( */}
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        {/* ))} */}
      </div>
    </div>
  );
}