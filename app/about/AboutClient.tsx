'use client';

import { useState, useEffect } from 'react';
import '../utils/styles/markdown.css'

interface AboutClientProps {
  initialContentHtml: string;
}

const AboutClient:React.FC<AboutClientProps> = ({ initialContentHtml }) => {
  const [activeSection, setActiveSection] = useState('section1');
  const [isCollapsed, setIsCollapsed] = useState(false);

  const renderContent = () => {
    return <div dangerouslySetInnerHTML={{ __html: initialContentHtml }} className="font-serif" />;
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className={`transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} bg-gray-200 text-gray-800 h-screen`}>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 bg-gray-300 w-full text-center focus:outline-none font-semibold"
        >
          {isCollapsed ? '>' : '< Collapse'}
        </button>
        <nav className={`mt-4 ${isCollapsed ? 'hidden' : 'block'}`}>
          <ul>
            <li
              className={`p-4 cursor-pointer ${activeSection === 'section1' ? 'bg-gray-300 text-[#C71585] font-semibold' : 'bg-gray-200 hover:bg-gray-300'}`}
              onClick={() => setActiveSection('section1')}
            >
              Museum History
            </li>
            <li
              className={`p-4 cursor-pointer ${activeSection === 'section2' ? 'bg-gray-300 text-[#C71585] font-semibold' : 'bg-gray-200 hover:bg-gray-300'}`}
              onClick={() => setActiveSection('section2')}
            >
              Museum Locations
            </li>
            <li
              className={`p-4 cursor-pointer ${activeSection === 'section3' ? 'bg-gray-300 text-[#C71585] font-semibold' : 'bg-gray-200 hover:bg-gray-300'}`}
              onClick={() => setActiveSection('section3')}
            >
              Collection & Archives
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-100 p-10">
        {renderContent()}
      </main>
    </div>
  );
};

export default AboutClient;
