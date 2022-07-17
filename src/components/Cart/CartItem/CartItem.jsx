import {useContext} from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';

import useStyles from './styles';
import AppContext from '../../context/AppContext';
import { handleUpdateCartQty, handleRemoveFromCart } from '../../context/util';

const CartItem = ({ item }) => {
  const classes = useStyles();
  const { setCart } = useContext(AppContext)

  return (
    <Card className="cart-item">
      <CardMedia image={item.media ? item.media.source : item.image.url} alt={item.name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1, setCart)}>-</Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1, setCart)}>+</Button>
        </div>
        <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item.id, setCart)}>Remove</Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;