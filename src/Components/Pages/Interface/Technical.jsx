import React from 'react';
import technique from '../../../assets/Images/technique.svg';
import logoEduaName from '../../../assets/Images/logoEduaName.svg';
import { FaUser } from "react-icons/fa6";

export const Technical = () => {
  const handleButtonClick = () => {
    setLocation('/register');
  };
  return (
    
    <div className="bg-white grid grid-cols-2 h-screen relative">
      <div className="absolute top-4 left-4">
        <img src={logoEduaName} alt="logo" className="w-[140px] h-[40px]" />
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="font-semibold text-[60px]">¡Bienvenido Sergio!</h1>
        <p className="font-semibold text-[35px]">Al área técnica</p>
      </div>
        <button onClick={handleButtonClick} className='absolute top-2 right-4 flex justify-end p-3 text-[#434343]'> 
          <FaUser className='cursor-pointer w-10 h-10 hover:scale-110 transition duration-300'/>
        </button>

      <div className="flex justify-center items-center">
        <img src={technique} alt="técnica" className="w-[550px] h-[370px]" />
      </div>
    </div>
  );
};