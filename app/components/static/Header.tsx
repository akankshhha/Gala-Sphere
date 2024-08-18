import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-[#FF6F61] via-[#D83A56] to-[#C71585] text-white p-6 shadow-lg">
      <nav className="flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link href="/">Met Gala</Link>
        </div>
        <div className="space-x-4">
          <Link href="/about" className="hover:text-gray-200">About</Link>
          <Link href="/contact" className="hover:text-gray-200">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;