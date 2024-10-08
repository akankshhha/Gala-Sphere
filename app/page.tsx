"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection: React.FC = () => {

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <section className="bg-gradient-to-r from-[#f0e6f6] to-[#e6f5f6] text-center py-12 px-4 sm:px-6 md:px-8">
     
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" data-aos="fade-in"  data-aos-duration="1000"
    data-aos-easing="ease-in-out"> Step into The Met's World of Art</h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8" data-aos="fade-in"  data-aos-duration="2000"
    data-aos-easing="ease-in-out">Discover the rich history and exceptional artistry of The Met's unparalleled collection.</p>
       <Link href="/departments" ><button className="bg-[#C71585] text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-[#a11474] transition-colors duration-300">
          Discover
        </button></Link> 
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
          <div className="p-6 bg-white shadow-lg rounded-lg mb-6"  data-aos="fade-out" data-aos-duration="500">
            <p>The Metropolitan Museum of Art (The Met) is a prestigious art museum based in New York City, celebrated for its extensive and diverse art collections. The Metropolitan Museum of Art presents over 5,000 years of art from around the world for everyone to experience and enjoy.
              <br />  <br />

              Since it was founded in 1870, The Met has always aspired to be more than a treasury of rare and beautiful objects. Every day, art comes alive in the Museum’s galleries and through its exhibitions and events, revealing both new ideas and unexpected connections across time and across cultures.
            </p>
          </div>
        )}
        {activeTab === 'tab2' && (
          <div className="p-6 bg-white shadow-lg rounded-lg mb-6"  data-aos="fade-out" data-aos-duration="500">
            <p>Houses a vast and diverse collection of art from various cultures and historical periods. The Metropolitan Museum of Art provides select datasets of information on more than 470,000 artworks in its Collection for unrestricted commercial and noncommercial use. </p>
          </div>
        )}
        {activeTab === 'tab3' && (
          <div className="p-6 bg-white shadow-lg rounded-lg mb-6" data-aos="fade-out" data-aos-duration="500">
            <p>To preserve, display, and educate the public about art and its history.  It serves as an educational institution where visitors can engage with a diverse range of artwork, from ancient civilizations to contemporary pieces, promoting cultural understanding and inspiration. The museum also conducts research, supports scholarship, and offers programs that contribute to the global art community.

            </p>
          </div>
        )}
        {activeTab === 'tab4' && (
          <div className="p-6 bg-white shadow-lg rounded-lg mb-6"  data-aos="fade-out" data-aos-duration="500">
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
        
        <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md" data-aos = "fade-in" data-aos-duration="500">
          <Image src="/assets/images/met1.jpeg" alt="Gallery Photo 1" layout="fill" objectFit="cover" />
        </div>
        <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md" data-aos = "fade-in" data-aos-duration="1500">
          <Image src="/assets/images/met2.jpg" alt="Gallery Photo 2" layout="fill" objectFit="cover" />
        </div>
        <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md" data-aos = "fade-in" data-aos-duration="3000">
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
