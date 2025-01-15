import React from 'react'
import logoEdua from '../../../assets/Images/logoEdua.png'
import { FormLogin } from '../../Ui/Form/Form'
import { Buttons } from '../../Ui/Buttons/Buttons'
import { useLocation } from 'wouter';

export const Login = () => {
  const [, setLocation] = useLocation(); 
  const handleButtonClick = () => {
     setLocation(`/register`);
  };
  return (
    <div className='bg-white grid grid-cols-2 h-screen items-center relative '>
      <div className='bg-white flex justify-center flex-col space-y-4 p-8'>
        <h1 className='flex items-center justify-center font-semibold text-[30px] m-10 mt-[1px]'>Iniciar sesión</h1>
        <FormLogin/>
        <div className='flex flex-col items-center justify-center text-start '>
        <button onClick={handleButtonClick} className='text-[#484646] font-semibold flex text-start text-[13px]'>He olvidado mi contraseña</button>
     
        <Buttons btnStyle={"mt-5 bg-[#D9D9D9]"} label="Iniciar sesión" />
        <p className='text-[#484646] font-semibold mt-10'>¿Aún no estás registrado?</p>
        <button onClick={handleButtonClick} className='cursor-pointer underline text-[#701819] mt-1 font-semibold'>Regístrate aquí</button> 
       </div>
    </div>

    <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-l border-[#eb1520] h-[29rem]"></div> 

    <div className='flex justify-center'>
      <img src={ logoEdua } alt="Logo" className='w-190 h-80'/>
    </div>
    </div>
  )
}