
// const About: React.FC = () => {
//     return (
//         <div className="w-9/12 mx-auto py-12">
//             <p>

//                 The Metropolitan Museum of Art, widely known as The Met, is one of the world's largest and most prestigious art museums. It presents an unparalleled collection of over 5,000 years of art from around the globe, offering visitors an opportunity to experience and appreciate a diverse array of artistic traditions. The Met operates two iconic locations in New York City: The Met Fifth Avenue and The Met Cloisters. Each site offers a unique experience, with The Met Fifth Avenue housing a vast collection spanning various periods and cultures, while The Met Cloisters is dedicated to the art and architecture of medieval Europe, set amidst tranquil gardens and medieval-style architecture.
//                 <br /><br />

//                 Since its founding in 1870, The Met has been more than just a repository of art. It is a dynamic cultural institution that strives to engage the public through its exhibitions, educational programs, and events. The museum's mission is to foster a deeper understanding of art and its impact on human history and culture. The Met's collection includes masterpieces from ancient civilizations, European paintings from the Renaissance to the present, and an extensive array of American, Asian, African, and Islamic art.
//                 <br /><br />

//                 The Met's dedication to making art accessible extends beyond its physical locations. Millions of people worldwide engage with The Met's collection and educational resources online, thanks to its extensive digital initiatives. These include virtual exhibitions, online collections, and educational videos that bring the museum's resources to audiences who may not have the opportunity to visit in person.
//                 <br /><br />

//                 Every day, The Met's galleries come alive with the stories told through art, bridging the gap between the past and present and connecting cultures and ideas from across the globe. Through its exhibitions and programs, The Met continues to reveal new insights and forge unexpected connections, enriching the public's understanding and appreciation of the world's artistic heritage.
//             </p>
//         </div>
//     )
// }



// export default About



"use client";

import { useState } from 'react';
const About: React.FC = () => {
  const [activeSection, setActiveSection] = useState('section1');

  const renderContent = () => {
    switch (activeSection) {
      case 'section1':
        return <p>Content for Section 1: Details about the museum's history.</p>;
      case 'section2':
        return <p>Content for Section 2: Information about exhibitions and programs.</p>;
      case 'section3':
        return <p>Content for Section 3: Insights into the museum's collection and archives.</p>;
      default:
        return <p>Select a section to view its content.</p>;
    }
  };

  return (
    <div className="flex">
      {/* <Sidebar onSelect={setActiveSection} /> */}
      <main className="flex-1 p-6 bg-gray-100">
        {renderContent()}
      </main>
    </div>
  );
};

export default About;
