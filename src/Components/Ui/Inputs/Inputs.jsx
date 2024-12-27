import React from 'react'

export const Inputs = ({ placeholder, type }) => {
    return (
        <div className='flex items-center justify-center'>
            <input type={ type } placeholder={ placeholder } className='bg-white border border- text-black p-2 rounded w-[65%] h-18 font-semibold' />
        </div>
    )
}