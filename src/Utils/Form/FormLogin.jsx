import { Inputs } from '../../Components/Inputs/Inputs';
import { Buttons } from '../../Components/Buttons/Buttons';
import { axiosInstance } from '../../../axiosConfig';
import { toast, ToastContainer } from 'react-toastify';
import React, { useState, useRef } from 'react';

export const FormLogin = () => {
  const [errorMessage, setErrorMessage] = useState({ name: "", value: "" })
  const [savePassword, setSavePassword] = useState('')
  const inputPasswordRef = useRef();
  const inputEmailRef = useRef();
  const inputRoleRef = useRef();

  const handleButtonClickPassword = () => {
    setLocation(`/forgotPassword`);
  };

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

  const login = async () => {

    const userData = {
      email: inputEmailRef.current.value,
      password: inputPasswordRef.current.value,
    }

    try {
      const response = await axiosInstance.post(`${inputRoleRef.current.value}/login`,userData
      );

      if (response.status === 200 || response.status === 201) {
        const token = response.data.token;
        const role = response.data.role;
        const route = response.data.routeCode;

        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
        localStorage.setItem('route', route);

        await sendVerificationCode(token);

      } else {
        toast.error(error.response.data.error, {
          progressStyle: {
            backgroundColor: '#A91010',
          }
        })
      }
    } catch (error) {
      toast.error(error.response.data.error, {
        progressStyle: {
          backgroundColor: '#A91010',
        },
      });
    }
  }

  const sendVerificationCode = async (token) => {
    try {
      const response = await axiosInstance.post(
        '/vr/verifytokenandsendcode',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
    } catch (error) {
      toast.error(error.response.data.error, {
        progressStyle: {
          backgroundColor: '#A91010',
        },
      });
    }
  }
  return (
    <div className='flex justify-center flex-col space-y-4'>
      <div>
        <Inputs inputValue={getInputValue} classP={`w-[65%] ${errorMessage.email ? "border-[#A91010] border-[2px] outline-[#A91010] " : ""}`}
          nameInputs={"email"}
          placeholder={"Correo electrónico"}
          inputRef={inputEmailRef} />
        <div className='flex items-center justify-center'>
          {errorMessage.email && (<label className='w-[65%] h-18 mt-[2px] text-[#A91010] ' htmlFor="">{errorMessage.email}</label>)
          }
        </div>
      </div>
      <div>
        <Inputs inputValue={getInputValue} classP={`w-[65%] ${errorMessage.password ? "border-[#A91010] border-[2px] outline-[#A91010] " : ""}`} type={"password"}
          nameInputs={"password"}
          placeholder={"Contraseña"}
          inputRef={inputPasswordRef} />

        <select ref={inputRoleRef}
          className="focus:text-black bg-white p-2 rounded w-[66%] border border-gray-300 h-18 font-semibold text-[#9ca3af] mt-[20px] ml-[6.5rem]">
          <option value="" disabled selected>Rol</option>
          <option value="receptionist" className="text-black">Recepcionista</option>
          <option value="visitor" className="text-black">Área de visita</option>
          <option value="director" className="text-black">Director del área técnica</option>
          <option value="memberTeam" className="text-black">Miembro del equipo del area técnica</option>
        </select>

        <div className='flex flex-col items-center justify-center'>
          {errorMessage.password && (<label className='w-[65%] h-18 mt-[2px] text-[#A91010] ' htmlFor="">{errorMessage.password}</label>)
          }
          <div className="">
            <button onClick={handleButtonClickPassword} className='text-[#484646] font-semibold flex text-start text-[13px] mt-[15px]'>He olvidado mi contraseña</button>
            <Buttons buttonEvent={login} btnStyle={"mt-5 bg-[#D9D9D9]"} label="Iniciar sesión" />
          </div>
        </div>
      </div>
      <ToastContainer
        position='top-center'
        autoClose={2000}
        pauseOnHover={false}
      />
    </div>
  )
}