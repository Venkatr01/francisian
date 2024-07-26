import React from 'react';

const Timetable1 = (option) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="bg-yellow-500 text-white px-4 py-2 border border-gray-300">DAY / TIME</th>
            <th className="bg-green-700 text-white px-4 py-2 border border-gray-300">8:30-9:30 I</th>
            <th className="bg-green-700 text-white px-4 py-2 border border-gray-300">9:30-10:25 II</th>
            <th className="bg-green-700 text-white px-4 py-2 border border-gray-300">10:25-10:50</th>
            <th className="bg-green-700 text-white px-4 py-2 border border-gray-300">10:50-11:50 III</th>
            <th className="bg-green-700 text-white px-4 py-2 border border-gray-300">11:50-12:45 IV</th>
            <th className="bg-green-700 text-white px-4 py-2 border border-gray-300">12:45-1:30</th>
            <th className="bg-green-700 text-white px-4 py-2 border border-gray-300">1:30-2:30 V</th>
            <th className="bg-green-700 text-white px-4 py-2 border border-gray-300">2:30-3:30 VI</th>
          </tr>
        </thead>
        <tbody>
          {[
            { day: 'DAY', times: ['AI', 'AI LAB', 'BREAK', 'SE', 'IT', 'LUNCH','ELECTIVE', 'LANG'] },
            { day: 'TUESDAY', times: ['SE', 'IT', 'BREAK', 'AI', 'ELECTIVE','LUNCH', 'LANG', ''] },
            { day: 'WEDNESDAY', times: ['IT', 'IT LAB', 'BREAK', 'AI LAB', 'AI LAB','LUNCH', 'LANG', 'SPORTS'] },
            { day: 'THURSDAY', times: ['SE', 'AI', 'BREAK', 'IT LAB', 'IT LAB','LUNCH', 'PLACEMENT', 'LANG'] },
            { day: 'FRIDAY', times: ['IT', 'IT LAB', 'BREAK', 'ELECTIVE', 'AI','LUNCH', 'AI LAB', 'SPORTS'] },
          ].map((row, rowIndex) => (
            <tr key={rowIndex} className="border border-gray-300">
              <td className="bg-yellow-500 text-white px-4 py-2 border border-gray-300">{row.day}</td>
              {row.times.map((time, timeIndex) => (
                <td key={timeIndex} className="px-4 py-2 border border-gray-300">{time}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* {console.log("TT cons"+ option)} */}
    </div>
  );
};





export default Timetable1;
