import React, { useState, useContext } from 'react';
import { Inputs } from '../../Components/Inputs/Inputs';
import { Buttons } from '../../Components/Buttons/Buttons';
import { StateContext } from '../../Context/Context';

export const Form = () => {
  const [errorMessage, setErrorMessage] = useState({ name: "", value: "" })
  const [savePassword, setSavePassword] = useState('')
  const { setViewConfirmModal, setValueRol } = useContext(StateContext)
  const handleChangeUi = (event) => {
    setValueRol(event.target.value)
  };
  const validator = (name, value) => {
    let error = ""
    if (name === "name") {
      if (!/^[a-zA-Z\s]*$/.test(value)) {
        error = "Escribe tu nombre solo con letras";
      } else if (value.trim() === "") {
        error = "No olvides llenar este campo.";
      }
    }
    if (name === "lastname") {
      if (!/^[a-zA-Z\s]*$/.test(value)) {
        error = "Escribe tus apellidos solo con letras";
      } else if (value.trim() === "") {
        error = "No olvides llenar este campo.";
      }
    }
    if (name === "id") {
      if (value.trim() === "") {
        error = "No olvides llenar este campo.";
      } else if (!/^[0-9]*$/.test(value)) {
        error = "Escribe tu documento solo con números";
      } if (value.trim().length > 10) {
        error = "Tu documento no debe contener mas de 10 digitos";
      } else if (value.trim().length < 7) {
        error = "Tu documento no debe contener menos de 7 digitos";
      }
    }
    if (name === "email") {
      if (value.trim() === "") {
        error = "No olvides llenar este campo.";
      } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
        error = "Parece que olvidaste el '@' o un dominio";
      }
    }
    if (name === "password") {
      if (value.trim() === "") {
        error = "No olvides llenar este campo"
      } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#^_\-+=])[A-Za-z\d@$!%*?&#^_\-+=]{8,}$/.test(value)) {
        error = "Mínimo 8 caracteres, una letra, un número y un carácter especial"
      }
    }
    if (name === "confirmPassword") {
      if (value.trim() === "") {
        error = "No olvides llenar este campo.";
      } else if (value !== savePassword) {
        error = "Tus contraseñas no coinciden.";
      }
    }
    if (name === "phone") {
      if (value.trim() === "") {
        error = "No olvides llenar este campo.";
      } else if (!/^[0-9]+$/.test(value)) {
        error = "Escribe tu telefono solo con numeros";
      } else if (value.length !== 10) {
        error = "Escribe solo 10 digitos.";
      }
    }
    if (name === "job") {
      if (value.trim() === "") {
        error = "No olvides llenar este campo.";
      } else if (!/^[a-zA-Z\s\-\/]+$/.test(value)) {
        error = "Escribe tu cargo solo con letras";
      }
    }
    return error;
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
    <>
      <div className="flex justify-center flex-wrap gap-x-28 gap-y-9">
        <div className="">
          <Inputs inputValue={getInputValue} classP={` ${errorMessage.name ? "border-[#A91010] border-[2px] outline-[#A91010] " : ""}`} nameInputs={"name"}
            placeholder={"Nombre"} />
          <div className='flex items-center justify-center'>
            {errorMessage.name && (<label classP={`w-[80%]`} className='w-[225px] h-4 text-[#A91010] ' htmlFor="">{errorMessage.name}</label>)
            }
          </div>
        </div>
        <div>
          <Inputs inputValue={getInputValue} classP={`${errorMessage.lastname ? "border-[#A91010] border-[2px] outline-[#A91010] " : ""}`} nameInputs={"lastname"}
            placeholder={"Apellidos"} />
          <div className='flex items-center justify-center'>
            {errorMessage.lastname && (<label classP={`w-[80%]`} className='w-[225px] h-4 text-[#A91010] ' htmlFor="">{errorMessage.lastname}</label>)
            }
          </div>
        </div>
        <div>
          <Inputs inputValue={getInputValue} classP={`${errorMessage.id ? "border-[#A91010] border-[2px] outline-[#A91010] " : ""}`} nameInputs={"id"}
            placeholder={"Cédula"} />
          <div className='flex items-center justify-center'>
            {errorMessage.id && (<label classP={`w-[80%]`} className='w-[225px] h-4 text-[#A91010] ' htmlFor="">{errorMessage.id}</label>)
            }
          </div>
        </div>
        <div>
          <Inputs inputValue={getInputValue} classP={` ${errorMessage.email ? "border-[#A91010] border-[2px] outline-[#A91010] " : ""}`}
            nameInputs={"email"}
            placeholder={"Correo electrónico"} />
          <div className='flex items-center justify-center'>
            {errorMessage.email && (<label classP={`w-[80%]`} className='w-[225px] h-4 text-[#A91010]' htmlFor="">{errorMessage.email}</label>)
            }
          </div>
        </div>
        <div>
          <Inputs inputValue={getInputValue} classP={` ${errorMessage.password ? "border-[#A91010] border-[2px] outline-[#A91010] " : ""}`}
            type={"password"}
            nameInputs={"password"}
            placeholder={"Contraseña"} />
          <div className='flex items-center justify-center'>
            {errorMessage.password && (<label classP={`w-[80%]`} className='w-[225px] h-10 text-[#A91010] ' htmlFor="">{errorMessage.password}</label>)
            }
          </div>
        </div>
        <div>
          <Inputs inputValue={getInputValue} classP={` ${errorMessage.confirmPassword ? "border-[#A91010] border-[2px] outline-[#A91010] " : ""}`}
            type={"password"}
            nameInputs={"confirmPassword"}
            placeholder={"Confirmar Contraseña"} />
          <div className='flex items-center justify-center'>
            {errorMessage.confirmPassword && (<label classP={`w-[80%]`} className='w-[225px] h-4 text-[#A91010] ' htmlFor="">{errorMessage.confirmPassword}</label>)
            }
          </div>
        </div>
        <div>
          <Inputs inputValue={getInputValue} classP={` ${errorMessage.job ? "border-[#A91010] border-[2px] outline-[#A91010]" : ""}`}
            nameInputs={"job"}
            placeholder={"Cargo"} />
          <div className='flex items-center justify-center'>
            {errorMessage.job && (<label classP={`w-[80%]`} className='w-[225px] h-4 text-[#A91010] ' htmlFor="">{errorMessage.job}</label>)
            }
          </div>
        </div>
        <div>
          <Inputs inputValue={getInputValue} classP={` ${errorMessage.phone ? "border-[#A91010] border-[2px] outline-[#A91010]" : ""}`} nameInputs={"phone"}
            placeholder={"Teléfono"}
            type={"tel"} />
          <div className='flex items-center justify-center'>
            {errorMessage.phone && (<label classP={`w-[80%]`} className='w-[225px] h-4 text-[#A91010]' htmlFor="">{errorMessage.phone}</label>)
            }
          </div>
        </div>
        <div className="w-[80%] flex flex-col items-center gap-y-4">
          <select
            onChange={handleChangeUi}
            className="focus:text-black bg-white p-2 rounded w-[100%] border border-gray-300 h-18 font-semibold text-[#9ca3af]">
            <option value="" disabled selected>Rol</option>
            <option value="Receptionist" className="text-black">Recepcionista</option>
            <option value="Visitor" className="text-black">Área de visita</option>
            <option value="Director Técnica" className="text-black">Director del área técnica</option>
            <option value="Miembro Técnica" className="text-black">Miembro del equipo del area técnica</option>
          </select>
        </div>
        <Buttons label={"Registrarme"} buttonEvent={() => { setViewConfirmModal(true) }} btnStyle={"bg-[#D9D9D9]"} />
      </div>
    </>
  );
};