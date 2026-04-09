 import React, { useState } from 'react';
 
   export function PaymentConfirmation () {
  const containerStyle = { maxWidth: '1400px' };

  return (
    <main className="min-h-screen bg-white py-20 font-sans antialiased text-zinc-900">
      <div style={containerStyle} className="mx-auto px-6 space-y-16">
        
        {/* HEADER: TRANSACTION AUTHORITY */}
        <section className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-1 bg-[#B22234]"></div>
            <span className="text-[#B22234] font-black text-[10px] uppercase tracking-[0.4em]">Transaction Management</span>
          </div>
          <h1 className="text-6xl font-black uppercase tracking-tighter leading-none mb-6">
            Payment <span className="text-[#B22234]">Confirmation</span>
          </h1>
          <p className="text-zinc-500 text-sm font-medium leading-relaxed border-l-4 border-zinc-900 pl-8">
            Review the provident fund contribution details for CIDC Raipur Portal. Ensure all employee 
            data and wage figures are accurate before proceeding to the institutional gateway.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-zinc-200">
          
          {/* LEFT: CONTRIBUTION DATA LEDGER */}
          <div className="lg:col-span-8 p-12 space-y-12">
            <div className="flex items-center gap-4 pb-6 border-b border-zinc-100">
              <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter">Employee Contribution Data</h3>
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Name of Employee", val: "Premlal" },
                { label: "UAN Number", val: "1002802893" },
                { label: "PF/AC", val: "6801" },
                { label: "EPS Age", val: "58" }
              ].map((item, i) => (
                <div key={i} className="space-y-1">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400">{item.label}</span>
                  <p className="text-[13px] font-bold uppercase text-zinc-900">{item.val}</p>
                </div>
              ))}
            </div>

            {/* Component Table */}
            <div className="border border-zinc-100">
              <div className="grid grid-cols-2 bg-zinc-50 p-5 border-b border-zinc-900">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400">Contribution Component</span>
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400 text-right">Amount (₹)</span>
              </div>
              {[
                { label: "Wages", amt: "1,126,250.00" },
                { label: "Employee Share", amt: "13,518.00" },
                { label: "Employer Share", amt: "1,800.00" }
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-2 p-6 border-b border-zinc-50 hover:bg-zinc-50 transition-colors">
                  <span className="text-[11px] font-bold uppercase tracking-tight text-zinc-800">{row.label}</span>
                  <span className="text-[12px] font-mono font-bold text-zinc-900 text-right">{row.amt}</span>
                </div>
              ))}
            </div>

            {/* Payment Configuration Dropdown */}
            <div className="bg-zinc-50 p-8 flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h4 className="text-[13px] font-black uppercase tracking-tight">Payment Configuration</h4>
                <p className="text-[10px] text-zinc-400 uppercase font-bold tracking-widest">Select cycle for automated institutional billing.</p>
              </div>
              <div className="relative w-full md:w-64">
                <select className="w-full bg-white border-2 border-zinc-900 p-4 text-[10px] font-black uppercase tracking-[0.2em] appearance-none outline-none">
                  <option>Monthly</option>
                  <option>Yearly</option>
                  <option>Quarterly</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#B22234]">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: ORDER SUMMARY MONOLITH */}
          <div className="lg:col-span-4 bg-zinc-50 border-l border-zinc-200 p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Ghost Background Icon */}
            <div className="absolute -right-12 -bottom-12 opacity-[0.03] pointer-events-none">
              <svg className="w-64 h-64 rotate-12" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" /><path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" /></svg>
            </div>

            <div className="relative z-10">
              <div className="flex justify-between items-center mb-10 pb-4 border-b border-zinc-200">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Order Summary</span>
                <svg className="w-4 h-4 text-[#B22234]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-zinc-500">
                  <span>Gross Salary</span>
                  <span className="text-zinc-900">₹ 1,126,250.00</span>
                </div>
                <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-zinc-500">
                  <span>Combined Share</span>
                  <span className="text-zinc-900">₹ 15,318.00</span>
                </div>
                <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-zinc-500">
                  <span>Service Charges</span>
                  <span className="text-zinc-900">₹ 0.00</span>
                </div>
              </div>

              <div className="mt-12 py-10 border-y-2 border-zinc-900">
                <span className="text-[9px] font-black uppercase tracking-[0.5em] text-zinc-400 block mb-2">Total Payable Amount</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-[#B22234] tracking-tighter">₹ 15,318</span>
                  <span className="text-xl font-black text-[#B22234] opacity-50">.00</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-10">
              <button className="w-full bg-[#B22234] text-white py-6 font-black text-[12px] uppercase tracking-[0.4em] hover:bg-zinc-950 transition-all flex items-center justify-center gap-4 group">
                Proceed to Payment
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </button>
              
              <p className="mt-6 text-[9px] font-bold text-zinc-400 uppercase tracking-widest text-center leading-relaxed">
                By clicking "Proceed", you authorize CIDC to execute this <br/> transaction via the secure institutional gateway.
              </p>
            </div>
          </div>
        </div>

        {/* ASSISTANCE FOOTER */}
        <div className="bg-zinc-900 p-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 bg-white/10 flex items-center justify-center border border-white/20">
               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            </div>
            <div>
              <h4 className="text-white text-[13px] font-black uppercase tracking-tight">System Assistance</h4>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Our institutional support desk is active 24/7.</p>
            </div>
          </div>
          <button className="px-10 py-4 border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-zinc-900 transition-all">
            Contact Support —
          </button>
        </div>

      </div>
    </main>
  );
};

