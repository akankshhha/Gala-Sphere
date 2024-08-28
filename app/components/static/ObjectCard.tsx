import * as React from 'react';
import Image from 'next/image';

interface ObjectCardProps {
  title: string;
  medium: string;
  artist: string;
  primaryImage: string;
  objectBeginDate: number;
  objectEndDate: number;
}

const ArtCard: React.FC<ObjectCardProps> = ({ title, medium, artist, primaryImage, objectBeginDate, objectEndDate }) => {

  const truncateTitle = (title: string) => {
    return title.length > 20 ? `${title.slice(0, 20)}...` : title;
  };

  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden w-full sm:w-80 md:w-72 mx-auto flex flex-col h-full">
      <div className="relative w-full h-80 bg-gray-100 rounded-t-md overflow-hidden flex items-center justify-center">
        {primaryImage ? (
          <Image src={primaryImage} alt={title} layout="fill" className="object-contain" />
        ) : (
          <img src='/assets/images/unavailable-image.png' alt='image unavailable'  className='w-12'/>
        )}
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <h3 className="text-lg font-bold mb-2 text-gray-900 hover:underline">
          {truncateTitle(title)}
        </h3>
        <div>
          <p className="text-sm text-gray-700 mb-1">{medium}</p>
          <p className="text-sm text-gray-700">{artist}</p>
          <p className="text-sm text-gray-700">{objectBeginDate + ' - ' + objectEndDate}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtCard;
