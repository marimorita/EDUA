import React from 'react';
import { Docs } from './Docs';
import { FaBell } from 'react-icons/fa';
import { Buttons } from '../Buttons/Buttons';
import { useLocation } from 'wouter';
import { ToolTipVisitor } from '../ToolTip/ToolTipVisitor';
import { FaMapMarkerAlt } from "react-icons/fa";

export const DocsVisitor = () => {
    const [, setLocation] = useLocation()
    const infoVisit = () => {
        setLocation('/infoVisit')
    }
    return (
        <>
            <ToolTipVisitor />
            <Docs redirectPathBack="/notificationsVisitor" tittle="Faltan un día para que se cumpla el plazo de la visita a la solicitud N°1864 y no se ha dado respuesta" text="Jose guto te ha cargado una visita a la una solicitud N°84321 el día 12/02/2025" Icon={FaBell} />
            <div className='flex justify-center items-center sticky bottom-10 mt-[22rem]'>
                <Buttons label={"Visitar"} btnStyle={"bg-[#D9D9D9] w-[150px] mb-[30px]"} buttonEvent={infoVisit} />
            </div>
        </>
    )
};


export const DocsHistorialVisitor = () => {
    return (
        <>
            <ToolTipVisitor />
            <Docs redirectPathBack="/historialVisitor" tittle="Faltan un día para que se cumpla el plazo de la visita a la solicitud N°1864 y no se ha dado respuesta" text="Jose guto te ha cargado una visita a la una solicitud N°84321 el día 12/02/2025" Icon={FaMapMarkerAlt} />
        </>
    )
};