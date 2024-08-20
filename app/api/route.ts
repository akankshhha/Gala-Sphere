const API_BASE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1';

// Function to get the list of departments
export async function getDepartments(): Promise<any> {
  try {
    const response = await fetch(`${API_BASE_URL}/departments`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching departments: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch departments:', error);
    throw error;
  }
}

// Function to get the list of objects under the same department ID
export async function getObjectIDs(departmentId: number, start: number, end:number): Promise<any> {
  const response = await fetch(`${API_BASE_URL}/objects?departmentIds=${departmentId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch object IDs');
  }
  const data = await response.json();
  return {
    objectIDs: data.objectIDs.slice(start, end) || [],
    total: data.total || 0
  };}

// Function to get the object details based on objectId
export async function getObjectDetails(objectId: number): Promise<any> {
  const response = await fetch(`${API_BASE_URL}/objects/${objectId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch object details');
  }
  const data = await response.json();
  return data;
}




