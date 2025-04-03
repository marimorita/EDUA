import React from 'react';
import { Docs } from './Docs';
import { FaBell } from 'react-icons/fa';
import { ToolTipVisitor } from '../../Components/ToolTip/ToolTipVisitor';
import { FaMapMarkerAlt } from "react-icons/fa";

export const DocsVisitor = () => {
    return (
        <>
            <ToolTipVisitor />
            <Docs redirectPathBack="/notificationsVisitor" tittle="Faltan un día para que se cumpla el plazo de la visita a la solicitud N°1864 y no se ha dado respuesta" text="Jose guto te ha cargado una visita a la una solicitud N°84321 el día 12/02/2025" Icon={FaBell} />
        </>
    )
}


export const DocsHistorialVisitor = () => {
    return (
        <>
            <ToolTipVisitor />
            <Docs redirectPathBack="/historialVisitor" tittle="Faltan un día para que se cumpla el plazo de la visita a la solicitud N°1864 y no se ha dado respuesta" text="Jose guto te ha cargado una visita a la una solicitud N°84321 el día 12/02/2025" Icon={FaMapMarkerAlt} />
        </>
    )
}