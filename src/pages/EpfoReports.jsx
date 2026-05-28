import React from 'react';
import { EpfoReport } from '../EpfoReport'; 

const EpfoReports = () => {
  return (
    <main className="min-h-screen bg-white">
      <EpfoReport />
    </main>
  );
}

// FIX: Export the component function name, NOT the < /> tags
export default EpfoReports;