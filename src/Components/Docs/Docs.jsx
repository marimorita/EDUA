import React from 'react'
import logoEduaName from '../../assets/Images/logoEduaName.svg';
import { useLocation } from 'wouter';
import { IoIosArrowRoundBack } from 'react-icons/io'

export const Docs = ({ redirectPathBack, tittle, text, Icon, button }) => {
  const [, setLocation] = useLocation('')
  const clickButton = () => {
    setLocation(redirectPathBack);
  }
  return (
    <>
      <div className='absolute z-30 top-2 left-3'>
        <IoIosArrowRoundBack onClick={clickButton} className='cursor-pointer w-10 h-10 hover:scale-125' />
      </div>
      <div className="absolute top-4 left-[45%]">
        <img src={logoEduaName} alt="logo" className="w-[140px] h-[45px]" />
      </div>
      <div className='w-[100%] flex flex-col flex-wrap justify-center mt-20 items-center'>
        <div className='flex items-center justify-center '>
          <Icon className='cursor-pointer w-10 h-10 text-[#434343]' />
          <h1 className='font-semibold text-[25px] mx-2'>{tittle}</h1>
        </div>
        <p className='font-semibold text-[20px]'>{text}</p>
      </div>
    </>
  )
}