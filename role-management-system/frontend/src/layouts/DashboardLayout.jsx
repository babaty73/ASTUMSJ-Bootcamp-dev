import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const DashboardLayout = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Exact navigation parameters mapping across role metrics
  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V4zM14 4a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V4zM4 14a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 14a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z', roles: ['Admin', 'Supervisor', 'User'] },
    { name: 'All Members', path: '/members', icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m16-10a4 4 0 11-8-0 4 4 0 018 0zm0 0a4 4 0 11-8-0 4 4 0 018 0z', roles: ['Admin', 'Supervisor', 'User'] },
    { name: 'Attendance', path: '/attendance', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', roles: ['Admin', 'Supervisor'] },
    { name: 'Settings', path: '/settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z', roles: ['Admin'] },
  ];

  const visibleLinks = navItems.filter(item => item.roles.includes(user?.role || 'Admin'));

  return (
    <div className="flex h-screen bg-[#f8fafc] text-[#0f172a] overflow-hidden antialiased text-sm">
      {/* Desktop Navigation Side Bar Panel */}
      <aside className="hidden lg:flex flex-col w-[260px] bg-[#f8fafc] border-r border-[#e2e8f0]">
        <div className="h-20 flex items-center px-8 border-b border-[#e2e8f0]">
          <div className="flex items-center gap-3">
            <svg className="h-6 w-8 text-[#0b3994]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-xl font-black text-[#0b3994] tracking-tight">Logoipsum</span>
          </div>
        </div>
        
        <nav className="flex-1 px-4 py-8 space-y-1">
          {visibleLinks.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path} className={`flex items-center gap-4 px-4 py-3.5 font-semibold rounded-xl transition-all ${isActive ? 'bg-[#e0f2fe] text-[#0b3994]' : 'text-[#64748b] hover:bg-[#f1f5f9] hover:text-[#0b3994]'}`}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Global Structural Light / Dark Dynamic Toggles Component Row */}
        <div className="p-4 border-t border-[#e2e8f0]">
          <div className="flex bg-[#f1f5f9] p-1 rounded-xl">
            <button className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-white text-[#0b3994] font-bold rounded-lg shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
              Light
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-2 px-3 text-[#64748b] font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
              Dark
            </button>
          </div>
        </div>
      </aside>

      {/* Main Container Viewport Scaffolding */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Universal Sub-Header Module Grid Row */}
        <header className="h-20 bg-white border-b border-[#e2e8f0] flex items-center justify-between px-8 z-20">
          <div className="flex items-center gap-4">
            <button onClick={() => setMobileOpen(true)} className="lg:hidden p-2 text-[#64748b]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
          
          <div className="flex items-center gap-6">
            {/* Global Context Core Header Search Component Module Layout */}
            <div className="relative w-64 hidden md:block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-[#94a3b8]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              </span>
              <input type="text" placeholder="Search" className="w-full pl-10 pr-4 py-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#0b3994]" />
            </div>

            {/* Notifications Icon Button */}
            <button className="p-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl text-[#64748b] relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
            </button>

            {/* Avatar Profile Grid Dropdown Column Trigger UI Segment */}
            <div className="flex items-center gap-3 pl-4 border-l border-[#e2e8f0]">
              <img className="h-10 w-10 rounded-full object-cover border border-[#e2e8f0]" src="https://unsplash.com" alt="Henok Assefa Avatar View" />
              <div className="text-left hidden sm:block">
                <p className="font-bold text-[#0f172a] leading-tight">Henok Assefa</p>
                <p className="text-xs font-semibold text-[#94a3b8] tracking-tight uppercase">{user?.role || 'UI/UX DESIGNER'}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Viewport Interior Canvas Area Container Module */}
        <main className="flex-1 overflow-y-auto bg-[#f8fafc] p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
