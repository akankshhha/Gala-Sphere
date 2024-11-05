import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import AboutClient from './AboutClient';

const About = async () => {
  const dirPath = path.join(process.cwd(), 'app/utils/information');
  const fileNames = fs.readdirSync(dirPath).filter(file => file.endsWith('.md'));

  // Object to hold the HTML content of each markdown file
  const contentHtml:any = {};

  // Read and convert each markdown file to HTML
  for (const fileName of fileNames) {
    const filePath = path.join(dirPath, fileName);
    const markdownContent = fs.readFileSync(filePath, 'utf8');
    const processedContent = await remark()
      .use(html, { sanitize: false })
      .process(markdownContent);

    // Use the filename (without extension) as the key
    const sectionName = path.basename(fileName, '.md');
    contentHtml[sectionName] = processedContent.toString();
  }

  return (
    <div className="flex">
      {/* Pass the dynamically generated contentHtml to the client component */}
      <AboutClient contentHtml={contentHtml} />
    </div>
  );
};

export default About;
