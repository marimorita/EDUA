import { Inputs } from '../../Components/Inputs/Inputs';
import { Buttons } from '../../Components/Buttons/Buttons';
import { useLocation } from 'wouter';
import { StateContext } from '../../Context/Context';
import { axiosInstance } from '../../../axiosConfig';
import { toast, ToastContainer } from 'react-toastify';
import { useState, useRef, useContext, useEffect } from 'react';

export const Form = () => {
  const [, setLocation] = useLocation();
  const [savePassword, setSavePassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState({ name: "", value: "" })
  const { setViewConfirmModal, valueRol, setValueRol, registerUser, setRegisterUser } = useContext(StateContext)
  
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

  const inputIdRef = useRef();
  const inputNameRef = useRef();
  const inputRoleRef = useRef();
  const inputPostRef = useRef();
  const inputEmailRef = useRef();
  const inputPhoneRef = useRef();
  const inputPasswordRef = useRef();
  const inputLastNamesRef = useRef();

  const getInputValue = (e) => {
    const { name, value } = e.target
    if (name === "password") {
      setSavePassword(value)
    }

    const error = validator(name, value)
    setErrorMessage((prevError) => ({ ...prevError, [name]: error }))
  }

  const createUser = async () => {
    if (isSubmitting) return
    setIsSubmitting(true)
    console.log("asd  ")

    const dataUser = {
      id: inputIdRef.current.value,
      name: inputNameRef.current.value,
      lastNames: inputLastNamesRef.current.value,
      email: inputEmailRef.current.value,
      password: inputPasswordRef.current.value,
      post: inputPostRef.current.value,
      cel: inputPhoneRef.current.value,
      role: inputRoleRef.current.value,
      img: ""
    }

    if (inputRoleRef.current.value !== "role") {
      try {
        
        const response = await axiosInstance.post(`${inputRoleRef.current.value}/register`, dataUser)

        if (response.status === 200 || response.status === 201) {
          setViewConfirmModal(false)

          if (valueRol === 'director') {
            setLocation('/director')
          } else if (valueRol === 'memberTeam') {
            setLocation('team')
          } else if (valueRol === 'visitor') {
            setLocation('visitor')
          } else if (valueRol === 'receptionist') {
            setLocation(`/receptionist`)
          }
        }
      } catch (error) {
        setViewConfirmModal(false)
        toast.error(error.response.data.error, {
          autoClose: 2000,
          pauseOnHover: false,
          progressStyle: {
            background: '#59595d'
          },
        })
      } finally {
        setIsSubmitting(false)
      }
    } else {
      toast.error("Selecciona un rol", {
        autoClose: 2000,
        pauseOnHover: false,
        progressStyle: {
          background: '#59595d'
        },
      })
    }
  }

  {
    if (registerUser) {
      createUser()
      setRegisterUser(false)
    } else {
      null
    }
  }

  return (
    <>
      <div className="flex justify-center flex-wrap gap-x-28 gap-y-9">
        <div className="">
          <Inputs inputRef={inputNameRef} inputValue={getInputValue} classP={` ${errorMessage.name ? "border-[#A91010] border-[2px] outline-[#A91010] " : ""}`} nameInputs={"name"}
            placeholder={"Nombre"} />
          <div className='flex items-center justify-center'>
            {errorMessage.name && (<label classP={`w-[80%]`} className='w-[225px] h-4 text-[#A91010] ' htmlFor="">{errorMessage.name}</label>)
            }
          </div>
        </div>
        <div>
          <Inputs inputRef={inputLastNamesRef} inputValue={getInputValue} classP={`${errorMessage.lastname ? "border-[#A91010] border-[2px] outline-[#A91010] " : ""}`} nameInputs={"lastname"}
            placeholder={"Apellidos"} />
          <div className='flex items-center justify-center'>
            {errorMessage.lastname && (<label classP={`w-[80%]`} className='w-[225px] h-4 text-[#A91010] ' htmlFor="">{errorMessage.lastname}</label>)
            }
          </div>
        </div>
        <div>
          <Inputs inputRef={inputIdRef} inputValue={getInputValue} classP={`${errorMessage.id ? "border-[#A91010] border-[2px] outline-[#A91010] " : ""}`} nameInputs={"id"}
            placeholder={"Cédula"} />
          <div className='flex items-center justify-center'>
            {errorMessage.id && (<label classP={`w-[80%]`} className='w-[225px] h-4 text-[#A91010] ' htmlFor="">{errorMessage.id}</label>)
            }
          </div>
        </div>
        <div>
          <Inputs inputRef={inputEmailRef} inputValue={getInputValue} classP={` ${errorMessage.email ? "border-[#A91010] border-[2px] outline-[#A91010] " : ""}`}
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
          <Inputs inputRef={inputPasswordRef} inputValue={getInputValue} classP={` ${errorMessage.confirmPassword ? "border-[#A91010] border-[2px] outline-[#A91010] " : ""}`}
            type={"password"}
            nameInputs={"confirmPassword"}
            placeholder={"Confirmar Contraseña"} />
          <div className='flex items-center justify-center'>
            {errorMessage.confirmPassword && (<label classP={`w-[80%]`} className='w-[225px] h-4 text-[#A91010] ' htmlFor="">{errorMessage.confirmPassword}</label>)
            }
          </div>
        </div>
        <div>
          <Inputs inputRef={inputPostRef} inputValue={getInputValue} classP={` ${errorMessage.job ? "border-[#A91010] border-[2px] outline-[#A91010]" : ""}`}
            nameInputs={"job"}
            placeholder={"Cargo"} />
          <div className='flex items-center justify-center'>
            {errorMessage.job && (<label classP={`w-[80%]`} className='w-[225px] h-4 text-[#A91010] ' htmlFor="">{errorMessage.job}</label>)
            }
          </div>
        </div>
        <div>
          <Inputs inputRef={inputPhoneRef} inputValue={getInputValue} classP={` ${errorMessage.phone ? "border-[#A91010] border-[2px] outline-[#A91010]" : ""}`} nameInputs={"phone"}
            placeholder={"Teléfono"}
            type={"tel"} />
          <div className='flex items-center justify-center'>
            {errorMessage.phone && (<label classP={`w-[80%]`} className='w-[225px] h-4 text-[#A91010]' htmlFor="">{errorMessage.phone}</label>)
            }
          </div>
        </div>
        <div className="w-[80%] flex flex-col items-center gap-y-4">
          <select ref={inputRoleRef}
            onChange={handleChangeUi}
            className="focus:text-black bg-white p-2 rounded w-[100%] border border-gray-300 h-18 font-semibold text-[#9ca3af]">
            <option value="role" disabled selected>Rol</option>
            <option value="receptionist" className="text-black">Recepcionista</option>
            <option value="visitor" className="text-black">Área de visita</option>
            <option value="director" className="text-black">Director del área técnica</option>
            <option value="memberTeam" className="text-black">Miembro del equipo del area técnica</option>
          </select>
        </div>
        <Buttons label={"Registrarme"} buttonEvent={() => (setViewConfirmModal(true))} btnStyle={"bg-[#D9D9D9]"} />
      </div>
      <div>
        <ToastContainer
          position='top-center'
          autoClose={2000}
        />
      </div>
    </>
  );
};