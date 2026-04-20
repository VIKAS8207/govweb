import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function PaymentNow() {
  // Locked GOV UI Max Width for institutional consistency
  const containerStyle = { maxWidth: '1280px' };

  // --- DATA STATE ---
  const [employees, setEmployees] = useState([
    { id: 1, pf: "6801", age: "-", uan: "100280858980", name: "Shri Premlal Dhurve", dueDate: "08 Mar 2026", delayDays: 40, delayMonths: 1, penaltyPct: 5, intPct: 12, wages: 112650, empShare: 13518, employerShare: 1800 },
    { id: 2, pf: "6860", age: "58", uan: "100675401053", name: "ShriSanjay Dubay", dueDate: "08 May 2026", delayDays: 0, delayMonths: 0, penaltyPct: 0, intPct: 0, wages: 0, empShare: 0, employerShare: 0 },
    { id: 3, pf: "4096", age: "58Year", uan: "100332575134", name: "Shri Sanjay Shukla", dueDate: "08 Mar 2026", delayDays: 40, delayMonths: 1, penaltyPct: 5, intPct: 12, wages: 60833, empShare: 7300, employerShare: 1800 },
    { id: 4, pf: "5858", age: "58Year", uan: "100117974814", name: "Shri Budhram Patel", dueDate: "08 Mar 2026", delayDays: 40, delayMonths: 1, penaltyPct: 5, intPct: 12, wages: 54350, empShare: 6522, employerShare: 1800 },
    { id: 5, pf: "6829", age: "58", uan: "100132302340", name: "Shri Deepak Ku. Goswami", dueDate: "08 Mar 2026", delayDays: 40, delayMonths: 1, penaltyPct: 5, intPct: 12, wages: 46925, empShare: 5631, employerShare: 1800 },
  ]);

  // --- DYNAMIC CALCULATIONS ---
  const totalWages = employees.reduce((sum, emp) => sum + emp.wages, 0);
  const totalEmpShare = employees.reduce((sum, emp) => sum + emp.empShare, 0);
  const totalEmployerShare = employees.reduce((sum, emp) => sum + emp.employerShare, 0);
  
  const principalAmount = totalEmpShare + totalEmployerShare;
  const taxAmount = 850.00; // Fixed Statutory Tax / Admin Charge

  const calculatedPenalty = employees.reduce((sum, emp) => {
    const rowTotal = emp.empShare + emp.employerShare;
    return sum + (rowTotal * (emp.penaltyPct / 100));
  }, 0);

  const calculatedInterest = employees.reduce((sum, emp) => {
    const rowTotal = emp.empShare + emp.employerShare;
    return sum + (rowTotal * (emp.intPct / 100));
  }, 0);

  const netPayable = principalAmount + taxAmount + calculatedPenalty + calculatedInterest;

  return (
    <main className="min-h-screen bg-white py-16 font-sans antialiased text-govBlack selection:bg-govRed selection:text-white">
      <div style={containerStyle} className="mx-auto px-6 space-y-12">
        
        

        {/* --- SECTION 2: EPFO REGISTRY TABLE --- */}
        <div className="space-y-12 animate-fade-in">
          <section className="space-y-6">
            <div className="flex justify-between items-end border-b-2 border-gray-200 pb-4">
              <div>
                  <h2 className="text-2xl font-heading font-black uppercase tracking-tight text-govBlack">Statutory <span className="text-govRed">Deductions</span></h2>
              </div>
              <p className="text-[10px] font-heading font-black text-gray-400 uppercase tracking-[0.3em]">Filing Ref: CIDC-EPF-2026-04</p>
            </div>

            <div className="border-2 border-govBlack overflow-hidden shadow-sm bg-white flex flex-col">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse font-sans min-w-[1200px]">
                  <thead>
                    <tr className="bg-govBlack text-white text-[10px] font-heading font-black uppercase tracking-widest border-b-2 border-govBlack text-center">
                      <th className="px-3 py-5 border-r border-white/20 w-12">S.NO.</th>
                      <th className="px-3 py-5 border-r border-white/20">PF A/C.</th>
                      <th className="px-3 py-5 border-r border-white/20">EPS AGE</th>
                      <th className="px-4 py-5 border-r border-white/20 text-left">UAN Number</th>
                      <th className="px-4 py-5 border-r border-white/20 text-left whitespace-nowrap">Name of Employee</th>
                      
                      <th className="px-3 py-5 border-r border-white/20 text-center text-amber-300">Due Date</th>
                      <th className="px-3 py-5 border-r border-white/20 text-center text-amber-300">Days</th>
                      <th className="px-3 py-5 border-r border-white/20 text-center text-amber-300">Months</th>
                      <th className="px-3 py-5 border-r border-white/20 text-center text-white">Penalty %</th>
                      <th className="px-3 py-5 border-r border-white/20 text-center text-white">Interest</th>
                      
                      <th className="px-4 py-5 border-r border-white/20 text-right">Wages</th>
                      <th className="px-4 py-5 border-r border-white/20 text-right text-white">Employee Share</th>
                      <th className="px-4 py-5 text-right text-white">Employer Share</th>
                    </tr>
                  </thead>
                  <tbody className="text-[12px]">
                    {employees.map((emp, index) => (
                      <tr key={emp.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors group">
                        <td className="px-3 py-4 border-r border-gray-200 text-center font-heading font-black text-gray-400">{index + 1}</td>
                        <td className="px-3 py-4 border-r border-gray-200 text-center font-mono font-bold text-govBlack">{emp.pf}</td>
                        <td className="px-3 py-4 border-r border-gray-200 text-center font-heading font-black text-gray-500 uppercase">{emp.age}</td>
                        <td className="px-4 py-4 border-r border-gray-200 text-left font-mono font-bold text-govBlack tracking-widest">{emp.uan}</td>
                        <td className="px-4 py-4 border-r border-gray-200 text-left font-heading font-black uppercase tracking-tight text-govBlack whitespace-nowrap">{emp.name}</td>

                        <td className="px-3 py-4 border-r border-gray-200 text-center font-mono font-bold text-gray-600 whitespace-nowrap">{emp.dueDate}</td>
                        <td className={`px-3 py-4 border-r border-gray-200 text-center font-mono font-bold ${emp.delayDays > 0 ? 'text-amber-600 bg-amber-50/50' : 'text-gray-400'}`}>{emp.delayDays}</td>
                        <td className={`px-3 py-4 border-r border-gray-200 text-center font-mono font-bold ${emp.delayMonths > 0 ? 'text-amber-600 bg-amber-50/50' : 'text-gray-400'}`}>{emp.delayMonths}</td>
                        <td className={`px-3 py-4 border-r border-gray-200 text-center font-mono font-bold ${emp.penaltyPct > 0 ? 'text-govRed bg-red-50/50' : 'text-gray-400'}`}>{emp.penaltyPct}%</td>
                        <td className={`px-3 py-4 border-r border-gray-200 text-center font-mono font-bold ${emp.intPct > 0 ? 'text-govRed bg-red-50/50' : 'text-gray-400'}`}>{emp.intPct}%</td>

                        <td className="px-4 py-4 border-r border-gray-200 text-right font-mono font-bold text-gray-700">{emp.wages === 0 ? "0" : emp.wages.toLocaleString('en-IN')}</td>
                        <td className="px-4 py-4 border-r border-gray-200 text-right font-mono font-bold text-govBlack bg-red-50/30">{emp.empShare === 0 ? "0" : emp.empShare.toLocaleString('en-IN')}</td>
                        <td className="px-4 py-4 text-right font-mono font-bold text-govBlack bg-red-50/30">{emp.employerShare === 0 ? "0" : emp.employerShare.toLocaleString('en-IN')}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-white text-govBlack border-t-4 border-govRed">
                      <td colSpan="10" className="px-4 py-5 text-right font-heading font-black uppercase tracking-[0.3em] text-[12px]">TOTAL</td>
                      <td className="px-4 py-5 border-l border-gray-200 text-right font-mono font-bold text-[14px] tracking-tight">{totalWages.toLocaleString('en-IN')}</td>
                      <td className="px-4 py-5 border-l border-gray-200 text-right font-mono font-bold text-[14px] tracking-tight text-govRed">{totalEmpShare.toLocaleString('en-IN')}</td>
                      <td className="px-4 py-5 border-l border-gray-200 text-right font-mono font-bold text-[14px] tracking-tight text-govRed">{totalEmployerShare.toLocaleString('en-IN')}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              
              {/* EXACT IMAGE MATCH PAGINATION */}
              
            </div>

            <div className="flex justify-end  bg-white ">
                <div className="flex rounded-[2px] overflow-hidden shadow-sm">
                  <button className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-50 transition-colors">
                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center bg-white border border-l-0 border-gray-300 hover:bg-gray-50 transition-colors">
                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>
          </section>

          {/* PROFESSIONAL BILLING SUMMARY */}
          <section className="border-2 border-govBlack bg-white shadow-sm overflow-hidden flex flex-col lg:flex-row items-stretch mt-12">
            <div className="flex-grow p-10 border-b-2 lg:border-b-0 lg:border-r-2 border-govBlack bg-govGray">
              <h3 className="text-xs font-heading font-black uppercase tracking-[0.2em] mb-8 pb-4 border-b-2 border-govBlack text-govBlack">Final Settlement Invoice</h3>
              <div className="space-y-4 font-mono text-[12px] font-bold uppercase text-gray-600">
                <div className="flex justify-between items-center">
                  <span>Total Employee Contribution Share</span>
                  <span className="text-govBlack tracking-tighter">₹ {totalEmpShare.toLocaleString('en-IN', {minimumFractionDigits: 2})}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-dashed border-gray-300">
                  <span>Total Employer Contribution Share</span>
                  <span className="text-govBlack tracking-tighter">₹ {totalEmployerShare.toLocaleString('en-IN', {minimumFractionDigits: 2})}</span>
                </div>
                <div className="flex justify-between items-center pt-2 text-govBlack text-[13px]">
                  <span className="font-heading font-black">Base Principal Amount</span>
                  <span className="tracking-tighter">₹ {principalAmount.toLocaleString('en-IN', {minimumFractionDigits: 2})}</span>
                </div>
                <div className="flex justify-between items-center text-gray-500">
                  <span>Statutory Tax & Admin Charges</span>
                  <span>+ ₹ {taxAmount.toLocaleString('en-IN', {minimumFractionDigits: 2})}</span>
                </div>
                <div className="flex justify-between items-center text-govRed">
                  <span>Standard Interest Assessment (12%)</span>
                  <span>+ ₹ {calculatedInterest.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                </div>
                <div className="flex justify-between items-center text-govRed">
                  <span>Late Payment Penalty Assessment (5%)</span>
                  <span>+ ₹ {calculatedPenalty.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                </div>
              </div>
            </div>

            <div className="lg:w-[400px] bg-white p-10 flex flex-col justify-center gap-8 relative">
              
              <div className="relative z-10 border-b-4 border-govRed pb-6">
                <span className="text-[10px] font-heading font-black text-gray-400 uppercase tracking-widest block mb-2">Net Payable Amount</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-heading font-black text-govBlack tracking-tighter">₹ {Math.floor(netPayable).toLocaleString('en-IN')}</span>
                  <span className="text-xl font-heading font-black text-govBlack opacity-40">.{(netPayable % 1).toFixed(2).substring(2)}</span>
                </div>
              </div>
              <button className="w-full bg-govBlack text-white py-6 font-heading font-black text-[14px] uppercase tracking-[0.3em] hover:bg-govRed transition-all duration-300 shadow-md active:scale-95 flex items-center justify-center gap-4 group">
                Pay Now
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
              <p className="text-[9px] font-sans font-bold text-gray-400 uppercase tracking-widest text-center">Gateway Secured by CIDC Treasury</p>
            </div>
          </section>
        </div>

      </div>
    </main>
  );
}