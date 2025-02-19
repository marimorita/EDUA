import React, { useContext, useState } from 'react'
import logoEduaName from '../../../assets/Images/logoEduaName.svg'
import profileImg from '../../../assets/Images/profile.svg'
import { Buttons } from '../Buttons/Buttons'
import { FaPencilAlt } from "react-icons/fa";
import { useLocation } from 'wouter';
import { ModalSuccess } from '../Modals/ModalSuccess';
import { StateContext } from '../../Context/Context';
import { Inputs } from '../Inputs/Inputs';
import { IoIosArrowRoundBack } from 'react-icons/io';

export const Profile = () => {
    const {viewSuccessModal, setViewSuccessModal} = useContext (StateContext)
    const [editValue, setEditValue] = useState(false)
    const [, setLocation] = useLocation ();
    const handleButtonClick = () => {
        setLocation('/notifications')
    };
  return (
    <div className='bg-white grid grid-cols-2 relative'>
     <div className='absolute z-30 top-2 left-3'>
      <IoIosArrowRoundBack onClick= {handleButtonClick} className='cursor-pointer w-10 h-10 hover:scale-125'/>
      </div> 
     <div className='left-[45%] absolute top-4'>
        <img src={logoEduaName} alt="logo" className="w-[170px] h-[55px]" />
     </div>
      
    <div className='mt-24 flex flex-col justify-center items-center'> 
     <div className='w-[25rem] h-[25rem] rounded-full overflow-hidden border-2 border-[#e5e7eb]'>
      <img src= {profileImg} alt="Profile Image" className='w-full h-full'/>
     </div>
     <button>
      <p className='text-[#484646] font-semibold underline mt-10'>Seleccionar nueva foto de perfil</p>       
     </button>
    </div>
     
    <div>
     <div className='mt-[6rem] font-semibold text-[30px] flex justify-center'>
        Hola, Sergio :)
     </div>
     <div className='mt-7 flex items-start flex-col w-[65%]'>
      <ul className='list-none text-black text-[20px] font-semibold flex-col gap-3 flex '>
        <li>
            <p>Apellidos:</p>
        </li>
        <li>
            <p>Cedula: </p>
        </li>
        <li>
            <p>Correo: </p>
        </li>
        <li className='flex justify-between'>
        {editValue 
        ? 
        <div className='flex gap-2'>
          <p>Telefono:</p>
        <Inputs classP={"w-[30rem] h-[2rem]"} />
        </div> 
        :
        <div className='flex gap-2'>
          <p>Telefono:</p>
        </div>}
            <button onClick={() => (setEditValue(!editValue))} className='ml-[8px]'><FaPencilAlt /></button>
        </li>
        <li>
            <p>Cargo: </p>
        </li>
        <li>
            <p>Rol: </p>
        </li>
      </ul>
     </div>
      <div className='flex justify-center mt-20'>
        <Buttons buttonEvent={() => (setViewSuccessModal(true))} btnStyle={"bg-[#D9D9D9]"} label="Actualizar"/>    
      </div>
    </div>
      <ModalSuccess 
        visibility={viewSuccessModal} 
        message="¡Felicidades! Tus datos han sido actualizados con éxito." 
        redirectPath="/profile"/>
    </div>
  )
}

export const ProfileTeam = () => {
    const {viewSuccessModal, setViewSuccessModal} = useContext (StateContext)
    const [editValue, setEditValue] = useState(false)
    const [, setLocation] = useLocation ();
    const handleButtonClick = () => {
        setLocation('/notificationsTeam')
    };
  return (
    <div className='bg-white grid grid-cols-2 relative'>
     <div className='absolute z-30 top-2 left-3'>
      <IoIosArrowRoundBack onClick= {handleButtonClick} className='cursor-pointer w-10 h-10 hover:scale-125'/>
      </div> 
     <div className='left-[45%] absolute top-4'>
        <img src={logoEduaName} alt="logo" className="w-[170px] h-[55px]" />
     </div>
      
    <div className='mt-24 flex flex-col justify-center items-center'> 
     <div className='w-[25rem] h-[25rem] rounded-full overflow-hidden border-2 border-[#e5e7eb]'>
      <img src= {profileImg} alt="Profile Image" className='w-full h-full'/>
     </div>
     <button>
      <p className='text-[#484646] font-semibold underline mt-10'>Seleccionar nueva foto de perfil</p>       
     </button>
    </div>
     
    <div>
     <div className='mt-[6rem] font-semibold text-[30px] flex justify-center'>
        Hola, Sergio :)
     </div>
     <div className='mt-7 flex items-start flex-col w-[65%]'>
      <ul className='list-none text-black text-[20px] font-semibold flex-col gap-3 flex '>
        <li>
            <p>Apellidos:</p>
        </li>
        <li>
            <p>Cedula: </p>
        </li>
        <li>
            <p>Correo: </p>
        </li>
        <li className='flex justify-between'>
        {editValue 
        ? 
        <div className='flex gap-2'>
          <p>Telefono:</p>
        <Inputs classP={"w-[30rem] h-[2rem]"} />
        </div> 
        :
        <div className='flex gap-2'>
          <p>Telefono:</p>
        </div>}
            <button onClick={() => (setEditValue(!editValue))} className='ml-[8px]'><FaPencilAlt /></button>
        </li>
        <li>
            <p>Cargo: </p>
        </li>
        <li>
            <p>Rol: </p>
        </li>
      </ul>
     </div>
      <div className='flex justify-center mt-20'>
        <Buttons buttonEvent={() => (setViewSuccessModal(true))} btnStyle={"bg-[#D9D9D9]"} label="Actualizar"/>    
      </div>
    </div>
      <ModalSuccess 
        visibility={viewSuccessModal} 
        message="¡Felicidades! Tus datos han sido actualizados con éxito." 
        redirectPath="/profile"/>
    </div>
  )
}