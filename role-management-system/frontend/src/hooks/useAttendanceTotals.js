import { useMemo } from 'react';

export const useAttendanceTotals = (recordsArray = []) => {
  return useMemo(() => {
    const totalCount = recordsArray.length;
    const presentCount = recordsArray.filter(r => r.status === 'Present').length;
    const absentCount = totalCount - presentCount;
    const percentageRate = totalCount > 0 ? Math.round((presentCount / totalCount) * 100) : 0;

    return {
      total: totalCount,
      present: presentCount,
      absent: absentCount,
      rateString: `${percentageRate}%`
    };
  }, [recordsArray]);
};
