import React from 'react'
import img404 from '../../../assets/Images/404.svg';
import logoName from '../../../assets/Images/logoEduaName.svg';
import { FaHome } from "react-icons/fa";
import { useLocation } from 'wouter';

export const Error = () => {
  const [, setLocation] = useLocation()
  const backHome = () => {
    setLocation(`/`)
  }
  return (
    <div>
      <div className="absolute m-4">
        <img src={logoName} alt="logo" className="w-[160px] h-[55px]" />
      </div>
      <div className="flex justify-center m-2  mt-10">
        <img src={img404} alt="error 404" className='w-[50rem]' />
      </div>
      <div className="flex justify-center">
        <FaHome className='w-12 h-12 text-[#434343] cursor-pointer hover:scale-125 transition duration-300' onClick={backHome} />
      </div>
    </div>
  )
}