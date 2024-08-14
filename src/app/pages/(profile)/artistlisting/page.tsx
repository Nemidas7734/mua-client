"use client"
import { useState, useEffect, useRef } from 'react';
import ArtistCard from '@/app/components/artist/ArtistCard';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/app/firebase/firebase_config';
import Image from 'next/image';

interface Artist {
  id: string;
  name: string;
  location: string;
  experience: string;
  startingPrice: number;
  profileImageUrl: string;
}

export default function ArtistListing() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArtists, setFilteredArtists] = useState<Artist[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const popularCities = ["Mumbai", "Delhi", "Bangalore", "Pune", "Kolkata", "Chennai"];

  useEffect(() => {
    const artistsCollection = collection(db, 'Artists');
    const unsubscribe = onSnapshot(artistsCollection, (snapshot) => {
      const artistList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      } as Artist));
      setArtists(artistList);
      setFilteredArtists(artistList);
    }, (error) => {
      console.error("Error fetching artists: ", error);
    });

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      unsubscribe();
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const filtered = artists.filter(artist =>
      artist.location?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredArtists(filtered);
  }, [searchTerm, artists]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setIsDropdownOpen(true);
  };

  const handleCitySelect = (city: string) => {
    setSearchTerm(city);
    setIsDropdownOpen(false);
  };

  return (
    <div className="container mx-auto px-4 pt-10 md:pt-20"> 
      <div className='relative w-64 mb-5 z-30' ref={dropdownRef}> 
        <div className='flex items-center border border-gray-300 rounded-md overflow-hidden'>
          <div className='p-2'>
            <Image src="/images/search.png" alt="Search" width={20} height={20} />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={() => setIsDropdownOpen(true)}
            placeholder="Search by city"
            className='w-full py-2 px-2 outline-none'
          />
        </div>
        {isDropdownOpen && (
          <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-50 overflow-hidden"> 
            <div className="p-2 bg-gray-100 font-semibold">Trending Cities</div>
            {popularCities.map((city, index) => (
              <div 
                key={index} 
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleCitySelect(city)}
              >
                {city}
              </div>
            ))}
          </div>
        )}
      </div>

      <h1 className="text-2xl font-bold my-4">
        Makeup Artists in {searchTerm || 'All Cities'}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {filteredArtists.map(artist => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
}