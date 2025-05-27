import React, { useContext } from 'react'
import logoEdua from '../../assets/Images/logoEdua.svg'
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { useLocation } from 'wouter';
import { StateContext } from '../../Context/Context';
import { ModalConfirm } from '../../Components/Modals/ModalConfirm';
import { IoIosArrowRoundBack } from "react-icons/io";

export const AccessPanel = () => {
  const { viewConfirmModal, setViewConfirmModal, animationImg, setAnimationImg, setRegisterUser } = useContext(StateContext)
  const [, setLocation] = useLocation();
  
  const activateFunction = () => {
    setViewConfirmModal(false)
    setRegisterUser(true)
  }
  const clickButton = () => {
    setLocation(`/home`);
  };
  return (
    <div className='bg-white grid grid-cols-2 h-screen items-center relative py-4'>
      <div className={`absolute z-30 flex justify-center transition-all duration-[2000ms]  ${animationImg ? "left-[58%]" : "left-[8%]"} `}>
        <img src={logoEdua} alt="Logo" className='w-190 h-80' />
      </div>
      <div className='absolute z-30 top-2 left-3'>
        <IoIosArrowRoundBack onClick={clickButton} className='cursor-pointer w-10 h-10 hover:scale-125' />
      </div>
      <div className="absolute z-30 top-[56%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-l border-[#eb1520] h-[32rem]"></div>
      
      <Register registerClass={`transition-all duration-[1000ms] ${animationImg ? "opacity-100" : "opacity-0 pointer-events-none"} `} />
      <Login loginClass={`transition-all duration-[1000ms] ${animationImg ? "opacity-0 pointer-events-none " : "opacity-100"} `} />
      
      <ModalConfirm
        visibility={viewConfirmModal}
        handleButtonClickConfirm={activateFunction}
        message="¿Confirmas que tus datos son correctos?"
        redirectPath="/login" />
    </div>
  )
} 