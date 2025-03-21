import React, {useContext} from 'react';
import { Buttons } from '../../Components/Buttons/Buttons';
import { StateContext } from '../../Context/Context';

export const NavBar = () => {
const { scrollHome, scrollHelp, scrollMiau, scrollAbout } = useContext=(StateContext);
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
    return (
        <>
            <Buttons buttonEvent={arrowButton} />
            <Buttons buttonEvent={helpButton} label={'Ayuda'} />
            <Buttons buttonEvent={miauButton} label={'Miau'} />
            <Buttons buttonEvent={aboutButton} label={'Sobre Nosotros'} />
        </>
    )
}
