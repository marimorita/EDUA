import React, { useRef, useState } from 'react'
import logoEduaName from '../../assets/Images/logoEduaName.svg';
import { Header } from '../../Layouts/Header/Header';
import { Inputs } from '../../Components/Inputs/Inputs';
import { useLocation } from "wouter";
import { IoSearchSharp } from "react-icons/io5";
import { useNavbarAnimation } from '../../Hooks/useNavbarAnimation';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { ToolTip } from '../../Components/ToolTip/ToolTip';

export const Search = () => {
    const [search, setSearch] = useState ('');
    const [, setLocation] = useLocation()
    const { navbarAnimationClasses } = useNavbarAnimation();
    const scrollSearch = useRef(null);
    const clickButton = () =>{
      setLocation(`/director`)
    }
    
    const objNum = ["067", "104", "103", "143", "123", "87"];

    const handleSearchChange = (e) => {
      setSearch(e.target.value)
    }

    const infoSearch = (objNum.filter((searchFilter) => searchFilter.includes(search)))

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
     <Inputs valueInput={search} inputValue={handleSearchChange} classP={`w-[15rem] focus:outline-none border-0 border-b-2 border-solid border-[#434343]`}
      type={"search"}
      nameInputs={"Search"} 
      placeholder={"Buscar número de radicado"}/>
     </div>
      <div className="flex justify-center p-2 ml-[2rem]">
      <ul className=' p-1 w-[14rem] flex flex-col gap-2 max-h-[12.5rem] overflow-y-auto'>
        {infoSearch.length > 0 ? (infoSearch.map((valueObjNum, index) => (<li key={index}  className='font-semibold text-[18px] p-1 shadow-sm shadow-slate-400 rounded-md hover:bg-[#d9d9d9] cursor-pointer'>{valueObjNum}</li>))) : null }
      </ul>
      </div> 
    </>
  )
}