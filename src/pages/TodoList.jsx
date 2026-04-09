import React from 'react';
// Import the components from your scheme.jsx file
import { PlanningDashboard } from '../ToDo'; 

const TodoListPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <PlanningDashboard />     
    </main>
  );
}

export default TodoListPage;