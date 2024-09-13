import { getObjectIDs, getObjectDetails, getDepartments, searchInDepartment } from '../../api/route';
import DepartmentObjectsClient from '../[departmentId]/DepartmentObjectsClient'

const ITEMS_PER_PAGE = 12;

const DepartmentPage = async ({ params, searchParams }: { params: { departmentId: number }, searchParams: { page?: string, q?: string } }) => {
    const { departmentId } = params;
    const query = searchParams.q || '';
    const page = parseInt(searchParams.page || '1', 10);
    const start = (page - 1) * ITEMS_PER_PAGE; // Page start index
    const end = start + ITEMS_PER_PAGE; // Page end index

    let objectData;

    if (query) {
        // Use searchInDepartment for query-based search
        objectData = await searchInDepartment(query, departmentId);
    } else {
        // Default case, get objects by department
        objectData = await getObjectIDs(departmentId, start, end);
    }

    const objectDetails = await Promise.all(
        objectData.objectIDs.slice(start, end).map((id: number) => getObjectDetails(id))
    );

    const totalPages = Math.ceil(objectData?.total / ITEMS_PER_PAGE);

    const { departments } = await getDepartments();
    const department = departments.find((dept: { departmentId: number, displayName: string }) => dept.departmentId === Number(departmentId));

    return (
        <DepartmentObjectsClient 
            objectDetails={objectDetails} 
            totalPages={totalPages} 
            department={department} 
            page={page} 
            start={start} 
            end={end} 
            query={query}
            totalItems = {objectData?.total} // Pass query if present
        />
    );
};


export default DepartmentPage;