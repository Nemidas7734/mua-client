"use client"
import React from 'react';
import Image from 'next/image';
import { useEffect } from 'react';
import Link from 'next/link';
import { FormEvent } from 'react'
// import { signIn } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
// import { useSession } from 'next-auth/react';

const Twitterx = () => {
    return (
        <svg 
            // onClick={()=> signIn('twitter')}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 32 32" width="26px" height="26px">
            <path d="M 4.0175781 4 L 13.091797 17.609375 L 4.3359375 28 L 6.9511719 28 L 14.246094 19.34375 L 20.017578 28 L 20.552734 28 L 28.015625 28 L 18.712891 14.042969 L 27.175781 4 L 24.560547 4 L 17.558594 12.310547 L 12.017578 4 L 4.0175781 4 z M 7.7558594 6 L 10.947266 6 L 24.279297 26 L 21.087891 26 L 7.7558594 6 z"/>
        </svg>
    );
  };

const Facebook = () => {
    return(
        <svg 
            // onClick={()=> signIn('facebook')}
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  '
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 48 48" width="34px" height="34px">
            <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"/>
            <path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"/>
        </svg>
    )
}

const Google = () => {
    return (
        <svg 
            // onClick={()=> signIn('google')}
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
            xmlns="http://www.w3.org/2000/svg"  
            viewBox="0 0 48 48" width="30px" height="30px">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
        </svg>
    )
}

export default function Login(){
    return(
        <section className="flex flex-col  items-center bg-gradient-to-b from-[#EA2793] to-[#F27BBD] w-auto h-full">
            <nav id="top" className="sticky flex justify-center rounded-md  w-[1120px] mt-4 h-12 px-12 bg-white  border-slate-300 shadow-lg z-20 ">
                    <div className="flex justify-between w-full items-center mt-3 md:mt-0">
                        <div className="flex justify-center items-center mx-2 md:mx-0">
                            <span className="text-[#EA2793] text-3xl mx-1 md:text-4xl font-bold">MUA</span>
                        </div>
                        <div className="relative overflow-hidden w-96 h-8 bg-amber-100 rounded-full border-none">
                            <input className="relative left-10 bg-transparent top-1" placeholder="Search"></input>
                            <Image src="/images/search (2).png" alt="search icon" width={24} height={24} className="absolute z-10 left-2 top-1"></Image>
                        </div>
                        <button className="block w-20 rounded-xl bg-amber-100 mx-4">LogIn</button>
                    </div>
            </nav>
            <div className="form-container ">
                <div className="flex justify-center items-center mt-10 p-10 max-w-auto ">
                    <form 
                        // onSubmit={handleSubmit}
                        className="flex flex-col items-center justify-center shadow-2xl p-6 border-2 min-w-80 bg-white border-slate-300 rounded-xl">
                        <h1 className="mt-0 text-center mb-1 font-semibold text-pink-500 text-xl">Login</h1>
                        <h1 className='text-xs mb-4'>Don&apos;t have an account ? <Link className='underline underline-offset-4 decoration-black  text-pink-500' href="/pages/signup">SignUp</Link></h1>
                        <div className=" mb-4">
                            <h1 className='text-pink-500 text-xs py-1'>Email</h1>
                            <input
                                type="email"
                                name='email'
                                autoFocus
                                className="border bg-[#FDFFC2] border-slate-500 h-10 w-72 rounded"
                                // id="exampleInputEmail1"
                                // placeholder=" Enter Your Email"
                                // required
                            />
                        </div>
                        <div className="mb-4">
                            <h1 className='text-pink-500 text-xs py-1'>Password</h1>
                            <input
                                type="password"
                                name='password'
                                className="border bg-[#FDFFC2] border-slate-500 px-0 h-10 w-72 rounded"
                                // id="exampleInputPassword1"
                                // placeholder=" Enter Your Password"
                                // required
                            />
                        </div>
                        {/* <div className="mb-4">
                            <button
                                type="button"
                                className="border hover:text-black hover:font-bold hover:border-black"
                                // onClick={() => { navigate("/forgot-password"); }}
                            >
                                Forgot Password 
                            </button>
                        </div> */}
                        <div className='px-0'>
                            <button type="submit" className="border rounded py-1 h-10 mt-2  bg-pink-500 text-white w-72">
                                Login
                            </button>
                        </div>
                        <h1 className='mt-1 text-pink-500'>or</h1>
                        <h1 className='mb-4 text-pink-500'>continue with</h1>
                        <div className="flex items-center justify-center gap-4">
                            <div className='relative h-10 w-20 border shadow-xl border-slate-400 rounded'>
                                <Google/>
                            </div>
                            <div className='relative h-10 w-20 ml-1 mr-1 border shadow-xl border-slate-400 rounded'>
                                <Facebook/>
                            </div>
                            <div className='relative h-10 w-20 border shadow-xl border-slate-400 rounded'>
                                <Twitterx/>
                            </div>
                        </div>
                    </form>
                </div>
        </div>
        </section>
    )
}