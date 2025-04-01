import React from 'react'
import { FaHistory } from 'react-icons/fa';
import { Notifications } from './Notifications';
import { ToolTipReceptionist } from '../../Components/ToolTip/ToolTipReceptionist.jsx';

export const NotificationsReceptionist = () => {
  const notificationsData = [
    { message: 'Jose guto te ha cargado una visita a la una solicitud N°84321 el día 12/02/2025', tittle:'Faltan un día para que se cumpla el plazo de la visita a la solicitud N°1864 y no se ha dado respuesta',  textColor: '#202020', borderColor: '#202020' },
    { message: 'El director del área técnica ha cargado una visita de la solicitud el día 22/05/2025', tittle: 'Te han enviado una nueva visita a la solicitud N°099', textColor: '#202020', borderColor: '#202020' },
    { message: 'Jose guto te ha cargado una visita a la una solicitud N°84321 el día 12/02/2025', tittle: 'Faltan un día para que se cumpla el plazo de la visita a la solicitud N°1864 y no se ha dado respuesta', textColor: '#202020', borderColor: '#202020' },
    { message: 'El director del área técnica ha cargado una visita de la solicitud el día 22/05/2025', tittle: 'Te han enviado una nueva visita a la solicitud N°099', textColor: '#202020', borderColor: '#202020' },  
    { message: 'El director del área técnica ha cargado una solicitud el día 12/02/2025', tittle: 'Faltan cinco días para que se cumpla el plazo de la visita a laa solicitud N°1256 y no se ha dado respuesta', textColor: '#202020', borderColor: '#202020' },
    { message: 'El director te ha cargado una visita de la solicitud el día 12/02/2025', tittle: 'Faltan tres días para que se cumpla el plazo de la visita a la solicitud N°1468 y no se ha dado respuesta', textColor: '#202020', borderColor: '#202020' },
  ];

  return (
    <div>   
      <ToolTipReceptionist/>
      <Notifications obj={notificationsData} redirectPath="/receptionist" Icon={FaHistory}/>
    </div>
  );
};