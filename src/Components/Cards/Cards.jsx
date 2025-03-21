import React, { useContext, useState } from 'react'
import { FaBell } from "react-icons/fa";
import { useLocation } from "wouter";
import { FaUserCircle } from "react-icons/fa";
import { StateContext } from '../../Context/Context';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";

export const Cards = ({message, tittle, textColor, borderColor}) => {
    const {isChecked} = useContext (StateContext);
    const [isCheckedList, setIsCheckedList] = useState (false); 
    const [, setLocation] = useLocation();
    const stateCheck = () => {
      setIsCheckedList(!isCheckedList)
    }
    const handleButtonClick = () => {
      setLocation(`/docs`)
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
      <button onClick={handleButtonClick} className="text-[17px] font-semibold text-start text-[#434343]">Ver mas...</button>
      </div>
    </div>
    </div>
  )
} 

export const CardsMember = ({message, tittle, textColor, borderColor}) => {
  const {isChecked} = useContext (StateContext);
  const [isCheckedList, setIsCheckedList] = useState (false); 
  const [, setLocation] = useLocation();
  const stateCheck = () => {
    setIsCheckedList(!isCheckedList)
  }
  const handleButtonClick = () => {
    setLocation(`/docs`)
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
    <button onClick={handleButtonClick} className="text-[17px] font-semibold text-start text-[#434343]">Ver mas...</button>
    </div>
  </div>
  </div>
)
} 

export const CardTeam = ({name}) =>{
  const [, setLocation] = useLocation();
  const infoTeam = () => {
    setLocation(`/memberTasks`)
  }
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
      <button onClick={infoTeam} className="text-[17px] font-semibold text-start text-[#434343]">Ver mas...</button>
      </div>
    </div>
  )
}

export const CardVisitor = ({message, tittle}) => {
  const [,setLocation] = useLocation()
  const clickHistory = () =>{
    setLocation(`/docsVisitorHistory`)
  }
  return(
    <div className='h-40 w-[80%] rounded-3xl mt-10 border border-black solid p-4 hover:scale-110 transition duration-300'>
  <div className='flex'>
    <div>
      <FaMapMarkerAlt className= 'w-[32px] h-[32px] text-[#434343]'/>
    </div>
    <h1 className="text-black font-semibold text-[24px] ml-1">
    {tittle}
    </h1>
  </div>
  <div className="flex flex-col ">
  <p className="my-2 text-black font-semibold text-[20px]">{message}</p>
  <button onClick={clickHistory} className="text-[17px] font-semibold text-start text-[#434343]">Ver mas...</button>
  </div>
</div>
  )
}

export const CardsNotificationsVisitor = ({message, tittle, textColor, borderColor}) => {
  const {isChecked} = useContext (StateContext);
  const [isCheckedList, setIsCheckedList] = useState (false); 
  const [, setLocation] = useLocation();
  const stateCheck = () => {
    setIsCheckedList(!isCheckedList)
  }
  const handleButtonClickDoc = () => {
  setLocation(`/docsVisitor`)
  }
return (
  <div className="flex w-[80%] justify-start">
    <label className={`relative flex items-center gap-2 ${isChecked ? "opacity-100 w-auto mr-10" : "opacity-0 w-0 p-0"}`}>
     <input type="checkbox" checked={isCheckedList} className='appearance-none  rounded-full w-10 h-10 border-black border-[1px]' onChange={stateCheck} />
      { isCheckedList && <p className='absolute left-[10px] text-[28px] font-semibold  text-black'>✓</p>}
    </label>
  <div className={`h-50 w-[100%] rounded-3xl border p-4 mb-8 mt-4 transition-all  duration-300  ${isCheckedList ? "scale-105 " : "hover:scale-105"}`} style={{ border: `1px solid ${borderColor}`}} >
  <div className='flex justify-start '>
    <FaBell onClick={stateCheck} className='w-8 h-8 m-1' style={{ color : textColor}}/>
    <h1 className="text-black font-semibold text-[25px]">
     {tittle}  
    </h1>
  </div>
    <div className="flex flex-col ">
    <p className="my-2 text-black font-semibold text-[18px]">{message}</p>
    <button onClick={handleButtonClickDoc} className="text-[17px] font-semibold text-start text-[#434343]">Ver mas...</button>
    </div>
  </div>
  </div>
)
}

export const CardsReceptionist = ({message, tittle}) => {
  const [, setLocation] = useLocation()
  const handleButtonClickDoc = () => {
    setLocation(`/docsReceptionist`)
  }  
  return (
    <div className="flex w-[80%] justify-start">
    <div className='h-50 w-[100%] rounded-3xl border p-4 transition-all  duration-300 border-[#202020] hover:scale-105'>
    <div className='flex justify-start'>
      <FaHistory className='w-8 h-8 m-1'/>
      <h1 className="text-black font-semibold text-[25px]">
       {tittle}  
      </h1>
    </div>
      <div className="flex flex-col text-blue-900">
      <p className="my-2 text-black font-semibold text-[18px]">{message}</p>
      <button onClick={handleButtonClickDoc} className="text-[17px] font-semibold text-start text-[#434343]">Ver mas...</button>
      </div>
    </div>
    </div>
  )
}