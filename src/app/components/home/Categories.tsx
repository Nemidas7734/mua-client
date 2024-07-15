

export default function Categories(){
    return(
        <section className="flex justify-center mt-6 pt-4 ">
            <div className="flex-col justify-center items-center mt-14">
                <h2 className="flex justify-center font-bold text-3xl mb-5">CATEGORIES</h2>
                <div className="flex gap-4 items-center">
                        <div className="w-[255px] h-56 bg-[#C4C4C4]  rounded-md"><h2 className="transform translate-x-20 translate-y-56 mt-2">Bridal Makeup</h2></div>
                        <div className="w-[255px] h-56 bg-[#C4C4C4] rounded-md"><h2 className="transform translate-x-20 translate-y-56 mt-2">Hair styling</h2></div>
                        <div className="w-[255px] h-56 bg-[#C4C4C4] rounded-md"><h2 className="transform translate-x-20 translate-y-56 mt-2">Party Makeup</h2></div>
                        <div className="w-[255px] h-56 bg-[#C4C4C4] rounded-md"><h2 className="transform translate-x-20 translate-y-56 mt-2">Engagement Makeup</h2></div>
                </div>
            </div>

        </section>
    )
}