import React, { useRef, useState } from 'react'
import logoEduaName from '../../../assets/Images/logoEduaName.svg';
import { Cards} from '../Cards/Cards';
import { Header } from '../../Layouts/Header/Header'
import { ToolTip } from '../ToolTip/ToolTip'
import { useLocation } from "wouter";
import { useNavbarAnimation } from '../../Hooks/useNavbarAnimation';
import { IoIosArrowRoundBack } from 'react-icons/io'

export const MemberTasks = () => {
  const scrollHome = useRef(null);
  const { navbarAnimationClasses } = useNavbarAnimation();
  const [, setLocation] = useLocation();
  const clickButton  = () => {
    setLocation(`/teamTasks`);
  };
  const [valueSelect, setValueSelect] = useState('All');
  const objMember = [
    {tittle: "Tiene la solictud N°123 desde el día 11/02/2025",
      message: "",
      textColor: "#434343",
      borderColor: "#434343"
     },
     { message: " ",
      tittle: "Abrio la solictud N°543 que enviaste el día 14/02/2025",
      textColor: "#e2000f",
      borderColor:"#e2000f"
     },
     { message: " ",
      tittle: "Tiene tres días para que se cumpla el plazo de la solicitud N°432",
      textColor: "#f29d38",
      borderColor: "#f29d38"
     },
    {tittle: "Tiene la solictud N°123 desde el día 11/02/2025",
      message: "",
      textColor: "#434343",
      borderColor: "#434343"
     },
     { message: " ",
      tittle: "Abrio la solictud N°543 que enviaste el día 14/02/2025",
      textColor: "#434343",
      borderColor:"#434343"
     },
     {tittle: "Tiene cinco días para que se cumpla el plazo de la solicitud N°123",
      message: "",
      textColor: "#fffd54",
      borderColor: "#fffd54"
     },
     { message: " ",
      tittle: "Abrio la solictud N°543 que enviaste el día 14/02/2025",
      textColor: "#e2000f",
      borderColor:"#e2000f"
     },
     { message: " ",
      tittle: "Tiene tres días para que se cumpla el plazo de la solicitud N°432",
      textColor: "#f29d38",
      borderColor: "#f29d38"
     },
     {tittle: "Tiene cinco días para que se cumpla el plazo de la solicitud N°123",
      message: "",
      textColor: "#fffd54",
      borderColor: "#fffd54"
     }
  ];
  const tasksFilter = (objMember.filter((dataObj) => {
    if (valueSelect === 'All') {
      return dataObj
    }else if (valueSelect === dataObj.textColor) {
      return dataObj
    }
   }))
   const handleChangeUi = (event) => {
    setValueSelect(event.target.value)
  }
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
     <div className='flex justify-between mx-[9rem] mt-20'>
      <h1 className="text-black font-semibold text-[33px] ">Esteban Fino Muñoz</h1>
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
     </div>
     <div className= "flex flex-col justify-center items-center">
      {tasksFilter.map((infoCardMember) => (<Cards message={infoCardMember.message} tittle={infoCardMember.tittle} textColor={infoCardMember.textColor} borderColor={infoCardMember.borderColor} />))}                
     </div>
    </>
  )
}