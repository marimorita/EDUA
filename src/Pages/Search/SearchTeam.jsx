import React from 'react'
import { Search } from './Search'
import { ToolTipTeam } from '../../Components/ToolTip/ToolTipTeam'

export const SearchTeam = () => {
  return (
    <>
      <ToolTipTeam />
      <Search redirectPath={'/team'} />
    </>
  )
}