import { getDepartmentIDByName, getObjectDetails } from '../../api/route';
import ObjectDetailsClient from './ObjectDetailsClient';
import { fetchAndParseHTML } from '../../utils/fetchHTML';


const ObjectDetails = async ({ params }: { params: { objectId: number } }) => {
  const { objectId } = params; // Directly access params in server components
  const objectDetails = await getObjectDetails(objectId);

  const url = `https://www.metmuseum.org/art/collection/search/${objectId}`;
  const extractedTextDesc = await fetchAndParseHTML(url, '.artwork__intro__desc');
  const extractedTextNotes = await fetchAndParseHTML(url, '#notes', '.show-more__body');

  const extractedText = {
    description: extractedTextDesc,
    notes: extractedTextNotes
  }

  const imagesForFlickity = [...objectDetails.additionalImages, objectDetails.primaryImage]

  const departmentId = await getDepartmentIDByName(objectDetails.department);

  return <ObjectDetailsClient objectDetails={objectDetails} extractedText = {extractedText} images = {imagesForFlickity} departmentId = {departmentId}/>;
};

export default ObjectDetails;