import { useContext } from 'react'
import { appContext } from '../../context/appContext'
import { Grid } from '@mui/material'
import Product from './Product/Product'
import useStyles from './styles'

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles()
  // const value = useContext(appContext());
  // console.log({ value })
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