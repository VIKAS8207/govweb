import React, { useState, useEffect, useRef } from 'react';

const StatBlock = ({ label, value, subtext }) => (
  <div className="bg-white border-l-4 border-govBlack p-8 flex flex-col justify-between h-40 hover:bg-govGray transition-colors group shadow-sm">
    <div>
      <p className="text-[10px] font-heading font-black uppercase tracking-[0.4em] text-gray-400 group-hover:text-govRed transition-colors">
        {label}
      </p>
      <h3 className="text-5xl font-heading font-black text-govBlack mt-2 uppercase tracking-tighter leading-none">{value}</h3>
    </div>
    <p className="text-[11px] font-sans font-bold text-gray-500 uppercase tracking-widest">{subtext}</p>
  </div>
);


export function PlanningDashboard() {
  // Locked GOV UI Max Width (7xl / 1280px) for institutional consistency
  const containerStyle = { maxWidth: '1280px' };

  const [tasks, setTasks] = useState([
    { id: 1024, name: "Smart City Integration Framework", dept: "Engineering", date: "2024-12-15", status: "In Progress" },
    { id: 1025, name: "Q3 Budget Reconciliation", dept: "Finance", date: "2024-12-30", status: "Pending" },
    { id: 1026, name: "Staff Capacity Building Phase 2", dept: "Admin", date: "2024-10-22", status: "Completed" },
    { id: 1027, name: "Infrastructure Resilience Audit", dept: "Engineering", date: "2025-01-12", status: "In Progress" }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newTask, setNewTask] = useState({ name: '', dept: 'Engineering', date: '', status: 'Pending' });

  const handleAddTask = () => {
    if (!newTask.name) return;
    const id = Math.floor(Math.random() * 9000) + 1000;
    setTasks([{ ...newTask, id }, ...tasks]);
    setNewTask({ name: '', dept: 'Engineering', date: '', status: 'Pending' });
    setShowAddForm(false);
  };

  const purgeTask = (id) => {
    if(window.confirm("CONFIRM TASK REMOVAL FROM STATUTORY REGISTRY?")) {
      setTasks(tasks.filter(t => t.id !== id));
    }
  };

  return (
    <main className="min-h-screen bg-white py-16 font-sans antialiased text-govBlack">
      <div style={containerStyle} className="mx-auto px-6 space-y-16">
        
        {/* HEADER SECTION - INSTITUTIONAL BRANDING */}
        <section className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-2 border-govBlack pb-8 gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-heading font-black text-govBlack uppercase tracking-tighter leading-none">
              FY 2024-25 <span className="text-govRed">Roadmap</span>
            </h1>
            <p className="text-[11px] font-heading font-black text-gray-500 uppercase tracking-[0.4em] mt-4">
              Institutional Planning & Budgetary Governance Portal
            </p>
          </div>
         
        </section>

       

        {/* METRICS STRIP - STATUTORY KPI GRID */}
        {/* TASK METRICS - Standardized GOV UI Dashboard Layout */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-300 mb-16 bg-white">
  {[
    { 
      label: "Active Tasks", 
      val: tasks.length, 
      sub: "Operational Registry" 
    },
    { 
      label: "Pending", 
      val: tasks.filter(t => t.status === 'Pending').length, 
      sub: "Critical Backlog" 
    },
    { 
      label: "In Progress", 
      val: tasks.filter(t => t.status === 'In Progress').length, 
      sub: "Current Execution" 
    },
    { 
      label: "Completed", 
      val: tasks.filter(t => t.status === 'Completed').length, 
      sub: "Archived Assets" 
    },
  ].map((stat, i) => (
    <div 
      key={i} 
      className="p-10 flex flex-col items-center justify-center text-center border-r border-b lg:border-b-0 border-gray-200 group hover:bg-govGray transition-all duration-300 h-48 last:border-r-0"
    >
      {/* Sub-label: Standard Technical Tag */}
      <span className="text-[9px] font-heading font-black text-gray-400 uppercase tracking-[0.4em] mb-4 group-hover:text-govRed transition-colors">
        {stat.sub}
      </span>
      
      {/* Value: Standard High-Density Typography */}
      <h3 className="text-5xl font-heading font-black text-govBlack tracking-tighter mb-2">
        {stat.val}
      </h3>
      
      {/* Label: Descriptive Metric */}
      <p className="text-[10px] font-heading font-black text-gray-500 uppercase tracking-widest leading-none mb-4">
        {stat.label}
      </p>

      {/* Institutional Accent: Standard Reactive Line */}
      <div className="w-10 h-1 bg-govGray group-hover:w-16 group-hover:bg-govRed transition-all duration-500"></div>
    </div>
  ))}
</div>

        {/* TASK LEDGER - CONSISTENT GOV UI TABLE */}
        <section className="flex flex-col space-y-6">
          <div className="border-b-2 border-gray-200 pb-4">
            <h3 className="text-2xl font-heading font-black uppercase tracking-tight text-govBlack">Task Management <span className="text-govRed">Registry</span></h3>
            <p className="text-[10px] font-sans font-bold text-gray-400 uppercase tracking-widest mt-1">Authorized Deployment Status Ledger</p>
          </div>

          <div className="border border-gray-300 overflow-hidden shadow-sm bg-white">
            <table className="w-full text-left border-collapse font-sans">
              <thead>
                <tr className="bg-govBlack text-white text-[11px] font-heading uppercase tracking-widest">
                  <th className="px-6 py-4 border-r border-white/10 w-2/5">Task Nomenclature / Unique ID</th>
                  <th className="px-6 py-4 border-r border-white/10">Department</th>
                  <th className="px-6 py-4 border-r border-white/10 text-center">Status</th>
                  <th className="px-6 py-4 border-r border-white/10 text-center">Deadline</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="text-[12px]">
                {tasks.map((task, i) => (
                  <tr 
                    key={i} 
                    className="border-b border-gray-200 bg-white hover:bg-govGray transition-colors group cursor-pointer"
                  >
                    <td className="px-6 py-5 border-r border-gray-100">
                      <h4 className="font-heading font-black text-govBlack uppercase tracking-tight group-hover:text-govRed transition-colors leading-none mb-1">
                        {task.name}
                      </h4>
                      <p className="text-[9px] font-sans font-bold text-gray-400 uppercase">REF-ID: {task.id}</p>
                    </td>
                    <td className="px-6 py-5 border-r border-gray-100 font-heading font-black text-gray-500 uppercase tracking-widest">
                      {task.dept}
                    </td>
                    <td className="px-6 py-5 border-r border-gray-100">
                      <div className="flex justify-center">
                        <span className={`px-3 py-1 border-2 text-[9px] font-heading font-black uppercase tracking-widest
                          ${task.status === 'Completed' ? 'border-green-600 text-green-700 bg-green-50' : 
                            task.status === 'In Progress' ? 'border-blue-500 text-blue-600 bg-blue-50' : 
                            'border-govRed text-govRed bg-red-50'}`}>
                          {task.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-5 border-r border-gray-100 text-center font-mono font-bold text-gray-500">
                      {task.date || 'TBD'}
                    </td>
                    <td className="px-6 py-5 text-right">
                      <div className="flex justify-end gap-4">
                        <button className="text-gray-300 hover:text-govBlack transition-all" title="Audit Record">
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                        </button>
                       
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
