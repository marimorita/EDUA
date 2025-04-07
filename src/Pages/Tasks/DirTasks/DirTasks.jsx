import React from 'react'
import { FaBell }  from 'react-icons/fa'
import { Notifications } from '../../../Components/Notifications/Notifications'
import { ToolTipDirector } from '../../../Components/ToolTip/ToolTipDirector'

export const DirTasks = () => {
  const notificationsData = [{tittle: "Tiene la solictud N°123 desde el día 11/02/2025", message: "", textColor: "#434343", borderColor: "#434343"},
  { message: "", tittle: "Abrio la solictud N°543 que enviaste el día 14/02/2025", textColor: "#e2000f", borderColor: "#e2000f"},
  { message: "", tittle: "Tiene tres días para que se cumpla el plazo de la solicitud N°432", textColor: "#f29d38", borderColor: "#f29d38"},
  { message: "", tittle: "Tiene la solictud N°123 desde el día 11/02/2025", textColor: "#434343", borderColor: "#434343"},
  { message: "", tittle: "Abrio la solictud N°543 que enviaste el día 14/02/2025", textColor: "#434343", borderColor: "#434343"},
  { message: "",  tittle:"Tiene cinco días para que se cumpla el plazo de la solicitud N°123", textColor: "#fffd54", borderColor: "#fffd54"},
  { message: "", tittle: "Abrio la solictud N°543 que enviaste el día 14/02/2025", textColor: "#e2000f", borderColor: "#e2000f"},
  { message: "", tittle: "Tiene tres días para que se cumpla el plazo de la solicitud N°432", textColor: "#f29d38", borderColor: "#f29d38"},
  { message: "", tittle: "Tiene cinco días para que se cumpla el plazo de la solicitud N°123", textColor: "#fffd54", borderColor: "#fffd54"}];
  return (
    <>
    <ToolTipDirector/>
    <Notifications obj={notificationsData} redirectPath="/docsMyDirector" Icon={FaBell} redirectPathArrow={"/visitor"}/>
    </>
  )
}