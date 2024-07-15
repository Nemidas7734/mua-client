

export default function About(){
    return(
        <section id="about" className="flex flex-col items-center gap-16 mt-28">
            <div className="grid grid-cols-2 justify-center  w-[1120px] h-[337px]">
                <div className="w-[455px] h-full bg-[#C4C4C4] rounded-md"></div>
                <div className="flex flex-col justify-center gap-4 ml-10 w-[500px] h-full">
                    <h1 className="font-bold text-4xl font-[inter]">WHAT IS <span className="text-pink-500 font-bold text-4xl font-[inter]">MUA</span> ?</h1>
                    <p className="w-[500px] text-wrap font-[inter] text-base font-semibold">MUA is your go-to online platform for discovering top-rated makeup artists near you. With a simple search, you can find all the local options available. To ensure quality, check user scores and reviews conveniently located in the top-right corner of each business listing. MUA recommends the highest-rated artists for each search result. Look for reviews that mention specific makeup artists by name to make an informed decision.</p>
                </div>
            </div>
            <div className="grid grid-cols-2 w-[1120px] h-[337px]">
                <div className="flex flex-col justify-center gap-4 w-[500px] h-full">
                    <h1 className="font-bold text-4xl font-[inter]">BOOK <span className="text-pink-500 font-bold text-4xl font-[inter]">MUA </span> ARTIST ?</h1>
                    <p className="w-[495px] text-wrap font-[inter] text-base font-semibold">MUA streamlines the process of scheduling online appointments effortlessly. Find the best makeup artist based on your preferences, once you&apos;ve selected your preferred makeup artist, you can easily contact with the makeup artist and find a convenient time that suits your schedule. Each makeup artist offers a variety of services tailored to your needs. They offer different makeup intensities, from soft and medium looks to full glam.</p>
                </div>
                <div className="ml-20 w-[455px] h-full bg-[#C4C4C4] rounded-md"></div>
            </div>
        </section>
    )
}