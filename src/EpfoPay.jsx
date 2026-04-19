import React, { useState } from 'react';

// Refined CIDC GOV UI Input Component - Smaller, more standard web form sizing
const FormField = ({ label, placeholder, required, type = "text", customPlaceholder, value, onChange }) => (
  <div className="md:col-span-1">
    <label className="text-[9px] font-heading font-bold uppercase tracking-wide text-gray-500 mb-1 block">
      {label} {required && <span className="text-govRed text-sm ml-1">*</span>}
    </label>
    <input 
      type={type} 
      required={required}
      value={value}
      onChange={onChange}
      className="w-full bg-transparent border-0 border-b border-gray-300 px-0 py-2.5 text-[12px] font-sans font-medium outline-none focus:ring-0 focus:border-govBlack transition-colors placeholder-gray-300" 
      placeholder={customPlaceholder || `Enter ${label}`} 
    />
  </div>
);

export function PaymentConfirmation() {
  // Locked GOV UI Max Width for institutional consistency
  const containerStyle = { maxWidth: '1280px' };

  // --- UI STATES ---
  const [activeTab, setActiveTab] = useState('manage'); // 'manage', 'directory', or 'payment'
  const [searchQuery, setSearchQuery] = useState('');

  // --- DATA STATE ---
  const [employees, setEmployees] = useState([
    { id: 1, pf: "6801", age: "-", uan: "100280858980", name: "Shri Premlal Dhurve", dueDate: "08 Mar 2026", delayDays: 40, delayMonths: 1, penaltyPct: 5, intPct: 12, wages: 112650, empShare: 13518, employerShare: 1800 },
    { id: 2, pf: "6860", age: "58", uan: "100675401053", name: "ShriSanjay Dubay", dueDate: "08 May 2026", delayDays: 0, delayMonths: 0, penaltyPct: 0, intPct: 0, wages: 0, empShare: 0, employerShare: 0 },
    { id: 3, pf: "4096", age: "58Year", uan: "100332575134", name: "Shri Sanjay Shukla", dueDate: "08 Mar 2026", delayDays: 40, delayMonths: 1, penaltyPct: 5, intPct: 12, wages: 60833, empShare: 7300, employerShare: 1800 },
    { id: 4, pf: "5858", age: "58Year", uan: "100117974814", name: "Shri Budhram Patel", dueDate: "08 Mar 2026", delayDays: 40, delayMonths: 1, penaltyPct: 5, intPct: 12, wages: 54350, empShare: 6522, employerShare: 1800 },
    { id: 5, pf: "6829", age: "58", uan: "100132302340", name: "Shri Deepak Ku. Goswami", dueDate: "08 Mar 2026", delayDays: 40, delayMonths: 1, penaltyPct: 5, intPct: 12, wages: 46925, empShare: 5631, employerShare: 1800 },
  ]);

  // --- FORM STATES ---
  const [newEmp, setNewEmp] = useState({ 
    name: '', fatherName: '', dob: '', sex: '', maritalStatus: '', 
    nationality: 'INDIAN', aadhaar: '', pan: '', mobile: '', email: '', 
    religion: '', category: '', residentialAddress: '', permanentAddress: '',
    empId: '', designation: '', department: '',
    uan: '', pf: '', age: '', wages: '' 
  });

  // --- HANDLERS ---
  const handleAddEmployee = (e) => {
    e.preventDefault();
    if (!newEmp.name || !newEmp.uan || !newEmp.wages) return;

    const wageNum = parseFloat(newEmp.wages) || 0;
    
    const newRecord = {
      id: employees.length + 1,
      pf: newEmp.pf || "PENDING",
      age: newEmp.age || "-",
      uan: newEmp.uan,
      name: newEmp.name,
      dueDate: "08 May 2026", // Default for new records
      delayDays: 0,
      delayMonths: 0,
      penaltyPct: 0,
      intPct: 0,
      wages: wageNum,
      empShare: Math.round(wageNum * 0.12), // Standard 12% calculation mock
      employerShare: Math.min(1800, Math.round(wageNum * 0.0833)) // Standard max cap mock
    };

    setEmployees([...employees, newRecord]);
    
    // Reset form
    setNewEmp({ 
      name: '', fatherName: '', dob: '', sex: '', maritalStatus: '', 
      nationality: 'INDIAN', aadhaar: '', pan: '', mobile: '', email: '', 
      religion: '', category: '', residentialAddress: '', permanentAddress: '',
      empId: '', designation: '', department: '',
      uan: '', pf: '', age: '', wages: '' 
    }); 
  };

  // --- SEARCH FILTER ---
  const filteredEmployees = employees.filter(emp => 
    emp.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    emp.uan.includes(searchQuery) ||
    emp.pf.includes(searchQuery)
  );

  // --- DYNAMIC CALCULATIONS (For Payment Tab) ---
  const totalWages = employees.reduce((sum, emp) => sum + emp.wages, 0);
  const totalEmpShare = employees.reduce((sum, emp) => sum + emp.empShare, 0);
  const totalEmployerShare = employees.reduce((sum, emp) => sum + emp.employerShare, 0);
  
  const principalAmount = totalEmpShare + totalEmployerShare;
  const taxAmount = 850.00; // Fixed Statutory Tax / Admin Charge

  const calculatedPenalty = employees.reduce((sum, emp) => {
    const rowTotal = emp.empShare + emp.employerShare;
    return sum + (rowTotal * (emp.penaltyPct / 100));
  }, 0);

  const calculatedInterest = employees.reduce((sum, emp) => {
    const rowTotal = emp.empShare + emp.employerShare;
    return sum + (rowTotal * (emp.intPct / 100));
  }, 0);

  const netPayable = principalAmount + taxAmount + calculatedPenalty + calculatedInterest;

  return (
    <main className="min-h-screen bg-white py-16 font-sans antialiased text-govBlack selection:bg-govRed selection:text-white">
      <div style={containerStyle} className="mx-auto px-6 space-y-12">
        
        {/* --- SECTION 1: STATUTORY IDENTITY --- */}
        <header className="border-l-[8px] border-govRed pl-8 py-2">
          <div className="flex items-center gap-3 mb-2">
             <span className="text-govRed font-heading font-black text-[11px] uppercase tracking-[0.4em]">Financial Compliance</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black text-govBlack uppercase tracking-tighter leading-none mb-6">
            EPFO Contribution <span className="text-govRed">Registry</span>
          </h1>
          <p className="text-gray-500 text-sm font-bold uppercase tracking-widest leading-relaxed max-w-3xl">
            Authorized Statutory Disclosure Ledger. Verification of employee wages, PF account mapping, 
            and matching employer contributions for the current billing cycle.
          </p>
        </header>

        {/* --- SECTION 2: MASTER 3-WAY TOGGLE SYSTEM --- */}
        <div className="flex flex-col sm:flex-row border-2 border-govBlack bg-govGray shadow-sm">
          <button 
            onClick={() => setActiveTab('manage')}
            className={`w-full sm:w-1/3 py-5 font-heading font-black text-[11px] md:text-[13px] uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3
              ${activeTab === 'manage' ? 'bg-govBlack text-white' : 'bg-white text-gray-500 hover:text-govBlack hover:bg-gray-50'}`}
          >
            1. Registration
          </button>
          <button 
            onClick={() => setActiveTab('directory')}
            className={`w-full sm:w-1/3 py-5 font-heading font-black text-[11px] md:text-[13px] uppercase tracking-[0.3em] border-t-2 sm:border-t-0 sm:border-l-2 border-govBlack transition-all flex items-center justify-center gap-3
              ${activeTab === 'directory' ? 'bg-govBlack text-white' : 'bg-white text-gray-500 hover:text-govBlack hover:bg-gray-50'}`}
          >
            2. Employee Directory
          </button>
          <button 
            onClick={() => setActiveTab('payment')}
            className={`w-full sm:w-1/3 py-5 font-heading font-black text-[11px] md:text-[13px] uppercase tracking-[0.3em] border-t-2 sm:border-t-0 sm:border-l-2 border-govBlack transition-all flex items-center justify-center gap-3
              ${activeTab === 'payment' ? 'bg-govRed text-white' : 'bg-white text-gray-500 hover:text-govRed hover:bg-gray-50'}`}
          >
            3. Settlement & Payment
          </button>
        </div>

        {/* =========================================================================
            TAB 1: PERSONNEL REGISTRATION (Form Only)
            ========================================================================= */}
        {activeTab === 'manage' && (
          <div className="space-y-12 animate-fade-in">
            {/* ADD EMPLOYEE FORM (Refined Web Form Design) */}
            <section className="border border-gray-200 bg-white p-8 md:p-10 shadow-sm rounded-sm">
              <div className="mb-10 border-b border-gray-200 pb-4">
                <h2 className="text-2xl font-heading font-black uppercase tracking-tight text-govBlack">Master Personnel <span className="text-govRed">Registration</span></h2>
                <p className="text-[10px] font-heading font-black text-gray-400 uppercase tracking-[0.3em] mt-1">EPFO Master Database Entry</p>
              </div>
              
              <form onSubmit={handleAddEmployee} className="space-y-10">
                
                {/* SECTION 2 — Personal Info */}
                <div>
                  <h3 className="text-[11px] font-heading font-black uppercase tracking-[0.2em] text-govBlack bg-gray-50 px-4 py-2 mb-6">Personal Info</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-6 px-4">
                    <FormField 
                      label="Full Legal Name" 
                      value={newEmp.name} 
                      onChange={e => setNewEmp({...newEmp, name: e.target.value})} 
                      required 
                    />
                    <FormField 
                      label="Father's Name" 
                      value={newEmp.fatherName} 
                      onChange={e => setNewEmp({...newEmp, fatherName: e.target.value})} 
                    />
                    <FormField 
                      label="Date of Birth" 
                      customPlaceholder="DD/MM/YYYY" 
                      value={newEmp.dob} 
                      onChange={e => setNewEmp({...newEmp, dob: e.target.value})} 
                    />
                    <FormField 
                      label="Sex" 
                      customPlaceholder="M / F / O" 
                      value={newEmp.sex} 
                      onChange={e => setNewEmp({...newEmp, sex: e.target.value})} 
                    />
                    <FormField 
                      label="Marital Status" 
                      value={newEmp.maritalStatus} 
                      onChange={e => setNewEmp({...newEmp, maritalStatus: e.target.value})} 
                    />
                    <FormField 
                      label="Nationality" 
                      customPlaceholder="INDIAN" 
                      value={newEmp.nationality} 
                      onChange={e => setNewEmp({...newEmp, nationality: e.target.value})} 
                    />
                    <FormField 
                      label="Aadhaar Number" 
                      customPlaceholder="[AADHAAR REDACTED]" 
                      required 
                      value={newEmp.aadhaar} 
                      onChange={e => setNewEmp({...newEmp, aadhaar: e.target.value})} 
                    />
                    <FormField 
                      label="PAN" 
                      value={newEmp.pan} 
                      onChange={e => setNewEmp({...newEmp, pan: e.target.value})} 
                    />
                    <FormField 
                      label="Mobile" 
                      value={newEmp.mobile} 
                      onChange={e => setNewEmp({...newEmp, mobile: e.target.value})} 
                    />
                    <FormField 
                      label="Email" 
                      type="email" 
                      value={newEmp.email} 
                      onChange={e => setNewEmp({...newEmp, email: e.target.value})} 
                    />
                    <FormField 
                      label="Religion" 
                      value={newEmp.religion} 
                      onChange={e => setNewEmp({...newEmp, religion: e.target.value})} 
                    />
                    <FormField 
                      label="Category" 
                      customPlaceholder="GEN / OBC / SC / ST" 
                      value={newEmp.category} 
                      onChange={e => setNewEmp({...newEmp, category: e.target.value})} 
                    />
                    <FormField 
                      label="Residential Address" 
                      value={newEmp.residentialAddress} 
                      onChange={e => setNewEmp({...newEmp, residentialAddress: e.target.value})} 
                    />
                    <FormField 
                      label="Permanent Address" 
                      value={newEmp.permanentAddress} 
                      onChange={e => setNewEmp({...newEmp, permanentAddress: e.target.value})} 
                    />
                  </div>
                </div>

                {/* SECTION 3 — Employment */}
                <div>
                  <h3 className="text-[11px] font-heading font-black uppercase tracking-[0.2em] text-govBlack bg-gray-50 px-4 py-2 mb-6">Employment</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-6 px-4">
                    <FormField 
                      label="Employee ID" 
                      required 
                      value={newEmp.empId} 
                      onChange={e => setNewEmp({...newEmp, empId: e.target.value})} 
                    />
                    <FormField 
                      label="Designation" 
                      required 
                      value={newEmp.designation} 
                      onChange={e => setNewEmp({...newEmp, designation: e.target.value})} 
                    />
                    <FormField 
                      label="Department" 
                      required 
                      value={newEmp.department} 
                      onChange={e => setNewEmp({...newEmp, department: e.target.value})} 
                    />
                  </div>
                </div>

                {/* SECTION 4 — Salary */}
                <div>
                  <h3 className="text-[11px] font-heading font-black uppercase tracking-[0.2em] text-govBlack bg-gray-50 px-4 py-2 mb-6">Salary</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-6 px-4">
                    <FormField 
                      label="Gross Monthly Salary (₹)" 
                      type="number" 
                      required 
                      customPlaceholder="0.00"
                      value={newEmp.wages} 
                      onChange={e => setNewEmp({...newEmp, wages: e.target.value})} 
                    />
                  </div>
                </div>

                {/* SECTION 5 — PF / EPF / EPS / EDLI */}
                <div>
                  <h3 className="text-[11px] font-heading font-black uppercase tracking-[0.2em] text-govBlack bg-gray-50 px-4 py-2 mb-6">PF / EPF / EPS Data</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-6 px-4">
                    <FormField 
                      label="PF Account No." 
                      required 
                      customPlaceholder="CG/RAI/XXXX"
                      value={newEmp.pf} 
                      onChange={e => setNewEmp({...newEmp, pf: e.target.value})} 
                    />
                    <FormField 
                      label="UAN Number" 
                      required 
                      customPlaceholder="100XXXXXXXXX"
                      value={newEmp.uan} 
                      onChange={e => setNewEmp({...newEmp, uan: e.target.value})} 
                    />
                    <FormField 
                      label="EPS Age / Status" 
                      required 
                      customPlaceholder="58YEAR"
                      value={newEmp.age} 
                      onChange={e => setNewEmp({...newEmp, age: e.target.value})} 
                    />
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-8 flex justify-end px-4">
                  <button type="submit" className="w-full md:w-auto bg-govBlack text-white px-12 py-4 font-heading font-black text-[12px] uppercase tracking-[0.2em] hover:bg-govRed transition-all active:scale-95 shadow-sm border border-govBlack flex items-center justify-center gap-3 rounded-sm">
                    + Register Profile
                  </button>
                </div>
              </form>
            </section>
          </div>
        )}

        {/* =========================================================================
            TAB 2: EMPLOYEE DIRECTORY (Table + Search Only)
            ========================================================================= */}
        {activeTab === 'directory' && (
          <div className="space-y-12 animate-fade-in">
            <section className="space-y-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b-2 border-gray-200 pb-4">
                <div>
                    <h2 className="text-2xl font-heading font-black uppercase tracking-tight text-govBlack">Personnel <span className="text-govRed">Directory</span></h2>
                    <p className="text-[10px] font-heading font-black text-gray-400 uppercase tracking-[0.3em] mt-1">Active Statutory Roster</p>
                </div>
                <div className="w-full md:w-96 relative">
                  <input 
                    type="text" 
                    placeholder="Search Name, UAN or PF..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white border-2 border-govBlack p-3 pl-10 text-[10px] font-heading font-black uppercase tracking-widest outline-none focus:border-govRed transition-colors"
                  />
                  <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
              </div>

              <div className="border-2 border-govBlack overflow-hidden shadow-sm bg-white flex flex-col">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse font-sans min-w-[800px]">
                    <thead>
                      <tr className="bg-govGray text-govBlack text-[10px] font-heading font-black uppercase tracking-widest border-b-2 border-govBlack text-center">
                        <th className="px-4 py-4 border-r border-govBlack w-16">S.NO.</th>
                        <th className="px-4 py-4 border-r border-govBlack">PF A/C.</th>
                        <th className="px-4 py-4 border-r border-govBlack text-left">UAN Number</th>
                        <th className="px-6 py-4 border-r border-govBlack text-left">Name of Employee</th>
                        <th className="px-4 py-4 border-r border-govBlack">EPS AGE</th>
                        <th className="px-6 py-4 text-right">Wages (₹)</th>
                      </tr>
                    </thead>
                    <tbody className="text-[12px]">
                      {filteredEmployees.length > 0 ? (
                        filteredEmployees.map((emp, index) => (
                          <tr key={emp.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-4 border-r border-gray-200 text-center font-heading font-black text-gray-400">{index + 1}</td>
                            <td className="px-4 py-4 border-r border-gray-200 text-center font-mono font-bold text-govBlack">{emp.pf}</td>
                            <td className="px-4 py-4 border-r border-gray-200 text-left font-mono font-bold text-govBlack tracking-widest">{emp.uan}</td>
                            <td className="px-6 py-4 border-r border-gray-200 text-left font-heading font-black uppercase tracking-tight text-govBlack">{emp.name}</td>
                            <td className="px-4 py-4 border-r border-gray-200 text-center font-heading font-black text-gray-500 uppercase">{emp.age}</td>
                            <td className="px-6 py-4 text-right font-mono font-bold text-gray-700">{emp.wages.toLocaleString('en-IN')}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6" className="px-6 py-12 text-center font-heading font-black text-[12px] text-gray-400 uppercase tracking-widest">
                            No Records Found Matching Query
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                 <div className="flex justify-end p-4 bg-white border-t-2 border-govBlack">
                  <div className="flex rounded-[2px] overflow-hidden shadow-sm">
                    <button className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-50 transition-colors">
                      <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center bg-white border border-l-0 border-gray-300 hover:bg-gray-50 transition-colors">
                      <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                </div>



              </div>
            </section>
          </div>
        )}


        {/* =========================================================================
            TAB 3: EPFO SETTLEMENT & PAYMENT (Exact Previous Component)
            ========================================================================= */}
        {activeTab === 'payment' && (
          <div className="space-y-12 animate-fade-in">
            {/* EPFO REGISTRY TABLE */}
            <section className="space-y-6">
              <div className="flex justify-between items-end border-b-2 border-gray-200 pb-4">
                <div>
                    <h2 className="text-2xl font-heading font-black uppercase tracking-tight text-govBlack">Statutory <span className="text-govRed">Deductions</span></h2>
                </div>
                <p className="text-[10px] font-heading font-black text-gray-400 uppercase tracking-[0.3em]">Filing Ref: CIDC-EPF-2026-04</p>
              </div>

              <div className="border-2 border-govBlack overflow-hidden shadow-sm bg-white flex flex-col">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse font-sans min-w-[1200px]">
                    <thead>
                      <tr className="bg-govBlack text-white text-[10px] font-heading font-black uppercase tracking-widest border-b-2 border-govBlack text-center">
                        <th className="px-3 py-5 border-r border-white/20 w-12">S.NO.</th>
                        <th className="px-3 py-5 border-r border-white/20">PF A/C.</th>
                        <th className="px-3 py-5 border-r border-white/20">EPS AGE</th>
                        <th className="px-4 py-5 border-r border-white/20 text-left">UAN Number</th>
                        <th className="px-4 py-5 border-r border-white/20 text-left whitespace-nowrap">Name of Employee</th>
                        
                        <th className="px-3 py-5 border-r border-white/20 text-center text-amber-300">Due Date</th>
                        <th className="px-3 py-5 border-r border-white/20 text-center text-amber-300">Days</th>
                        <th className="px-3 py-5 border-r border-white/20 text-center text-amber-300">Months</th>
                        <th className="px-3 py-5 border-r border-white/20 text-center text-govRed">Penalty %</th>
                        <th className="px-3 py-5 border-r border-white/20 text-center text-govRed">Interest</th>
                        
                        <th className="px-4 py-5 border-r border-white/20 text-right">Wages</th>
                        <th className="px-4 py-5 border-r border-white/20 text-right text-govRed">Employee Share</th>
                        <th className="px-4 py-5 text-right text-govRed">Employer Share</th>
                      </tr>
                    </thead>
                    <tbody className="text-[12px]">
                      {employees.map((emp, index) => (
                        <tr key={emp.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors group">
                          <td className="px-3 py-4 border-r border-gray-200 text-center font-heading font-black text-gray-400">{index + 1}</td>
                          <td className="px-3 py-4 border-r border-gray-200 text-center font-mono font-bold text-govBlack">{emp.pf}</td>
                          <td className="px-3 py-4 border-r border-gray-200 text-center font-heading font-black text-gray-500 uppercase">{emp.age}</td>
                          <td className="px-4 py-4 border-r border-gray-200 text-left font-mono font-bold text-govBlack tracking-widest">{emp.uan}</td>
                          <td className="px-4 py-4 border-r border-gray-200 text-left font-heading font-black uppercase tracking-tight text-govBlack whitespace-nowrap">{emp.name}</td>

                          <td className="px-3 py-4 border-r border-gray-200 text-center font-mono font-bold text-gray-600 whitespace-nowrap">{emp.dueDate}</td>
                          <td className={`px-3 py-4 border-r border-gray-200 text-center font-mono font-bold ${emp.delayDays > 0 ? 'text-amber-600 bg-amber-50/50' : 'text-gray-400'}`}>{emp.delayDays}</td>
                          <td className={`px-3 py-4 border-r border-gray-200 text-center font-mono font-bold ${emp.delayMonths > 0 ? 'text-amber-600 bg-amber-50/50' : 'text-gray-400'}`}>{emp.delayMonths}</td>
                          <td className={`px-3 py-4 border-r border-gray-200 text-center font-mono font-bold ${emp.penaltyPct > 0 ? 'text-govRed bg-red-50/50' : 'text-gray-400'}`}>{emp.penaltyPct}%</td>
                          <td className={`px-3 py-4 border-r border-gray-200 text-center font-mono font-bold ${emp.intPct > 0 ? 'text-govRed bg-red-50/50' : 'text-gray-400'}`}>{emp.intPct}%</td>

                          <td className="px-4 py-4 border-r border-gray-200 text-right font-mono font-bold text-gray-700">{emp.wages === 0 ? "0" : emp.wages.toLocaleString('en-IN')}</td>
                          <td className="px-4 py-4 border-r border-gray-200 text-right font-mono font-bold text-govBlack bg-red-50/30">{emp.empShare === 0 ? "0" : emp.empShare.toLocaleString('en-IN')}</td>
                          <td className="px-4 py-4 text-right font-mono font-bold text-govBlack bg-red-50/30">{emp.employerShare === 0 ? "0" : emp.employerShare.toLocaleString('en-IN')}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="bg-govBlack text-white border-t-4 border-govRed">
                        <td colSpan="10" className="px-4 py-5 text-right font-heading font-black uppercase tracking-[0.3em] text-[12px]">TOTAL</td>
                        <td className="px-4 py-5 border-l border-white/20 text-right font-mono font-bold text-[14px] tracking-tight">{totalWages.toLocaleString('en-IN')}</td>
                        <td className="px-4 py-5 border-l border-white/20 text-right font-mono font-bold text-[14px] tracking-tight text-govRed bg-gray-900">{totalEmpShare.toLocaleString('en-IN')}</td>
                        <td className="px-4 py-5 border-l border-white/20 text-right font-mono font-bold text-[14px] tracking-tight text-govRed bg-gray-900">{totalEmployerShare.toLocaleString('en-IN')}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                
                {/* EXACT IMAGE MATCH PAGINATION */}
                <div className="flex justify-end p-4 bg-white border-t-2 border-govBlack">
                  <div className="flex rounded-[2px] overflow-hidden shadow-sm">
                    <button className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-50 transition-colors">
                      <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center bg-white border border-l-0 border-gray-300 hover:bg-gray-50 transition-colors">
                      <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* PROFESSIONAL BILLING SUMMARY */}
            <section className="border-2 border-govBlack bg-white shadow-sm overflow-hidden flex flex-col lg:flex-row items-stretch mt-12">
              <div className="flex-grow p-10 border-b-2 lg:border-b-0 lg:border-r-2 border-govBlack bg-govGray">
                <h3 className="text-xs font-heading font-black uppercase tracking-[0.2em] mb-8 pb-4 border-b-2 border-govBlack text-govBlack">Final Settlement Invoice</h3>
                <div className="space-y-4 font-mono text-[12px] font-bold uppercase text-gray-600">
                  <div className="flex justify-between items-center">
                    <span>Total Employee Contribution Share</span>
                    <span className="text-govBlack tracking-tighter">₹ {totalEmpShare.toLocaleString('en-IN', {minimumFractionDigits: 2})}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-dashed border-gray-300">
                    <span>Total Employer Contribution Share</span>
                    <span className="text-govBlack tracking-tighter">₹ {totalEmployerShare.toLocaleString('en-IN', {minimumFractionDigits: 2})}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 text-govBlack text-[13px]">
                    <span className="font-heading font-black">Base Principal Amount</span>
                    <span className="tracking-tighter">₹ {principalAmount.toLocaleString('en-IN', {minimumFractionDigits: 2})}</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-500">
                    <span>Statutory Tax & Admin Charges</span>
                    <span>+ ₹ {taxAmount.toLocaleString('en-IN', {minimumFractionDigits: 2})}</span>
                  </div>
                  <div className="flex justify-between items-center text-govRed">
                    <span>Standard Interest Assessment (12%)</span>
                    <span>+ ₹ {calculatedInterest.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                  </div>
                  <div className="flex justify-between items-center text-govRed">
                    <span>Late Payment Penalty Assessment (5%)</span>
                    <span>+ ₹ {calculatedPenalty.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                  </div>
                </div>
              </div>

              <div className="lg:w-[400px] bg-white p-10 flex flex-col justify-center gap-8 relative">
                <div className="absolute top-0 right-0 w-16 h-16 bg-govGray border-l-2 border-b-2 border-gray-200"></div>
                <div className="relative z-10 border-b-4 border-govRed pb-6">
                  <span className="text-[10px] font-heading font-black text-gray-400 uppercase tracking-widest block mb-2">Net Payable Amount</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-heading font-black text-govBlack tracking-tighter">₹ {Math.floor(netPayable).toLocaleString('en-IN')}</span>
                    <span className="text-xl font-heading font-black text-govBlack opacity-40">.{(netPayable % 1).toFixed(2).substring(2)}</span>
                  </div>
                </div>
                <button className="w-full bg-govBlack text-white py-6 font-heading font-black text-[14px] uppercase tracking-[0.3em] hover:bg-govRed transition-all duration-300 shadow-md active:scale-95 flex items-center justify-center gap-4 group">
                  Pay Now
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
                <p className="text-[9px] font-sans font-bold text-gray-400 uppercase tracking-widest text-center">Gateway Secured by CIDC Treasury</p>
              </div>
            </section>
          </div>
        )}

      </div>
    </main>
  );
}