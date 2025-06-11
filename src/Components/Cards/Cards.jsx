import React, { useContext, useState } from 'react'
import { useLocation } from "wouter";
import { FaUserCircle } from "react-icons/fa";

export const Cards = ({ message, tittle, handleButtonClick, Icon }) => {

  const [, setLocation] = useLocation();
  return (
    <div className="flex w-[80%] justify-start ">
      <div className='h-50 w-[100%] rounded-3xl border p-4 mt-10 duration-300 border-[#9a9b9e] hover:scale-105 transition-all'  >
        <div className='flex justify-start  '>
          <div className='w-8 h-8 m-1 text-[#434343]'>
            <Icon className='w-8 h-8 ' />
          </div>
          <h1 className="text-black font-semibold text-[25px]">
            {tittle}
          </h1>
        </div>
        <div className="flex flex-col ">
          <p className="my-2 text-black font-semibold text-[18px]">{message}</p>
          <button onClick={handleButtonClick} className="text-[17px] font-semibold text-start text-[#434343]">Ver mas...</button>
        </div>
      </div>
    </div>
  )
}


export const CardTeam = ({ name }) => {
  const [, setLocation] = useLocation();
  const infoTeam = () => {
    setLocation(`/memberTasks`)
  }
  return (
    <>
      <div className='h-40 w-[20%] rounded-3xl p-4 mt-10 bg-[#D9D9D9] hover:scale-110 transition duration-300'>
        <div className='flex'>
          <div>
            <FaUserCircle className='w-[32px] h-[32px] text-[#434343]' />
          </div>
          <h1 className="text-black font-semibold text-[18px] ml-1">
            {name}
          </h1>
        </div>
        <div className="flex flex-col ">
          <p className="my-2 text-black font-semibold text-[16px]">Tiene 10 tareas</p>
          <button onClick={infoTeam} className="text-[17px] font-semibold text-start text-[#434343]">Ver mas...</button>
        </div>
      </div>
    </>
  )
}