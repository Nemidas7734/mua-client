"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/app/lib/store/authStore';
import { z } from 'zod';

const signupSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});



const Facebook = () => {
    return (
        <svg
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  '
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48" width="34px" height="34px">
            <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z" />
            <path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z" />
        </svg>
    )
}

const Google = () => {
    return (
        <svg
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48" width="30px" height="30px">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
        </svg>
    )
}

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const { register, isLoading, error: storeError, user } = useAuthStore();
    const router = useRouter();

    useEffect(() => {
        if (user) {
            router.push('/');
        }
    }, [user, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            signupSchema.parse({ email, password, confirmPassword });
            await register(email, password);
        } catch (error) {
            if (error instanceof z.ZodError) {
                setError(error.errors[0].message);
            } else if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('An unexpected error occurred');
            }
        }
    };


    return (
        <section className="relative md:bg-[#EA2793] md:grid md:grid-cols-2 w-full min-h-screen">
            <div className='max-sm:hidden'></div>
            <div className='form-container w-full min-h-screen p-4'>
                <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 md:gap-2 h-full md:shadow-2xl md:border-2 bg-white border-slate-300 rounded-xl">
                    <h1 className="text-center mt-16 mb-8 font-normal font-[Damion] text-black text-3xl md:text-5xl">Get Started</h1>
                    {error && <p className="text-red-500">{error}</p>}
                    {storeError && <p className="text-red-500">{storeError}</p>}
                    <input
                        type="email"
                        name='email'
                        autoFocus
                        className="border-2 border-[#EA279380] p-2 h-[39px] md:h-11 w-[311px] md:w-[440px] rounded-full placeholder:text-sm"
                        id="inputEmail"
                        placeholder=" Enter Your Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        name='password'
                        className="border-2 border-[#EA279380] p-2 h-[39px] md:h-11 w-[311px] md:w-[440px] rounded-full placeholder:text-sm"
                        id="inputPassword"
                        placeholder="Create Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        name='confirmPassword'
                        className="border-2 border-[#EA279380] p-2 h-[39px] md:h-11 w-[311px] md:w-[440px] rounded-full placeholder:text-sm"
                        id="inputConfirmPassword"
                        placeholder="Confirm Password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div className='px-0'>
                        <button type="submit" disabled={isLoading} className="border rounded-full py-1 h-[39px] md:h-10 w-[311px] md:w-[440px] mt-2 md:mt-4 font-bold bg-[#EA2793] text-white">
                            {isLoading ? 'Signing up...' : 'Sign up'}
                        </button>
                    </div>
                    <h1 className='text-xs mt-2 md:mb-1'>Forgot Password?</h1>
                    <h1 className='mt-0 text-pink-500'>or</h1>
                    <h1 className='text-xs md:mt-2 mb-4'>Already have an account ? <Link className='underline underline-offset-4 decoration-black  text-pink-500' href="/pages/login">Login</Link></h1>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <div className='relative flex justify-center items-center gap-1 h-[39px] md:h-10 w-[311px] md:w-[440px] border-2 border-[#EA279380] rounded-full'>
                            <div className='relative w-10 h-10'>
                                <Google />
                            </div>
                            <h1 className='text-xs'>Signup with google</h1>
                        </div>
                        <div className='relative flex justify-center items-center gap-1 h-[39px] md:h-10 w-[311px] md:w-[440px] border-2 border-[#EA279380] rounded-full'>
                            <div className='relative w-10 h-10'>
                                <Facebook />
                            </div>
                            <h1 className='text-xs'>Signup with Facebook</h1>
                        </div>
                    </div>
                    <h1 className='text-xs mt-5 md:mt-10 mb-5'>Are you a makeup artist ? <Link className='underline underline-offset-4 decoration-pink-500 font-bold text-pink-500' href="/pages/register">Yes</Link></h1>
                </form>
            </div>
        </section>
    )
}