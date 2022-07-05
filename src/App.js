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
  // console.log(commerce.products())

  const fetchProducts = async () => {
    const {data} = await commerce.products.list();
    setProducts(data)
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  console.log({ products })
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Products products={products}/>
      </ThemeProvider>
    </Router>
  )
}

export default App;
