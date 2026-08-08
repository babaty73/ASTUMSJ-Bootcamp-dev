import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const MemberModal = ({ isOpen, onClose, onSubmit, member }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  // Reset form fields whenever the member target selection switches states
  useEffect(() => {
    if (member) {
      reset(member);
    } else {
      reset({
        fullName: '',
        email: '',
        division: '',
        year: '',
        attendanceStatus: 'Active',
        campusStatus: 'On Campus'
      });
    }
  }, [member, reset, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm antialiased font-sans text-sm text-[#0f172a]">
      <div className="bg-white w-full max-w-lg rounded-[24px] border border-[#e2e8f0] shadow-xl p-8 space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-black tracking-tight text-[#0f172a]">
            {member ? 'Modify Member Profile' : 'Register New Member'}
          </h3>
          <button onClick={onClose} className="text-[#94a3b8] hover:text-[#64748b] text-sm font-bold">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="sm:col-span-2 bg-[#f8fafc] border border-[#cbd5e1] rounded-xl px-4 py-2 focus-within:ring-1 focus-within:ring-[#0b3994]">
              <label className="block text-[10px] font-bold text-[#94a3b8] uppercase">Full Name</label>
              <input type="text" {...register('fullName', { required: 'Name attribute is required' })} className="w-full bg-transparent border-0 p-0 text-[#0f172a] text-xs font-bold focus:ring-0 focus:outline-none mt-0.5" />
              {errors.fullName && <p className="text-red-500 text-[10px] font-bold mt-0.5">{errors.fullName.message}</p>}
            </div>

            <div className="sm:col-span-2 bg-[#f8fafc] border border-[#cbd5e1] rounded-xl px-4 py-2 focus-within:ring-1 focus-within:ring-[#0b3994]">
              <label className="block text-[10px] font-bold text-[#94a3b8] uppercase">Email Address</label>
              <input type="email" {...register('email', { required: 'Email address string is required' })} className="w-full bg-transparent border-0 p-0 text-[#0f172a] text-xs font-bold focus:ring-0 focus:outline-none mt-0.5" />
              {errors.email && <p className="text-red-500 text-[10px] font-bold mt-0.5">{errors.email.message}</p>}
            </div>

            <div className="bg-[#f8fafc] border border-[#cbd5e1] rounded-xl px-4 py-2 focus-within:ring-1 focus-within:ring-[#0b3994]">
              <label className="block text-[10px] font-bold text-[#94a3b8] uppercase">Division</label>
              <input type="text" {...register('division', { required: 'Division key label required' })} className="w-full bg-transparent border-0 p-0 text-[#0f172a] text-xs font-bold focus:ring-0 focus:outline-none mt-0.5" />
              {errors.division && <p className="text-red-500 text-[10px] font-bold mt-0.5">{errors.division.message}</p>}
            </div>

            <div className="bg-[#f8fafc] border border-[#cbd5e1] rounded-xl px-4 py-2 focus-within:ring-1 focus-within:ring-[#0b3994]">
              <label className="block text-[10px] font-bold text-[#94a3b8] uppercase">Year</label>
              <input type="text" {...register('year', { required: 'Year timeline metric required' })} className="w-full bg-transparent border-0 p-0 text-[#0f172a] text-xs font-bold focus:ring-0 focus:outline-none mt-0.5" />
              {errors.year && <p className="text-red-500 text-[10px] font-bold mt-0.5">{errors.year.message}</p>}
            </div>

          </div>

          <div className="flex gap-3 justify-end pt-4 border-t border-[#f1f5f9]">
            <button type="button" onClick={onClose} className="px-5 py-2.5 bg-white border border-[#e2e8f0] text-[#64748b] font-bold rounded-xl text-xs">
              Cancel
            </button>
            <button type="submit" className="px-5 py-2.5 bg-[#0b3994] text-white font-bold rounded-xl text-xs shadow-md">
              Confirm Configuration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
