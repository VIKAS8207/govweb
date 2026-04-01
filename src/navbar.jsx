import React, { useState, useEffect, useCallback } from 'react';

const IndianFlag = ({ width = "w-6", height = "h-4" }) => (
  <svg 
    viewBox="0 0 512 341"  
    className={`${width} ${height} rounded-sm shadow-sm`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="512" height="113.7" fill="#ff9933"/>
    <rect y="113.7" width="512" height="113.7" fill="#ffffff"/>
    <rect y="227.4" width="512" height="113.7" fill="#128807"/>
    <g transform="translate(256 170.5)">
      <circle r="50" fill="none" stroke="#000080" strokeWidth="4"/>
      <circle r="8" fill="#000080"/>
      {[...Array(24)].map((_, i) => (
        <line 
          key={i} 
          y2="50" 
          transform={`rotate(${i * 15})`} 
          stroke="#000080" 
          strokeWidth="2"
        />
      ))}
    </g>
  </svg>
);

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    if (typeof window !== 'undefined') {
      setIsScrolled(window.scrollY > 50);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  const maxWidthStyle = { maxWidth: '1500px' };

  return (
    <header className="fixed top-0 z-50 w-full transition-all duration-300">
      <div 
        className={`bg-black text-white transition-all duration-300 overflow-hidden 
                   ${isScrolled ? 'h-0 opacity-0' : 'h-12 opacity-100 border-b border-white/10'}`} 
      >
        <div 
          style={maxWidthStyle} 
          className="mx-auto px-6 h-full flex items-center justify-between text-xs tracking-wide"
        >
          <div className="flex items-center gap-3">
            <IndianFlag width="w-7" height="h-auto" />
            <span className="font-medium uppercase">Government of India</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 border-r border-white/20 pr-6">
              <button className="hover:text-[#B22234] transition-colors">-A</button>
              <button className="font-medium bg-white/10 w-6 h-6 flex items-center justify-center rounded hover:bg-white/20">A</button>
              <button className="hover:text-[#B22234] transition-colors">A+</button>
            </div>
            <div className="flex items-center gap-3">
              <button className="font-semibold text-[#B22234] uppercase">English</button>
              <span className="text-white/30">|</span>
              <button className="text-gray-300 hover:text-[#B22234] transition-colors">हिन्दी</button>
            </div>
          </div>
        </div>
      </div>
      <div 
        className={`w-full transition-all duration-300 bg-white border-b border-gray-100 
                   ${isScrolled ? 'shadow-md h-20' : 'h-28'}`} 
      >
        <div 
          style={maxWidthStyle} 
          className="mx-auto px-6 h-full flex items-center justify-between gap-10"
        >
          <div className="shrink-0 flex items-center gap-5">
            <a href="/" className="shrink-0">
              <img 
                src="/image/CIDClogo.png" 
                alt="CIDC Logo" 
                className={`object-contain transition-all duration-500 ${isScrolled ? 'h-10' : 'h-14'}`} 
              />
            </a>
            
            <div className={`w-px bg-gray-200 transition-all duration-500 ${isScrolled ? 'h-10' : 'h-16'}`}></div>
            
            <div className="flex flex-col text-gray-900 leading-tight">
              <span className="text-lg font-extrabold uppercase text-gray-500">Government of Chhattisgarh</span>
              <span className="text-[13px] font-semibold text-gray-700">Chhattisgarh Infrastructure Development Corporation Ltd.</span>
            </div>
          </div>
          
          <nav className="hidden xl:flex items-center space-x-9 text-[15px] font-semibold text-gray-800">
            <a className="text-[#B22234]" href="#">Home</a>
            <a className="hover:text-[#B22234] transition-colors" href="#">About Us</a>
            <a className="hover:text-[#B22234] transition-colors" href="#">Projects</a>
            <a className="hover:text-[#B22234] transition-colors" href="#">Schemes</a>
            <a className="hover:text-[#B22234] transition-colors" href="#">Resources</a>
            <a className="hover:text-[#B22234] transition-colors" href="#">RTI</a>
            <a className="hover:text-[#B22234] transition-colors" href="#">Support</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Navbar;



