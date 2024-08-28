import * as React from 'react';
import ObjectCard from '../../components/static/ObjectCard';
import Link from 'next/link';

export interface IAppProps {
    objectDetails:any,
    totalPages: number,
    department: any,
    page: number,
    start: number,
    end: number
}

export default function App (props: IAppProps) {
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
            </nav>            <h1 className="text-2xl font-bold mb-4">Objects in Department {props.department.departmentId}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {props.objectDetails.map((object: any) => (
                    <Link key={object.objectID} href={`/objects/${object.objectID}`}>
                        <ObjectCard primaryImage={object.primaryImage} title={object.title} medium={object.medium} artist={object.artistDisplayName} objectBeginDate={object.objectBeginDate} objectEndDate={object.objectEndDate}/>
                    </Link>
                ))}
            </div>
            <div className="flex justify-between mt-6">
                <Link href={`?page=${props.page - 1}`} passHref>
                    <button disabled={props.page <= 1} className="bg-red-100 p-2 rounded-md">Previous</button>
                </Link>
                <span>Page {props.page} of {props.totalPages}</span>
                <Link href={`?page=${props.page + 1}`} passHref>
                    <button disabled={props.page >= props.totalPages} className="bg-red-100 p-2 rounded-md">Next</button>
                </Link>
            </div>
        </div>
    );
}