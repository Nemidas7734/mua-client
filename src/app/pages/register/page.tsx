export default function Register() {
    return (
        <div className="flex justify-center items-center">
            <div className="rounded-xl mt-6 bg-pink-500 h-[728px] w-[1020px]">
                <div className="flex flex-col gap-4 items-center justify-center">
                    <h1 className="font-semibold text-2xl mt-16">Welcome to MUA</h1>
                    <div className="grid grid-cols-6 mt-8 gap-4">
                        <div className="col-span-2 rounded-lg h-12 w-60 flex p-2 items-center font-light bg-yellow-100">First Name</div>
                        <div className="col-span-2 rounded-lg h-12 w-60 flex p-2 items-center  font-light  bg-yellow-100">Last Name</div>
                        <div className="col-span-2 rounded-lg h-12 w-60 flex p-2 items-center  font-light bg-yellow-100">DOB</div>
                        <div className="mt-2  col-span-6 rounded-lg h-12 flex p-2 items-center font-light  bg-yellow-100">Address 1</div>
                        <div className="mt-2 col-span-2 rounded-lg h-12 w-60 flex p-2 items-center font-light  bg-yellow-100">City</div>
                        <div className="mt-2 col-span-2 rounded-lg h-12 w-60flex p-2 items-center font-light  bg-yellow-100">Region</div>
                        <div className="mt-2 col-span-2 rounded-lg h-12 w-60flex p-2 items-center font-light  bg-yellow-100">State</div>
                        <div className="mt-2 col-start-1 col-end-4 rounded-lg h-12flex p-2 items-center font-light  bg-yellow-100">Mob. No.</div>
                        <div className="mt-2 col-span-3 rounded-lg h-12 flex p-2 items-center font-light  bg-yellow-100">Email</div>
                        <div className="mt-2 col-start-1 col-end-4 rounded-lg h-12flex p-2 items-center font-light  bg-yellow-100">Shop Act Licence</div>
                        <div className="mt-2 col-span-2 rounded-lg h-12 flex p-2 items-center font-light  bg-yellow-100">Work Experience</div>
                        <div className="mt-2 col-span-1 rounded-lg h-12 flex p-2 items-center font-light  bg-yellow-100">Gender</div>
                        <div className="mt-2 col-span-3 rounded-lg h-12 flex p-2 items-center font-light  bg-yellow-100">Adhar Number</div>
                        <div className="mt-2 col-span-3 rounded-lg h-12 flex p-2 items-center font-light  bg-yellow-100">Business Name</div>
                    </div>
                    <button className="mt-16 h-10 w-56 bg-pink-400 shadow-lg rounded-full text-white  px-12">Register</button>
                </div>
            </div>
        </div>
    );
}
