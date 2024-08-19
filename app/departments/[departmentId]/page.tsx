import { getObjectIDs, getObjectDetails } from '../../api/route'; 
import ObjectCard from '../../components/static/ObjectCard'; 

const ITEMS_PER_PAGE = 10;

const DepartmentPage = async ({ params }: { params: { departmentId: number } }) => {
  const { departmentId } = params;
  
  // Fetch object IDs for the department
  const objectIDs = await getObjectIDs(departmentId);
  console.log(objectIDs)
  
  // Fetch details for the objects (pagination logic will be applied here)
  const start = 0; // Page start index
  const end = ITEMS_PER_PAGE; // Page end index

  const objectDetails = await Promise.all(
    objectIDs.slice(start, end).map(id => getObjectDetails(id))
  );
  console.log('object details ---->', objectDetails)

  return (
    <div className='w-10/12 mx-auto p-10'>
      <h1 className="text-2xl font-bold mb-4">Objects in Department {departmentId}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {objectDetails.map((object: any) => {
            return(
          <ObjectCard key={object.objectID} title={object.title} medium={object.medium} artist={object.artistDisplayName}/>
        )
        } )}
      </div>
      {/* Add pagination controls here */}
    </div>
  );
};

export default DepartmentPage;
