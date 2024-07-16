import ArtistInfo from "@/app/components/profile/ArtistInfo"
import Gallery from "@/app/components/profile/Gallery"

export default function Profile() {
    return (
        <section className="flex flex-col items-center gap-2 mt-16">
            <ArtistInfo/>
            <Gallery/>
            <button className="bg-[#EA2793] w-[160px] py-2 text-white font-semibold rounded-full mt-12">Save Changes</button>
        </section>
    )
}