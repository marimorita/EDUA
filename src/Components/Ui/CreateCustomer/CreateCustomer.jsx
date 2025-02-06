import React, {useContext} from 'react'
import logoEduaName from '../../../assets/Images/logoEduaName.svg';
import { Buttons } from '../Buttons/Buttons';
import { StateContext } from '../../Context/Context';
import { ModalConfirm } from '../Modals/ModalConfirm';
import { ToolTip } from '../ToolTip/ToolTip';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useLocation } from 'wouter';

export const CreateCustomer = () => {
  const {viewConfirmModal, setViewConfirmModal} = useContext(StateContext);
  const [, setLocation] = useLocation(); 
  const clickButton  = () => {
    setLocation(`/financial`);
  };
  return (
    <>
     <div className='absolute z-30 top-2 left-3'>
      <IoIosArrowRoundBack onClick= {clickButton} className='cursor-pointer w-10 h-10 hover:scale-125'/>
      </div> 
    <div> 
     <div className="absolute top-4 left-[45%]">
      <img src={logoEduaName} alt="logo" className="w-[140px] h-[45px]" />
     </div>
     <ToolTip/>
     <h1 className='flex justify-center items-center font-bold text-[40px] mt-20'>Crear Cliente</h1>
     <div className='flex flex-col items-start ml-24 '>
     <ul className='list-none text-black text-[20px] font-semibold flex-col gap-3 flex'>
        <li className='flex flex-row gap-2 '>
        <p>Nombres: </p>
        <input type="text" />
        </li>
        <li className='flex flex-row gap-2 '> 
        <p> 
        Apellidos:
        </p>
        <input className='w-30' type="text" /> 
        </li>
        <li className='flex flex-row gap-2 '> 
        <p> 
        Cedula:
        </p>
        <input className='w-30' type="text" /> 
        </li>
        <li className='flex flex-row gap-2 '> 
        <p> 
        Telefono:
        </p>
        <input className='w-30' type="text" /> 
        </li>
        <li className='flex flex-row gap-2 '> 
        <p> 
        Fecha de nacimiento:
        </p>
        <input className='w-30' type="date" />
        </li>
        <li className='flex flex-row gap-2 '> 
        <p> 
        Fecha de adquisición:
        </p>
        <input className='w-30' type="date" /> 
        </li>
        <li className='flex flex-row gap-2 '> 
        <p> 
        Espacio Publico:
        </p>
        <input className='w-30' type="text" /> 
        </li>
     <select defaultValue="">
        <option value="" disabled selected>Bien Fiscal</option>
        <option value="">Un listado</option>
        <option value="">con los</option>
        <option value="">72</option>
        <option value="">Bienes</option>
        <option value="">Fiscales </option>
     </select>
     </ul>
     </div>
      <div className='flex justify-center mt-20 '>
        <Buttons buttonEvent={() => {setViewConfirmModal(true)}} btnStyle={"bg-[#D9D9D9] w-[11rem]"} label="Crear Cliente"/>    
      </div>
    </div>
    <ModalConfirm
     visibility={viewConfirmModal} 
     message="¿Confirmas que los datos son correctos?" 
     redirectPathConfirm="/payment"
     redirectPathCancel="/financial"/>
    </>
    )
}