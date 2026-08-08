import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { authService } from '../services/api';

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setError('');
    setLoading(true);
    try {
      const response = await authService.login(data);
      login(response.data.user, response.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid validation token signature execution.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-white antialiased font-sans">
      {/* Left Design Card Bracket Section Layout Container */}
      <div className="lg:col-span-7 bg-[#f4f7fe] m-4 rounded-[32px] flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8 bg-transparent">
          {/* Logo Structure Header Context Segment */}
          <div className="flex items-center gap-3 text-[#0b3994]">
            <svg className="h-8 w-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-2xl font-black tracking-tight">Logoipsum</span>
          </div>

          <div className="pt-4">
            <h2 className="text-3xl font-black text-[#0f172a] tracking-tight flex items-center gap-2">
              Welcome 👋
            </h2>
            <p className="text-sm font-medium text-[#94a3b8] mt-1.5">Please login here</p>
          </div>

          {error && (
            <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-xs font-semibold">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 pt-2">
            <div className="relative bg-white border border-[#cbd5e1] rounded-xl px-4 py-2.5 focus-within:ring-1 focus-within:ring-[#0b3994] transition-all shadow-sm">
              <label className="block text-[11px] font-bold text-[#94a3b8] uppercase tracking-wider">Email Address</label>
              <input type="email" defaultValue="robertallen@example.com" {...register('email', { required: true })} className="block w-full bg-transparent border-0 p-0 text-[#0f172a] text-sm font-medium focus:ring-0 focus:outline-none mt-0.5" />
            </div>

            <div className="relative bg-white border border-[#cbd5e1] rounded-xl px-4 py-2.5 focus-within:ring-1 focus-within:ring-[#0b3994] transition-all shadow-sm flex items-center justify-between">
              <div className="flex-1">
                <label className="block text-[11px] font-bold text-[#94a3b8] uppercase tracking-wider">Password</label>
                <input type={showPass ? 'text' : 'password'} defaultValue="••••••••••••••" {...register('password', { required: true })} className="block w-full bg-transparent border-0 p-0 text-[#0f172a] text-sm font-medium focus:ring-0 focus:outline-none mt-0.5 tracking-widest" />
              </div>
              <button type="button" onClick={() => setShowPass(!showPass)} className="text-[#94a3b8] hover:text-[#64748b] ml-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d={showPass ? "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" : "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"} />
                </svg>
              </button>
            </div>

            <div className="flex items-center justify-between px-1">
              <label className="flex items-center gap-3 cursor-pointer text-sm font-bold text-[#0f172a]">
                <input type="checkbox" defaultChecked className="w-5 h-5 rounded-md border-[#cbd5e1] text-[#0b3994] focus:ring-0" />
                Remember Me
              </label>
            </div>

            <button type="submit" disabled={loading} className="w-full py-4 px-4 bg-[#0b3994] hover:bg-[#092d76] text-white text-sm font-bold rounded-xl shadow-lg shadow-blue-900/10 transition-colors tracking-wide mt-2">
              {loading ? 'Logging In...' : 'Login'}
            </button>
          </form>
        </div>
      </div>

      {/* Right Blank Structural Visual Design Anchor Space */}
      <div className="hidden lg:col-span-5 lg:block bg-white" />
    </div>
  );
};
