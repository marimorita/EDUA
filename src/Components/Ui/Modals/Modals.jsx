import React from 'react'
import logoEduaTittle from '../../../assets/Images/logoEduaTittle.PNG';
import { Buttons } from '../Buttons/Buttons';
import confirmImg from "../../../assets/Images/confirmModal.png";
import { useLocation } from 'wouter';

export const Modals = ({ visibility }) => {
  const [, setLocation] = useLocation(); 
  const handleButtonClick = () => {
      setLocation(`/login`);
  };
  const handleButtonClickOne = () => {
    setLocation(`/register`);
 };
  return (
    <div className={visibility ? "w-screen h-screen flex items-center justify-center fixed bg-[#00000080] z-[9999999999] " : ""}>
        <div className="w-[40%] h-[85%] bg-[white]">
            <div className="absolute mt-2">
              <img src={logoEduaTittle} alt="logo" className="w-[150px]" />
            </div>
            <div className='flex justify-center items-center'>
              <img src={confirmImg} alt="Confirm Image" className='mt-16 w-[450px] h-[320px]' />
            </div>
        <p className='flex items-center justify-center font-semibold text-[25px]'>¿Confirmas que tus datos son correctos?</p>
        <div className= "mt-4 flex justify-center gap-52">
         <Buttons buttonEvent={handleButtonClick} mt={" bg-[#D9D9D9]"} label="Confirmar" />
         <Buttons buttonEvent={handleButtonClickOne} mt={"bg-[#D9D9D9]"} label="Cancelar" />
        </div>
        </div>
        
    </div>
  )
}