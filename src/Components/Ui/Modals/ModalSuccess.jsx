import React, { useContext } from 'react';
import successImg from '../../../assets/Images/success.svg';
import logoName from '../../../assets/Images/logoEduaName.svg';
import { useLocation } from 'wouter';
import { IoIosClose } from "react-icons/io";
import { StateContext } from '../../Context/Context';

export const ModalSuccess = ({ visibility, message, redirectPath }) => {
  const { setViewSuccessModal } = useContext(StateContext);
  const [, setLocation] = useLocation();

  const handleButtonClick = () => {
    setViewSuccessModal(false);
    setLocation(redirectPath); 
  };

  return (
    <div className={visibility ? "w-screen h-screen flex items-center justify-center fixed bg-[#00000080] z-[9999999999]" : "hidden"}>
      <div className="w-[40%] h-[85%] rounded-xl bg-[white] relative">
        <div className="absolute top-3 left-2">
          <img src={logoName} alt="logo" className="w-[145px] h-10" />
        </div>
        <div>
          <button onClick={handleButtonClick} className="w-full flex justify-end p-3">
            <IoIosClose className="cursor-pointer w-10 h-10 hover:scale-125" />
          </button>
        </div>
        <div className="flex justify-center items-center">
          <img src={successImg} alt="Confirm Image" className="mt-3 w-[300px] h-[300px]" />
        </div>
        <p className="text-center flex items-center justify-center font-semibold text-[22px] p-4">{message}</p>
      </div>
    </div>
  );
};