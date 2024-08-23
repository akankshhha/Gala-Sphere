"use client";

import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="top-0 bg-gradient-to-r from-[#f9ccdf] to-[#ddebed] py-4 px-4 sm:px-6 md:px-8 z-50">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">
          <Link href="/">The Metropolitan Museum of Art</Link>
        </h1>
        <nav className="flex space-x-4">
          <Link href="/" className="hover:underline">Overview</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/departments" className="hover:underline">Departments</Link>
          {/* <Link href="/gallery" className="hover:underline">Gallery</Link> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
