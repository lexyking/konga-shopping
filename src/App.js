import Products from './components/Products/Products'
import { createTheme, ThemeProvider } from '@mui/material';

const App = () => {
  const theme = createTheme({})
  return (
    <ThemeProvider theme={theme}>
     <div>Hello from the App</div>
      <Products /> 
    </ThemeProvider>
  )
}

export default App;
