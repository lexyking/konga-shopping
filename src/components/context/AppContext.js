import { useEffect, useState, createContext, useContext } from 'react'
import { NavBarContextProvider } from './NavBarContext'
import { combineProvider } from './util'

const AppContext = createContext({})

const AppContextProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{
      hello: 'i am the context'
    }}>
      {children}
    </AppContext.Provider>
  )
}

const providers = [
  NavBarContextProvider,
  AppContextProvider
]

export const ContextProvider = combineProvider(...providers)

export default AppContext;