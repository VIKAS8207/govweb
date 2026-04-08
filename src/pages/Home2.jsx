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
      <Carousel />
      <LatestUpdates />
      <QuickLinks />
      <AboutSection />
      <DashboardStats />   
      <Heros />
      <ProjectsAndSchemes />
    </>
  );
};

export default Home;