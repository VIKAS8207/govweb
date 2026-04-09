import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function EPFOVerificationGateway() {
  // Reduced container width for a more compact "Login Box" feel
  const containerStyle = { maxWidth: '850px' };

  return (
    <main className="min-h-screen bg-govGray flex items-center justify-center font-sans p-4 selection:bg-govRed selection:text-white">
      <div 
        style={containerStyle} 
        className="w-full flex flex-col md:flex-row bg-white border border-gray-300 shadow-sm overflow-hidden"
      >
        
        {/* LEFT PANEL: SIMPLE IDENTITY */}
        <div className="md:w-[35%] bg-govBlack p-8 text-white flex flex-col justify-center border-b md:border-b-0 md:border-r border-govBlack">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-1 bg-govRed"></div>
            <span className="text-govRed font-heading font-black text-[10px] uppercase tracking-widest">Auth Portal</span>
          </div>
          
          <h1 className="text-3xl font-heading font-black uppercase tracking-tight leading-tight mb-4">
            EPFO <br /> <span className="text-govRed">Identity</span> <br /> Access
          </h1>
          
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider leading-relaxed">
            Construction Industry Development Corporation <br />
            Statutory Personnel Verification
          </p>
        </div>

        {/* RIGHT PANEL: COMPACT VERIFICATION FORM */}
        <div className="md:w-[65%] p-10 lg:p-14 bg-white flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-2xl font-heading font-black text-govBlack uppercase tracking-tight mb-2">
              Personnel <span className="text-govRed">Verification</span>
            </h2>
            <p className="text-gray-500 text-[11px] font-sans font-bold uppercase tracking-widest">
              Provide credentials to access secure records.
            </p>
          </div>

          <form className="space-y-6">
            {/* Field: UAN */}
            <div className="space-y-2">
              <label className="text-[10px] font-heading font-black uppercase tracking-widest text-gray-400 block">
                UAN (Universal Account Number)
              </label>
              <input 
                type="text" 
                placeholder="100XXXXXXXXX" 
                className="w-full bg-govGray border border-gray-200 px-4 py-3 text-sm font-heading font-black uppercase tracking-widest outline-none focus:border-govBlack transition-all placeholder:text-gray-300"
              />
            </div>

            {/* Field: Date of Birth with Calendar Selection */}
            <div className="space-y-2">
              <label className="text-[10px] font-heading font-black uppercase tracking-widest text-gray-400 block">
                Date of Birth (As per Aadhaar)
              </label>
              <div className="relative group">
                <input 
                  type="date" 
                  className="w-full bg-govGray border border-gray-200 px-4 py-3 text-sm font-heading font-black uppercase tracking-widest outline-none focus:border-govBlack transition-all appearance-none"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-focus-within:text-govRed">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
              </div>
            </div>

            {/* Simple Action Trigger */}
            <div className="pt-2">
              <Link 
                to="/epfo-payment" 
                className="w-full bg-govBlack text-white py-4 font-heading font-black text-[11px] uppercase tracking-widest hover:bg-govRed transition-all flex items-center justify-center gap-3 text-center shadow-md no-underline"
                >
                Verify & Proceed »
              </Link>
            </div>
          </form>

          {/* Minimal Security Note */}
          <div className="mt-10 flex items-center justify-between border-t border-gray-100 pt-6">
            <div className="flex items-center gap-2 text-gray-400">
               <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
               <span className="text-[8px] font-heading font-black uppercase tracking-widest">Secure Data Link</span>
            </div>
            <span className="text-[8px] font-heading font-black uppercase tracking-[0.2em] text-gray-300">NIC-SECURE-V2</span>
          </div>
        </div>
      </div>
    </main>
  );
}