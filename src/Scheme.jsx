 import React, { useState, useEffect, useRef } from 'react';
 
 export function ProjectsAndSchemes() {
  // Locked GOV UI Max Width (7xl / 1280px)
  const containerStyle = { maxWidth: '1280px' };

  return (
    <section className="bg-white py-16 px-6 font-sans border-t-2 border-govGray">
      <div style={containerStyle} className="mx-auto">
        
        {/* CIDC INDUSTRIAL HEADER */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-govRed font-heading font-black text-[11px] uppercase tracking-[0.4em]">Institutional Dashboard</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-black text-govBlack uppercase tracking-tighter leading-none mb-4">
            Projects & <span className="text-govRed">Schemes</span>
          </h1>
          <p className="text-gray-500 text-sm font-bold uppercase tracking-widest font-sans">
            Construction Industry Development Council | Raipur Center
          </p>
        </div>

        {/* TOP STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-300 mb-16 bg-white">
          {[
            { label: "Total Schemes", val: "42", sub: "FY 2026-B1" },
            { label: "Active Projects", val: "18", sub: "OPERATIONAL" },
            { label: "Total Investment", val: "₹12.4Cr", sub: "CAPITAL" },
            { label: "Beneficiaries", val: "1,240+", sub: "SOCIAL" },
          ].map((stat, i) => (
            <div 
              key={i} 
              className="p-10 flex flex-col items-center justify-center text-center border-r border-b lg:border-b-0 border-gray-200 group hover:bg-govGray transition-all duration-300 h-48 last:border-r-0"
            >
              <span className="text-[9px] font-heading font-black text-gray-400 uppercase tracking-[0.4em] mb-4 group-hover:text-govRed transition-colors">
                {stat.sub}
              </span>
              <h3 className="text-5xl font-heading font-black text-govBlack tracking-tighter mb-2">
                {stat.val}
              </h3>
              <p className="text-[10px] font-heading font-black text-gray-500 uppercase tracking-widest leading-none mb-4">
                {stat.label}
              </p>
              <div className="w-10 h-1 bg-govGray group-hover:w-16 group-hover:bg-govRed transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* LEFT: TABLE CONTAINER (Dynamic Width) */}
          <div className="flex-grow lg:w-2/3 space-y-16">
            <div className="w-full">
              <div className="flex justify-between items-end mb-8 border-b-2 border-govBlack pb-4">
                <div>
                  <h2 className="text-2xl font-heading font-black uppercase tracking-tight text-govBlack">Project <span className="text-govRed">Registry</span></h2>
                </div>
                <button className="text-govRed text-[10px] font-heading font-black uppercase tracking-widest hover:text-govBlack transition-all">
                  Access Archive »
                </button>
              </div>

              {/* CLEAN GOV UI TABLE - Removed Zebra Strips & Red Bars */}
              <div className="border border-gray-300 overflow-hidden bg-white shadow-sm">
                <table className="w-full text-left border-collapse font-sans">
                  <thead>
                    <tr className="bg-govBlack text-white text-[11px] font-heading uppercase tracking-widest">
                      <th className="px-6 py-4 border-r border-white/10">Project Details & Reference</th>
                      <th className="px-6 py-4 border-r border-white/10 text-center">Status</th>
                      <th className="px-6 py-4 border-r border-white/10 text-right">Deployment</th>
                      <th className="px-6 py-4 text-right">Archive</th>
                    </tr>
                  </thead>
                  <tbody className="text-[12px]">
                    {[
                      { name: "Skill Training Center - Korba", id: "PRJ-KOB-04", status: "IN PROGRESS", date: "DEC 2026", active: false },
                      { name: "Smart Highway Amenities (NH-30)", id: "PRJ-NH-30", status: "ACTIVE", date: "AUG 2027", active: true },
                      { name: "IT Park Expansion - Naya Raipur", id: "PRJ-NR-09", status: "IN PROGRESS", date: "JAN 2028", active: false }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-gray-200 bg-white hover:bg-govGray transition-colors group">
                        <td className="px-6 py-5 border-r border-gray-100">
                          <div>
                            <p className="font-heading font-black text-govBlack uppercase tracking-tight leading-none mb-1 group-hover:text-govRed">
                              {row.name}
                            </p>
                            <p className="text-[9px] font-heading font-black text-gray-400 tracking-widest uppercase">{row.id}</p>
                          </div>
                        </td>
                        <td className="px-6 py-5 border-r border-gray-100 text-center">
                          <span className={`text-[10px] font-heading font-black uppercase tracking-widest ${row.active ? 'text-govRed' : 'text-gray-400'}`}>
                            {row.active ? '● Active' : '○ In Progress'}
                          </span>
                        </td>
                        <td className="px-6 py-5 border-r border-gray-100 text-right font-heading font-black text-gray-500">
                          {row.date}
                        </td>
                        <td className="px-6 py-5 text-right">
                          <button className="text-[9px] font-heading font-black uppercase tracking-widest text-gray-400 hover:text-govRed transition-all flex items-center justify-end gap-2 ml-auto">
                            <span>PDF</span>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* COMPLETED OPERATIONS GRID */}
            <div className="w-full">
              <h2 className="text-xl font-heading font-black uppercase tracking-tight text-govBlack mb-6">Completed Operations</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-300">
                {[
                  { name: "Rajnandgaon Hub", desc: "Multi-purpose construction training facility for rural youth." },
                  { name: "Jagdalpur Unit", desc: "Modern vocational center established for Bastar division." },
                  { name: "Bridge Audit '23", desc: "Full structural safety certification of 14 key bridges." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 border-r border-b md:border-b-0 border-gray-200 group hover:bg-govGray transition-all">
                    <div className="w-8 h-1 bg-govRed mb-6 group-hover:w-full transition-all"></div>
                    <h4 className="font-heading font-black text-govBlack uppercase tracking-tight mb-4 group-hover:text-govRed">{item.name}</h4>
                    <p className="text-[12px] text-gray-600 font-sans font-medium leading-relaxed uppercase">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 border-2 border-govBlack bg-white self-start">
    {/* Header - Charcoal Black Background (Consistent with About Section Notice Board) */}
    <div className="bg-govBlack p-5 flex items-center justify-between">
        <h4 className="text-[12px] font-heading font-black uppercase tracking-[0.2em] text-white">
            Upcoming Schemes
        </h4>
        <div className="flex gap-1">
            <div className="w-1.5 h-1.5 bg-govRed rounded-full animate-pulse"></div>
        </div>
    </div>
    
    <div className="p-6">
        <div className="space-y-0 divide-y divide-gray-200">
            {[
                { label: "LAUNCH Q3", title: "E-Worker Portal 2.0", desc: "Direct benefit transfer system for verified laborers." },
                { label: "TENDER OPEN", title: "Green Building Lab", desc: "Materials testing facility for sustainable technology." }
            ].map((sch, i) => (
                <div 
                    key={i} 
                    className="py-6 first:pt-0 transition-colors cursor-pointer group"
                >
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-[9px] font-heading font-black text-govRed uppercase tracking-widest bg-govRed/5 px-2 py-0.5">
                            {sch.label}
                        </span>
                    </div>
                    
                    <h4 className="text-[14px] font-heading font-black text-govBlack uppercase tracking-tight mb-2 group-hover:text-govRed transition-colors">
                        {sch.title}
                    </h4>
                    
                    <p className="text-[11px] text-gray-600 font-sans font-medium leading-relaxed uppercase">
                        {sch.desc}
                    </p>
                </div>
            ))}
        </div>

        {/* Action Button - Locked Heritage Red */}
        <button className="mt-8 w-full bg-govRed text-white py-4 text-[11px] font-heading font-black uppercase tracking-widest hover:bg-govBlack transition-all border-none cursor-pointer">
            Download Scheme Registry »
        </button>
    </div>
</div>

        </div>
      </div>
    </section>
  );
}

export function SchemeDirectory() {
  const [expandedId, setExpandedId] = React.useState(null);

  const schemes = [
    { 
      id: 0,
      name: "Parivahan Scheme 2026", 
      tag: "WELFARE", 
      progress: 85,
      desc: "Details of Employees Status as of 01.03.2026. Total employees: 2,943 (2,738 from 2003 partition + 205 court reinstated). Remaining: 238 (224 on deputation, 14 in CIDC) after 1,376 VRS, 1,171 retired/deceased, and 158 absorbed."
    },
    { 
      id: 1,
      name: "Mukhya Mantri Nirman Shramik Pension", 
      tag: "SOCIAL SECURITY", 
      progress: 42,
      desc: "A statutory pension framework designed specifically for registered construction workers above the age of 60. This scheme ensures long-term financial stability and dignity for the labor force that has contributed to the state's urban and rural infrastructure development."
    },
    { 
      id: 2,
      name: "State Apprenticeship Promotion", 
      tag: "SKILLS", 
      progress: 100,
      desc: "Direct coordination between CIDC and industrial partners to provide high-level on-site technical training. The program focuses on civil engineering, BIM modeling, and high-tech equipment operation, ensuring all candidates meet certified state deployment protocols."
    }
  ];

  // Locked GOV UI Max Width (7xl / 1280px)
  const containerStyle = { maxWidth: '1280px' };

  return (
    <section className="py-20 bg-white border-t-2 border-govGray font-sans">
      <div style={containerStyle} className="mx-auto px-6">
        
        {/* GOV UI HEADER HIERARCHY */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-2">

            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-govBlack uppercase tracking-tighter leading-none mb-4">
              Scheme <span className="text-govRed">Directory</span>
            </h2>
            <p className="text-gray-500 text-sm font-bold uppercase tracking-widest font-sans">
              Official repository of active welfare and developmental frameworks managed by CIDC Raipur.
            </p>
          </div>
        </div>

        {/* ACCORDION REGISTRY - Institutional Table Frame */}
        <div className="border-t-2 border-govBlack border-x border-gray-200">
          {schemes.map((item) => (
            <div key={item.id} className="border-b border-gray-200">
              
              {/* Row Header - High Density Grid */}
              <div 
                onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                className={`flex flex-col md:flex-row items-center justify-between py-8 px-8 cursor-pointer transition-all duration-300 ${expandedId === item.id ? 'bg-govGray' : 'bg-white hover:bg-govGray/50'}`}
              >
                <div className="flex items-center gap-8 w-full md:w-2/5">
                  {/* Status Indicator Dot */}
                  <div className={`w-3 h-3 transition-all duration-500 ${expandedId === item.id ? 'bg-govRed' : 'bg-gray-300'}`}></div>
                  
                  <div>
                    <h3 className="font-heading font-black text-govBlack uppercase tracking-tight text-xl leading-none mb-2 group-hover:text-govRed transition-colors">
                      {item.name}
                    </h3>
                    <span className="bg-govBlack text-white text-[9px] font-heading font-black px-2 py-0.5 tracking-widest uppercase">
                      {item.tag}
                    </span>
                  </div>
                </div>
                
                {/* Deployment Analytics Strip */}
                <div className="flex flex-1 items-center justify-end gap-12 w-full mt-6 md:mt-0">
                  <div className="w-full max-w-[240px]">
                    <div className="flex justify-between text-[10px] font-heading font-black text-gray-500 uppercase tracking-widest mb-2">
                      <span>Deployment Status</span>
                      <span className={item.progress === 100 ? 'text-green-700' : 'text-govRed'}>{item.progress}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-200">
                      <div 
                        className={`h-full transition-all duration-1000 ${item.progress === 100 ? 'bg-green-600' : 'bg-govRed'}`} 
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* GOV UI Toggle Block */}
                  <button 
                    className={`w-12 h-12 flex items-center justify-center transition-all duration-300 border-2
                      ${expandedId === item.id ? 'bg-govRed border-govRed text-white shadow-md' : 'bg-white border-govBlack text-govBlack hover:bg-govBlack hover:text-white'}`}
                  >
                    <svg 
                      className={`w-5 h-5 transition-transform duration-500 ${expandedId === item.id ? 'rotate-180' : 'rotate-0'}`} 
                      fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* GAZETTE EXPANSION CONTENT */}
              <div 
                className={`overflow-hidden transition-all duration-700 ease-in-out
                  ${expandedId === item.id ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-12 border-t border-gray-300 bg-white grid grid-cols-1 lg:grid-cols-12 gap-12">
                  
                  {/* Meta Data Ledger (Left) */}
                  <div className="lg:col-span-4 space-y-6">
                     <div className="grid grid-cols-1 gap-4">
                      <div className="bg-govGray p-4 border border-gray-200">
                        <p className="text-[9px] font-heading font-black text-gray-400 uppercase tracking-widest mb-1">Filing Reference</p>
                        <p className="text-sm font-heading font-black text-govBlack">CIDC-REG-2026-0{item.id + 1}</p>
                      </div>
                      <div className="bg-govGray p-4 border border-gray-200">
                        <p className="text-[9px] font-heading font-black text-gray-400 uppercase tracking-widest mb-1">Execution Status</p>
                        <p className={`text-xs font-heading font-black ${item.progress === 100 ? 'text-green-700' : 'text-govRed'}`}>
                           {item.progress === 100 ? '● FULLY DEPLOYED' : '○ UNDER IMPLEMENTATION'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Descriptive text (Right) */}
                  <div className="lg:col-span-8">
                    <p className="text-[16px] text-gray-700 leading-relaxed font-sans font-medium text-justify uppercase">
                      {item.desc}
                    </p>
                    
                    <div className="mt-12 flex flex-wrap gap-4">
                      <button className="bg-govBlack text-white px-10 py-4 text-[11px] font-heading font-black uppercase tracking-[0.2em] hover:bg-govRed transition-all">
                        Download (PDF) »
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Registry Footer Metadata */}
        <div className="mt-8 flex justify-between items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <p>Last Audited: April 2026</p>
            <p>Certified by CIDC Raipur Management</p>
        </div>
      </div>
    </section>
  );
}