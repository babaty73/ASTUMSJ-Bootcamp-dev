import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ShieldCheck, Eye, EyeOff } from 'lucide-react';

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

    const onSubmit = async (data) => {
    setError('');
    setLoading(true);
    try {
      // Calls your local context profile generator directly instead of authService.login(data)
      await login(data.email, data.password);
      navigate('/dashboard');
    } catch (err) {
      setError('Authentication sequence failed.', err);
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
            <ShieldCheck className="h-8 w-10" />
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
                {showPass ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
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
