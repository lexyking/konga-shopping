import { useState, useEffect, createContext } from 'react'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { commerce } from '../lib/commerce';

const AppContext = createContext({})

export const AppContextProvider = ({ children }) => {
  const theme = createTheme({})
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  const fetchProducts = async () => {
    const {data} = await commerce.products.list();
    setProducts(data)
  }

  const fetchCart = async() => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async(productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    setCart(item.cart)
  }

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
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
      handleAddToCart,
      handleUpdateCartQty,
      handleRemoveFromCart,
      handleEmptyCart,
      handleCaptureCheckout
    }}>
      <ThemeProvider theme={theme}>
          <CssBaseline />
      { children }
      </ThemeProvider>
    </AppContext.Provider>
  )
}

export default AppContext;