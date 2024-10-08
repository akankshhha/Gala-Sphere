'use client';

import { useEffect, useRef, useState } from 'react';
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';
import Link from 'next/link';
import {ArtworkDetails} from '@/app/components/reusable/ArtworkDetails';
import { constituentsFields, artistDescriptionFields, timePeriodFields, overviewFields } from '../../utils/tabFields'

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


const ObjectDetailsClient: React.FC<any> = ({ objectDetails, departmentId, extractedText, images }) => {
    const [activeTab, setActiveTab] = useState('Overview');
    const [isExpanded, setIsExpanded] = useState(false);
    const [showReadMore, setShowReadMore] = useState(false);
    
    const handleReadMoreToggle = () => {
        setIsExpanded(!isExpanded);
    };

    const checkOverflow = (e: React.RefObject<HTMLDivElement>) => {
        if (e.current) {
            setShowReadMore(e.current.scrollHeight > e.current.clientHeight);
        }
    };

    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        checkOverflow(textRef);
    }, [extractedText.description]);

    const flickityOptions = {
        wrapAround: true,
        contain: true,
        prevNextButtons: true,
        cellAlign: 'center',
        draggable: false,
        adaptiveHeight: true,
    };

    return (
        <div className="mx-auto p-8 rounded-lg mt-8 w-11/12 font-serif">
            {/* Breadcrumb */}
            <nav className="mb-8">
                <ul className="flex space-x-4 text-md font-serif text-gray-700" data-aos="fade-in"  data-aos-duration="1500">
                    <li>
                        <Link href="/departments" className="text-gray-900 hover:text-gray-700 hover:underline transition-colors duration-300">
                            Departments
                        </Link>
                    </li>
                    <li>
                        <span className="text-gray-400">/</span>
                    </li>
                    <li>
                        <Link href={`/departments/${departmentId}`} className="text-gray-900 hover:text-gray-700 hover:underline transition-colors duration-300">
                            {objectDetails.department || 'Unknown Department'}
                        </Link>
                    </li>
                    <li>
                        <span className="text-gray-400">/</span>
                    </li>
                    <li className="text-gray-600 capitalize">
                        {objectDetails.objectName || 'Unknown Object'}
                    </li>
                </ul>
            </nav>

            {/* Top Section: Description and Image */}
            <div className="flex flex-col md:flex-row gap-8 mb-8">
                {/* Left Side: Description */}
                <div className={`md:w-1/3 p-10 ${!extractedText.description ? 'flex items-center justify-center' : ''}`}>
                    <div className={`${!extractedText.description ? 'text-center' : ''}`}>
                        <h1 className="text-3xl font-bold mb-4 text-gray-800">{objectDetails.title}</h1>
                        <p className="text-lg mb-4 italic text-[#C71585] font-semibold">
                            {objectDetails.artistDisplayName || 'Unknown Artist'}
                        </p>
                        <div data-aos = "fade-in" data-aos-duration = "1000">
                        {extractedText.description && (
                            <div className="text-gray-700 leading-relaxed">
                                <div 
                                    className={`transition-max-height duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-screen' : 'max-h-52'}`}
                                    ref={textRef}
                                >
                                    <p>{extractedText.description}</p>
                                </div>
                                {showReadMore && (
                                    <button 
                                        onClick={handleReadMoreToggle}
                                        className="hover:underline mt-2 text-[#C71585] font-semibold"
                                    >
                                        {isExpanded ? 'Read less' : 'Read more...'}
                                    </button>
                                )}
                            </div>
                        )}
                        </div>
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="md:w-2/3 p-10">
                    {images.length > 0 ? (
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
                    )}
                </div>
            </div>

            {/* Divider */}
            <hr className="my-8" />

            {/* Bottom Section: Tabs */}
            <h2 className='text-3xl font-serif font-semibold px-10'>Artwork Details</h2>
            <div className="flex flex-col md:flex-row gap-4 p-10">
                {/* Tabs Navigation */}
                <div className="md:w-1/4 border-r border-gray-200">

                    <ul className="flex md:flex-col">
                        <li
                            className={`p-4 cursor-pointer ${activeTab === 'Overview' ? 'bg-gray-200 font-bold text-[#C71585]' : ''}`}
                            onClick={() => setActiveTab('Overview')}
                        >
                            Overview
                        </li>
                        <li
                            className={`p-4 cursor-pointer ${activeTab === 'Constituents' ? 'bg-gray-200 font-bold text-[#C71585]' : ''}`}
                            onClick={() => setActiveTab('Constituents')}
                        >
                            Constituents
                        </li>
                        <li
                            className={`p-4 cursor-pointer ${activeTab === 'Artist Description' ? 'bg-gray-200 font-bold text-[#C71585]' : ''}`}
                            onClick={() => setActiveTab('Artist Description')}
                        >
                            Artist Description
                        </li>
                        <li
                            className={`p-4 cursor-pointer ${activeTab === 'Time Period' ? 'bg-gray-200 font-bold text-[#C71585]' : ''}`}
                            onClick={() => setActiveTab('Time Period')}
                        >
                            Time Period
                        </li>
                        <li
                            className={`p-4 cursor-pointer ${activeTab === 'Notes' ? 'bg-gray-200 font-bold text-[#C71585]' : ''}`}
                            onClick={() => setActiveTab('Notes')}
                        >
                            Notes
                        </li>
                    </ul>
                </div>

                {/* Tabs Content */}
                <div className="md:w-3/4 p-2">
                    {activeTab === 'Overview' && (
                       <ArtworkDetails 
                       objectDetails={objectDetails}
                       fields={overviewFields}           
                        />
                    )}
                    {activeTab === 'Constituents' && (
                        <ArtworkDetails
                        objectDetails={objectDetails.constituents[0]}
                        fields={constituentsFields}
                      />
                    )}
                    {activeTab === 'Artist Description' && (
                        <ArtworkDetails
                        objectDetails={objectDetails}
                        fields={artistDescriptionFields}
                      />
                    )}
                    {activeTab === 'Time Period' && (
                         <ArtworkDetails
                         objectDetails={objectDetails}
                         fields={timePeriodFields}
                       />
                    )}
                    {activeTab === 'Notes' && (
                        <div className="flex flex-col gap-4" >
                            {extractedText.notes}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ObjectDetailsClient;
