import React from 'react'
import home from '../../assets/Images/home.svg';
import { NavBar } from '../NavBar/NavBar';
import { Buttons } from '../../Components/Buttons/Buttons';
import { useLocation } from "wouter";
import { useNavbarAnimation } from '../../Hooks/useNavbarAnimation';

export const Header = ({ refHeader} ) => {
  const [, setLocation] = useLocation();
  const { navbarAnimationClasses } = useNavbarAnimation()
  const startButton = () => {
    setLocation('/accessPanel');
  };
  return (
    <>
      <section id='header' ref={refHeader}>
        <section className={navbarAnimationClasses()}>
          <div className='pt-10'><NavBar /></div>
        </section>
        <div className='mt-6 flex justify-center items-center'><NavBar /></div>
        <div className='relative grid grid-cols-2 items-center w-full'>
          <div className='flex justify-start mt-[7rem] ml-14 col-span-1'>
            <img src={home} alt="imgBackground" className="w-[95%] h-[30%]" />
          </div>
          <div className='flex justify-center items-center flex-col space-y-4 px-6 mt-[4rem]'>
            <p className='font-semibold text-[50px] text-center'>¡Bienvenidos al area tecnica!</p>
            <div className=''>
              <Buttons buttonEvent={startButton} btnStyle={"text-[25px] w-48 h-11 bg-[#00000000]"} label="Iniciar" />
            </div>
          </div>
        </div>
        <section className='top-4 left-[24%] absolute flex justify-center items-center p-2 rounded-xl'>
        </section>
      </section>
    </>
  );
};