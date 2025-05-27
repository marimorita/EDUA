import React, { useContext, useState } from 'react'
import logoEduaName from '../../assets/Images/logoEduaName.svg';
import { Cards } from '../Cards/Cards'
import { Buttons } from '../Buttons/Buttons';
import { useLocation } from 'wouter';
import { StateContext } from '../../Context/Context';
import { IoIosArrowRoundBack } from "react-icons/io";

export const Notifications = ({ obj, redirectPath, Icon, redirectPathArrow }) => {
  const [selectValue, setSelectValue] = useState('All')
  const [location, setLocation] = useLocation();
  const clickButton = () => {
    setLocation(redirectPathArrow);
  };
  const handleChangeUi = (event) => {
    setSelectValue(event.target.value)
  };
  const dataFilter = obj.filter((dataObj) =>
    selectValue === 'All' || selectValue === dataObj.textColor
  );

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
        {dataFilter.map((infoCard) => (<Cards message={infoCard.message} tittle={infoCard.tittle} textColor={infoCard.textColor} borderColor={infoCard.borderColor} redirectPath={redirectPath} Icon={Icon} />))}
      </div>
    </>
  )
};