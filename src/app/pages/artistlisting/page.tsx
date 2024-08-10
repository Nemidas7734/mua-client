"use client"
import { useState, useEffect } from 'react';
import ArtistCard from '@/app/components/artist/ArtistCard';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/app/firebase/firebase_config';

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

  useEffect(() => {
    const artistsCollection = collection(db, 'Artists');
    const unsubscribe = onSnapshot(artistsCollection, (snapshot) => {
      const artistList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      } as Artist));
      // console.log("Fetched artists:", artistList);
      setArtists(artistList);
      setFilteredArtists(artistList);
    }, (error) => {
      console.error("Error fetching artists: ", error);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const filtered = artists.filter(artist => 
      artist.location?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredArtists(filtered);
  }, [searchTerm, artists]);

  return (
    <div className="container mx-auto px-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by city"
        className='mt-20 placeholder:text-black w-full sm:w-36 h-10 p-2 bg-[#FFBCE1] rounded-xl'
      />
      
      <h1 className="text-2xl font-bold my-4">Makeup Artists in {searchTerm || 'All Cities'}</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredArtists.map(artist => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
}