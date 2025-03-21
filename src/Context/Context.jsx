import React, { useState, createContext, useRef } from 'react'
export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const scrollHome = useRef(null);
  const scrollHelp = useRef(null);
  const scrollMiau = useRef(null);
  const scrollAbout = useRef(null);
  const [valueRol, setValueRol] = useState("")
  const [isChecked, setIsChecked] = useState(false);
  const [animationImg, setAnimationImg] = useState(false)
  const [viewFailModal, setViewFailModal] = useState(false)
  const [viewConfirmModal, setViewConfirmModal] = useState(false)
  const [viewSuccessModal, setViewSuccessModal] = useState(false)

  return (
    <StateContext.Provider value={{ viewConfirmModal, setViewConfirmModal, viewSuccessModal, setViewSuccessModal, viewFailModal, setViewFailModal, valueRol, setValueRol, animationImg, setAnimationImg, isChecked, setIsChecked, scrollHome, scrollHelp, scrollMiau, scrollAbout }}>
      {children}
    </StateContext.Provider>
  )
};