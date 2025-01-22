import React, { useRef } from 'react'
import CAM from '../../../assets/Images/CAM.svg'
import logoName from '../../../assets/Images/logoEduaName.svg';
import helpImg from '../../../assets/Images/help.svg';
import logoEdua from '../../../assets/Images/logoEdua.svg'
import aboutInfoImg from '../../../assets/Images/aboutIt.svg';
import miau from '../../../assets/Images/miau.svg'
import { Buttons } from '../../Ui/Buttons/Buttons';
import { useLocation } from 'wouter';
import { Footer } from '../../Layouts/Footer/Footer';
import { useNavbarAnimation } from '../../Hooks/useNavbarAnimation';
import { FaUser } from "react-icons/fa6";
import { Technical } from '../Interface/Technical';
import { Financial } from '../Interface/Financial';

export const Home = () => {
  const scrollHome = useRef(null);
  const scrollHelp = useRef(null);
  const scrollMiau = useRef(null);
  const scrollAbout = useRef(null);
  const [, setLocation] = useLocation();

  const handleButtonClick = () => {
    setLocation('/register');
  };
  const arrowButton = () => {
    scrollHome.current.scrollIntoView({ behavior: "smooth" });
  };
  const helpButton = () => {
    scrollHelp.current.scrollIntoView({ behavior: "smooth" });
  };
  const miauButton = () => {
    scrollMiau.current.scrollIntoView({ behavior: "smooth" });
  };
  const aboutButton = () => {
    scrollAbout.current.scrollIntoView({ behavior: "smooth" });
  };
  const { navbarAnimationClasses } = useNavbarAnimation();

  return (
    <>

      <section className={navbarAnimationClasses()}>
        <div className='flex justify-center items-center w-full mt-4'>
          <ul className='bg-[#bcbcbc] list-none font-semibold text-[30px] flex justify-start items-start gap-24 mt-2 rounded-xl h-18'>
            <li>
              <Buttons buttonEvent={miauButton} btnStyle={"mt-1 w-48 h-11 hover:bg-transparent hover:text-black hover:shadow-none"} label="Miau"/>
            </li>
            <li>
              <Buttons buttonEvent={aboutButton} btnStyle={"mt-1 w-48 h-11 hover:bg-transparent hover:text-black hover:shadow-none"} label="Acerca de" />
            </li>
            <li>
              <Buttons buttonEvent={helpButton} btnStyle={"mt-1 w-48 h-11 hover:bg-transparent hover:text-black hover:shadow-none"} label="Ayuda" />
            </li>
            <li>
              <img src={logoName} alt="logoEdua" className='mt-2 w-28 h-9 cursor-pointer hover:scale-110 transition duration-300' onClick={arrowButton}/>
            </li>
            <li>
              <button onClick={handleButtonClick} className='flex justify-end p-3 text-[#434343]'> 
              <FaUser className='cursor-pointer w-8 h-8 hover:scale-110 transition duration-300'/>
              </button>
            </li>
          </ul>
        </div>
      </section>
      <div ref={scrollHome} className="bg-white h-screen relative flex flex-col ">
        <section id='intro'>
          <div className='w'>
            <img src={CAM} alt="imgbackground" className="w-full h-[600px]] object-fill  " />
          </div>

          <div className='flex absolute top-3 left-[46%]'>
            <img src={logoName} alt="logo" className="w-[180px] h-[55px]" />
          </div>

          <section className='top-28 left-[18%] absolute flex justify-center items-center'>
            <ul className='list-none font-semibold text-[30px] flex gap-44'>
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
            <div className='top-20 absolute flex '>
              <Buttons buttonEvent={handleButtonClick} btnStyle={"text-[25px] w-48 h-11 bg-[#00000000]"} label="Iniciar" />
            </div>
          </section>

          <section ref={scrollAbout} id="aboutInfo" className="relative h-screen grid grid-cols-2 items-center  w-full">
            <h1 className="absolute left-1/2 top-[8%] transform -translate-x-1/2 -translate-y-1/2 font-bold text-[40px]"> Acerca De </h1>
            <div className="flex justify-center mt-20">
              <img src={aboutInfoImg} alt="Image Info" className='w-[34rem] h-[30rem]' />
            </div>
            <div className="flex justify-center flex-col space-y-4 px-6">
              <p className="text-[20px] text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit nulla ad aliquam labore, cum perspiciatis fugit? Voluptatum eligendi quae laboriosam ipsa in, corporis repellendus nihil quam vitae commodi dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit nulla ad aliquam labore, cum perspiciatis fugit? Voluptatum! repellendus nihil quam vitae commodi dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
            </div>
          </section>
          <section id="Rols" className='grid grid-cols-3 w-full h-auto '>
            <div className='col-span-1 bg-[#D9D9D9] flex justify-center items-center'>
              <p className='font-semibold text-black text-[30px]'>Roles del aplicativo</p>
            </div>
            <div className='flex col-span-2 flex-col bg-[#efefef] '>
              <ul className='text-[#484646] font-semibold text-[30px] flex flex-wrap justify-start items-start mt-5 ml-[78px] gap-20 mb-5'>
                <li className='w-80'>
                  <p>
                    ▪Consulta
                  </p>
                  <p className='text-black text-[16px] text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus quas fugiat, quia iure in laborum praesentium aut recusandae veniam facilis.</p>
                </li>
                <li className='w-80'>
                  <p>
                    ▪Administrador
                  </p>
                  <p className='text-black text-[16px] text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus quas fugiat, quia iure in laborum praesentium aut recusandae veniam facilis.</p>
                </li>
                <li className='w-80'>
                  <p>
                    ▪Tecnica
                  </p>
                  <p className='text-black text-[16px] text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus quas fugiat, quia iure in laborum praesentium aut recusandae veniam facilis.</p>
                </li>
                <li className='w-80'>
                  <p>
                    ▪Juridica
                  </p>
                  <p className='text-black text-[16px] text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus quas fugiat, quia iure in laborum praesentium aut recusandae veniam facilis.</p>
                </li>
                <li className='w-80'>
                  <p>
                    ▪Financiera
                  </p>
                  <p className='text-black text-[16px] text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus quas fugiat, quia iure in laborum praesentium aut recusandae veniam facilis.</p>
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