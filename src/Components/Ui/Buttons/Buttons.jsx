import React from 'react'

export const Buttons = ({ label, mt }) => {
  return (
    <div className='flex justify-center flex-col space-y-4'>
    <button className={`${mt} bg-[#D9D9D9] font-medium text-black w-28 h-11 rounded-md hover:bg-black hover:text-white hover:scale-105 hover:shadow-lg transition duration-300`}> { label } </button>
    </div>
  )
}