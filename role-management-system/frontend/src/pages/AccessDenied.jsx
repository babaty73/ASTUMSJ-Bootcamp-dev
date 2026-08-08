import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertOctagon } from 'lucide-react';

export const AccessDenied = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f7fe] px-4 font-sans antialiased text-sm">
      <div className="w-full max-w-md bg-white rounded-[24px] border border-[#e2e8f0] p-8 text-center space-y-6 shadow-xl shadow-indigo-900/5">
        <div className="w-16 h-16 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center mx-auto">
          <AlertOctagon className="w-8 h-8" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-black text-[#0f172a] tracking-tight">Access Denied</h3>
          <p className="text-[#64748b] font-medium leading-relaxed">
            Your current account role assignment lacks specific execution permissions to view this secure viewport profile matrix.
          </p>
        </div>

        <button onClick={() => navigate('/dashboard')} className="w-full py-3.5 bg-[#0b3994] text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-md hover:bg-opacity-95 transition-all">
          Return to Dashboard Core
        </button>
      </div>
    </div>
  );
};
