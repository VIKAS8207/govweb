import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Everything else (IndianFlag, Header, etc.) goes BELOW these lines.

const IndianFlag = () => (
    <svg viewBox="0 0 900 600" className="w-6 h-4 shadow-sm" xmlns="http://www.w3.org/2000/svg">
        <rect width="900" height="200" fill="#FF9933"/>
        <rect y="200" width="900" height="200" fill="#FFFFFF"/>
        <rect y="400" width="900" height="200" fill="#128807"/>
        <g transform="translate(450,300)">
            <circle r="92" fill="none" stroke="#000080" strokeWidth="4"/>
            <circle r="10" fill="#000080"/>
            {[...Array(24)].map((_, i) => (
                <line key={i} y1="-92" y2="92" transform={`rotate(${i * 7.5})`} stroke="#000080" strokeWidth="2" />
            ))}
        </g>
    </svg>
);

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    
    // 2. Initialize useLocation
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 3. Update menuItems with 'path' instead of 'href'
    const menuItems = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Schemes", path: "/schemes" },
        { name: "RTI", path: "/rti" },
        { name: "EPFO", path: "/epfo" },
        { name: "Tender", path: "/tender" },
        { name: "Vendor & Shop", path: "/vendor" },
        { name: "Accounts", path: "/accounts" },
        { name: "To-Do", path: "/todo" },
    ];

    return (
        <header className="fixed top-0 w-full z-50 font-heading">
            {/* Top Accessibility Bar */}
            <div className={`bg-govBlack text-white transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-10 flex items-center text-[11px] font-bold border-b border-white/10'}`}>
                <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center uppercase tracking-tighter">
                    <div className="flex items-center gap-4">
                        <IndianFlag />
                        <span className="hidden sm:inline">Government of Chhattisgarh</span>
                    </div>
                    <div className="flex gap-4 items-center">
                       <Link to="/contact" className="hover:text-govRed">Contact Us</Link>
                        <div className="h-3 w-px bg-white/20"></div>
                        <div className="flex gap-3">
                            <span className="text-govRed cursor-pointer">English</span>
                            <span className="text-gray-400">|</span>
                            <span className="hover:text-govRed cursor-pointer font-normal">हिन्दी</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className={`bg-white border-b-2 border-govGray shadow-sm flex items-center transition-all duration-300 ${isScrolled ? 'h-16' : 'h-24 md:h-28'}`}>
                <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className={`flex items-center justify-center transition-all duration-300 ${isScrolled ? 'w-12 h-12' : 'w-20 h-20 md:w-24 md:h-24'}`}>
                            <img src="/image/CIDClogo.png" alt="CIDC Logo" className="max-h-full w-auto object-contain" />
                        </div>
                        
                        <div className="hidden sm:flex flex-col border-l-4 border-govGray pl-4">
                            <h1 className={`font-black leading-none text-govBlack transition-all uppercase ${isScrolled ? 'text-lg' : 'text-xl'}`}>CIDC RAIPUR</h1>
                            <span className="text-[8px] font-bold text-gray-500 mt-1 uppercase tracking-widest font-sans">Digital Advancement Portal</span>
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex gap-6 text-[14px] font-bold uppercase tracking-tight">
                        {menuItems.map((item) => {
                            // 4. CHECK IF THE ITEM PATH MATCHES THE CURRENT URL
                            const isActive = location.pathname === item.path;

                            return (
                                <Link 
                                    key={item.name} 
                                    to={item.path} 
                                    className={`${isActive ? "text-govRed border-b-2 border-govRed" : "text-govBlack hover:text-govRed"} pb-1 transition-all`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Mobile Hamburger */}
                    <button onClick={() => setIsSideNavOpen(true)} className="lg:hidden p-2 hover:bg-govGray transition-colors">
                        <svg className="w-8 h-8 text-govBlack" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Side Nav */}
            {isSideNavOpen && (
                <div className="fixed inset-0 bg-govBlack/60 backdrop-blur-sm z-[60] lg:hidden" onClick={() => setIsSideNavOpen(false)}></div>
            )}
            <div className={`fixed top-0 right-0 h-full w-72 bg-white z-[70] shadow-2xl transition-transform duration-300 transform lg:hidden ${isSideNavOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-6 bg-govBlack text-white flex justify-between items-center">
                    <button onClick={() => setIsSideNavOpen(false)} className="hover:text-govRed transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <span className="font-black text-sm tracking-widest uppercase">MENU</span>
                </div>
                <nav className="p-6 flex flex-col gap-6 font-bold uppercase text-sm text-right overflow-y-auto h-full pb-20">
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link 
                                key={item.name} 
                                to={item.path} 
                                className={`${isActive ? "text-govRed" : "text-govBlack"} hover:text-govRed border-b border-govGray pb-4`} 
                                onClick={() => setIsSideNavOpen(false)}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
};

export default Header;