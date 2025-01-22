import React from 'react';
import finance from '../../../assets/Images/finance.svg'
import logoEduaName from '../../../assets/Images/logoEdua.svg';
import { FaUser } from "react-icons/fa6";

export const Financial  = () => {
  const handleButtonClick = () => {
    setLocation('/register');
  };
  return (
    
    <div className="bg-white grid grid-cols-2 h-screen relative">
      <div className="absolute top-4 left-4">
        <img src={logoEduaName} alt="logo" className="w-[150px]" />
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="font-semibold text-[60px]">¡Bienvenido Sergio!</h1>
        <p className="font-semibold text-[35px]">Al área técnica</p>
      </div>
        <button onClick={handleButtonClick} className='absolute top-4 right-4 flex justify-end p-3 text-[#434343]'> 
          <FaUser className='cursor-pointer w-8 h-8 hover:scale-110 transition duration-300'/>
        </button>

      <div className="flex justify-center items-center">
        <img src={finance} alt="técnica" className="w-[550px] h-[370px]" />
      </div>
    </div>
  );
};
