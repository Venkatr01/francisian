import '../index.css'
import celebration from '../assets/celebration.png'

import React from 'react';

function Happybirthday({name}){
  return (
    // <div className="venkat bg-pink-600 flex flex-col items-center justify-center h-screen bg-blue-50 overflow-hidden">
    <div className=" m-20 venkat   flex flex-col items-center justify-center h-80 overflow-hidden ">
      <span><img className='relative w-80 h-50' src={celebration} alt="celeb bg" /></span>
      <div className="relative flex justify-center w-full max-w-lg ">
        <div className="balloon balloon-1 bg-black"></div>
        <div className="balloon balloon-2"></div>
        <div className="balloon balloon-3"></div>
        <div className="balloon balloon-4"></div>
      </div>
      <h1 className="text-4xl font-headerf h-20  text-black mt-10 ">{name} </h1>
    </div>
  );
};

export default Happybirthday;












// import React from 'react'
// import '../index.css'
// function Happybirthday() {
//   return (
// <div className="flex flex-col items-center justify-center h-screen bg-blue-50 overflow-hidden">
//       <div className="relative flex justify-center w-full max-w-lg h-80">
//         <div className="balloon balloon-1"></div>
//         <div className="balloon balloon-2"></div>
//         <div className="balloon balloon-3"></div>
//         <div className="balloon balloon-4"></div>
//       </div>
//       <h1 className="text-4xl font-bold text-pink-500 mt-6">Happy Birthday!</h1>
//     </div>
//   )
// }

// export default Happybirthday
