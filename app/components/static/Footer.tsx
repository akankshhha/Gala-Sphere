const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Met Gala. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;