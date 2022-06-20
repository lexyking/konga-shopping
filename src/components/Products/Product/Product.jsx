import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@mui/material"
import { AddShoppingCart } from "@mui/icons-material"

const Product = ({ product }) => {
  return (
    <Card>
      <CardMedia title={product.name} image=''/>
      <CardContent>
        <div>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price}
          </Typography>
        </div>
        <Typography variant="h2" color='textSecondary'>
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to card" children={AddShoppingCart}/>
      </CardActions>
    </Card>
  )
}

export default Product