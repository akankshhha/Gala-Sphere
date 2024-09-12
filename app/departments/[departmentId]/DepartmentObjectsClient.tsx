import * as React from 'react';
import ObjectCard from '../../components/static/ObjectCard';
import Link from 'next/link';

export interface IAppProps {
    objectDetails: any,
    totalPages: number,
    department: any,
    page: number,
    start: number,
    end: number
}

export default function App(props: IAppProps) {
    return (
        <div className='w-11/12 mx-auto p-8'>
            {/* Breadcrumb Navigation */}
            <nav className="mb-8">
                <ul className="flex space-x-4 text-sm font-serif text-gray-700">
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
                Objects in {props.department.displayName}
            </h1>
            
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
                    Page {props.page} of {props.totalPages}
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
