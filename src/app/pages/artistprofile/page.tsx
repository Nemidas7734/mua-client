
import ArtistAbout from "@/app/components/artist/ArtistAbout"
import ArtistGallery from "@/app/components/artist/ArtistGallery"
import ArtistInfo from "@/app/components/artist/ArtistInfo"
import ArtistReviews from "@/app/components/artist/ArtistReviews"

export default function Artist() {
    return (
        <section className="flex flex-col items-center gap-10">
            <ArtistInfo/>
            <ArtistAbout/>
            <ArtistGallery/>
            <ArtistReviews/>
        </section>
    )
}