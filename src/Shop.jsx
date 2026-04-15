import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ============================================================================
// 1. DYNAMIC BILLING LEDGER COMPONENT
// ============================================================================
const ShopBillingLedger = ({ data, shopId }) => {
  // Array of months to ensure consistent column ordering
  const monthKeys = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  
  let grandTotalPending = 0;

  return (
    <section className="mt-12 animate-fade-in border border-govBlack overflow-hidden shadow-sm bg-white">
      
      {/* Ledger Header */}
      <div className="bg-govBlack p-6 flex flex-col md:flex-row justify-between items-start md:items-center text-white border-b-4 border-govRed gap-4">
        <div>
          <h3 className="text-xl font-heading font-black uppercase tracking-tighter">Shop #{shopId} Billing Ledger</h3>
          <p className="text-[9px] font-heading font-black uppercase tracking-[0.3em] text-gray-400 mt-1">
            Historical Arrears & Monthly Dues Registry
          </p>
        </div>
        <div className="bg-white/10 px-4 py-2 border border-white/20 text-right">
          <p className="text-[9px] font-heading font-black uppercase tracking-widest text-gray-400 mb-1">Total Outstanding</p>
          {/* We will calculate this dynamically in the table, but GOV UI often puts a badge here. 
              For now, we leave the main calculation at the bottom as requested. */}
          <p className="text-sm font-mono font-bold text-govRed tracking-tighter">REFER TO BOTTOM LEDGER</p>
        </div>
      </div>

      {/* Very Dense Institutional Grid */}
      <div className="overflow-x-auto">
        <table className="w-full text-center border-collapse font-sans min-w-[1000px]">
          <thead>
            <tr className="bg-govGray text-[10px] font-heading font-black uppercase tracking-widest text-govBlack border-b-2 border-govBlack">
              <th className="py-4 px-2 border-r border-govBlack w-16">Year</th>
              {monthKeys.map(month => (
                <th key={month} className="py-4 px-2 border-r border-gray-300 w-16">{month}</th>
              ))}
              <th className="py-4 px-4 text-govRed w-24">PENDING</th>
            </tr>
          </thead>
          <tbody className="text-[11px] font-mono">
            {data.map((record, i) => {
              // Calculate yearly total: Only add if the value is a number (not 'PAID')
              let yearlyPending = 0;
              monthKeys.forEach(month => {
                const val = record.months[month];
                if (typeof val === 'number') {
                  yearlyPending += val;
                }
              });

              // Add to global total
              grandTotalPending += yearlyPending;

              return (
                <tr key={i} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  {/* Year Column */}
                  <td className="py-3 px-2 border-r border-govBlack font-heading font-black text-[13px] text-govBlack bg-govGray">
                    {record.year}
                  </td>
                  
                  {/* Month Columns */}
                  {monthKeys.map(month => {
                    const val = record.months[month];
                    const isPaid = val === 'PAID';
                    
                    return (
                      <td 
                        key={month} 
                        className={`py-3 px-2 border-r border-gray-200 font-bold tracking-tight
                          ${isPaid ? 'bg-green-50 text-green-700' : 'text-govBlack'}`}
                      >
                        {isPaid ? (
                          <span className="font-heading font-black text-[9px] tracking-widest">PAID</span>
                        ) : (
                          val === 0 ? '-' : val.toFixed(2)
                        )}
                      </td>
                    );
                  })}
                  
                  {/* Yearly Pending Column */}
                  <td className={`py-3 px-4 font-bold tracking-tight border-l-2 border-govBlack
                    ${yearlyPending > 0 ? 'bg-red-50 text-govRed' : 'text-gray-400'}`}>
                    {yearlyPending > 0 ? yearlyPending.toFixed(2) : '0.00'}
                  </td>
                </tr>
              );
            })}
          </tbody>
          
          {/* Grand Total Footer Row */}
          <tfoot>
            <tr className="bg-govBlack text-white border-t-4 border-govRed font-mono">
              <td colSpan="13" className="py-5 px-6 text-right font-heading font-black uppercase text-[12px] tracking-widest">
                Cumulative Pending Arrears (Grand Total):
              </td>
              <td className="py-5 px-4 text-lg font-bold text-govRed tracking-tighter bg-gray-900 border-l-2 border-govBlack">
                ₹ {grandTotalPending.toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      
      {/* Action Footer */}
      <div className="p-8 bg-govGray flex flex-col md:flex-row justify-between items-center border-t border-gray-300 gap-6">
          <p className="text-[9px] font-heading font-black text-gray-500 uppercase tracking-[0.4em]">
            Auth System Ref: CIDC-BILLING-{new Date().getFullYear()}
          </p>
          
          {/* Make Payment Button appears only if there is pending money */}
          {grandTotalPending > 0 ? (
            <Link to="/ShopPay" 
              className="w-full md:w-auto bg-govRed text-white px-10 py-4 text-[12px] font-heading font-black uppercase tracking-[0.2em] hover:bg-govBlack transition-all shadow-md flex items-center justify-center gap-3 active:scale-95 no-underline">
                Make Secure Payment
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          ) : (
            <div className="px-10 py-4 bg-green-100 border border-green-300 text-green-800 text-[11px] font-heading font-black uppercase tracking-[0.2em]">
              All Clear / No Pending Dues
            </div>
          )}
      </div>
    </section>
  );
};


// ============================================================================
// 2. MAIN PAGE COMPONENT
// ============================================================================
export function ShopAllotmentManagement() {
  const containerStyle = { maxWidth: '1280px' };

  // State Management
  const [sector, setSector] = useState('Bilaspur Sector 1');
  const [shopNumber, setShopNumber] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  // Dynamic Dummy Data mirroring the user's spreadsheet logic
  // 'PAID' triggers the green text and ignores math. Numbers trigger math.
  const billingHistoryData = [
    {
      year: "2025",
      months: {
        JAN: 'PAID', FEB: 'PAID', MAR: 'PAID', APR: 'PAID', MAY: 'PAID', JUN: 'PAID',
        JUL: 'PAID', AUG: 'PAID', SEP: 'PAID', OCT: 'PAID', NOV: 'PAID', DEC: 'PAID'
      }
    },
    {
      year: "2026",
      months: {
        JAN: 'PAID', FEB: 'PAID', MAR: 'PAID', APR: 'PAID', MAY: 'PAID', JUN: 'PAID',
        JUL: 'PAID', AUG: 'PAID', SEP: 1561, OCT: 1561, NOV: 1561, DEC: 1561
      }
    },
    {
      year: "2027",
      months: {
        JAN: 1561, FEB: 1561, MAR: 1561, APR: 1561, MAY: 1561, JUN: 1561,
        JUL: 1561, AUG: 1561, SEP: 1561, OCT: 1561, NOV: 1561, DEC: 1561
      }
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setHasSearched(true);
  };

  return (
    <main className="min-h-screen bg-white py-16 font-sans antialiased text-govBlack">
      <div style={containerStyle} className="mx-auto px-6">
        
        {/* HEADER: AUTHORITY BRANDING */}
        <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-10 border-b-4 border-govBlack mb-12">
          <div className="border-l-[8px] border-govRed pl-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-govRed font-heading font-black text-[11px] uppercase tracking-[0.5em]">Estate Management</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-heading font-black uppercase tracking-tighter leading-none mb-4">
              Shop & Allotment <br /> <span className="text-govRed">Management</span>
            </h1>
            <p className="text-gray-500 text-sm font-bold uppercase tracking-widest leading-relaxed max-w-xl">
              CIDC Raipur • Central Industrial & Commercial Division. Systematic registry for 
              commercial assets, lease renewals, and statutory rent collection.
            </p>
          </div>
        </section>

        {/* SEARCH BAR TERMINAL */}
        <section className="max-w-5xl">
          <div className="mb-6">
            <h2 className="text-2xl font-heading font-black uppercase tracking-tight text-govBlack">
              Search Your <span className="text-govRed">Allotted Shop</span>
            </h2>
          </div>

          <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-end gap-6">
            
            <div className="w-full md:w-5/12">
              <label className="text-[10px] font-heading font-black uppercase tracking-widest text-gray-400 mb-2 block">
                Select Sector
              </label>
              <div className="relative">
                <select 
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  className="w-full h-14 bg-white border-2 border-govBlack px-4 text-[11px] font-heading font-black uppercase tracking-widest outline-none appearance-none cursor-pointer focus:border-govRed transition-all"
                >
                  <option>Bilaspur Sector 1</option>
                  <option>Bilaspur Sector 2</option>
                  <option>Raipur Sector 4</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-govRed">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12">
              <label className="text-[10px] font-heading font-black uppercase tracking-widest text-gray-400 mb-2 block">
                Enter Shop Number
              </label>
              <input 
                type="text" 
                value={shopNumber}
                onChange={(e) => setShopNumber(e.target.value)}
                placeholder="E.G. 104" 
                required
                className="w-full h-14 bg-white border-2 border-govBlack px-4 text-[11px] font-heading font-black uppercase tracking-widest outline-none focus:border-govRed transition-all placeholder:text-gray-300" 
              />
            </div>

            <div className="w-full md:w-3/12">
              <button 
                type="submit" 
                className="w-full h-14 bg-govBlack text-white font-heading font-black text-[11px] uppercase tracking-[0.3em] hover:bg-govRed transition-all flex items-center justify-center gap-3 active:scale-95 shadow-md"
              >
                Search
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </div>

          </form>
        </section>

        {/* CONDITIONAL RENDERING */}
        {!hasSearched ? (
          <div className="mt-12 py-16 border-2 border-dashed border-gray-300 text-center flex flex-col items-center">
            <h3 className="text-lg font-heading font-black text-gray-400 uppercase tracking-widest mb-2">Awaiting Search Query</h3>
            <p className="text-[11px] font-sans font-bold text-gray-400 uppercase tracking-widest">
              Select the sector and enter the shop number to view registry details.
            </p>
          </div>
        ) : (
          <ShopBillingLedger data={billingHistoryData} shopId={shopNumber || "000"} />
        )}

      </div>
    </main>
  );
}

export default ShopAllotmentManagement;