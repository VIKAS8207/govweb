import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Refined CIDC GOV UI Input Component - Adapted for View/Edit modes
const FormField = ({ label, placeholder, required, type = "text", customPlaceholder, value, onChange, readOnly }) => (
  <div className="md:col-span-1">
    <label className="text-[9px] font-heading font-bold uppercase tracking-wide text-gray-500 mb-1 block">
      {label} {required && !readOnly && <span className="text-govRed text-sm ml-1">*</span>}
    </label>
    <input 
      type={type} 
      required={required && !readOnly}
      value={value || ''}
      onChange={onChange}
      readOnly={readOnly}
      className={`w-full border-0 border-b border-gray-300 px-0 py-2.5 text-[12px] font-sans font-medium outline-none transition-colors placeholder-gray-300 
        ${readOnly ? 'bg-transparent text-gray-500 cursor-default focus:border-gray-300' : 'bg-transparent focus:ring-0 focus:border-govBlack text-govBlack'}`} 
      placeholder={customPlaceholder || `Enter ${label}`} 
    />
  </div>
);

export function PaymentConfirmation() {
  // Locked GOV UI Max Width for institutional consistency
  const containerStyle = { maxWidth: '1280px' };

  // --- UI STATES ---
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  const dropdownRef = useRef(null);

  // --- MODAL STATES ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('view'); // 'view' or 'edit'
  const [currentEmp, setCurrentEmp] = useState(null);

  // --- CLICK OUTSIDE HANDLER FOR DROPDOWN ---
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // --- DATA STATE ---
  const [employees, setEmployees] = useState([
    { id: 1, pf: "6801", age: "58Year", uan: "100280858980", name: "Shri Premlal Dhurve", dueDate: "08 Mar 2026", delayDays: 40, delayMonths: 1, penaltyPct: 5, intPct: 12, wages: 112650, empShare: 13518, employerShare: 1800, fatherName: '', dob: '', sex: '', maritalStatus: '', nationality: 'INDIAN', aadhaar: '', pan: '', mobile: '', email: '', religion: '', category: '', residentialAddress: '', permanentAddress: '', empId: 'EMP-001', designation: 'Engineer', department: 'Operations' },
    { id: 2, pf: "6860", age: "58Year", uan: "100675401053", name: "ShriSanjay Dubay", dueDate: "08 May 2026", delayDays: 0, delayMonths: 0, penaltyPct: 0, intPct: 0, wages: 0, empShare: 0, employerShare: 0, fatherName: '', dob: '', sex: '', maritalStatus: '', nationality: 'INDIAN', aadhaar: '', pan: '', mobile: '', email: '', religion: '', category: '', residentialAddress: '', permanentAddress: '', empId: 'EMP-002', designation: 'Technician', department: 'Maintenance' },
    { id: 3, pf: "4096", age: "58Year", uan: "100332575134", name: "Shri Sanjay Shukla", dueDate: "08 Mar 2026", delayDays: 40, delayMonths: 1, penaltyPct: 5, intPct: 12, wages: 60833, empShare: 7300, employerShare: 1800, fatherName: '', dob: '', sex: '', maritalStatus: '', nationality: 'INDIAN', aadhaar: '', pan: '', mobile: '', email: '', religion: '', category: '', residentialAddress: '', permanentAddress: '', empId: 'EMP-003', designation: 'Supervisor', department: 'Operations' },
    { id: 4, pf: "5858", age: "58Year", uan: "100117974814", name: "Shri Budhram Patel", dueDate: "08 Mar 2026", delayDays: 40, delayMonths: 1, penaltyPct: 5, intPct: 12, wages: 54350, empShare: 6522, employerShare: 1800, fatherName: '', dob: '', sex: '', maritalStatus: '', nationality: 'INDIAN', aadhaar: '', pan: '', mobile: '', email: '', religion: '', category: '', residentialAddress: '', permanentAddress: '', empId: 'EMP-004', designation: 'Clerk', department: 'Administration' },
    { id: 5, pf: "6829", age: "58Year", uan: "100132302340", name: "Shri Deepak Ku. Goswami", dueDate: "08 Mar 2026", delayDays: 40, delayMonths: 1, penaltyPct: 5, intPct: 12, wages: 46925, empShare: 5631, employerShare: 1800, fatherName: '', dob: '', sex: '', maritalStatus: '', nationality: 'INDIAN', aadhaar: '', pan: '', mobile: '', email: '', religion: '', category: '', residentialAddress: '', permanentAddress: '', empId: 'EMP-005', designation: 'Analyst', department: 'Finance' },
  ]);

  // --- HANDLERS ---
  const handleDelete = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
    setActiveDropdown(null);
  };

  const openModal = (emp, mode) => {
    setCurrentEmp({ ...emp });
    setModalMode(mode);
    setIsModalOpen(true);
    setActiveDropdown(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentEmp(null);
  };

  const handleModalChange = (field, value) => {
    setCurrentEmp(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveModal = (e) => {
    e.preventDefault();
    if (!currentEmp.name || !currentEmp.uan || currentEmp.wages === '') return;

    const wageNum = parseFloat(currentEmp.wages) || 0;
    const updatedEmp = {
      ...currentEmp,
      wages: wageNum,
      empShare: Math.round(wageNum * 0.12),
      employerShare: Math.min(1800, Math.round(wageNum * 0.0833))
    };

    setEmployees(employees.map(emp => (emp.id === updatedEmp.id ? updatedEmp : emp)));
    closeModal();
  };

  // --- SEARCH FILTER ---
  const filteredEmployees = employees.filter(emp => 
    emp.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    emp.uan.includes(searchQuery) ||
    emp.pf.includes(searchQuery)
  );

  return (
    <main className="min-h-screen bg-white py-16 font-sans antialiased text-govBlack selection:bg-govRed selection:text-white relative">
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

        {/* =========================================================================
            EMPLOYEE DIRECTORY (Table + Search + Actions)
            ========================================================================= */}
        <div className="space-y-12 animate-fade-in">
          <section className="space-y-6">
            
            {/* TOOLBAR: Header, Search & Add Button */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b-2 border-gray-200 pb-4">
              <div>
                  <h2 className="text-2xl font-heading font-black uppercase tracking-tight text-govBlack">Personnel <span className="text-govRed">Directory</span></h2>
                  <p className="text-[10px] font-heading font-black text-gray-400 uppercase tracking-[0.3em] mt-1">Active Statutory Roster</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <div className="w-full sm:w-80 relative">
                  <input 
                    type="text" 
                    placeholder="Search Name, UAN or PF..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white border-2 border-govBlack p-3 pl-10 text-[10px] font-heading font-black uppercase tracking-widest outline-none focus:border-govRed transition-colors"
                  />
                  <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <Link 
                  to="/add-employee" 
                  className="bg-govBlack text-white px-8 py-3 text-[10px] font-heading font-black uppercase tracking-widest hover:bg-govRed transition-all active:scale-95 shadow-md flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  + Add Employee
                </Link>
              </div>
            </div>

            {/* DIRECTORY TABLE (Wraps tightly to content) */}
            <div className="border-2 border-govBlack bg-white shadow-sm relative flex flex-col">
              <div className="overflow-x-auto"> 
                <table className="w-full text-left border-collapse font-sans min-w-[1000px]">
                  <thead>
                    <tr className="bg-govGray text-govBlack text-[10px] font-heading font-black uppercase tracking-widest border-b-2 border-govBlack text-center">
                      <th className="px-4 py-4 border-r border-govBlack w-16">S.NO.</th>
                      <th className="px-4 py-4 border-r border-govBlack w-32">PF A/C.</th>
                      <th className="px-4 py-4 border-r border-govBlack text-left w-48">UAN Number</th>
                      <th className="px-6 py-4 border-r border-govBlack text-left">Name of Employee</th>
                      <th className="px-4 py-4 border-r border-govBlack w-24">EPS AGE</th>
                      <th className="px-6 py-4 border-r border-govBlack text-right w-32">Wages (₹)</th>
                      <th className="px-6 py-4 text-center w-24">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-[12px]">
                    {filteredEmployees.length > 0 ? (
                      filteredEmployees.map((emp, index) => {
                        const isLastRow = index === filteredEmployees.length - 1 && filteredEmployees.length > 2;
                        return (
                          <tr key={emp.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors relative">
                            <td className="px-4 py-4 border-r border-gray-200 text-center font-heading font-black text-gray-400">{index + 1}</td>
                            <td className="px-4 py-4 border-r border-gray-200 text-center font-mono font-bold text-govBlack">{emp.pf}</td>
                            <td className="px-4 py-4 border-r border-gray-200 text-left font-mono font-bold text-govBlack tracking-widest">{emp.uan}</td>
                            <td className="px-6 py-4 border-r border-gray-200 text-left font-heading font-black uppercase tracking-tight text-govBlack">{emp.name}</td>
                            <td className="px-4 py-4 border-r border-gray-200 text-center font-heading font-black text-gray-500 uppercase">{emp.age}</td>
                            <td className="px-6 py-4 border-r border-gray-200 text-right font-mono font-bold text-gray-700">{emp.wages.toLocaleString('en-IN')}</td>
                            
                            {/* 3-DOT ACTION DROPDOWN */}
                            <td className="px-6 py-4 text-center relative">
                              <div className="inline-block" ref={activeDropdown === emp.id ? dropdownRef : null}>
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveDropdown(activeDropdown === emp.id ? null : emp.id)
                                  }}
                                  className="p-2 text-gray-400 hover:text-govBlack transition-colors outline-none"
                                >
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                  </svg>
                                </button>
                                
                                {activeDropdown === emp.id && (
                                  <div className={`absolute right-12 w-36 bg-white border-2 border-govBlack shadow-xl z-50 flex flex-col animate-fade-in text-left ${isLastRow ? 'bottom-4' : 'top-4'}`}>
                                    <button onClick={() => openModal(emp, 'view')} className="px-4 py-3 text-[10px] font-heading font-black uppercase tracking-widest text-govBlack hover:bg-govGray transition-colors border-b border-gray-200 text-left">
                                      View Details
                                    </button>
                                    <button onClick={() => openModal(emp, 'edit')} className="px-4 py-3 text-[10px] font-heading font-black uppercase tracking-widest text-govBlack hover:bg-govGray transition-colors border-b border-gray-200 text-left">
                                      Edit Record
                                    </button>
                                    <button onClick={() => handleDelete(emp.id)} className="px-4 py-3 text-[10px] font-heading font-black uppercase tracking-widest text-govRed hover:bg-red-50 transition-colors text-left">
                                      Delete
                                    </button>
                                  </div>
                                )}
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan="7" className="px-6 py-12 text-center font-heading font-black text-[12px] text-gray-400 uppercase tracking-widest">
                          No Records Found Matching Query
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* EXACT IMAGE MATCH PAGINATION (Outside Table Border) */}
            <div className="flex justify-end mt-4">
              <div className="flex rounded-[2px] overflow-hidden shadow-sm">
                <button className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-50 transition-colors">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button className="w-10 h-10 flex items-center justify-center bg-white border border-l-0 border-gray-300 hover:bg-gray-50 transition-colors">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>

            {/* --- PAYMENT / SETTLEMENT ACTION BUTTON AT BOTTOM OF PAGE --- */}
            <div className="mt-16 pt-8 border-t-4 border-govBlack flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <p className="text-[10px] font-heading font-black text-gray-400 uppercase tracking-[0.3em]">Total Active Roster: {employees.length} Personnel</p>
                <p className="text-[12px] font-sans font-bold text-govBlack mt-1">Registry verified and ready for settlement.</p>
              </div>
              <Link 
                to="/payment-done" 
                className="w-full md:w-auto bg-govBlack text-white px-16 py-6 font-heading font-black text-[14px] uppercase tracking-[0.3em] hover:bg-govRed transition-all active:scale-95 shadow-md flex items-center justify-center gap-4 group"
              >
                Proceed to Payment
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

          </section>
        </div>

      </div>

      {/* =========================================================================
          VIEW / EDIT MODAL OVERLAY
          ========================================================================= */}
      {isModalOpen && currentEmp && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 sm:p-6">
          <div className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto border-4 border-govBlack shadow-2xl relative flex flex-col animate-fade-in">
            
            {/* Modal Header */}
            <div className="sticky top-0 z-20 bg-govGray border-b-2 border-govBlack p-6 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-heading font-black uppercase tracking-tight text-govBlack">
                  {modalMode === 'edit' ? 'Edit Personnel' : 'Personnel Details'} <span className="text-govRed">Profile</span>
                </h2>
                <p className="text-[10px] font-heading font-black text-gray-500 uppercase tracking-[0.3em] mt-1">
                  ID: {currentEmp.empId || 'N/A'} | UAN: {currentEmp.uan}
                </p>
              </div>
              <button onClick={closeModal} className="p-2 bg-white border-2 border-govBlack text-govBlack hover:bg-govRed hover:text-white hover:border-govRed transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {/* Modal Form Body */}
            <form onSubmit={handleSaveModal} className="p-8 md:p-10 space-y-10">
              
              {/* SECTION 2 — Personal Info */}
              <div>
                <h3 className="text-[11px] font-heading font-black uppercase tracking-[0.2em] text-govBlack bg-gray-50 px-4 py-2 mb-6 border-l-4 border-govBlack">Personal Info</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-6 px-4">
                  <FormField label="Full Legal Name" required value={currentEmp.name} onChange={e => handleModalChange('name', e.target.value)} readOnly={modalMode === 'view'} />
                  <FormField label="Father's Name" value={currentEmp.fatherName} onChange={e => handleModalChange('fatherName', e.target.value)} readOnly={modalMode === 'view'} />
                  <FormField label="Date of Birth" customPlaceholder="DD/MM/YYYY" value={currentEmp.dob} onChange={e => handleModalChange('dob', e.target.value)} readOnly={modalMode === 'view'} />
                  <FormField label="Sex" customPlaceholder="M / F / O" value={currentEmp.sex} onChange={e => handleModalChange('sex', e.target.value)} readOnly={modalMode === 'view'} />
                  <FormField label="Marital Status" value={currentEmp.maritalStatus} onChange={e => handleModalChange('maritalStatus', e.target.value)} readOnly={modalMode === 'view'} />
                  <FormField label="Nationality" customPlaceholder="INDIAN" value={currentEmp.nationality} onChange={e => handleModalChange('nationality', e.target.value)} readOnly={modalMode === 'view'} />
                  <FormField label="Aadhaar Number" customPlaceholder="[AADHAAR REDACTED]" required value={currentEmp.aadhaar} onChange={e => handleModalChange('aadhaar', e.target.value)} readOnly={modalMode === 'view'} />
                  <FormField label="PAN" value={currentEmp.pan} onChange={e => handleModalChange('pan', e.target.value)} readOnly={modalMode === 'view'} />
                  <FormField label="Mobile" value={currentEmp.mobile} onChange={e => handleModalChange('mobile', e.target.value)} readOnly={modalMode === 'view'} />
                  <FormField label="Email" type="email" value={currentEmp.email} onChange={e => handleModalChange('email', e.target.value)} readOnly={modalMode === 'view'} />
                  <FormField label="Religion" value={currentEmp.religion} onChange={e => handleModalChange('religion', e.target.value)} readOnly={modalMode === 'view'} />
                  <FormField label="Category" customPlaceholder="GEN / OBC / SC / ST" value={currentEmp.category} onChange={e => handleModalChange('category', e.target.value)} readOnly={modalMode === 'view'} />
                  <FormField label="Residential Address" value={currentEmp.residentialAddress} onChange={e => handleModalChange('residentialAddress', e.target.value)} readOnly={modalMode === 'view'} />
                  <FormField label="Permanent Address" value={currentEmp.permanentAddress} onChange={e => handleModalChange('permanentAddress', e.target.value)} readOnly={modalMode === 'view'} />
                </div>
              </div>

              {/* SECTION 3 — Employment */}
              <div>
                <h3 className="text-[11px] font-heading font-black uppercase tracking-[0.2em] text-govBlack bg-gray-50 px-4 py-2 mb-6 border-l-4 border-govBlack">Employment</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-6 px-4">
                  <FormField label="Employee ID" required value={currentEmp.empId} onChange={e => handleModalChange('empId', e.target.value)} readOnly={modalMode === 'view'} />
                  <FormField label="Designation" required value={currentEmp.designation} onChange={e => handleModalChange('designation', e.target.value)} readOnly={modalMode === 'view'} />
                  <FormField label="Department" required value={currentEmp.department} onChange={e => handleModalChange('department', e.target.value)} readOnly={modalMode === 'view'} />
                </div>
              </div>

              {/* SECTION 4 — Salary */}
              <div>
                <h3 className="text-[11px] font-heading font-black uppercase tracking-[0.2em] text-govBlack bg-gray-50 px-4 py-2 mb-6 border-l-4 border-govBlack">Salary</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-6 px-4">
                  <FormField label="Gross Monthly Salary (₹)" type="number" required customPlaceholder="0.00" value={currentEmp.wages} onChange={e => handleModalChange('wages', e.target.value)} readOnly={modalMode === 'view'} />
                </div>
              </div>

              {/* SECTION 5 — PF / EPF / EPS / EDLI */}
              <div>
                <h3 className="text-[11px] font-heading font-black uppercase tracking-[0.2em] text-govBlack bg-gray-50 px-4 py-2 mb-6 border-l-4 border-govBlack">PF / EPF / EPS Data</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-6 px-4">
                  <FormField label="PF Account No." required customPlaceholder="CG/RAI/XXXX" value={currentEmp.pf} onChange={e => handleModalChange('pf', e.target.value)} readOnly={modalMode === 'view'} />
                  <FormField label="UAN Number" required customPlaceholder="100XXXXXXXXX" value={currentEmp.uan} onChange={e => handleModalChange('uan', e.target.value)} readOnly={modalMode === 'view'} />
                  <FormField label="EPS Age / Status" required customPlaceholder="58YEAR" value={currentEmp.age} onChange={e => handleModalChange('age', e.target.value)} readOnly={modalMode === 'view'} />
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-8 flex justify-end gap-4 border-t-2 border-gray-200">
                <button type="button" onClick={closeModal} className="px-8 py-3 text-[11px] font-heading font-black uppercase tracking-widest text-govBlack border-2 border-gray-300 hover:border-govBlack hover:bg-gray-50 transition-colors">
                  {modalMode === 'view' ? 'Close' : 'Cancel'}
                </button>
                {modalMode === 'edit' && (
                  <button type="submit" className="bg-govBlack text-white px-8 py-3 text-[11px] font-heading font-black uppercase tracking-widest hover:bg-govRed transition-colors shadow-sm">
                    Save Changes
                  </button>
                )}
              </div>

            </form>
          </div>
        </div>
      )}
    </main>
  );
}