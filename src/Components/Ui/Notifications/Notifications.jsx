import React,{useContext, useRef} from 'react'
import logoEduaName from '../../../assets/Images/logoEduaName.svg';
import { Cards } from '../Cards/Cards';
import { Header } from '../../Layouts/Header/Header';
import { Buttons } from '../Buttons/Buttons';
import { ToolTip } from '../ToolTip/ToolTip';
import { useLocation } from 'wouter';
import { ModalConfirm } from '../Modals/ModalConfirm';
import { StateContext } from '../../Context/Context';
import { useNavbarAnimation } from '../../Hooks/useNavbarAnimation';
import { IoIosArrowRoundBack } from "react-icons/io";

export const Notifications = () => {
  const { viewConfirmModal, setViewConfirmModal, isChecked, setIsChecked } = useContext(StateContext);
  const scrollHome = useRef(null);
  const [, setLocation] = useLocation();
  const obj = [
    { message: "La persona encargada de la recepción ha cargado una solicitud el día 12/02/2025 ",
      tittle: "Faltan un día para que se cumpla el plazo de la solicitud N°1864 y no se ha dado respuesta ",
      textColor: "#e2000f",
      borderColor:"#e2000f"
     },
     {tittle: "Se ha ingresado una solicitud nueva N°1234 ",
      message: "La persona encargada de la recepción ha cargado una solicitud el día 12/02/2025",
      textColor: "#434343",
      borderColor: "#434343"
     },
     { message: "La persona encargada de la recepción ha cargado una solicitud el día 12/02/2025 ",
      tittle: "Faltan un día para que se cumpla el plazo de la solicitud N°1864 y no se ha dado respuesta ",
      textColor: "#e2000f",
      borderColor:"#e2000f"
     },
     { message: "La persona encargada de la recepción ha cargado una solicitud el día 12/02/2025 ",
      tittle: "Faltan cinco días para que se cumpla el plazo de la solicitud N°1256 y no se ha dado respuesta ",
      textColor: "#fffd54",
      borderColor:"#fffd54"
     },
     { message: "La persona encargada de la recepción ha cargado una solicitud el día 12/02/2025 ",
      tittle: "Faltan tres días para que se cumpla el plazo de la solicitud N°1468 y no se ha dado respuesta ",
      textColor: "#f29d38",
      borderColor: "#f29d38"
     },
     {tittle: "Se ha ingresado una solicitud nueva N°1234 ",
      message: "La persona encargada de la recepción ha cargado una solicitud el día 12/02/2025",
      textColor: "#434343",
      borderColor: "#434343"
     },
     { message: "La persona encargada de la recepción ha cargado una solicitud el día 12/02/2025 ",
      tittle: "Faltan un día para que se cumpla el plazo de la solicitud N°1864 y no se ha dado respuesta ",
      textColor: "#e2000f",
      borderColor:"#e2000f"
     },
     { message: "La persona encargada de la recepción ha cargado una solicitud el día 12/02/2025 ",
      tittle: "Faltan tres días para que se cumpla el plazo de la solicitud N°1468 y no se ha dado respuesta ",
      textColor: "#f29d38",
      borderColor: "#f29d38"
     },
     {tittle: "Se ha ingresado una solicitud nueva N°1234 ",
      message: "La persona encargada de la recepción ha cargado una solicitud el día 12/02/2025",
      textColor: "#434343",
      borderColor: "#434343"
     }
  ];
  console.log(obj);

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
     <div className="flex flex-row ml-[137px] gap-[23rem] mt-20">
        <label className="relative flex items-center gap-2">
          <input type="checkbox" checked={isChecked} className='appearance-none  rounded-full w-10 h-10 border-black border-[1px]' onChange={stateCheck} />
          { isChecked && <p className='absolute left-[10px] text-[28px] font-semibold  text-black'>✓</p>}
          <p className='text-[20px] font-semibold text-black'> Seleccionar</p>
        </label>
          <Buttons buttonEvent={() => {setViewConfirmModal(true)}}  btnStyle={`font-semibold text-[20px] duration-300 transition-all hover:scale-105 ${isChecked ? "opacity-100" : "opacity-0"}`} label={"Enviar a:"} />
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
      <div className='flex items-center justify-center flex-col '>
        {obj.map((infoCard) => (<Cards message={infoCard.message} tittle={infoCard.tittle} textColor={infoCard.textColor} borderColor={infoCard.borderColor}/>))}
      </div>
      <ModalConfirm
        visibility={viewConfirmModal} 
        message="¿Confirmas que deseas enviar estas tareas a ?" 
        redirectPathConfirm="/notifications"/>
    </>
  )
}