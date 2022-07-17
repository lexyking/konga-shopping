import { useState, useEffect } from 'react'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Products,
  NavBar,
  Cart,
  Checkout
} from './components'
import { commerce } from './components/lib/commerce'
import { AppContextProvider } from './components/context/AppContext';

const App = () => {
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
    <Router>
      <div style={{ display: 'flex' }}>
      <AppContextProvider>
        {/* <ThemeProvider theme={theme}>
          <CssBaseline /> */}
          <NavBar cart={cart} totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle}/>
          <Switch>
            <Route exact path="/">
              <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty/>
            </Route>
            <Route exact path="/cart">
              <Cart cart={cart}
                onUpdateCartQty={handleUpdateCartQty}
                onRemoveFromCart={handleRemoveFromCart}
                onEmptyCart={handleEmptyCart} />
            </Route>
            <Route exact path="/checkout">
              <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage}/>
            </Route>
          </Switch>
        {/* </ThemeProvider> */}
      </AppContextProvider>
      </div>
    </Router>
  )
}

export default App;
