import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { authService } from '../services/api';

export const Signup = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setError('');
    setLoading(true);
    try {
      const { confirmPassword, ...payload } = data;
      await authService.signup(payload);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration sequence interrupted.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f7fe] flex items-center justify-center p-6 font-sans antialiased text-sm">
      <div className="w-full max-w-lg bg-white rounded-[24px] p-8 border border-[#e2e8f0] shadow-xl shadow-indigo-900/5 space-y-6">
        <div>
          <h2 className="text-2xl font-black text-[#0f172a] tracking-tight">Create Account</h2>
          <p className="text-xs font-semibold text-[#94a3b8] mt-1">
            Already have an account?{' '}
            <Link to="/login" className="text-[#0b3994] underline font-bold">Log in here</Link>
          </p>
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-100 text-red-600 rounded-xl text-xs font-semibold">{error}</div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="sm:col-span-2 bg-[#f8fafc] border border-[#cbd5e1] rounded-xl px-4 py-2 focus-within:ring-1 focus-within:ring-[#0b3994]">
              <label className="block text-[10px] font-bold text-[#94a3b8] uppercase">Full Name</label>
              <input type="text" {...register('fullName', { required: 'Name is required' })} className="w-full bg-transparent border-0 p-0 text-[#0f172a] text-xs font-bold focus:ring-0 focus:outline-none mt-0.5" placeholder="John Doe" />
              {errors.fullName && <p className="text-red-500 text-[10px] font-bold mt-0.5">{errors.fullName.message}</p>}
            </div>

            <div className="sm:col-span-2 bg-[#f8fafc] border border-[#cbd5e1] rounded-xl px-4 py-2 focus-within:ring-1 focus-within:ring-[#0b3994]">
              <label className="block text-[10px] font-bold text-[#94a3b8] uppercase">Email Address</label>
              <input type="email" {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid format' } })} className="w-full bg-transparent border-0 p-0 text-[#0f172a] text-xs font-bold focus:ring-0 focus:outline-none mt-0.5" placeholder="john@example.com" />
              {errors.email && <p className="text-red-500 text-[10px] font-bold mt-0.5">{errors.email.message}</p>}
            </div>

            <div className="bg-[#f8fafc] border border-[#cbd5e1] rounded-xl px-4 py-2 focus-within:ring-1 focus-within:ring-[#0b3994]">
              <label className="block text-[10px] font-bold text-[#94a3b8] uppercase">Password</label>
              <input type="password" {...register('password', { required: 'Password required', minLength: { value: 8, message: 'Min 8 chars' } })} className="w-full bg-transparent border-0 p-0 text-[#0f172a] text-xs font-bold focus:ring-0 focus:outline-none mt-0.5" placeholder="••••••••" />
              {errors.password && <p className="text-red-500 text-[10px] font-bold mt-0.5">{errors.password.message}</p>}
            </div>

            <div className="bg-[#f8fafc] border border-[#cbd5e1] rounded-xl px-4 py-2 focus-within:ring-1 focus-within:ring-[#0b3994]">
              <label className="block text-[10px] font-bold text-[#94a3b8] uppercase">Confirm Password</label>
              <input type="password" {...register('confirmPassword', { required: 'Confirm selection', validate: (val) => watch('password') === val || 'Mismatch' })} className="w-full bg-transparent border-0 p-0 text-[#0f172a] text-xs font-bold focus:ring-0 focus:outline-none mt-0.5" placeholder="••••••••" />
              {errors.confirmPassword && <p className="text-red-500 text-[10px] font-bold mt-0.5">{errors.confirmPassword.message}</p>}
            </div>

            <div className="bg-[#f8fafc] border border-[#cbd5e1] rounded-xl px-4 py-2 focus-within:ring-1 focus-within:ring-[#0b3994]">
              <label className="block text-[10px] font-bold text-[#94a3b8] uppercase">Division</label>
              <input type="text" {...register('division', { required: 'Division required' })} className="w-full bg-transparent border-0 p-0 text-[#0f172a] text-xs font-bold focus:ring-0 focus:outline-none mt-0.5" placeholder="Design" />
              {errors.division && <p className="text-red-500 text-[10px] font-bold mt-0.5">{errors.division.message}</p>}
            </div>

            <div className="bg-[#f8fafc] border border-[#cbd5e1] rounded-xl px-4 py-2 focus-within:ring-1 focus-within:ring-[#0b3994]">
              <label className="block text-[10px] font-bold text-[#94a3b8] uppercase">Year</label>
              <input type="text" {...register('year', { required: 'Year required' })} className="w-full bg-transparent border-0 p-0 text-[#0f172a] text-xs font-bold focus:ring-0 focus:outline-none mt-0.5" placeholder="4th" />
              {errors.year && <p className="text-red-500 text-[10px] font-bold mt-0.5">{errors.year.message}</p>}
            </div>

          </div>

          <button type="submit" disabled={loading} className="w-full py-3.5 bg-[#0b3994] hover:bg-[#092d76] text-white text-xs font-bold rounded-xl shadow-md transition-colors tracking-wide uppercase mt-2">
            {loading ? 'Submitting Registration...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};
