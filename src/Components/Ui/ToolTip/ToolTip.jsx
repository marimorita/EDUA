import React from 'react'
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { useLocation } from "wouter";
import { IoSearchSharp } from "react-icons/io5";
import { FaMapMarkedAlt } from "react-icons/fa";

export const ToolTip = () => {
    const [, setLocation] = useLocation(); 
    const handleButtonClick = () => {
        setLocation(`/profile`);
    };
    const handleButtonClickNotis= () => {
        setLocation(`/notifications`);
    };
    const handleButtonClickDoc = () => {
      setLocation(`/teamTasks`);
    };
    const handleButtonClickSearch = () =>{
      setLocation(`/search`)
    };
    const handleButtonClickDirTasks = () =>{
      setLocation(`/dirTasks`)
    };
  return (
    <div className = 'absolute flex-row-reverse right-4 flex justify-end items-end gap-6'>
    <div className= 'relative group'>
    <button className='top-2 p-3 text-[#434343]'> 
    <FaUser className='cursor-pointer w-10 h-10 hover:scale-125 transition duration-300'/>
    </button> 
    <div className="w-[6.5rem] right-[0.5rem] opacity-0 top-[85%] flex flex-col absolute group-hover:opacity-100 hover:scale-105 hover:shadow-lg hover:border transition duration-300">
    <button onClick={handleButtonClickDirTasks} className='text-left text-black h-8 pl-1 hover:bg-[#D9D9D9]'>Mis tareas</button>
    <button onClick={handleButtonClick} className='text-left text-black h-8 pl-1 hover:bg-[#D9D9D9]'>Ver mi perfil
    </button>
    <button className='text-left text-black h-8 pl-1 hover:bg-[#D9D9D9]'>Cerrar sesión</button>
    </div>
    </div>

    <div className='relative group'>
    <button  className=' top-2 p-3 text-[#434343]'>
    <HiUserGroup onClick={handleButtonClickDoc} className='cursor-pointer w-10 h-10 hover:scale-125 transition duration-300' />
    </button>
    </div>

    <div className='relative group'>
    <button className='top-2 p-3 text-[#434343]'>
    <FaBell onClick={handleButtonClickNotis} className='cursor-pointer w-10 h-10 hover:scale-125 transition duration-300'/>
    </button>
    </div>

    <div className='relative group'>
    <button className='top-2 p-3 text-[#434343]'>
    <IoSearchSharp onClick={handleButtonClickSearch} className='cursor-pointer w-10 h-10 hover:scale-125 transition duration-300'/>
    </button>
    </div>
    </div>
  )
};


export const ToolTipTeam = () => {
  const [, setLocation] = useLocation(); 
  const handleButtonClick = () => {
      setLocation(`/profileTeam`);
  };
  const handleButtonClickNotis= () => {
      setLocation(`/notificationsTeam`);
  };
 
 
return (
  <div className = 'absolute flex-row-reverse right-4 flex justify-end items-end gap-6'>
  <div className= 'relative group'>
  <button className='top-2 p-3 text-[#434343]'> 
  <FaUser className='cursor-pointer w-10 h-10 hover:scale-125 transition duration-300'/>
  </button> 
  <div className="w-[6.5rem] right-[0.5rem] opacity-0 top-[85%] flex flex-col absolute group-hover:opacity-100 hover:scale-105 hover:shadow-lg hover:border transition duration-300">
  <button onClick={handleButtonClick} className='text-left text-black h-8 pl-1 hover:bg-[#D9D9D9]'>Ver mi perfil
  </button>
  <button className='text-left text-black h-8 pl-1 hover:bg-[#D9D9D9]'>Cerrar sesión</button>
  </div>
  </div>

  <div className='relative group'>
  <button className='top-2 p-3 text-[#434343]'>
  <FaBell onClick={handleButtonClickNotis} className='cursor-pointer w-10 h-10 hover:scale-125 transition duration-300'/>
  </button>
  </div>

  <div className='relative group'>
  <button className='top-2 p-3 text-[#434343]'>
  <IoSearchSharp onClick={FaMapMarkedAlt} className='cursor-pointer w-10 h-10 hover:scale-125 transition duration-300'/>
  </button>
  </div>
  </div>
)
};

export const ToolTipVisitor = () => {
  const [, setLocation] = useLocation(); 
  const handleButtonClick = () => {
      setLocation(`/profileTeam`);
  };
  const handleButtonClickNotis= () => {
      setLocation(`/notificationsTeam`);
  };
  const handleButtonClickSearch = () =>{
    setLocation(`/searchteam`)
  };
 
return (
  <div className = 'absolute flex-row-reverse right-4 flex justify-end items-end gap-6'>
  <div className= 'relative group'>
  <button className='top-2 p-3 text-[#434343]'> 
  <FaUser className='cursor-pointer w-10 h-10 hover:scale-125 transition duration-300'/>
  </button> 
  <div className="w-[6.5rem] right-[0.5rem] opacity-0 top-[85%] flex flex-col absolute group-hover:opacity-100 hover:scale-105 hover:shadow-lg hover:border transition duration-300">
  <button onClick={handleButtonClick} className='text-left text-black h-8 pl-1 hover:bg-[#D9D9D9]'>Ver mi perfil
  </button>
  <button className='text-left text-black h-8 pl-1 hover:bg-[#D9D9D9]'>Cerrar sesión</button>
  </div>
  </div>

  <div className='relative group'>
  <button className='top-2 p-3 text-[#434343]'>
  <FaBell onClick={handleButtonClickNotis} className='cursor-pointer w-10 h-10 hover:scale-125 transition duration-300'/>
  </button>
  </div>

  <div className='relative group'>
  <button className='top-2 p-3 text-[#434343]'>
  <FaMapMarkedAlt onClick={handleButtonClickSearch} className='cursor-pointer w-10 h-10 hover:scale-125 transition duration-300'/>
  </button>
  </div>
  </div>
)
};