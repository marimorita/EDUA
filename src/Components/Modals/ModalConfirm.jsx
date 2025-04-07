import React, { useContext } from 'react'
import logoName from '../../assets/Images/logoEduaName.svg';
import confirmImg from "../../assets/Images/confirm.svg";
import { Buttons } from '../../Components/Buttons/Buttons';
import { useLocation } from 'wouter';
import { StateContext } from '../../Context/Context';

export const ModalConfirm = ({visibility , message, redirectPathCancel, redirectPathConfirm}) => {
  const [, setLocation] = useLocation(); 
  const { viewConfirmModal, setViewConfirmModal, valueRol, setValueRol } = useContext(StateContext)
  
  const handleButtonClickConfirm = () => {
      setViewConfirmModal(false)
      if (valueRol === 'Director Técnica') {
        setLocation('/director')
      }else if (valueRol === 'Miembro Técnica'){
        setLocation('team')
      }else if (valueRol === 'Visitor' ){
        setLocation('visitor')
      }else if (valueRol === 'Receptionist'){
        setLocation(`/receptionist`)
      }
  };
  const handleButtonClickCancel = () => {
    setViewConfirmModal(false)
    setLocation(redirectPathCancel)
};
 
  return (
    <div className={visibility ? "w-screen h-screen flex items-center justify-center fixed bg-[#00000080] z-[9999999999] " : "hidden"}>
        <div className="w-[40%] h-[85%] bg-[white] relative">
            <div className="absolute top-3 left-2">
              <img src={logoName} alt="logo" className="w-[145px] h-10" />
            </div>
            <div className='flex justify-center items-center'>
              <img src={confirmImg} alt="zImage" className='mt-16 w-[435px] h-[310px'/>
            </div>
          <p className="text-center flex items-center justify-center font-semibold text-[22px] p-4">{message}</p>
        <div className= "mt-4 flex justify-center gap-52">
         <Buttons buttonEvent={handleButtonClickConfirm} btnStyle={"bg-[#D9D9D9]"} label="Confirmar" />
         <Buttons buttonEvent={handleButtonClickCancel} btnStyle={"bg-[#D9D9D9]"} label="Cancelar" />
        </div>
        </div> 
    </div>
  )
};