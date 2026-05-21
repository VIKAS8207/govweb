import React from 'react';

export function ShopPaymentDone() {
  // Locked GOV UI Max Width for institutional consistency
  const containerStyle = { maxWidth: '1000px' };

  // Mock Data for the Receipt
  const receiptData = {
    transactionId: "TXN-CIDC-88392011A",
    date: "21 MAY 2026 | 16:06 IST",
    registryId: "CIDC-BILL-2026-T4",
    paymentMode: "SECURE NET BANKING",
    billingCycle: "MONTHLY (APRIL 2026)",
    baseRent: 4500.00,
    lateFees: 0.00,
    totalPaid: 4500.00
  };

  return (
    <main className="min-h-screen bg-govGray py-12 font-sans antialiased text-govBlack selection:bg-govRed selection:text-white">
      <div style={containerStyle} className="mx-auto px-6">
        
        {/* 1. OFFICIAL RECEIPT HEADER */}
        <header className="bg-white border-2 border-govBlack p-8 mb-0 flex justify-between items-start">
          <div className="border-l-4 border-govRed pl-6">
            <h1 className="text-3xl font-heading font-black uppercase tracking-tighter leading-none mb-2">
              Payment <span className="text-govRed">Acknowledged</span>
            </h1>
            <p className="text-[10px] font-heading font-black text-gray-500 uppercase tracking-widest">
              Chhattisgarh Infrastructure Development Corp. Ltd.
            </p>
          </div>
          <div className="text-right">
             <p className="text-[9px] font-heading font-black text-gray-400 uppercase tracking-widest">Registry ID</p>
             <p className="text-xs font-mono font-bold">{receiptData.registryId}</p>
          </div>
        </header>

        {/* 2. MAIN RECEIPT BODY */}
        <div className="border-x-2 border-b-2 border-govBlack bg-white p-8 md:p-12 relative overflow-hidden">
          
          

          {/* SUCCESS BANNER */}
          <div className="border-2 border-green-600 bg-green-50 p-6 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-600 flex items-center justify-center rounded-sm shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-heading font-black uppercase tracking-widest text-green-700 leading-none">
                  Transaction Successful
                </h2>
                <p className="text-[10px] font-sans font-bold text-green-600 uppercase tracking-widest mt-1">
                  Funds securely routed to CIDC Treasury.
                </p>
              </div>
            </div>
            <div className="text-center md:text-right border-t-2 md:border-t-0 md:border-l-2 border-green-200 pt-4 md:pt-0 md:pl-6 w-full md:w-auto">
              <p className="text-[9px] font-heading font-black text-green-600 uppercase tracking-widest">Amount Received</p>
              <p className="text-3xl font-heading font-black text-green-700 tracking-tighter">
                ₹ {receiptData.totalPaid.toLocaleString('en-IN')}.00
              </p>
            </div>
          </div>

          {/* TRANSACTION METADATA */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 border-b-2 border-govBlack pb-8">
            <div>
              <p className="text-[9px] font-heading font-black text-gray-400 uppercase tracking-widest mb-1">Transaction Ref ID</p>
              <p className="text-[13px] font-mono font-bold text-govBlack">{receiptData.transactionId}</p>
            </div>
            <div>
              <p className="text-[9px] font-heading font-black text-gray-400 uppercase tracking-widest mb-1">Timestamp</p>
              <p className="text-[13px] font-mono font-bold text-govBlack">{receiptData.date}</p>
            </div>
            <div>
              <p className="text-[9px] font-heading font-black text-gray-400 uppercase tracking-widest mb-1">Payment Method</p>
              <p className="text-[13px] font-heading font-black uppercase text-govBlack">{receiptData.paymentMode}</p>
            </div>
          </div>

          {/* DETAILED INVOICE BREAKDOWN */}
          <div className="mb-12">
            <h3 className="text-xs font-heading font-black uppercase tracking-[0.2em] mb-6 text-govBlack">
              Payment Breakdown
            </h3>
            
            <div className="space-y-0 border-2 border-gray-200">
              <div className="flex justify-between items-center p-4 bg-gray-50 border-b border-gray-200">
                <span className="text-[11px] font-heading font-black uppercase tracking-widest text-gray-600">Billing Cycle</span>
                <span className="text-[11px] font-heading font-black uppercase tracking-widest text-govBlack">{receiptData.billingCycle}</span>
              </div>
              <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <span className="text-[11px] font-mono font-bold uppercase text-gray-500">Base Estate Rent</span>
                <span className="text-[12px] font-mono font-bold text-govBlack">₹ {receiptData.baseRent.toLocaleString('en-IN')}.00</span>
              </div>
              <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <span className="text-[11px] font-mono font-bold uppercase text-gray-500">Late Fees / Penalties</span>
                <span className="text-[12px] font-mono font-bold text-govBlack">₹ {receiptData.lateFees.toLocaleString('en-IN')}.00</span>
              </div>
              <div className="flex justify-between items-center p-6 bg-govBlack text-white">
                <span className="text-[12px] font-heading font-black uppercase tracking-[0.3em]">Total Settled Amount</span>
                <span className="text-[18px] font-mono font-bold tracking-tighter">₹ {receiptData.totalPaid.toLocaleString('en-IN')}.00</span>
              </div>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="w-full sm:w-1/2 bg-govBlack text-white py-5 font-heading font-black text-[12px] uppercase tracking-[0.3em] hover:bg-govRed transition-all shadow-md active:scale-95 flex items-center justify-center gap-3 border-2 border-govBlack hover:border-govRed">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </button>
            <button className="w-full sm:w-1/2 bg-white text-govBlack py-5 font-heading font-black text-[12px] uppercase tracking-[0.3em] border-2 border-govBlack hover:bg-gray-50 transition-all shadow-sm active:scale-95 flex items-center justify-center gap-3">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print Receipt
            </button>
          </div>

        </div>

        {/* 3. MINIMAL FOOTER */}
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center bg-white border border-gray-200 p-4 gap-4 shadow-sm">
           <p className="text-[9px] font-sans font-bold text-gray-400 uppercase tracking-widest text-center sm:text-left">
             This is a computer-generated receipt and requires no physical signature.
           </p>
           <button className="text-[10px] font-heading font-black text-govBlack hover:text-govRed uppercase tracking-widest underline decoration-2 underline-offset-4 transition-colors">
             Return to Dashboard
           </button>
        </div>

      </div>
    </main>
  );
}