"use client";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-[#FF6F61] to-[#C71585] text-white text-center py-8 px-4 sm:px-6 md:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-lg sm:text-xl font-bold mb-4">Met Gala 2024</h2>
        <p className="text-base sm:text-lg mb-4">
          Stay connected with us for the latest updates and events.
        </p>
        <div className="flex justify-center gap-4 mb-6">
          <a href="#" className="text-white hover:underline">Home</a>
          <a href="#" className="text-white hover:underline">About</a>
          <a href="#" className="text-white hover:underline">Contact</a>
        </div>
        <p className="text-sm">
          &copy; 2024 Met Gala. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
