"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import ArtistCard from '@/app/components/artist/ArtistCard';

export default function ArtistListing() {
  const [artists, setArtists] = useState([{id: 1, name: 'Kritika', city: 'Pune', experience: '3+ years', price: 7000}]);
  const [city, setCity] = useState('');
  const [filteredArtists, setFilteredArtists] = useState([{id: 1, name: 'Kritika', city: 'Pune', experience: '3+ years', price: 7000}]);

  useEffect(() => {
    // Fetch artists data and set it to the artists state
    // For now, let's use dummy data
    const dummyArtists = [
      { id: 1, name: 'Kritika', city: 'Pune', experience: '3+ years', price: 7000 },
      { id: 2, name: 'Priya', city: 'Mumbai', experience: '5+ years', price: 8000 },
      // Add more dummy data as needed
    ];
    setArtists(dummyArtists);
    setFilteredArtists(dummyArtists);
  }, []);

  useEffect(() => {
    const filtered = artists.filter(artists => 
      artists.city.toLowerCase().includes(city.toLowerCase())
    );
    setFilteredArtists(filtered);
  }, [city, artists]);

  return (
    <div className="container mx-auto px-4">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search by city"
        className='mt-20 placeholder:text-black w-full sm:w-36 h-10 p-2 bg-[#FFBCE1] rounded-xl'
      />
      
      <h1 className="text-2xl font-bold my-4">Makeup Artists in {city || 'All Cities'}</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredArtists.map(artist => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
}