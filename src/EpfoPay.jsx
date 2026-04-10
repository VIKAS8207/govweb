import React, { useState } from 'react';

export function PaymentConfirmation() {
  // Locked GOV UI Max Width for institutional consistency
  const containerStyle = { maxWidth: '1280px' };

  const [employees] = useState([
    { id: 1, name: "Julianne Smith", dept: "Operations", role: "Senior Analyst", date: "Mar 12, 2021", status: "Cleared", color: "border-blue-500 text-blue-700 bg-blue-50" },
    { id: 2, name: "Arthur Morgan", dept: "Public Policy", role: "Director", date: "Jan 05, 2019", status: "Pending", color: "border-amber-500 text-amber-700 bg-amber-50" },
    { id: 3, name: "Lydia Chen", dept: "Finance", role: "Lead Auditor", date: "Nov 22, 2022", status: "Cleared", color: "border-blue-500 text-blue-700 bg-blue-50" },
    { id: 4, name: "Robert Kennedy", dept: "IT Support", role: "Systems Admin", date: "Jul 18, 2023", status: "Overdue", color: "border-govRed text-govRed bg-red-50" },
  ]);

  return (
    <main className="min-h-screen bg-white py-16 font-sans antialiased text-govBlack selection:bg-govRed selection:text-white">
      <div style={containerStyle} className="mx-auto px-6 space-y-16">
        
        {/* --- SECTION 1: STATUTORY IDENTITY --- */}
        <header className="border-l-[8px] border-govRed pl-8 py-2">
          <div className="flex items-center gap-3 mb-2">
             <span className="text-govRed font-heading font-black text-[11px] uppercase tracking-[0.4em]">Administrative Services</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black text-govBlack uppercase tracking-tighter leading-none mb-6">
            Employee <span className="text-govRed">Directory</span>
          </h1>
          <p className="text-gray-500 text-sm font-bold uppercase tracking-widest leading-relaxed max-w-3xl">
            Authorized Personnel Information System. Access and manage statutory employee records, 
            departmental assignments, and compliance verification status.
          </p>
        </header>

        {/* --- SECTION 2: METRICS STRIP (Standard Dashboard Layout) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-300 bg-white shadow-sm overflow-hidden">
          <div className="p-10 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-gray-200 group hover:bg-govGray transition-all duration-300 h-48">
            <span className="text-[9px] font-heading font-black text-gray-400 uppercase tracking-[0.4em] mb-4 group-hover:text-govRed transition-colors">
              Operational Registry
            </span>
            <h3 className="text-5xl font-heading font-black text-govBlack tracking-tighter mb-2">1,240</h3>
            <p className="text-[10px] font-heading font-black text-gray-500 uppercase tracking-widest leading-none mb-4">Total Employees</p>
            <div className="w-10 h-1 bg-govGray group-hover:w-16 group-hover:bg-govRed transition-all duration-500"></div>
          </div>

          <div className="p-10 flex flex-col items-center justify-center text-center border-gray-200 group hover:bg-govGray transition-all duration-300 h-48">
            <span className="text-[9px] font-heading font-black text-gray-400 uppercase tracking-[0.4em] mb-4 group-hover:text-govRed transition-colors">
              Critical Backlog
            </span>
            <h3 className="text-5xl font-heading font-black text-govBlack tracking-tighter mb-2">124</h3>
            <p className="text-[10px] font-heading font-black text-gray-500 uppercase tracking-widest leading-none mb-4">Payment Pending</p>
            <div className="w-10 h-1 bg-govGray group-hover:w-16 group-hover:bg-govRed transition-all duration-500"></div>
          </div>
        </div>

        {/* --- SECTION 3: DIRECTORY REGISTRY TABLE --- */}
        <section className="space-y-6">
          <div className="flex justify-between items-end border-b-2 border-gray-200 pb-4">
            <div>
                <h2 className="text-2xl font-heading font-black uppercase tracking-tight text-govBlack">Personnel <span className="text-govRed">Registry</span></h2>
                <p className="text-[10px] font-sans font-bold text-gray-400 uppercase tracking-widest mt-1">Authorized Statutory Disclosure Ledger</p>
            </div>
            <div className="flex gap-4">
              <button className="bg-govRed text-white px-6 py-2 text-[10px] font-heading font-black uppercase tracking-widest hover:bg-govBlack transition-all shadow-md">
                  + Add Personnel
              </button>
            </div>
          </div>

          <div className="border border-gray-300 overflow-hidden shadow-sm bg-white">
            <table className="w-full text-left border-collapse font-sans">
              <thead>
                <tr className="bg-govBlack text-white text-[11px] font-heading uppercase tracking-widest">
                  <th className="px-8 py-5 border-r border-white/10">Employee Nomenclature</th>
                  <th className="px-8 py-5 border-r border-white/10">Department</th>
                  <th className="px-8 py-5 border-r border-white/10">Designation</th>
                  <th className="px-8 py-5 border-r border-white/10 text-center">Joining Date</th>
                  <th className="px-8 py-5 border-r border-white/10 text-center">Status</th>
                  <th className="px-8 py-5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="text-[12px]">
                {employees.map((emp) => (
                  <tr key={emp.id} className="border-b border-gray-200 hover:bg-govGray transition-colors group cursor-pointer">
                    <td className="px-8 py-6 border-r border-gray-100">
                      <h4 className="font-heading font-black text-govBlack uppercase tracking-tight group-hover:text-govRed transition-colors leading-none">
                        {emp.name}
                      </h4>
                      <p className="text-[9px] font-sans font-bold text-gray-400 uppercase mt-1">REF-ID: 00{emp.id}</p>
                    </td>
                    <td className="px-8 py-6 border-r border-gray-100 font-heading font-black text-gray-500 uppercase tracking-widest">
                      {emp.dept}
                    </td>
                    <td className="px-8 py-6 border-r border-gray-100 font-heading font-black text-gray-400 uppercase tracking-widest">
                      {emp.role}
                    </td>
                    <td className="px-8 py-6 border-r border-gray-100 text-center font-mono font-bold text-gray-400">
                      {emp.date}
                    </td>
                    <td className="px-8 py-6 border-r border-gray-100">
                      <div className="flex justify-center">
                        <span className={`px-4 py-1.5 border-2 text-[9px] font-heading font-black uppercase tracking-widest ${emp.color}`}>
                          {emp.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="text-[10px] font-heading font-black text-gray-400 hover:text-govBlack uppercase tracking-widest border-b border-transparent hover:border-govBlack transition-all">
                        View Profile »
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* TABLE FOOTER / PAGINATION */}
          <div className="flex justify-between items-center bg-govGray p-4 border border-gray-300">
            <p className="text-[9px] font-heading font-black text-gray-400 uppercase tracking-[0.4em]">Auth System Ref: CIDC-HR-2026-R1</p>
            <div className="flex gap-1">
                {[1, 2, 3].map(page => (
                  <button key={page} className={`w-8 h-8 flex items-center justify-center text-[10px] font-heading font-black transition-all border
                    ${page === 1 ? 'bg-govBlack text-white border-govBlack' : 'bg-white text-gray-400 border-gray-200 hover:border-govBlack hover:text-govBlack'}`}>
                    {page}
                  </button>
                ))}
            </div>
          </div>
        </section>

        {/* STATUTORY FOOTER STRIP */}
        <div className="mt-12 flex justify-between items-center opacity-30">
           <p className="text-[9px] font-heading font-black uppercase tracking-[0.4em]">Secure Access Node: CIDC-ADM-04</p>
           <div className="flex gap-2">
              <div className="w-6 h-1 bg-govBlack"></div>
              <div className="w-6 h-1 bg-govRed"></div>
           </div>
        </div>

        {/* --- STATUTORY SETTLEMENT SUMMARY --- */}
<section className="border-2 border-govBlack bg-white shadow-sm overflow-hidden">
  <div className="flex flex-col md:flex-row items-stretch">
    
    {/* Total Payable Amount */}
    <div className="flex-grow p-8 lg:p-10 border-b-2 md:border-b-0 md:border-r-2 border-govBlack flex items-center gap-10">
      <div className="space-y-1">
        <span className="text-[10px] font-heading font-black text-gray-400 uppercase tracking-[0.3em]">Total Principal Amount</span>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-heading font-black text-govBlack tracking-tighter">₹ 12,500</span>
          <span className="text-lg font-heading font-black text-govBlack opacity-40">.00</span>
        </div>
      </div>

      {/* Industrial Divider */}
      <div className="h-12 w-px bg-gray-200 hidden lg:block"></div>

      <div className="space-y-1">
        <span className="text-[10px] font-heading font-black text-govRed uppercase tracking-[0.3em]">Total Penalty / Arrears</span>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-heading font-black text-govRed tracking-tighter">₹ 450</span>
          <span className="text-lg font-heading font-black text-govRed opacity-40">.00</span>
        </div>
      </div>
    </div>

    {/* Final Settlement & Action Trigger */}
    <div className="md:w-1/3 bg-govGray p-8 lg:p-10 flex flex-col justify-center gap-6">
      <div className="flex justify-between items-end border-b border-gray-300 pb-4">
        <div>
          <span className="text-[9px] font-heading font-black text-gray-500 uppercase tracking-widest block mb-1">Net Payable Amount</span>
          <p className="text-2xl font-heading font-black text-govBlack tracking-tight leading-none">₹ 12,950.00</p>
        </div>
        <div className="w-2 h-2 bg-govRed animate-pulse mb-1"></div>
      </div>

      <button className="w-full bg-govBlack text-white py-5 font-heading font-black text-[12px] uppercase tracking-[0.4em] hover:bg-govRed transition-all duration-300 shadow-md active:scale-95 flex items-center justify-center gap-4 group">
        Proceed to Pay Amount
        <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
          <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
    </div>

  </div>
</section>

{/* Registry Metadata Strip */}
<div className="mt-4 flex justify-between items-center px-2">
  <p className="text-[8px] text-gray-400 uppercase tracking-[0.4em] font-heading font-black">
    Calculation Context: CIDC-PAY-STAT-2026
  </p>
  <div className="flex gap-2">
    <div className="w-4 h-1 bg-govBlack"></div>
    <div className="w-4 h-1 bg-govRed"></div>
  </div>
</div>

      </div>

      
    </main>
  );
};