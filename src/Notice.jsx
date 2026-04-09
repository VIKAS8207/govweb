import React from 'react';

// CRITICAL: Ensure 'export' is here
export function NoticesAndAnnouncements() {
  const containerStyle = { maxWidth: '1280px' };

  const recentNotices = [
    { id: "NT-2601", date: "Oct 23, 2026", title: "Amendment to Skill Development Certification Process" },
    { id: "NT-2602", date: "Oct 18, 2026", title: "Public Hearing on Urban Expansion Guidelines" },
    { id: "NT-2603", date: "Oct 15, 2026", title: "Vendor Registration Renewal Notice 2026-27" }
  ];

  const circulars = [
    { ref: "CIDC/ORD/2026/09", title: "Administrative Restructuring of Raipur Zonal Office" },
    { ref: "CIDC/TRG/772-B", title: "New Safety Protocols for On-Site Construction Workers" },
    { ref: "CIDC/GEN/2026/13", title: "Holiday Calendar Revision for Q4 2026" }
  ];

  const financialDocs = [
    { title: "Annual Budget Report 2025-26", type: "Financial Transparency" },
    { title: "Audit Statement: CG Raipur Region", type: "Internal Audit" },
    { title: "Proposed Budget Allotment 2027", type: "Strategic Planning" }
  ];

  return (
    <section className="py-20 px-6 bg-white border-t-2 border-govGray font-sans antialiased text-govBlack">
      <div style={containerStyle} className="mx-auto">
        
        {/* --- SECTION 1: HEADER & FEATURED NOTICE --- */}
        <div className="mb-16 border-l-[8px] border-govRed pl-8 py-2">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-govRed font-heading font-black text-[11px] uppercase tracking-[0.4em]">Institutional Communications</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-govBlack uppercase tracking-tighter leading-none">
            Notices & <span className="text-govRed">Announcements</span>
          </h2>
          <p className="text-gray-500 mt-4 text-sm font-bold uppercase tracking-widest leading-relaxed max-w-xl">
            Official gateway for public notices, executive orders, and institutional circulars.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-govBlack mb-20 shadow-sm overflow-hidden">
          <div className="lg:col-span-8 bg-white p-12 flex flex-col justify-between border-b-2 lg:border-b-0 lg:border-r-2 border-govBlack relative">
            <div>
              <div className="flex justify-between items-center mb-8">
                <span className="bg-govRed text-white text-[10px] font-heading font-black px-4 py-1.5 uppercase tracking-widest">High Priority</span>
                <span className="text-gray-400 text-[10px] font-heading font-black uppercase tracking-widest">October 26, 2026</span>
              </div>
              <h3 className="text-3xl font-heading font-black uppercase tracking-tight mb-6 leading-tight group hover:text-govRed transition-colors cursor-pointer">
                Notice Inviting Tenders for Raipur Infrastructure Development Phase IV
              </h3>
              <p className="text-gray-600 text-sm font-medium leading-relaxed mb-12 max-w-2xl border-l-4 border-govGray pl-8 uppercase">
                Official procurement notice for the development of civil infrastructure projects. Interested parties must submit their qualifications by the specified deadline.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center border-t-2 border-govGray pt-8 gap-4">
              <button className="bg-govBlack text-white px-10 py-4 font-heading font-black text-[11px] uppercase tracking-widest hover:bg-govRed transition-all w-full sm:w-auto">
                View Full Notice »
              </button>
              <span className="text-[10px] font-heading font-black text-gray-400 uppercase tracking-widest">REF-ID: TDR-CIDC-2026-004</span>
            </div>
          </div>

          <div className="lg:col-span-4 bg-govGray flex flex-col p-8">
            <h4 className="text-[11px] font-heading font-black text-gray-400 uppercase tracking-[0.3em] mb-6">Recent Public Notices</h4>
            <div className="space-y-4 flex-grow">
              {recentNotices.map((notice) => (
                <div key={notice.id} className="bg-white p-6 border border-gray-300 group hover:border-govRed hover:bg-govGray transition-all cursor-pointer shadow-sm">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{notice.date}</span>
                    <span className="text-[9px] font-heading font-black text-govRed uppercase">{notice.id}</span>
                  </div>
                  <p className="text-[12px] font-heading font-black text-govBlack uppercase tracking-tight leading-snug group-hover:text-govRed">
                    {notice.title}
                  </p>
                </div>
              ))}
            </div>
            <button className="mt-8 text-[11px] font-heading font-black uppercase tracking-[0.2em] text-govRed hover:text-govBlack transition-colors text-right">
              View Archive »
            </button>
          </div>
        </div>

        {/* --- SECTION 2: ORDERS & CIRCULARS --- */}
        <div className="mb-20">
          <div className="mb-8 flex items-center gap-4">
            <div className="w-10 h-1.5 bg-govBlack"></div>
            <h3 className="text-2xl font-heading font-black uppercase tracking-tight text-govBlack">Orders & Circulars</h3>
          </div>
          <div className="border border-gray-300 overflow-hidden shadow-sm bg-white">
            <div className="hidden md:grid grid-cols-12 gap-0 bg-govBlack text-white font-heading text-[11px] font-black uppercase tracking-widest">
              <div className="col-span-3 px-8 py-4 border-r border-white/10">Reference No.</div>
              <div className="col-span-8 px-8 py-4 border-r border-white/10">Title & Statutory Description</div>
              <div className="col-span-1 px-8 py-4 text-center">Action</div>
            </div>
            <div className="divide-y divide-gray-200">
              {circulars.map((circ) => (
                <div key={circ.ref} className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center group hover:bg-govGray transition-colors">
                  <div className="col-span-3 px-8 py-6 border-r border-gray-100 text-[12px] font-heading font-black text-gray-500 tracking-widest uppercase">
                    {circ.ref}
                  </div>
                  <div className="col-span-8 px-8 py-6 border-r border-gray-100">
                    <h4 className="font-heading font-black text-govBlack uppercase tracking-tight text-sm group-hover:text-govRed transition-colors">
                      {circ.title}
                    </h4>
                  </div>
                  <div className="col-span-1 flex items-center justify-center p-4">
                    <button className="w-10 h-10 border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:bg-govBlack hover:text-white hover:border-govBlack transition-all">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                        <path d="M12 5v14m7-7l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}

export default NoticesAndAnnouncements;