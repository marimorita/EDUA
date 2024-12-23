import React from 'react'

export const Buttons = ({ label }) => {
  return (
    <div className='flex justify-center flex-col space-y-4'>
    <button className='bg-[#D9D9D9] text-black w-28 h-11 rounded-md mt-5 hover:bg-black hover:text-white hover:scale-105 hover:shadow-lg transition duration-300'> {label } </button>
    </div>
  )
}