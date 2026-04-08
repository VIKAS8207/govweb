 import React, { useState, useEffect, useRef } from 'react';

const SectionHeader = ({ title, actionText }) => (
    <div className="flex justify-between items-end border-b-4 border-govBlack pb-4 mb-8">
        <div>
            <div className="flex items-center gap-2 mb-2">
            </div>
            <h2 className="text-3xl font-heading font-black text-govBlack uppercase tracking-tighter leading-none">
                {title}
            </h2>
        </div>
        {actionText && (
            <button className="text-[10px] font-heading font-black text-gray-400 uppercase tracking-widest hover:text-govRed transition-colors flex items-center gap-2">
                {actionText} »
            </button>
        )}
    </div>
);

const KPIBlock = ({ label, value, isPrimary }) => (
    <div className={`p-10 border-r border-b border-gray-300 flex flex-col justify-between h-48 transition-colors ${isPrimary ? 'bg-govRed text-white border-govRed' : 'bg-white text-govBlack'}`}>
        <div className="flex justify-between items-start">
            <span className={`text-[9px] font-heading font-black uppercase tracking-[0.3em] ${isPrimary ? 'text-white/60' : 'text-gray-400'}`}>
                Statutory Metric
            </span>
            <div className={`w-2.5 h-2.5 ${isPrimary ? 'bg-white' : 'bg-govRed'}`}></div>
        </div>
        <div>
            <h3 className="text-5xl font-heading font-black tracking-tighter leading-none mb-2">{value}</h3>
            <p className={`text-[10px] font-heading font-black uppercase tracking-[0.2em] ${isPrimary ? 'text-white/80' : 'text-gray-500'}`}>
                {label}
            </p>
        </div>
    </div>
);



export function ResourceDirectory() {
   
    const containerStyle = { maxWidth: '1280px' };

    const tenders = [
        { name: "Smart City Infrastructure Phase II", dept: "Construction & Development", ref: "CIDC/TEN/2026/WR1", date: "24 OCT 2026" },
        { name: "Public Information Display Systems", dept: "IT & Electronics", ref: "CIDC/TEN/2026/112", date: "02 NOV 2026" },
        { name: "Solar Power Installation for Govt Hubs", dept: "Renewable Energy", ref: "CIDC/TEN/2026/W15", date: "15 NOV 2026" }
    ];

    return (
        <div className="min-h-screen bg-white font-sans py-16 px-6">
            <div style={containerStyle} className="mx-auto space-y-20">
                
                <section className="max-w-4xl">
                    <h1 className="text-4xl lg:text-5xl font-heading font-black text-govBlack uppercase tracking-tighter leading-[0.95] mb-8">
                        Resource Directory: <br />
                        <span className="text-govRed">Policies & Statutory Documents</span>
                    </h1>
                    <p className="text-gray-700 text-sm font-sans font-medium leading-relaxed max-w-2xl text-justify uppercase">
                        Access critical institutional documents and regulatory frameworks. Our commitment to 
                        transparency ensures all tender and policy information is readily available for 
                        authorized stakeholders and citizens.
                    </p>
                </section>

                {/* 2. KPI STRIP - Industrial Modular Grid */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-gray-300 shadow-sm">
                    <KPIBlock label="Active Tender Notices" value="12" isPrimary={true} />
                    <KPIBlock label="Last Policy Update" value="24h" />
                    <KPIBlock label="GIGW Compliance" value="100%" />
                </section>

                {/* 3. ACTIVE TENDERS TABLE - GOV UI Registry Style */}
                <section>
                    <SectionHeader title="Active Tenders" actionText="View Full Archive" />
                    <div className="border border-gray-300 overflow-hidden shadow-sm">
                        <table className="w-full text-left border-collapse bg-white">
                            <thead>
                                <tr className="bg-govBlack text-white text-[11px] font-heading uppercase tracking-widest">
                                    <th className="px-8 py-4 border-r border-white/10">Tender Nomenclature & Department</th>
                                    <th className="px-8 py-4 border-r border-white/10">Reference No.</th>
                                    <th className="px-8 py-4 border-r border-white/10">Closing Date</th>
                                    <th className="px-8 py-4 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-[12px] font-sans">
                                {tenders.map((item, i) => (
                                    <tr key={i} className="border-b border-gray-200 hover:bg-govGray transition-colors group">
                                        <td className="px-8 py-6 border-r border-gray-100">
                                            <h4 className="font-heading font-black text-govBlack uppercase tracking-tight group-hover:text-govRed transition-colors leading-tight">
                                                {item.name}
                                            </h4>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">
                                                {item.dept}
                                            </p>
                                        </td>
                                        <td className="px-8 py-6 border-r border-gray-100 font-mono font-bold text-gray-600">
                                            {item.ref}
                                        </td>
                                        <td className="px-8 py-6 border-r border-gray-100 font-heading font-black text-govRed">
                                            {item.date}
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <button className="bg-govBlack text-white px-6 py-3 text-[10px] font-heading font-black uppercase tracking-widest hover:bg-govRed transition-all">
                                                Download PDF »
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* 4. FORMS & DOWNLOADS GRID - Registry Card Style */}
                <section>
                    <SectionHeader title="Forms & Downloads" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-gray-300">
                        {['Vendor Registration', 'RTI Application', 'Government Guidelines'].map((form, i) => (
                            <div key={i} className="p-12 border-r border-b border-gray-300 bg-white flex flex-col justify-between h-80 group hover:bg-govGray transition-all">
                                <div>
                                    <span className="text-[10px] font-heading font-black text-gray-300 uppercase tracking-widest mb-6 block">
                                        FORM-REF: 0{i+1}
                                    </span>
                                    <h4 className="text-2xl font-heading font-black text-govBlack uppercase tracking-tight mb-4 group-hover:text-govRed">
                                        {form}
                                    </h4>
                                    <div className="w-12 h-1 bg-govRed mb-6"></div>
                                    <p className="text-[12px] text-gray-600 font-sans font-medium leading-relaxed uppercase">
                                        Official statutory format for {form.toLowerCase()} processing and compliance.
                                    </p>
                                </div>
                                <button className="w-full bg-white border-2 border-govBlack py-4 text-[10px] font-heading font-black uppercase tracking-[0.2em] hover:bg-govBlack hover:text-white transition-all">
                                    Download Registry File 
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Technical Registry Footer */}
                <div className="mt-8 flex justify-between items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2">
                    <p>Last Audit: April 2026</p>
                    <p>Certified by National Informatics Centre (NIC)</p>
                </div>
            </div>
        </div>
    );
}