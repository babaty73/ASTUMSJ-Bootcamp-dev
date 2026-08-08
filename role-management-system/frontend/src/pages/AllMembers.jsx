import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { MemberModal } from '../components/MemberModal';

export const AllMembers = () => {
  const { user } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  
  const [members, setMembers] = useState([
    { id: 'UGR/25605/14', name: 'Darlene Robertson', div: 'Design', attendance: 'Active', year: '4th', status: 'On Campus', img: 'https://unsplash.com' },
    { id: 'UGR/25605/14', name: 'Floyd Miles', div: 'Developement', attendance: 'Active', year: '5th', status: 'Off Campus', img: 'https://unsplash.com' },
    { id: 'UGR/25605/14', name: 'Cody Fisher', div: 'CPD', attendance: 'Needs Attention', year: '3rd', status: 'Withdrawn', img: 'https://unsplash.com' },
  ]);

  const isAdmin = user?.role === 'Admin';
  const isReadOnlyUser = user?.role === 'User';

  const handleCreateSubmit = (data) => {
    const newProfile = {
      id: `UGR/${Math.floor(10000 + Math.random() * 90000)}/14`,
      name: data.fullName,
      div: data.division,
      attendance: data.attendanceStatus,
      year: data.year,
      status: data.campusStatus,
      img: 'https://unsplash.com'
    };
    setMembers(prev => [newProfile, ...prev]);
    setModalOpen(false);
  };

  const triggerEdit = (memberItem) => {
    setEditingMember(memberItem);
    setModalOpen(true);
  };

  return (
    <div className="space-y-6 text-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-[#0f172a] dark:text-white">All Members</h2>
          <p className="text-xs font-semibold text-[#94a3b8]">Centralized index records roster management matrix</p>
        </div>
      </div>

      <div className="bg-white dark:bg-[#1e293b] p-4 border border-[#e2e8f0] dark:border-[#334155] rounded-2xl flex justify-between items-center">
        <input type="text" placeholder="Search members" className="pl-4 pr-4 py-2 bg-[#f8fafc] dark:bg-[#0f172a] border border-[#e2e8f0] dark:border-[#334155] rounded-xl text-xs" />
        
        {!isReadOnlyUser && (
          <button onClick={() => { setEditingMember(null); setModalOpen(true); }} className="px-5 py-2.5 bg-[#0b3994] text-white font-bold rounded-xl text-xs">
            ✚ Add Member
          </button>
        )}
      </div>

      <div className="bg-white dark:bg-[#1e293b] border border-[#e2e8f0] dark:border-[#334155] rounded-2xl overflow-hidden">
        <table className="min-w-full divide-y divide-[#f1f5f9] dark:divide-[#334155] text-left text-xs">
          <thead className="bg-[#f8fafc] dark:bg-[#0f172a] text-[#94a3b8] font-bold uppercase">
            <tr>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Division</th>
              <th className="px-6 py-4">Attendance</th>
              {!isReadOnlyUser && <th className="px-6 py-4 text-center">Action</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f1f5f9] dark:divide-[#334155] text-[#0f172a] dark:text-white">
            {members.map((m, idx) => (
              <tr key={idx} className="hover:bg-[#f8fafc]/40 dark:hover:bg-[#1e293b]/40">
                <td className="px-6 py-4 flex items-center gap-3">
                  <img className="h-8 w-8 rounded-full object-cover" src={m.img} alt="" />
                  <span className="font-bold">{m.name}</span>
                </td>
                <td className="px-6 py-4 font-mono text-[#64748b] dark:text-[#94a3b8]">{m.id}</td>
                <td className="px-6 py-4 font-medium">{m.div}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 rounded bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 font-bold">{m.attendance}</span>
                </td>
                {!isReadOnlyUser && (
                  <td className="px-6 py-4 text-center">
                    <button onClick={() => triggerEdit(m)} className="text-indigo-600 font-bold mr-2">Modify</button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Render form modal sheet securely across layers */}
      <MemberModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onSubmit={handleCreateSubmit} member={editingMember} />
    </div>
  );
};
