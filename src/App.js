import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Products,
  NavBar,
  Cart,
  Checkout
} from './components'
import { AppContextProvider } from './components/context/AppContext';

const App = () => {

  return (
    <Router>
      <div style={{ display: 'flex' }}>
      <AppContextProvider>
          <NavBar/>
          <Switch>
            <Route exact path="/"><Products /></Route>
            <Route exact path="/cart"><Cart /></Route>
            <Route exact path="/checkout"><Checkout /></Route>
          </Switch>
      </AppContextProvider>
      </div>
    </Router>
  )
}

export default App;
