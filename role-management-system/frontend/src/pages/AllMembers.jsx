import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export const AllMembers = () => {
  const { user } = useAuth();
  
  // High fidelity visual structure mock payload datasets matching specifications
  const [members] = useState([
    { id: 'UGR/25605/14', name: 'Darlene Robertson', div: 'Design', attendance: 'Active', year: '4th', status: 'On Campus', img: 'https://unsplash.com' },
    { id: 'UGR/25605/14', name: 'Floyd Miles', div: 'Developement', attendance: 'Active', year: '5th', status: 'Off Campus', img: 'https://unsplash.com' },
    { id: 'UGR/25605/14', name: 'Cody Fisher', div: 'CPD', attendance: 'Needs Attention', year: '3rd', status: 'Withdrawn', img: 'https://unsplash.com' },
    { id: 'UGR/25605/14', name: 'Dianne Russell', div: 'CPD', attendance: 'Active', year: '4th', status: 'Withdrawn', img: 'https://unsplash.com' },
    { id: 'UGR/25605/14', name: 'Savannah Nguyen', div: 'CPD', attendance: 'Needs Attention', year: '5th', status: 'Withdrawn', img: 'https://unsplash.com' },
  ]);

  // Precise tracking parameters mapping matching exact criteria specifications
  const isAdmin = user?.role === 'Admin';
  const isSupervisor = user?.role === 'Supervisor';
  const isReadOnlyUser = user?.role === 'User';

  return (
    <div className="space-y-6 text-sm font-sans antialiased text-[#0f172a]">
      {/* Title Segment Block Matrix header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black tracking-tight text-[#0f172a]">All Members</h2>
          <p className="text-xs font-semibold text-[#94a3b8] mt-1">All Members Information</p>
        </div>
      </div>

      {/* Main Execution Action Toolbar Row Container Module */}
      <div className="bg-white p-4 border border-[#e2e8f0] rounded-2xl shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="relative w-full md:w-72">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#94a3b8]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </span>
          <input type="text" placeholder="Search" className="w-full pl-10 pr-4 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#0b3994]" />
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          {/* Conditional Create Mutators Restricted Under Regular ReadOnly Account Profiles */}
          {!isReadOnlyUser && (
            <button className="flex items-center gap-2 px-5 py-2.5 bg-[#0b3994] text-white font-bold rounded-xl shadow-md text-xs transition-colors hover:bg-opacity-95">
              <span>✚</span> Add Member
            </button>
          )}
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-[#e2e8f0] text-[#64748b] font-bold rounded-xl shadow-sm text-xs hover:bg-[#f8fafc]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
            Filter
          </button>
        </div>
      </div>

      {/* Roster Data Layout Structural Grid Table view */}
      <div className="bg-white border border-[#e2e8f0] rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-[#f1f5f9] text-left text-xs font-semibold text-[#64748b]">
            <thead className="bg-[#f8fafc] font-black uppercase text-[#94a3b8] tracking-wider">
              <tr>
                <th className="px-6 py-4">Member Name</th>
                <th className="px-6 py-4">Member ID</th>
                <th className="px-6 py-4">Division</th>
                <th className="px-6 py-4">Attendance</th>
                <th className="px-6 py-4">Year</th>
                <th className="px-6 py-4">Status</th>
                {!isReadOnlyUser && <th className="px-6 py-4 text-center">Action</th>}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f1f5f9] bg-white text-[#0f172a]">
              {members.map((m, idx) => (
                <tr key={idx} className="hover:bg-[#f8fafc]/50 transition-colors">
                  <td className="px-6 py-4 flex items-center gap-3">
                    <img className="h-8 w-8 rounded-full object-cover border border-[#e2e8f0]" src={m.img} alt={m.name} />
                    <span className="font-bold text-[#0f172a]">{m.name}</span>
                  </td>
                  <td className="px-6 py-4 font-mono text-[#64748b]">{m.id}</td>
                  <td className="px-6 py-4 font-medium">{m.div}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-2.5 py-1 rounded-lg text-[11px] font-bold ${m.attendance === 'Active' ? 'text-emerald-600 bg-emerald-50' : 'text-amber-600 bg-amber-50'}`}>
                      {m.attendance}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium">{m.year}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-2.5 py-1 rounded-lg text-[11px] font-bold ${m.status === 'On Campus' ? 'text-emerald-700 bg-emerald-50' : m.status === 'Off Campus' ? 'text-red-600 bg-red-50' : 'text-blue-700 bg-blue-50'}`}>
                      {m.status}
                    </span>
                  </td>
                  {/* Action Columns Render Rules Under Conditional Roles */}
                  {!isReadOnlyUser && (
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      <div className="flex items-center justify-center gap-3">
                        <button className="p-1 text-[#64748b] hover:text-[#0b3994]" aria-label="Edit Profile">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
                        </button>
                        {/* Only Admins display the delete structural button */}
                        {isAdmin && (
                          <button className="p-1 text-[#64748b] hover:text-red-600" aria-label="Delete Profile">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                          </button>
                        )}
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Unified Table Pagination Layout Block Row Component */}
        <div className="bg-white px-6 py-4 border-t border-[#f1f5f9] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-bold text-[#64748b]">
          <div className="flex items-center gap-2">
            <span>Showing</span>
            <select className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#0b3994]">
              <option>10</option>
              <option>25</option>
            </select>
          </div>
          <span className="text-[#94a3b8] font-medium">Showing 1 to 5 out of 60 records</span>
          <div className="flex gap-1">
            <button className="px-3 py-1.5 rounded-lg border border-[#e2e8f0] bg-white text-[#0f172a] hover:bg-[#f8fafc]">1</button>
            <button className="px-3 py-1.5 rounded-lg border border-transparent hover:bg-[#f1f5f9]">2</button>
            <button className="px-3 py-1.5 rounded-lg border border-transparent hover:bg-[#f1f5f9]">3</button>
          </div>
        </div>
      </div>
    </div>
  );
};
