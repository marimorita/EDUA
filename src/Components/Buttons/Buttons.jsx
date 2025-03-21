import React, { Children } from 'react'

export const Buttons = ({ buttonEvent, label, btnStyle }) => {
  return (
    <div className='flex justify-center flex-col space-y-4'>
      <button onClick={buttonEvent} className={`${btnStyle} w-28 h-11 font-medium text-black rounded-md hover:bg-black hover:text-white hover:scale-105 hover:shadow-lg transition duration-300`}> {label} </button>
    </div>
  )
} 