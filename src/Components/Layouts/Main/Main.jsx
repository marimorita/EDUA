import React from 'react'
import { Modals } from '../../Ui/Modals/Modals.jsx'
import { Home } from '../../Ui/Home/Home.jsx'
export const Main = () => {
  return (
    <>
      <Modals visibility={true} />
      <Home/>
    </>
  )
}