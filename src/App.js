import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  Products,
  NavBar
} from './components'

const App = () => {
  const theme = createTheme({})
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Products />
      </ThemeProvider>
    </Router>
  )
}

export default App;
