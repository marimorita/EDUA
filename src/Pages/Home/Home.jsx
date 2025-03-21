import React, { useRef } from 'react'
import miau from '../../assets/Images/miau.svg'
import home from '../../assets/Images/home.svg';
import helpImg from '../../assets/Images/help.svg';
import logoName from '../../assets/Images/logoEduaName.svg';
import logoEdua from '../../assets/Images/logoEdua.svg'
import aboutInfoImg from '../../assets/Images/aboutIt.svg';
import { Footer } from '../../Layouts/Footer/Footer';
import { Buttons } from '../../Components/Buttons/Buttons';
import { useLocation } from 'wouter';
import { useNavbarAnimation } from '../../Hooks/useNavbarAnimation';

export const Home = () => {
  const [, setLocation] = useLocation();
  const startButton = () => {
    setLocation('/accessPanel');
  };
  const { navbarAnimationClasses } = useNavbarAnimation();

  return (
    <>
      <section className={navbarAnimationClasses()}>
      </section>
      <div ref={scrollHome} className="bg-white h-screen relative flex flex-col ">
        <section id='intro'>
          <div className='relative h-screen grid grid-cols-2 items-center w-full'>
            <div className='flex justify-start mt-40 ml-14 col-span-1'>
              <img src={home} alt="imgBackground" className="w-[95%] h-[30%]" />
            </div>
            <div className='flex justify-center items-center flex-col space-y-4 px-6'>
              <p className='font-semibold text-[50px] text-center'>¡Bienvenidos al area tecnica!</p>
              <div className='top-[26rem] absolute flex justify-center'>
                <Buttons buttonEvent={startButton} btnStyle={"text-[25px] w-48 h-11 bg-[#00000000]"} label="Iniciar" />
              </div>
            </div>
            <div className='flex absolute top-5 left-[10%]'>
              <img src={logoName} alt="logo" className="w-[150px] h-[45px]" />
            </div>
          </div>

          <section className='top-4 left-[24%] absolute flex justify-center items-center p-2 rounded-xl'>
            <ul className='list-none font-semibold text-[30px] flex gap-40'>
              <li>
                <Buttons buttonEvent={miauButton} btnStyle={"w-48 h-11 bg-[#00000000]"} label="Miau" />
              </li>
              <li>
                <Buttons buttonEvent={aboutButton} btnStyle={"w-48 h-11 bg-[#00000000]"} label="Acerca de" />
              </li>
              <li>
                <Buttons buttonEvent={helpButton} btnStyle={"w-48 h-11 bg-[#00000000]"} label="Ayuda" />
              </li>
            </ul>
          </section>

          <section ref={scrollAbout} id="aboutInfo" className="relative h-screen grid grid-cols-2 items-center  w-full">
            <h1 className="absolute left-1/2 top-[8%] transform -translate-x-1/2 -translate-y-1/2 font-bold text-[40px]"> Acerca De </h1>
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
          <section id="Rols" className='grid grid-cols-3 w-full h-auto'>
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
          <section ref={scrollHelp} id="help" className="relative h-screen grid grid-cols-2 items-center  w-full">
            <h1 className="absolute left-1/2 top-[8%] transform -translate-x-1/2 -translate-y-1/2 font-bold text-[40px]"> Ayuda </h1>
            <div className="flex justify-center flex-col space-y-4 px-6">
              <p className="text-[20px] text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit nulla ad aliquam labore, cum perspiciatis fugit? Voluptatum eligendi quae laboriosam ipsa in, corporis repellendus nihil quam vitae commodi dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit nulla ad aliquam labore, cum perspiciatis fugit? Voluptatum! repellendus nihil quam vitae commodi dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
            </div>
            <div className="flex justify-center mt-20">
              <img src={helpImg} alt="ImageHelp" className='w-[40rem] h-[26rem]' />
            </div>
          </section>
          <section id="Image" className=''>
            <div className='flex justify-center items-center h-screen mt-1'>
              <img src={logoEdua} alt="Logo Image" className='w-[65rem] h-[45rem]' />
            </div>
          </section>
          <section id="miau" ref={scrollMiau} className="relative h-screen grid grid-cols-2 items-center  w-full">
            <h1 className="absolute left-1/2 top-[8%] transform -translate-x-1/2 -translate-y-1/2 font-bold text-[40px]"> Miau </h1>
            <div className="flex justify-center mt-20">
              <img src={miau} alt="Image Miau" className='w-[35rem] h-[30rem]' />
            </div>
            <div className="flex justify-center flex-col space-y-4 px-6">
              <p className="text-[20px] text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit nulla ad aliquam labore, cum perspiciatis fugit? Voluptatum eligendi quae laboriosam ipsa in, corporis repellendus nihil quam vitae commodi dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit nulla ad aliquam labore, cum perspiciatis fugit? Voluptatum! repellendus nihil quam vitae commodi dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
            </div>
          </section>
          <Footer clickButton={arrowButton} />
        </section>
      </div>
    </>
  );
};