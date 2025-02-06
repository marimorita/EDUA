import React, { useRef } from 'react'
import logoName from '../../../assets/Images/logoEduaName.svg';
import helpImg from '../../../assets/Images/help.svg';
import logoEdua from '../../../assets/Images/logoEdua.svg'
import aboutInfoImg from '../../../assets/Images/aboutIt.svg';
import miau from '../../../assets/Images/miau.svg'
import { Buttons } from '../../Ui/Buttons/Buttons';
import { useLocation } from 'wouter';
import { useNavbarAnimation } from '../../Hooks/useNavbarAnimation';
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

export const Home = () => {
  const scrollHome = useRef(null);
  const scrollHelp = useRef(null);
  const scrollMiau = useRef(null);
  const scrollAbout = useRef(null);
  const [, setLocation] = useLocation();

  const handleButtonClick = () => {
    setLocation('/accessPanel');
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
          <ul className='bg-white list-none font-semibold text-[30px] flex justify-start items-start gap-24 m-1 p-2 h-[60px] rounded-xl'>
            <li>
              <IoIosArrowRoundBack className='cursor-pointer w-10 h-10 hover:scale-125 transition duration-300'/>
            </li> 
            <li>
              <img src={logoName} alt="logoEdua" className='w-28 h-9 cursor-pointer hover:scale-110 transition duration-300' onClick={arrowButton}/>
            </li>
            <li>
              <IoSearchSharp className='cursor-pointer w-10 h-10 hover:scale-125 transition duration-300 text-[#434343]'/>
            </li>
            <li>
              <HiUserGroup className='cursor-pointer w-10 h-10 hover:scale-125 transition duration-300 text-[#434343]'/>
            </li>
            <li>
              <FaBell className='cursor-pointer w-10 h-10 hover:scale-125 transition duration-300 text-[#434343]'/>
            </li>
            <li>
              <FaUser className='cursor-pointer w-10 h-10 hover:scale-125 transition duration-300 text-[#434343]'/>
            </li>
          </ul>
        </div>
      </section>
      <div ref={scrollHome} className="bg-white h-screen relative flex flex-col ">
        <section id='intro'>
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
  
          </section>

          <section ref={scrollHelp} id="help" className="relative h-screen grid grid-cols-2 items-center  w-full">

          </section>

        </section>
      </div>
    </>
  );
};