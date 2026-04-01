import React, { useState, useEffect } from 'react';


function Hero() {
  return (
    <section className="pt-3 py-10 px-4">
      <div 
        style={{ maxWidth: '1500px' }} 
        className="mx-auto relative h-[500px] border-[3px] border-white shadow-2xl overflow-hidden "
      >
        <img 
          className="absolute inset-0 w-full h-full object-cover transform scale-105" 
          src="/image/heroimg.jpg" 
          alt="Infrastructure Banner" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent flex items-center p-8 md:p-16">
          <div className="text-white max-w-xl">
            <span className="bg-[#B22234] text-[11px] font-black px-3 py-1.5 uppercase mb-6 inline-block tracking-[0.2em] shadow-md">
              Vision 2026
            </span>
            
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 uppercase leading-[1.1] tracking-tight">
              Building Sustainable <br />
              <span className="text-[#B22234] text-shadow">Infrastructure</span> for Raipur.
            </h2>
            
            <p className="text-sm md:text-base opacity-95 mb-10 border-l-4 border-[#B22234] pl-6 leading-relaxed max-w-md">
              Standardizing construction practices and ensuring labor welfare through 
              digital compliance and professional skill training.
            </p>
            
            <div className="flex gap-4">
              <button className="bg-white text-black font-bold text-xs px-10 py-4 uppercase tracking-widest hover:bg-[#B22234] hover:text-white transition-all duration-300 shadow-lg active:scale-95 cursor-pointer">
                Browse Projects
              </button>
              
              <button className="border-2 border-white/30 backdrop-blur-sm text-white font-bold text-xs px-10 py-4 uppercase tracking-widest hover:bg-white hover:text-blue-950 transition-all duration-300 cursor-pointer">
                View Schemes
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

        export function LatestUpdates() {
            return (
                <div className="border-gray-200 mt-3 py-3 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 flex items-center">
                        <span className="bg-[#B22234] text-white text-[10px] font-bold px-3 py-1 whitespace-nowrap mr-4">LATEST UPDATES:</span>
                        <marquee className="text-xs font-medium text-gray-600">
                            New Tender for Road Infrastructure Project 2026-B4 Released • Last date for EPFO compliance submission extended to April 15 • CIDC Skill Development workshop starting next Monday.
                        </marquee>
                    </div>
                </div>
            );
        }

    export function QuickLinks() {
    const links = [
        { title: "EPFO Services", bgColor: "bg-red-900", hoverColor: "hover:bg-red-800" },
        { title: "Online Tender", bgColor: "bg-stone-900", hoverColor: "hover:bg-stone-800" },
        { title: "Vendor Reg.", bgColor: "bg-red-800", hoverColor: "hover:bg-red-700" },
        { title: "Employee Portal", bgColor: "bg-zinc-800", hoverColor: "hover:bg-zinc-700" },
        { title: "Project Status", bgColor: "bg-stone-800", hoverColor: "hover:bg-stone-700" },
        { title: "RTI Filings", bgColor: "bg-red-950", hoverColor: "hover:bg-red-900" }
    ];

    const containerStyle = { maxWidth: '1500px' };

    return (
        <section className="py-8">
            <div style={containerStyle} className="mx-auto px-6">
                
                <div className="flex items-center gap-4 mb-10">
                    <h3 className="text-[12px] font-black text-gray-900 uppercase tracking-[0.1em]">
                        Quick Links & Applications
                    </h3>
                    <div className="h-px bg-gray-200 flex-grow"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                    {links.map((link, i) => (
                        <div 
                            key={i} 
                            className={`
                                ${link.bgColor} ${link.hoverColor}
                                relative h-32 p-6 flex flex-col justify-end 
                                cursor-pointer transition-all duration-300 
                                border-r border-b border-white/10 group
                                rounded-none
                            `}
                        >
                            <div className="absolute top-6 left-6 w-8 h-1 bg-white/20 group-hover:bg-white/60 transition-all"></div>
                            
                            <p className="text-[14px] font-black text-white uppercase tracking-widest">
                                {link.title}
                            </p>

                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs">
                                ↗
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="h-1 w-full bg-red-900 mt-0"></div>
            </div>
        </section>
    );
}

export function AboutSection() {
    const containerStyle = { maxWidth: '1500px' };

    return (
        <section className="py-24 px-6">
            <div style={containerStyle} className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                
                <div className="lg:col-span-8">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-1 bg-red-900"></div>
                        <h3 className="text-zinc-900 text-3xl font-black uppercase tracking-tighter">
                            About CIDC Raipur
                        </h3>
                    </div>
                    
                    <p className="text-gray-600 text-base leading-relaxed mb-12 max-w-3xl">
                        The Construction Industry Development Council (CIDC) Raipur is the apex body 
                        established to promote efficiency and transparency in the construction sector 
                        of Chhattisgarh. We bridge the gap between policy and execution through 
                        standardized practices.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       
                        <div className="bg-zinc-50 p-8 border-l-4 border-red-900 shadow-sm">
                            <p className="text-[11px] font-black text-red-900 uppercase tracking-widest mb-2">
                                Our Mission
                            </p>
                            <p className="text-sm text-zinc-700 font-medium">
                                Skill development, infrastructure standardization, and labor welfare across the state.
                            </p>
                        </div>

                        <div className="bg-zinc-50 p-8 border-l-4 border-zinc-900 shadow-sm">
                            <p className="text-[11px] font-black text-zinc-900 uppercase tracking-widest mb-2">
                                Compliance
                            </p>
                            <p className="text-sm text-zinc-700 font-medium">
                                Streamlining EPFO services, vendor audits, and digital transparency in procurement.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-4 bg-zinc-900 p-10 text-white shadow-2xl relative overflow-hidden">
                  
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 -mr-12 -mt-12 rotate-45"></div>
                    
                    <h4 className="text-sm font-black mb-8 uppercase tracking-[0.2em] text-red-500">
                        Latest Notices
                    </h4>
                    
                    <ul className="space-y-6">
                        <li className="group cursor-pointer">
                            <p className="text-[10px] text-zinc-500 uppercase font-bold mb-1">March 24, 2026</p>
                            <p className="text-xs font-bold group-hover:text-red-500 transition-colors border-b border-white/10 pb-4">
                                Notification for Internal Audit 2026 - Phase I
                            </p>
                        </li>
                        <li className="group cursor-pointer">
                            <p className="text-[10px] text-zinc-500 uppercase font-bold mb-1">March 18, 2026</p>
                            <p className="text-xs font-bold group-hover:text-red-500 transition-colors border-b border-white/10 pb-4">
                                Updated List of Empanelled Training Partners
                            </p>
                        </li>
                        <li className="group cursor-pointer">
                            <p className="text-[10px] text-zinc-500 uppercase font-bold mb-1">March 10, 2026</p>
                            <p className="text-xs font-bold group-hover:text-red-500 transition-colors">
                                New Guidelines for Vendor Pre-qualification
                            </p>
                        </li>
                    </ul>

                    <button className="mt-10 w-full border border-white/20 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                        View All Notices
                    </button>
                </div>

            </div>
        </section>
    );
}



export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/image/pic1.jpg", 
      title: "Sustainable Urban Development",
      desc: "Implementing smart infrastructure across Raipur district."
    },
    {
      image: "/image/pic2.avif", 
      title: "Skill Training Programs",
      desc: "Empowering 50,000+ workers with certified construction skills."
    },
    {
      image: "/image/pic3.jpg",
      title: "Digital Transparency",
      desc: "Real-time monitoring of state-wide infrastructure projects."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const containerStyle = { maxWidth: '1500px' };

  return (
    <section className="py-8 px-6">
      <div style={containerStyle} className="mx-auto relative group">
        
        <div className="relative h-[500px] w-full overflow-hidden shadow-2xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-12">
                <div className="max-w-2xl">
                   <span className="bg-red-900 text-[10px] font-black px-3 py-1 uppercase tracking-widest mb-4 inline-block text-white">
                     Featured Project
                   </span>
                   <h2 className="text-white text-4xl font-black uppercase mb-2 tracking-tighter">
                     {slide.title}
                   </h2>
                   <p className="text-gray-300 text-sm max-w-md border-l-2 border-white/30 pl-4">
                     {slide.desc}
                   </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black text-white p-4 transition-all rounded-none border-r border-white/10"
          aria-label="Previous Slide"
        >
          <span className="text-2xl">←</span>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black text-white p-4 transition-all rounded-none border-l border-white/10"
          aria-label="Next Slide"
        >
          <span className="text-2xl">→</span>
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 transition-all duration-300 rounded-none ${
                index === currentSlide ? "w-12 bg-red-600" : "w-6 bg-white/40 hover:bg-white"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export function ProjectsAndSchemes() {
  const containerStyle = { maxWidth: '1500px' };

  const activeProjects = [
    { name: "Raipur Smart City Phase II", date: "24 Mar 2026" },
    { name: "Dhamtari Highway Expansion", date: "18 Mar 2026" },
    { name: "CIDC Skill Center Building", date: "12 Mar 2026" },
    { name: "Integrated Data Center hub", date: "05 Mar 2026" },
    { name: "District Hospital Renovation", date: "28 Feb 2026" },
  ];

  const governmentSchemes = [
    { name: "Pradhan Mantri Awas Yojana", date: "2026" },
    { name: "Mukhyamantri Nirman Shramik", date: "2026" },
    { name: "State Infrastructure Subsidy", date: "2025" },
    { name: "Green Energy Corridor Grant", date: "2025" },
  ];

  return (
    <section className="py-16 px-6 border-t border-gray-100">
      <div style={containerStyle} className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* LEFT COLUMN: ACTIVE PROJECTS */}
        <div className="flex flex-col">
          <div className="mb-8">
            <h3 className="text-2xl font-black uppercase tracking-tighter text-zinc-900">
              Active Projects
            </h3>
            <p className="text-[10px] font-bold text-red-700 uppercase tracking-[0.2em] mt-2">
              Current Infrastructure Developments
            </p>
          </div>

          <div className="flex flex-col border-t border-zinc-900">
            {activeProjects.map((project, i) => (
              <div 
                key={i} 
                className="flex justify-between items-center py-5 border-b border-gray-100 hover:bg-zinc-50 px-2 transition-colors cursor-pointer group"
              >
                <span className="text-sm font-bold text-zinc-800 group-hover:text-red-800 uppercase">
                  {project.name}
                </span>
                <span className="text-[11px] font-mono text-gray-400">
                  {project.date}
                </span>
              </div>
            ))}
          </div>
          
          <button className="mt-8 self-start text-[10px] font-black uppercase tracking-widest border-b-2 border-red-900 pb-1 hover:text-red-700 transition-colors">
            View All Projects →
          </button>
        </div>

        {/* RIGHT COLUMN: GOVERNMENT SCHEMES */}
        <div className="flex flex-col">
          <div className="mb-8">
            <h3 className="text-2xl font-black uppercase tracking-tighter text-zinc-900">
              Government Schemes
            </h3>
            <div className="h-1 w-12 bg-zinc-900 mt-2"></div>
          </div>

          {/* TWO VERTICAL PARTS */}
          <div className="grid grid-cols-1 md:grid-cols-2  flex-grow">
            
            {/* BOX 1: IMAGE + TEXT (HORIZONTAL SPLIT) */}
            <div className="flex flex-col border border-gray-200">
              {/* Upper Box: Image */}
              <div className="h-48 overflow-hidden bg-zinc-200">
                <img 
                  src="/image/parivahan.avif" 
                  alt="Parivahan Scheme" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              {/* Bottom Box: Text + Link */}
              <div className="p-8 bg-zinc-900 text-white flex flex-col justify-between flex-grow">
                <div>
                  <h4 className="text-lg font-black uppercase leading-tight mb-4">
                    Parivahan <br /> Scheme 2026
                  </h4>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-widest mb-6">
                    Transport Compliance
                  </p>
                </div>
                <button className="text-[10px] font-black uppercase tracking-widest text-red-500 hover:text-white transition-colors text-left cursor-pointer">
                  See More Options
                </button>
              </div>
            </div>

            {/* BOX 2: LIST OF SCHEMES */}
            <div className="bg-zinc-50 p-8 border border-gray-200">
              <h5 className="text-[11px] font-black text-zinc-400 uppercase tracking-widest mb-6">
                Scheme Registry
              </h5>
              <div className="space-y-6">
                {governmentSchemes.map((scheme, i) => (
                  <div key={i} className="flex flex-col cursor-pointer group">
                    <span className="text-[12px] font-bold text-zinc-900 group-hover:text-red-800 transition-colors uppercase">
                      {scheme.name}
                    </span>
                    <span className="text-[9px] text-gray-400 font-mono mt-1">
                      Ref: {scheme.date}
                    </span>
                    {i !== governmentSchemes.length - 1 && (
                      <div className="h-px bg-gray-200 w-8 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

const RollingNumber = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);
  // Parse numeric value (e.g., "12k" -> 12000 or just handle "142")
  const numericTarget = parseInt(value.replace(/[^\d]/g, ''), 10);
  const suffix = value.replace(/[\d]/g, ''); // Extract "k" if present

  useEffect(() => {
    let start = 0;
    const duration = 1500; // 1.5 seconds animation
    const increment = Math.ceil(numericTarget / (duration / 16));

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) {
        setDisplayValue(numericTarget);
        clearInterval(timer);
      } else {
        setDisplayValue(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [numericTarget]);

  return (
    <span>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
};

export function DashboardStats() {
  const stats = [
    { val: "142", label: "Projects" },
    { val: "890", label: "Schemes" },
    { val: "12k", label: "Employees" },
    { val: "08", label: "Ongoing Tenders" }
  ];

  const containerStyle = { maxWidth: '1500px' };

  return (
    <section className="py-16 px-6 border-y border-zinc-200">
      <div 
        style={containerStyle} 
        className="mx-auto grid grid-cols-2 md:grid-cols-4 gap-0 text-left"
      >
        {stats.map((s, i) => (
          <div 
            key={i} 
            className="p-8 border-r border-zinc-300 last:border-r-0 md:border-b-0 border-b last:border-b-0"
          >
            {/* Number: Large, Black, and Animated */}
            <h2 className="text-5xl font-black text-black mb-3 tracking-tighter">
              <RollingNumber value={s.val} />
            </h2>
            
            {/* Label: Red, Bold, Uppercase */}
            <p className="text-[11px] font-black text-red-700 uppercase tracking-[0.2em]">
              {s.label}
            </p>
            
            {/* Subtle decorative line */}
            <div className="w-6 h-1 bg-zinc-900 mt-6"></div>
          </div>
        ))}
      </div>
    </section>
  );
}