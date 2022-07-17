import { useContext } from 'react'
import { Grid } from '@mui/material'
import Product from './Product/Product'
import useStyles from './styles'
import AppContext from '../context/AppContext'

const Products = () => {
  const classes = useStyles()
  const { products, handleAddToCart } = useContext(AppContext)

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify='center' spacing={4} >
        {
          products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={handleAddToCart}/>
            </Grid>
          ))
        }
      </Grid>
    </main>
  )
}

export default Products;