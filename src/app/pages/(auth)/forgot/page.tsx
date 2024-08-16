"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { doPasswordReset } from '@/app/firebase/utils/auth';
import { z } from 'zod';
import Image from 'next/image';

const emailSchema = z.object({
    email: z.string().email('Invalid email address'),
});

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setMessage('');
        setIsLoading(true);
        try {
            emailSchema.parse({ email });
            await doPasswordReset(email);
            setMessage('Password reset email sent. Check your inbox.');
        } catch (error) {
            if (error instanceof z.ZodError) {
                setError(error.errors[0].message);
            } else if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('Failed to send password reset email. Please try again.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="relative bg-white md:bg-[#EA2793] md:grid md:grid-cols-2 w-full min-h-screen">
            <div className='form-container w-full min-h-screen p-4'>
                <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 md:gap-2 h-full md:shadow-2xl md:border-2 bg-white border-slate-300 rounded-xl">
                    <div className='flex flex-col gap-12 md:gap-16 max-sm:items-center  mt-1 md:mt-2 mb-6 md:mb-8'>
                        <Link href="/">
                            <Image src="/home.png" alt="Profile" width={35} height={35} className='object-cover md:ml-[520px]' />
                        </Link>
                        <h1 className="text-center font-normal font-[sans-serif] text-black text-3xl md:text-4xl">Forgot Password</h1>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    {message && <p className="text-green-500">{message}</p>}
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
                    <div className='px-0'>
                        <button type="submit" disabled={isLoading} className="border rounded-full py-1 h-[39px] md:h-10 w-[311px] md:w-[440px] mt-2 md:mt-4 font-bold bg-[#EA2793] text-white">
                            {isLoading ? 'Sending...' : 'Reset Password'}
                        </button>
                    </div>
                    <h1 className='text-xs md:mt-2 mb-4'>Remember your password? <br className='md:hidden'></br>
                        <Link className='max-sm:ml-5 max-sm:mt-2 underline underline-offset-4 decoration-black text-pink-500' href="/pages/login">Back to Login</Link>
                    </h1>
                </form>
            </div>
        </section>
    )
}