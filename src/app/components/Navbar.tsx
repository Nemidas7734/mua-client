import Image from "next/image";

export default function Navbar() {
  return (
    <nav id="top" className="sticky w-full h-8 md:h-16 md:px-12 md:flex md:justify-between md:items-center bg-violet-400  border-b-2 border-slate-300 shadow-lg z-20 ">
    <div className="flex justify-between items-center mt-3 md:mt-0">
        <div className="flex items-center mx-2 md:mx-0">
            <span className="text-pink-500 text-3xl mx-1 md:text-4xl font-bold">MUA</span>
        </div>
    </div>
    <div className="relative overflow-hidden w-96 h-8 bg-amber-100 rounded-full border-none">
        <input className="relative left-10 bg-transparent top-1" placeholder="Search"></input>
        <Image src="/images/search (2).png" alt="search icon" width={24} height={24} className="absolute z-10 left-2 top-1"></Image>
    </div>
    <button className="block w-20 rounded-xl bg-amber-100 mx-4">LogIn</button>
</nav>
  );
}