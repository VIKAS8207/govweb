import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
    const [user, setUser] = useState(null);
    
    const location = useLocation();

    // Scroll Listener
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Auth Listener: Checks local storage every time the route changes
    useEffect(() => {
        const loggedInUser = localStorage.getItem('cidc_user');
        if (loggedInUser) {
            setUser(JSON.parse(loggedInUser));
        } else {
            setUser(null);
        }
    }, [location.pathname]);

    const handleLogout = () => {
        localStorage.removeItem('cidc_user');
        setUser(null);
    };

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
                    
                    {/* Logo Section */}
                    <div className="flex items-center gap-4">
                        <div className={`flex items-center justify-center transition-all duration-300 ${isScrolled ? 'w-12 h-12' : 'w-20 h-20 md:w-24 md:h-24'}`}>
                            <img src="/image/CIDClogo.png" alt="CIDC Logo" className="max-h-full w-auto object-contain" />
                        </div>
                        <div className="hidden sm:flex flex-col border-l-4 border-govGray pl-4">
                            <h1 className={`font-black leading-none text-govBlack transition-all uppercase ${isScrolled ? 'text-lg' : 'text-xl'}`}>CIDC RAIPUR</h1>
                            <span className="text-[8px] font-bold text-gray-500 mt-1 uppercase tracking-widest font-sans">Digital Advancement Portal</span>
                        </div>
                    </div>

                    {/* Desktop Navigation & Auth */}
                    <div className="flex items-center">
                        <nav className="hidden lg:flex gap-6 text-[14px] font-bold uppercase tracking-tight">
                            {menuItems.map((item) => {
                                // DYNAMIC ROUTING LOGIC HERE
                                const targetPath = (item.name === "EPFO" && user) ? "/epfo-payment" : item.path;
                                const isActive = location.pathname === targetPath || location.pathname === item.path;

                                return (
                                    <Link 
                                        key={item.name} 
                                        to={targetPath} 
                                        className={`${isActive ? "text-govRed border-b-2 border-govRed" : "text-govBlack hover:text-govRed"} pb-1 transition-all`}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* DESKTOP: Login / Logout Widget */}
                        <div className="hidden lg:flex items-center ml-8 pl-8 border-l-2 border-gray-200">
                            {user ? (
                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-govRed text-white flex items-center justify-center font-heading font-black text-[16px] uppercase shadow-sm border-2 border-white ring-2 ring-govRed/20">
                                        {user.initial}
                                    </div>
                                    <button onClick={handleLogout} className="text-[11px] font-heading font-black text-gray-400 uppercase tracking-[0.2em] hover:text-govRed transition-colors">
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <Link to="/epfo" className="bg-govBlack text-white px-8 py-3 text-[11px] font-heading font-black uppercase tracking-[0.2em] hover:bg-govRed transition-all active:scale-95 shadow-sm">
                                    Login
                                </Link>
                            )}
                        </div>

                        {/* Mobile Hamburger */}
                        <button onClick={() => setIsSideNavOpen(true)} className="lg:hidden ml-4 p-2 hover:bg-govGray transition-colors">
                            <svg className="w-8 h-8 text-govBlack" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Side Nav Overlay */}
            {isSideNavOpen && (
                <div className="fixed inset-0 bg-govBlack/60 backdrop-blur-sm z-[60] lg:hidden" onClick={() => setIsSideNavOpen(false)}></div>
            )}
            
            {/* Mobile Side Nav Drawer */}
            <div className={`fixed top-0 right-0 h-full w-72 bg-white z-[70] shadow-2xl transition-transform duration-300 transform flex flex-col lg:hidden ${isSideNavOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                
                <div className="p-6 bg-govBlack text-white flex justify-between items-center shrink-0">
                    <button onClick={() => setIsSideNavOpen(false)} className="hover:text-govRed transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <span className="font-black text-sm tracking-widest uppercase">MENU</span>
                </div>
                
                <nav className="p-6 flex flex-col gap-6 font-bold uppercase text-sm text-right flex-grow overflow-y-auto">
                    {menuItems.map((item) => {
                        // DYNAMIC ROUTING LOGIC HERE (MOBILE)
                        const targetPath = (item.name === "EPFO" && user) ? "/epfo-payment" : item.path;
                        const isActive = location.pathname === targetPath || location.pathname === item.path;
                        
                        return (
                            <Link 
                                key={item.name} 
                                to={targetPath} 
                                className={`${isActive ? "text-govRed" : "text-govBlack"} hover:text-govRed border-b border-govGray pb-4`} 
                                onClick={() => setIsSideNavOpen(false)}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* MOBILE: Login / Logout Widget (Anchored to bottom) */}
                <div className="p-6 border-t border-gray-200 bg-gray-50 shrink-0">
                    {user ? (
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-end gap-3">
                                <span className="font-heading font-black text-xs text-gray-500 uppercase tracking-widest">{user.name}</span>
                                <div className="w-10 h-10 rounded-full bg-govRed text-white flex items-center justify-center font-heading font-black text-[16px] uppercase shadow-sm">
                                    {user.initial}
                                </div>
                            </div>
                            <button onClick={() => { handleLogout(); setIsSideNavOpen(false); }} className="w-full bg-govBlack text-white py-4 font-heading font-black text-[11px] uppercase tracking-widest hover:bg-govRed transition-colors shadow-sm">
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link to="/epfo" onClick={() => setIsSideNavOpen(false)} className="block w-full text-center bg-govBlack text-white py-4 font-heading font-black text-[11px] uppercase tracking-widest hover:bg-govRed transition-colors shadow-md">
                            Admin Login
                        </Link>
                    )}
                </div>

            </div>
        </header>
    );
};

export default Header;