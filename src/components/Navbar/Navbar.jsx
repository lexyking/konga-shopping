import { useContext } from "react";
import { AppBar, Toolbar, IconButton, Badge, Typography} from "@mui/material"
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from "@mui/icons-material";

import useStyles from './styles.js'
import logo from '../../assets/commerce.png';
import AppContext from "../context/AppContext";


const NavBar = () => {
  const classes = useStyles();
  const location = useLocation();
  const { totalItems } = useContext(AppContext);

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