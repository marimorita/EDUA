import React, { useContext } from 'react';
import logoName from '../../assets/Images/logoEduaName.svg';
import { Buttons } from '../../Components/Buttons/Buttons';
import { StateContext } from '../../Context/Context';

export const NavBar = () => {
    const { scrollHelp, scrollRoles, scrollAbout } = useContext(StateContext);
    const helpButton = () => {
        scrollHelp.current.scrollIntoView({ behavior: "smooth" });
    };
    const rolesButton = () => {
        scrollRoles.current.scrollIntoView({ behavior: "smooth" });
    };
    const aboutButton = () => {
        scrollAbout.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <div className='flex items-center justify-center '>
                <ul className='list-none flex text-[25px] px-6 gap-28 z-50 bg-[#efefef] p-[8px] rounded-lg w-[60rem]'>
                    <img src={logoName} alt="logo" className="w-[150px] h-[45px]"/>
                    <Buttons buttonEvent={helpButton} label={'Ayuda'} />
                    <Buttons buttonEvent={rolesButton} label={'Roles'} />
                    <Buttons buttonEvent={aboutButton} label={'Acerca De'} />
                </ul>
            </div >
        </>
    )
};