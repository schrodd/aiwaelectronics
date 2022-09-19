import '../styles/main.scss'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { createTheme, ThemeProvider } from '@mui/material/styles';

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#222'
      }
    }
  }); 
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
