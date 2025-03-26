import React, { useContext, useRef } from 'react'
import { Help } from './Help';
import { Roles } from './Roles';
import { Footer } from '../../Layouts/Footer/Footer';
import { Header } from '../../Layouts/Header/Header';
import { AboutUs } from './AboutUs';
import { StateContext } from '../../Context/Context';

export const Home = () => {
  const { scrollHome, scrollRoles, scrollAbout, scrollHelp } = useContext(StateContext);
  const arrowButton = () => {
    scrollHome.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="bg-white">
        <section id="main" className='h-screen relative flex flex-col'>
          <Header refHeader={scrollHome}/>
          <AboutUs refAboutUs={scrollAbout} />
          <Roles refRoles={scrollRoles} />
          <Help refHelp={scrollHelp} />   
          <Footer clickButton={arrowButton} />
        </section>
      </div>
    </>
  );
};