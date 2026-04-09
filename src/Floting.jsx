import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FloatingNotice = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="fixed bottom-8 right-8 z-[100] pointer-events-none">
            <Link 
                to="/notices" 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="pointer-events-auto w-16 h-16 bg-govRed text-white rounded-full flex items-center justify-center shadow-xl hover:bg-govBlack transition-colors duration-300 cursor-default border-none outline-none decoration-0"
                title="View All Public Notices"
            >
                {isHovered ? (
                    /* Notice Document SVG - Shown on Hover */
                    <svg 
                        className="w-7 h-7" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        strokeWidth="2"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                ) : (
                    /* Default Megaphone SVG */
                    <svg 
                        className="w-7 h-7" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        strokeWidth="2"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.297A1.705 1.705 0 019.289 21H8.711A1.705 1.705 0 017 19.297V5.882c0-.998.812-1.808 1.813-1.808h.375c1 0 1.812.81 1.812 1.808zm.91 1.157l4.31 1.343c1.378.43 2.296 1.7 2.296 3.12v.998c0 1.42-.918 2.69-2.296 3.12l-4.31 1.343m0-9.924v9.924" />
                    </svg>
                )}
            </Link>
        </div>
    );
};

export default FloatingNotice;