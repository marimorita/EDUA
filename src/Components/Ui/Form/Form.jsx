import React, { useState } from 'react';
import { Inputs } from '../../Ui/Inputs/Inputs';
import { Buttons } from '../Buttons/Buttons';
import { useLocation } from 'wouter';

export const Form = () => {
  const [changeUi, setChangeUi] = useState('');
  const [errorMessage, setErrorMessage] = useState({ name: "", value: "" })
  const [, setLocation] = useLocation();

  const handleChangeUi = (event) => {
    setChangeUi(event.target.value);
  };

  const handleButtonClick = () => {
    if (changeUi === "") {
      setLocation('/');
    } else {
      setLocation(`/${changeUi.toLowerCase()}`);
    }
  };

  const validator = (name, value) => {
    let error = ""
    if (name === "name") {
      if (!/^[a-zA-Z\s]*$/.test(value)) {
        error = "Asegúrate de escribir tu nombre solo con letras";
      }else if (value === "") {
        error = "No olvides llenar este campo."; 
      }
    } 
    if (name === "id") {
      if (!/^[0-9]*$/.test(value)) {
        error = "Asegúrate de escribir tu documento solo con numeros";
      }else if (value === "") {
        error = "No olvides llenar este campo."; 
      }
    }
    if (name === "email") {
      if (value === "") {
        error = "No olvides llenar este campo.";
      } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
        error = "¡Ups! Parece que olvidaste el '@' o un dominio";
      }
    }
    if (name === "direction") {
      if (/^[a-zA-Z\s]*$/.test(value)) {
        error = "No olvides llenar este campo.";
      }
    }
    if (name === "phone") {
      if (!/^[0-9]*$/.test(value)) {
        error = "Asegúrate de escribir tu telefono solo con numeros";   
      }else if (value === "") {
        error = "No olvides llenar este campo."; 
      }
    }
    if (name === "job") {
      if (!/^[a-zA-Z\s]*$/.test(value)) {
        error = "Aegurate de escribir tu cargo solo con letras"
      }else if (value === "") {
        error = "No olvides llenar este campo."; 
      }
    }
    return error;
  } 

  const getInputValue = (e) => {
    const { name, value } = e.target

    const error = validator(name, value)
    setErrorMessage((prevError) => ({ ...prevError, [name]: error }))
  }

  return (
    <form className="flex justify-center flex-col space-y-4">
      <div>
        <Inputs inputValue={getInputValue} classP={`${errorMessage.name ? "border-[#A91010] border-[2px] outline-[#A91010] " : ""}`} nameInputs={"name"} 
        placeholder={"Nombre"} />
        <div className='flex items-center justify-center'>
          {errorMessage.name && (<label className=' w-[65%] h-18 mt-[2px] text-[#A91010] ' htmlFor="">{errorMessage.name}</label>)
          }
        </div>
      </div>
      <div>
        <Inputs inputValue={getInputValue} classP={`${errorMessage.id ? "border-[#A91010] border-[2px] outline-[#A91010] " : ""}`} nameInputs={"id"} 
        placeholder={"Cédula"} />
        <div className='flex items-center justify-center'>
        {errorMessage.id && (<label className='w-[65%] h-18 mt-[2px] text-[#A91010] ' htmlFor="">{errorMessage.id}</label>)
        }
        </div>
      </div>
      <div>
        <Inputs inputValue={getInputValue} classP={`${errorMessage.email ? "border-[#A91010] border-[2px] outline-[#A91010] " : ""}`} nameInputs={"email"} 
        placeholder={"Correo electrónico"} />
        <div className='flex items-center justify-center'>
          {errorMessage.email && (<label className='w-[65%] h-18 mt-[2px] text-[#A91010] ' htmlFor="">{errorMessage.email}</label>)
          }
        </div>
      </div>
      <div>
        <Inputs inputValue={getInputValue} classP={`${errorMessage.direction ? "border-[#A91010] border-[2px] outline-[#A91010]" : ""}`} 
        nameInputs={"direction"} 
        placeholder={"Dirección"} />
        <div className='flex items-center justify-center'>
          {errorMessage.direction && (<label className='w-[65%] h-18 mt-[2px] text-[#A91010] ' htmlFor="">{errorMessage.direction}</label>)
          }
        </div>
      </div>
      <div>
        <Inputs inputValue={getInputValue} classP={`${errorMessage.job ? "border-[#A91010] border-[2px] outline-[#A91010]" : ""}`} 
        nameInputs={"job"}
        placeholder={"Cargo"} />
        <div className='flex items-center justify-center'>
          {errorMessage.job && (<label className='w-[65%] h-18 mt-[2px] text-[#A91010] ' htmlFor="">{errorMessage.job}</label>)
          }
        </div>
      </div>
      <div>
        <Inputs inputValue={getInputValue} classP={`${errorMessage.phone ? "border-[#A91010] border-[2px] outline-[#A91010]" : ""}`} nameInputs={"phone"} 
        placeholder={"Teléfono"} />
        <div className='flex items-center justify-center'>
          {errorMessage.phone && (<label className='w-[65%] h-18 mt-[2px] text-[#A91010] ' htmlFor="">{errorMessage.phone}</label>)
          }
        </div>
      </div>

      <div className="flex items-center justify-center">
        <select
          value={changeUi}
          onChange={handleChangeUi}
          className="focus:text-black bg-white p-2 rounded w-[65%] border border-gray-300 h-18 font-semibold text-[#9ca3af]"
        >
          <option value="" disabled selected>Rol</option>
          <option value="Técnica" className="text-black">Técnica</option>
          <option value="Login" className="text-black">Login</option>
          <option value="Administrativa" className="text-black">Administrativa</option>
          <option value="Juridica" className="text-black">Jurídica</option>
          <option value="Consulta" className="text-black">Consulta</option>
          <option value="Administrador" className="text-black">Administrador</option>
        </select>
      </div>
      <div className="flex items-center justify-center">
        <Buttons label={"Registrarme"} buttonEvent={handleButtonClick} mt={"bg-[#D9D9D9]"} />
      </div>
    </form>
  );
};

export const FormLogin = () => {
  return (
    <form className='flex justify-center flex-col space-y-4'>
      <Inputs placeholder={"Correo electrónico"} />
      <Inputs type={"password"} placeholder={"Contraseña"} />
    </form>
  )
}