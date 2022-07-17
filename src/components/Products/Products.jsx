import { useContext } from 'react'
import { Grid } from '@mui/material'
import Product from './Product/Product'
import useStyles from './styles'
import AppContext from '../context/AppContext'

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles()
  const result = useContext(AppContext)

  console.log({ result })
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify='center' spacing={4} >
        {
          products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart}/>
            </Grid>
          ))
        }
      </Grid>
    </main>
  )
}

export default Products;