import React from 'react'
import aboutInfoImg from '../../assets/Images/aboutIt.svg';

export const AboutUs = ({ refAboutUs }) => {
    return (
        <section ref={refAboutUs} id="aboutInfo" className="relative h-screen grid grid-cols-2 items-center mt-[8rem] w-full">
            <h1 className="absolute left-1/2 top-[4%] transform -translate-x-1/2 -translate-y-1/2 font-bold text-[40px]"> Acerca De </h1>
            <div className="flex justify-center mt-20">
                <img src={aboutInfoImg} alt="Image Info" className='w-[34rem] h-[30rem]' />
            </div>
            <div className="flex justify-center flex-col space-y-4 px-6">
                <p className="text-[20px] text-justify mt-12">
                    El aplicativo, enfocado en el área técnica, está diseñado para mejorar la gestión documental dentro de la empresa. Su propósito es facilitar la organización y supervisión de los documentos para todos los miembros del área técnica. Para el director, permite una mejor supervisión del trabajo de su equipo, brindándole mayor control sobre los documentos que ingresan y su gestión. Para los miembros del equipo, optimiza la distribución y asignación de tareas, asegurando un flujo de trabajo más eficiente. Además, el sistema facilita la gestión de solicitudes hacia el área de visita, agilizando los procesos y mejorando la organización. También cuenta con un sistema de alertas que clasifica las tareas en tres estados: Rojo, Naranja y Amarillo, permitiendo priorizar actividades y mantener un mejor orden.
                    Por último, el aplicativo contribuye a prevenir la pérdida de documentos, mejorando la trazabilidad y garantizando un flujo de información seguro y centralizado.
                </p>
            </div>
        </section>
    )
}