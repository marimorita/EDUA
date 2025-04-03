import React from 'react'
import { Search } from './Search'
import { ToolTipDirector } from '../../Components/ToolTip/ToolTipDirector'

export const SearchDirector = () => {
  return (
    <>
      <ToolTipDirector />
      <Search redirectPath={'/director'} />
    </>
  )
}