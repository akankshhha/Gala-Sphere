import { getObjectDetails } from '../../api/route';
import ObjectDetailsClient from './ObjectDetailsClient';
import { fetchAndParseHTML } from '../../utils/fetchHTML';


const ObjectDetails = async ({ params }: { params: { objectId: number } }) => {
  const { objectId } = params; // Directly access params in server components
  const objectDetails = await getObjectDetails(objectId);

  const url = `https://www.metmuseum.org/art/collection/search/${objectId}`;
  const selector = '.artwork__intro__desc';
  const extractedText = await fetchAndParseHTML(url, selector);

  return <ObjectDetailsClient objectDetails={objectDetails} description = {extractedText}/>;
};

export default ObjectDetails;