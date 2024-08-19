"use client";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-[#f9ccdf] to-[#ddebed] text-center py-6 px-4 sm:px-6 md:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-lg sm:text-xl font-bold mb-3">Met Gala 2024</h2>
        <p className="text-base sm:text-lg mb-3">
          Stay connected with us for the latest updates and events.
        </p>
        <div className="flex justify-center gap-4 mb-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
        <p className="text-sm">
          &copy; 2024 Met Gala. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
