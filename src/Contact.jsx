  import React, { useState, useEffect, useRef } from 'react';
  
  export function ContactSection() {
  
  const containerStyle = { maxWidth: '1280px' };

  return (
    <section className="py-20 px-6 bg-white border-t-2 border-govGray font-sans antialiased">
      <div style={containerStyle} className="mx-auto">
        
        {/* SECTION HEADER - GOV UI LOCK */}
        <div className="mb-16 border-l-[8px] border-govRed pl-8 py-2">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-govRed font-heading font-black text-[11px] uppercase tracking-[0.4em]">Official Communication</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-govBlack uppercase tracking-tighter leading-none mb-4">
            Institutional <span className="text-govRed">Contact</span>
          </h2>
          <p className="text-gray-500 text-sm font-bold uppercase tracking-widest leading-relaxed max-w-2xl">
            Connect with the CIDC Raipur institutional desk. We are committed to transparency 
            and efficient public service delivery across the State of Chhattisgarh.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: INFO REGISTRY & MAP */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* STATUTORY CONTACT TABLE (Replaced Cards for Uniformity) */}
            <div className="border-2 border-govBlack overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse bg-white">
                <tbody className="text-[12px]">
                  {/* Address Row */}
                  <tr className="border-b-2 border-govGray">
                    <td className="p-8 bg-govGray border-r-2 border-govBlack w-1/3">
                      <span className="text-[10px] font-heading font-black text-govBlack uppercase tracking-widest">Office Address</span>
                    </td>
                    <td className="p-8">
                      <p className="font-heading font-black text-govBlack uppercase tracking-tight text-[14px] leading-tight">
                        CIDC Raipur, Sector 24, Atal Nagar, Raipur, Chhattisgarh 492002
                      </p>
                    </td>
                  </tr>
                  {/* Phone Row */}
                  <tr className="border-b-2 border-govGray">
                    <td className="p-8 bg-govGray border-r-2 border-govBlack">
                      <span className="text-[10px] font-heading font-black text-govBlack uppercase tracking-widest">Direct Line</span>
                    </td>
                    <td className="p-8">
                      <p className="font-mono font-bold text-govBlack text-[14px]">
                        +91 (771) 251-XXXX | 1800-123-XXXX (Help Desk)
                      </p>
                    </td>
                  </tr>
                  {/* Email Row - UNIFORM SINGLE EMAIL */}
                  <tr>
                    <td className="p-8 bg-govGray border-r-2 border-govBlack">
                      <span className="text-[10px] font-heading font-black text-govBlack uppercase tracking-widest">Official Email</span>
                    </td>
                    <td className="p-8">
                      <p className="font-heading font-black text-govRed uppercase tracking-widest text-[14px]">
                        info@cidc.cg.gov.in
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* INSTITUTIONAL MAP TERMINAL */}
            <div className="h-[400px] bg-white border-2 border-govBlack relative overflow-hidden group shadow-sm">
              <div className="absolute inset-0 grayscale contrast-125 brightness-95">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118983.44754519958!2d81.5583769939527!3d21.26127110196238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dda2396e9523%3A0x69680327f1c13745!2sRaipur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1712613400000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                ></iframe>
              </div>
              
              {/* Map Metadata Sidebar */}
              <div className="absolute top-0 right-0 h-full w-56 bg-govBlack/90 backdrop-blur-md p-6 z-20 border-l-2 border-govRed flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 bg-govRed animate-pulse"></div>
                    <span className="text-[9px] font-heading font-black text-white uppercase tracking-widest">HQ Online</span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-[8px] font-heading font-black text-gray-500 uppercase tracking-widest mb-1">Coordinates</p>
                      <p className="text-[10px] font-bold text-white uppercase font-mono">21.16° N, 81.78° E</p>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-white/10">
                   <h4 className="text-[12px] font-heading font-black text-white uppercase leading-none">
                     Institutional <span className="text-govRed">Hub</span>
                   </h4>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: INQUIRY FORM */}
          <div className="lg:col-span-5">
            <div className="bg-govGray border-2 border-govBlack p-1 shadow-sm">
               <div className="bg-white p-8 lg:p-10">
                  <div className="mb-10 flex items-center justify-between border-b-2 border-govGray pb-4">
                    <h3 className="text-2xl font-heading font-black uppercase tracking-tight text-govBlack leading-none">
                      Support <span className="text-govRed">Inquiry</span>
                    </h3>
                    <span className="text-[8px] font-heading font-black text-gray-400 uppercase tracking-widest">Registry ID: 2026-C</span>
                  </div>

                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-heading font-black uppercase tracking-widest text-gray-500">Personnel Name *</label>
                      <input 
                        type="text" 
                        placeholder="ENTER FULL NAME..." 
                        className="w-full bg-govGray border border-gray-300 p-4 text-sm font-heading font-black uppercase tracking-widest focus:border-govRed focus:bg-white outline-none transition-all placeholder:text-gray-300" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] font-heading font-black uppercase tracking-widest text-gray-500">Email Identifier *</label>
                      <input 
                        type="email" 
                        placeholder="EMAIL@EXAMPLE.GOV.IN" 
                        className="w-full bg-govGray border border-gray-300 p-4 text-sm font-heading font-black uppercase tracking-widest focus:border-govRed focus:bg-white outline-none transition-all placeholder:text-gray-300" 
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-heading font-black uppercase tracking-widest text-gray-500">Inquiry Subject *</label>
                      <select className="w-full bg-govGray border border-gray-300 p-4 text-sm font-heading font-black uppercase tracking-widest focus:border-govRed focus:bg-white outline-none transition-all appearance-none cursor-pointer">
                        <option>General Information</option>
                        <option>Technical Compliance</option>
                        <option>Administrative Support</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-heading font-black uppercase tracking-widest text-gray-500">Communication Message *</label>
                      <textarea 
                        rows="4" 
                        placeholder="PROVIDE DETAILED INQUIRY PARAMETERS..." 
                        className="w-full bg-govGray border border-gray-300 p-4 text-sm font-heading font-black uppercase tracking-widest focus:border-govRed focus:bg-white outline-none transition-all resize-none placeholder:text-gray-300"
                      ></textarea>
                    </div>

                    <button className="w-full bg-govBlack text-white py-5 font-heading font-black text-[12px] uppercase tracking-[0.4em] hover:bg-govRed transition-all duration-300 border-none shadow-md">
                      Commit Message »
                    </button>
                  </form>
               </div>
            </div>
            
            <div className="mt-6 flex justify-between items-center px-2">
               <p className="text-[8px] text-gray-400 uppercase tracking-[0.2em] font-bold">
                 Authorized Correspondence Only
               </p>
               <div className="flex gap-2">
                  <div className="w-4 h-1 bg-govBlack"></div>
                  <div className="w-4 h-1 bg-govRed"></div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
