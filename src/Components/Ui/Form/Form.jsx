  import React from 'react'
  import { Inputs } from '../../Ui/Inputs/Inputs'

  export const Form = () => {
    return (
      <form className='flex justify-center flex-col space-y-4'>
        <Inputs placeholder={"Nombre"} />
        <Inputs placeholder={"Cedula"} />
        <Inputs placeholder={"Correo"} />
        <Inputs placeholder={"Dirección"} />
        <Inputs placeholder={"Telefono"} />
        <Inputs placeholder={"Cargo"} />
        <Inputs placeholder={"Rol"} />
      </form>
    )
  }

  export const FormLogin = () => {
    return (
      <form className='flex justify-center flex-col space-y-4'>
        <Inputs placeholder={"Correo Electronico"} />
        <Inputs placeholder={"Contraseña"} />
      </form>
    )
  }