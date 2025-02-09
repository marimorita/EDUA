import React from 'react'
import { FaBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

export const Cards = () => {
  return (
    <div className='h-50 w-[80%] rounded-3xl border border-black p-4 mt-10 hover:scale-105 transition duration-300'>
    <div className='flex justify-start flex-wrap'>
      <FaBell className='w-8 h-8 text-[#434343] m-1'/>
      <h1 className="text-black font-semibold text-[25px]">
       Se ha ingresado una solicitud nueva N°1234  
      </h1>
    </div>
      <div className="flex flex-col ">
      <p className="my-2 text-black font-semibold text-[18px]">La persona encargada de la recepción ha subido una nueva solicutud el día (fecha actual)</p>
      <button className="text-[17px] font-semibold text-start text-[#434343]">Ver mas...</button>
      </div>
    </div>
  )
}

export const CardRed = () =>{
    return (
        <div className='h-50 w-[80%] rounded-3xl border border-[#e2000f] p-4 mt-10 hover:scale-105 transition duration-300'>
        <div className='flex justify-start'>
          <FaBell className='w-8 h-8 text-[#e2000f] m-1'/>
          <h1 className="text-black font-semibold text-[25px]">
          Faltan un día para que se cumpla el plazo de la solicitud N°1864 y no se ha dado respuesta</h1>
        </div>
          <div className="flex flex-col ">
          <p className="my-2 text-black font-semibold text-[18px]">La persona encargada de la recepción ha subido una nueva solicutud el día (fecha actual)</p>
          <button className="text-[17px] font-semibold text-start text-[#434343]">Ver mas...</button>
          </div>
        </div>
      )
}
export const CardOrange = () =>{
    return (
        <div className='h-50 w-[80%] rounded-3xl border border-[#f29d38] p-4 mt-10 hover:scale-105 transition duration-300'>
        <div className='flex justify-start'>
          <FaBell className='w-8 h-8 text-[#f29d38] m-1'/>
          <h1 className="text-black font-semibold text-[25px]">
          Faltan tres para que se cumpla el plazo de la solicitud N°1864 y no se ha dado respuesta</h1>
        </div>
          <div className="flex flex-col ">
          <p className="my-2 text-black font-semibold text-[18px]">La persona encargada de la recepción ha subido una nueva solicutud el día (fecha actual)</p>
          <button className="text-[17px] font-semibold text-start text-[#434343]">Ver mas...</button>
          </div>
        </div>
      )
}
export const CardYellow = () =>{
    return (
        <div className='h-50 w-[80%] rounded-3xl border border-[#fffd54] p-4 mt-10 hover:scale-105 transition duration-300'>
        <div className='flex justify-start'>
          <FaBell className='w-8 h-8 text-[#fffd54] m-1'/>
          <h1 className="text-black font-semibold text-[25px]">
          Faltan cinco días para que se cumpla el plazo de la solicitud N°1864 y no se ha dado respuesta</h1>
        </div>
          <div className="flex flex-col ">
          <p className="my-2 text-black font-semibold text-[18px]">La persona encargada de la recepción ha subido una nueva solicutud el día (fecha actual)</p>
          <button className="text-[17px] font-semibold text-start text-[#434343]">Ver mas...</button>
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