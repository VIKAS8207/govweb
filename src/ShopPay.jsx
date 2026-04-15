import React, { useState } from 'react';

export function RentPaymentGateway() {
  const [paymentCycle, setPaymentCycle] = useState('Monthly');
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedMonth, setSelectedMonth] = useState('April');
  
  // Custom Date States
  const [customFrom, setCustomFrom] = useState('');
  const [customTo, setCustomTo] = useState('');

  const containerStyle = { maxWidth: '1000px' }; 
  const BASE_RENT = 4500;

  // Logic to calculate month difference for Custom dates
  const calculateCustomMonths = (from, to) => {
    if (!from || !to) return 0;
    const d1 = new Date(from);
    const d2 = new Date(to);
    if (d2 < d1) return 0;
    
    // Calculate total months inclusive of the start and end month
    const months = (d2.getFullYear() - d1.getFullYear()) * 12 + (d2.getMonth() - d1.getMonth()) + 1;
    return months > 0 ? months : 0;
  };

  // Dynamic Calculation Engine
  let multiplier = 0;
  let tenureText = '';

  if (paymentCycle === 'Monthly') {
    multiplier = 1;
    tenureText = `${selectedMonth} ${selectedYear}`;
  } else if (paymentCycle === 'Yearly') {
    multiplier = 12;
    tenureText = `Financial Year ${selectedYear}`;
  } else if (paymentCycle === 'Custom') {
    multiplier = calculateCustomMonths(customFrom, customTo);
    tenureText = (customFrom && customTo) ? `FROM ${customFrom} TO ${customTo}` : 'SELECT DATE RANGE';
  }

  const totalAmount = BASE_RENT * multiplier;

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
              {/* 01. Statutory Cycle */}
              <div>
                <label className="text-[9px] font-heading font-black uppercase text-gray-400 block mb-3">01. Statutory Cycle</label>
                <div className="flex flex-wrap gap-2">
                  {['Monthly', 'Yearly', 'Custom'].map((cycle) => (
                    <button 
                      key={cycle}
                      onClick={() => {
                        setPaymentCycle(cycle);
                        // Reset custom dates if switching away
                        if(cycle !== 'Custom') { setCustomFrom(''); setCustomTo(''); }
                      }}
                      className={`px-8 py-3 text-[10px] font-heading font-black uppercase tracking-widest border-2 transition-all
                        ${paymentCycle === cycle ? 'bg-govBlack text-white border-govBlack shadow-md' : 'bg-white text-gray-400 border-gray-200 hover:border-govBlack hover:text-govBlack'}`}
                    >
                      {cycle}
                    </button>
                  ))}
                </div>
              </div>

              {/* 02. Dynamic Tenure Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 min-h-[100px]">
                
                {/* --- MONTHLY LOGIC --- */}
                {paymentCycle === 'Monthly' && (
                  <>
                    <div>
                      <label className="text-[9px] font-heading font-black uppercase text-gray-400 block mb-3">02. Select Year</label>
                      <div className="relative">
                        <select 
                          value={selectedYear}
                          onChange={(e) => setSelectedYear(e.target.value)}
                          className="w-full bg-govGray border border-gray-300 p-4 pr-10 text-[11px] font-heading font-black uppercase outline-none focus:border-govRed transition-colors cursor-pointer appearance-none"
                        >
                          <option>2025</option><option>2026</option><option>2027</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-govRed">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="text-[9px] font-heading font-black uppercase text-gray-400 block mb-3">03. Select Month</label>
                      <div className="relative">
                        <select 
                          value={selectedMonth}
                          onChange={(e) => setSelectedMonth(e.target.value)}
                          className="w-full bg-govGray border border-gray-300 p-4 pr-10 text-[11px] font-heading font-black uppercase outline-none focus:border-govRed transition-colors cursor-pointer appearance-none"
                        >
                          {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(m => (
                            <option key={m}>{m}</option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-govRed">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* --- YEARLY LOGIC --- */}
                {paymentCycle === 'Yearly' && (
                  <div className="sm:col-span-2">
                    <label className="text-[9px] font-heading font-black uppercase text-gray-400 block mb-3">02. Select Financial Year (12 Months)</label>
                    <div className="relative">
                      <select 
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                        className="w-full bg-govGray border border-gray-300 p-4 pr-10 text-[11px] font-heading font-black uppercase outline-none focus:border-govRed transition-colors cursor-pointer appearance-none"
                      >
                        <option>2025</option><option>2026</option><option>2027</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-govRed">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                )}

                {/* --- CUSTOM LOGIC --- */}
                {paymentCycle === 'Custom' && (
                  <>
                    <div>
                      <label className="text-[9px] font-heading font-black uppercase text-gray-400 block mb-3">02. Date From</label>
                      <input 
                        type="date"
                        value={customFrom}
                        onChange={(e) => setCustomFrom(e.target.value)}
                        className="w-full bg-govGray border border-gray-300 p-4 text-[11px] font-heading font-black uppercase outline-none focus:border-govRed transition-colors cursor-pointer"
                      />
                    </div>
                    <div>
                      <label className="text-[9px] font-heading font-black uppercase text-gray-400 block mb-3">03. Date To</label>
                      <input 
                        type="date"
                        value={customTo}
                        onChange={(e) => setCustomTo(e.target.value)}
                        min={customFrom} // Prevents selecting a 'To' date earlier than 'From'
                        className="w-full bg-govGray border border-gray-300 p-4 text-[11px] font-heading font-black uppercase outline-none focus:border-govRed transition-colors cursor-pointer"
                      />
                    </div>
                  </>
                )}
                
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
                  <span className="text-govBlack">₹ {BASE_RENT.toLocaleString('en-IN')}.00</span>
                </div>
                <div className="flex justify-between border-b border-dashed border-gray-200 pb-4">
                  <span>Cycle Adjustment</span>
                  <span className={`${multiplier === 0 ? 'text-govRed' : 'text-govBlack'}`}>
                    {multiplier.toFixed(2)}x (Months)
                  </span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-gray-400 font-sans tracking-widest text-[9px] mt-1">Tenure</span>
                  <span className="text-govBlack font-sans text-right max-w-[200px] leading-tight">
                    {tenureText}
                  </span>
                </div>
              </div>

              <div className="mt-10 p-6 bg-govGray border border-gray-200 text-center">
                <span className="text-[9px] font-heading font-black uppercase tracking-widest text-gray-400 block mb-1">Total Statutory Dues</span>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-heading font-black text-govRed tracking-tighter">
                    ₹ {totalAmount.toLocaleString('en-IN')}
                  </span>
                  <span className="text-lg font-heading font-black text-govRed opacity-40">.00</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button 
                disabled={totalAmount === 0}
                className={`w-full py-5 font-heading font-black text-[12px] uppercase tracking-[0.3em] transition-all shadow-md active:scale-95 flex items-center justify-center gap-3
                  ${totalAmount === 0 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'bg-govBlack text-white hover:bg-govRed cursor-pointer'}`}
              >
                Proceed to Pay »
              </button>
              <p className="mt-4 text-[8px] font-sans font-bold text-gray-400 uppercase tracking-widest text-center leading-relaxed">
                Subject to CIDC Audit & Statutory Verification.
              </p>
            </div>
          </div>
        </div>

        {/* 3. MINIMAL ASSISTANCE BAR */}
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center bg-white border border-gray-200 p-4 gap-4 shadow-sm">
           <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
              <p className="text-[10px] font-heading font-black text-gray-500 uppercase tracking-widest">Payment Gateway: ONLINE & ACTIVE</p>
           </div>
           <p className="text-[10px] font-sans font-bold text-gray-400 uppercase tracking-widest">Support: info@cidc.cg.gov.in</p>
        </div>

      </div>
    </main>
  );
}