import React from 'react'
import helpImg from '../../assets/Images/help.svg';

export const Help = ({ refHelp }) => {
    return (
        <section ref={refHelp} id="help" className="relative h-screen grid grid-cols-2 items-center w-full mt-[8rem]">
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
    )
}