import React, { useContext, useRef, useState } from 'react'
import logoEduaName from '../../../assets/Images/logoEduaName.svg';
import { Header } from '../../Layouts/Header/Header'
import { FaBell } from 'react-icons/fa';
import { Buttons } from '../Buttons/Buttons';
import { ToolTipTeam } from '../ToolTip/ToolTip'
import { useLocation } from 'wouter';
import { ModalConfirm } from '../Modals/ModalConfirm';
import { StateContext } from '../../Context/Context';
import { useNavbarAnimation } from '../../Hooks/useNavbarAnimation';
import { IoIosArrowRoundBack } from 'react-icons/io'

export const Docs = () => {
  const { viewConfirmModal, setViewConfirmModal, isChecked, setIsChecked } = useContext(StateContext);
  const [, setLocation] = useLocation('')
  const scrollDoc = useRef(null);
  const { navbarAnimationClasses } = useNavbarAnimation();
  const clickButton = () => {
    setLocation(`/notificationsTeam`);
  } 
  return (
     <>
      <section className={navbarAnimationClasses()}>
        <Header/>
      </section>
     <div ref={scrollDoc} className='absolute z-30 top-2 left-3'>
      <IoIosArrowRoundBack onClick= {clickButton} className='cursor-pointer w-10 h-10 hover:scale-125'/>
      </div> 
     <div className="absolute top-4 left-[45%]">
      <img src={logoEduaName} alt="logo" className="w-[140px] h-[45px]" />
     </div>    
     <ToolTipTeam/> 
      <div className='flex justify-center flex-wrap mt-20 p-3 '>
        <FaBell className='cursor-pointer w-10 h-10 text-[#434343]'/>
        <h1 className='font-semibold text-[25px] mx-2'>Faltan un día para que se cumpla el plazo de la solicitud N°1864 y no le has dado respuesta </h1>
        <p className='font-semibold text-[20px] mr-[23rem]'>El director del área técnica te ha enviado una solicitud el 21/04/2025</p>
      </div>
      <div className='flex justify-center '>
          <Buttons label={"Enviar a visita"} buttonEvent={() => {setViewConfirmModal(true)}} btnStyle={"bg-[#D9D9D9]"} />
      </div> 
      <ModalConfirm
        visibility={viewConfirmModal} 
        message="¿Deseas enviar estas tareas al área de visita?" 
        redirectPathConfirm="/notifications"/>
     </>
  )
}