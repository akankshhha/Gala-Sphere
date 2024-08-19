// components/ArtCard.tsx
import * as React from 'react';

interface ObjectCardProps {
  title: string;
  medium: string;
  artist: string;
}

const ArtCard: React.FC<ObjectCardProps> = ({ title, medium, artist }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-80 md:w-96 mx-auto p-4">
      <div className="flex flex-col items-start">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-lg text-gray-700 mb-1"><strong>Medium:</strong> {medium}</p>
        <p className="text-lg text-gray-700"><strong>Artist:</strong> {artist}</p>
      </div>
    </div>
  );
};

export default ArtCard;
