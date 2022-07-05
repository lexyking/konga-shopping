import Products from './components/Products/Products'
import NavBar from './components/Navbar/Navbar';
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  const theme = createTheme({})
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <NavBar />
      <div>Hello from the App</div>
        <Products />
      </ThemeProvider>
    </Router>
  )
}

export default App;
