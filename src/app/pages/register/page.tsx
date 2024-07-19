'use client'

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { useRouter } from 'next/navigation';
import { registerForm } from "@/app/firebase/utils/firebase";

const initialState = {
    message: '',
  }


export default function Register() {
    const [state, formAction] = useFormState(registerForm, initialState);
    const { pending } = useFormStatus()
    const router = useRouter();
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state.message === "success") {
            formRef.current?.reset();
            setTimeout(() => {
                router.push('/pages/success'); 
            }, 1000);
        }
    }, [state, router]);


    return (
        <div className="flex justify-center items-center">
            <div className="rounded-xl mt-6 bg-pink-500 h-[728px] w-[1020px]">
                <div className="flex flex-col gap-4 items-center justify-center">
                    <h1 className="font-semibold text-2xl mt-16">Welcome to MUA</h1>
                    <form action={formAction} ref={formRef}>
                        <div className="grid grid-cols-6 mt-8 ml-28 mr-28 gap-4">
                            <input type="text" name="name" id="name" placeholder="First Name" required className="mt-1 col-span-2 rounded-full h-12 p-4 bg-white" />
                            <input type="text" name="lastName" placeholder="Last Name" required className="mt-1 col-span-2 rounded-full h-12 p-4  bg-white" />
                            <input type="date" name="dob" placeholder="DOB" required  className="mt-1 col-span-2 rounded-full h-12 p-4 bg-white" />
                            <input type="text" name="address" placeholder="Address 1" required className="mt-1 col-span-6 rounded-full h-12 p-4 bg-white" />
                            <input type="text" name="city" placeholder="City" required className="mt-1 col-span-2 rounded-full h-12 p-4 bg-white" />
                            <input type="text" name="region" placeholder="Region" required className="mt-1 col-span-2 rounded-full h-12 p-4 bg-white" />
                            <input type="text" name="state" placeholder="State" required className="mt-1 col-span-2 rounded-full h-12 p-4 bg-white" />
                            <input type="tel" name="mobNo" placeholder="Mob No." required maxLength={10} className="mt-1 col-span-3 rounded-full h-12 p-4 bg-white" />
                            <input type="email" name="email" placeholder="Email" required className="mt-1 col-span-3 rounded-full h-12 p-4 bg-white" />
                            <input type="text" name="shopActLicence" placeholder="Shop Act Licence" className="mt-1 col-span-3 rounded-full h-12 p-4 bg-white" />
                            <input type="number" name="workExp" placeholder="Work Experience" required min={0} className="mt-1 col-span-2 rounded-full h-12 p-4 bg-white" />
                            <input type="text" name="gender" placeholder="Gender" required className="mt-1 col-span-1 rounded-full h-12 p-4 bg-white" />
                            <input type="text" name="adharNo" placeholder="Adhar Number" required className="mt-1 col-span-3 rounded-full h-12 p-4 bg-white" />
                            <input type="text" name="pancard" placeholder="PAN Card" className="mt-1 col-span-3 rounded-full h-12 p-4 bg-white" />
                        </div>
                        <p aria-live="polite" className="sr-only">
                            {state?.message}
                        </p>
                        <div className="flex justify-center">
                            <button type="submit" disabled={pending}  className="mt-16 h-10 w-56 bg-pink-400 shadow-lg rounded-full text-white  hover:bg-pink-300 hover:shadow-2xl  px-12">
                                {pending ? "Registering..." : "Register"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
