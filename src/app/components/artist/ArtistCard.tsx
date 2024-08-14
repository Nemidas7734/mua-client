import Image from "next/image"
import { useRouter } from 'next/navigation';

interface Artist {
  artist: {
    id: string;
    name: string;
    location: string;
    experience: string;
    expertise: string;
    startingPrice: number;
    profileImageUrl: string;
  }

}

export default function ArtistsCard({ artist }: Artist) {
  const router = useRouter();

  const handleProfile = () => {
    router.push(`/pages/artistprofile?id=${artist.id}`);
  };

  return (
    <div onClick={handleProfile} className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-56">
        <Image
          src={artist.profileImageUrl}
          alt={artist.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg text-gray-700 font-semibold">{artist.name}</h2>
        <p className="text-gray-600 flex gap-1">
          <img width="15" height="15" src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/000000/external-location-customer-reviews-tanah-basah-glyph-tanah-basah.png" alt="external-location-customer-reviews-tanah-basah-glyph-tanah-basah" className="object-contain" />
          {artist.location}
        </p>

        <div className="grid grid-flow-col grid-cols-3 md:grid-cols-4 gap-2 md:gap-4 mt-2">
          {typeof artist.expertise === 'string'
            ? artist.expertise.split(',').slice(0, 4).map((exp, index) => (
              <span key={index} className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                {exp.trim()}
              </span>
            ))
            : artist.expertise
              ? <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                {String(artist.expertise)}
              </span>
              : null
          }
        </div>

        {/* <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
          <span className="inline-flex items-center justify-center w-4 h-4 me-2 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full dark:bg-gray-700 dark:text-blue-400">
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path fill="currentColor" d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z" />
              <path fill="#fff" d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z" />
            </svg>
          </span>Badge
        </span> */}


        {/* <p className="mt-2">Hair Styling, Draping, Makeup, False Lashes +</p> */}
        {/* <p className="mt-1">Experience: {artist.experience}</p> */}
        <p className="mt-2 text-sm">Hi !!! Elevate Your Beauty Experience with {artist.name}.</p>
        <p className="mt-2 text-base text-gray-600 font-semibold ">Starting Price: <span className="text-[#EA2793] text-lg">&#8377; {artist.startingPrice} </span>onwards</p>
        {/* <button
          onClick={handleProfile}
          className="mt-4 bg-[#FFBCE1] text-black px-4 py-2 rounded-full w-full"
        >
          View Profile
        </button> */}
      </div>
    </div>
  )
}