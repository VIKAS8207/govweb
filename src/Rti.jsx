import React, { useState, useEffect, useRef } from 'react';

export function RTIPortal() {
  // Locked GOV UI Max Width (7xl / 1280px) for institutional consistency
  const containerStyle = { maxWidth: '1280px' };

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

  return (
    <main id="main-content" className="flex-1 w-full py-16 bg-white font-sans selection:bg-govRed selection:text-white">
      
      {/* 1. PRIMARY APPLICATION BLOCK (Institutional Hero Strip) */}
      <section style={containerStyle} className="mx-auto px-6 mb-16">
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
              Start Application »
            </a>
          </div>
        </div>
      </section>

      <section style={containerStyle} className="mx-auto px-6 mb-24">

        {/* 2. SEARCH HUB - Institutional Terminal */}
        <div className="mt-12 pb-12 border-b border-gray-200">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-3">
            </div>
            
            <h3 className="text-2xl font-heading font-black text-govBlack uppercase tracking-tight mb-6">
              Search Statutory <span className="text-govRed">Manuals</span>
            </h3>

            {/* Rectangular Search Field */}
            <div className="relative flex border-2 border-govBlack p-1 bg-white focus-within:ring-4 focus-within:ring-govRed/10 transition-all">
              <input 
                type="text" 
                placeholder="ENTER KEYWORDS (e.g. BUDGET, EMPLOYEES)..." 
                className="w-full px-6 py-4 bg-transparent text-[12px] font-bold tracking-widest uppercase focus:outline-none placeholder:text-gray-300"
              />
              <button className="bg-govBlack text-white px-10 py-4 text-[11px] font-heading font-black uppercase tracking-widest hover:bg-govRed transition-all">
                Execute 
              </button>
            </div>
            
            <p className="mt-4 text-[10px] font-sans font-bold text-gray-400 uppercase tracking-widest">
              Accessing mandatory categories under Section 4(1)(b) of the RTI Act
            </p>
          </div>
        </div>

        {/* 3. SECTION DIVIDER */}
        <div className="flex items-center gap-6 py-10">
          <h4 className="text-xl font-heading font-black text-govBlack uppercase tracking-widest shrink-0">
            Statutory <span className="text-govRed">Registry</span>
          </h4>
        </div>
        
        {/* 4. STATUTORY MANUAL REGISTRY - Slim GOV UI Table */}
<div className="border border-gray-300 overflow-hidden shadow-sm bg-white">
  <table className="w-full text-left border-collapse font-sans">
    <thead>
      <tr className="bg-govBlack text-white text-[11px] font-heading uppercase tracking-widest">
        <th className="px-6 py-4 border-r border-white/10 w-24">Reference</th>
        <th className="px-6 py-4 border-r border-white/10">Manual Title / Category Description</th>
        <th className="px-6 py-4 text-right w-40">Statutory Action</th>
      </tr>
    </thead>
    <tbody className="text-[12px]">
      {manuals.map((manual, i) => (
        <tr 
          key={i} 
          className="border-b border-gray-200 hover:bg-govGray transition-colors group cursor-pointer"
        >
          {/* Reference ID Column */}
          <td className="px-6 py-4 border-r border-gray-100">
            <span className="text-govRed font-heading font-black tracking-widest">
              {manual.id}
            </span>
          </td>

          {/* Manual Title Column */}
          <td className="px-6 py-4 border-r border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-1 h-4 bg-gray-200 group-hover:bg-govRed transition-all"></div>
              <h4 className="font-heading font-black text-govBlack uppercase tracking-tight group-hover:text-govRed transition-colors">
                {manual.title}
              </h4>
            </div>
          </td>

          {/* Action Column */}
          <td className="px-6 py-4 text-right">
            <button className="inline-flex items-center gap-3 text-[10px] font-heading font-black text-gray-400 group-hover:text-govBlack uppercase tracking-widest transition-all">
              <span>Download Manual</span>
              <div className="w-8 h-8 flex items-center justify-center border-2 border-gray-200 group-hover:border-govBlack group-hover:bg-govBlack group-hover:text-white transition-all">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24">
                  <path d="M12 5v14m7-7l-7 7-7-7" />
                </svg>
              </div>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

{/* Table Footer Metadata Strip */}
<div className="mt-4 flex justify-between items-center text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] px-2">
    <p>Section 4(1)(b) Compliance Registry</p>
    <p>Format: Technical PDF/A</p>
</div>
      </section>

    
            
            {/* 5. ACTION REGISTRY - Operational Phases */}
<section className="w-full bg-white font-sans border-t border-gray-200 py-12">
    <div style={containerStyle} className="mx-auto px-6">
        
        <div className="flex items-center gap-4 mb-10">
            <h4 className="text-gray-500 font-heading font-black text-[12px] uppercase tracking-[0.4em]">Operational Phases</h4>
        </div>

        {/* Registry Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-2 border-govBlack bg-white shadow-sm">
            
            {/* 01. TRACK STATUS - Universal Search Terminal */}
            <div className="p-10 border-b-2 lg:border-b-0 lg:border-r-2 border-govBlack flex flex-col justify-between h-[450px] group transition-colors hover:bg-govGray/30">
                <div>
                    <span className="text-govRed font-heading font-black text-[10px] tracking-widest uppercase mb-4 block">Phase 01</span>
                    <h3 className="font-heading font-black text-3xl text-govBlack uppercase tracking-tight mb-6 leading-none">
                        Track <span className="text-govRed">Status</span>
                    </h3>
                    <p className="text-[13px] text-gray-600 font-sans font-bold uppercase leading-relaxed max-w-xs">
                        Verify the current stage of your filed disclosure request via the National Gateway Terminal.
                    </p>
                </div>

                {/* UNIVERSAL SEARCH TERMINAL */}
                <div className="relative flex border-2 border-govBlack p-1 bg-white focus-within:ring-4 focus-within:ring-govRed/10 transition-all mt-8">
                    <div className="pl-4 flex items-center justify-center text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input 
                        type="text" 
                        placeholder="ENTER REGISTRATION NO..." 
                        className="w-full px-4 py-4 bg-transparent text-[11px] font-heading font-black outline-none uppercase placeholder:text-gray-300" 
                    />
                    <button className="bg-govBlack text-white px-8 py-4 text-[11px] font-heading font-black uppercase hover:bg-govRed transition-all whitespace-nowrap">
                        SEARCH
                    </button>
                </div>
            </div>

            {/* 02. FILING PROTOCOL */}
            <div className="p-10 border-b-2 lg:border-b-0 lg:border-r-2 border-govBlack flex flex-col justify-between h-[450px] group transition-colors hover:bg-govGray/30">
                <div>
                    <span className="text-govRed font-heading font-black text-[10px] tracking-widest uppercase mb-4 block">Phase 02</span>
                    <h3 className="font-heading font-black text-3xl text-govBlack uppercase tracking-tight mb-6 leading-none">
                        Filing <br /> Protocol
                    </h3>
                    <p className="text-[13px] text-gray-600 font-sans font-bold uppercase leading-relaxed max-w-xs">
                        Comprehensive guidelines for physical correspondence, institutional seals, and processing fees.
                    </p>
                </div>

                <button className="bg-govBlack text-white px-8 py-5 w-full font-heading font-black text-[11px] uppercase tracking-widest hover:bg-govRed transition-all flex items-center justify-center gap-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24">
                        <path d="M12 5v14m7-7l-7 7-7-7" />
                    </svg>
                    <span>Download Manual »</span>
                </button>
            </div>

            {/* 03. APPEAL AUTHORITY */}
            <div className="p-10 flex flex-col justify-between h-[450px] group transition-colors hover:bg-govGray/30">
                <div>
                    <span className="text-govRed font-heading font-black text-[10px] tracking-widest uppercase mb-4 block">Phase 03</span>
                    <h3 className="font-heading font-black text-3xl text-govBlack uppercase tracking-tight mb-6 leading-none">
                        Appeal <br /> <span className="text-govRed">Authority</span>
                    </h3>
                    <p className="text-[13px] text-gray-600 font-sans font-bold uppercase leading-relaxed max-w-xs">
                        Lodge a formal first appeal within 30 days if information is withheld or response is unsatisfactory.
                    </p>
                </div>

                <button className="bg-govRed text-white px-8 py-5 w-full font-heading font-black text-[11px] uppercase tracking-widest hover:bg-govBlack transition-all border-none shadow-sm">
                    Lodge First Appeal »
                </button>
            </div>

        </div>
    </div>
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