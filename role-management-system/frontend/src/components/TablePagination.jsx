import React from 'react';

export const TablePagination = ({ totalRecords, showingCount, onPageChange }) => {
  return (
    <div className="bg-white px-6 py-4 border-t border-[#f1f5f9] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-bold text-[#64748b]">
      <div className="flex items-center gap-2">
        <span>Showing</span>
        <select className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#0b3994]">
          <option>10</option>
          <option>25</option>
          <option>50</option>
        </select>
      </div>
      <span className="text-[#94a3b8] font-medium">Showing 1 to {showingCount} out of {totalRecords} records</span>
      <div className="flex gap-1">
        <button onClick={() => onPageChange(1)} className="px-3 py-1.5 rounded-lg border border-[#e2e8f0] bg-white text-[#0f172a] hover:bg-[#f8fafc]">1</button>
        <button onClick={() => onPageChange(2)} className="px-3 py-1.5 rounded-lg border border-transparent hover:bg-[#f1f5f9]">2</button>
      </div>
    </div>
  );
};
