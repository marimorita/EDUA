import React, { useState } from 'react';
import { Inputs } from '../../Components/Inputs/Inputs';

export const FormLogin = () => {
    const [errorMessage, setErrorMessage] = useState({ name: "", value: "" })
    const [savePassword, setSavePassword] = useState('')
  
    const validator = (name, value) => {
      let error = ""
      if (name === "email") {
        if (value.trim() === "") {
          error = "No olvides llenar este campo.";
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
          error = "¡Ups! Parece que olvidaste el '@' o un dominio";
        }
      }
      if (name === "password") {
        if (value.trim() === "") {
          error = "No olvides llenar este campo"
        } else if (value !== savePassword) {
          error = "La contraseña es inconrrecta. Intenta de nuevo"
        }
      }
      return error
    }
    const getInputValue = (e) => {
      const { name, value } = e.target
      if (name === "password") {
        setSavePassword(value)
      }
  
      const error = validator(name, value)
      setErrorMessage((prevError) => ({ ...prevError, [name]: error }))
    }
    return (
      <form className='flex justify-center flex-col space-y-4'>
        <div>
          <Inputs inputValue={getInputValue} classP={`w-[65%] ${errorMessage.email ? "border-[#A91010] border-[2px] outline-[#A91010] " : ""}`}
            nameInputs={"email"}
            placeholder={"Correo electrónico"} />
          <div className='flex items-center justify-center'>
            {errorMessage.email && (<label className='w-[65%] h-18 mt-[2px] text-[#A91010] ' htmlFor="">{errorMessage.email}</label>)
            }
          </div>
        </div>
        <div>
          <Inputs inputValue={getInputValue} classP={`w-[65%] ${errorMessage.password ? "border-[#A91010] border-[2px] outline-[#A91010] " : ""}`} type={"password"}
            nameInputs={"password"}
            placeholder={"Contraseña"} />
          <div className='flex items-center justify-center'>
            {errorMessage.password && (<label className='w-[65%] h-18 mt-[2px] text-[#A91010] ' htmlFor="">{errorMessage.password}</label>)
            }
          </div>
        </div>
      </form>
    )
  }