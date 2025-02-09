import React, { useRef } from 'react'
import logoEduaName from '../../../assets/Images/logoEduaName.svg';
import { Header } from '../../Layouts/Header/Header';
import { ToolTip } from '../ToolTip/ToolTip';
import { useLocation } from "wouter";
import { IoSearchSharp } from "react-icons/io5";
import { useNavbarAnimation } from '../../Hooks/useNavbarAnimation';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { Inputs } from '../Inputs/Inputs';

export const Search = () => {
    const [, setLocation] = useLocation()
    const { navbarAnimationClasses } = useNavbarAnimation();
    const scrollSearch = useRef(null);

    const clickButton = () =>{
        setLocation=(`/notifications`)
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
    <div className='flex justify-center items-center gap-1'>
     <IoSearchSharp className='w-8 h-8'/>
     <Inputs classP={`w-[15rem] focus:outline-none border-0 border-b-2 border-solid border-[#434343]`}
      type={"search"}
      nameInputs={"Search"} />
     </div>
    </>
  )
}
