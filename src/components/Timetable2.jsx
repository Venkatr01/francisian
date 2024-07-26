import React from 'react';

const Timetable = (option) => {
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
            { day: 'MONDAY', times: ['BCA II', 'MD LAB', 'BREAK', 'EC', 'ML', 'LUNCH','OR/ST', 'PROJECT'] },
            { day: 'TUESDAY', times: ['EC', 'ML', 'BREAK', 'MD', 'OR','LUNCH', 'PROJECT', ''] },
            { day: 'WEDNESDAY', times: ['ML', 'ML LAB', 'BREAK', 'MD LAB', 'MD LAB','LUNCH', 'PROJECT', 'INTERNSHIP'] },
            { day: 'THURSDAY', times: ['EC', 'MD', 'BREAK', 'ML LAB', 'ML LAB','LUNCH', 'PLACEMENT', 'PROJECT'] },
            { day: 'FRIDAY', times: ['ML', 'ML LAB', 'BREAK', 'OR/ST', 'MD','LUNCH', 'MD LAB', 'INTERNSHIP'] },
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
      {console.log("TT cons"+ option)}
    </div>
  );
};





export default Timetable;
