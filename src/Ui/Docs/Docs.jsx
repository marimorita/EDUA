import React from 'react'
import logoEduaName from '../../assets/Images/logoEduaName.svg';
import { Buttons } from '../../Components/Buttons/Buttons';
import { useLocation } from 'wouter';
import { IoIosArrowRoundBack } from 'react-icons/io'
import { FaHistory } from 'react-icons/fa';
import { ToolTipReceptionist } from '../../Components/ToolTip/ToolTipReceptionist';

export const Docs = ({ redirectPathBack, tittle, text, Icon }) => {
  const [, setLocation] = useLocation('')
  const clickButton = () => {
    setLocation(redirectPathBack);
  }
  const buttonClick = () => {
    setLocation(`/infoVisit`)
  }
  return (
    <>
      <div className='absolute z-30 top-2 left-3'>
        <IoIosArrowRoundBack onClick={clickButton} className='cursor-pointer w-10 h-10 hover:scale-125' />
      </div>
      <div className="absolute top-4 left-[45%]">
        <img src={logoEduaName} alt="logo" className="w-[140px] h-[45px]" />
      </div>
      <div className='w-[100%] flex flex-wrap justify-center mt-20 items-center'>
        <Icon className='cursor-pointer w-10 h-10 text-[#434343]' />
        <h1 className='font-semibold text-[25px] mx-2'>{tittle}</h1>
        <p className='font-semibold text-[20px]'>{text}</p>
      </div>
    </>
  )
}

export const DocsReceptionist = () => {
  return (
    <>
      <ToolTipReceptionist />
        <Docs redirectPath="/notificationsReceptionist" tittle="Faltan un día para que se cumpla el plazo de la visita a la solicitud N°1864 y no se ha dado respuesta" text="Jose guto te ha cargado una visita a la una solicitud N°84321 el día 12/02/2025" Icon={FaHistory} />
    </>
  )
}