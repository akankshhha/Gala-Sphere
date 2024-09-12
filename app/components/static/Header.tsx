"use client";

import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="top-0 bg-gradient-to-r from-[#f0e6f6] to-[#e6f5f6] py-6 px-4 sm:px-6 md:px-8 z-50">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-4">
          <Link href="/" className="text-gray-800 hover:text-gray-600">The Metropolitan Museum of Art</Link>
        </h1>
        <nav className="flex space-x-6">
          <Link href="/" className="text-gray-800 hover:text-[#C71585] hover:underline transition-all duration-100 hover:font-semibold">Overview</Link>
          <Link href="/about" className="text-gray-800 hover:text-[#C71585] hover:underline transition-all duration-100 hover:font-semibold">About</Link>
          <Link href="/departments" className="text-gray-800 hover:text-[#C71585] hover:underline transition-all duration-100 hover:font-semibold">Departments</Link>
          {/* <Link href="/gallery" className="text-gray-800 hover:text-gray-600 hover:underline transition-all duration-300">Gallery</Link> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
