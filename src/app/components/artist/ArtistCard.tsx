import Image from "next/image"
import { useRouter } from 'next/navigation';

interface artist {
    artist:{
        id: number;
        name: string;
        city:string;
        experience:string;
        price:number;
    }

  }

export default function ArtistsCard({ artist }:artist){
  const router = useRouter();
  
  const handleProfile = () => {
    router.push('/pages/artistprofile');
  };
  
  return(
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src="/gallery/gallery1.jpg"
          alt={artist.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{artist.name}</h2>
        <p className="text-gray-600">{artist.city}</p>
        <p className="mt-2">Hair Styling, Draping, Makeup, False Lashes +</p>
        <p className="mt-1">Experience: {artist.experience}</p>
        <p className="mt-2 text-sm">Hi !!! Elevate Your Beauty Experience with {artist.name}.</p>
        <p className="mt-2 font-semibold">Starting Price: Rs.{artist.price} onwards</p>
        <button
          onClick={handleProfile}
          className="mt-4 bg-[#FFBCE1] text-black px-4 py-2 rounded-full w-full"
        >
          View Profile
        </button>
      </div>
    </div>
  )
}