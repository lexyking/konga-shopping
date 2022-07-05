import { useState, useEffect } from 'react'
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  Products,
  NavBar
} from './components'
import { commerce } from './components/lib/commerce'

const App = () => {
  const theme = createTheme({})
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})
  // console.log(commerce.products())

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
    console.log(item)
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])

  // console.log({ products })
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <NavBar cart={cart} totalItems={cart.total_items}/>
        <Products products={products} onAddToCart={handleAddToCart}/>
      </ThemeProvider>
    </Router>
  )
}

export default App;
