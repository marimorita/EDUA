import React from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useLocation } from 'wouter';

export const ArrowLink = () => {
    const [, setLocation] = useLocation ();
  return (
    <div className='absolute top-2 left-3'>
    <IoIosArrowRoundBack className='cursor-pointer w-10 h-10 hover:scale-125'/>
 </div>  
  )
}
