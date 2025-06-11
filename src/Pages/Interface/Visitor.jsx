import { useEffect, useState } from 'react';
import visitor from '../../assets/Images/visitor.svg'
import logoEduaName from '../../assets/Images/logoEduaName.svg';
import { ToolTipVisitor } from '../../Components/ToolTip/ToolTipVisitor';

export const Visitor = () => {
const [saveName, setSaveName] = useState();

  useEffect(() => {
  setSaveName(localStorage.getItem('nameUser'));
}, []);


  return (
    <div className="bg-white grid grid-cols-2 h-screen relative">
      <div className="absolute top-4 left-4">
        <img src={logoEduaName} alt="logo" className="w-[140px] h-[40px]" />
      </div>
      <ToolTipVisitor />
      <div className=" flex flex-col justify-center items-center">
        <h1 className="font-semibold text-[60px] text-center">¡Bienvenido/a {saveName}!</h1>
        <p className='font-semibold text-[30px]'>Al área de visita</p>
      </div>
      <div className="flex justify-center items-center">
        <img src={visitor} alt="director" className="w-[550px] h-[370px]" />
      </div>
    </div>
  );
};