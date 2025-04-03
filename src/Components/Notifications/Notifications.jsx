import React, { useContext, useState } from 'react'
import logoEduaName from '../../assets/Images/logoEduaName.svg';
import { Cards } from '../Cards/Cards'
import { useLocation } from 'wouter';
import { ModalConfirm } from '../../Ui/Modals/ModalConfirm';
import { StateContext } from '../../Context/Context';
import { IoIosArrowRoundBack } from "react-icons/io";

export const Notifications = ({ obj, redirectPath, Icon, redirectPathArrow }) => {
  const { viewConfirmModal, setViewConfirmModal } = useContext(StateContext);
  const [selectValue, setSelectValue] = useState('All')
  const [, setLocation] = useLocation();
  const clickButton = () => {
    setLocation(redirectPathArrow);
  };
  const handleChangeUi = (event) => {
    setSelectValue(event.target.value)
  };

  const dataFilter = obj.filter((dataObj) =>
    selectValue === 'All' || selectValue === dataObj.textColor
  );

  return (
    <>
      <div className='absolute z-30 top-2 left-3'>
        <IoIosArrowRoundBack onClick={clickButton} className='cursor-pointer w-10 h-10 hover:scale-125' />
      </div>
      <div className="absolute top-4 left-[45%]">
        <img src={logoEduaName} alt="logo" className="w-[140px] h-[45px]" />
      </div>
      <div className="flex mx-[137px] justify-end mt-20">
        <select
          onChange={handleChangeUi}
          className="focus:text-black bg-white p-2 rounded border border-gray-300 h-18 font-semibold text-[#9ca3af]">
          <option value="All" disabled selected>Filtrar </option>
          <option value="#434343" className="text-black">Sin alerta</option>
          <option value="#e2000f" className="text-black">Alerta Roja</option>
          <option value="#f29d38" className="text-black">Alerta Naranja</option>
          <option value="#fffd54" className="text-black">Alerta Amarilla</option>
          <option value="All" className="text-black">Todas las tareas</option>
        </select>
      </div>
      <div className='flex items-center justify-center flex-col '>
        {dataFilter.map((infoCard) => (<Cards message={infoCard.message} tittle={infoCard.tittle} textColor={infoCard.textColor} borderColor={infoCard.borderColor} redirectPath={redirectPath} Icon={Icon} />))}
      </div>
      <ModalConfirm
        visibility={viewConfirmModal}
        message="¿Confirmas que deseas enviar estas tareas a ?"
        redirectPathConfirm="/notifications" />
    </>
  )
};