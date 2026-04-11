import React, { useState, useEffect, useRef } from 'react';


export function RTIPortal() {
  // Locked GOV UI Max Width (7xl / 1280px) for institutional consistency
  const containerStyle = { maxWidth: '1280px' };

  // State to control table expansion
  const [isExpanded, setIsExpanded] = useState(false);

  const manuals = [
    { title: "Organization & Functions", id: "M01" },
    { title: "Powers of Officers", id: "M02" },
    { title: "Rules & Regulations", id: "M03" },
    { title: "Employee Directory", id: "M04" },
    { title: "Monthly Remuneration", id: "M05" },
    { title: "Budget Allocated", id: "M06" },
    { title: "Subsidy Programs", id: "M07" },
    { title: "Contact of CPIO/PIO", id: "M08" }
  ];

  // Logic to show either 5 items or the full list
  const displayedManuals = isExpanded ? manuals : manuals.slice(0, 5);

  return (
    <main id="main-content" className="flex-1 w-full py-16 bg-white font-sans selection:bg-govRed selection:text-white">
      
      {/* 1. PRIMARY APPLICATION BLOCK (Institutional Hero Strip) */}
      <section style={containerStyle} className="mx-auto px-6 mb-10">
        <div className="bg-govRed p-10 lg:p-16 flex flex-col md:flex-row justify-between items-center gap-12 relative border-b-[12px] border-govBlack">
          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <span className="text-white font-heading font-black text-[11px] uppercase tracking-[0.4em]">Section 6(1) Protocol</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tighter leading-none mb-6">
              Apply for <br /> <span className="text-govBlack">RTI Disclosure</span>
            </h1>
            <p className="text-white/80 text-sm font-sans font-bold uppercase leading-relaxed max-w-md">
              Submit a formal request for information to the Central Public Information Officer. Statutory compliance guaranteed within 30 days.
            </p>
          </div>

          <div className="relative z-10 shrink-0 w-full md:w-auto">
            <a 
              href="https://rtionline.gov.in" 
              className="inline-block w-full md:w-auto bg-govBlack text-white px-12 py-5 font-heading font-black text-[12px] uppercase tracking-[0.3em] hover:bg-white hover:text-govRed transition-all border-2 border-govBlack"
            >
              Download Application »
            </a>
          </div>
        </div>
      </section>

      <section style={containerStyle} className="mx-auto px-6 mb-4">
        {/* 3. SECTION DIVIDER */}
        <div className="flex items-center gap-6 py-6">
          <h4 className="text-xl font-heading font-black text-govBlack uppercase tracking-widest shrink-0">
            Statutory <span className="text-govRed">Registry</span>
          </h4>
        </div>

        {/* Table Footer Metadata Strip */}
        <div className="mb-4 flex justify-between items-center text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] px-2">
            <p>Section 4(1)(b) Compliance Registry</p>
            <p>Format: Technical PDF/A</p>
        </div>
        
        {/* 4. STATUTORY MANUAL REGISTRY - Slim GOV UI Table */}
        <div className="border border-gray-300 overflow-hidden shadow-sm bg-white">
          <table className="w-full text-left border-collapse font-sans">
            <thead>
              <tr className="bg-govBlack text-white text-[11px] font-heading uppercase tracking-widest">
                <th className="px-6 py-4 border-r border-white/10">Manual Title / Category Description</th>
                <th className="px-6 py-4 text-right w-48">Statutory Action</th>
              </tr>
            </thead>
            <tbody className="text-[12px]">
              {displayedManuals.map((manual, i) => (
                <tr 
                  key={i} 
                  className="border-b border-gray-200 hover:bg-govGray transition-colors group"
                >
                  {/* Manual Title Column */}
                  <td className="px-6 py-4 border-r border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-1 h-4 bg-gray-200 group-hover:bg-govRed transition-all"></div>
                      <h4 className="font-heading font-black text-govBlack uppercase tracking-tight group-hover:text-govRed transition-colors">
                        {manual.title}
                      </h4>
                    </div>
                  </td>

                  {/* Action Column with Updated PDF SVG */}
                  <td className="px-6 py-4 text-right">
                    <button className="cursor-pointer inline-flex items-center gap-3 text-[10px] font-heading font-black text-gray-400 hover:text-govRed group-hover:text-govRed uppercase tracking-widest transition-colors duration-300">
                      <span>PDF</span>
                      <svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        strokeWidth="3.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        {/* Arrow Stem */}
                        <path d="M12 3v11" />
                        {/* Arrow Head */}
                        <path d="M7 9l5 5 5-5" />
                        {/* Bottom Tray */}
                        <path d="M5 16v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* View All / View Less Toggle */}
        {manuals.length > 5 && (
          <div className="flex justify-end mt-4 mb-2">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="cursor-pointer text-[10px] font-heading font-black text-govBlack hover:text-govRed uppercase tracking-widest transition-colors border-b-2 border-govBlack hover:border-govRed pb-1"
            >
              {isExpanded ? '« View Less Records' : 'View All Records »'}
            </button>
          </div>
        )}

      </section>
    </main>
  );
}

export function RTIContactRegistry() {
  // Locked GOV UI Max Width (7xl / 1280px)
  const containerStyle = { maxWidth: '1280px' };

  const officers = [
    {
      role: "Public Relation Officer (PRO)",
      authority: "RTI Information Wing",
      name: "Shri. Alok Vardhan",
      contact: "+91-771-2234567",
      email: "pro.rti@cidc.cg.gov.in",
      ref: "CIDC/RTI/PIO/01"
    },
    {
      role: "First Appellate Authority",
      authority: "Statutory Appeals Division",
      name: "Smt. Rashmi Singh",
      contact: "+91-771-2234588",
      email: "faa.rti@cidc.cg.gov.in",
      ref: "CIDC/RTI/FAA/01"
    }
  ];

  return (
    <section className="py-16 bg-white font-sans border-t-2 border-govGray">
      <div style={containerStyle} className="mx-auto px-6">
        
        {/* SECTION HEADER - GOV UI LOCK */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-govRed font-heading font-black text-[11px] uppercase tracking-[0.4em]">Section 4(1)(b) Compliance</span>
          </div>
          <h2 className="text-3xl font-heading font-black text-govBlack uppercase tracking-tight leading-none">
            RTI Statutory <span className="text-govRed">Contacts</span>
          </h2>
        </div>

        {/* STATUTORY REGISTRY TABLE - SIMPLE GOV UI STYLE */}
        <div className="border border-gray-300 overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse bg-white">
            <thead>
              <tr className="bg-govBlack text-white text-[11px] font-heading uppercase tracking-widest">
                <th className="px-6 py-4 border-r border-white/10">Designation & Authority</th>
                <th className="px-6 py-4 border-r border-white/10">Official Name</th>
                <th className="px-6 py-4 border-r border-white/10">Contact Details</th>
                <th className="px-6 py-4 text-right">Official Email</th>
              </tr>
            </thead>
            <tbody className="text-[12px]">
              {officers.map((officer, i) => (
                <tr 
                  key={i} 
                  className="border-b border-gray-200 hover:bg-govGray transition-colors group"
                >
                  {/* Designation Column */}
                  <td className="px-6 py-6 border-r border-gray-100">
                    <span className="text-[9px] font-heading font-black text-govRed block mb-1 uppercase tracking-tighter">
                      {officer.authority}
                    </span>
                    <h4 className="font-heading font-black text-govBlack uppercase tracking-tight text-[14px]">
                      {officer.role}
                    </h4>
                  </td>

                  {/* Name Column */}
                  <td className="px-6 py-6 border-r border-gray-100">
                    <p className="font-heading font-black text-govBlack uppercase tracking-tight group-hover:text-govRed transition-colors">
                      {officer.name}
                    </p>
                    <p className="text-[9px] font-sans font-bold text-gray-400 uppercase mt-1">
                      Ref: {officer.ref}
                    </p>
                  </td>

                  {/* Contact Column */}
                  <td className="px-6 py-6 border-r border-gray-100">
                    <p className="font-mono font-bold text-govBlack text-[13px]">
                      {officer.contact}
                    </p>
                  </td>

                  {/* Email Column */}
                  <td className="px-6 py-6 text-right">
                    <p className="font-heading font-black text-gray-500 uppercase tracking-tighter group-hover:text-govBlack">
                      {officer.email}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};