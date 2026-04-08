import React from 'react';
// Importing the named exports from your Rti.jsx file
import { RTIPortal, RTIContactRegistry } from '../Rti'; 

export default function RtiPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. The Hero, Search, and Manuals Registry */}
      <RTIPortal />

      {/* 2. The Statutory Contacts Table */}
      <RTIContactRegistry />
      
     
    </main>
  );
}