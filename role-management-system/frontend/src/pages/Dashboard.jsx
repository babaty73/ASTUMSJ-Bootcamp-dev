import React from 'react';
import { CalendarDays } from 'lucide-react';

export const Dashboard = () => {
  const cards = [
    { title: 'Total Members', val: '162', delta: '▲ 12%', color: 'text-emerald-600 bg-emerald-50', update: 'Update: July 16, 2025' },
    { title: 'Total Divisions', val: '5', delta: '▲ 5%', color: 'text-emerald-600 bg-emerald-50', update: 'Update: July 14, 2025' },
    { title: 'Attendance Rate', val: '68%', delta: '▼ 8%', color: 'text-rose-600 bg-rose-50', update: 'Update: July 14, 2025' },
    { title: 'Upcoming Sessions', val: '12', delta: '▲ 12%', color: 'text-emerald-600 bg-emerald-50', update: 'Update: July 10, 2025' },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 text-sm font-sans antialiased text-[#0f172a]">
      {/* Left Canvas Content Matrix */}
      <div className="xl:col-span-8 space-y-6">
        
        {/* Banner Action Announcement Block Component Module */}
        <div className="bg-[#3b82f6] text-white p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between min-h-[200px] shadow-sm">
          <span className="absolute top-4 right-4 bg-red-500/30 text-white font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">Members</span>
          <div className="max-w-md space-y-2">
            <h3 className="text-xs font-bold tracking-widest uppercase opacity-80">Upcoming Event</h3>
            <p className="text-xl font-extrabold leading-snug tracking-tight">Cross-division knowledge-sharing</p>
          </div>
          <button className="mt-6 self-start px-6 py-3 bg-[#0b3994] text-white text-xs font-bold rounded-xl shadow-md transition-all hover:bg-opacity-90 flex items-center gap-2">
            <CalendarDays className="w-4 h-4" />
            Add to calendar
          </button>
        </div>

        {/* Quad Metrics Cards Tracking Matrix Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((c, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl border border-[#e2e8f0] shadow-sm flex flex-col justify-between min-h-[130px]">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-[#64748b] tracking-tight">{c.title}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${c.color}`}>{c.delta}</span>
              </div>
              <div className="mt-2">
                <h4 className="text-3xl font-black tracking-tight text-[#0f172a]">{c.val}</h4>
                <p className="text-[11px] font-medium text-[#94a3b8] mt-1">{c.update}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Inline Vector Analytics Chart Mockup Box Frame Area component */}
        <div className="bg-white p-6 rounded-2xl border border-[#e2e8f0] shadow-sm space-y-6">
          <div className="flex justify-between items-center pb-2 border-b border-[#f1f5f9]">
            <h4 className="font-extrabold text-[#0f172a] tracking-tight">Attendance Overview</h4>
            <div className="flex gap-4 text-xs font-bold text-[#94a3b8]">
              <span className="text-[#0b3994] pb-2 border-b-2 border-[#0b3994]">This year</span>
              <span>Last year</span>
            </div>
          </div>
          <div className="h-48 flex items-end justify-between px-2 pt-4 relative">
            <div className="absolute left-0 bottom-12 w-full border-t border-dashed border-[#e2e8f0]" />
            <div className="absolute left-0 bottom-24 w-full border-t border-dashed border-[#e2e8f0]" />
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map((m, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 w-full">
                <div className="w-1.5 bg-[#3b82f6] rounded-t-full transition-all" style={{ height: `${[40, 55, 35, 75, 60, 85, 95][idx]}px` }} />
                <span className="text-[11px] font-bold text-[#94a3b8]">{m}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Canvas Column Sidebar Context Panel Elements Component Box */}
      <div className="xl:col-span-4 bg-white border border-[#e2e8f0] rounded-2xl p-6 shadow-sm space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="font-extrabold text-base tracking-tight text-[#0f172a]">Session</h3>
          <button className="p-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl text-[#64748b]">
            <CalendarDays className="w-4 h-4" />
          </button>
        </div>

        {/* Minimal High-Fidelity Calendar Element Component Framework */}
        <div className="space-y-4">
          <div className="flex justify-between items-center text-xs font-bold text-[#0f172a] px-1">
            <button className="p-1.5 hover:bg-[#f1f5f9] rounded-lg">◀</button>
            <span className="tracking-wide">July, 2023</span>
            <button className="p-1.5 hover:bg-[#f1f5f9] rounded-lg">▶</button>
          </div>
          <div className="grid grid-cols-7 gap-y-3.5 text-center text-xs font-bold text-[#64748b]">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => <span key={d} className="text-[#94a3b8] text-[11px] font-black uppercase">{d}</span>)}
            {Array.from({ length: 30 }).map((_, idx) => {
              const day = idx + 1;
              const isSelected = day === 6 || day === 8;
              return (
                <span key={idx} className={`py-1.5 flex items-center justify-center rounded-xl mx-auto w-8 h-8 cursor-pointer ${isSelected ? 'bg-[#0b3994] text-white shadow-md' : 'hover:bg-[#f1f5f9] text-[#0f172a]'}`}>
                  {day}
                </span>
              );
            })}
          </div>
        </div>

        {/* Agenda Events Stack Tracking Section List */}
        <div className="border-t border-[#f1f5f9] pt-6 space-y-5">
          <div className="flex justify-between items-center">
            <span className="text-xs font-extrabold text-[#94a3b8] tracking-tight">Wednesday, 06 July 2025</span>
            <span className="text-[#94a3b8] cursor-pointer font-bold">•••</span>
          </div>

          <div className="space-y-4">
            {[
              { time: '09:30', cat: 'CPD', name: 'Contest in CPD Division' },
              { time: '12:00', cat: 'Development Division', name: 'Development Weekly Sessions' },
              { time: '01:30', cat: 'Cyber', name: 'Cyber Weekly Sessions' }
            ].map((ev, idx) => (
              <div key={idx} className="flex gap-4 items-start border-l-2 border-[#e2e8f0] pl-4 hover:border-[#0b3994] transition-all">
                <span className="font-extrabold text-[#0f172a] whitespace-nowrap tracking-tight">{ev.time}</span>
                <div>
                  <h5 className="text-[11px] font-bold text-[#94a3b8] uppercase tracking-wide">{ev.cat}</h5>
                  <p className="font-bold text-[#0f172a] mt-0.5 leading-tight">{ev.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
