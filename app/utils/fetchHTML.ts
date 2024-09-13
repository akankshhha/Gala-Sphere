import axios from 'axios';
import * as cheerio from 'cheerio';

export async function fetchAndParseHTML(url: string, selector: string, innerSelector?: string): Promise<string> {
  try {
    // Fetch the HTML content from the URL
    const { data: html } = await axios.get(url, {
      headers: {
        'Content-Type': 'text/html',
      },
    });

    // Load the HTML into cheerio
    const $ = cheerio.load(html);

    let extractedContent: string;

    // Case 1: If innerSelector is provided, treat it as nested inside the main selector (e.g., section ID and class)
    if (innerSelector) {
      extractedContent = $(`${selector} ${innerSelector}`).text().trim();
    } else {
      // Case 2: If only one selector is provided, fetch directly from it (e.g., just a class or an ID)
      extractedContent = $(selector).text().trim();
    }

    // Return the extracted content, or a fallback message if none is found
    return extractedContent || 'Content not found';
  } catch (error) {
    console.error('Error fetching or parsing data:', error);
    return '';
  }
}
