import React from 'react'
import { FaUser } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";
import { LuFileSearch } from "react-icons/lu";
import { useLocation } from 'wouter';

export const ToolTip = () => {
    const [, setLocation] = useLocation(); 
    const handleButtonClick = () => {
        setLocation(`/profile`);
    };
    const handleButtonClickPay = () => {
        setLocation(`/payment`);
    };
    const handleButtonClickDoc = () => {
      setLocation(`/createCustomer`);
    };
  return (
    <div className = 'absolute flex-row-reverse right-4 flex justify-end items-end gap-6'>

    <div className= 'relative group'>
    <button className='top-2 p-3 text-[#434343]'> 
    <FaUser className='cursor-pointer w-10 h-10 hover:scale-110 transition duration-300'/>
    </button> 
    <div className="w-[6rem] right-[0.5rem] opacity-0 top-[85%] flex flex-col absolute group-hover:opacity-100 hover:scale-105 hover:shadow-lg hover:border transition duration-300">
    <button onClick={handleButtonClick} className='text-left text-black h-8 hover:bg-[#D9D9D9]'>Ver mi perfil
    </button>
    <button className=' text-left text-black h-8 hover:bg-[#D9D9D9]'>Cerrar sesión</button>
    </div>
    </div>

    <div className='relative group'>
    <button className=' top-2 p-3 text-[#434343]'>
    <FaHandHoldingUsd className='cursor-pointer w-10 h-10 hover:scale-110 transition duration-300' />
    </button>
    <div className= "w-[8rem] right-[0.3rem] opacity-0  top-[85%] flex flex-col absolute group-hover:opacity-100 hover:scale-105 hover:shadow-lg hover:border transition duration-300 ">
    <button onClick={handleButtonClickDoc} className='text-left text-black h-8 hover:bg-[#D9D9D9]'>Crear Cliente
    </button>
    <button onClick={handleButtonClickPay} className='text-left text-black h-8 hover:bg-[#D9D9D9]'>Cliente existente</button>
    </div>
    </div>

    <div className='relative group'>
    <button className='top-2 p-3 text-[#434343]'>
    <LuFileSearch className='cursor-pointer w-10 h-10 hover:scale-110 transition duration-300'/>
    </button>
    <div className= "right-[0.2rem] opacity-0 w-[7rem] p-[2px] top-[85%] flex flex-col absolute group-hover:opacity-100 hover:scale-105 hover:shadow-lg hover:border transition duration-300 ">
    <button className='text-left text-black h-8 hover:bg-[#D9D9D9]'>Buscar recibo</button>
    <button className='text-left text-black h-8 hover:bg-[#D9D9D9]'>Buscar factura</button>
    </div>
    </div>

    </div>
  )
}