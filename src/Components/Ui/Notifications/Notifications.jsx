import React,{useContext, useRef, useState} from 'react'
import logoEduaName from '../../../assets/Images/logoEduaName.svg';
import { Header } from '../../Layouts/Header/Header';
import { Buttons } from '../Buttons/Buttons';
import { useLocation } from 'wouter';
import { ModalConfirm } from '../Modals/ModalConfirm';
import { StateContext } from '../../Context/Context';
import { useNavbarAnimation } from '../../Hooks/useNavbarAnimation';
import { IoIosArrowRoundBack } from "react-icons/io";
import { ToolTip, ToolTipReceptionist, ToolTipTeam, ToolTipVisitor } from '../ToolTip/ToolTip';
import { Cards, CardVisitor, CardsNotificationsVisitor, CardsReceptionist, CardsMember } from '../Cards/Cards';

export const Notifications = () => {
  const { viewConfirmModal, setViewConfirmModal, isChecked, setIsChecked } = useContext(StateContext);
  const [selectValue, setSelectValue] =  useState('All')
  const scrollHome = useRef(null);
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
  const { navbarAnimationClasses } = useNavbarAnimation();
  const [, setLocation] = useLocation();

  const stateCheck = () => {
    setIsChecked(!isChecked)
  }
  const clickButton  = () => {
    setLocation(`/director`);
  };
  const handleChangeUi = (event) => {
    setSelectValue(event.target.value)
  };

 const dataFilter = (obj.filter((dataObj) => {
  if (selectValue === 'All') {
    return dataObj
  }else if (selectValue === dataObj.textColor) {
    return dataObj
  }
 }))
 
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
     <div className="flex mx-[137px] justify-between mt-20">
        <label className="relative flex items-center gap-2">
          <input type="checkbox" checked={isChecked} className='appearance-none  rounded-full w-10 h-10 border-black border-[1px]' onChange={stateCheck} />
          { isChecked && <p className='absolute left-[10px] text-[28px] font-semibold  text-black'>✓</p>}
          <p className='text-[20px] font-semibold text-black'> Seleccionar</p>
        </label>
          <Buttons buttonEvent={() => {setViewConfirmModal(true)}}  btnStyle={`font-semibold text-[20px] duration-300 transition-all hover:scale-105 ${isChecked ? "opacity-100" : "opacity-0"}`} label={"Enviar a:"} />
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
      <div className='flex items-center justify-center flex-col '>
        {dataFilter.map((infoCard) => (<Cards message={infoCard.message} tittle={infoCard.tittle} textColor={infoCard.textColor} borderColor={infoCard.borderColor}/>))}
      </div>
      <ModalConfirm
        visibility={viewConfirmModal} 
        message="¿Confirmas que deseas enviar estas tareas a ?" 
        redirectPathConfirm="/notifications"/>
    </>
  )
}

export const NotificationsTeam = () => {
  const { viewConfirmModal, setViewConfirmModal, isChecked, setIsChecked } = useContext(StateContext);
  const [selectValue, setSelectValue] =  useState('All')
  const scrollHome = useRef(null);
  const obj = [
    { message: "El director del área técnica te ha enviado una solicitud el 21/04/2025",
      tittle: "Faltan un día para que se cumpla el plazo de la solicitud N°1864 y no le has dado respuesta ",
      textColor: "#e2000f",
      borderColor:"#e2000f"
     },
     {tittle: "El director te ha ingresado una solicitud nueva N°1234 ",
      message: "El director del área técnica ha cargado una solicitud el día 22/05/2025",
      textColor: "#434343",
      borderColor: "#434343"
     },
     { message: "El director del área técnica ha cargado una solicitud el día 30/01/2025",
      tittle: "Faltan un día para que se cumpla el plazo de la solicitud N°1864 y no le has dado respuesta ",
      textColor: "#e2000f",
      borderColor:"#e2000f"
     },
     {tittle: "La persona Encargada de la visita te ha cargado un nuevo documento",
      message: "La persona Encargada de la visita te ha cargado un nuevo documento N°065 el 22/06/2025 a las 09:05am",
      textColor: "#434343",
      borderColor: "#434343"
     },
     { message: "El director del área técnica ha cargado una solicitud el día 12/02/2025",
      tittle: "Faltan cinco días para que se cumpla el plazo de la solicitud N°1256 y no le has dado respuesta ",
      textColor: "#fffd54",
      borderColor:"#fffd54"
     },
     { message: "El director del área técnica ha cargado una solicitud el día 12/02/2025",
      tittle: "Faltan tres días para que se cumpla el plazo de la solicitud N°1468 y no le has dado respuesta ",
      textColor: "#f29d38",
      borderColor: "#f29d38"
     },
     {tittle: "La persona Encargada de la visita te ha cargado un nuevo documento",
      message: "La persona Encargada de la visita te ha cargado un nuevo documento N°065 el 22/06/2025 a las 09:05am",
      textColor: "#434343",
      borderColor: "#434343"
     },
     { message: "El director del área técnica ha cargado una solicitud el día 12/02/2025",
      tittle: "Faltan tres días para que se cumpla el plazo de la solicitud N°1468 y no le has dado respuesta ",
      textColor: "#f29d38",
      borderColor: "#f29d38"
     },
  ];
  const { navbarAnimationClasses } = useNavbarAnimation();
  const [, setLocation] = useLocation();

  const stateCheck = () => {
    setIsChecked(!isChecked)
  }
  const clickButton  = () => {
    setLocation(`/team`);
  };
  const handleChangeUi = (event) => {
    setSelectValue(event.target.value)
  };

 const dataFilter = (obj.filter((dataObj) => {
  if (selectValue === 'All') {
    return dataObj
  }else if (selectValue === dataObj.textColor) {
    return dataObj
  }
 }))
 
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
     <ToolTipTeam/> 
     <div className="flex mx-[137px] justify-between mt-20">
        <label className="relative flex items-center gap-2">
          <input type="checkbox" checked={isChecked} className='appearance-none  rounded-full w-10 h-10 border-black border-[1px]' onChange={stateCheck} />
          { isChecked && <p className='absolute left-[10px] text-[28px] font-semibold  text-black'>✓</p>}
          <p className='text-[20px] font-semibold text-black'> Seleccionar</p>
        </label>
          <Buttons buttonEvent={() => {setViewConfirmModal(true)}}  btnStyle={`font-semibold text-[20px] duration-300 transition-all hover:scale-105 ${isChecked ? "opacity-100" : "opacity-0"}`} label={"Enviar a:"} />
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
      <div className='flex items-center justify-center flex-col '>
        {dataFilter.map((infoCard) => (<CardsMember message={infoCard.message} tittle={infoCard.tittle} textColor={infoCard.textColor} borderColor={infoCard.borderColor}/>))}
      </div>
      <ModalConfirm
        visibility={viewConfirmModal} 
        message="¿Confirmas que deseas enviar estas tareas a ?" 
        redirectPathConfirm="/notifications"/>
    </>
  )
}

export const NotificationsVisitor = () => {
  const { viewConfirmModal, setViewConfirmModal, isChecked, setIsChecked } = useContext(StateContext);
  const [selectValue, setSelectValue] =  useState('All')
  const scrollHome = useRef(null);
  const obj = [
    { message:"Jose guto te  ha cargado una visita a la una solicitud N°84321 el día 12/02/2025",
      
      tittle:"Faltan un día para que se cumpla el plazo de la visita a la solicitud N°1864 y no se ha dado respuesta ",
      textColor: "#e2000f",
      borderColor:"#e2000f"
     },
     {tittle: "Te han enviado una nueva visita a la solicitud N°099",
      message: "El director del área técnica ha cargado una visita de la solicitud el día 22/05/2025",
      textColor: "#434343",
      borderColor: "#434343"
     },
     { message: "Jose guto te  ha cargado una visita a la una solicitud N°84321 el día 12/02/2025 ",
      tittle: "Faltan un día para que se cumpla el plazo de la visita a la solicitud N°1864 y no se ha dado respuesta ",
      textColor: "#e2000f",
      borderColor:"#e2000f"
     },
     {tittle: "Te han enviado una nueva visita a la solicitud N°044",
      message: "Te han enviado una nueva visita a la solicitud N°044",
      textColor: "#434343",
      borderColor: "#434343"
     },
     { message: "El director del área técnica ha cargado una solicitud el día 12/02/2025",
      tittle: "Faltan cinco días para que se cumpla el plazo de la visita a laa solicitud N°1256 y no se ha dado respuesta",
      textColor: "#fffd54",
      borderColor:"#fffd54"
     },
     { message: "El director te ha cargado una visita  de la solicitud el día 12/02/2025 ",
      tittle: "Faltan tres días para que se cumpla el plazo de la visita a la solicitud N°1468 y no se ha dado respuesta ",
      textColor: "#f29d38",
      borderColor: "#f29d38"
      }
  ];
  const { navbarAnimationClasses } = useNavbarAnimation();
  const [, setLocation] = useLocation();

  const stateCheck = () => {
    setIsChecked(!isChecked)
  }
  const clickButton  = () => {
    setLocation(`/visitor`);
  };
  const handleChangeUi = (event) => {
    setSelectValue(event.target.value)
  };

 const dataFilter = (obj.filter((dataObj) => {
  if (selectValue === 'All') {
    return dataObj
  }else if (selectValue === dataObj.textColor) {
    return dataObj
  }
 }))
 
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
     <ToolTipVisitor/> 
     <div className="flex mx-[137px] justify-between mt-20">
        <label className="relative flex items-center gap-2">
          <input type="checkbox" checked={isChecked} className='appearance-none  rounded-full w-10 h-10 border-black border-[1px]' onChange={stateCheck} />
          { isChecked && <p className='absolute left-[10px] text-[28px] font-semibold  text-black'>✓</p>}
          <p className='text-[20px] font-semibold text-black'> Seleccionar</p>
        </label>
          <Buttons buttonEvent={() => {setViewConfirmModal(true)}}  btnStyle={`font-semibold text-[20px] duration-300 transition-all hover:scale-105 ${isChecked ? "opacity-100" : "opacity-0"}`} label={"Enviar a:"} />
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
      <div className='flex items-center justify-center flex-col '>
        {dataFilter.map((infoCard) => (<CardsNotificationsVisitor message={infoCard.message} tittle={infoCard.tittle} textColor={infoCard.textColor} borderColor={infoCard.borderColor}/>))}
      </div>
      <ModalConfirm
        visibility={viewConfirmModal} 
        message="¿Confirmas que deseas enviar estas tareas a ?" 
        redirectPathConfirm="/notifications"/>
    </>
  )
}

export const HistorialVisitor = () => {
  const { viewConfirmModal, setViewConfirmModal, isChecked, setIsChecked } = useContext(StateContext);
  const scrollHome = useRef(null);
  const objVisitor = [
    { message:"Realizaste la visita técnica la solicitud N°067 el día 01/03/2025",
      tittle: "Has realizado la visita a la solicitud N°067 el día 01/03/2025",
    },  
    { message:"Realizaste la visita técnica la solicitud N°100 el día 29/11/2025",
      tittle: "Has realizado la visita a la solicitud N°100 el día 29/11/2025",
    },
    { message:"Realizaste la visita técnica la solicitud N°104 el día 14/07/2025",
      tittle: "Has realizado la visita a la solicitud N°104 el día 14/07/2025",
    },  
    { message:"Realizaste la visita técnica la solicitud N°077 el día 30/01/2025",
      tittle: "Has realizado la visita a la solicitud N°077 el día 30/01/2025",
    },
    { message:"Realizaste la visita técnica la solicitud N°098 el día 22/12/2025",
      tittle: "Has realizado la visita a la solicitud N°098 el día 22/12/2025",
    },  
    { message:"Realizaste la visita técnica la solicitud N°044 el día 13/10/2025",
      tittle: "Has realizado la visita a la solicitud N°044 el día 13/10/2025",
    },
    { message:"Realizaste la visita técnica la solicitud N°111 el día 10/06/2025",
      tittle: "Has realizado la visita a la solicitud N°111 el día 10/06/2025",
    },
     { message:"Realizaste la visita técnica la solicitud N°123 el día 01/04/2025",
      tittle: "Has realizado la visita a la solicitud N°123 el día 01/04/2025",
    }
  ]
  
  const { navbarAnimationClasses } = useNavbarAnimation();
  const [, setLocation] = useLocation();

  const stateCheck = () => {
    setIsChecked(!isChecked)
  }
  const clickButton  = () => {
    setLocation(`/visitor`);
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
     <ToolTipVisitor/> 
     <div className="flex mx-[137px] justify-between mt-20">
        <label className="relative flex items-center gap-2">
          <input type="checkbox" checked={isChecked} className='appearance-none  rounded-full w-10 h-10 border-black border-[1px]' onChange={stateCheck} />
          { isChecked && <p className='absolute left-[10px] text-[28px] font-semibold  text-black'>✓</p>}
          <p className='text-[20px] font-semibold text-black'> Seleccionar</p>
        </label>
          <Buttons buttonEvent={() => {setViewConfirmModal(true)}}  btnStyle={`font-semibold text-[20px] duration-300 transition-all hover:scale-105 ${isChecked ? "opacity-100" : "opacity-0"}`} label={"Enviar a:"} />
      </div>
      <div className='flex items-center justify-center flex-col'>
        {objVisitor.map((infoVisit) => (<CardVisitor message={infoVisit.message} tittle={infoVisit.tittle}/>))}
      </div>
      <ModalConfirm
        visibility={viewConfirmModal} 
        message="¿Confirmas que deseas enviar estas tareas a ?" 
        redirectPathConfirm="/notifications"/>
    </>
  )
}

export const NotificationsReceptionist = () => {
  const [, setLocation] = useLocation() 
  const { navbarAnimationClasses } = useNavbarAnimation();
  const objRecepcionist = [
    { tittle: "Has enviado la solicitud N°067 el día 01/03/2025 " ,
      message: "Enviaste al área técnica la solicitud N°067 el día 01/03/2025"
    },
    { tittle: "Has enviado la solicitud N°090 el día 22/10/2025" ,
      message: "Enviaste al área técnica la solicitud N°090 el día 22/10/2025"
    },
    { tittle: "Has enviado la solicitud N°123 el día 12/12/2025 " ,
      message: "Enviaste al área técnica la solicitud N°123 el día  12/12/2025"
    },
    { tittle: "Has enviado la solicitud N°167 el día 31/09/2025" ,
      message:  "Enviaste al área técnica la solicitud N°167 el día 31/09/2025"
    },
    { tittle: "Has enviado la solicitud N°090 el día 22/10/2025" ,
      message: "Enviaste al área técnica la solicitud N°090 el día 22/10/2025"
    },
    { tittle: "Has enviado la solicitud N°123 el día 12/12/2025" ,
      message: "Enviaste al área técnica la solicitud N°123 el día  12/12/2025"
    }
  ]
  const clickButton = () => {
    setLocation (`/receptionist`)
  }
  return (
    <>
     <section className={navbarAnimationClasses()}>
      <Header/>
     </section>
     <div className='absolute z-30 top-2 left-3'>
      <IoIosArrowRoundBack onClick= {clickButton} className='cursor-pointer w-10 h-10 hover:scale-125'/>
      </div> 
     <div className="absolute top-4 left-[45%]">
      <img src={logoEduaName} alt="logo" className="w-[140px] h-[45px]" />
     </div>    
     <ToolTipReceptionist/> 
      <div className='flex items-center justify-center flex-col gap-10 mt-24 mb-10'>
        {objRecepcionist.map((history) => (<CardsReceptionist message={history.message} tittle={history.tittle}/>))}
      </div>
    </>
  )
}