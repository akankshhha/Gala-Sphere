'use client';

import { useState } from 'react';
import Flickity from 'react-flickity-component'
import 'flickity/css/flickity.css';
<script src="https://unpkg.com/flickity-as-nav-for@3/as-nav-for.js"></script>
import useEmblaCarousel from 'embla-carousel-react'
import EmblaCarousel from '@/app/components/reusable/Embla Carousel/EmblaCarousel';

const ObjectDetailsClient: React.FC<any> = ({ objectDetails, description, images }) => {
    const [emblaRef] = useEmblaCarousel()

    const [activeTab, setActiveTab] = useState('Artwork Details');

    const flickityOptions = {
        wrapAround: true,
        contain: true,
        prevNextButtons: true,
        cellAlign: 'center',
        draggable: false,
        adaptiveHeight: true

      };

    return (
        <div className="mx-auto p-8 rounded-lg mt-8 w-11/12">
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
                {/* {images.length > 0 ? (
                <Flickity
                    className={'carousel'} // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // defaults
                >
                    {images.map((imageURL: string, index: number) => (
                        <div key={index} className="h-96 bg-gray-100 shadow-md p-5">
                            <img
                                src={imageURL}
                                alt={objectDetails.title}
                                className="object-contain w-full h-full carousel-cell"
                            />
                        </div>
                    ))}
                </Flickity>
                
            ) : (
                <div className="w-full h-96 bg-gray-200 flex items-center justify-center rounded-lg">
                    <p className="text-gray-500">No Image Available</p>
                </div>
            )} */}
            <EmblaCarousel images={images}/>

                </div>
            </div>

            {/* Divider */}
            <hr className="my-8" />

            {/* Bottom Section: Tabs */}
            <div className="flex flex-col md:flex-row gap-4 p-10">
                {/* Tabs Navigation */}
                <div className="md:w-1/4 border-r border-gray-200">
                    <ul className="flex md:flex-col">
                        <li
                            className={`p-4 cursor-pointer ${activeTab === 'Artwork Details' ? 'bg-gray-200 font-bold' : ''
                                }`}
                            onClick={() => setActiveTab('Artwork Details')}
                        >
                            Artwork Details
                        </li>
                        <li
                            className={`p-4 cursor-pointer ${activeTab === 'Constituents' ? 'bg-gray-200 font-bold' : ''
                                }`}
                            onClick={() => setActiveTab('Constituents')}
                        >
                            Constituents
                        </li>
                        <li
                            className={`p-4 cursor-pointer ${activeTab === 'Artist Description' ? 'bg-gray-200 font-bold' : ''
                                }`}
                            onClick={() => setActiveTab('Artist Description')}
                        >
                            Artist Description
                        </li>
                        <li
                            className={`p-4 cursor-pointer ${activeTab === 'Time Period' ? 'bg-gray-200 font-bold' : ''
                                }`}
                            onClick={() => setActiveTab('Time Period')}
                        >
                            Time Period
                        </li>
                    </ul>
                </div>

                {/* Tabs Content */}

                <div className="md:w-3/4 p-2">
                    {activeTab === 'Artwork Details' && (
                        <div className='flex flex-col gap-4'>
                            <p><strong>Type of the Art piece:</strong> {objectDetails.objectName || 'N/A'}</p>
                            <p><strong>Medium:</strong> {objectDetails.medium || 'N/A'}</p>
                            <p><strong>Dimensions:</strong> {objectDetails.dimensions || 'N/A'}</p>
                            {/* <p><strong>Measurements:</strong> {objectDetails.measurements || 'N/A'}</p> */}
                            <p><strong>Classification:</strong> {objectDetails.classification || 'N/A'}</p>
                            <p><strong>Accession Number:</strong> {objectDetails.accessionNumber || 'N/A'}</p>
                        </div>
                    )}
                    {activeTab === 'Constituents' && (
                        <div className='flex flex-col gap-4'>
                            <p><strong>Role:</strong> {objectDetails.constituents.role || 'N/A'}</p>
                            <p><strong>Artist:</strong> {objectDetails.constituentsartist || 'N/A'}</p>
                            <p><strong>Gender:</strong> {objectDetails.gender || 'N/A'}</p>
                            <p><strong>Constituent ID:</strong> {objectDetails.constituentID || 'N/A'}</p>
                        </div>
                    )}
                    {activeTab === 'Artist Description' && (
                        <div className='flex flex-col gap-4'>
                            <p><strong>Name:</strong> {objectDetails.artistDisplayName || 'N/A'}</p>
                            <p><strong>Role:</strong> {objectDetails.artistRole || 'N/A'}</p>
                            <p><strong>Nationality:</strong> {objectDetails.artistNationality || 'N/A'}</p>
                            <p><strong>Gender:</strong> {objectDetails.artistGender || 'N/A'}</p>
                            <p><strong>Display Bio:</strong> {objectDetails.artistDisplayBio || 'N/A'}</p>
                        </div>
                    )}
                    {activeTab === 'Time Period' && (
                        <div className='flex flex-col gap-4'>
                            <p><strong>Culture:</strong> {objectDetails.culture || 'N/A'}</p>
                            <p><strong>Period:</strong> {objectDetails.period || 'N/A'}</p>
                            <p><strong>Dynasty:</strong> {objectDetails.dynasty || 'N/A'}</p>
                            <p><strong>Reign:</strong> {objectDetails.reign || 'N/A'}</p>
                            <p><strong>Object Date:</strong> {objectDetails.objectDate || 'N/A'}</p>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default ObjectDetailsClient;
