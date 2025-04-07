import React, { useContext } from 'react'
import logoName from '../../assets/Images/logoEduaName.svg';
import verificationPhone from '../../assets/Images/phone.svg'
import { Inputs } from '../../Components/Inputs/Inputs';
import { Buttons } from '../../Components/Buttons/Buttons';
import { ModalFail } from '../../Components/Modals/ModalFail';
import { useLocation } from 'wouter';
import { StateContext } from '../../Context/Context';
import { IoIosArrowRoundBack } from 'react-icons/io';

export const VerificationPhone = () => {
  const { viewFailModal, setViewFailModal } = useContext(StateContext)
  const [, setLocation] = useLocation();
  const handleButtonClick = () => {
    setLocation(`/verificationEmail`);
  };
  const clickButton = () => {
    setLocation(`/accessPanel`);
  };
  return (
    <>
      <div className='bg-white h-full relative my-2'>
        <div className='absolute z-30 top-2 left-3'>
          <IoIosArrowRoundBack onClick={clickButton} className='cursor-pointer w-10 h-10 hover:scale-125' />
        </div>
        <div className='flex justify-center items-center'>
          <img src={logoName} alt="logo" className="w-[170px] h-[55px]" />
        </div>
        <div className='flex items-center justify-center font-semibold flex-col'>
          <h1 className='text-[30px]'>Verificación en dos pasos </h1>
          <p className='text-[20px]'> Hemos enviado un codigo para verificar tu numero de celular. Revisa (numero) e ingresa el codigo aquí: </p>
        </div>
        <div className='flex justify-center gap-7 mt-7'>
          <Inputs classP={'w-[70px] h-[70px]'} />
          <Inputs classP={'w-[70px] h-[70px]'} />
          <Inputs classP={'w-[70px] h-[70px]'} />
          <p className='flex items-center justify-center font-semibold text-[40px]'>-</p>
          <Inputs classP={'w-[70px] h-[70px]'} />
          <Inputs classP={'w-[70px] h-[70px]'} />
          <Inputs classP={'w-[70px] h-[70px]'} />
        </div>
        <div className='flex items-center justify-center mt-5'>
          <img src={verificationPhone} alt="Email Verification" className='w-[16rem] h-[210px]' />
        </div>
        <div className='flex justify-center items-center'>
          <Buttons buttonEvent={() => (setViewFailModal(true))} btnStyle={"mt-5 bg-[#D9D9D9] w-[120px]"} label="Enviar código" />
        </div>
        <div className='flex justify-center items-center mt-1'>
          <button onClick={handleButtonClick} className='underline cursor-pointer text-[#1E1E1E] font-semibold mt-7'>Prueba de otra manera</button>
        </div>
      </div>
      <ModalFail
        visibility={viewFailModal}
        message="Hubo un problema al verificar tu cuenta. Por favor intenta nuevamente"
        redirectPath="/accessPanel"/>
    </>
  )
};