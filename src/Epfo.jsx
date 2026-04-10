import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function EPFOVerificationGateway() {
  // Locked GOV UI compact width for secure login portals
  const containerStyle = { maxWidth: '850px' };

  return (
    <main className="min-h-screen bg-govGray flex items-center justify-center font-sans p-4 selection:bg-govRed selection:text-white">
      <div 
        style={containerStyle} 
        className="w-full flex flex-col md:flex-row bg-white border border-gray-300 shadow-sm overflow-hidden"
      >
        
        {/* LEFT PANEL: INSTITUTIONAL AUTH IDENTITY */}
        <div className="md:w-[35%] bg-govBlack p-8 text-white flex flex-col justify-center border-b md:border-b-0 md:border-r border-govBlack">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-1 bg-govRed"></div>
            <span className="text-govRed font-heading font-black text-[10px] uppercase tracking-widest">Secure Access</span>
          </div>
          
          <h1 className="text-3xl font-heading font-black uppercase tracking-tight leading-tight mb-4">
            Personnel <br /> <span className="text-govRed">Digital</span> <br /> Terminal
          </h1>
          
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider leading-relaxed">
            Chhattisgarh Infrastructure Development Corporation <br />
            Official Employee Authentication Gateway
          </p>
        </div>

        {/* RIGHT PANEL: EMAIL/PASSWORD FORM */}
        <div className="md:w-[65%] p-10 lg:p-14 bg-white flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-2xl font-heading font-black text-govBlack uppercase tracking-tight mb-2">
              Department <span className="text-govRed">Login</span>
            </h2>
            <p className="text-gray-500 text-[11px] font-sans font-bold uppercase tracking-widest">
              Enter registered credentials to manage records.
            </p>
          </div>

          <form className="space-y-6">
            {/* Field: Email Identifier */}
            <div className="space-y-2">
              <label className="text-[10px] font-heading font-black uppercase tracking-widest text-gray-400 block">
                Official Email Address
              </label>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="USERNAME@CIDC.CG.GOV.IN" 
                  className="w-full bg-govGray border border-gray-200 px-4 py-3 pl-10 text-sm font-heading font-black uppercase tracking-widest outline-none focus:border-govBlack transition-all placeholder:text-gray-300"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-govRed">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Field: Secure Password */}
            <div className="space-y-2">
              <label className="text-[10px] font-heading font-black uppercase tracking-widest text-gray-400 block">
                Access Password
              </label>
              <div className="relative group">
                <input 
                  type="password" 
                  placeholder="••••••••••••" 
                  className="w-full bg-govGray border border-gray-200 px-4 py-3 pl-10 text-sm font-heading font-black uppercase tracking-widest outline-none focus:border-govBlack transition-all placeholder:text-gray-300"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-govRed">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Action Trigger */}
            <div className="pt-2">
              <Link 
                to="/epfo-payment" 
                className="w-full bg-govBlack text-white py-4 font-heading font-black text-[11px] uppercase tracking-widest hover:bg-govRed transition-all flex items-center justify-center gap-3 text-center shadow-md no-underline active:scale-95"
              >
                Authenticate & Proceed »
              </Link>
            </div>
            
            <div className="text-center">
              <button type="button" className="text-[9px] font-heading font-black text-gray-400 uppercase tracking-widest hover:text-govRed transition-colors">
                Forgot Credentials? Contact Admin
              </button>
            </div>
          </form>

          {/* Institutional Verification Footer */}
          <div className="mt-10 flex items-center justify-between border-t border-gray-100 pt-6">
            <div className="flex items-center gap-2 text-gray-400">
               <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                 <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
               </svg>
               <span className="text-[8px] font-heading font-black uppercase tracking-widest">TLS 1.3 Encrypted Link</span>
            </div>
            <span className="text-[8px] font-heading font-black uppercase tracking-[0.2em] text-gray-300">NIC-SECURE-V2</span>
          </div>
        </div>
      </div>
    </main>
  );
}