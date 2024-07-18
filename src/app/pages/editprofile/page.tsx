import EditInfo from "@/app/components/profile/EditInfo"
import EditGallery from "@/app/components/profile/EditGallery"

export default function Profile() {
    return (
        <section className="flex flex-col items-center gap-2 mt-16">
            <EditInfo />
            <EditGallery />
            <button className="bg-[#EA2793] w-[160px] py-2 text-white font-semibold rounded-full mt-12">Save Changes</button>
        </section>
    )
}