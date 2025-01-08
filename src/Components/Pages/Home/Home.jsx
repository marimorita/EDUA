import React from 'react';
import tecnica from '../../../assets/Images/tecnica.png';
import logoEduaTittle from '../../../assets/Images/logoEdua.png';
import user from '../../../assets/Images/user.jpg';

export const Home = () => {
  return (
    <div className="bg-white grid grid-cols-2 h-screen relative">
      <div className="absolute top-4 left-4">
        <img src={logoEduaTittle} alt="logo" className="w-[150px]" />
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="font-semibold text-[60px]">¡Bienvenido Sergio!</h1>
        <p className="font-semibold text-[35px]">Al área técnica</p>
      </div>

      <div className="absolute top-4 right-4">
        <img src={user} alt="user" className='w-[60px] mt-5' />
      </div>

      <div className="flex justify-center items-center">
        <img src={tecnica} alt="técnica" className="w-[550px] h-[370px]" />
      </div>
    </div>
  );
};