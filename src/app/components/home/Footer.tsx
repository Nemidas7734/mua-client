import Link from "next/link";


export default function Footer(){
    return(
        <section className="flex justify-center mt-24 w-full bg-[#001B79] h-[500px]">
            <div className="flex-col justify-center">
                <div className="grid grid-cols-8 mt-28 w-[1100px]">
                    <div className="col-span-3">
                        <h1 className="text-2xl text-white font-[saira] mb-4">www.bookyourmua.com</h1>
                        <p className="w-80 text-wrap text-white text-2xl font-[saira]">&quot;Beauty At Your Fingertips: Your Ultimate Make-Up Artist Booking Place.&quot;</p>
                    </div>
                    <div className="col-span-3 flex flex-col">
                        <h1 className="font-semibold text-white mb-1">Subscribe</h1>
                        <input className="p-1 h-8 rounded-md text-black mb-4 w-80 " placeholder="Enter Email"></input>
                        <button className="bg-[#EA2793] rounded-full p-0 w-32 text-white font-light ml-48">Subscribe</button>
                    </div>
                    <div className="col-span-1 ">
                        <ol className="text-white">
                            <li><a href="/">Home</a></li>
                            <li><a href="/#blogs">Blogs</a></li>
                            <li><a href="/#gallery">Gallery</a></li>
                            <li><a>Cosmetics</a></li>
                            <li><Link href = "/pages/aboutus">About Us</Link></li>
                            <li><Link href = "/pages/policy">Cancellation Policy</Link></li>
                        </ol>
                    </div>
                    <div className="col-span-1">
                        <h1 className="text-white font-semibold">Follow Us on :</h1>
                        <ol className="text-white">
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>Pinterest</li>
                            <li>Snapchat</li>
                            <li>Youtube</li>
                        </ol>
                    </div>
                    <hr className="h-px my-8 w-[1100px] bg-white border-0 dark:bg-gray-700"></hr>
                </div>
                <div className="flex justify-evenly mt-8">
                    <strong className="text-7xl text-[#EA2793]">MUA</strong>
                    <div className="flex flex-col text-pink-500 justify-center">
                        <h1>Contact Us:</h1>
                        <h1>himanshuchavahan@gmail.com</h1>
                        <h1>9421275438</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}