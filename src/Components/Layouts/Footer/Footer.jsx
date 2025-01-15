import React from 'react'
import { IoIosArrowUp } from "react-icons/io";

export const Footer = () => {
  return (
    <footer id="footer" className='flex justify-center items-center w-full h-[120px] bg-[#701819]'>
    <div className='flex-col flex justify-center items-center w-full text-white'>
        <IoIosArrowUp fontSize={55}/>
      <p className='text-white text-[30px] font-semibold'>Volver al inicio</p>
    </div>
  </footer>
  )
}