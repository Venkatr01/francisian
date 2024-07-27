import '../index.css'

import React from 'react';

function Happybirthday({name}){
  return (
    <div className=" border-2 border-gray-500 rounded-3xl bg-celeb bg-cover bg-white ml-10 mt-10 mb-20 mr-10  p-10 flex flex-col items-center justify-center h-40 overflow-hidden ">
      <div className=" bg-cel relative flex justify-center w-full max-w-lg ">

      </div>
      <h1 className="bg-white text-4xl font-headerf h-40   text-black mt-5 ">{name} </h1>
    </div>
  );
};

export default Happybirthday;













