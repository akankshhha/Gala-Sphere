import { getObjectDetails } from '../../api/route'

const ObjectDetails = async ({ params }: {params: { objectId: number}}) => {
    const { objectId } = params; // Directly access params in server components
  
    const objectDetails = await getObjectDetails(objectId);
  
    return (
      <div>
        <h1>{objectDetails.title}</h1>
        <p>{objectDetails.artistDisplayName}</p>
        <img src={objectDetails.primaryImage} alt={objectDetails.title} />
        <p>{objectDetails.objectDate}</p>
        {/* Add more details as needed */}
      </div>
    );
  };
  
  export default ObjectDetails;