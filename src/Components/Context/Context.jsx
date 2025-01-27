import React, {useState, createContext} from 'react'
export const StateContext = createContext ();

export const StateProvider = ({children}) => {
  const [viewConfirmModal, setViewConfirmModal] = useState(false)
  const [viewSuccessModal, setViewSuccessModal] = useState (false)
  const [animationImg , setAnimationImg ] = useState (false)
  const [viewFailModal, setViewFailModal] = useState(false)
  const [valueRol, setValueRol] = useState("")
    return (
    <StateContext.Provider value={{viewConfirmModal, setViewConfirmModal, viewSuccessModal, setViewSuccessModal, viewFailModal, setViewFailModal, valueRol, setValueRol, animationImg , setAnimationImg }}>
        {children}  
    </StateContext.Provider>
  )
}