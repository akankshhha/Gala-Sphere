'use client'

import Image from 'next/image';
import { useState } from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-[#FF6F61] to-[#C71585] text-white text-center py-12 px-4 sm:px-6 md:px-8  mt-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Step into The Met's World of Art</h1>
      <p className="text-base sm:text-lg md:text-xl mb-8">Discover the rich history and exceptional artistry of The Met's unparalleled collection.</p>
      <button className="bg-white text-[#C71585] px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-base sm:text-lg">
        Discover
      </button>
    </section>
  );
};

const TabsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <section className="py-12 px-4 sm:px-6 md:px-8 max-w-2xl mx-auto">
      <div className="flex flex-wrap border-b border-gray-300 mb-6 justify-center">
        <button
          className={`py-2 px-4 text-base sm:text-lg font-medium cursor-pointer ${activeTab === 'tab1' ? 'bg-gradient-to-r from-pink-400 to-purple-500 text-white' : 'hover:bg-gray-200 text-gray-800'} rounded-t-md`}
          onClick={() => setActiveTab('tab1')}
        >
          Essence
        </button>
        <button
          className={`py-2 px-4 text-base sm:text-lg font-medium cursor-pointer ${activeTab === 'tab2' ? 'bg-gradient-to-r from-pink-400 to-purple-500 text-white' : 'hover:bg-gray-200 text-gray-800'} rounded-t-md`}
          onClick={() => setActiveTab('tab2')}
        >
          Focus
        </button>
        <button
          className={`py-2 px-4 text-base sm:text-lg font-medium cursor-pointer ${activeTab === 'tab3' ? 'bg-gradient-to-r from-pink-400 to-purple-500 text-white' : 'hover:bg-gray-200 text-gray-800'} rounded-t-md`}
          onClick={() => setActiveTab('tab3')}
        >
          Purpose
        </button>
        <button
          className={`py-2 px-4 text-base sm:text-lg font-medium cursor-pointer ${activeTab === 'tab4' ? 'bg-gradient-to-r from-pink-400 to-purple-500 text-white' : 'hover:bg-gray-200 text-gray-800'} rounded-t-md`}
          onClick={() => setActiveTab('tab4')}
        >
          Location
        </button>
      </div>
      <div>
        {/* Content for each tab */}
        {activeTab === 'tab1' && (
          <div className="p-6 bg-white shadow-md rounded-lg mb-6">
            <img src="" alt="" />
            <p>The Metropolitan Museum of Art (The Met) is a prestigious art museum based in New York City, celebrated for its extensive and diverse art collections.</p>
          </div>
        )}
        {activeTab === 'tab2' && (
          <div className="p-6 bg-white shadow-md rounded-lg mb-6">
            <p>Houses a vast and diverse collection of art from various cultures and historical periods.

</p>
          </div>
        )}
        {activeTab === 'tab3' && (
          <div className="p-6 bg-white shadow-md rounded-lg mb-6">
            <p>To preserve, display, and educate the public about art and its history.</p>
          </div>
        )}
        {activeTab === 'tab4' && (
          <div className="p-6 bg-white shadow-md rounded-lg mb-6">
            <p>The Met has two locations: The Met Fifth Avenue and The Met Cloisters.</p>
          </div>
        )}
      </div>
    </section>
  );
};


const PhotoGallerySection: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 md:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Photo Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
          <Image src="/assets/images/met1.jpeg" alt="Gallery Photo 1" layout="fill" objectFit="cover" />
        </div>
        <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
          <Image src="/assets/images/met2.jpg" alt="Gallery Photo 2" layout="fill" objectFit="cover" />
        </div>
        <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
          <Image src="/assets/images/met3.webp" alt="Gallery Photo 3" layout="fill" objectFit="cover" />
        </div>
        {/* Add more images as needed */}
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className=" min-h-screen bg-[#FAFAFA] w-9/12 mx-auto">
      <HeroSection />
      <TabsSection />
      <PhotoGallerySection />
    </main>
  );
}