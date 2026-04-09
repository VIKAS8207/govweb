import React, { useState, useEffect, useRef } from 'react';


    export function Carousel() {
        const [currentSlide, setCurrentSlide] = useState(0);
        const slides = [{ image: "/image/pic1.jpg" }, { image: "/image/pic2.avif" }, { image: "/image/pic3.jpg" }];

        const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

        return (
            <section className="w-full bg-govBlack overflow-hidden relative">
                <div className="relative h-[400px] md:h-[600px] lg:h-[750px] w-full">
                    {slides.map((slide, index) => (
                        <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
                            <img src={slide.image} alt={`Infrastructure Slide ${index + 1}`} className="w-full h-full object-cover" />
                            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-govBlack/60 to-transparent"></div>
                        </div>
                    ))}
                </div>
                <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-govBlack/80 text-white w-14 h-20 flex items-center justify-center hover:bg-govRed transition-all duration-300 border-r border-white/10">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-govBlack/80 text-white w-14 h-20 flex items-center justify-center hover:bg-govRed transition-all duration-300 border-l border-white/10">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
                </button>
                <div className="absolute bottom-0 left-0 w-full z-20 flex bg-govBlack/20">
                    {slides.map((_, index) => (
                        <button key={index} onClick={() => setCurrentSlide(index)} className={`flex-1 h-2 transition-all duration-700 ${index === currentSlide ? "bg-govRed" : "bg-white/10 hover:bg-white/30"}`} />
                    ))}
                </div>
            </section>
        );
    }

   

    export const Heros = () => (
        <section className="relative min-h-[500px] md:h-[650px] bg-govBlack overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-govBlack/90 to-transparent z-10"></div>
            <img src="/image/hero-bg.jpg" alt="Infrastructure" className="absolute inset-0 w-full h-full object-cover opacity-30 z-0" />
            <div className="max-w-5xl mx-auto px-6 w-full relative z-20 flex flex-col items-start pt-20 md:pt-0">
                <div className="max-w-2xl">
                    <span className="bg-govRed text-white px-4 py-1.5 text-[10px] md:text-[11px] font-black tracking-[0.3em] mb-6 inline-block uppercase font-heading">CIDC Undertaking</span>
                    <h2 className="text-4xl md:text-6xl text-white font-black leading-[1.1] mb-8 uppercase font-heading tracking-tighter">Modern <span className="text-govRed">Infrastructure</span> <br className="hidden md:block" /> For Raipur.</h2>
                    <p className="text-gray-300 text-base md:text-lg border-l-4 border-govRed pl-6 mb-10 font-medium leading-relaxed max-w-xl font-sans">Standardizing practices, ensuring transparency, and building sustainable public works across the state of Chhattisgarh.</p>
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        <button className="bg-govRed text-white font-heading font-bold px-12 py-4 uppercase text-[11px] tracking-widest hover:bg-govBlack transition-all duration-300 w-full sm:w-auto">Our Services</button>
                        <button className="border-2 border-white/20 text-white font-heading font-bold text-[11px] px-10 py-4 uppercase tracking-widest hover:bg-white hover:text-govBlack transition-all duration-300 w-full sm:w-auto">Latest Notices</button>
                    </div>
                </div>
            </div>
        </section>
    );

    export function LatestUpdates() {
        return (
            <div className="bg-white mt-8 py-3 overflow-hidden border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 flex items-center">
                    <span className="bg-govRed text-white text-[10px] font-bold px-3 py-1 whitespace-nowrap mr-4 uppercase font-heading">LATEST UPDATES:</span>
                    <marquee className="text-xs font-medium text-gray-600 font-sans">
                        New Tender for Road Infrastructure Project 2026-B4 Released • Last date for EPFO compliance submission extended to April 15 • CIDC Skill Development workshop starting next Monday.
                    </marquee>
                </div>
            </div>
        );
    }

export function QuickLinks() {
  const links = [
    { 
      title: "EPFO Services", 
      code: "SRV-01", 
      svgPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
    },
    { 
      title: "Tender Portal", 
      code: "TND-09", 
      svgPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
    },
    { 
      title: "Vendor & Shop", 
      code: "VND-04", 
      svgPath: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
    },
    { 
      title: "Project Status", 
      code: "PRJ-12", 
      svgPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
    },
    { 
      title: "RTI Filings", 
      code: "RTI-02", 
      // File/Folder Icon
      svgPath: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" 
    },
    { 
      title: "Support Desk", 
      code: "HLP-07", 
      // Phone/Handset Icon
      svgPath: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
    }
  ];

  return (
    <section className="py-12 bg-govGray border-t border-gray-300">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="flex flex-col mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-govBlack uppercase tracking-tight">
            Online Citizen Services & <span className="text-govRed">Statutory Links</span>
          </h2>
          <p className="text-[11px] font-bold text-gray-500 mt-2 uppercase tracking-widest font-sans">
            Chhattisgarh Infrastructure Development Corporation Limited
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 border-t border-l border-gray-400">
          {links.map((link, i) => (
            <div key={i} className="bg-white p-8 flex flex-col items-center text-center border-r border-b border-gray-400 hover:bg-govGray group cursor-pointer transition-all">
              <span className="text-[9px] font-black text-gray-400 mb-4 group-hover:text-govRed tracking-tighter uppercase font-heading">
                {link.code}
              </span>
              
              {/* Box removed, icon size increased to w-12 h-12 */}
              <div className="w-12 h-12 flex items-center justify-center mb-6 group-hover:text-govRed transition-all">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={link.svgPath} />
                </svg>
              </div>

              <p className="text-[12px] leading-tight font-heading font-bold text-govBlack uppercase tracking-wide h-10 flex items-center">
                {link.title}
              </p>
              <div className="mt-6 pt-4 border-t border-gray-100 w-full opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-black text-govRed font-heading">ACCESS PORTAL »</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
    return (
        <section className="py-16 bg-white border-b-2 border-govGray">
            <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-8 flex flex-col justify-start">
                    <div className="mb-10">
                        <h3 className="text-govBlack text-3xl font-heading font-black uppercase tracking-tight">About <span className="text-govRed">CIDC Raipur</span></h3>
                        <p className="text-[11px] font-bold text-gray-500 mt-2 uppercase tracking-widest font-sans">An Undertaking of Government of Chhattisgarh</p>
                    </div>
                    <p className="text-govBlack text-base leading-relaxed mb-10 font-sans text-justify border-b border-gray-100 pb-10">The Construction Industry Development Council (CIDC) Raipur is the apex body established to promote efficiency and transparency in the construction sector of Chhattisgarh. We bridge the gap between policy and execution through standardized practices and digital integration. Our mandate includes technical auditing, worker certification, and infrastructure benchmarking.</p>
                    
                    {/* NEW MAJOR SCHEMES UI SECTION */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 mb-6">
                            <h4 className="text-[14px] font-heading font-black text-govBlack uppercase tracking-[0.3em]">Flagship <span className="text-govRed">Initiatives</span></h4>
                            <div className="flex-grow h-[2px] bg-govGray"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Card 1: Skill Certification */}
                            <div className="border-l-4 border-govRed bg-govGray p-6 group cursor-pointer hover:bg-govBlack transition-all duration-300">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-[10px] font-heading font-black text-govRed uppercase tracking-widest">Welfare Scheme</span>
                                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </div>
                                <h5 className="text-[13px] font-heading font-black text-govBlack group-hover:text-white uppercase mb-2">Shramik Skill Certification</h5>
                                <p className="text-[11px] text-gray-600 group-hover:text-gray-400 font-bold uppercase leading-tight">National level competency mapping and certification for construction personnel.</p>
                            </div>

                            {/* Card 2: Infrastructure Grants */}
                            <div className="border-l-4 border-govBlack bg-govGray p-6 group cursor-pointer hover:bg-govBlack transition-all duration-300">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-[10px] font-heading font-black text-govRed uppercase tracking-widest">Industry Support</span>
                                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </div>
                                <h5 className="text-[13px] font-heading font-black text-govBlack group-hover:text-white uppercase mb-2">Infrastructure Subsidy Portal</h5>
                                <p className="text-[11px] text-gray-600 group-hover:text-gray-400 font-bold uppercase leading-tight">Facilitating state-sponsored grants for standardized equipment and green building technology.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-4 border-2 border-govBlack bg-white self-start">
                    <div className="bg-govBlack p-5 flex items-center justify-between text-white font-heading font-black uppercase text-[12px] tracking-[0.2em]">
                        <h4>Latest Notifications</h4>
                        <div className="w-1.5 h-1.5 bg-govRed rounded-full animate-ping"></div>
                    </div>
                    <div className="p-6">
                        <ul className="divide-y divide-gray-200">
                            {[{ date: "07 APR 2026", text: "Notification for Internal Audit 2026 - Phase I" }, { date: "02 APR 2026", text: "Updated List of Empanelled Training Partners" }, { date: "28 MAR 2026", text: "New Guidelines for Vendor Pre-qualification" }, { date: "21 MAR 2026", text: "Labor Welfare Compliance Status Report" }].map((notice, i) => (
                                <li key={i} className="py-5 cursor-pointer group">
                                    <span className="text-[10px] text-govRed font-black block mb-2 font-heading">[ {notice.date} ]</span>
                                    <p className="text-[12px] font-heading font-black text-govBlack leading-tight uppercase group-hover:underline">{notice.text}</p>
                                </li>
                            ))}
                        </ul>
                        <button className="mt-8 w-full bg-govRed text-white py-4 text-[11px] font-heading font-black uppercase tracking-widest hover:bg-govBlack transition-all">View All Press Releases »</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

    export const RollingNumber = ({ value, trigger }) => {
        const [displayValue, setDisplayValue] = useState(0);
        const numericTarget = parseInt(value.replace(/[^\d]/g, ''), 10);
        const suffix = value.replace(/[\d]/g, '');
        useEffect(() => {
            if (!trigger) return;
            let start = 0;
            const timer = setInterval(() => {
                start += Math.ceil(numericTarget / 125);
                if (start >= numericTarget) { setDisplayValue(numericTarget); clearInterval(timer); }
                else setDisplayValue(start);
            }, 16);
            return () => clearInterval(timer);
        }, [numericTarget, trigger]);
        return <span>{displayValue.toLocaleString()}{suffix}</span>;
    };

    export function DashboardStats() {
        const [isVisible, setIsVisible] = useState(false);
        const sectionRef = useRef(null);
        useEffect(() => {
            const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); }}, { threshold: 0.3 });
            if (sectionRef.current) observer.observe(sectionRef.current);
            return () => observer.disconnect();
        }, []);
        const stats = [{ val: "142", label: "Projects Managed" }, { val: "890", label: "Active Schemes" }, { val: "₹850cr", label: "Total Capital Outlay" }, { val: "08", label: "Ongoing Tenders" }];
        return (
            <section ref={sectionRef} className="py-20 bg-white border-y-2 border-govGray">
                <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 border-l border-gray-200">
                    {stats.map((s, i) => (
                        <div key={i} className="p-12 flex flex-col items-center text-center border-r border-b md:border-b-0 border-gray-200 transition-colors">
                            <p className="text-[11px] font-heading font-bold text-gray-500 uppercase tracking-[0.3em] mb-4">{s.label}</p>
                            <h2 className="text-5xl md:text-6xl font-heading font-black text-govBlack mb-6 tracking-tighter"><RollingNumber value={s.val} trigger={isVisible} /></h2>
                            <div className="w-12 h-1.5 bg-govRed"></div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
export function ProjectsAndSchemes() {
    const activeProjects = [
        { name: "Raipur Smart City Phase II", date: "24 Mar 2026", id: "PRJ-992" },
        { name: "Dhamtari Highway Expansion", date: "18 Mar 2026", id: "PRJ-841" },
        { name: "CIDC Skill Center Building", date: "12 Mar 2026", id: "PRJ-702" },
        { name: "Integrated Data Center hub", date: "05 Mar 2026", id: "PRJ-611" },
        { name: "District Hospital Renovation", date: "28 Feb 2026", id: "PRJ-445" }
    ];

    const governmentSchemes = [
        { name: "Pradhan Mantri Awas Yojana", ref: "PMAY-2026", type: "Housing" },
        { name: "Mukhyamantri Nirman Shramik", ref: "MNS-2026", type: "Welfare" },
        { name: "State Infrastructure Subsidy", ref: "SIS-2025", type: "Grant" },
        { name: "Green Energy Corridor Grant", ref: "GEC-2025", type: "Energy" }
    ];

    return (
        <section className="py-16 bg-white border-t-2 border-govGray">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6">
                
                {/* LEFT COLUMN */}
                <div className="flex flex-col">
                    <div className="mb-8 font-heading uppercase">
                        <h3 className="text-2xl font-black text-govBlack">Active <span className="text-govRed">Projects</span></h3>
                        <p className="text-[10px] font-bold text-gray-500 tracking-widest mt-1">Infrastructure Status Registry</p>
                    </div>
                    
                    {/* Table wrapper no longer has flex-grow, so it fits the content */}
                    <div className="border border-gray-300 overflow-hidden">
                        <table className="w-full text-left font-sans text-[12px]">
                            <thead className="bg-govBlack text-white font-heading uppercase text-[11px] tracking-widest">
                                <tr className="divide-x divide-white/10">
                                    <th className="p-4">ID</th>
                                    <th className="p-4">Project Name</th>
                                    <th className="p-4">Updated</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {activeProjects.map((project, i) => (
                                    <tr key={i} className={`hover:bg-govGray transition-colors divide-x divide-gray-200 ${i % 2 === 0 ? 'bg-white' : 'bg-[#fcfcfc]'}`}>
                                        <td className="p-4 font-bold text-govRed">{project.id}</td>
                                        <td className="p-4 font-black uppercase text-govBlack">{project.name}</td>
                                        <td className="p-4 text-gray-500 font-bold uppercase">{project.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    {/* This spacer pushes the button down without expanding the table border */}
                    <div className="flex-grow"></div>
                    
                    <button className="bg-govRed text-white font-heading font-bold text-[10px] px-8 py-3 uppercase tracking-widest self-start mt-6">
                        View Full Registry »
                    </button>
                </div>

                {/* RIGHT COLUMN */}
                <div className="flex flex-col">
                    <div className="mb-8 font-heading uppercase">
                        <h3 className="text-2xl font-black text-govBlack">Government <span className="text-govRed">Schemes</span></h3>
                        <p className="text-[10px] font-bold text-gray-500 tracking-widest mt-1">Statutory Benefits & Grants</p>
                    </div>
                    
                    {/* Table wrapper fits content exactly */}
                    <div className="border border-gray-300 overflow-hidden">
                        <table className="w-full text-left font-sans text-[12px]">
                            <thead className="bg-govBlack text-white font-heading uppercase text-[11px] tracking-widest">
                                <tr className="divide-x divide-white/10">
                                    <th className="p-4">Reference</th>
                                    <th className="p-4">Scheme Name</th>
                                    <th className="p-4">Category</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {governmentSchemes.map((scheme, i) => (
                                    <tr key={i} className={`hover:bg-govGray transition-colors divide-x divide-gray-200 ${i % 2 === 0 ? 'bg-white' : 'bg-[#fcfcfc]'}`}>
                                        <td className="p-4 font-bold text-govRed">{scheme.ref}</td>
                                        <td className="p-4 font-black uppercase text-govBlack">{scheme.name}</td>
                                        <td className="p-4 text-gray-500 font-bold uppercase">{scheme.type}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* This spacer pushes the button down without expanding the table border */}
                    <div className="flex-grow"></div>
                    
                    <button className="bg-govBlack text-white font-heading font-bold text-[10px] px-8 py-3 uppercase tracking-widest self-start mt-6 hover:bg-govRed transition-all">
                        Download Scheme PDFs »
                    </button>
                </div>
                
            </div>
        </section>
    );
}
