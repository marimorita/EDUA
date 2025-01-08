import React, { useState } from 'react';
import { Inputs } from '../../Ui/Inputs/Inputs';
import { Buttons } from '../Buttons/Buttons';
import { useLocation } from 'wouter';

export const Form = () => {
  const [changeUi, setChangeUi] = useState('');
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

  return (
    <form className="flex justify-center flex-col space-y-4">
      <Inputs placeholder={"Nombre"} />
      <Inputs placeholder={"Cédula"} />
      <Inputs placeholder={"Correo electrónico"} />
      <Inputs placeholder={"Dirección"} />
      <Inputs placeholder={"Teléfono"} />
      <Inputs placeholder={"Cargo"} />
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
        <Buttons label={"Registrarme"} buttonEvent={handleButtonClick} mt={"bg-[#D9D9D9]"}/>
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