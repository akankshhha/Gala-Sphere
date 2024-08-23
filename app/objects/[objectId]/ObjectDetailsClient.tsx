'use client';

import { useState } from 'react';


const ObjectDetailsClient: React.FC<any> = ({ objectDetails, description }) => {
  // Tabs state (initially set to "Overview")
  const [activeTab, setActiveTab] = useState('Artwork Details');

  return (
    <div className="mx-auto p-8 rounded-lg mt-8">
      {/* Top Section: Description and Image */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        {/* Left Side: Description */}
        <div className="md:w-1/3 p-10">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">{objectDetails.title}</h1>
          <p className="text-lg text-gray-600 mb-4 italic">
            {objectDetails.artistDisplayName || 'Unknown Artist'}
          </p>
    
          <div className="text-gray-700 leading-relaxed">
            <p>{description}</p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-2/3 p-10">
          {objectDetails.primaryImage ? (
            <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden shadow-md p-5">
              <img
                src={objectDetails.primaryImage}
                alt={objectDetails.title}
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <div className="w-full h-96 bg-gray-200 flex items-center justify-center rounded-lg">
              <p className="text-gray-500">No Image Available</p>
            </div>
          )}
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8" />

      {/* Bottom Section: Tabs */}
      <div className="flex flex-col md:flex-row gap-8 p-10">
      {/* Tabs Navigation */}
      <div className="md:w-1/4 border-r border-gray-200">
        <ul className="flex md:flex-col">
          <li
            className={`p-4 cursor-pointer ${
              activeTab === 'Artwork Details' ? 'bg-gray-200 font-bold' : ''
            }`}
            onClick={() => setActiveTab('Artwork Details')}
          >
            Artwork Details
          </li>
          <li
            className={`p-4 cursor-pointer ${
              activeTab === 'Constituents' ? 'bg-gray-200 font-bold' : ''
            }`}
            onClick={() => setActiveTab('Constituents')}
          >
            Constituents
          </li>
          <li
            className={`p-4 cursor-pointer ${
              activeTab === 'Artist Description' ? 'bg-gray-200 font-bold' : ''
            }`}
            onClick={() => setActiveTab('Artist Description')}
          >
            Artist Description
          </li>
          <li
            className={`p-4 cursor-pointer ${
              activeTab === 'Time Period' ? 'bg-gray-200 font-bold' : ''
            }`}
            onClick={() => setActiveTab('Time Period')}
          >
            Time Period
          </li>
        </ul>
      </div>

      {/* Tabs Content */}
      <div className="md:w-3/4 p-4">
        {activeTab === 'Artwork Details' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Artwork Details</h2>
            <p>{objectDetails.creditLine || 'No artwork details available.'}</p>
          </div>
        )}
        {activeTab === 'Constituents' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Constituents</h2>
            <p>{'No constituent information available.'}</p>
          </div>
        )}
        {activeTab === 'Artist Description' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Artist Description</h2>
            <p>{objectDetails.artistDescription || 'No artist description available.'}</p>
          </div>
        )}
        {activeTab === 'Time Period' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Time Period</h2>
            <p>{objectDetails.timePeriod || 'No time period information available.'}</p>
          </div>
        )}
      </div>
    </div>

      </div>
  );
};

export default ObjectDetailsClient;
