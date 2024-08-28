"use client"

import * as React from 'react';
import ObjectCard from '../../components/static/ObjectCard';
import Link from 'next/link';
import { searchInDepartment, getObjectDetailsWithImages } from '../../api/route'
import { Search, RefreshCcw } from 'react-feather';

export interface IAppProps {
    objectDetails: any,
    totalPages: any,
    department: any,
    page: number,
    start: number,
    end: number
}



export default function App(props: IAppProps) {
    const ITEMS_PER_PAGE = 12;

    const [searchQuery, setSearchQuery] = React.useState('');
    const [artworks, setArtworks] = React.useState(props.objectDetails);
    const [onlyWithImages, setOnlyWithImages] = React.useState(true);

    const getFilteredArtworks = () => {
        return onlyWithImages ? artworks.filter((artwork: any) => artwork.primaryImage && artwork.primaryImage !== "") : artworks;
    }

    // Filter artworks initially
    const filteredArtworks = getFilteredArtworks();

    const handleSearch = () => {
        searchInDepartment(searchQuery, props.department.departmentId).then(res => {
            setArtworks(res)
            setTotalPages( Math.ceil((res?.length || 0) / 12))
        })
    };
    const [totalPages, setTotalPages] = React.useState(Math.ceil(filteredArtworks.length / ITEMS_PER_PAGE));


    const handleCheckboxToggle = () => {
        setOnlyWithImages(prev => {
            const newValue = !prev;
            const filteredResults = newValue ? props.objectDetails.filter((artwork: any) => artwork.primaryImage && artwork.primaryImage !== "") : props.objectDetails;
            setArtworks(filteredResults);
            setTotalPages(Math.ceil(filteredResults.length / ITEMS_PER_PAGE));
            return newValue;
        });
    }

    const resetSearch = () => {
        setSearchQuery('')
        setArtworks(props.objectDetails)
        setTotalPages(props.totalPages)
    }

    return (
        <div className='w-11/12 mx-auto p-10'>
            {/* Breadcrumb Navigation */}
            <nav className="mb-6">
                <ul className="flex space-x-2 text-sm text-gray-700">
                    <li>
                        <Link href="/departments" className="hover:underline">Departments</Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-500"> {props.department.displayName || 'Unknown Department'}</li>
                </ul>
            </nav>

            <div className="flex items-center mb-4">
                <div className="relative w-full max-w-xs flex gap-2">
                    <input
                        type="text"
                        placeholder="Search artworks..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="px-4 py-1 w-full border border-gray-200 rounded-md focus:outline-none focus:border-grey-900 focus:border-2"
                    />
                    <button onClick={() => handleSearch()} className='rounded-lg p-2 bg-gray-200' ><Search size={20} /></button>
                    <button onClick={() => resetSearch()} className='rounded-lg p-2 bg-gray-200'><RefreshCcw size={20} /></button>
                </div>
            </div>
            <div>
                    <input
                        type="checkbox"
                        id="artworkWithImages"
                        checked={onlyWithImages}
                        onChange={handleCheckboxToggle}
                        className="mr-2"
                    />
                    <label htmlFor="artworkWithImages">Artwork with images</label>
                </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                {artworks.map((object: any) => (
                    <Link key={object.objectID} href={`/objects/${object.objectID}`}>
                        <ObjectCard primaryImage={object.primaryImage} title={object.title} medium={object.medium} artist={object.artistDisplayName} objectBeginDate={object.objectBeginDate} objectEndDate={object.objectEndDate} />
                    </Link>
                ))}
            </div>
           
            <div className="flex justify-between mt-6">
                <Link href={`?page=${props.page - 1}`} passHref>
                    <button disabled={props.page <= 1} className="bg-red-100 p-2 rounded-md">Previous</button>
                </Link>
                <span>Page {props.page} of {totalPages}</span>
                <Link href={`?page=${props.page + 1}`} passHref>
                    <button disabled={props.page >= totalPages} className="bg-red-100 p-2 rounded-md">Next</button>
                </Link>
            </div>
        </div>
    );
}
