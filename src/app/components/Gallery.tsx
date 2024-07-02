import Image from "next/image"
export default function Gallery(){
    return(
        <div id="gallery" className="flex-col justify-center mt-14 mb-20">
            <h2 className="flex justify-center font-bold text-4xl p-6 ">Gallery</h2>
            <div className="flex justify-center gap-4 ">
                <Image src="/gallery/gallery_4.jpeg" alt="" height={240} width={660} quality={100} style={{
                    objectFit: 'cover',
                    objectPosition: '60% 20%',
                  }}  className="w-[265px] h-[227px] rounded-md"/>
                <Image src="/gallery/gallery_3.jpeg" alt="" height={240} width={660} quality={100} style ={{objectFit:'cover', objectPosition:"20% 25%"}} className="w-[265px] h-[227px] object-cover rounded-md"/>
                <Image src="/gallery/gallery_2.jpeg" alt="" height={260} width={660} quality={100} style ={{objectFit:'cover', objectPosition:"20% 25%"}} className="w-[265px] h-[227px] object-cover rounded-md"/>
                <Image src="/gallery/gallery_1.jpeg" alt="" height={240} width={660} quality={100} style ={{objectFit:'cover', objectPosition:"20% 25%"}} className="w-[265px] h-[227px] object-cover rounded-md "/>
            </div>
        </div>
    )
}