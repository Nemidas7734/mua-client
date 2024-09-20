import Link from "next/link";

import Image from "next/image";


export default function Footer() {
    return (
        <section className="flex flex-col items-center justify-between mt-10 md:mt-24 w-auto bg-[#001B79] max-h-[634px] md:h-[500px]">
            <div className="flex-col justify-center w-full max-sm:max-w-[360px]">
                <div className="max-sm:flex max-sm:justify-between md:m-auto md:grid md:grid-cols-4 mt-5 md:mt-20 w-full max-w-[360px] md:max-w-[1120px]">
                    <div className="max-sm:hidden pl-10">
                        <Link href="https://www.bookyourmua.com/">
                            <h1 className="text-2xl text-white underline underline-offset-8 font-[sans-serif] mb-4">www.bookyourmua.com</h1>
                        </Link>
                        <p className="w-[280px] text-wrap text-white text-xl  font-[sans-serif]">&quot;Beauty At Your Fingertips: Your Ultimate Make-Up Artist Booking Place.&quot;</p>
                    </div>
                    <div className="pl-4 md:pl-[136px] pt-2 md:pt-0">
                        <ol className="text-white font-[sans-serif]">
                            <li><a href="/">Home</a></li>
                            <li><a href="/#blogs">Blogs</a></li>
                            <li><a href="/#gallery">Gallery</a></li>
                            <li><a>Cosmetics</a></li>
                            <li><Link href="/pages/aboutus">About Us</Link></li>
                            <li><Link href="/pages/policy/cancellation">Cancellation Policy</Link></li>
                        </ol>
                    </div>
                    {/* <hr className="col-span-1 md:hidden h-[223px] mx-10 w-px md:w-0 bg-white border-0 dark:bg-gray-700"></hr> */}
                    <div className=" flex flex-col md:pl-[88px] pt-2 md:pt-0">
                        <p className="font-normal w-[170px] md:w-[187px] pr-3 md:pr-0 text-sm text-wrap text-white font-[sans-serif]">Are you a makeup artist ? Join the MUA community and spread your business all across your city.</p>
                        <Link href="/pages/register">
                            <h1 className="font-bold underline underline-offset-4 text-sm text-white mt-10 font-[sans-serif]">Registser Yourself !</h1>
                        </Link>
                    </div>
                    <div className="max-sm:hidden pl-[88px]">
                        <h1 className="text-white font-semibold font-[sans-serif]">Follow Us on :</h1>
                        <div className="flex flex-col gap-1 mt-1">
                            <div className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 48 48">
                                    <linearGradient id="awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1" x1="6.228" x2="42.077" y1="4.896" y2="43.432" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0d61a9"></stop><stop offset="1" stop-color="#16528c"></stop></linearGradient><path fill="url(#awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1)" d="M42,40c0,1.105-0.895,2-2,2H8c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h32	c1.105,0,2,0.895,2,2V40z"></path><path d="M25,38V27h-4v-6h4v-2.138c0-5.042,2.666-7.818,7.505-7.818c1.995,0,3.077,0.14,3.598,0.208	l0.858,0.111L37,12.224L37,17h-3.635C32.237,17,32,18.378,32,19.535V21h4.723l-0.928,6H32v11H25z" opacity=".05"></path><path d="M25.5,37.5v-11h-4v-5h4v-2.638c0-4.788,2.422-7.318,7.005-7.318c1.971,0,3.03,0.138,3.54,0.204	l0.436,0.057l0.02,0.442V16.5h-3.135c-1.623,0-1.865,1.901-1.865,3.035V21.5h4.64l-0.773,5H31.5v11H25.5z" opacity=".07"></path><path fill="#fff" d="M33.365,16H36v-3.754c-0.492-0.064-1.531-0.203-3.495-0.203c-4.101,0-6.505,2.08-6.505,6.819V22h-4v4	h4v11h5V26h3.938l0.618-4H31v-2.465C31,17.661,31.612,16,33.365,16z"></path>
                                </svg>
                                <h1 className="text-white text-sm font-normal font-[sans-serif]">Facebook</h1>
                            </div>
                            <div className="flex items-center gap-1">
                                <Image src="/icons9-twitterx.png" alt="" width={20} height={20} className="" />
                                <h1 className="text-white text-sm font-normal font-[sans-serif]">Twitter</h1>
                            </div>
                            <div className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 48 48">
                                    <circle cx="24" cy="24" r="20" fill="#E60023"></circle><path fill="#FFF" d="M24.4439087,11.4161377c-8.6323242,0-13.2153931,5.7946167-13.2153931,12.1030884	c0,2.9338379,1.5615234,6.5853882,4.0599976,7.7484131c0.378418,0.1762085,0.581543,0.1000366,0.668457-0.2669067	c0.0668945-0.2784424,0.4038086-1.6369019,0.5553589-2.2684326c0.0484619-0.2015381,0.0246582-0.3746338-0.1384277-0.5731201	c-0.8269653-1.0030518-1.4884644-2.8461304-1.4884644-4.5645752c0-4.4115601,3.3399658-8.6799927,9.0299683-8.6799927	c4.9130859,0,8.3530884,3.3484497,8.3530884,8.1369019c0,5.4099731-2.7322998,9.1584473-6.2869263,9.1584473	c-1.9630737,0-3.4330444-1.6238403-2.9615479-3.6153564c0.5654297-2.3769531,1.6569214-4.9415283,1.6569214-6.6584473	c0-1.5354004-0.8230591-2.8169556-2.5299683-2.8169556c-2.006958,0-3.6184692,2.0753784-3.6184692,4.8569336	c0,1.7700195,0.5984497,2.9684448,0.5984497,2.9684448s-1.9822998,8.3815308-2.3453979,9.9415283	c-0.4019775,1.72229-0.2453003,4.1416016-0.0713501,5.7233887l0,0c0.4511108,0.1768799,0.9024048,0.3537598,1.3687744,0.4981079l0,0	c0.8168945-1.3278198,2.0349731-3.5056763,2.4864502-5.2422485c0.2438354-0.9361572,1.2468872-4.7546387,1.2468872-4.7546387	c0.6515503,1.2438965,2.5561523,2.296936,4.5831299,2.296936c6.0314941,0,10.378418-5.546936,10.378418-12.4400024	C36.7738647,16.3591919,31.3823242,11.4161377,24.4439087,11.4161377z"></path>
                                </svg>
                                <h1 className="text-white text-sm font-normal font-[sans-serif]">Pinterest</h1>
                            </div>
                            <div className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 48 48">
                                    <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                                </svg>
                                <h1 className="text-white text-sm font-normal font-[sans-serif]">Instagram</h1>
                            </div>
                            <div className="flex items-center gap-1">
                                <Image src="/icons8-snapchat.svg" alt="" width={20} height={20} className="" />
                                <h1 className="text-white text-sm font-normal font-[sans-serif]">Snapchat</h1>
                            </div>
                            <div className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 48 48">
                                    <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                                </svg>
                                <h1 className="text-white text-sm font-normal font-[sans-serif]">Youtube</h1>
                            </div>
                        </div>
                    </div>
                    <hr className="max-sm:hidden h-px my-10  w-[384px] md:w-[1100px] bg-white border-0 dark:bg-gray-700"></hr>
                </div>
                {/* <div className="max-sm:hidden flex flex-col justify-center items-center">
                        <h1 className="text-2xl text-white font-[saira] mt-4 mb-2">www.bookyourmua.com</h1>
                        <p className="w-72 text-wrap text-white text-2xl font-[saira] ml-4">&quot;Beauty At Your Fingertips: <span className="ml-5">Your Ultimate Make-Up</span> <span className="ml-6">Artist Booking Place.&quot;</span></p>
                    </div> */}
                <hr className="md:hidden h-px my-6 mx-1 max-w-[400px] bg-white border-0 dark:bg-gray-700"></hr>
                <div className="flex flex-col justify-center items-center md:flex md:flex-row md:items-center md:justify-evenly mb-4 md:mt-0">
                    <strong className="text-6xl md:text-7xl text-[#EA2793] font-[sans-serif]">MUA</strong>
                    <div className="flex flex-col justify-center items-center md:mt-5 text-white text-base font-bold font-[sans-serif]">
                        <h1>Contact Us:</h1>
                        <h1>muateam07@gmail.com</h1>
                        <h1>+91-9307016380</h1>
                    </div>
                </div>
            </div>
            <div className="w-full h-5 bg-[#706C6C] flex justify-center items-center">
                <h1 className="font-normal font-[sans-serif] text-[11px] text-white">&copy; Copyright 2024 MUA. ALL rights reserved.</h1>
            </div>
        </section>
    )
}