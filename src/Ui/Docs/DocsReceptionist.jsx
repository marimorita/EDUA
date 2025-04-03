import React from 'react';
import { Docs } from './Docs';
import { FaHistory } from 'react-icons/fa';
import { ToolTipReceptionist } from '../../Components/ToolTip/ToolTipReceptionist';

export const DocsReceptionist = () => {
    return (
      <>
        <ToolTipReceptionist />
          <Docs redirectPathBack="/notificationsReceptionist" tittle="Faltan un día para que se cumpla el plazo de la visita a la solicitud N°1864 y no se ha dado respuesta" text="Jose guto te ha cargado una visita a la una solicitud N°84321 el día 12/02/2025" Icon={FaHistory} />
      </>  
    )
  }