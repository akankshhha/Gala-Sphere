"use client"

import * as React from 'react';
import ObjectCard from '../../components/static/ObjectCard';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { RefreshCcw } from 'react-feather';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


export interface IAppProps {
    objectDetails: any,
    totalPages: number,
    department: any,
    page: number,
    start: number,
    end: number,
    query?: string,
    totalItems: number
}

export default function App(props: IAppProps) {

    const router = useRouter();

    const handleRefresh = () => {
        router.push(`/departments/${props.department.departmentId}`); // Replace this URL with the department's base URL
    };

    const handleSearch = () => {
        const query = (document.getElementById('searchInput') as HTMLInputElement).value;
        window.location.href = `?q=${query}`;  // Update URL with search query   
    }

    return (
        <div className='w-11/12 mx-auto p-8'>
            {/* Breadcrumb Navigation */}
            <nav className="mb-8">
                <ul className="flex space-x-4 text-md font-serif text-gray-700" data-aos = "fade-in" data-aos-duration = "1500">
                    <li>
                        <Link href="/departments" className="text-gray-900 hover:text-gray-700 hover:underline transition-colors duration-300">
                            Departments
                        </Link>
                    </li>
                    <li>
                        <span className="text-gray-400">/</span>
                    </li>
                    <li className="text-gray-600 capitalize">
                        {props.department.displayName || 'Unknown Department'}
                    </li>
                </ul>
            </nav>

            <h1 className="text-3xl font-semibold mb-6 text-gray-900 font-serif">
                <div>
                    {props.query ? (
                        <p>
                            Search results for "<span className="text-gray-600">{props.query}</span>" in{' '}
                            <span className="text-[#C71585] font-semibold">{props.department.displayName}</span>
                        </p>
                    ) : (
                        <p>
                            Items in{' '}
                            <span className="text-[#C71585] font-semibold">{props.department.displayName}</span>
                        </p>
                    )}
                </div>
            </h1>

            <div className="flex mb-6">
                <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-l-md"
                    placeholder="Search artwork..."
                    defaultValue={props.query || ''}
                    id="searchInput"
                />
                <button
                    className="bg-gradient-to-r from-[#f0e6f6] to-[#e6f5f6] text-gray-800 px-5 py-3 font-semibold border border-gray-300"
                    onClick={handleSearch}
                >
                    Search
                </button>
                <button
                    className="bg-gradient-to-r from-[#f0e6f6] to-[#e6f5f6] text-gray-800 px-5 py-3 rounded-r-md font-semibold border border-gray-300"
                    onClick={handleRefresh}
                >
                    <RefreshCcw />
                </button>

            </div>

            <div className="text-gray-700 font-semibold mb-4 text-xl font-serif" data-aos = "2000">
                Showing <span className='text-[#C71585] font-bold'>{props.totalItems}</span>  items
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {props.objectDetails.map((object: any) => (
                    <Link key={object.objectID} href={`/objects/${object.objectID}`} passHref>
                        <ObjectCard
                            primaryImage={object.primaryImage}
                            title={object.title}
                            medium={object.medium}
                            artist={object.artistDisplayName}
                            objectBeginDate={object.objectBeginDate}
                            objectEndDate={object.objectEndDate}
                        />
                    </Link>
                ))}
            </div>

            <div className="flex justify-between items-center mt-8">
                {/* Previous Button */}
                <Link href={`?page=${props.page - 1}`} passHref>
                    <button
                        disabled={props.page <= 1}
                        className={`bg-gradient-to-r from-[#f0e6f6] to-[#e6f5f6] font-bold text-gray-700 p-3 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out ${props.page <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gradient-to-l from-[#e6e6e6] to-[#f0f0f0]'}`}
                    >
                        &larr; Previous
                    </button>
                </Link>

                {/* Page Info */}
                <span className="text-gray-700 font-serif text-lg font-medium">
                    Page<span className='text-[#C71585] font-semibold'>{props.page}</span>  of <span className='text-[#C71585] font-semibold'>{props.totalPages}</span> 
                </span>

                {/* Next Button */}
                <Link href={`?page=${props.page + 1}`} passHref>
                    <button
                        disabled={props.page >= props.totalPages}
                        className={`bg-gradient-to-r from-[#f0e6f6] to-[#e6f5f6] font-bold text-gray-700 p-3 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out ${props.page >= props.totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gradient-to-r from-[#e6e6e6] to-[#f0f0f0]'}`}
                    >
                        Next &rarr;
                    </button>
                </Link>
            </div>
        </div>
    );
}
