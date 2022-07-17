import { useState, useEffect, createContext } from 'react'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

const AppContext = createContext({})

export const AppContextProvider = ({ children }) => {
  const theme = createTheme({})
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <AppContext.Provider value={{
      royal: 'lexy king'
    }}>
      <ThemeProvider theme={theme}>
          <CssBaseline />
      { children }
      </ThemeProvider>
    </AppContext.Provider>
  )
}

export default AppContext;