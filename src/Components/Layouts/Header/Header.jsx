import React from 'react'
import logoName from '../../../assets/Images/logoEduaName.svg';
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { useLocation } from "wouter";
import { IoSearchSharp } from "react-icons/io5";
import { useNavbarAnimation } from '../../Hooks/useNavbarAnimation';

export const Header = () => {
  const [, setLocation] = useLocation();
  const { navbarAnimationClasses } = useNavbarAnimation();

  const handleButtonClickNotis = () =>{ 
    setLocation(`/notifications`)
  }
  const handelButtonCilickProfile = () =>{
    setLocation(`/profile`)
  }
  const handleButtonClickTeam = () =>{
    setLocation(`/teamTasks`)
  }
  const handleButtonClickSearch = () =>{
    setLocation(`/search`)
  }
  return (
    <>
      <section className={navbarAnimationClasses()}>
        <div className='flex justify-center items-center w-full mt-4'>
          <ul className='bg-white list-none font-semibold text-[30px] flex justify-start items-start gap-24 m-1 h-[60px] rounded-xl border p-2 border-[#434343]'>
            <li>
              <img src={logoName} alt="logoEdua" className='w-28 h-9 cursor-pointer hover:scale-110 transition duration-300'/>
            </li>
            <li>
              <button onClick={handleButtonClickSearch}>
                <IoSearchSharp className='cursor-pointer w-10 h-10 hover:scale-125 transition duration-300 text-[#434343]'/>
              </button>
            </li>
            <li>
              <button onClick={handleButtonClickTeam}>
                <HiUserGroup className='cursor-pointer w-10 h-10 hover:scale-125 transition duration-300 text-[#434343]'/>
              </button>
            </li>
            <li>
              <button onClick={handleButtonClickNotis}>
                <FaBell className='cursor-pointer w-10 h-10 hover:scale-125 transition duration-300 text-[#434343]'/>
              </button>
            </li>
            <li>
              <FaUser onClick={handelButtonCilickProfile} className='cursor-pointer w-10 h-10 hover:scale-125 transition duration-300 text-[#434343]'/>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};