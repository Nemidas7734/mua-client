'use client'

import { useState, useRef } from "react";
import {  useFormStatus } from "react-dom";
import { useRouter } from 'next/navigation';
import { registerForm } from "@/app/firebase/utils/firebase";
import { ArtistFormData, FormState, step1Schema, step2Schema, step3Schema } from '@/app/lib/validationSchema';
import { useAuthStore } from '@/app/lib/store/authStore';
import { createUserDocument, createArtistDocument } from '@/app/firebase/utils/firebase';
import { LoadingSpinner } from "@/app/components/ui/Loading";


// const initialState: FormState = {
//     message: '',
// };

const initialFormData: Partial<ArtistFormData> = {
    name: '',
    lastName: '',
    dob: '',
    mobNo: '',
    email: '',
    password: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    region: '',
    shopActLicence: '',
    workExp: '',
    adharNo: '',
    pancard: '',
};



export default function Register() {
    // const [state, formAction] = useFormState(registerForm, initialState);
    const { pending } = useFormStatus()
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<Partial<ArtistFormData>>(initialFormData);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isLoading, setIsLoading] = useState(false);

    const formRef = useRef<HTMLFormElement>(null);
    const { register, error: storeError } = useAuthStore();

    // useEffect(() => {
    //     if (state.message === "success") {
    //         setTimeout(() => {
    //             setIsLoading(false);
    //         }, 1000);
    //         formRef.current?.reset();
    //         setTimeout(() => {
    //             router.push('/pages/success');
    //         }, 1000);
    //     } else if (state.message === "validation_error" && state.errors) {
    //         setIsLoading(false);
    //         const newErrors: { [key: string]: string } = {};
    //         state.errors.forEach((error) => {
    //             if (error.path.length > 0 && typeof error.path[0] === 'string') {
    //                 newErrors[error.path[0]] = error.message;
    //             }
    //         });
    //         setErrors(newErrors);
    //         // console.log("validation error", newErrors);
    //     } else if (state.message === "error") {
    //         setIsLoading(false);
    //         const errorMessage = state.errors?.[0]?.message || 'An unexpected error occurred';
    //         setErrors({ general: errorMessage });
    //         // console.log("error", errorMessage);
    //     }
    // }, [state]);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };


    const validateStep = async () => {
        try {
            switch (step) {
                case 1:
                    await step1Schema.parseAsync(formData);
                    break;
                case 2:
                    await step2Schema.parseAsync(formData);
                    break;
                case 3:
                    await step3Schema.parseAsync(formData);
                    break;
            }
            return true;
        } catch (error: any) {
            if (error.errors) {
                const newErrors: { [key: string]: string } = {};
                error.errors.forEach((err: any) => {
                    newErrors[err.path[0]] = err.message;
                });
                setErrors(newErrors);
            }
            return false;
        }
    };

    const nextStep = async () => {
        const isValid = await validateStep();
        if (isValid) {
            setStep(step + 1);
        }
    };

    const prevStep = () => setStep(step - 1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const isValid = await validateStep();
        if (isValid) {
        setIsLoading(true);
            try {
                // Register user in Firebase Authentication
                const userCredential = await register(formData.email!, formData.password!);

                if (userCredential && userCredential.user) {
                    const userId = userCredential.user.uid;

                    // Create user document in Firestore
                    try {
                        await createUserDocument(userId, {
                            email: formData.email,
                            role: 'artist',
                        });
                    } catch (error) {
                        console.error('Error creating user document:', error);
                    }

                    // Create artist document in Firestore
                    try {
                        await createArtistDocument(userId, {
                            ...formData,
                            userId: userId,
                        });
                    } catch (error) {
                        console.error('Error creating artist document:', error);
                    }

                    // Update role in auth store
                    useAuthStore.getState().setUser(userCredential.user, 'artist');

                    router.push('/pages/success');
                } else {
                    throw new Error('User registration failed');
                }
            } catch (error :any) {
                // Handle Firebase Authentication errors specifically
                if (error.code === 'auth/email-already-in-use') {
                    setErrors({ general: 'Email address is already in use' });
                } else {
                    console.error('Registration error:', error);
                    setErrors({ general: 'An error occurred during registration' });
                }
                setIsLoading(false);
            }
        }
    };


    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div className="max-w-[640px] grid grid-cols-1 justify-between m-auto sm:grid-cols-2 gap-4">
                        <div>
                            <input type="text" name="name" placeholder="First Name" onChange={handleInputChange} value={formData.name || ''} required className="rounded-full h-12 p-4 bg-white w-full" />
                            {errors.name && <p className="p-1 px-4 text-black text-xs mt-1">{errors.name}</p>}
                        </div>
                        <div>
                            <input type="text" name="lastName" placeholder="Last Name" onChange={handleInputChange} value={formData.lastName || ''} required className="rounded-full h-12 p-4 bg-white w-full" />
                            {errors.lastName && <p className="p-1 px-4 text-black text-xs mt-1">{errors.lastName}</p>}
                        </div>
                        <div>
                            <input type="date" name="dob" placeholder="DOB" onChange={handleInputChange} value={formData.dob || ''} required className="rounded-full h-12 p-4 bg-white w-full" />
                            {errors.dob && <p className="p-1 px-4 text-black text-xs mt-1">{errors.dob}</p>}
                        </div>
                        <div>
                            <input type="tel" name="mobNo" placeholder="Mobile Number" onChange={handleInputChange} value={formData.mobNo || ''} required maxLength={10} className="rounded-full h-12 p-4 bg-white w-full" />
                            {errors.mobNo && <p className="p-1 px-4 text-black text-xs mt-1">{errors.mobNo}</p>}
                        </div>
                        <div>
                            <input type="email" name="email" placeholder="Email" onChange={handleInputChange} value={formData.email || ''} required className="rounded-full h-12 p-4 bg-white w-full" />
                            {errors.email && <p className="p-1 px-4 text-black text-xs mt-1">{errors.email}</p>}
                        </div>
                        <div>
                            <input type="password" name="password" placeholder="Password" onChange={handleInputChange} value={formData.password || ''} required className="rounded-full h-12 p-4 bg-white w-full" />
                            {errors.password && <p className="p-1 px-4 text-black text-xs mt-1">{errors.password}</p>}
                        </div>
                        <div>
                            <input type="text" name="gender" placeholder="Gender" onChange={handleInputChange} value={formData.gender || ''} required className="rounded-full h-12 p-4 bg-white w-full" />
                            {errors.gender && <p className="p-1 px-4 text-black text-xs mt-1">{errors.gender}</p>}
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="max-w-[640px] grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="col-span-full">
                            <input type="text" name="address" placeholder="Address" onChange={handleInputChange} value={formData.address || ''} required className="rounded-full h-12 p-4 bg-white w-full" />
                            {errors.address && <p className="p-1 px-4 text-black text-xs mt-1">{errors.address}</p>}
                        </div>
                        <div>
                            <input type="text" name="city" placeholder="City" onChange={handleInputChange} value={formData.city || ''} required className="rounded-full h-12 p-4 bg-white w-full" />
                            {errors.city && <p className="p-1 px-4 text-black text-xs mt-1">{errors.city}</p>}
                        </div>
                        <div>
                            <input type="text" name="state" placeholder="State" onChange={handleInputChange} value={formData.state || ''} required className="rounded-full h-12 p-4 bg-white w-full" />
                            {errors.state && <p className="p-1 px-4 text-black text-xs mt-1">{errors.state}</p>}
                        </div>
                        <div>
                            <input type="text" name="region" placeholder="Region" onChange={handleInputChange} value={formData.region || ''} required className="rounded-full h-12 p-4 bg-white w-full" />
                            {errors.region && <p className="p-1 px-4 text-black text-xs mt-1">{errors.region}</p>}
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="max-w-[340px] left-0 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="col-span-full">
                            <input type="text" name="shopActLicence" placeholder="Shop Act Licence" onChange={handleInputChange} value={formData.shopActLicence || ''} className="rounded-full h-12 p-4 bg-white w-full" />
                            {errors.shopActLicence && <p className="p-1 px-4 text-black text-xs mt-1">{errors.shopActLicence}</p>}
                        </div>
                        <div className="col-span-full">
                            <input type="text" name="workExp" placeholder="Work Experience" required onChange={handleInputChange} value={formData.workExp || ''} className="rounded-full h-12 p-4 bg-white w-full" />
                            {errors.workExp && <p className="p-1 px-4 text-black text-xs mt-1">{errors.workExp}</p>}
                        </div>
                        <div className="col-span-full">
                            <input type="text" name="adharNo" placeholder="Adhar Number" required onChange={handleInputChange} value={formData.adharNo || ''} className="rounded-full h-12 p-4 bg-white w-full" />
                            {errors.adharNo && <p className="p-1 px-4 text-black text-xs mt-1">{errors.adharNo}</p>}
                        </div>
                        <div className="col-span-full">
                            <input type="text" name="pancard" placeholder="PAN Card" onChange={handleInputChange} value={formData.pancard || ''} className="rounded-full h-12 p-4 bg-white w-full" />
                            {errors.pancard && <p className="p-1 px-4 text-black text-xs mt-1">{errors.pancard}</p>}
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex justify-center items-center p-4 relative">
            <div className="rounded-xl mt-10 sm:mt-20 bg-pink-500 w-full max-w-[640px] p-4 sm:p-8">
                <div className="flex flex-col gap-4 items-center justify-center">
                    <h1 className="font-semibold text-xl sm:text-2xl mt-8 sm:mt-16">Welcome to MUA</h1>
                    <div className="w-full mb-8">
                        <div className="flex justify-between">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className={`w-1/4 h-2 ${i <= step ? 'bg-white' : 'bg-pink-300'} ${i == 1 ? "rounded-s-full" : ""} ${i == 4 ? "rounded-e-full" : ""} `}></div>
                            ))}
                        </div>
                    </div>
                    <form ref={formRef} onSubmit={handleSubmit} className="w-full">
                        {renderStep()}
                        <div className="flex justify-between mt-8">
                            {step > 1 && (
                                <button type="button" onClick={prevStep} className="h-12 px-8 bg-pink-400 shadow-lg rounded-full text-white hover:bg-pink-300 hover:shadow-2xl">
                                    Previous
                                </button>
                            )}
                            {step < 3 ? (
                                <button type="button" onClick={nextStep} className={`h-12 px-8 bg-pink-400 shadow-lg rounded-full text-white hover:bg-pink-300 hover:shadow-2xl${step == 1 ? "right-0" : ""} `}>
                                    Next
                                </button>
                            ) : step === 3 ? (
                                <button type="submit" disabled={pending || isLoading} className="h-12 px-8 bg-pink-400 shadow-lg rounded-full text-white hover:bg-pink-300 hover:shadow-2xl">
                                    {pending || isLoading ? "Registering..." : "Register"}
                                </button>
                            ) : null}
                        </div>
                    </form>
                </div>
            </div>
            {isLoading && (
                <div className="absolute inset-0 bg-white bg-opacity-40 flex items-center justify-center">
                    <LoadingSpinner />
                </div>
            )}
        </div>
    );
}