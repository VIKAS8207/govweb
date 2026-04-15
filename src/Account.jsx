import React, { useState, useEffect, useRef } from 'react';

// FIX: The word 'export' must be exactly here before the function
export function GovernancePortal() {
  const containerStyle = { maxWidth: '1280px' };

  // --- 1. AUDIT & REPORT REGISTRY DATA ---
  const auditReports = [
    { year: "2025-26", report: "Statutory Audit Report", ref: "CIDC/AUD/26/01" },
    { year: "2024-25", report: "Annual Financial Statement", ref: "CIDC/AUD/25/09" },
    { year: "2023-24", report: "CAG Audit Observations", ref: "CIDC/AUD/24/14" },
  ];

  // --- 2. MEETING REGISTRY DATA ---
  const meetings = [
    { type: "AGM", title: "24th Annual General Meeting", date: "15 SEP 2025", doc: "MOM_AGM_24.pdf" },
    { type: "BOARD", title: "Quarterly Board Review - Q3", date: "10 JAN 2026", doc: "MOM_BD_Q3.pdf" },
    { type: "BOARD", title: "Budget Planning Session", date: "05 MAR 2026", doc: "MOM_BD_BGT.pdf" },
  ];

  return (
    <main className="min-h-screen bg-white py-16 font-sans antialiased text-govBlack">
      <div style={containerStyle} className="mx-auto px-6 space-y-16">
        
        {/* --- SECTION 1: STATUTORY IDENTITY --- */}
        <header className="py-2">
          <div className="flex items-center gap-3 mb-2">
             <span className="text-govRed font-heading font-black text-[11px] uppercase tracking-[0.4em]">Governance & Compliance</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-black text-govBlack uppercase tracking-tighter leading-none mb-6">
            Accounts & <span className="text-govRed">Audit Compliance</span>
          </h1>
        </header>

        {/* --- SECTION 2: GRANT POSITION DASHBOARD (KPI MATRIX) --- */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-heading font-black uppercase tracking-tight">Grant Position Dashboard</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-govBlack bg-white shadow-sm overflow-hidden">
            {/* KPI 01 */}
            <div className="p-10 border-b-2 md:border-b-0 md:border-r-2 border-govBlack bg-govGray flex flex-col justify-between h-52">
              <span className="text-[10px] font-heading font-black text-gray-400 uppercase tracking-widest">Total Govt. Grant</span>
              <h3 className="text-5xl font-heading font-black text-govRed tracking-tighter leading-none">₹ 17.00 <span className="text-xl">Cr</span></h3>
              <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest font-sans">Disbursed: FY 2025-2026</p>
            </div>
            
            {/* KPI 02 */}
            <div className="p-10 border-b-2 md:border-b-0 md:border-r-2 border-govBlack bg-white flex flex-col justify-between h-52">
              <span className="text-[10px] font-heading font-black text-gray-400 uppercase tracking-widest">Fund Utilization</span>
              <div>
                <div className="flex justify-between mb-3">
                  <span className="text-2xl font-heading font-black text-govBlack uppercase">68.4%</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-heading pt-2">Target: 100%</span>
                </div>
                <div className="h-4 w-full bg-govGray border border-gray-200">
                  <div className="h-full bg-govBlack transition-all duration-1000" style={{ width: '68.4%' }}></div>
                </div>
              </div>
              <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest font-sans">Quarterly Tracking Active</p>
            </div>

            {/* KPI 03 (Updated with numbers) */}
            <div className="p-10 bg-white flex flex-col justify-between h-52 group transition-all duration-300">
              <span className="text-[10px] font-heading font-black text-gray-400 uppercase tracking-widest ">Compliance Score</span>
              <h3 className="text-5xl font-heading font-black text-govBlack tracking-tighter leading-none">100<span className="text-xl">%</span></h3>
              <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest font-sans">Zero Open Audit Observations</p>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: SHAREHOLDER & MEETING LEDGERS --- */}
        <section className="space-y-12">
          
          {/* Shareholding Position - Now Full Width */}
          <div className="border border-gray-300 bg-white shadow-sm overflow-hidden flex flex-col">
             <div className="bg-govBlack p-5 text-white font-heading font-black uppercase text-xs tracking-widest border-b-4 border-govRed">
                Shareholding Pattern
             </div>
             <div className="p-10 flex flex-col md:flex-row items-center gap-12">
                {/* Left Side: Authorized Shares */}
                <div className="md:w-1/3 w-full border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0 md:pr-10">
                   <p className="text-5xl font-heading font-black text-govBlack leading-none tracking-tighter mb-2">1,50,000</p>
                   <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total Authorized Shares</p>
                </div>
                
                {/* Right Side: Sold Shares / Progress Bar */}
                <div className="md:w-2/3 w-full group">
                   <div className="flex justify-between items-end mb-3">
                      <span className="text-[11px] font-heading font-black uppercase text-govBlack tracking-widest">Shares Sold / Allotted</span>
                      <span className="text-2xl font-heading font-black text-govRed tracking-tighter leading-none">1,23,000</span>
                   </div>
                   <div className="h-3 w-full bg-govGray border border-gray-200">
                     <div className="h-full bg-govRed transition-all duration-1000" style={{ width: '82%' }}></div>
                   </div>
                   <div className="flex justify-between items-end mt-3">
                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Govt. Equity: 82%</span>
                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Unallotted: 27,000</span>
                   </div>
                </div>
             </div>
          </div>

          {/* Meeting Registry Table - Now Full Width */}
          <div className="flex flex-col">
            <div className="border border-gray-300 bg-white shadow-sm flex flex-col">
               <div className="bg-govBlack p-5 text-white font-heading font-black uppercase text-xs tracking-widest border-b-4 border-govRed flex justify-between">
                  <span>Meeting Documentation</span>
                  <span className="text-govRed">MOM REGISTRY</span>
               </div>
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                      <thead>
                          <tr className="bg-govGray text-[10px] font-heading font-black uppercase tracking-widest text-gray-500 border-b border-gray-200">
                              <th className="px-8 py-5 border-r border-gray-200">Nomenclature</th>
                              <th className="px-8 py-5 text-right w-64">Statutory Action</th>
                          </tr>
                      </thead>
                      <tbody className="text-[12px]">
                      {meetings.map((m, i) => (
                          <tr key={i} className="border-b border-gray-200 hover:bg-govGray transition-colors group">
                              <td className="px-8 py-6 border-r border-gray-100">
                                  <h4 className="font-heading font-black text-govBlack uppercase tracking-tight group-hover:text-govRed transition-colors text-[16px] leading-none mb-2">
                                      {m.title}
                                  </h4>
                                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                      {m.type} | REF: {m.date}
                                  </span>
                              </td>
                              <td className="px-8 py-6 text-right">
                                  <button className="bg-govBlack text-white w-full py-4 text-[10px] font-heading font-black uppercase tracking-widest hover:bg-govRed transition-all active:scale-95 shadow-md">
                                    Download »
                                  </button>
                              </td>
                          </tr>
                      ))}
                      </tbody>
                  </table>
               </div>
            </div>

            {/* FLOATING TABLE FOOTER / PAGINATION (Meeting Registry) */}
            <div className="flex justify-between items-center px-2 mt-4">
              <p className="text-[9px] font-heading font-black text-gray-500 uppercase tracking-[0.4em]">Showing 1-3 of 24 Records</p>
              <div className="flex gap-1 items-center">
                {/* Previous Arrow */}
                <button className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 text-gray-400 hover:border-govBlack hover:text-govBlack transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Page Numbers */}
                {[1, 2, 3, '...', 12].map((page, index) => (
                  <button 
                    key={index} 
                    disabled={page === '...'}
                    className={`w-8 h-8 flex items-center justify-center text-[10px] font-heading font-black transition-all border
                      ${page === 1 ? 'bg-govBlack text-white border-govBlack' : 
                        page === '...' ? 'bg-transparent text-gray-400 border-transparent cursor-default' : 
                        'bg-white text-gray-400 border-gray-300 hover:border-govBlack hover:text-govBlack'}`}
                  >
                    {page}
                  </button>
                ))}

                {/* Next Arrow */}
                <button className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 text-gray-400 hover:border-govBlack hover:text-govBlack transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 4: STATUTORY AUDIT REGISTRY TABLE --- */}
        <section className="space-y-6">
          <div className="flex justify-between items-end border-b-2 border-gray-200 pb-4">
            <div>
                <h2 className="text-2xl font-heading font-black uppercase tracking-tight text-govBlack">Financial Audit & <span className="text-govRed">Balance Sheets</span></h2>
                <p className="text-[10px] font-sans font-bold text-gray-400 uppercase tracking-widest mt-1">Authorized Statutory Disclosure Registry</p>
            </div>
            <button className="text-[10px] font-heading font-black text-govRed border-b-2 border-govRed hover:text-govBlack hover:border-govBlack transition-all pb-1 uppercase tracking-widest">
                Access Archives »
            </button>
          </div>

          <div className="flex flex-col">
            <div className="border border-gray-300 overflow-hidden shadow-sm bg-white">
              <table className="w-full text-left border-collapse font-sans">
                <thead>
                  <tr className="bg-govBlack text-white text-[11px] font-heading uppercase tracking-widest">
                    <th className="px-8 py-5 border-r border-white/20 w-40">Financial Year</th>
                    <th className="px-8 py-5 border-r border-white/20">Document Nomenclature</th>
                    <th className="px-8 py-5 border-r border-white/20 text-center">Filing Reference</th>
                    <th className="px-8 py-5 text-right w-56">Statutory Action</th>
                  </tr>
                </thead>
                <tbody className="text-[12px]">
                  {auditReports.map((row, i) => (
                    <tr key={i} className="border-b border-gray-200 hover:bg-govGray transition-colors group cursor-pointer">
                      <td className="px-8 py-8 border-r border-gray-100 font-heading font-black text-govBlack tracking-widest text-sm">
                        {row.year}
                      </td>
                      <td className="px-8 py-8 border-r border-gray-100">
                        <h4 className="font-heading font-black text-govBlack uppercase tracking-tight group-hover:text-govRed transition-colors text-base leading-none mb-2">
                          {row.report}
                        </h4>
                      </td>
                      <td className="px-8 py-8 border-r border-gray-100 text-center font-mono font-bold text-gray-500 uppercase tracking-tighter">
                        {row.ref}
                      </td>
                      <td className="px-8 py-8 text-right">
                        <button className="bg-govBlack text-white w-full py-4 text-[10px] font-heading font-black uppercase tracking-widest hover:bg-govRed transition-all active:scale-95 shadow-md">
                          Download »
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* FLOATING TABLE FOOTER / PAGINATION (Financial Audit) */}
            <div className="flex justify-between items-center px-2 mt-4">
              <p className="text-[9px] font-heading font-black text-gray-500 uppercase tracking-[0.4em]">Showing 1-3 of 15 Records</p>
              <div className="flex gap-1 items-center">
                {/* Previous Arrow */}
                <button className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 text-gray-400 hover:border-govBlack hover:text-govBlack transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Page Numbers */}
                {[1, 2, 3, '...', 5].map((page, index) => (
                  <button 
                    key={index} 
                    disabled={page === '...'}
                    className={`w-8 h-8 flex items-center justify-center text-[10px] font-heading font-black transition-all border
                      ${page === 1 ? 'bg-govBlack text-white border-govBlack' : 
                        page === '...' ? 'bg-transparent text-gray-400 border-transparent cursor-default' : 
                        'bg-white text-gray-400 border-gray-300 hover:border-govBlack hover:text-govBlack'}`}
                  >
                    {page}
                  </button>
                ))}

                {/* Next Arrow */}
                <button className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 text-gray-400 hover:border-govBlack hover:text-govBlack transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}