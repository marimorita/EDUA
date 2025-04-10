import React, { useContext, useState } from 'react'
import logoEduaName from '../../assets/Images/logoEduaName.svg';
import { Cards } from '../Cards/Cards'
import { Buttons } from '../Buttons/Buttons';
import { useLocation } from 'wouter';
import { ModalConfirm } from '../../Components/Modals/ModalConfirm';
import { StateContext } from '../../Context/Context';
import { IoIosArrowRoundBack } from "react-icons/io";

export const Notifications = ({ obj, redirectPath, Icon, redirectPathArrow }) => {
  const { viewConfirmModal, setViewConfirmModal, isChecked, setIsChecked } = useContext(StateContext);
  const [selectValue, setSelectValue] = useState('All')
  const [location, setLocation] = useLocation();
  const clickButton = () => {
    setLocation(redirectPathArrow);
  };
  const handleChangeUi = (event) => {
    setSelectValue(event.target.value)
  };
  const stateCheck = () => {
    setIsChecked(!isChecked)
  }
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
      {obj &&
        <div className="flex mx-[137px] justify-between mt-20">
          {isNotHistoryPage &&(<label className="relative flex items-center gap-2">
            <input type="checkbox" checked={isChecked} className='appearance-none  rounded-full w-10 h-10 border-black border-[1px]' onChange={stateCheck} />
            {isChecked && <p className='absolute left-[10px] text-[28px] font-semibold  text-black'>✓</p>}
            <p className='text-[20px] font-semibold text-black'> Seleccionar</p>
          </label>)}
          <Buttons buttonEvent={() => { setViewConfirmModal(true) }} btnStyle={`font-semibold text-[20px] duration-300 transition-all hover:scale-105 ${isChecked ? "opacity-100" : "opacity-0"}`} label={"Enviar a:"} />
          {isNotHistoryPage && (
            <select
              onChange={handleChangeUi}
              className="focus:text-black bg-white p-2 rounded border border-gray-300 h-18 font-semibold text-[#9ca3af]"
            >
              <option value="All" disabled selected>Filtrar </option>
              <option value="#434343" className="text-black">Sin alerta</option>
              <option value="#e2000f" className="text-black">Alerta Roja</option>
              <option value="#f29d38" className="text-black">Alerta Naranja</option>
              <option value="#fffd54" className="text-black">Alerta Amarilla</option>
              <option value="All" className="text-black">Todas las tareas</option>
            </select>
          )}
        </div>
      }
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