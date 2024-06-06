// Dropdown.js
import React, { useEffect, useState } from 'react';
import Home from './Home';
import Confession from './Confession';
import Timetable from './Timetable';
import Timetable1 from './Timetable1';

const Dropdown = ({option}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select Class');

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

//   useEffect(() =>{
//     if(selectedOption === "Option 3"){
//         alert("working");
//     }
//   },[selectedOption])
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className=" mb-5 inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          onClick={toggleDropdown}
        >
          {selectedOption}
          <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button onClick={() => handleOptionClick('BCA I')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">BCA I</button>
            <button onClick={() => handleOptionClick('BCA II')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">BCA II</button>
            <button onClick={() => handleOptionClick('BCA III')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">BCA III</button>
          </div>
        </div>
      )}
      {/* {console.log(selectedOption)} */}
      {selectedOption === "Option 3" ? <Timetable option={selectedOption} /> : <Timetable1/> }
      
    </div>
  );
};

export default Dropdown;
