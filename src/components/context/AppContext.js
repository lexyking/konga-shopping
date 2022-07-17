import { createContext } from 'react'

const AppContext = createContext({})

export const AppContextProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{
      hello: 'i am the context'
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext;