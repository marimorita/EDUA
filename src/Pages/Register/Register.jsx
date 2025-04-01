import React , { useContext }from 'react'
import { Form } from '../../Utils/Form/Form'
import { StateContext } from '../../Context/Context';

export const Register = ({registerClass}) => {
  const {animationImg , setAnimationImg } = useContext (StateContext);
  const handleButtonClick = () => {
    setAnimationImg(!animationImg);
  };
  return (
    <div className={`${registerClass} bg-white h-full w-full items-center relative py-4`}>
      <div className="bg-white flex justify-center flex-col space-y-4">
        <h1 className='flex items-center justify-center font-semibold text-[30px]'> Regístrate </h1>
        <Form/>
        <div className='flex justify-center gap-1'>
          <p className='text-[#484646] font-semibold '>¿Ya estas registrado?</p>
          <button onClick={handleButtonClick} className='underline cursor-pointer text-[#701819] font-semibold'>Inicia sesión aquí</button>
        </div>
        <div className='flex items-center justify-center'></div>
      </div>
    </div>
  )
};