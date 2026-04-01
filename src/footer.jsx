import React from 'react';

const Footer = () => {
  const sectionTitle = "text-white font-bold text-lg mb-6 pb-2 border-b-2 border-[#B22234] inline-block";
  const linkStyle = "text-gray-400 hover:text-[#B22234] transition-colors duration-300 text-sm flex items-center gap-2";

  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8">
      <div className="max-w-[1500px] mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <h3 className={sectionTitle}>CIDC Raipur</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Chhattisgarh Infrastructure Development Corporation Ltd. is committed to 
              building sustainable and world-class infrastructure for the state of Chhattisgarh.
            </p>
            <div className="pt-4">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Total Visitors</p>
              <span className="bg-gray-800 px-3 py-1 rounded text-[#B22234] font-mono font-bold tracking-tighter">
                012,458,792
              </span>
            </div>
          </div>

          <div>
            <h3 className={sectionTitle}>Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className={linkStyle}>› Tenders & RFPs</a></li>
              <li><a href="#" className={linkStyle}>› Latest News</a></li>
              <li><a href="#" className={linkStyle}>› Recruitment</a></li>
              <li><a href="#" className={linkStyle}>› Photo Gallery</a></li>
              <li><a href="#" className={linkStyle}>› Important Documents</a></li>
            </ul>
          </div>

          <div>
            <h3 className={sectionTitle}>Policy & Help</h3>
            <ul className="space-y-3">
              <li><a href="#" className={linkStyle}>› Right to Information (RTI)</a></li>
              <li><a href="#" className={linkStyle}>› Terms & Conditions</a></li>
              <li><a href="#" className={linkStyle}>› Privacy Policy</a></li>
              <li><a href="#" className={linkStyle}>› Hyperlinking Policy</a></li>
              <li><a href="#" className={linkStyle}>› Copyright Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className={sectionTitle}>Contact Us</h3>
            <div className="text-gray-400 text-sm space-y-4">
              <p>
                <strong>Address:</strong><br />
                First Floor, Shastri Chowk,<br /> 
                Raipur, Chhattisgarh - 492001
              </p>
              <p>
                <strong>Phone:</strong> +91-771-1234567
              </p>
              <p>
                <strong>Email:</strong> info@cidc.cg.gov.in
              </p>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 mb-8" />

        <div className="flex flex-wrap items-center justify-center gap-12 mb-8 opacity-70 grayscale hover:grayscale-0 transition-all">
          <img src="/image/digital-india.png" alt="Digital India" className="h-10 object-contain" />
          <img src="/image/nic-logo.png" alt="National Informatics Centre" className="h-10 object-contain" />
          <img src="/image/mygov-logo.png" alt="MyGov" className="h-10 object-contain" />
          <img src="/image/india-gov-logo.png" alt="India.gov.in" className="h-10 object-contain" />
        </div>

        <div className="text-center space-y-4 pt-8 border-t border-gray-800">
          <p className="text-xs text-gray-500 leading-relaxed">
            Content Owned by Chhattisgarh Infrastructure Development Corporation Ltd. (CIDC) <br />
            © 2026 CIDC. All rights reserved. 
          </p>
          <p className="text-[10px] text-gray-600 uppercase tracking-widest">
            Developed and Hosted by <span className="text-gray-400">National Informatics Centre (NIC)</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;