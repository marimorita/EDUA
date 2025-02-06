import React from 'react';
import finance from '../../../assets/Images/finance.svg'
import logoEduaName from '../../../assets/Images/logoEduaName.svg';
import { ToolTip } from '../../Ui/ToolTip/ToolTip';

export const Financial  = () => {
  return (
    <div className="bg-white grid grid-cols-2 h-screen relative">
       <div className="absolute top-4 left-4">
        <img src={logoEduaName} alt="logo" className="w-[140px] h-[40px]" />
       </div>
       <ToolTip/>
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
