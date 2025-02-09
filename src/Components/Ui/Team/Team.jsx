import React from 'react'
import logoEduaName from '../../../assets/Images/logoEduaName.svg';
import { Buttons } from '../Buttons/Buttons';
import { ToolTip } from '../ToolTip/ToolTip';
import { CardTeam } from '../Cards/Cards';
import { useLocation } from 'wouter';
import { IoIosArrowRoundBack } from 'react-icons/io';

export const Team = () => {
  const [, setLocation] = useLocation(); 
  const clickButton  = () => {
    setLocation(`/notifications`);
  };
  return (
    <>
     <div className='absolute z-30 top-2 left-3'>
      <IoIosArrowRoundBack onClick= {clickButton} className='cursor-pointer w-10 h-10 hover:scale-125'/>
      </div> 
    <div> 
     <div className="absolute top-4 left-[45%]">
      <img src={logoEduaName} alt="logo" className="w-[140px] h-[45px]" />
     </div>
     <ToolTip/>
     </div>
     <div className='flex flex-wrap gap-16 m-12 justify-center items-center'>
      <CardTeam name="Jose Guto Apellido2"/>
      <CardTeam name="Esteban Fino Muñoz"/>
      <CardTeam name="Carlos Apellido1 Apellido2"/>
      <CardTeam name="Diego German Apellido1 Apellido2"/>

     </div>
      <div className='flex justify-center '>
        <Buttons btnStyle={"bg-[#D9D9D9] w-[11rem]"} label="Asignar Tareas"/>    
      </div>
    </>
    )
}