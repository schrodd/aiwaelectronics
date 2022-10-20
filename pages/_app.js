import '../styles/main.scss'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Head from 'next/head';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Favicon from '../components/Favicon';

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
      <Head>
        <Favicon/>
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
