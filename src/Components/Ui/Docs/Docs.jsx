import React, { useRef } from 'react'
import logoEduaName from '../../../assets/Images/logoEduaName.svg';
import { Cards } from '../Cards/Cards';
import { Header } from '../../Layouts/Header/Header'
import { ToolTip } from '../ToolTip/ToolTip'
import { useLocation } from 'wouter';
import { useNavbarAnimation } from '../../Hooks/useNavbarAnimation';
import { IoIosArrowRoundBack } from 'react-icons/io'

export const Docs = () => {
  const [, setLocation] = useLocation('');
  const scrollDoc = useRef(null);
  const { navbarAnimationClasses } = useNavbarAnimation();
  const clickButton = () => {
    setLocation(`/director`);
  } 

  const objDir = [
    { tittle: "Tienes la solictud N°123 desde el día 11/02/2025",
      message: "",
      textColor: "#434343",
      borderColor: "#434343"
    },
    { tittle:"Tienes cinco días para que se cumpla el plazo de la solicitud N°432",
      message:"",
      textColor:"#fffd54",
      borderColor:"#fffd54"
    },
    { tittle:"Tienes la solictud N°123 desde el día 11/02/2025",
      message:"",
      textColor: "#434343",
      borderColor:"#434343"
    },
    { tittle:"Tienes un días para que se cumpla el plazo de la solicitud N°123",
      message: "",
      textColor:"#e2000f",
      borderColor:"#e2000f"
    },
    { tittle:"Tienes tres días para que se cumpla el plazo de la solicitud N°123",
      message:"",
      textColor:"#f29d38",
      borderColor: "#f29d38"
    },
    { tittle: "Tienes la solictud N°123 desde el día 11/02/2025",
      message:"",
      textColor:"#434343",
      borderColor:"#434343"
    },
    { tittle:"Tienes cinco días para que se cumpla el plazo de la solicitud N°432",
      message: "",
      textColor:"#fffd54",
      borderColor:"#fffd54"
    }
   
  ]
  return (
     <>
      <section className={navbarAnimationClasses()}>
        <Header/>
      </section>
     <div ref={scrollDoc} className='absolute z-30 top-2 left-3'>
      <IoIosArrowRoundBack onClick= {clickButton} className='cursor-pointer w-10 h-10 hover:scale-125'/>
      </div> 
     <div className="absolute top-4 left-[45%]">
      <img src={logoEduaName} alt="logo" className="w-[140px] h-[45px]" />
     </div>    
     <ToolTip/> 
     <div className='flex justify-center flex-col items-center mt-24'>
     <h1 className='font-semibold text-[30px]'>Mi perfil: Nombre director del area tecnica</h1>
       {objDir.map((tasksDir) => (<Cards message={tasksDir.message} tittle={tasksDir.tittle} borderColor={tasksDir.borderColor} textColor={tasksDir.textColor}/>))}
     </div>
     </>
  )
}