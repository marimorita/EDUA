import React from 'react';
import CAM from '../../../assets/Images/CAM.jpg'
import logoName from '../../../assets/Images/logoEduaName.png';
import helpImg from '../../../assets/Images/help.png';
import logoEdua from '../../../assets/Images/logoEdua.png'
import aboutInfoImg from '../../../assets/Images/aboutIt.png';
import miau from '../../../assets/Images/miau.png'
import { Buttons } from '../Buttons/Buttons';
import { useLocation } from 'wouter';
import { Footer } from '../../Layouts/Footer/Footer';

export const Home = () => {
    const [, setLocation] = useLocation();

    const handleButtonClick = () => {
        setLocation('/register');
    };
    const handleButtonClickHelp = () => {
        setLocation('/help');
    };
    const handleButtonClickAboutUs = () => {
        setLocation('/aboutUs');
    };
    const handleButtonClickMiau = () => {
        setLocation('/miau');
    };
  return (
   <div className="bg-white h-screen relative flex flex-col ">
    <section id='el nombre que quieras(que identifique la primera parte)' >
   <div className='w-full h-[600px]'>
    <img src={CAM} alt="imgbackground" className="w-full h-full object-fill  " />
   </div>

   <div className='flex absolute top-3 left-[44%]'>
    <img src={logoName} alt="logo" className="w-[190px] h-[70px]" />
   </div>

   <section className='top-28 left-[18%] absolute flex justify-center items-center'>
    <ul className='list-none font-semibold text-[30px] flex gap-44'>
      <li>
        <Buttons btnStyle={"w-48 h-11 bg-[#00000000]"} label="Miau" />
      </li>
      <li>
        <Buttons btnStyle={"w-48 h-11 bg-[#00000000]"} label="Acerca de" />
      </li>
      <li>
        <Buttons buttonEvent={handleButtonClickHelp} btnStyle={"w-48 h-11 bg-[#00000000]"} label="Ayuda" />
      </li>
    </ul>
    <div className='top-20 absolute flex '>
      <Buttons buttonEvent={handleButtonClick} btnStyle={"text-[25px] w-48 h-11 bg-[#00000000]"} label="Iniciar" />
    </div>
   </section>
   <section id="aboutInfo" className="relative h-screen grid grid-cols-2 items-center  w-full">
    <h1 className="absolute left-1/2 top-[8%] transform -translate-x-1/2 -translate-y-1/2 font-bold text-[40px]"> Acerca De </h1>
  <div className="flex justify-center mt-20">
    <img src={aboutInfoImg} alt="Image Info" className='w-[60rem] h-[30rem]'/>
  </div>
  <div className="flex justify-center flex-col space-y-4 px-6">
    <p className="text-[20px] text-justify">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit nulla ad aliquam labore, cum perspiciatis fugit? Voluptatum eligendi quae laboriosam ipsa in, corporis repellendus nihil quam vitae commodi dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit nulla ad aliquam labore, cum perspiciatis fugit? Voluptatum! repellendus nihil quam vitae commodi dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit
    </p>
  </div>
  </section>
<section id="Rols"  className='grid grid-cols-3 w-full h-auto '>
    <div className='col-span-1 bg-[#D9D9D9] flex justify-center items-center'>
      <p className='font-semibold text-black text-[30px]'>Roles del aplicativo</p>
    </div>
    <div className='flex col-span-2 flex-col bg-[#efefef] '>
      <ul className= 'text-[#484646] font-semibold text-[30px] flex flex-wrap justify-start items-start mt-5 ml-[78px] gap-20 mb-5'> 
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
  <section id="help" className="relative h-screen grid grid-cols-2 items-center  w-full">
      <h1 className="absolute left-1/2 top-[8%] transform -translate-x-1/2 -translate-y-1/2 font-bold text-[40px]"> Ayuda </h1>
    <div className="flex justify-center flex-col space-y-4 px-6">
      <p className="text-[20px] text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit nulla ad aliquam labore, cum perspiciatis fugit? Voluptatum eligendi quae laboriosam ipsa in, corporis repellendus nihil quam vitae commodi dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit nulla ad aliquam labore, cum perspiciatis fugit? Voluptatum! repellendus nihil quam vitae commodi dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit
      </p>
    </div>
    <div className="flex justify-center mt-20">
      <img src={helpImg} alt="ImageHelp" className='w-[40rem] h-[30rem]'/>
    </div>
    </section>
    <section id="Image" className=''>
      <div className='flex justify-center items-center h-screen mt-1'>
        <img src={logoEdua} alt="Logo Image" className='w-[65rem] h-[45rem]' />
      </div>
    </section>
    <section id="miau" className="relative h-screen grid grid-cols-2 items-center  w-full">
    <h1 className="absolute left-1/2 top-[8%] transform -translate-x-1/2 -translate-y-1/2 font-bold text-[40px]"> Miau </h1>
  <div className="flex justify-center mt-20">
    <img src={miau} alt="Image Miau" className='w-[60rem] h-[30rem]'/>
  </div>
  <div className="flex justify-center flex-col space-y-4 px-6">
    <p className="text-[20px] text-justify">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit nulla ad aliquam labore, cum perspiciatis fugit? Voluptatum eligendi quae laboriosam ipsa in, corporis repellendus nihil quam vitae commodi dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit nulla ad aliquam labore, cum perspiciatis fugit? Voluptatum! repellendus nihil quam vitae commodi dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit
    </p>
  </div>
  </section>
  <Footer/>
</section>
</div>
  );
};