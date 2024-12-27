import React from 'react'
import { Form } from '../../Ui/Form/Form'
import logoEdua from '../../../assets/Images/logoEdua.png'
import { Buttons } from '../../Ui/Buttons/Buttons'

export const Register = () => {
  return (
   <div className='bg-white grid grid-cols-2 h-screen items-center relative'>
    <div className='flex justify-center'>
      <img src={logoEdua} alt="Logo" className='w-190 h-80'/>
    </div>

    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-l border-[#eb1520] h-[28rem]"></div>

    <div className="bg-white flex justify-center flex-col space-y-4">
      <h1 className='flex items-center justify-center font-semibold text-[30px]'> Regístrate </h1> 
      <Form />
       <div className='flex justify-center gap-1'>
        <p className='text-[#484646] font-semibold '>¿Ya estas registrado?</p>
        <p className='text-[#701819] font-semibold'>Inicia sesión aquí</p> 
       </div>       
     <div className='flex items-center justify-center'><Buttons label ={"Registrarme"}/></div>
    </div>
   </div>
  )
}