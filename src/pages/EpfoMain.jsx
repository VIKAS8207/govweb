import React from 'react';
import { EPFOVerificationGateway } from '../Epfo'; 

const EpfoIn = () => {
  return (
    <main className="min-h-screen bg-white">
      <EPFOVerificationGateway />
    </main>
  );
}

// FIX: Export the component function name, NOT the < /> tags
export default EpfoIn;