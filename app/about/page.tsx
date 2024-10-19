import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html'; // This handles raw HTML as well
import AboutClient from './AboutClient'; // Import the client component

const About = async () => {
  // Read markdown file content on the server
  const filePath = path.join(process.cwd(), 'app/utils/information', 'history.md');
  const markdownContent = fs.readFileSync(filePath, 'utf8');

  // Convert markdown content to HTML using remark-html (which handles raw HTML by default)
  const processedContent = await remark()
    .use(html, { sanitize: false }) // Disable sanitization to allow raw HTML
    .process(markdownContent);

  const contentHtml = processedContent.toString();

  return (
    <div className="flex">
      {/* Pass the HTML content to the client component */}
      <AboutClient initialContentHtml={contentHtml} />
    </div>
  );
};

export default About;
