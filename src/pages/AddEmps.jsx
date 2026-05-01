import React from 'react';
import { AddEmployee } from '../AddEmp'; 

const AddEmployees = () => {
  return (
    <main className="min-h-screen bg-white">
      <AddEmployee />
    </main>
  );
}

// FIX: Export the component function name, NOT the < /> tags
export default AddEmployees;