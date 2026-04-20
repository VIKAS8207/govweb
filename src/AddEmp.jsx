import React, { useState } from 'react';

// Refined CIDC GOV UI Input Component - Increased text sizes for better readability
const FormField = ({ label, placeholder, required, type = "text", customPlaceholder, value, onChange }) => (
  <div className="md:col-span-1">
    <label className="text-[11px] font-heading font-bold uppercase tracking-widest text-gray-500 mb-2 block">
      {label} {required && <span className="text-govRed text-sm ml-1">*</span>}
    </label>
    <input 
      type={type} 
      required={required}
      value={value}
      onChange={onChange}
      className="w-full bg-transparent border-0 border-b-2 border-gray-300 px-0 py-3 text-[14px] font-sans font-semibold outline-none focus:ring-0 focus:border-govBlack transition-colors placeholder-gray-300" 
      placeholder={customPlaceholder || `Enter ${label}`} 
    />
  </div>
);

export function AddEmployee() {
  // Locked GOV UI Max Width for institutional consistency
  const containerStyle = { maxWidth: '1280px' };

  // --- DATA STATE (Kept to ensure the form submission handler works) ---
  const [employees, setEmployees] = useState([]);

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
      dueDate: "08 May 2026",
      delayDays: 0,
      delayMonths: 0,
      penaltyPct: 0,
      intPct: 0,
      wages: wageNum,
      empShare: Math.round(wageNum * 0.12),
      employerShare: Math.min(1800, Math.round(wageNum * 0.0833))
    };

    setEmployees([...employees, newRecord]);
    
    // Reset form after submission
    setNewEmp({ 
      name: '', fatherName: '', dob: '', sex: '', maritalStatus: '', 
      nationality: 'INDIAN', aadhaar: '', pan: '', mobile: '', email: '', 
      religion: '', category: '', residentialAddress: '', permanentAddress: '',
      empId: '', designation: '', department: '',
      uan: '', pf: '', age: '', wages: '' 
    }); 
    
    alert("Personnel Registered Successfully!");
  };

  return (
    <main className="min-h-screen bg-white py-16 font-sans antialiased text-govBlack selection:bg-govRed selection:text-white">
      <div style={containerStyle} className="mx-auto px-6 space-y-12">
        
        

        {/* =========================================================================
            PERSONNEL REGISTRATION FORM
            ========================================================================= */}
        <div className="space-y-12 animate-fade-in">
          <section className="border border-gray-200 bg-white p-8 md:p-12 shadow-sm rounded-sm">
            <div className="mb-10 border-b border-gray-200 pb-6">
              <h2 className="text-3xl font-heading font-black uppercase tracking-tight text-govBlack">Master Personnel <span className="text-govRed">Registration</span></h2>
              <p className="text-[11px] font-heading font-black text-gray-400 uppercase tracking-[0.3em] mt-2">EPFO Master Database Entry</p>
            </div>
            
            <form onSubmit={handleAddEmployee} className="space-y-12">
              
              {/* SECTION 2 — Personal Info */}
              <div>
                <h3 className="text-[13px] font-heading font-black uppercase tracking-[0.2em] text-govBlack bg-gray-50 px-6 py-3 mb-8 border-l-4 border-govBlack">Personal Info</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-8 px-6">
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
                <h3 className="text-[13px] font-heading font-black uppercase tracking-[0.2em] text-govBlack bg-gray-50 px-6 py-3 mb-8 border-l-4 border-govBlack">Employment</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-8 px-6">
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
                <h3 className="text-[13px] font-heading font-black uppercase tracking-[0.2em] text-govBlack bg-gray-50 px-6 py-3 mb-8 border-l-4 border-govBlack">Salary</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-8 px-6">
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
                <h3 className="text-[13px] font-heading font-black uppercase tracking-[0.2em] text-govBlack bg-gray-50 px-6 py-3 mb-8 border-l-4 border-govBlack">PF / EPF / EPS Data</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-8 px-6">
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
              <div className="pt-10 flex justify-end px-6 border-t-2 border-gray-100">
                <button type="submit" className="w-full md:w-auto bg-govBlack text-white px-12 py-5 font-heading font-black text-[13px] md:text-[14px] uppercase tracking-[0.2em] hover:bg-govRed transition-all active:scale-95 shadow-md border border-govBlack flex items-center justify-center gap-3 rounded-sm">
                  + Register Profile
                </button>
              </div>
            </form>
          </section>
        </div>

      </div>
    </main>
  );
}