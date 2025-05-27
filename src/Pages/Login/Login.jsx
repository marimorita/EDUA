import React, { useContext } from 'react';
import { FormLogin } from '../../Utils/Form/FormLogin'
import { useLocation } from 'wouter';
import { StateContext } from '../../Context/Context';

export const Login = ({ loginClass }) => {
  const { animationImg, setAnimationImg } = useContext(StateContext);
  const [, setLocation] = useLocation();
  const handleButtonClick = () => {
    setAnimationImg(!animationImg);
  };

  const verification = () => {
    setLocation(`/verificationEmail`)
  }
  return (
    <div className={`${loginClass}bg-white h-full w-[90%] items-center relative pt-32`}>
      <div className='bg-white flex justify-center flex-col space-y-3 '>
        <h1 className='flex items-center justify-center font-semibold text-[30px] '>Iniciar sesión</h1>
        <FormLogin />
        <div className='flex flex-col items-center justify-center text-start '>
          <p className='text-[#484646] font-semibold'>¿Aún no estás registrado?</p>
          <button onClick={handleButtonClick} className='cursor-pointer underline text-[#701819] mt-1 font-semibold'>Regístrate aquí</button>
        </div>
      </div>
    </div>
  )
};