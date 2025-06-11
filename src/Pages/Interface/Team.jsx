import { useEffect, useState } from 'react';
import team from '../../assets/Images/team.svg'
import logoEduaName from '../../assets/Images/logoEduaName.svg';
import { ToolTipTeam } from '../../Components/ToolTip/ToolTipTeam';

export const Team = () => {
  const [saveName, setSaveName] = useState();

  useEffect(() => {
  setSaveName(localStorage.getItem('nameUser'));
}, []);



  return (
    <div className="bg-white grid grid-cols-2 h-screen relative">
      <div className="absolute top-4 left-4">
        <img src={logoEduaName} alt="logo" className="w-[140px] h-[40px]" />
      </div>
      <ToolTipTeam />
      <div className=" flex flex-col justify-center items-center">
        <h1 className="font-semibold text-[60px] text-center">¡Bienvenido/a {saveName}!</h1>
        <p className='font-semibold text-[30px]'>al equipo del área técnica </p>
      </div>
      <div className="flex justify-center items-center">
        <img src={team} alt="director" className="w-[550px] h-[370px]" />
      </div>
    </div>
  );
};;