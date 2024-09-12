"use client";

import Image from 'next/image';
import { useState } from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-[#f0e6f6] to-[#e6f5f6] text-center py-12 px-4 sm:px-6 md:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Step into The Met's World of Art</h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-8">Discover the rich history and exceptional artistry of The Met's unparalleled collection.</p>
      <button className="bg-[#C71585] text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-[#a11474] transition-colors duration-300">
        Discover
      </button>
    </section>
  );
};

const TabsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <section className="py-12 px-4 sm:px-6 md:px-8 max-w-3xl mx-auto">
      <div className="flex border-b border-gray-300 mb-6 justify-center">
        <button
          className={`py-3 px-5 text-lg font-medium cursor-pointer ${activeTab === 'tab1' ? 'bg-[#C71585] text-white' : 'bg-transparent hover:bg-gray-200 text-gray-800'} rounded-t-lg transition-all duration-300`}
          onClick={() => setActiveTab('tab1')}
        >
          Essence
        </button>
        <button
          className={`py-3 px-5 text-lg font-medium cursor-pointer ${activeTab === 'tab2' ? 'bg-[#C71585] text-white' : 'bg-transparent hover:bg-gray-200 text-gray-800'} rounded-t-lg transition-all duration-300`}
          onClick={() => setActiveTab('tab2')}
        >
          Focus
        </button>
        <button
          className={`py-3 px-5 text-lg font-medium cursor-pointer ${activeTab === 'tab3' ? 'bg-[#C71585] text-white' : 'bg-transparent hover:bg-gray-200 text-gray-800'} rounded-t-lg transition-all duration-300`}
          onClick={() => setActiveTab('tab3')}
        >
          Purpose
        </button>
        <button
          className={`py-3 px-5 text-lg font-medium cursor-pointer ${activeTab === 'tab4' ? 'bg-[#C71585] text-white' : 'bg-transparent hover:bg-gray-200 text-gray-800'} rounded-t-lg transition-all duration-300`}
          onClick={() => setActiveTab('tab4')}
        >
          Location
        </button>
      </div>
      <div>
        {activeTab === 'tab1' && (
          <div className="p-6 bg-white shadow-lg rounded-lg mb-6">
            <p>The Metropolitan Museum of Art (The Met) is a prestigious art museum based in New York City, celebrated for its extensive and diverse art collections.</p>
          </div>
        )}
        {activeTab === 'tab2' && (
          <div className="p-6 bg-white shadow-lg rounded-lg mb-6">
            <p>Houses a vast and diverse collection of art from various cultures and historical periods.</p>
          </div>
        )}
        {activeTab === 'tab3' && (
          <div className="p-6 bg-white shadow-lg rounded-lg mb-6">
            <p>To preserve, display, and educate the public about art and its history.</p>
          </div>
        )}
        {activeTab === 'tab4' && (
          <div className="p-6 bg-white shadow-lg rounded-lg mb-6">
            <p>The Met has two locations: The Met Fifth Avenue and The Met Cloisters.</p>
          </div>
        )}
      </div>
    </section>
  );
};

const PhotoGallerySection: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 md:px-8 w-11/12 mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Visual Exhibit</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
          <Image src="/assets/images/met1.jpeg" alt="Gallery Photo 1" layout="fill" objectFit="cover" />
        </div>
        <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
          <Image src="/assets/images/met2.jpg" alt="Gallery Photo 2" layout="fill" objectFit="cover" />
        </div>
        <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
          <Image src="/assets/images/met3.webp" alt="Gallery Photo 3" layout="fill" objectFit="cover" />
        </div>
        {/* Add more images as needed */}
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <HeroSection />
      <TabsSection />
      <PhotoGallerySection />
    </main>
  );
}
