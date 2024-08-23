// components/ArtCard.tsx
import * as React from 'react';
import Image from 'next/image';

interface ObjectCardProps {
  title: string;
  medium: string;
  artist: string;
  primaryImage: string;
  objectBeginDate: number,
  objectEndDate: number
}

const ArtCard: React.FC<ObjectCardProps> = ({ title, medium, artist, primaryImage, objectBeginDate ,objectEndDate}) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden w-full sm:w-80 md:w-72 mx-auto">
      <div className="relative w-full h-80 bg-gray-100 rounded-t-md overflow-hidden">
        {
          primaryImage ?  
            <Image
            src={primaryImage}
            alt={title}
            layout="fill"
            className="object-contain"
          />
           : (
            <p>No image available</p>
          )
        }

      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-sm text-gray-700 mb-1">{medium}</p>
        <p className="text-sm text-gray-700">{artist}</p>
        <p className="text-sm text-gray-700">{objectBeginDate + ' - ' + objectEndDate}</p>
      </div>
    </div>
  );
};

export default ArtCard;
