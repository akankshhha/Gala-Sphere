import { getObjectIDs, getObjectDetails } from '../../api/route';
import ObjectCard from '../../components/static/ObjectCard';
import Link from 'next/link';

const ITEMS_PER_PAGE = 12;

const DepartmentPage = async ({ params, searchParams }: { params: { departmentId: number }, searchParams: { page?: string } }) => {
    const { departmentId } = params;

    const page = parseInt(searchParams.page || '1', 10)
    const start = (page - 1) * ITEMS_PER_PAGE; // Page start index
    const end = start + ITEMS_PER_PAGE; // Page end index

    const objectData = await getObjectIDs(departmentId, start, end);
    console.log(objectData)

    const objectDetails = await Promise.all(
        objectData.objectIDs.map((id:number) => getObjectDetails(id))
    );

    const totalPages = Math.ceil(objectData?.total / ITEMS_PER_PAGE);


    return (
        <div className='w-11/12 mx-auto p-10'>
            <h1 className="text-2xl font-bold mb-4">Objects in Department {departmentId}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {objectDetails.map((object: any) => (
                    <Link key={object.objectID} href={`/objects/${object.objectID}`}>
                        <ObjectCard primaryImage={object.primaryImage} title={object.title} medium={object.medium} artist={object.artistDisplayName} />
                    </Link>
                ))}
            </div>
            <div className="flex justify-between mt-6">
                <Link href={`?page=${page - 1}`} passHref>
                    <button disabled={page <= 1} className="bg-gray-300 p-2 rounded-md">Previous</button>
                </Link>
                <span>Page {page} of {totalPages}</span>
                <Link href={`?page=${page + 1}`} passHref>
                    <button disabled={page >= totalPages} className="bg-gray-300 p-2 rounded-md">Next</button>
                </Link>
            </div>
        </div>
    );
};

export default DepartmentPage;
