import React from 'react';
import CAM from '../../../assets/Images/CAM.jpg'
import logoName from '../../../assets/Images/logoEduaName.png';
import { Buttons } from '../Buttons/Buttons';
import { useLocation } from 'wouter';

export const Home = () => {
  const [, setLocation] = useLocation();

  const handleButtonClick = () => {
    setLocation('/register');
  };
  const handleButtonClickHelp = () => {
    setLocation('/help');
  };
  const handleButtonClickAboutUs = () => {
    setLocation('/aboutUs');
  };
  const handleButtonClickMiau = () => {
    setLocation('/miau');
  };
  return (
    <div className="bg-white h-screen relative flex ">
      <div className='w-full h-[600px]'>
        <img src={CAM} alt="imgbackground" className="w-full h-full object-fill  " />
      </div>

      <div className='flex absolute top-3 left-[44%]'>
        <img src={logoName} alt="logo" className="w-[215px] h-[60px]" />
      </div>

      <div className='top-28 left-[18%] absolute flex justify-center items-center'>
        <ul className=' list-none font-semibold text-[30px] flex gap-44'>
          <li>
            <Buttons btnStyle={"w-48 h-11 bg-[#00000000]"} label="Miau" />
          </li>
          <li>
            <Buttons btnStyle={"w-48 h-11 bg-[#00000000]"} label="Acerca de" />
          </li>
          <li>
            <Buttons buttonEvent={handleButtonClickHelp} btnStyle={"w-48 h-11 bg-[#00000000]"} label="Ayuda" />
          </li>
        </ul>
        <div className='top-20 absolute flex '>
          <Buttons buttonEvent={handleButtonClick} btnStyle={"text-[25px] w-48 h-11 bg-[#00000000]"} label="Iniciar" />
        </div>
      </div>
    </div>
  );
};