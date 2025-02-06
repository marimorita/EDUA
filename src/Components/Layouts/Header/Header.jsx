import React from 'react'
import logoName from '../../../assets/Images/logoEduaName.svg';
import { Buttons } from '../../Ui/Buttons/Buttons';
import { useNavbarAnimation } from '../../Hooks/useNavbarAnimation';
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
export const Header = () => {
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
    </>
  )
}
