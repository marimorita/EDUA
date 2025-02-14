import React, { useRef } from 'react'
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
    setLocation(`/team`);
  };
  const objMember = [
    {tittle: "Esteban tiene la solictud N°123 desde el día 11/02/2025",
      message: "",
      textColor: "#434343",
      borderColor: "#434343"
     },
     { message: " ",
      tittle: "Esteban abrio la solictud N°543 que enviaste el día 14/02/2025",
      textColor: "#e2000f",
      borderColor:"#e2000f"
     },
     { message: " ",
      tittle: "Esteban tiene tres días para que se cumpla el plazo de la solicitud N°432",
      textColor: "#f29d38",
      borderColor: "#f29d38"
     },
    {tittle: "Esteban tiene la solictud N°123 desde el día 11/02/2025",
      message: "",
      textColor: "#434343",
      borderColor: "#434343"
     },
     { message: " ",
      tittle: "Esteban abrio la solictud N°543 que enviaste el día 14/02/2025",
      textColor: "#434343",
      borderColor:"#434343"
     },
     {tittle: "Esteban tiene cinco días para que se cumpla el plazo de la solicitud N°123",
      message: "",
      textColor: "#fffd54",
      borderColor: "#fffd54"
     },
     { message: " ",
      tittle: "Esteban abrio la solictud N°543 que enviaste el día 14/02/2025",
      textColor: "#e2000f",
      borderColor:"#e2000f"
     },
     { message: " ",
      tittle: "Esteban tiene tres días para que se cumpla el plazo de la solicitud N°432",
      textColor: "#f29d38",
      borderColor: "#f29d38"
     },
     {tittle: "Esteban tiene cinco días para que se cumpla el plazo de la solicitud N°123",
      message: "",
      textColor: "#fffd54",
      borderColor: "#fffd54"
     }
  ];
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
     <div className= "flex flex-col justify-center items-center">
      <h1 className="text-black font-semibold text-[33px] mt-20">Esteban Fino Muñoz</h1>
      {objMember.map((infoCardMember) => (<Cards message={infoCardMember.message} tittle={infoCardMember.tittle} textColor={infoCardMember.textColor} borderColor={infoCardMember.borderColor} />))}                
     </div>
    </>
  )
}