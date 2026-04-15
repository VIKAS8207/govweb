import React from 'react';

// CRITICAL: Ensure 'export' is here
export function NoticesAndAnnouncements() {
  const containerStyle = { maxWidth: '1280px' };

  // Combined the data into a single array containing the Reference, Title, and Date
  const publicNotices = [
    { ref: "CIDC/ORD/2026/09", date: "Oct 23, 2026", title: "Administrative Restructuring of Raipur Zonal Office" },
    { ref: "CIDC/TRG/772-B", date: "Oct 18, 2026", title: "New Safety Protocols for On-Site Construction Workers" },
    { ref: "CIDC/GEN/2026/13", date: "Oct 15, 2026", title: "Holiday Calendar Revision for Q4 2026" },
    { ref: "CIDC/VND/2026/02", date: "Oct 10, 2026", title: "Vendor Registration Renewal Notice 2026-27" }
  ];

  return (
    <section className="py-20 px-6 bg-white border-t-2 border-govGray font-sans antialiased text-govBlack">
      <div style={containerStyle} className="mx-auto">
        
        {/* --- SECTION 1: HEADER --- */}
        <div className="mb-16 py-2">
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

        {/* --- SECTION 2: HIGH PRIORITY NOTICE (Full Width, No Button) --- */}
        <div className="border-2 border-govBlack bg-white p-10 md:p-12 mb-20 shadow-sm relative">
          <div className="flex justify-between items-center mb-8">
            <span className="bg-govRed text-white text-[10px] font-heading font-black px-4 py-1.5 uppercase tracking-widest">High Priority</span>
            <span className="text-gray-400 text-[10px] font-heading font-black uppercase tracking-widest">October 26, 2026</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-heading font-black uppercase tracking-tight mb-6 leading-tight hover:text-govRed transition-colors cursor-pointer">
            Notice Inviting Tenders for Raipur Infrastructure Development Phase IV
          </h3>
          <p className="text-gray-600 text-sm font-medium leading-relaxed mb-8 max-w-4xl border-l-4 border-govGray pl-6 md:pl-8 uppercase">
            Official procurement notice for the development of civil infrastructure projects. Interested parties must submit their qualifications by the specified deadline.
          </p>
          <div className="border-t-2 border-govGray pt-6 text-right">
            <span className="text-[10px] font-heading font-black text-gray-400 uppercase tracking-widest">REF-ID: TDR-CIDC-2026-004</span>
          </div>
        </div>

        {/* --- SECTION 3: PUBLIC NOTICES TABLE --- */}
        <div className="mb-20">
          <div className="mb-8 flex items-center gap-4">
            <div className="w-10 h-1.5 bg-govBlack"></div>
            <h3 className="text-2xl font-heading font-black uppercase tracking-tight text-govBlack">Public Notices</h3>
          </div>
          
          <div className="border border-gray-300 overflow-hidden shadow-sm bg-white">
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-12 gap-0 bg-govBlack text-white font-heading text-[11px] font-black uppercase tracking-widest">
              <div className="col-span-3 lg:col-span-2 px-8 py-4 border-r border-white/10">Reference No.</div>
              <div className="col-span-5 lg:col-span-6 px-8 py-4 border-r border-white/10">Title & Statutory Description</div>
              <div className="col-span-3 px-8 py-4 border-r border-white/10 text-center">Date</div>
              <div className="col-span-1 px-8 py-4 text-center">Action</div>
            </div>
            
            {/* Table Body */}
            <div className="divide-y divide-gray-200">
              {publicNotices.map((notice) => (
                <div key={notice.ref} className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center group hover:bg-govGray transition-colors">
                  
                  {/* Reference */}
                  <div className="col-span-3 lg:col-span-2 px-8 py-6 border-r border-gray-100 text-[12px] font-heading font-black text-gray-500 tracking-widest uppercase">
                    {notice.ref}
                  </div>
                  
                  {/* Title */}
                  <div className="col-span-5 lg:col-span-6 px-8 py-6 border-r border-gray-100">
                    <h4 className="font-heading font-black text-govBlack uppercase tracking-tight text-[13px] md:text-sm group-hover:text-govRed transition-colors">
                      {notice.title}
                    </h4>
                  </div>
                  
                  {/* Date */}
                  <div className="col-span-3 px-8 py-6 border-r border-gray-100 text-center text-[11px] font-heading font-black text-gray-400 tracking-widest uppercase">
                    {notice.date}
                  </div>
                  
                  {/* Action (Download) */}
                  <div className="col-span-1 flex items-center justify-center p-4">
                    <button className="w-10 h-10 border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:bg-govBlack hover:text-white hover:border-govBlack transition-all">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7l-7 7-7-7" />
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