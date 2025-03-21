import React, { useContext } from 'react'
import { Buttons } from '../../Components/Buttons/Buttons'
import { FormLogin } from '../../Ui/Form/Form'
import { useLocation } from 'wouter';
import { StateContext } from '../../Context/Context';

export const Login = ({loginClass}) => {
  const {animationImg , setAnimationImg } = useContext (StateContext)
  const [, setLocation] = useLocation(); 
  const handleButtonClick = () => {
    setAnimationImg(!animationImg);
  };
  const handleButtonClickP = () => {
    setLocation(`/forgotPassword`);
  };
  return (
    <div className={`${loginClass}bg-white h-full w-[90%] items-center relative pt-32`}>
      <div className='bg-white flex justify-center flex-col space-y-3 '>
        <h1 className='flex items-center justify-center font-semibold text-[30px] '>Iniciar sesión</h1>
        <FormLogin/>
        <div className='flex flex-col items-center justify-center text-start '>
        <button onClick={handleButtonClickP} className='text-[#484646] font-semibold flex text-start text-[13px]'>He olvidado mi contraseña</button>
     
        <Buttons btnStyle={"mt-5 bg-[#D9D9D9]"} label="Iniciar sesión" />
        <p className='text-[#484646] font-semibold mt-10'>¿Aún no estás registrado?</p>
        <button onClick={handleButtonClick} className='cursor-pointer underline text-[#701819] mt-1 font-semibold'>Regístrate aquí</button> 
       </div>
    </div> 
  </div>
  )
}