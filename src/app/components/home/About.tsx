

export default function About(){
    return(
        <section id="about" className="flex flex-col items-center gap-6 md:gap-16 mt-12 max-sm:h-[480px] md:mt-28">
            <div className="md:grid md:grid-cols-2 md:justify-center w-full md:w-[1120px] h-[219px] md:h-[337px]">
                <div className="max-sm:hidden w-[455px] h-full bg-[#C4C4C4] rounded-md"></div>
                <div className="flex flex-col justify-center gap-4 max-sm:m-auto max-sm:p-2 max-sm:pl-4 w-auto md:w-[500px] h-auto">
                    <h1 className="font-semibold md:font-bold text-[32px] md:text-4xl font-[sans-serif]">WHAT IS <span className="text-pink-500 font-semibold md:font-bold text-3xl md:text-4xl font-[sans-serif]">MUA</span> ?</h1>
                    <p className="w-auto md:w-[500px] text-wrap font-[sans-serif] text-sm md:text-base font-semibold">MUA is your go-to online platform for discovering top-rated makeup artists near you. With a simple search, you can find all the local options available. To ensure quality, check user scores and reviews conveniently located in the top-right corner of each business listing. MUA recommends the highest-rated artists for each search result. Look for reviews that mention specific makeup artists by name to make an informed decision.</p>
                </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:justify-center w-full md:w-[1120px] h-[219px] md:h-[337px]">
                <div className="flex flex-col justify-center gap-4 max-sm:m-auto max-sm:p-2 max-sm:pl-4 w-auto md:w-[500px] h-auto">
                    <h1 className="font-semibold md:font-bold text-[32px] md:text-4xl font-[sans-serif]">BOOK <span className="text-pink-500 font-semibold md:font-bold text-3xl md:text-4xl font-[sans-serif]">MUA </span> ARTIST ?</h1>
                    <p className="w-auto md:w-[500px] text-wrap font-[sans-serif] text-sm md:text-base font-semibold">MUA streamlines the process of scheduling online appointments effortlessly. Find the best makeup artist based on your preferences, once you&apos;ve selected your preferred makeup artist, you can easily contact with the makeup artist and find a convenient time that suits your schedule. Each makeup artist offers a variety of services tailored to your needs. They offer different makeup intensities, from soft and medium looks to full glam.</p>
                </div>
                <div className="max-sm:hidden ml-20 w-[455px] h-full bg-[#C4C4C4] rounded-md"></div>
            </div>
        </section>
    )
}