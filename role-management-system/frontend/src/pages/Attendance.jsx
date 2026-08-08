import React, { useState } from 'react';

export const Attendance = () => {
  const [attendance, setAttendance] = useState({
    '1': 'Present', '2': 'Absent', '3': 'Present', '4': 'Present'
  });

  const members = [
    { id: '1', name: 'Darlene Robertson', img: 'https://unsplash.com' },
    { id: '2', name: 'Floyd Miles', img: 'https://unsplash.com' },
    { id: '3', name: 'Cody Fisher', img: 'https://unsplash.com' },
    { id: '4', name: 'Dianne Russell', img: 'https://unsplash.com' }
  ];

  return (
    <div className="space-y-6 text-sm font-sans antialiased text-[#0f172a]">
      {/* Title Segment Block with Breadcrumb Trails */}
      <div>
        <h2 className="text-2xl font-black tracking-tight text-[#0f172a]">Attendance</h2>
        <p className="text-xs font-semibold text-[#94a3b8] mt-1">All Attendance &gt; Attendance &gt; Group 1</p>
      </div>

      {/* Toolbar Layout Controls Container */}
      <div className="bg-white p-4 border border-[#e2e8f0] rounded-2xl shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="relative w-full md:w-72">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#94a3b8]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </span>
          <input type="text" placeholder="Search" className="w-full pl-10 pr-4 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#0b3994]" />
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <button className="px-6 py-2.5 bg-[#0b3994] text-white font-bold rounded-xl shadow-md text-xs hover:bg-opacity-95 transition-colors">
            Save
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-[#e2e8f0] text-[#64748b] font-bold rounded-xl shadow-sm text-xs hover:bg-[#f8fafc]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
            Filter
          </button>
        </div>
      </div>

      {/* Grid Roster Rows View container viewport */}
      <div className="bg-white border border-[#e2e8f0] rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-[#f1f5f9] text-left text-xs font-semibold text-[#64748b]">
            <thead className="bg-[#f8fafc] font-black uppercase text-[#94a3b8] tracking-wider">
              <tr>
                <th className="px-6 py-4 w-1/3">Member Name</th>
                <th className="px-6 py-4 text-center">Attendance</th>
                <th className="px-6 py-4 text-center w-1/4">Excused</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f1f5f9] bg-white text-[#0f172a]">
              {members.map((m) => (
                <tr key={m.id} className="hover:bg-[#f8fafc]/50 transition-colors">
                  <td className="px-6 py-4 flex items-center gap-3">
                    <img className="h-8 w-8 rounded-full object-cover border border-[#e2e8f0]" src={m.img} alt={m.name} />
                    <span className="font-bold text-[#0f172a]">{m.name}</span>
                  </td>
                  <td className="px-6 py-4">
                    {/* Segmented Button Selection Component Block Framework */}
                    <div className="flex max-w-xs mx-auto bg-[#f1f5f9] p-1 rounded-xl">
                      <button onClick={() => setAttendance(prev => ({ ...prev, [m.id]: 'Present' }))} className={`flex-1 text-center py-2 text-xs font-bold rounded-lg transition-all ${attendance[m.id] === 'Present' ? 'bg-white text-[#0f172a] shadow-sm' : 'text-[#94a3b8]'}`}>
                        Present
                      </button>
                      <button onClick={() => setAttendance(prev => ({ ...prev, [m.id]: 'Absent' }))} className={`flex-1 text-center py-2 text-xs font-bold rounded-lg transition-all ${attendance[m.id] === 'Absent' ? 'bg-white text-[#64748b] shadow-sm' : 'text-[#94a3b8]'}`}>
                        Absent
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="px-4 py-2 bg-[#0b3994] text-white font-bold text-xs rounded-xl shadow-sm hover:bg-opacity-95">
                      Heads Up
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Consistent Pagination block section row footer segment */}
        <div className="bg-white px-6 py-4 border-t border-[#f1f5f9] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-bold text-[#64748b]">
          <div className="flex items-center gap-2">
            <span>Showing</span>
            <select className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#0b3994]">
              <option>10</option>
            </select>
          </div>
          <span className="text-[#94a3b8] font-medium">Showing 1 to 4 out of 60 records</span>
          <div className="flex gap-1">
            <button className="px-3 py-1.5 rounded-lg border border-[#e2e8f0] bg-white text-[#0f172a]">1</button>
          </div>
        </div>
      </div>
    </div>
  );
};
