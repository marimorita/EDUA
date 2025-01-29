import React from 'react';
import finance from '../../../assets/Images/finance.svg'
import logoEduaName from '../../../assets/Images/logoEduaName.svg';
import { FaUser } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";
import { LuFileSearch } from "react-icons/lu";
import { useLocation } from 'wouter';

export const Financial  = () => {
  const [, setLocation] = useLocation(); 
  const handleButtonClick = () => {
     setLocation(`/profile`);
  };
  const handleButtonClickPay = () => {
    setLocation(`/financial`);
  };
 const handleButtonClickDoc = () => {
  setLocation(`/createCustomer`);
  };
  return (
    <div className="bg-white grid grid-cols-2 h-screen relative">
       <div className="absolute top-4 left-4">
        <img src={logoEduaName} alt="logo" className="w-[140px] h-[40px]" />
       </div>
       <div className = 'absolute flex-row-reverse right-4 flex justify-end items-end gap-6'>
        <button className='top-2  p-3 text-[#434343]'> 
          <FaUser className='cursor-pointer w-10 h-10 hover:scale-110 transition duration-300'/>
        </button> 
        <button onClick={handleButtonClickPay} className=' top-2 p-3 text-[#434343]'>
         <FaHandHoldingUsd className='cursor-pointer w-10 h-10 hover:scale-110 transition duration-300' />
        </button>
        <button className=' top-2 p-3 text-[#434343]'>
         <LuFileSearch className='cursor-pointer w-10 h-10 hover:scale-110 transition duration-300'/>
        </button>
        <div className= "right-[8.5rem] top-[85%] flex flex-col absolute hover:scale-105 hover:shadow-lg hover:border transition duration-300 ">
          <button className='text-left text-black h-8 hover:bg-[#D9D9D9]'>Buscar recibo</button>
          <button className='text-left text-black h-8 hover:bg-[#D9D9D9]'>Buscar factura</button>
       </div>
       <div className= "right-[4rem] top-[85%] flex flex-col absolute hover:scale-105 hover:shadow-lg hover:border transition duration-300 ">
          <button onClick={handleButtonClickDoc} className='text-left text-black h-8 hover:bg-[#D9D9D9]'>Crear Cliente
          </button>
          <button className='text-left text-black h-8 hover:bg-[#D9D9D9]'>Cliente existente</button>
       </div>
       <div className= "right-[0.2rem] top-[85%] flex flex-col absolute hover:scale-105 hover:shadow-lg hover:border transition duration-300">
          <button onClick={handleButtonClick} className='text-left text-black h-8 hover:bg-[#D9D9D9]'>Ver mi perfil
          </button>
          <button className='text-left text-black h-8 hover:bg-[#D9D9D9]'>Cerrar sesión</button>
       </div>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <h1 className="font-semibold text-[60px]">¡Bienvenido Sergio!</h1>
        <p className="font-semibold text-[35px]">Al área financiera</p>
      </div>
      <div className="flex justify-center items-center">
        <img src={finance} alt="técnica" className="w-[550px] h-[370px]" />
      </div>
    </div>
  );
};
