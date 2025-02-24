import React from 'react'
import logoEduaName from '../../../assets/Images/logoEduaName.svg';
import { ToolTipReceptionist } from '../../Ui/ToolTip/ToolTip';
import receptionist from '../../../assets/Images/receptionist.svg'

export const Receptionist = () => {
  return (
    <div className="bg-white grid grid-cols-2 h-screen relative">
       <div className="absolute top-4 left-4">
        <img src={logoEduaName} alt="logo" className="w-[140px] h-[40px]" />
       </div>
       <ToolTipReceptionist/>
      <div className=" flex flex-col justify-center items-center">
        <h1 className="font-semibold text-[60px] text-center">¡Bienvenido Nombre!</h1>
        <p className='font-semibold text-[30px]'>Al área de la recepción</p>
      </div>
      <div className="flex justify-center items-center">
        <img src={receptionist} alt="director" className="w-[550px] h-[370px]" />
      </div>
    </div>
  )
}
