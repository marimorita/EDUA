import React from 'react'

export const Roles = ({ refRoles }) => {
    return (
        <section ref={refRoles} id="Rols" className='grid grid-cols-3 w-full h-auto mt-[8rem]'>
            <div className='col-span-1 bg-[#D9D9D9] flex justify-center items-center'>
                <p className='font-semibold text-black text-[30px]'>Roles del aplicativo</p>
            </div>
            <div className='flex col-span-2 flex-col bg-[#efefef] '>
                <ul className='text-[#484646] font-semibold text-[30px] flex flex-wrap justify-start items-start mt-5 ml-[78px] gap-20 mb-5'>
                    <li className='w-80'>
                        <p>
                            ▪Director Area Técnica
                        </p>
                        <p className='text-black text-[16px] text-justify'>El director del área técnica es responsable de asignar y supervisar las tareas de todos los miembros de su equipo. Además, revisa y autoriza las actividades, asegurando que se cumplan de manera eficiente y conforme a los estándares establecidos.</p>
                    </li>
                    <li className='w-80'>
                        <p>
                            ▪Recepcionista
                        </p>
                        <p className='text-black text-[16px] text-justify'>La persona encargada de la recepción es responsable de registrar y subir las solicitudes al sistema, permitiendo así el inicio de su proceso en el área técnica.</p>
                    </li>
                    <li className='w-80'>
                        <p>
                            ▪Equipo de Trabajo
                        </p>
                        <p className='text-black text-[16px] text-justify'>Los miembros del equipo de trabajo son responsables de ejecutar el proceso de las solicitudes enviadas por el director. Además, gestionan el flujo de las tareas hacia la visita técnica, reciben la información de regreso y la envían nuevamente al director del área técnica, asegurando así el cumplimiento del proceso.</p>
                    </li>
                    <li className='w-80'>
                        <p>
                            ▪Visita Técnica
                        </p>
                        <p className='text-black text-[16px] text-justify'>La persona encargada de la visita será responsable de registrar la información relevante, incluyendo fotografías, ubicación y el área del espacio solicitado.</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}