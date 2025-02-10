import React, { useContext, useState } from 'react'
import { FaBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { StateContext } from '../../Context/Context';

export const Cards = ({message, tittle, textColor, borderColor}) => {
    const {isChecked} = useContext (StateContext);
    const [isCheckedList, setIsCheckedList] = useState (false); 
    const stateCheck = () => {
      setIsCheckedList(!isCheckedList)
    }
  return (
    <div className="flex w-[80%] justify-start">
      <label className={`relative flex items-center gap-2 ${isChecked ? "opacity-100 w-auto mr-10" : "opacity-0 w-0 p-0"}`}>
       <input type="checkbox" checked={isCheckedList} className='appearance-none  rounded-full w-10 h-10 border-black border-[1px]' onChange={stateCheck} />
        { isCheckedList && <p className='absolute left-[10px] text-[28px] font-semibold  text-black'>✓</p>}
      </label>
    <div className={`h-50 w-[100%] rounded-3xl border p-4 mt-10 transition-all  duration-300  ${isCheckedList ? "scale-105 " : "hover:scale-105"}`} style={{ border: `1px solid ${borderColor}`}} >
    <div className='flex justify-start '>
      <FaBell onClick={stateCheck} className='w-8 h-8 m-1' style={{ color : textColor}}/>
      <h1 className="text-black font-semibold text-[25px]">
       {tittle}  
      </h1>
    </div>
      <div className="flex flex-col ">
      <p className="my-2 text-black font-semibold text-[18px]">{message}</p>
      <button className="text-[17px] font-semibold text-start text-[#434343]">Ver mas...</button>
      </div>
    </div>
    </div>
  )
}

export const CardTeam = ({name}) =>{
  return(
    <div className='h-40 w-[20%] rounded-3xl p-4 mt-10 bg-[#D9D9D9] hover:scale-110 transition duration-300'>
      <div className='flex'>
      <div>
        <FaUserCircle className= 'w-[32px] h-[32px] text-[#434343]'/>
      </div>
       <h1 className="text-black font-semibold text-[18px] ml-1">
       {name}
       </h1>
      </div>
      <div className="flex flex-col ">
      <p className="my-2 text-black font-semibold text-[16px]">Tiene 10 tareas</p>
      <button className="text-[17px] font-semibold text-start text-[#434343]">Ver mas...</button>
      </div>
    </div>
  )
}