import React, { useRef } from 'react'
import { IoIosArrowUp } from "react-icons/io";

export const Footer = ({clickButton}) => {
  const scrollHome = useRef (null)  
   return (
    <footer id="footer" className='flex justify-center items-center w-full h-[100px] bg-[#701819]'>
    <div className='flex-col flex justify-center items-center w-full text-white'>
      <button onClick={clickButton}>
        <IoIosArrowUp fontSize={55}/>
      </button>
      <p className='text-white text-[30px] font-semibold'>Volver al inicio</p>
    </div>
  </footer>
  )
} 