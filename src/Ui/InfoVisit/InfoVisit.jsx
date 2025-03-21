import React, { useRef } from 'react'
import logoEduaName from '../../../assets/Images/logoEduaName.svg';
import { Inputs } from '../Inputs/Inputs';
import { Header } from '../../Layouts/Header/Header'
import { Buttons } from '../Buttons/Buttons';
import { useLocation } from 'wouter';
import { RiImageAddFill } from "react-icons/ri";
import { ToolTipVisitor } from '../ToolTip/ToolTip'
import { useNavbarAnimation } from '../../Hooks/useNavbarAnimation';
import { IoIosArrowRoundBack } from 'react-icons/io'

export const InfoVisit = () => {  
  const scrollHome = useRef(null);
  const { navbarAnimationClasses } = useNavbarAnimation();
  const [, setLocation] = useLocation ()
  const clickButton = () => {
    setLocation(`/docsVisitor`)
  }
  return (
    <>
    <section className={navbarAnimationClasses()}>
        <Header/>
      </section>
     <div ref={scrollHome} className='absolute z-30 top-2 left-3'>
      <IoIosArrowRoundBack onClick= {clickButton} className='cursor-pointer w-10 h-10 hover:scale-125'/>
      </div> 
     <div className="absolute top-4 left-[45%]">
      <img src={logoEduaName} alt="logo" className="w-[140px] h-[45px]" />
     </div>    
     <ToolTipVisitor/> 
     <div className='flex flex-col justify-between h-screen mx-36 mt-[4.5rem] mb-10'> 
     <ul className='p-4 font-semibold text-[20px] flex gap-8 flex-col'>
        <li>Fecha: </li>
        <li className='flex flex-row gap-4'> 
            <p>Area: </p>  
            <Inputs classP={"w-[30rem] h-[2rem]"} />
        </li>   
        <li className='flex flex-row gap-2'> 
            <p>Ubicacion: </p>  
            <Inputs classP={"w-[30rem] h-[2rem]"} />
        </li>
        <li className='flex flex-row gap-4'>Foto: 
           <button>
            <RiImageAddFill className='w-12 h-12 flex justify-center cursor-pointer '/>
           </button> 
        </li>
     </ul>
     <div className='flex justify-center items-end mt-8 sticky bottom-10 y left-[47%]'>
          <Buttons label={"Enviar a visita"} btnStyle={"bg-[#D9D9D9]"} /> 
     </div>
     </div>

     </>
  )
}