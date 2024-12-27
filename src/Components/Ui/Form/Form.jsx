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
        <Inputs placeholder={"Rol"} />
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