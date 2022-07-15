import { useState, useEffect } from 'react'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  NavBar,
  Cart,
  Checkout
} from './components'
import Products from './pages/products/Products';
import { commerce } from './components/lib/commerce'
import {
  fetchProducts,
  fetchCart
} from './components/helpers/util';

const App = () => {
  const theme = createTheme({})
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

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
    fetchProducts(setProducts);
    fetchCart(setCart);
  }, [])

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
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
        </ThemeProvider>
      </div>
    </Router>
  )
}

export default App;
