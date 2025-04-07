import React, { useContext, useState, useEffect, useRef } from 'react'
import logoEduaName from '../../assets/Images/logoEduaName.svg'
import profileImg from '../../assets/Images/profile.svg'
import { Inputs } from '../../Components/Inputs/Inputs';
import { Buttons } from '../../Components/Buttons/Buttons'
import { FaPencilAlt } from "react-icons/fa";
import { useLocation } from 'wouter';
import { ModalSuccess } from '../../Ui/Modals/ModalSuccess';
import { StateContext } from '../../Context/Context';
import { IoIosArrowRoundBack } from 'react-icons/io';

export const Profile = ({ redirectPath, redirectPathModal }) => {
  const { viewSuccessModal, setViewSuccessModal } = useContext(StateContext)
  const [, setLocation] = useLocation();
  const [img, setImg] = useState(profileImg)
  const [editValue, setEditValue] = useState(false)
  const [animationImg, setAnimationImg] = useState(false)
  const firstLoad = useRef(true)
  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false
      return
    }   
    if(img!==profileImg ) {
      setAnimationImg(true)
      setTimeout(()=>setAnimationImg(false), 1000)
    }
    setImg(profileImg)
  } , [profileImg])

  const imgUp = (e) => {
    if (e.target.files[0]) {
      setImg(URL.createObjectURL(e.target.files[0]));
    }
  };
  const handleButtonClick = () => {
    setLocation(redirectPath)
  };
  return (
    <div className='bg-white grid grid-cols-2 relative'>
      <div className='absolute z-30 top-2 left-3'>
        <IoIosArrowRoundBack onClick={handleButtonClick} className='cursor-pointer w-10 h-10 hover:scale-125' />
      </div>
      <div className='left-[45%] absolute top-4'>
        <img src={logoEduaName} alt="logo" className="w-[170px] h-[55px]" />
      </div>

      <div className='mt-24 flex flex-col justify-center items-center'>
        <div className='w-[25rem] h-[25rem] rounded-full overflow-hidden border-2 border-[#e5e7eb]'>
          <img src={img} alt="Profile Image" className='w-full h-full object-cover' />
        </div>
        <div className='mb-[12px]'>
          <Inputs classP={`hidden`}
            type={"file"}
            id={"InputImg"}
            inputValue={imgUp}
            nameInputs={"Img"}
            accept={"application/.jpg,.jpeg,.png"}
          />
          <div className="mt-[30px]">
            <label className='text-center text-[20px] text-[#666666] underline font-semibold cursor-pointer transition-all duration-300 hover:scale-105 hover:text-black' htmlFor="InputImg">Subir desde este equipo</label>
          </div>
        </div>
      </div>

      <div>
        <div className='mt-[6rem] font-semibold text-[30px] flex justify-center'>
          Hola, Nombre ˙ᵕ˙
        </div>
        <div className='mt-7 flex items-start flex-col w-[65%]'>
          <ul className='list-none text-black text-[20px] font-semibold flex-col gap-3 flex '>
            <li>
              <p>Apellidos:</p>
            </li>
            <li>
              <p>Cedula: </p>
            </li>
            <li>
              <p>Correo: </p>
            </li>
            <li className='flex justify-between'>
              {editValue
                ?
                <div className='flex gap-2'>
                  <p>Telefono:</p>
                  <Inputs classP={"w-[30rem] h-[2rem]"} />
                </div>
                :
                <div className='flex gap-2'>
                  <p>Telefono:</p>
                </div>}
              <button onClick={() => (setEditValue(!editValue))} className='ml-[8px]'><FaPencilAlt /></button>
            </li>
            <li>
              <p>Cargo: </p>
            </li>
            <li>
              <p>Rol: </p>
            </li>
          </ul>
        </div>
        <div className='flex justify-center mt-20'>
          <Buttons buttonEvent={() => (setViewSuccessModal(true))} btnStyle={"bg-[#D9D9D9]"} label="Actualizar" />
        </div>
      </div>
      <ModalSuccess
        visibility={viewSuccessModal}
        message="¡Felicidades! Tus datos han sido actualizados con éxito."
        redirectPath={redirectPathModal} />
    </div>
  )
};