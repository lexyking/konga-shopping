import { useContext } from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@mui/material"
import { AddShoppingCart } from "@mui/icons-material"
import { handleAddToCart } from "../../context/util";
import AppContext from "../../context/AppContext";

import useStyles from './styles';

const Product = ({ product }) => {
  const classes = useStyles();
  const {setCart} = useContext(AppContext)

  return (
    <Card className={classes.root}>
      <CardMedia title={product.name} image={product.image.url} className={classes.media}/>
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2" color='textSecondary' />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to card" onClick={() => handleAddToCart(product.id, 1, setCart)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Product