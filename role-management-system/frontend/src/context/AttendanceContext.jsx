import React, { createContext, useContext, useState } from 'react';

const AttendanceContext = createContext(null);

export const AttendanceProvider = ({ children }) => {
  const [attendanceRecords, setAttendanceRecords] = useState([
    { id: '1', date: '2026-08-08', memberName: 'Darlene Robertson', status: 'Present' },
    { id: '2', date: '2026-08-08', memberName: 'Floyd Miles', status: 'Absent' },
    { id: '3', date: '2026-08-08', memberName: 'Cody Fisher', status: 'Present' },
    { id: '4', date: '2026-08-08', memberName: 'Dianne Russell', status: 'Present' }
  ]);

  const updateRecordStatus = (id, status) => {
    setAttendanceRecords(prev =>
      prev.map(rec => rec.id === id ? { ...rec, status } : rec)
    );
  };

  const addRecord = (newRecord) => {
    setAttendanceRecords(prev => [
      { id: String(Date.now()), ...newRecord },
      ...prev
    ]);
  };

  return (
    <AttendanceContext.Provider value={{ attendanceRecords, updateRecordStatus, addRecord }}>
      {children}
    </AttendanceContext.Provider>
  );
};

export const useAttendance = () => useContext(AttendanceContext);
