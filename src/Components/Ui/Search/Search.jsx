import React, { useRef, useState } from 'react'
import logoEduaName from '../../../assets/Images/logoEduaName.svg';
import { Header } from '../../Layouts/Header/Header';
import { Inputs } from '../Inputs/Inputs';
import { ToolTip } from '../ToolTip/ToolTip';
import { useLocation } from "wouter";
import { IoSearchSharp } from "react-icons/io5";
import { useNavbarAnimation } from '../../Hooks/useNavbarAnimation';
import { IoIosArrowRoundBack } from 'react-icons/io';

export const Search = () => {
    const [search, setSearch] = useState ('');
    const [, setLocation] = useLocation()
    const { navbarAnimationClasses } = useNavbarAnimation();
    const scrollSearch = useRef(null);

    const clickButton = () =>{
        setLocation(`/notifications`)
    }

    const handleSearchChange = (e) => {
      setSearch(e.target.value)
    }

  return (
    <>
      <section className={navbarAnimationClasses()}>
        <Header/>
      </section>
     <div ref={scrollSearch} className='absolute z-30 top-2 left-3'>
      <IoIosArrowRoundBack onClick= {clickButton} className='cursor-pointer w-10 h-10 hover:scale-125'/>
      </div> 
     <div className="absolute top-4 left-[45%]">
      <img src={logoEduaName} alt="logo" className="w-[140px] h-[45px]" />
     </div>    
     <ToolTip/> 
    <div className='flex justify-center items-center gap-1 mt-20'>
     <IoSearchSharp className='w-8 h-8'/>
     <Inputs onChange={handleSearchChange} classP={`w-[15rem] focus:outline-none border-0 border-b-2 border-solid border-[#434343]`}
      type={"search"}
      nameInputs={"Search"} 
      placeholder={"Buscar número de radicado"}/>
     </div>
      <div className="flex justify-center p-2 ml-[2rem]">
      <ul className='border border-[#434343] solid p-1 w-[14rem] h-[12.5rem]'>
        <li className='font-semibold text-[18px] hover:bg-[#d9d9d9] hover:scale-110 cursor-pointer'>1831</li>
        <li className='font-semibold text-[18px] hover:bg-[#d9d9d9] hover:scale-110 cursor-pointer'>1571</li>
        <li className='font-semibold text-[18px] hover:bg-[#d9d9d9] hover:scale-110 cursor-pointer'>0891</li>
        <li className='font-semibold text-[18px] hover:bg-[#d9d9d9] hover:scale-110 cursor-pointer'>8231</li>
        <li className='font-semibold text-[18px] hover:bg-[#d9d9d9] hover:scale-110 cursor-pointer'>7421</li>
        <li className='font-semibold text-[18px] hover:bg-[#d9d9d9] hover:scale-110 cursor-pointer'>6392</li>
        <li className='font-semibold text-[18px] hover:bg-[#d9d9d9] hover:scale-110 cursor-pointer'>1905</li>
      </ul>
      </div> 
    </>
  )
}
