import React, { useState } from 'react';

export function RentPaymentGateway() {
  const [paymentCycle, setPaymentCycle] = useState('Monthly');
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedMonth, setSelectedMonth] = useState('April');

  const containerStyle = { maxWidth: '1000px' }; // Reduced width for "Bill" focus

  return (
    <main className="min-h-screen bg-govGray py-12 font-sans antialiased text-govBlack selection:bg-govRed selection:text-white">
      <div style={containerStyle} className="mx-auto px-6">
        
        {/* 1. OFFICIAL BILLING HEADER */}
        <header className="bg-white border-2 border-govBlack p-8 mb-0 flex justify-between items-start">
          <div className="border-l-4 border-govRed pl-6">
            <h1 className="text-3xl font-heading font-black uppercase tracking-tighter leading-none mb-2">
              Estate <span className="text-govRed">Billing</span> Challan
            </h1>
            <p className="text-[10px] font-heading font-black text-gray-500 uppercase tracking-widest">
              Chhattisgarh Infrastructure Development Corp. Ltd.
            </p>
          </div>
          <div className="text-right">
             <p className="text-[9px] font-heading font-black text-gray-400 uppercase tracking-widest">Registry ID</p>
             <p className="text-xs font-mono font-bold">CIDC-BILL-2026-T4</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-x-2 border-b-2 border-govBlack bg-white">
          
          {/* LEFT: PARAMETER SELECTION */}
          <div className="md:col-span-7 p-8 border-b-2 md:border-b-0 md:border-r-2 border-govBlack">
            <h3 className="text-xs font-heading font-black uppercase tracking-[0.2em] mb-8 pb-2 border-b border-gray-100">
              Billing Parameters
            </h3>

            <div className="space-y-8">
              {/* Cycle */}
              <div>
                <label className="text-[9px] font-heading font-black uppercase text-gray-400 block mb-3">01. Statutory Cycle</label>
                <div className="flex gap-2">
                  {['Monthly', 'Quarterly', 'Yearly'].map((cycle) => (
                    <button 
                      key={cycle}
                      onClick={() => setPaymentCycle(cycle)}
                      className={`px-6 py-3 text-[10px] font-heading font-black uppercase tracking-widest border-2 transition-all
                        ${paymentCycle === cycle ? 'bg-govBlack text-white border-govBlack' : 'bg-white text-gray-400 border-gray-200'}`}
                    >
                      {cycle}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tenure selectors */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-[9px] font-heading font-black uppercase text-gray-400 block mb-3">02. Financial Year</label>
                  <select 
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full bg-govGray border border-gray-300 p-3 text-[11px] font-heading font-black uppercase outline-none focus:border-govBlack"
                  >
                    <option>2024</option><option>2025</option><option>2026</option>
                  </select>
                </div>
                <div>
                  <label className="text-[9px] font-heading font-black uppercase text-gray-400 block mb-3">03. Tenure Month</label>
                  <select 
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="w-full bg-govGray border border-gray-300 p-3 text-[11px] font-heading font-black uppercase outline-none focus:border-govBlack"
                  >
                    {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(m => (
                      <option key={m}>{m}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: SETTLEMENT SUMMARY (Minimalist Invoice) */}
          <div className="md:col-span-5 p-8 bg-white flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-heading font-black uppercase tracking-[0.2em] mb-8 pb-2 border-b border-gray-100">
                Settlement Invoice
              </h3>

              <div className="space-y-4 font-mono text-[11px] font-bold uppercase text-gray-600">
                <div className="flex justify-between">
                  <span>Base Allotment Rent</span>
                  <span className="text-govBlack">₹ 4,500.00</span>
                </div>
                <div className="flex justify-between border-b border-dashed border-gray-200 pb-4">
                  <span>Cycle Adjustment</span>
                  <span className="text-govBlack">1.00x</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-gray-400 font-sans">Tenure</span>
                  <span className="text-govBlack font-sans">{selectedMonth} {selectedYear}</span>
                </div>
              </div>

              <div className="mt-10 p-6 bg-govGray border border-gray-200 text-center">
                <span className="text-[9px] font-heading font-black uppercase tracking-widest text-gray-400 block mb-1">Total Statutory Dues</span>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-heading font-black text-govRed tracking-tighter">₹ 4,500</span>
                  <span className="text-lg font-heading font-black text-govRed opacity-40">.00</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button className="w-full bg-govBlack text-white py-5 font-heading font-black text-[11px] uppercase tracking-[0.3em] hover:bg-govRed transition-all shadow-md active:scale-95">
                Authorize Payment »
              </button>
              <p className="mt-4 text-[8px] font-sans font-bold text-gray-400 uppercase tracking-widest text-center leading-relaxed">
                Subject to CIDC Audit & Statutory Verification.
              </p>
            </div>
          </div>
        </div>

        {/* 3. MINIMAL ASSISTANCE BAR */}
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center bg-white border border-gray-200 p-4 gap-4">
           <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <p className="text-[10px] font-heading font-black text-gray-500 uppercase tracking-widest">Payment Gateway: ONLINE & ACTIVE</p>
           </div>
           <p className="text-[10px] font-sans font-bold text-gray-400 uppercase tracking-widest">Support: info@cidc.cg.gov.in</p>
        </div>

      </div>
    </main>
  );
}

 