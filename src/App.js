import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import {
  Products,
  NavBar,
  Cart,
  Checkout
} from './components'
import { ContextProvider } from './components/context';

const App = () => {
  const theme = createTheme({})

  return (
    <Router>
      <div style={{ display: 'flex' }}>
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar/>
          <Switch>
            <Route exact path="/"><Products /></Route>
            <Route exact path="/cart"><Cart /></Route>
            <Route exact path="/checkout"><Checkout /></Route>
          </Switch>
        </ThemeProvider>
      </ContextProvider>
      </div>
    </Router>
  )
}

export default App;
