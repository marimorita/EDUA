import React, { useRef } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import logoEdua from '../../assets/Images/logoEdua.svg';

export const Footer = ({ clickButton }) => {
  return (
    <>
      <div className='flex justify-center items-center h-screen mt-10 w-full'>
        <img src={logoEdua} alt="Logo Image" className='w-[65rem] h-[45rem]' />
      </div>
      <footer id="footer" className='flex justify-center items-center w-full h-[100px] bg-[#701819]'>
        <div className='flex-col flex justify-center items-center w-full text-white'>
          <button onClick={clickButton}>
            <IoIosArrowUp fontSize={55} />
          </button>
          <p className='text-white text-[30px] font-semibold'>Volver al inicio</p>
        </div>
      </footer>
    </>
  )
} 