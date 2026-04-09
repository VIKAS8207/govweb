import React from 'react';

import { 
  Carousel, 
  Heros, 
  LatestUpdates, 
  QuickLinks, 
  AboutSection, 
  DashboardStats, 
  ProjectsAndSchemes 
} from '../Hero';

const Home = () => {
  return (
    <>
      <LatestUpdates />
      <Carousel />
      <QuickLinks />
      <AboutSection />
      <DashboardStats />   
      <Heros />
      <ProjectsAndSchemes />
    </>
  );
};

export default Home;