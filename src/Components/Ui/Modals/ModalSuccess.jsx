import React, { useContext } from 'react'
import successImg from '../../../assets/Images/success.png'
import logoName from '../../../assets/Images/logoEduaName.png';
import { useLocation } from 'wouter';
import { IoIosClose } from "react-icons/io";
import { StateContext } from '../../Context/Context';

export const ModalSuccess = ({ visibility }) => {
  const {setViewSuccessModal} = useContext (StateContext)
  const [, setLocation] = useLocation();
  const handleButtonClick = () => {
    setViewSuccessModal(false)
    setLocation(`/login`);
  }
  return (
    <div className={visibility ? "w-screen h-screen flex items-center justify-center fixed bg-[#00000080] z-[9999999999] " : "hidden"}>
      <div className="w-[40%] h-[85%] bg-[white] relative">
        <div className="absolute top-[8px]">
          <img src={logoName} alt="logo" className="w-[150px]" />
        </div>
        <div >
          <button onClick={handleButtonClick} className='w-full flex justify-end p-3' >
            <IoIosClose className=' cursor-pointer w-10 h-10 hover:scale-125' />
          </button>
        </div>
        <div className='flex justify-center items-center'>
          <img src={successImg} alt="Confirm Image" className='mt-3 w-[300px] h-[300px]' />
        </div>
        <p className='text-center flex items-center justify-center font-semibold text-[22px] p-4'>¡Felicidades! Tu cuenta ha sido creada con éxito. Ya puedes iniciar sesión y disfrutar de nuestros servicios</p>
      </div>
    </div>
  )
}
