import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

export function ShopAllotmentManagement () {
  // Locked GOV UI Max Width (7xl / 1280px) for institutional consistency
  const containerStyle = { maxWidth: '1280px' };

  const shopData = [
    { id: "104", sector: "Bilaspur 1", rent: "4,500.00", due: "15 Oct 2026", status: "UNPAID" },
    { id: "212", sector: "Bilaspur 2", rent: "6,200.00", due: "12 Oct 2026", status: "PAID" },
    { id: "305", sector: "Bilaspur 1", rent: "4,500.00", due: "15 Oct 2026", status: "UNPAID" },
    { id: "109", sector: "Bilaspur 3", rent: "5,800.00", due: "20 Oct 2026", status: "VERIFICATION" },
  ];

  return (
    <main className="min-h-screen bg-white py-16 font-sans antialiased text-govBlack">
      <div style={containerStyle} className="mx-auto px-6 space-y-16">
        
        {/* 1. HEADER: AUTHORITY BRANDING - GOV UI LOCK */}
        <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-10 border-b-4 border-govBlack">
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

        {/* 2. FILTER TERMINAL - INSTITUTIONAL INPUTS */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-0 border-2 border-govBlack bg-govGray p-1 shadow-sm">
          <div className="md:col-span-4 p-8 border-r-2 border-govBlack">
            <label className="text-[10px] font-heading font-black uppercase tracking-widest text-gray-400 mb-3 block">Select Sector</label>
            <div className="relative">
              <select className="w-full bg-white border-2 border-gray-300 p-4 text-[11px] font-heading font-black uppercase tracking-widest outline-none appearance-none cursor-pointer focus:border-govRed transition-all">
                <option>Bilaspur Sector 1</option>
                <option>Raipur Sector 4</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-govRed">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 p-8 border-r-2 border-govBlack">
            <label className="text-[10px] font-heading font-black uppercase tracking-widest text-gray-400 mb-3 block">Enter Shop Number</label>
            <input 
              type="text" 
              placeholder="E.G. 104..." 
              className="w-full bg-white border-2 border-gray-300 p-4 text-[11px] font-heading font-black uppercase tracking-widest outline-none focus:border-govRed transition-all placeholder:text-gray-200" 
            />
          </div>

          <div className="md:col-span-3 flex items-center justify-center p-8 bg-white">
            <button className="w-full h-full bg-govBlack text-white font-heading font-black text-[11px] uppercase tracking-[0.3em] hover:bg-govRed transition-all flex items-center justify-center gap-4 active:scale-95 shadow-md">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              Search Registry
            </button>
          </div>
        </section>

        {/* 3. SHOP INVENTORY LEDGER - STATUTORY TABLE RULES */}
        <section className="border border-gray-300 overflow-hidden shadow-sm">
          <div className="bg-govBlack p-6 flex justify-between items-center text-white border-b-4 border-govRed">
            <h3 className="text-xl font-heading font-black uppercase tracking-tighter">Shop Inventory & Rent Status</h3>
            <p className="text-[9px] font-heading font-black uppercase tracking-[0.3em] text-gray-400 italic">Viewing results for "Bilaspur" Sectors</p>
          </div>

          <div className="overflow-x-auto bg-white">
            <table className="w-full text-left border-collapse font-sans">
              <thead>
                <tr className="bg-govGray text-[11px] font-heading font-black uppercase tracking-widest text-gray-500 border-b border-gray-200">
                  <th className="py-5 px-10 border-r border-gray-100">Shop Number</th>
                  <th className="py-5 px-10 border-r border-gray-100">Sector</th>
                  <th className="py-5 px-10 border-r border-gray-100">Monthly Rent</th>
                  <th className="py-5 px-10 border-r border-gray-100 text-center">Due Date</th>
                  <th className="py-5 px-10 border-r border-gray-100 text-center">Status</th>
                  <th className="py-5 px-10 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="text-[12px]">
                {shopData.map((shop, i) => (
                  <tr key={i} className="group border-b border-gray-100 hover:bg-govGray transition-colors cursor-pointer">
                    <td className="py-8 px-10 font-heading font-black text-[15px] uppercase tracking-tight text-govBlack group-hover:text-govRed border-r border-gray-50">
                      Shop #{shop.id}
                    </td>
                    <td className="py-8 px-10 font-heading font-black text-gray-500 uppercase tracking-widest border-r border-gray-50">
                      {shop.sector}
                    </td>
                    <td className="py-8 px-10 font-mono font-bold text-[14px] text-govBlack border-r border-gray-50">
                      ₹ {shop.rent}
                    </td>
                    <td className="py-8 px-10 text-center font-mono font-bold text-gray-400 uppercase tracking-widest border-r border-gray-50">
                      {shop.due}
                    </td>
                    <td className="py-8 px-10 border-r border-gray-50">
                       <div className="flex justify-center">
                        <span className={`px-4 py-1.5 border-2 text-[9px] font-heading font-black uppercase tracking-widest
                          ${shop.status === 'PAID' ? 'border-blue-500 text-blue-700 bg-blue-50' : 
                            shop.status === 'UNPAID' ? 'border-govRed text-govRed bg-red-50' : 
                            'border-gray-300 text-gray-400 bg-govGray'}`}>
                          {shop.status}
                        </span>
                       </div>
                    </td>
                    <td className="py-8 px-10 text-right">
                       {shop.status === 'PAID' ? (
                         <button className="text-gray-300 hover:text-govBlack transition-all ml-auto">
                           <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                           </svg>
                         </button>
                       ) : (
                         <Link to="/shoppay" 
                            className="inline-block bg-govRed text-white px-8 py-3 text-[10px] font-heading font-black uppercase tracking-widest hover:bg-govBlack transition-all shadow-md text-center no-underline active:scale-95">
                               Pay Rent »
                        </Link>
                       )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* TABLE FOOTER / PAGINATION - INSTITUTIONAL STYLE */}
          <div className="p-8 bg-govGray flex flex-col sm:flex-row justify-between items-center border-t-2 border-govBlack gap-6">
              <p className="text-[9px] font-heading font-black text-gray-400 uppercase tracking-[0.4em]">Auth System Ref: CIDC-EST-2026-R4</p>
              <div className="flex gap-1">
                {[1, 2, 3].map(page => (
                  <button key={page} className={`w-10 h-10 flex items-center justify-center text-[11px] font-heading font-black transition-all border-2
                    ${page === 1 ? 'bg-govBlack text-white border-govBlack' : 'bg-white text-gray-400 border-gray-200 hover:border-govBlack hover:text-govBlack'}`}>
                    {page}
                  </button>
                ))}
              </div>
          </div>
        </section>

      </div>
    </main>
  );
};

export default ShopAllotmentManagement;