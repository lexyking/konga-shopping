import { createContext } from "react";

const NavBarContext = createContext({})

export const NavBarContextProvider = ({ children }) => {
  return (
    <NavBarContext.Provider value={{
      navBarvalue: 'hello from the navbar context'
    }}>
      {children}
    </NavBarContext.Provider>
  )
}

export default NavBarContext