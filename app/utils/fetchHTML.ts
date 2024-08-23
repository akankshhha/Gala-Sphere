import axios from 'axios';
import * as cheerio from 'cheerio';

export async function fetchAndParseHTML(url: string, selector: string): Promise<string> {
  try {
    // Fetch HTML content from the URL
    const { data: html } = await axios.get(url, {
      headers: {
        'Content-Type': 'text/html',
      },
    });

    // Load the HTML into cheerio
    const $ = cheerio.load(html);

    // Extract the text from the specified selector
    const text = $(selector).text().trim();
    return text;
  } catch (error) {
    console.error('Error fetching or parsing data:', error);
    return '';
  }
}
