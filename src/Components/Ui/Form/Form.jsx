import React, { useState } from 'react';
import { Inputs } from '../../Ui/Inputs/Inputs';
import { Buttons } from '../Buttons/Buttons';
import { useLocation } from 'wouter';

export const Form = () => {
  const [changeUi, setChangeUi] = useState('');
  const [errorMessage, setErrorMessage] = useState({ name: "", value: "" })
  const [, setLocation] = useLocation();
  const [savePassword , setSavePassword] = useState ('')

  const handleChangeUi = (event) => {
    setChangeUi(event.target.value);
  };

  const handleButtonClick = () => {
    if (changeUi === "") {
      setLocation('/login');
    } else {
      setLocation(`/${changeUi.toLowerCase()}`);
    }
  };

  const validator = (name, value) => {
    let error = ""
    if (name === "name") {
      if (!/^[a-zA-Z\s]*$/.test(value)) {
        error = "Asegúrate de escribir tu nombre solo con letras";
      }else if (value.trim() === "") {
        error = "No olvides llenar este campo."; 
      }
    }
    if (name === "lastname") {
      if (!/^[a-zA-Z\s]*$/.test(value)) {
        error = "Asegúrate de escribir tus apellidos solo con letras";
      }else if (value.trim() === "") {
        error = "No olvides llenar este campo."; 
      }
    } 
    if (name === "id") {
      if (value.trim() === "") {
        error = "No olvides llenar este campo.";
      } else if (!/^[0-9]*$/.test(value)) { 
        error = "Asegúrate de escribir tu documento solo con números";
      }
    }
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
      } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\S]{8,}$/.test(value)) {
        error = "La contraseña debe incluir mínimo 8 caracteres, al menos una letra, un número y un carácter especial (#, $, * etc)"
      }
    }
    if (name === "confirmPassword") {
      if (value.trim() === "") {
        error = "No olvides llenar este campo.";
      } else if (value !== savePassword) {
        error = "Tus contraseñas no coinciden.";
      }
    }
    if (name === "direction") {
      if (!value.trim()) {
        error = "No olvides llenar este campo.";
      } 
      else if (!/^[a-zA-Z0-9\s#\-\/]+$/.test(value)) {
        error = "Ingresa solo caracteres permitidos (# - /)";
      }
    }
    if (name === "phone") {
      if (value.trim() === "") { 
        error = "No olvides llenar este campo.";
      } else if (!/^[0-9]+$/.test(value)) { 
        error = "Asegúrate de escribir tu telefono solo con numeros";
      }
    }
    if (name === "job") {
      if (value.trim() === "") { 
        error = "No olvides llenar este campo.";
      } else if (!/^[a-zA-Z\s\-\/]+$/.test(value)) { 
        error = "Asegúrate de escribir tu cargo solo con letras";
      }
    }
    return error;
  } 

  const getInputValue = (e) => {
    const { name, value } = e.target

    if (name === "password") {
      setSavePassword(value )
    }

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
        <Inputs inputValue={getInputValue} classP={`${errorMessage.lastname ? "border-[#A91010] border-[2px] outline-[#A91010] " : ""}`} nameInputs={"lastname"} 
        placeholder={"Apellidos"} />
        <div className='flex items-center justify-center'>
          {errorMessage.lastname && (<label className=' w-[65%] h-18 mt-[2px] text-[#A91010] ' htmlFor="">{errorMessage.lastname}</label>)
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
        <Inputs inputValue={getInputValue} classP={`${errorMessage.email ? "border-[#A91010] border-[2px] outline-[#A91010] " : ""}`} 
        nameInputs={"email"} 
        placeholder={"Correo electrónico"} />
        <div className='flex items-center justify-center'>
          {errorMessage.email && (<label className='w-[65%] h-18 mt-[2px] text-[#A91010] ' htmlFor="">{errorMessage.email}</label>)
          }
        </div>
      </div>
      <div>
        <Inputs inputValue={getInputValue} classP={`${errorMessage.password ? "border-[#A91010] border-[2px] outline-[#A91010] " : ""}`} 
        type={"password"} 
        nameInputs={"password"} 
        placeholder={"Contraseña"} />
      <div className='flex items-center justify-center'>
          {errorMessage.password && (<label className='w-[65%] h-18 mt-[2px] text-[#A91010] ' htmlFor="">{errorMessage.password}</label>)
          }
        </div>
      </div>
      <div>
        <Inputs inputValue={getInputValue} classP={`${errorMessage.confirmPassword ? "border-[#A91010] border-[2px] outline-[#A91010] " : ""}`} 
        type={"password"} 
        nameInputs={"confirmPassword"} 
        placeholder={"Confirmar Contraseña"} />
      <div className='flex items-center justify-center'>
          {errorMessage.confirmPassword && (<label className='w-[65%] h-18 mt-[2px] text-[#A91010] ' htmlFor="">{errorMessage.confirmPassword}</label>)
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
  const [errorMessage, setErrorMessage] = useState ({name:"" , value:""})
  const [savePassword , setSavePassword] = useState ('')

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
      setSavePassword(value )
    }

    const error = validator(name, value)
    setErrorMessage((prevError) => ({ ...prevError, [name]: error }))
  }
  return (
    <form className='flex justify-center flex-col space-y-4'>
        <div>
        <Inputs inputValue={getInputValue} classP={`${errorMessage.email ? "border-[#A91010] border-[2px] outline-[#A91010] " : ""}`} 
        nameInputs={"email"} 
        placeholder={"Correo electrónico"} />
        <div className='flex items-center justify-center'>
          {errorMessage.email && (<label className='w-[65%] h-18 mt-[2px] text-[#A91010] ' htmlFor="">{errorMessage.email}</label>)
          }
        </div>
      </div>
      <div>
      <Inputs inputValue={getInputValue} classP={`${errorMessage.password ? "border-[#A91010] border-[2px] outline-[#A91010] " : ""}`} type={"password"} 
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