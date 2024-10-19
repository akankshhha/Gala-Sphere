const API_BASE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1';
import { NextResponse } from 'next/server';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';


export async function getDepartments(): Promise<any> {
  try {
    const response = await fetch(`${API_BASE_URL}/departments`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching departments.`);
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

export async function getDepartmentIDByName(departmentName: string): Promise<number | null> {
  try {
    // Fetch all departments
    const departmentsData = await getDepartments();

    const department = departmentsData.departments.find(
      (dept: { departmentId: number; displayName: string }) => dept.displayName.toLowerCase().includes(departmentName.toLowerCase()
    ));

    return department ? department.departmentId : null;
  } catch (error) {
    console.error('Failed to fetch department ID:', error);
    throw error;
  }
}


export async function searchInDepartment(query: string, departmentId: number, start: number, end: number) {
  try {
      const response = await fetch(
          `https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${departmentId}&q=${query}`
      );
      const data = await response.json();

      if (data.total === 0) {
          return {
              objectIDs: [],  
              total: 0
          };
      }

      return {
          objectIDs:  data.objectIDs.slice(start, end) || [],  
          total: data.total            
      };
  } catch (error) {
      console.error('Error fetching search results:', error);
      return { objectIDs: [], total: 0 };
  }
}



export async function GET(request: Request) {
  const url = new URL(request.url);
  const apiUrl = url.searchParams.get('url'); // For external URL
  const section = url.searchParams.get('section'); // For section identifier

  if (!url) {
    return NextResponse.json({ error: 'No URL provided' }, { status: 400 });
  }if (apiUrl) {
    try {
      const { data } = await axios.get(apiUrl);
      return NextResponse.json({ data });
    } catch (error) {
      console.error('Error fetching data:', error);
      return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
  }

  if (section) {
    let filePath;
    if (section === 'section1') {
      filePath = path.join(process.cwd(), 'app/utils/information', 'history.md');
    } else if (section === 'section2') {
      filePath = path.join(process.cwd(), 'app/utils/information', 'locations.md');
    } else if (section === 'section3') {
      filePath = path.join(process.cwd(), 'app/utils/information', 'archives.md');
    } else {
      return NextResponse.json({ error: 'Invalid section' }, { status: 400 });
    }

    try {
      const markdownContent = fs.readFileSync(filePath, 'utf8');
      const processedContent = await remark().use(html, { sanitize: false }).process(markdownContent);
      const contentHtml = processedContent.toString();
      return NextResponse.json({ contentHtml });
    } catch (error) {
      console.error('Error reading markdown file:', error);
      return NextResponse.json({ error: 'Failed to load content' }, { status: 500 });
    }
  }

  return NextResponse.json({ error: 'No URL or section provided' }, { status: 400 });
}






