import { Grid } from '@mui/material'
import Product from './Product/Product'
import useStyles from './styles'

// const products = [
//   {id: 1, name: 'Macbook', description: 'this is an Apple product', price: '£2400'},
//   {id: 2, name: 'i-phone', description: 'this is another Apple product', price: '£1299'}
// ]

const Products = ({ products }) => {
  const classes = useStyles()
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify='center' spacing={4} >
        {
          products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product}/>
            </Grid>
          ))
        }
      </Grid>
    </main>
  )
}

export default Products