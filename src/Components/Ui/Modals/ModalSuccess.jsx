import React from 'react'
import successImg from '../../../assets/Images/success.png'
import logoName from '../../../assets/Images/logoEduaName.png';
import { useLocation } from 'wouter';
import { IoIosClose } from "react-icons/io";

export const ModalSuccess = ({visibility }) => {
  const [, setLocation] = useLocation(); 
  const closeButton = () => {
      setLocation(`/login`);
  };
  return (
   <div className={visibility ? "w-screen h-screen flex items-center justify-center fixed bg-[#00000080] z-[9999999999] " : "hidden"}>
     <div className="w-[40%] h-[85%] bg-[white]">
        <div className="absolute mt-2">
         <img src={logoName} alt="logo" className="w-[150px]" />
        </div>
        <div >
            <button onClick={closeButton} >
             <IoIosClose className='cursor-pointer w-10 h-10 hover:scale-125'/>
            </button>
        </div>
        <div className='flex justify-center items-center'>
         <img src={successImg} alt="Confirm Image" className='mt-16 w-[450px] h-[320px]' />
        </div>
        <p className='flex items-center justify-center font-semibold text-[25px]'>¡Felicidades! Tu cuenta ha sido creada con éxito. Ya puedes iniciar sesión y disfrutar de nuestros servicios</p>
     </div>
    </div>
  )
}
