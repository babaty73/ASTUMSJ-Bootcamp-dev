import React, { useState } from 'react';

export const Settings = () => {
  const [events, setEvents] = useState(true);
  const [publicPhone, setPublicPhone] = useState(true);

  return (
    <div className="space-y-6 text-sm font-sans antialiased text-[#0f172a]">
      <div>
        <h2 className="text-2xl font-black tracking-tight text-[#0f172a]">Attendance</h2>
        <p className="text-xs font-semibold text-[#94a3b8] mt-1">All Attendance &gt;</p>
      </div>

      {/* Main Configurations Box Frame Area Container */}
      <div className="bg-white border border-[#e2e8f0] rounded-2xl shadow-sm p-8 max-w-4xl space-y-8">
        
        {/* Row 1 - Dropdown Menu Select Component Alignment */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#f1f5f9]">
          <div className="space-y-1">
            <h4 className="font-extrabold text-[#0f172a] tracking-tight text-base">Appearance</h4>
            <p className="text-xs font-semibold text-[#94a3b8]">Customize how your theme looks on your device</p>
          </div>
          <div className="relative">
            <select className="appearance-none bg-white border border-[#cbd5e1] text-[#0f172a] font-bold text-xs rounded-xl pl-4 pr-10 py-2.5 w-32 focus:outline-none focus:ring-1 focus:ring-[#0b3994] shadow-sm">
              <option>Light</option>
              <option>Dark</option>
            </select>
            <span className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-[#64748b]">▼</span>
          </div>
        </div>

        {/* Row 2 - Automatically Add Events Slider switch module */}
        <div className="flex items-center justify-between gap-8 pb-6 border-b border-[#f1f5f9]">
          <div className="space-y-1">
            <h4 className="font-extrabold text-[#0f172a] tracking-tight text-base">Automatically Add Events to Calendar</h4>
            <p className="text-xs font-semibold text-[#94a3b8] max-w-2xl leading-relaxed">Save time by auto-adding events to your calendar, or manually enter them for more control.</p>
          </div>
          <button onClick={() => setEvents(!events)} className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${events ? 'bg-[#22c55e]' : 'bg-[#cbd5e1]'}`}>
            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${events ? 'translate-x-6' : 'translate-x-0'}`} />
          </button>
        </div>

        {/* Row 3 - Phone Visibility Configuration element node switch */}
        <div className="flex items-center justify-between gap-8">
          <div className="space-y-1">
            <h4 className="font-extrabold text-[#0f172a] tracking-tight text-base">Make your Phone Public</h4>
            <p className="text-xs font-semibold text-[#94a3b8] max-w-2xl leading-relaxed">Keep your phone private for safety, or share it for convenience.</p>
          </div>
          <button onClick={() => setPublicPhone(!publicPhone)} className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${publicPhone ? 'bg-[#22c55e]' : 'bg-[#cbd5e1]'}`}>
            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${publicPhone ? 'translate-x-6' : 'translate-x-0'}`} />
          </button>
        </div>

      </div>
    </div>
  );
};
