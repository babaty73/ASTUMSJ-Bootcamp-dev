export const MetricCard = ({ title, value, delta, isPositive, updateTime }) => {
  return (
    <div className="bg-white p-5 rounded-2xl border border-[#e2e8f0] shadow-sm flex flex-col justify-between min-h-[130px]">
      <div className="flex justify-between items-start">
        <span className="text-xs font-bold text-[#64748b] tracking-tight">{title}</span>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isPositive ? 'text-emerald-600 bg-emerald-50' : 'text-rose-600 bg-rose-50'}`}>
          {delta}
        </span>
      </div>
      <div className="mt-2">
        <h4 className="text-3xl font-black tracking-tight text-[#0f172a]">{value}</h4>
        <p className="text-[11px] font-medium text-[#94a3b8] mt-1">{updateTime}</p>
      </div>
    </div>
  );
};
