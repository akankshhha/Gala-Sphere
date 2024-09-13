'use client';

import { useState } from 'react';

const About: React.FC = () => {
  const [activeSection, setActiveSection] = useState('section1');
  const [isCollapsed, setIsCollapsed] = useState(false); // Manage collapse state

  const renderContent = () => {
    switch (activeSection) {
      case 'section1':
        return <p>Content for Section 1: Details about the museum's history.</p>;
      case 'section2':
        return <p>Content for Section 2: Information about exhibitions and programs.</p>;
      case 'section3':
        return <p>Content for Section 3: Insights into the museum's collection and archives.</p>;
      default:
        return <p>Select a section to view its content.</p>;
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className={`transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} bg-gray-200 text-gray-800 h-screen`}>
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)} 
          className="p-2 bg-gray-300 w-full text-center focus:outline-none font-semibold"
        >
          {isCollapsed ? '>' : '< Collapse'} {/* Toggle collapse icon */}
        </button>
        <nav className={`mt-4 ${isCollapsed ? 'hidden' : 'block'}`}>
          <ul>
            <li className={`p-4 cursor-pointer ${activeSection === 'section1' ? 'bg-gray-300 text-[#C71585] font-semibold' : 'bg-gray-200 hover:bg-gray-300'}`}
              onClick={() => setActiveSection('section1')}>
              Museum History
            </li>
            <li className={`p-4 cursor-pointer ${activeSection === 'section2' ? 'bg-gray-300 text-[#C71585] font-semibold' : 'bg-gray-200 hover:bg-gray-300'}`}
              onClick={() => setActiveSection('section2')}>
              Exhibitions & Programs
            </li>
            <li className={`p-4 cursor-pointer ${activeSection === 'section3' ? 'bg-gray-300 text-[#C71585] font-semibold' : 'bg-gray-200 hover:bg-gray-300'}`}
              onClick={() => setActiveSection('section3')}>
              Collection & Archives
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 bg-gray-100">
        {renderContent()}
      </main>
    </div>
  );
};

export default About;
