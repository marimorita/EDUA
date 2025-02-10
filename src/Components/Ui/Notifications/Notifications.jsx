import React,{useContext, useRef} from 'react'
import logoEduaName from '../../../assets/Images/logoEduaName.svg';
import { Header } from '../../Layouts/Header/Header';
import { ToolTip } from '../ToolTip/ToolTip';
import { useLocation } from 'wouter';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavbarAnimation } from '../../Hooks/useNavbarAnimation';
import { Cards, CardRed, CardOrange, CardYellow } from '../Cards/Cards';
import { StateContext } from '../../Context/Context';


export const Notifications = () => {
  const {isChecked, setIsChecked} = useContext (StateContext);
  const scrollHome = useRef(null);
  const [, setLocation] = useLocation();

  const { navbarAnimationClasses } = useNavbarAnimation();

  const stateCheck = () => {
    setIsChecked(!isChecked)
  }
  const clickButton  = () => {
    setLocation(`/director`);
  };
  const handleChangeUi = (event) => {
    setValueRol(event.target.value)
  };
  return (
    <>
      <section className={navbarAnimationClasses()}>
        <Header/>
      </section>
     <div ref={scrollHome} className='absolute z-30 top-2 left-3'>
      <IoIosArrowRoundBack onClick= {clickButton} className='cursor-pointer w-10 h-10 hover:scale-125'/>
      </div> 
     <div className="absolute top-4 left-[45%]">
      <img src={logoEduaName} alt="logo" className="w-[140px] h-[45px]" />
     </div>    
     <ToolTip/> 
     <div className="flex flex-row ml-[137px] gap-[54rem] mt-20">
        <label className="relative flex items-center gap-2">
          <input type="checkbox" checked={isChecked} className='appearance-none  rounded-full w-10 h-10 border-black border-[1px]' onChange={stateCheck} />
          { isChecked && <p className='absolute left-[10px] text-[28px] font-semibold  text-black'>✓</p>}
          <p className='text-[20px] font-semibold text-black'> Seleccionar</p>
        </label>
        <div className='w-[10%]'>
          <select
            onChange={handleChangeUi}
            className="focus:text-black bg-white p-2 rounded w-24 border border-gray-300 h-18 font-semibold text-[#9ca3af] flex justify-end items-end"
          >
            <option value="" disabled selected>Filtrar </option>
            <option value="Técnica" className="text-black">Alerta Roja</option>
            <option value="Administrativa" className="text-black">Alerta Amarilla</option>
            <option value="Juridica" className="text-black">Alerta Naranja</option>
            <option value="Financiera" className="text-black">Todas las tareas</option>
          </select>
        </div>
      </div>
      <div className='flex items-center justify-center flex-col gap-'>
        <Cards/>
        <CardRed/>
        <CardYellow/>
        <Cards/>
        <CardOrange/>
        <CardRed/>
        <CardYellow/>
        <Cards/>
      </div>
    </>
  )
}