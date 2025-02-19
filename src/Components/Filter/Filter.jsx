import React, { useState } from 'react'

export const Filter = ({renderCard}) => {
      const [selectValue, setSelectValue] =  useState('All')
      const handleChangeUi = (event) => {
        setSelectValue(event.target.value)
      };
      const dataFilter = (objDir.filter((dataObj) => {
       if (selectValue === 'All') {
         return dataObj
       }else if (selectValue === dataObj.textColor) {
         return dataObj
       }
      }))

  return (
    <>
    <select
     onChange={handleChangeUi}
     className="focus:text-black bg-white p-2 rounded border border-gray-300 h-18 font-semibold text-[#9ca3af]"
          >
        <option value="All" disabled selected>Filtrar </option>
        <option value="#434343" className="text-black">Sin alerta</option>
        <option value="#e2000f" className="text-black">Alerta Roja</option>
        <option value="#f29d38" className="text-black">Alerta Naranja</option>
        <option value="#fffd54" className="text-black">Alerta Amarilla</option>
        <option value="All" className="text-black">Todas las tareas</option>
    </select>
    {dataFilter.map((tasks, index) => renderCard(tasks, index))}
    </>
  )
}