import React from 'react';

    function Footer() {
        return (
            <footer className="bg-govBlack text-white pt-16 pb-12 border-t-4 border-govRed">
                <div className="max-w-screen-xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        <div className="space-y-6">
                            <div className="border-l-4 border-govRed pl-4 font-heading font-black uppercase"><h3 className="text-xl tracking-tighter">CIDC <span className="text-govRed">Raipur</span></h3><p className="text-[10px] text-gray-500 tracking-widest mt-1 font-sans">Govt. of Chhattisgarh Undertaking</p></div>
                            <p className="text-gray-400 text-[12px] leading-relaxed font-sans">Chhattisgarh Infrastructure Development Corporation Ltd. is mandated to build sustainable and world-class infrastructure for the state of Chhattisgarh.</p>
                            <div className="pt-4 border-t border-white/5 font-sans"><p className="text-[10px] text-gray-500 uppercase tracking-widest mb-3 font-bold">Total Visitors since 2026</p><span className="bg-black border border-white/10 px-4 py-2 text-govRed font-heading font-black text-lg tracking-[0.2em]">012,458,792</span></div>
                        </div>
                        {["Quick Links", "Policy & Help"].map((title, idx) => (
                            <div key={idx}>
                                <h3 className="text-white font-heading font-black text-sm uppercase tracking-[0.2em] mb-6 pb-2 border-b-2 border-govRed inline-block">{title}</h3>
                                <ul className="space-y-4 font-heading font-bold uppercase text-[12px] text-gray-400">
                                    {(idx === 0 ? ["Tenders & RFPs", "Latest News", "Recruitment", "Photo Gallery", "Important Documents"] : ["Right to Information", "Terms & Conditions", "Privacy Policy", "Hyperlinking Policy", "Copyright Policy"]).map(link => (
                                        <li key={link}><a href="#" className="hover:text-govRed transition-colors">» {link}</a></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div>
                            <h3 className="text-white font-heading font-black text-sm uppercase tracking-[0.2em] mb-6 pb-2 border-b-2 border-govRed inline-block">Contact Us</h3>
                            <div className="text-gray-400 text-[12px] space-y-5 font-sans font-medium uppercase tracking-wide">
                                <div className="flex gap-3"><span className="text-govRed font-bold">ADD:</span><p>First Floor, Shastri Chowk, Raipur, Chhattisgarh - 492001</p></div>
                                <div className="flex gap-3"><span className="text-govRed font-bold">PHN:</span><p>+91-771-1234567</p></div>
                                <div className="flex gap-3"><span className="text-govRed font-bold">EML:</span><p className="lowercase tracking-normal">info@cidc.cg.gov.in</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="border-y border-white/5 py-10 flex flex-wrap items-center justify-center gap-10 opacity-60 grayscale transition-all duration-500"><img src="/image/digital-india.png" alt="Digital India" className="h-8 object-contain" /><img src="/image/nic-logo.png" alt="NIC" className="h-8 object-contain" /><img src="/image/mygov-logo.png" alt="MyGov" className="h-8 object-contain" /><img src="/image/india-gov-logo.png" alt="National Portal" className="h-8 object-contain" /></div>
                    <div className="text-center space-y-4 mt-10">
                        <p className="text-[11px] text-gray-500 font-medium font-sans leading-relaxed">Content Owned and Maintained by Chhattisgarh Infrastructure Development Corporation Ltd. (CIDC) <br /> © 2026 CIDC Raipur. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        );
    }

export default Footer;