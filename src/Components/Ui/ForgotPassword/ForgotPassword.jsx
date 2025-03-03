import React, { useContext } from 'react'
import logoName from '../../../assets/Images/logoEduaName.svg';
import password from '../../../assets/Images/password.svg'
import { Buttons } from '../../Ui/Buttons/Buttons';
import { useLocation } from "wouter";
import { ModalSuccess} from '../Modals/ModalSuccess';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { StateContext } from '../../Context/Context';
import { Inputs } from '../Inputs/Inputs';

export const ForgotPassword = () => {
  const {viewSuccessModal, setViewSuccessModal} = useContext (StateContext)
  const [, setLocation] = useLocation();
  const clickButton = () => {
    setLocation(`/accessPanel`)
  }
  
  return (
  <div className=' h-screen grid grid-cols-3 w-full'>
     <div className='absolute z-30 top-2 left-3'>
      <IoIosArrowRoundBack onClick= {clickButton} className='cursor-pointer w-10 h-10 hover:scale-125'/>
      </div> 
    <div className='bg-[#c9c9c9] flex-col flex items-center' >
        <h1 className='font-semibold text-[30px] text-center mt-16'>¿Olvidaste tu contraseña?</h1>
        <p className='font-semibold text-[30px] text-justify mx-10 items-center mt-52'>No te preocupes, puedes restablecer tu contraseña mediante tu correo electronico</p>
    </div>

      <div className='flex col-span-2 flex-col'>
        <div className='flex items-center flex-col gap-8'>
          <img src={logoName} alt="logo" className="w-[150px] h-[50px] mt-1" />
          <img src={password} alt="imgBackground" className="w-[40%] h-[45  %]" />
        <p className='font-semibold text-[25px]'>Ingresa el correo electronico con el cual te registraste:</p>
         <Inputs classP={`w-[30rem] focus:outline-none border-0 border-b-2 border-solid border-[#434343] text-[20px]`}
        nameInputs={"Search"} 
        placeholder={"Correo electronico"}/>
         <Buttons  buttonEvent={() => (setViewSuccessModal(true))} btnStyle={"text-[20px] w-48 h-11 bg-[#d9d9d9]"} label="Enviar 
         correo" />
        </div>
    </div>   
    <ModalSuccess 
        visibility={viewSuccessModal} 
        message="¡Felicidades! Tu cuenta ha sido creada con éxito. Ya puedes iniciar sesión y disfrutar de nuestros servicios." 
        redirectPath="/accessPanel"/>
    </div>
  )
}
