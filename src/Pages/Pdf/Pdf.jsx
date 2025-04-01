import React, { useContext } from 'react'
import logoEduaName from '../../assets/Images/logoEduaName.svg';
import { Inputs } from '../../Components/Inputs/Inputs';
import { Buttons } from '../../Components/Buttons/Buttons';
import { useLocation } from "wouter"
import { StateContext } from '../../Context/Context';
import { ModalConfirm } from '../../Ui/Modals/ModalConfirm';
import { FaFileArrowUp } from "react-icons/fa6";
import { IoIosArrowRoundBack } from 'react-icons/io';
import { ToolTipReceptionist } from '../../Components/ToolTip/ToolTipReceptionist';

export const Pdf = () => {
  const [, setLocation] = useLocation()
  const { viewConfirmModal, setViewConfirmModal } = useContext(StateContext)

  const clickButton = () => {
    setLocation(`/receptionist`)
  }
  return (
    <>
      <div className="bg-white h-screen relative">
        <div className="absolute top-4 left-[45%]">
          <img src={logoEduaName} alt="logo" className="w-[140px] h-[40px]" />
        </div>
        <ToolTipReceptionist />
        <div className='absolute z-30 top-2 left-3'>
          <IoIosArrowRoundBack onClick={clickButton} className='cursor-pointer w-10 h-10 hover:scale-125' />
        </div>
        <div className='flex justify-center mt-[5rem]'>
          <Inputs classP={`w-[20rem] focus:outline-none border-0 border-b-2 border-solid border-[#434343]`}
            type={"search"}
            nameInputs={"Search"}
            placeholder={"Ingresa aquí el radicado de la solicitud"} />
        </div>
        <div className="bg-[#efefef] w-[90%] flex justify-center items-center mx-14 mt-10 border rounded-xl flex-col">
          <div className='w-[95%] flex justify-center items-center mt-4 flex-col mb-4 outline-2 outline-offset-2 outline-dashed outline-[#3d4141]'>
            <FaFileArrowUp className='w-56 h-[18rem] p-8 text-[#666666] mt-8' />
            <button className='cursor-pointer'>
              <h1 className='underline font-semibold text-[20px] text-[#666666]  hover:text-black mb-4'>Subir desde este equipo</h1>
            </button>
          </div>
        </div>
        <div className='flex justify-center mt-10'>
          <Buttons label={"Enviar al atrea tecnica"} buttonEvent={() => { setViewConfirmModal(true) }} btnStyle={"bg-[#D9D9D9] w-[200px] mb-[30px]"} />
        </div>
      </div>
      <ModalConfirm
        visibility={viewConfirmModal}
        message="¿Deseas enviar al área técnica el archivo?"
        redirectPath="/modalSuccess" />
    </>
  )
}