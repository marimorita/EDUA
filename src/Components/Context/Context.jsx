import React, {useState, createContext} from 'react'
export const StateContext = createContext ();

export const StateProvider = ({children}) => {
  const [viewConfirmModal, setViewConfirmModal] = useState(false)
    return (
    <StateContext.Provider value={{viewConfirmModal, setViewConfirmModal}}>
        {children}  
    </StateContext.Provider>
  )
}