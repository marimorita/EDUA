import React from 'react'
import { Form } from '../../Ui/Form/Form'
import logoEdua from '../../../assets/Images/logoEdua.png'
import { useLocation } from 'wouter';

export const Register = () => {
  const [, setLocation] = useLocation(); 
  const handleButtonClick = () => {
      setLocation(`/login`);
  };
  return (
    <div className='bg-white grid grid-cols-2 h-screen items-center relative'>
      <div className='flex justify-center'>
        <img src={logoEdua} alt="Logo" className='w-190 h-80' />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-l border-[#eb1520] h-[28rem]"></div>

      <div className="bg-white flex justify-center flex-col space-y-4">
        <h1 className='flex items-center justify-center font-semibold text-[30px]'> Regístrate </h1>
        <Form />
        <div className='flex justify-center gap-1'>
          <p className='text-[#484646] font-semibold '>¿Ya estas registrado?</p>
          <button onClick={handleButtonClick} className='underline cursor-pointer text-[#701819] font-semibold'>Inicia sesión aquí</button>
        </div>
        <div className='flex items-center justify-center'></div>
      </div>
    </div>
  )
}