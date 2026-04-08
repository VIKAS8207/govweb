import React from 'react';

import { 
  AboutHero, 
  VisionMission, 
  BoardMembers, 
  KeyOfficials 
} from '../AboutUs'; 

const About = () => {
  return (
    <div className="bg-white">
      <AboutHero />
      <VisionMission />
      <BoardMembers />
      <KeyOfficials />
    </div>
  );
};

export default About;