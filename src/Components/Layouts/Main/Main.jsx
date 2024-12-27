import React from 'react'
import { Register } from '../../Ui/Register/Register'
import { Login } from '../../Ui/Login/Login'
import { Home } from '../../Pages/Home/Home'

export const Main = () => {
  return (
    <main>
      <Register/>
      <Login/>
      <Home/>
    </main>
  )
}