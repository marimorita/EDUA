import { Cards } from '../Cards/Cards'
import { useLocation } from 'wouter';
import React, { useState } from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import logoEduaName from '../../assets/Images/logoEduaName.svg';

export const Notifications = ({ obj, redirectPath, Icon, redirectPathArrow }) => {
  const [selectValue, setSelectValue] = useState('All')
  const [location, setLocation] = useLocation();
  const clickButton = () => {
    setLocation(redirectPathArrow);
  };
  const handleChangeUi = (event) => {
    setSelectValue(event.target.value)
  };

  const redirect = (id) => {
    setLocation(redirectPath);
    localStorage.setItem("idCard", id)
  }

  const isNotHistoryPage = !location.includes('/notificationsReceptionist') && !location.includes('/historialVisitor');
  return (
    <>
      <div className='absolute z-30 top-2 left-3'>
        <IoIosArrowRoundBack onClick={clickButton} className='cursor-pointer w-10 h-10 hover:scale-125' />
      </div>
      <div className="absolute top-4 left-[45%]">
        <img src={logoEduaName} alt="logo" className="w-[140px] h-[45px]" />
      </div>
      <div className='flex items-center justify-center flex-col mt-20'>
        {obj.map((infoCard) => (<Cards message={infoCard.text} tittle={infoCard.tittle} handleButtonClick={() => redirect(infoCard.id)} Icon={Icon} />))}
      </div>
    </>
  )
};