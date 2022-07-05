import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from "@mui/material"
import { Link, useLocation, useParams, useRouteMatch, useHistory } from 'react-router-dom';
import { ShoppingCart } from "@mui/icons-material";

import useStyles from './styles.js'
import logo from '../../assets/commerce.png';


const NavBar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();
  // const history = useHistory()
  // const match = useRouteMatch()
  // const params = useParams()
  // console.log({ location }, { history },
  //   { match }, { params })
  return (
    <>
       <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="commerce.js" height="25px" className={classes.image} /> Commerce.js
          </Typography>
          <div className={classes.grow} />
          {location && location?.pathname === '/' && (
          <div className={classes.button}>
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar