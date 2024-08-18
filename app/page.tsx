'use client'

import Image from 'next/image';
import { useState } from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-[#FF6F61] to-[#C71585] text-white text-center py-12 px-4 sm:px-6 md:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Welcome to the Met Gala</h1>
      <p className="text-base sm:text-lg md:text-xl mb-8">Explore the latest trends and memorable moments from the Met Gala.</p>
      <button className="bg-white text-[#C71585] px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-base sm:text-lg">
        Discover More
      </button>
    </section>
  );
};

const TabsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tab1')

  return (
    <section className="py-12 px-4 sm:px-6 md:px-8 max-w-2xl mx-auto">
      <div className="flex flex-wrap border-b border-gray-300 mb-6">
        <button className="py-2 px-4 text-base sm:text-lg font-medium cursor-pointer hover:bg-gray-200" onClick={() => setActiveTab('tab1')}>Tab 1</button>
        <button className="py-2 px-4 text-base sm:text-lg font-medium cursor-pointer hover:bg-gray-200" onClick={() => setActiveTab('tab2')} >Tab 2</button>
        <button className="py-2 px-4 text-base sm:text-lg font-medium cursor-pointer hover:bg-gray-200" onClick={() => setActiveTab('tab3')}>Tab 3</button>
      </div>
      <div>
        {/* Content for each tab */}
        {activeTab === 'tab1' && (
          <div className="p-4 bg-white shadow-md rounded-lg mb-6">
            <h2 className="text-lg sm:text-xl font-bold">Content for Tab 1</h2>
            <p>Details about Tab 1.</p>
          </div>
        )}
        {activeTab === 'tab2' && (
          <div className="p-4 bg-white shadow-md rounded-lg mb-6">
            <h2 className="text-lg sm:text-xl font-bold">Content for Tab 2</h2>
            <p>Details about Tab 2.</p>
          </div>
        )}
        {activeTab === 'tab3' && (
          <div className="p-4 bg-white shadow-md rounded-lg mb-6">
            <h2 className="text-lg sm:text-xl font-bold">Content for Tab 3</h2>
            <p>Details about Tab 3.</p>
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
          <Image src="/images/photo1.jpg" alt="Gallery Photo 1" layout="fill" objectFit="cover" />
        </div>
        <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
          <Image src="/images/photo2.jpg" alt="Gallery Photo 2" layout="fill" objectFit="cover" />
        </div>
        <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
          <Image src="/images/photo3.jpg" alt="Gallery Photo 3" layout="fill" objectFit="cover" />
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