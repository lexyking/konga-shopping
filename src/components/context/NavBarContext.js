import { createContext } from 'react'

const NavBarContext = createContext({})

export const NavBarContextProvider = ({ children }) => {
  return (
    <NavBarContext.Provider value={{
      navbarcontext: 'hello from navbar context'
    }}>
      {children}
    </NavBarContext.Provider>
  )
}

export default NavBarContext