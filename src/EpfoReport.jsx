import React, { useState, useMemo } from 'react';

export function EpfoReport() {
  // Locked GOV UI Max Width for institutional consistency
  const containerStyle = { maxWidth: '1280px' };

  // --- FILTER STATES ---
  const [selectedMonth, setSelectedMonth] = useState('April');
  const [selectedYear, setSelectedYear] = useState('2026');

  // --- MOCK DATABASE ENGINE ---
  // In a real app, this would be fetched from your backend.
  // April has data (PAID). May is null (PENDING).
  const reportDatabase = {
    "2026-April": [
      { id: 1, pf: "6801", age: "58Year", uan: "100280858980", name: "Shri Premlal Dhurve", dueDate: "08 May 2026", penaltyPct: 5, intPct: 12, wages: 112650, empShare: 13518, employerShare: 1800 },
      { id: 2, pf: "6860", age: "58Year", uan: "100675401053", name: "ShriSanjay Dubay", dueDate: "08 May 2026", penaltyPct: 0, intPct: 0, wages: 0, empShare: 0, employerShare: 0 },
      { id: 3, pf: "4096", age: "58Year", uan: "100332575134", name: "Shri Sanjay Shukla", dueDate: "08 May 2026", penaltyPct: 5, intPct: 12, wages: 60833, empShare: 7300, employerShare: 1800 },
      { id: 4, pf: "5858", age: "58Year", uan: "100117974814", name: "Shri Budhram Patel", dueDate: "08 May 2026", penaltyPct: 5, intPct: 12, wages: 54350, empShare: 6522, employerShare: 1800 },
      { id: 5, pf: "6829", age: "58Year", uan: "100132302340", name: "Shri Deepak Ku. Goswami", dueDate: "08 May 2026", penaltyPct: 5, intPct: 12, wages: 46925, empShare: 5631, employerShare: 1800 },
    ],
    "2026-May": null, // Simulating a month where payment hasn't been made yet
    "2026-June": null,
  };

  // --- DYNAMIC DATA RETRIEVAL ---
  const currentData = reportDatabase[`${selectedYear}-${selectedMonth}`];

  // --- CALCULATIONS (Only if data exists) ---
  const { totalWages, totalEmpShare, totalEmployerShare } = useMemo(() => {
    if (!currentData) return { totalWages: 0, totalEmpShare: 0, totalEmployerShare: 0 };
    return currentData.reduce(
      (acc, emp) => ({
        totalWages: acc.totalWages + emp.wages,
        totalEmpShare: acc.totalEmpShare + emp.empShare,
        totalEmployerShare: acc.totalEmployerShare + emp.employerShare,
      }),
      { totalWages: 0, totalEmpShare: 0, totalEmployerShare: 0 }
    );
  }, [currentData]);

  return (
    <main className="min-h-screen bg-white py-16 font-sans antialiased text-govBlack selection:bg-govRed selection:text-white">
      <div style={containerStyle} className="mx-auto px-6">
        
        {/* =========================================================================
            PROFESSIONAL REPORT CONTROL PANEL
            ========================================================================= */}
        <div className="border-2 border-govBlack bg-white shadow-sm mb-10 overflow-hidden">
          {/* Top Title Bar */}
          <div className="bg-govGray border-b-2 border-govBlack p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-1 bg-govRed"></div>
                <span className="text-[10px] font-heading font-black text-govRed uppercase tracking-widest">Master Ledger</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-heading font-black uppercase tracking-tight text-govBlack leading-none">
                Statutory Clearance <span className="text-govRed">Report</span>
              </h1>
            </div>
            <div className="text-left md:text-right">
               <p className="text-[9px] font-heading font-black text-gray-400 uppercase tracking-widest">Document Ref</p>
               <p className="text-xs font-mono font-bold text-govBlack">CIDC-EPF-REP-26</p>
            </div>
          </div>

          {/* Bottom Filter & Status Bar */}
          <div className="p-6 md:p-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            
            {/* Cycle Selectors */}
<div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
  {/* Left Position: Financial Year */}
  <div className="w-full sm:w-auto">
    <label className="text-[9px] font-heading font-black uppercase text-gray-400 tracking-widest mb-2 block">Financial Year</label>
    <div className="border-2 border-gray-200 bg-white">
      <select 
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
        className="w-full bg-transparent p-3 pr-10 text-[12px] font-heading font-black uppercase tracking-widest outline-none focus:border-govRed transition-colors cursor-pointer text-govBlack appearance-none"
      >
        <option value="2025">2025</option>
        <option value="2026">2026</option>
        <option value="2027">2027</option>
      </select>
    </div>
  </div>
  
  <div className="hidden sm:block text-gray-300 font-black mt-5">/</div>
  
  {/* Right Position: Reporting Month */}
  <div className="w-full sm:w-auto">
    <label className="text-[9px] font-heading font-black uppercase text-gray-400 tracking-widest mb-2 block">Reporting Month</label>
    <div className="border-2 border-gray-200 bg-white">
      <select 
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
        className="w-full bg-transparent p-3 pr-10 text-[12px] font-heading font-black uppercase tracking-widest outline-none focus:border-govRed transition-colors cursor-pointer text-govBlack appearance-none"
      >
        {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(m => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>
    </div>
  </div>
</div>
            {/* Dynamic Status Badges */}
            <div className="flex items-center gap-8 w-full lg:w-auto border-t-2 lg:border-t-0 border-gray-100 pt-6 lg:pt-0">
              <div className="text-left lg:text-right border-r-2 border-gray-200 pr-8">
                 <p className="text-[9px] font-heading font-black text-gray-400 uppercase tracking-widest mb-1">Total Personnel</p>
                 <p className="text-xl font-mono font-bold text-govBlack leading-none">{currentData ? currentData.length : 0}</p>
              </div>
              <div className="text-left lg:text-right">
                 <p className="text-[9px] font-heading font-black text-gray-400 uppercase tracking-widest mb-2">Ledger Status</p>
                 {currentData ? (
                   <span className="bg-green-100 text-green-700 px-4 py-2 text-[10px] font-heading font-black uppercase tracking-widest rounded-sm border border-green-200 flex items-center gap-2 w-max">
                     <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                     Cleared
                   </span>
                 ) : (
                   <span className="bg-amber-100 text-amber-700 px-4 py-2 text-[10px] font-heading font-black uppercase tracking-widest rounded-sm border border-amber-200 flex items-center gap-2 w-max">
                     <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                     Pending
                   </span>
                 )}
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            DYNAMIC CONTENT AREA (Table or Empty State)
            ========================================================================= */}
        <div className="animate-fade-in">
          
          {/* CONDITION A: DATA DOES NOT EXIST (PENDING) */}
          {!currentData ? (
            <div className="border-2 border-amber-500 bg-amber-50 p-12 md:p-20 flex flex-col items-center justify-center text-center shadow-sm">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-6 border-2 border-amber-200">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-heading font-black uppercase tracking-tight text-amber-700 mb-2">
                No Payment Records Found
              </h2>
              <p className="text-amber-600/80 text-[12px] font-bold uppercase tracking-[0.2em] max-w-lg leading-relaxed mt-2">
                The statutory deductions for {selectedMonth} {selectedYear} have not been paid yet. The clearance report will be generated automatically upon successful transaction.
              </p>
            </div>
          ) : (
            
            /* CONDITION B: DATA EXISTS (PAID TABLE) */
            <section className="space-y-4">
              <div className="border-2 border-govBlack overflow-hidden shadow-sm bg-white flex flex-col">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse font-sans min-w-[1200px]">
                    <thead>
                      <tr className="bg-govGray text-govBlack text-[10px] font-heading font-black uppercase tracking-widest border-b-2 border-govBlack text-center">
                        <th className="px-3 py-5 border-r border-govBlack w-12">S.NO.</th>
                        <th className="px-3 py-5 border-r border-govBlack">PF A/C.</th>
                        <th className="px-3 py-5 border-r border-govBlack">EPS AGE</th>
                        <th className="px-4 py-5 border-r border-govBlack text-left">UAN Number</th>
                        <th className="px-4 py-5 border-r border-govBlack text-left whitespace-nowrap">Name of Employee</th>
                        
                        <th className="px-3 py-5 border-r border-govBlack text-center text-govBlack">Due Date</th>
                        <th className="px-3 py-5 border-r border-govBlack text-center text-govRed">Penalty %</th>
                        <th className="px-3 py-5 border-r border-govBlack text-center text-govRed">Interest</th>
                        
                        <th className="px-4 py-5 border-r border-govBlack text-right">Wages</th>
                        <th className="px-4 py-5 border-r border-govBlack text-right text-govBlack">Employee Share</th>
                        <th className="px-4 py-5 border-r border-govBlack text-right text-govBlack">Employer Share</th>
                        
                        <th className="px-4 py-5 text-center text-green-600">Status</th>
                      </tr>
                    </thead>
                    <tbody className="text-[12px]">
                      {currentData.map((emp, index) => (
                        <tr key={emp.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors group">
                          <td className="px-3 py-4 border-r border-gray-200 text-center font-heading font-black text-gray-400">{index + 1}</td>
                          <td className="px-3 py-4 border-r border-gray-200 text-center font-mono font-bold text-govBlack">{emp.pf}</td>
                          <td className="px-3 py-4 border-r border-gray-200 text-center font-heading font-black text-gray-500 uppercase">{emp.age}</td>
                          <td className="px-4 py-4 border-r border-gray-200 text-left font-mono font-bold text-govBlack tracking-widest">{emp.uan}</td>
                          <td className="px-4 py-4 border-r border-gray-200 text-left font-heading font-black uppercase tracking-tight text-govBlack whitespace-nowrap">{emp.name}</td>

                          <td className="px-3 py-4 border-r border-gray-200 text-center font-mono font-bold text-gray-600 whitespace-nowrap">{emp.dueDate}</td>
                          <td className={`px-3 py-4 border-r border-gray-200 text-center font-mono font-bold ${emp.penaltyPct > 0 ? 'text-govRed bg-red-50/50' : 'text-gray-400'}`}>{emp.penaltyPct}%</td>
                          <td className={`px-3 py-4 border-r border-gray-200 text-center font-mono font-bold ${emp.intPct > 0 ? 'text-govRed bg-red-50/50' : 'text-gray-400'}`}>{emp.intPct}%</td>

                          <td className="px-4 py-4 border-r border-gray-200 text-right font-mono font-bold text-gray-700">{emp.wages === 0 ? "0" : emp.wages.toLocaleString('en-IN')}</td>
                          <td className="px-4 py-4 border-r border-gray-200 text-right font-mono font-bold text-govBlack bg-red-50/30">{emp.empShare === 0 ? "0" : emp.empShare.toLocaleString('en-IN')}</td>
                          <td className="px-4 py-4 border-r border-gray-200 text-right font-mono font-bold text-govBlack bg-red-50/30">{emp.employerShare === 0 ? "0" : emp.employerShare.toLocaleString('en-IN')}</td>
                          
                          {/* STATUS COLUMN */}
                          <td className="px-4 py-4 text-center">
                            <span className="bg-green-100 text-green-700 border border-green-200 px-3 py-1 text-[9px] font-heading font-black uppercase tracking-widest rounded-sm">
                              PAID
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="bg-white text-govBlack border-t-4 border-govRed">
                        <td colSpan="8" className="px-4 py-5 text-right font-heading font-black uppercase tracking-[0.3em] text-[12px]">TOTAL</td>
                        <td className="px-4 py-5 border-l border-gray-200 text-right font-mono font-bold text-[14px] tracking-tight">{totalWages.toLocaleString('en-IN')}</td>
                        <td className="px-4 py-5 border-l border-gray-200 text-right font-mono font-bold text-[14px] tracking-tight text-govRed">{totalEmpShare.toLocaleString('en-IN')}</td>
                        <td className="px-4 py-5 border-l border-gray-200 text-right font-mono font-bold text-[14px] tracking-tight text-govRed">{totalEmployerShare.toLocaleString('en-IN')}</td>
                        <td className="px-4 py-5 border-l border-gray-200 bg-gray-50"></td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              {/* EXACT IMAGE MATCH PAGINATION (Outside Table Border, completely isolated) */}
              <div className="flex justify-end pt-4">
                <div className="flex rounded-[2px] overflow-hidden shadow-sm border border-gray-300">
                  <button className="w-10 h-10 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors">
                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <div className="w-px bg-gray-300"></div>
                  <button className="w-10 h-10 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors">
                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>

            </section>
          )}

        </div>
      </div>
    </main>
  );
}