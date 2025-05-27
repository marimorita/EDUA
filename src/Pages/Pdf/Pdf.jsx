import React, { useContext, useState } from 'react'
import { useLocation } from "wouter"
import { PdfViewer } from "./PdfViewer"
import { LuImageUp } from "react-icons/lu";
import { StateContext } from '../../Context/Context';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { toast, ToastContainer } from 'react-toastify';
import { Inputs } from '../../Components/Inputs/Inputs';
import { Buttons } from '../../Components/Buttons/Buttons';
import logoEduaName from '../../assets/Images/logoEduaName.svg';
import { ModalConfirm } from '../../Components/Modals/ModalConfirm';
import { ToolTipReceptionist } from '../../Components/ToolTip/ToolTipReceptionist';

export const Pdf = () => {
  const [, setLocation] = useLocation()
  const { viewConfirmModal, setViewConfirmModal } = useContext(StateContext)
  const [img, setImg] = useState(null)
  const [fileSaveUrl, setFileSaveUrl] = useState(null)

  const imgUp = (e) => {
    if (e.target.files[0]) {
      setImg(URL.createObjectURL(e.target.files[0]));
      setFileSaveUrl(e.target.files[0]);
    }
  };

  const messageSuccess = () => {
    if (img !== null) {
    console.log(img);
    
      toast.success("Se envió exitosamente al área técnica", {
        progressStyle: {
          backgroundColor: '#50e136',
        },
      });

      setViewConfirmModal(false)
      setImg(null);
    }else{  
      toast.error("¡Ups! Parece que olvidaste subir el archivo", {
        progressStyle: {
          backgroundColor: '#ed1b24',
        },
      });
      setViewConfirmModal(false)
    }
  }

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
            type={"date"}
            nameInputs={"Date"}
            placeholder={"Ingresa aquí el radicado de la solicitud"} />
        </div>
        <div className="bg-[#efefef] w-[90%] flex justify-center items-center mx-14 mt-10 border rounded-xl flex-col">
          <div className='w-[95%] flex justify-center items-center mt-4 flex-col mb-4 outline-2 outline-offset-2 outline-dashed outline-[#3d4141] relative'>
            <PdfViewer fileUrl={img} />
            <LuImageUp className={`w-[224px] h-[18rem] p-8 text-[#666666] mt-4  ${img ? "animationIslam " : ""}`} />
            <div className='mb-[12px]'>
              <Inputs classP={`hidden`}
                type={"file"}
                id={"InputPdf"}
                nameInputs={"Pdf"}
                inputValue={imgUp}
                accept={"image/png, image/jpeg"}
              />
              <label className='w-[20rem] text-center text-[20px] text-[#666666] underline font-semibold cursor-pointer pt-2 pb-2 rounded-sm transition-all duration-300 hover:scale-105 hover:text-black mb-[30px]' htmlFor="InputPdf"> {img ? ` Archivo cargado: ${fileSaveUrl.name} ` : 'Subir desde este equipo'}</label>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-[20px] w-[100%]'>
          <Buttons label={"Enviar al área técnica"} buttonEvent={() => { setViewConfirmModal(true) }} btnStyle={"bg-[#D9D9D9] w-[200px] mb-[30px]"} />
        </div>
      </div>
      <ModalConfirm
        visibility={viewConfirmModal}
        handleButtonClickConfirm={messageSuccess}
        message="¿Deseas enviar al área técnica el archivo?"
      />
      <div>
        <ToastContainer
          position='top-center'
          autoClose={2000}
        />
      </div>
    </>
  )
}