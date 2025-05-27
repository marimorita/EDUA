import React, { useState, createContext, useRef } from 'react'
export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const scrollHome = useRef(null);
  const scrollHelp = useRef(null);
  const scrollRoles = useRef(null);
  const scrollAbout = useRef(null);
  const [valueRol, setValueRol] = useState("")
  const [fileUrl, setFileUrl] = useState(null)
  const [isChecked, setIsChecked] = useState(false);
  const [registerUser, setRegisterUser] = useState(false)
  const [animationImg, setAnimationImg] = useState(false)
  const [viewFailModal, setViewFailModal] = useState(false)
  const [viewConfirmModal, setViewConfirmModal] = useState(false)
  const [viewSuccessModal, setViewSuccessModal] = useState(false)
  
  return (
    <StateContext.Provider value={{ viewConfirmModal, setViewConfirmModal, viewSuccessModal, setViewSuccessModal, viewFailModal, setViewFailModal, valueRol, setValueRol, animationImg, setAnimationImg, isChecked, setIsChecked, scrollHome, scrollHelp, scrollRoles, scrollAbout, fileUrl, setFileUrl, registerUser, setRegisterUser, }}>
      {children}
    </StateContext.Provider>
  )
};