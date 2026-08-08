import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import  logo  from "../assets/logo.png";
import { LayoutGrid, Users, CalendarDays,  Settings , Sun, Moon, Menu} from 'lucide-react';

export const DashboardLayout = () => {
  const { user, logout } = useAuth();
  const { theme, toggleToLight, toggleToDark } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutGrid, roles: ['Admin', 'Supervisor', 'User'] },
    { name: 'All Members', path: '/members', icon: Users, roles: ['Admin', 'Supervisor', 'User'] },
    { name: 'Attendance', path: '/attendance', icon: CalendarDays, roles: ['Admin', 'Supervisor'] },
    { name: 'Settings', path: '/settings', icon:  Settings, roles: ['Admin'] },
  ];

  const visibleLinks = navItems.filter(item => item.roles.includes(user?.role || 'Admin'));

  const handleLogoutClick = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-[#f8fafc] dark:bg-[#0f172a] text-[#0f172a] dark:text-[#f8fafc] overflow-hidden antialiased text-sm transition-colors duration-200">
      
      {/* Desktop Navigation Drawer */}
      <aside className="hidden lg:flex flex-col w-[260px] bg-[#f8fafc] dark:bg-[#1e293b] border-r border-[#e2e8f0] dark:border-[#334155]">
        <div className="h-20 flex items-center px-8 border-b border-[#e2e8f0] dark:border-[#334155]">
            <div className="h-20 flex items-center px-8 border-b border-[#e2e8f0] dark:border-[#334155]">
                    <img
                      src={logo}
                      alt="Role Management System"
                      className="absolute left-[50px] top-[61px] w-[152.57px] h-[24px]"
                    />
            </div>

        </div>
        
        <nav className="flex-1 px-4 py-8 space-y-1">
          {visibleLinks.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link key={item.path} to={item.path} className={`flex items-center gap-4 px-4 py-3.5 font-semibold rounded-xl transition-all ${isActive ? 'bg-[#e0f2fe] dark:bg-[#0369a1] text-[#0b3994] dark:text-white' : 'text-[#64748b] dark:text-[#94a3b8] hover:bg-[#f1f5f9] dark:hover:bg-[#334155] hover:text-[#0b3994] dark:hover:text-white'}`}>
                <Icon className="w-5 h-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Dynamic Light/Dark Mode Controls Section */}
        <div className="p-4 border-t border-[#e2e8f0] dark:border-[#334155]">
          <div className="flex bg-[#f1f5f9] dark:bg-[#0f172a] p-1 rounded-xl">
            <button onClick={toggleToLight} className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 font-bold rounded-lg shadow-sm transition-all ${theme === 'light' ? 'bg-white text-[#0b3994]' : 'text-[#64748b] dark:text-[#94a3b8]'}`}>
              <Sun className="w-4 h-4" />
              Light
            </button>
            <button onClick={toggleToDark} className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 font-bold rounded-lg transition-all ${theme === 'dark' ? 'bg-[#1e293b] text-white shadow-sm' : 'text-[#64748b]'}`}>
              <Moon className="w-4 h-4" />
              Dark
            </button>
          </div>
          <button onClick={handleLogoutClick} className="w-full mt-3 py-2 text-center text-xs font-bold text-red-600 hover:text-red-700 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 rounded-xl transition-colors">
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Scaffold Workspace Grid */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 bg-white dark:bg-[#1e293b] border-b border-[#e2e8f0] dark:border-[#334155] flex items-center justify-between px-8 z-20">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 text-[#64748b] dark:text-[#94a3b8]">
              <Menu className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 pl-4">
              <img className="h-10 w-10 rounded-full object-cover border border-[#e2e8f0] dark:border-[#334155]" src="https://unsplash.com" alt="Avatar User Frame" />
              <div className="text-left hidden sm:block">
                <p className="font-bold text-[#0f172a] dark:text-white leading-tight">Henok Assefa</p>
                <p className="text-xs font-semibold text-[#94a3b8] tracking-tight uppercase">{user?.role || 'Operator'}</p>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-[#f8fafc] dark:bg-[#0f172a] p-8 transition-colors duration-200">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
