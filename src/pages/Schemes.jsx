import React from 'react';
// Import the components from your scheme.jsx file
import { ProjectsAndSchemes, SchemeDirectory } from '../Scheme'; 

const ProjectsPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. The Header and Registry Table Section */}
      <ProjectsAndSchemes />

      {/* 2. The Interactive Accordion Directory Section */}
      <SchemeDirectory />
           
    </main>
  );
}

export default ProjectsPage;