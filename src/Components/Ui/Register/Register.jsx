import React , {useContext, useState}from 'react'
import logoEdua from '../../../assets/Images/logoEdua.png'
import { IoIosArrowRoundBack } from "react-icons/io";
import { Form } from '../../Ui/Form/Form'
import { useLocation } from 'wouter';
import { ModalRegister } from '../Modals/ModalRegister';
import { StateContext } from '../../Context/Context';

export const Register = () => {
  const {viewConfirmModal, setViewConfirmModal} = useContext (StateContext)
  const [, setLocation] = useLocation(); 
  const handleButtonClick = () => {
      setLocation(`/login`);
  };

  const clickButton  = () => {
    setLocation(`/home`);
};
  const clickLogin = () =>
    setLocation 
  return (
    <div className='bg-white grid grid-cols-2 h-screen items-center relative py-4'>
      <div className='flex justify-center'>
        <img src={logoEdua} alt="Logo" className='w-190 h-80' />
      <div className='absolute top-2 left-3'>
        <IoIosArrowRoundBack onClick= {clickButton} className='cursor-pointer w-10 h-10 hover:scale-125'/>
      </div> 
      </div>

      <div className="absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-l border-[#eb1520] h-[41rem]"></div>

      <div className="bg-white flex justify-center flex-col space-y-4">
        <h1 className='flex items-center justify-center font-semibold text-[30px]'> Regístrate </h1>
        <Form />
        <div className='flex justify-center gap-1'>
          <p className='text-[#484646] font-semibold '>¿Ya estas registrado?</p>
          <button onClick={handleButtonClick} className='underline cursor-pointer text-[#701819] font-semibold'>Inicia sesión aquí</button>
        </div>
        <div className='flex items-center justify-center'></div>
      </div>
      <ModalRegister visibility={viewConfirmModal} handleButtonClickOne={() => (setViewConfirmModal(false))} />
    </div>
  )
}