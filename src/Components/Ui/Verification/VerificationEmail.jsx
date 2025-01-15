import React from 'react'
import logoName from '../../../assets/Images/logoEduaName.png';
import verificationEmail from '../../../assets/Images/verificationEmail.png'
import { Inputs } from '../Inputs/Inputs';
import { Buttons } from '../Buttons/Buttons';
import { useLocation } from 'wouter';

export const VerificationEmail = () => {
    const [, setLocation] = useLocation(); 
    const handleButtonClick = () => {
        setLocation(`/`);
    };
    const handleButtonClickOne = () => {
        setLocation(`/verificationPhone`);
     };
  return (
    <div className='bg-white h-screen'>
        <div className='flex justify-center items-center'>
         <img src={logoName} alt="logo" className="w-[160px] h-[70px]" />
        </div>
        <div className='flex items-center justify-center font-semibold flex-col'>
            <h1 className='text-[30px]'>Verificación en dos pasos </h1>
            <p className='text-[20px]'> Hemos enviado un codigo para verificar tu direccion de correo. Revisa (correo) e ingresa el codigo aquí: </p>
        </div>
        <div className='flex justify-center gap-7 mt-7'>
            <Inputs classP={'w-[70px] h-[70px]'}/>
            <Inputs classP={'w-[70px] h-[70px]'}/>
            <Inputs classP={'w-[70px] h-[70px]'}/>
            <p className='flex items-center justify-center font-semibold text-[40px]'>-</p>
            <Inputs classP={'w-[70px] h-[70px]'}/>
            <Inputs classP={'w-[70px] h-[70px]'}/>
            <Inputs classP={'w-[70px] h-[70px]'}/>
        </div>
        <div className='flex items-center justify-center'>
            <img src={verificationEmail} alt="Email Verification" className='w-60 h-[210px]'/>
        </div>
        <div className='flex justify-center items-center'>
            <Buttons btnStyle={"mt-5 bg-[#D9D9D9] w-[120px]"} label="Enviar código" /> 
        </div>
        <div className='flex justify-center gap-1 mt-5'>
        <p className='text-[#484646] font-semibold'>¿No has recibido el código?</p>
        <button onClick={handleButtonClick} className='underline cursor-pointer text-[#701819] font-semibold'>Pidelo de nuevo (Cilck aquí)</button>
        </div>
        <div className='flex justify-center items-center mt-1'>
        <button onClick={handleButtonClickOne} className='underline cursor-pointer text-[#1E1E1E] font-semibold'>Prueba de otra manera</button>
        </div>
    </div>
  )
}
