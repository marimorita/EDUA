import React from 'react'
import logoEduaName from '../../../assets/Images/logoEduaName.svg';
import { Buttons } from '../Buttons/Buttons';
import { IoSearchSharp } from "react-icons/io5";
import { Inputs } from '../Inputs/Inputs';
import { ToolTip } from '../ToolTip/ToolTip';
import { useLocation } from 'wouter';
import { IoIosArrowRoundBack } from "react-icons/io";


export const Payment = () => {
  const [, setLocation] = useLocation(); 
  const clickButton  = () => {
    setLocation(`/financial`);
  };
  return (
    <>
     <div className='absolute z-30 top-2 left-3'>
      <IoIosArrowRoundBack onClick= {clickButton} className='cursor-pointer w-10 h-10 hover:scale-125'/>
      </div> 
     <div className="absolute top-4 left-[45%]">
      <img src={logoEduaName} alt="logo" className="w-[140px] h-[45px]" />
     </div>    
     <ToolTip/>
     <h1 className='flex justify-center items-center font-bold text-[40px] mt-20'>Generar Pago</h1>
     <div className='flex justify-center items-center gap-1'>
        <Inputs classP={`w-[15rem] focus:outline-none border-0 border-b-2 border-solid border-[#434343]`}
        type={"search"}
        nameInputs={"Search"} />
     <IoSearchSharp className='w-8 h-8'/>
     </div>
     <div className='flex justify-end m-20 mt-10'>
        <Buttons btnStyle={"bg-[#D9D9D9] w-[11rem]"} label="Generar PDF"/>    
    </div>
    </>
  )
}
