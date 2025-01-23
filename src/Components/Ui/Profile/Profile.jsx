import React from 'react'
import logoEduaName from '../../../assets/Images/logoEduaName.svg'
import profileImg from '../../../assets/Images/profile.svg'
import { Buttons } from '../Buttons/Buttons'
import { FaPencilAlt } from "react-icons/fa";
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useLocation } from 'wouter';

export const Profile = () => {
    const [, setLocation] = useLocation ();
    const handleButtonClick = () => {
        setLocation('/admin')
    };
  return (
    <div className='bg-white grid grid-cols-2 relative'>
     <div className='absolute top-2 left-3'>
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
     <div className=' mt-[6rem] font-semibold text-[30px] flex justify-center'>
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
            <p>Telefono:</p>
            <button className='ml-[30rem]'><FaPencilAlt /></button>
        </li>
        <li className='flex justify-between'>
            <p>Telefono:</p>
            <button className='ml-[30rem]'><FaPencilAlt /></button>
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
        <Buttons btnStyle={"bg-[#D9D9D9]"} label="Actualizar"/>    
      </div>
    </div>
    </div>
  )
}

