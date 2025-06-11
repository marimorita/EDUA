import logoEduaName from '../../assets/Images/logoEduaName.svg';
import { Cards } from '../../Components/Cards/Cards';
import { Inputs } from '../../Components/Inputs/Inputs';
import { useEffect, useState } from 'react'
import { useLocation } from "wouter";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowRoundBack } from 'react-icons/io';

export const Search = ({ obj, redirectPath, Icon }) => {
  const [inputValue, setInputValue] = useState('');
  const [search, setSearch] = useState(obj);
  const [, setLocation] = useLocation()
  const clickButton = () => {
    setLocation(redirectPath)
  }
  const handleSearchChange = (e) => {
    const input = e.target.value;
    setInputValue(input);
    const cardsFilterDate = obj.filter(item =>
      new RegExp(input, 'i').test(item.text) || new RegExp(input, 'i').test(item.tittle)
    );
    setSearch(cardsFilterDate);
  };
  useEffect(() => {
    console.log(search);
  })

  return (
    <>
      <div className='absolute z-30 top-2 left-3'>
        <IoIosArrowRoundBack onClick={clickButton} className='cursor-pointer w-10 h-10 hover:scale-125' />
      </div>
      <div className="absolute top-4 left-[45%]">
        <img src={logoEduaName} alt="logo" className="w-[140px] h-[45px]" />
      </div>
      <div className='flex justify-center items-center gap-1 mt-20'>
        <IoSearchSharp className='w-8 h-8' />
        <Inputs valueInput={search} inputValue={handleSearchChange} classP={`w-[15rem] focus:outline-none border-0 border-b-2 border-solid border-[#434343]`}
          type={"date"}
          nameInputs={"Date"}
          placeholder={"Buscar número de radicado"} />
      </div>
      <div className='flex items-center justify-center flex-col mt-20'>
        {search.map((infoCard) => (<Cards message={infoCard.text} tittle={infoCard.tittle} handleButtonClick={() => redirect(infoCard.id)} Icon={Icon} />))}
      </div>
    </>
  )
}