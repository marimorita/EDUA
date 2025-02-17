import React from 'react';
import director from '../../../assets/Images/director.svg'
import logoEduaName from '../../../assets/Images/logoEduaName.svg';
import { ToolTip } from '../../Ui/ToolTip/ToolTip';

export const Director  = () => {
  return (
    <div className="bg-white grid grid-cols-2 h-screen relative">
       <div className="absolute top-4 left-4">
        <img src={logoEduaName} alt="logo" className="w-[140px] h-[40px]" />
       </div>
       <ToolTip/>
      <div className=" flex flex-col justify-center items-center">
        <h1 className="font-semibold text-[60px] text-center">¡Bienvenido Director Técnico!</h1>
      </div>
      <div className="flex justify-center items-center">
        <img src={director} alt="director" className="w-[550px] h-[370px]" />
      </div>
    </div>
  );
};
