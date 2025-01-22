import React, {useState, createContext} from 'react'
export const StateContext = createContext ();
  
export const StateProvider = ({children}) => {
  const [viewConfirmModal, setViewConfirmModal] = useState(false)
  const [viewSuccessModal, setViewSuccessModal] = useState (false)
  const [viewFailModal, setViewFailModal] = useState(false)
    return (
    <StateContext.Provider value={{viewConfirmModal, setViewConfirmModal, viewSuccessModal, setViewSuccessModal, viewFailModal, setViewFailModal}}>
        {children}  
    </StateContext.Provider>
  )
}