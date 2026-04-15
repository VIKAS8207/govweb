import React, { useState } from 'react';

export function PaymentConfirmation() {
  // Locked GOV UI Max Width for institutional consistency
  const containerStyle = { maxWidth: '1280px' };

  // Data extracted exactly from the provided spreadsheet image
  const [employees] = useState([
    { id: 1, pf: "6801", age: "-", uan: "100280858980", name: "Shri Premlal Dhurve", wages: 112650, empShare: 13518, employerShare: 1800 },
    { id: 2, pf: "6860", age: "58", uan: "100675401053", name: "ShriSanjay Dubay", wages: 0, empShare: 0, employerShare: 0 },
    { id: 3, pf: "4096", age: "58Year", uan: "100332575134", name: "Shri Sanjay Shukla", wages: 60833, empShare: 7300, employerShare: 1800 },
    { id: 4, pf: "5858", age: "58Year", uan: "100117974814", name: "Shri Budhram Patel", wages: 54350, empShare: 6522, employerShare: 1800 },
    { id: 5, pf: "6829", age: "58", uan: "100132302340", name: "Shri Deepak Ku. Goswami", wages: 46925, empShare: 5631, employerShare: 1800 },
  ]);

  // --- DYNAMIC CALCULATIONS ---
  const totalWages = employees.reduce((sum, emp) => sum + emp.wages, 0);
  const totalEmpShare = employees.reduce((sum, emp) => sum + emp.empShare, 0);
  const totalEmployerShare = employees.reduce((sum, emp) => sum + emp.employerShare, 0);
  
  const principalAmount = totalEmpShare + totalEmployerShare;
  const taxAmount = 850.00; // Example Statutory Tax / Admin Charge
  const penaltyAmount = 1240.00; // Example Late Penalty Assessment
  const netPayable = principalAmount + taxAmount + penaltyAmount;

  return (
    <main className="min-h-screen bg-white py-16 font-sans antialiased text-govBlack selection:bg-govRed selection:text-white">
      <div style={containerStyle} className="mx-auto px-6 space-y-16">
        
        {/* --- SECTION 1: STATUTORY IDENTITY --- */}
        <header className="border-l-[8px] border-govRed pl-8 py-2">
          <div className="flex items-center gap-3 mb-2">
             <span className="text-govRed font-heading font-black text-[11px] uppercase tracking-[0.4em]">Financial Compliance</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black text-govBlack uppercase tracking-tighter leading-none mb-6">
            EPFO Contribution <span className="text-govRed">Registry</span>
          </h1>
          <p className="text-gray-500 text-sm font-bold uppercase tracking-widest leading-relaxed max-w-3xl">
            Authorized Statutory Disclosure Ledger. Verification of employee wages, PF account mapping, 
            and matching employer contributions for the current billing cycle.
          </p>
        </header>

        {/* --- SECTION 2: EPFO REGISTRY TABLE --- */}
        <section className="space-y-6">
          <div className="flex justify-between items-end border-b-2 border-gray-200 pb-4">
            <div>
                <h2 className="text-2xl font-heading font-black uppercase tracking-tight text-govBlack">Statutory <span className="text-govRed">Deductions</span></h2>
            </div>
            <p className="text-[10px] font-heading font-black text-gray-400 uppercase tracking-[0.3em]">Filing Ref: CIDC-EPF-2026-04</p>
          </div>

          <div className="border-2 border-govBlack overflow-hidden shadow-sm bg-white flex flex-col">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse font-sans min-w-[1000px]">
                <thead>
                  <tr className="bg-govBlack text-white text-[10px] font-heading font-black uppercase tracking-widest border-b-2 border-govBlack text-center">
                    <th className="px-4 py-5 border-r border-white/20 w-16">S.NO.</th>
                    <th className="px-4 py-5 border-r border-white/20">PF A/C.</th>
                    <th className="px-4 py-5 border-r border-white/20">EPS AGE</th>
                    <th className="px-6 py-5 border-r border-white/20 text-left">UAN Number</th>
                    <th className="px-6 py-5 border-r border-white/20 text-left">Name of Employee</th>
                    <th className="px-6 py-5 border-r border-white/20 text-right">Wages</th>
                    <th className="px-6 py-5 border-r border-white/20 text-right text-govRed">Employee Share</th>
                    <th className="px-6 py-5 text-right text-govRed">Employer Share</th>
                  </tr>
                </thead>
                <tbody className="text-[12px]">
                  {employees.map((emp) => (
                    <tr key={emp.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors group">
                      <td className="px-4 py-4 border-r border-gray-200 text-center font-heading font-black text-gray-400">
                        {emp.id}
                      </td>
                      <td className="px-4 py-4 border-r border-gray-200 text-center font-mono font-bold text-govBlack">
                        {emp.pf}
                      </td>
                      <td className="px-4 py-4 border-r border-gray-200 text-center font-heading font-black text-gray-500 uppercase">
                        {emp.age}
                      </td>
                      <td className="px-6 py-4 border-r border-gray-200 text-left font-mono font-bold text-govBlack tracking-widest">
                        {emp.uan}
                      </td>
                      <td className="px-6 py-4 border-r border-gray-200 text-left font-heading font-black uppercase tracking-tight text-govBlack">
                        {emp.name}
                      </td>
                      <td className="px-6 py-4 border-r border-gray-200 text-right font-mono font-bold text-gray-700">
                        {emp.wages === 0 ? "0" : emp.wages.toLocaleString('en-IN')}
                      </td>
                      <td className="px-6 py-4 border-r border-gray-200 text-right font-mono font-bold text-govBlack bg-red-50/30">
                        {emp.empShare === 0 ? "0" : emp.empShare.toLocaleString('en-IN')}
                      </td>
                      <td className="px-6 py-4 text-right font-mono font-bold text-govBlack bg-red-50/30">
                        {emp.employerShare === 0 ? "0" : emp.employerShare.toLocaleString('en-IN')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FLOATING TABLE FOOTER / PAGINATION */}
          <div className="flex justify-between items-center px-2 mt-4">
            <p className="text-[9px] font-heading font-black text-gray-500 uppercase tracking-[0.4em]">Showing 1-5 of 124 Records</p>
            <div className="flex gap-1 items-center">
              {/* Previous Arrow */}
              <button className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 text-gray-400 hover:border-govBlack hover:text-govBlack transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Page Numbers */}
              {[1, 2, 3, '...', 25].map((page, index) => (
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
        </section>

        {/* --- SECTION 3: PROFESSIONAL BILLING SUMMARY --- */}
        <section className="border-2 border-govBlack bg-white shadow-sm overflow-hidden flex flex-col lg:flex-row items-stretch mt-12">
          
          {/* Bill Breakdown */}
          <div className="flex-grow p-10 border-b-2 lg:border-b-0 lg:border-r-2 border-govBlack bg-govGray">
            <h3 className="text-xs font-heading font-black uppercase tracking-[0.2em] mb-8 pb-4 border-b-2 border-govBlack text-govBlack">
              Final Settlement Invoice
            </h3>

            <div className="space-y-4 font-mono text-[12px] font-bold uppercase text-gray-600">
              <div className="flex justify-between items-center">
                <span>Total Employee Contribution Share</span>
                <span className="text-govBlack tracking-tighter">₹ {totalEmpShare.toLocaleString('en-IN')}.00</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-dashed border-gray-300">
                <span>Total Employer Contribution Share</span>
                <span className="text-govBlack tracking-tighter">₹ {totalEmployerShare.toLocaleString('en-IN')}.00</span>
              </div>
              
              <div className="flex justify-between items-center pt-2 text-govBlack text-[13px]">
                <span className="font-heading font-black">Base Principal Amount</span>
                <span className="tracking-tighter">₹ {principalAmount.toLocaleString('en-IN')}.00</span>
              </div>

              <div className="flex justify-between items-center text-gray-500">
                <span>Statutory Tax & Admin Charges</span>
                <span>+ ₹ {taxAmount.toLocaleString('en-IN')}.00</span>
              </div>

              <div className="flex justify-between items-center text-govRed">
                <span>Late Payment Penalty Assessment</span>
                <span>+ ₹ {penaltyAmount.toLocaleString('en-IN')}.00</span>
              </div>
            </div>
          </div>

          {/* Action & Total Trigger */}
          <div className="lg:w-[400px] bg-white p-10 flex flex-col justify-center gap-8 relative">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-govGray border-l-2 border-b-2 border-gray-200"></div>

            <div className="relative z-10 border-b-4 border-govRed pb-6">
              <span className="text-[10px] font-heading font-black text-gray-400 uppercase tracking-widest block mb-2">
                Net Payable Amount
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-heading font-black text-govBlack tracking-tighter">
                  ₹ {netPayable.toLocaleString('en-IN')}
                </span>
                <span className="text-xl font-heading font-black text-govBlack opacity-40">.00</span>
              </div>
            </div>

            <button className="w-full bg-govBlack text-white py-6 font-heading font-black text-[14px] uppercase tracking-[0.3em] hover:bg-govRed transition-all duration-300 shadow-md active:scale-95 flex items-center justify-center gap-4 group">
              Pay Now
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            
            <p className="text-[9px] font-sans font-bold text-gray-400 uppercase tracking-widest text-center">
              Gateway Secured by CIDC Treasury
            </p>
          </div>

        </section>

        {/* Registry Metadata Strip */}
        <div className="mt-4 flex justify-between items-center px-2 opacity-50">
          <p className="text-[8px] text-gray-400 uppercase tracking-[0.4em] font-heading font-black">
            Calculation Context: CIDC-PAY-STAT-2026-TX
          </p>
          <div className="flex gap-2">
            <div className="w-4 h-1 bg-govBlack"></div>
            <div className="w-4 h-1 bg-govRed"></div>
          </div>
        </div>

      </div>
    </main>
  );
}