import { Container } from "@mui/material";
import useStyles from './styles';

const Checkout = () => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.toolbar} />
      hello from checkout
    </Container>
  )
}

export default Checkout;