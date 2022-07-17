import { useState, useEffect, createContext } from 'react'
import { fetchProducts, fetchCart } from './util'

const AppContext = createContext({})

export const AppContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    fetchProducts(setProducts);
    fetchCart(setCart);
  }, [])

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <AppContext.Provider value={{
      handleDrawerToggle,
      totalItems: cart.total_items,
      products,
      setProducts,
      cart,
      setCart,
      order,
      setOrder,
      errorMessage,
      setErrorMessage,
      mobileOpen,
      setMobileOpen,
    }}>
      
      { children }
    </AppContext.Provider>
  )
}

export default AppContext;