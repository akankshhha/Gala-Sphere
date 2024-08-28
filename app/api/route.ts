const API_BASE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1';
import { NextResponse } from 'next/server';
import axios from 'axios';


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

export async function searchInDepartment(q: string, departmentId: number, start: number, end: number) {
  const response = await fetch(`${API_BASE_URL}/search?q=${q}&departmentId=${departmentId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch object details');
  }
  const data = await response.json();

  let searchResult;
  if(data !== null) {
     searchResult = await Promise.all(
      data?.objectIDs?.map((id: number) => getObjectDetails(id))
  );
  }

  return searchResult;
}

export async function GET(request: Request) {
  const url = new URL(request.url).searchParams.get('url'); // Extract URL from query parameters

  if (!url) {
    return NextResponse.json({ error: 'No URL provided' }, { status: 400 });
  }

  try {
    const { data } = await axios.get(url);
    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}




