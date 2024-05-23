'use client'

import { useFormState } from "react-dom";
import { createUser } from "@/app/actions/createUser";


const initialState = {
    message : '',
}

export default function Register() {
    const [state, formAction] = useFormState(createUser, initialState);
    return (
        <div className="flex justify-center items-center">
            <div className="rounded-xl mt-6 bg-pink-500 h-[728px] w-[1020px]">
                <div className="flex flex-col gap-4 items-center justify-center">
                    <h1 className="font-semibold text-2xl mt-16">Welcome to MUA</h1>
                    <form action={formAction} className="grid grid-cols-6 mt-8 ml-28 mr-28 gap-4">
                        <input type="text" id="name" placeholder="First Name" className="mt-1 col-span-2 rounded-lg h-12 p-2 bg-white" />
                        <input type="text" placeholder="Last Name" className="mt-1 col-span-2 rounded-lg h-12 p-2  bg-white" />
                        <input type="text" placeholder="DOB" className="mt-1 col-span-2 rounded-lg h-12 p-2 bg-white" />
                        <input type="text" placeholder="Address 1" className="mt-1 col-span-6 rounded-lg h-12 p-2 bg-white" />
                        <input type="text" placeholder="City" className="mt-1 col-span-2 rounded-lg h-12 p-2 bg-white" />
                        <input type="text" placeholder="Region" className="mt-1 col-span-2 rounded-lg h-12 p-2 bg-white" />
                        <input type="text" placeholder="State" className="mt-1 col-span-2 rounded-lg h-12 p-2 bg-white" />
                        <input type="text" placeholder="Mob No." className="mt-1 col-span-3 rounded-lg h-12 p-2 bg-white" />
                        <input type="text" placeholder="Email" className="mt-1 col-span-3 rounded-lg h-12 p-2 bg-white" />
                        <input type="text" placeholder="Shop Act Licence" className="mt-1 col-span-3 rounded-lg h-12 p-2 bg-white" />
                        <input type="text" placeholder="Work Experience" className="mt-1 col-span-2 rounded-lg h-12 p-2 bg-white" />
                        <input type="text" placeholder="Gender" className="mt-1 col-span-1 rounded-lg h-12 p-2 bg-white" />
                        <input type="text" placeholder="Adhar Number" className="mt-1 col-span-3 rounded-lg h-12 p-2 bg-white" />
                        <input type="text" placeholder="Business Number" className="mt-1 col-span-3 rounded-lg h-12 p-2 bg-white" />
                    </form>
                    <button type="submit"  className="mt-16 h-10 w-56 bg-pink-400 shadow-lg rounded-full text-white  hover:bg-pink-300 hover:shadow-2xl  px-12">Register</button>
                </div>
            </div>
        </div>
    );
}
