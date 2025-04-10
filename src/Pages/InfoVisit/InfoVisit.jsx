import React, { useState } from 'react'
import logoEduaName from '../../assets/Images/logoEduaName.svg';
import { Inputs } from '../../Components/Inputs/Inputs';
import { Buttons } from '../../Components/Buttons/Buttons';
import { PdfViewer } from '../Pdf/PdfViewer';
import { useLocation } from 'wouter';
import { RiImageAddFill } from "react-icons/ri";
import { ToolTipVisitor } from '../../Components/ToolTip/ToolTipVisitor'
import { IoIosArrowRoundBack } from 'react-icons/io'

export const InfoVisit = () => {
  const [, setLocation] = useLocation()
  const [fileSaveUrl, setFileSaveUrl] = useState(null)
  const filesUp = (e) => {
    if (e.target.files.length > 0) {
      setFileSaveUrl(URL.createObjectURL(e.target.files[0]));
    }
  };
  const clickButton = () => {
    setLocation(`/docsVisitor`)
  }
  return (
    <>
      <div className='absolute z-30 top-2 left-3'>
        <IoIosArrowRoundBack onClick={clickButton} className='cursor-pointer w-10 h-10 hover:scale-125' />
      </div>
      <div className="absolute top-4 left-[45%]">
        <img src={logoEduaName} alt="logo" className="w-[140px] h-[45px]" />
      </div>
      <ToolTipVisitor />
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
          <li className='flex flex-row gap-4'>saa
            <input type="file" className="hidden" id="addImg" accept='application/pdf' onChange={filesUp}/>
            <label htmlFor='addImg'>
              <RiImageAddFill className=' w-12 h-12 flex justify-center cursor-pointer ' />
            </label>
          </li>
        </ul>
        <PdfViewer fileUrl={fileSaveUrl}/>
        <div className='flex justify-center items-end mt-[3rem]'>
          <Buttons label={"Enviar a visita"} btnStyle={"bg-[#D9D9D9] mb-[2rem]"} />
        </div>
      </div>
    </>
  )
}