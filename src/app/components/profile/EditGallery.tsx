"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface EditGalleryProps {
    onGalleryImagesChange: (files: File[],urls: string[]) => void
    existingGalleryUrls: string[]
}

export default function EditGallery({ onGalleryImagesChange, existingGalleryUrls }: EditGalleryProps) {
    const [images, setImages] = useState<(string | null)[]>(
        [...existingGalleryUrls, ...Array(12 - existingGalleryUrls.length).fill(null)]
    )
    const [files, setFiles] = useState<(File | null)[]>(Array(12).fill(null))
    useEffect(() => {
        setImages([...existingGalleryUrls, ...Array(12 - existingGalleryUrls.length).fill(null)])
    }, [existingGalleryUrls])

    const handleImageUpload = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]
            const newImages = [...images]
            const newFiles = [...files]
            newImages[index] = URL.createObjectURL(file)
            newFiles[index] = file
            setImages(newImages)
            setFiles(newFiles)
            
            const updatedFiles = newFiles.filter((file): file is File => file !== null)
            const updatedUrls = newImages.filter((url): url is string => url !== null && !url.startsWith('blob:'))
            onGalleryImagesChange(updatedFiles, updatedUrls)
        }
    }
    
    const handleImageDelete = (index: number) => () => {
        const newImages = [...images]
        const newFiles = [...files]
        newImages[index] = null
        newFiles[index] = null
        setImages(newImages)
        setFiles(newFiles)
        
        const updatedFiles = newFiles.filter((file): file is File => file !== null)
        const updatedUrls = newImages.filter((url): url is string => url !== null && !url.startsWith('blob:'))
        onGalleryImagesChange(updatedFiles, updatedUrls)
    }
    
    return (
        <div className="flex flex-col gap-6 items-center w-full max-w-[1120px] mx-auto rounded-xl border-2 shadow-2xl shadow-[#0000001F] p-4 sm:p-6 md:p-8">
            <h1 className="font-semibold text-xl sm:text-2xl">Gallery</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {images.map((image, index) => (
                    <div key={index} className="relative w-full max-w-[190px] h-[190px] md:h-[254px] aspect-[3/4] bg-[#DADADA] rounded-xl border border-black overflow-hidden">
                        {image ? (
                            <>
                                <Image 
                                    src={image} 
                                    alt={`Gallery image ${index + 1}`} 
                                    layout="fill" 
                                    objectFit="cover"
                                    onError={() => {
                                        console.error(`Failed to load image: ${image}`);
                                        // Optionally, set a placeholder or remove the image
                                        // const newImages = [...images];
                                        // newImages[index] = null;
                                        // setImages(newImages);
                                    }}
                                />
                                <button
                                    onClick={handleImageDelete(index)}
                                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </>
                        ) : (
                            <label className="flex items-center justify-center w-full h-full cursor-pointer">
                                <input type="file" className="hidden" onChange={handleImageUpload(index)} accept="image/*" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-gray-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </label>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}