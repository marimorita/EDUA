import React, { useState } from 'react'
import logoEduaName from '../../assets/Images/logoEduaName.svg';
import { Inputs } from '../../Components/Inputs/Inputs';
import { useLocation } from "wouter";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowRoundBack } from 'react-icons/io';

export const Search = ({ redirectPath }) => {
  const [search, setSearch] = useState('');
  const [, setLocation] = useLocation()
  const clickButton = () => {
    setLocation(redirectPath)
  }
  const handleSearchChange = (e) => {
    setSearch(e.target.value)
    console.log(search);
    
  };
  return (
    <>
      <div className='absolute z-30 top-2 left-3'>
        <IoIosArrowRoundBack onClick={clickButton} className='cursor-pointer w-10 h-10 hover:scale-125' />
      </div>
      <div className="absolute top-4 left-[45%]">
        <img src={logoEduaName} alt="logo" className="w-[140px] h-[45px]" />
      </div>
      <div className='flex justify-center items-center gap-1 mt-20'>
        <IoSearchSharp className='w-8 h-8' />
        <Inputs valueInput={search} inputValue={handleSearchChange} classP={`w-[15rem] focus:outline-none border-0 border-b-2 border-solid border-[#434343]`}
          type={"date"}
          nameInputs={"Date"}
          placeholder={"Buscar número de radicado"} />
      </div>
      <div className="flex justify-center p-2 ml-[2rem]">
      </div>
    </>
  )
}