import React from 'react';
import Layout from '../Layout'; // Importing the Layout component
import ThirdSection from './ThirdSection'; // Importing the ThirdSection component
import FirstSection from './FirstSection'; // Importing the FirstSection component
import SecondSection from './SecondSection'; // Importing the SecondSection component

// Main HomePage component
const HomePage = () => {
  return (
    // Wrapping the entire page content in the Layout component
    // The 'type="main"' prop likely determines the layout style
    <Layout type="main">
      {/* Main container for the three sections */}
      {/* 
        Tailwind CSS classes:
        - md:grid md:grid-cols-12: Creates a 12-column grid on medium screens and above
        - flex flex-col: Stacks children vertically on smaller screens
        - gap-[0.25rem]: Adds a 0.25rem gap between child elements
        - pt-[0.5rem] pb-[0.5rem]: Adds 0.5rem padding to top and bottom
      */}
      <div className="md:grid md:grid-cols-12 flex flex-col gap-[3px] p-[3px]">
        {/* Rendering the three main sections of the page */}
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </div>
    </Layout>
  );
};

export default HomePage;
