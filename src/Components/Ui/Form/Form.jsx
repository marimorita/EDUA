  import React from 'react'
  import { Inputs } from '../../Ui/Inputs/Inputs'

  export const Form = () => {
    return (
      <form className='flex justify-center flex-col space-y-4'>
        <Inputs placeholder={"Nombre"} />
        <Inputs placeholder={"Cédula"} />
        <Inputs placeholder={"Correo electrónico"} />
        <Inputs placeholder={"Dirección"} />
        <Inputs placeholder={"Teléfono"} />
        <Inputs placeholder={"Cargo"} />
        <div className='flex items-center justify-center'>
         <select className='focus:text-black bg-white p-2 rounded w-[65%] border border- h-18 font-semibold text-[#9ca3af]'>
          <option value="Rol" disabled selected>Rol</option>
          <option value="Técnica"className='text-black'>Técnica </option>
          <option value="Administrativa"className='text-black'>Administrativa</option> 
          <option value="Juridica"className='text-black'>Jurídica </option>
          <option value="Consulta"className='text-black'>Consulta</option>
          <option value="Administrador" className='text-black'>Administrador</option>
        </select>
        </div>
      </form>
    )
  }

  export const FormLogin = () => {
    return (
      <form className='flex justify-center flex-col space-y-4'>
        <Inputs placeholder={"Correo electrónico"} />
        <Inputs type={"password"} placeholder={"Contraseña"} />
      </form>
    )
  }