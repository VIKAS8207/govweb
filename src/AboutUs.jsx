import React, { useState, useEffect, useRef } from 'react';
 
 export function AboutHero() {
        const containerStyle = { maxWidth: '1280px' };
        return (
            <section className="relative py-12 lg:py-24 bg-white border-b-4 border-govGray overflow-hidden">
                <div style={containerStyle} className="mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-[1.2] flex flex-col justify-center">
                            <div className="flex items-center gap-4 mb-8">
                            </div>
                            <h1 className="text-4xl lg:text-7xl font-heading font-black text-govBlack leading-[0.95] uppercase tracking-tighter mb-10">
                                Driving Infrastructure <br /> 
                                <span className="text-govRed">Excellence</span> Since 2001
                            </h1>
                            <div className="max-w-2xl">
                                <p className="text-gray-700 text-lg leading-relaxed font-sans font-medium text-justify">
                                    The Chhattisgarh Infrastructure Development Corporation Ltd. (CIDC) functions as the 
                                    apex body for standardized construction and industrial growth. We bridge the gap 
                                    between state policy and ground-level execution through digital transparency 
                                    and professional project management.
                                </p>
                                <div className="mt-8 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-govRed animate-pulse"></div>
                                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest font-heading">Official Status: Active_Undertaking</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative w-full">
                            <div className="relative z-10 border-2 border-govBlack p-3 bg-govGray shadow-sm">
                                <img src="/image/pexels-midlox-28377273.jpg" alt="Infrastructure Development" className="w-full h-[520px] object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700" />
                                <div className="absolute bottom-0 right-0 bg-govBlack text-white p-6 font-heading font-black text-xl tracking-tighter uppercase leading-none border-l-4 border-govRed">
                                    CIDC <br/> <span className="text-govRed">HQ</span>
                                    <span className="block text-[8px] tracking-[0.3em] mt-2 text-gray-400 font-bold">RAIPUR, CG</span>
                                </div>
                            </div>
                            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-govRed -z-10 hidden lg:block"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    export function VisionMission() {
        const goals = [
            {
                title: "Our Vision",
                icon: (<svg className="w-8 h-8 text-govRed" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>),
                description: "To emerge as a premier agency for infrastructure development, transforming Chhattisgarh into a model state with world-class connectivity and robust industrial corridors.",
                tag: "Future State"
            },
            {
                title: "Our Mission",
                icon: (<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
                description: "To execute high-quality infrastructure projects through innovative financing, transparent procurement, and efficient management of public resources.",
                tag: "Direct Action"
            }
        ];
        const containerStyle = { maxWidth: '1280px' };
        return (
            <section className="py-24 bg-white border-b-2 border-govGray">
                <div style={containerStyle} className="mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
                        <div className="max-w-xl">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-gray-500 font-heading font-black text-[11px] uppercase tracking-[0.3em]">Corporate Roadmap</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-heading font-black text-govBlack uppercase tracking-tighter leading-none">The Foundation of <br /> <span className="text-govRed">Our Purpose</span></h2>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-0">
                        {goals.map((item, index) => (
                            <div key={index} className={`p-12 lg:p-16 relative group transition-all duration-500 overflow-hidden ${index === 0 ? 'bg-govGray border-r border-gray-300' : 'bg-govBlack text-white'}`}>
                                <span className={`inline-block text-[10px] font-heading font-black uppercase tracking-[0.2em] mb-10 px-4 py-1 ${index === 0 ? 'bg-govRed text-white' : 'bg-white text-govBlack'}`}>{item.tag}</span>
                                <div className="relative z-10">
                                    <div className="mb-8 flex items-center justify-between">
                                        <h3 className={`text-3xl font-heading font-black uppercase tracking-tighter ${index === 0 ? 'text-govBlack' : 'text-white'}`}>{item.title}</h3>
                                        {item.icon}
                                    </div>
                                    <p className={`text-base leading-relaxed font-sans font-medium ${index === 0 ? 'text-gray-700' : 'text-gray-400'}`}>{item.description}</p>
                                </div>
                                <div className="absolute inset-0 bg-govRed translate-y-full group-hover:translate-y-[98%] transition-transform duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    export function BoardMembers() {
        const board = [
            { name: "Shri S.K. Behar", designation: "Nominee Director", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300" },
            { name: "Shri Ravi Shanker", designation: "Independent Director", imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300" },
            { name: "Smt. Meeta Gupta", designation: "Ex-Officio Member", imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300" },
            { name: "Shri Rajesh Kumar", designation: "Technical Director", imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300" }
        ];
        const containerStyle = { maxWidth: '1280px' };
        return (
            <section className="py-24 bg-white border-b-2 border-govGray">
                <div style={containerStyle} className="mx-auto px-6">
                    <div className="flex flex-col items-start mb-20">
                        <span className="text-govRed font-heading font-black text-[10px] uppercase tracking-[0.4em] mb-2">Governance</span>
                        <h2 className="text-4xl font-heading font-black text-govBlack uppercase tracking-tighter">Board of <span className="text-govRed">Directors</span></h2>
                        <p className="text-gray-500 mt-4 text-sm font-sans font-medium max-w-xl">Governing body responsible for strategic oversight, policy formulation, and high-level industrial direction.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-300">
                        {board.map((member, idx) => (
                            <div key={idx} className="group flex flex-col items-center text-center border-r last:border-r-0 border-gray-300 hover:bg-govGray transition-all duration-300">
                                <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
                                    <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-10 w-full flex flex-col items-center">
                                    <h4 className="text-lg font-heading font-black text-govBlack uppercase tracking-tighter mb-2 group-hover:text-govRed transition-colors">{member.name}</h4>
                                    <div className="w-10 h-1 bg-govBlack mb-4 group-hover:bg-govRed group-hover:w-16 transition-all"></div>
                                    <p className="text-[10px] font-heading font-black text-gray-500 uppercase tracking-[0.2em] leading-tight">{member.designation}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    export function KeyOfficials() {
        const officials = [
            { name: "Mr. Arindam Bose", designation: "Head of Operations", contact: "+91 771 223 4561", email: "a.bose@cidc.cg.gov.in", din: "08441292", accent: "bg-govRed" },
            { name: "Ms. Meera Deshmukh", designation: "Chief Technical Officer", contact: "+91 771 223 4562", email: "m.deshmukh@cidc.cg.gov.in", din: "09122341", accent: "bg-govBlack" },
            { name: "Mr. Prateek Verma", designation: "Registrar (Admin)", contact: "+91 771 223 4563", email: "p.verma@cidc.cg.gov.in", din: "07655432", accent: "bg-govRed" },
            { name: "Dr. S. Raghunath", designation: "Director of Research", contact: "+91 771 223 4564", email: "s.raghunath@cidc.cg.gov.in", din: "06554431", accent: "bg-govBlack" }
        ];
        const containerStyle = { maxWidth: '1280px' };
        return (
            <section className="py-20 bg-white border-b-2 border-govGray">
                <div style={containerStyle} className="mx-auto px-6">
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-govRed font-heading font-black text-[11px] uppercase tracking-[0.3em]">Institutional Registry</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-heading font-black text-govBlack uppercase tracking-tighter leading-none">Key Officials & <span className="text-govRed">Governance</span></h2>
                    </div>
                    <div className="border border-gray-300 overflow-hidden shadow-sm">
                        <table className="w-full text-left border-collapse font-sans">
                            <thead>
                                <tr className="bg-govBlack text-white text-[11px] font-heading uppercase tracking-widest">
                                    <th className="px-6 py-4 border-r border-white/10">Official Name</th>
                                    <th className="px-6 py-4 border-r border-white/10">Designation</th>
                                    <th className="px-6 py-4 border-r border-white/10 text-center">DIN Number</th>
                                    <th className="px-6 py-4 border-r border-white/10 text-center">Contact No.</th>
                                    <th className="px-6 py-4 text-right">Official Email</th>
                                </tr>
                            </thead>
                            <tbody className="text-[12px]">
                                {officials.map((person, idx) => (
                                    <tr key={idx} className="border-b border-gray-200 hover:bg-govGray transition-colors group">
                                        <td className="px-6 py-5 border-r border-gray-100 flex items-center gap-4">
                                            <div className={`w-1 h-6 shrink-0 transition-all duration-300 ${person.accent}`}></div>
                                            <div>
                                                <h4 className="font-heading font-black text-govBlack uppercase tracking-tight text-[14px] group-hover:text-govRed transition-colors leading-none">{person.name}</h4>
                                                <p className="text-[9px] font-heading font-black text-gray-400 tracking-widest mt-1 uppercase leading-none">CIDC/OFF/2026/0{idx + 1}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 border-r border-gray-100"><p className="text-gray-600 font-bold uppercase tracking-wide leading-none">{person.designation}</p></td>
                                        <td className="px-6 py-5 border-r border-gray-100 text-center"><p className="text-govRed font-mono font-bold text-[11px] tracking-widest leading-none">{person.din}</p></td>
                                        <td className="px-6 py-5 border-r border-gray-100 text-center"><p className="text-govBlack font-bold text-[11px] font-mono leading-none">{person.contact}</p></td>
                                        <td className="px-6 py-5 text-right"><p className="text-gray-400 font-heading font-black text-[10px] uppercase tracking-tighter group-hover:text-govRed transition-colors">{person.email}</p></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-6 flex justify-between items-center bg-govGray p-4 border border-gray-200">
                       <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-sans">Showing: Statutory Management Registry 2026</p>
                       <button className="text-[10px] font-heading font-black text-govRed uppercase hover:text-govBlack transition-colors">Download Registry (PDF) »</button>
                    </div>
                </div>
            </section>
        );
    }