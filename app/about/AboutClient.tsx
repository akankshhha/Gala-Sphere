'use client';

import { useState } from 'react';
import '../utils/styles/markdown.css';

interface AboutClientProps {
  contentHtml: { [key: string]: string };
}

const AboutClient: React.FC<AboutClientProps> = ({ contentHtml }) => {
  const [activeSection, setActiveSection] = useState(Object.keys(contentHtml)[0]);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const renderContent = () => (
    <div
      dangerouslySetInnerHTML={{ __html: contentHtml[activeSection] }}
      className="font-serif"
    />
  );

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className={`transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} bg-gray-200 text-gray-800`}>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 bg-gray-300 w-full text-center focus:outline-none font-semibold"
        >
          {isCollapsed ? '>' : '< Collapse'}
        </button>
        <nav className={`mt-4 ${isCollapsed ? 'hidden' : 'block'}`}>
          <ul>
            {Object.keys(contentHtml).map((section, index) => (
              <li
                key={section}
                className={`p-4 cursor-pointer ${
                  activeSection === section
                    ? 'bg-gray-300 text-[#C71585] font-semibold'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
                onClick={() => setActiveSection(section)}
              >
                {section.replace(/-/g, ' ')} {/* Format section name */}
              </li>
            ))}
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
