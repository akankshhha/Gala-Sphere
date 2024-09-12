"use client";

import Link from "next/link";
import Image from 'next/image';


const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-[#f0e6f6] to-[#e6f5f6] text-center py-4 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
      <Image src="/assets/images/museum.png" alt="Gallery Photo 1" width={60}  height={60}/>
      <p className="text-base sm:text-lg mb-6 text-gray-800 text-[#C71585] font-semibold">
      Discover the beauty of art from around the world.
      </p>
        <div className="flex justify-center gap-6 mb-6">
        <Link href="/" className="text-gray-800 hover:text-gray-600 hover:underline transition-all duration-300">Overview</Link>
          <Link href="/about" className="text-gray-800 hover:text-gray-600 hover:underline transition-all duration-300">About</Link>
          <Link href="/departments" className="text-gray-800 hover:text-gray-600 hover:underline transition-all duration-300">Departments</Link>
        </div>
        <p className="text-sm text-gray-800">
          &copy; MET. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
