import Link from "next/link"
import ErrorIcon from '@mui/icons-material/Error';
import Head from "next/head";

export default function NotFound({desc}){
  const description = desc ? desc : 'No se ha encontrado lo que buscabas'
  return <>
    <Head>
      <title>{description}</title>
    </Head>
    <main id='not-found'>
      <ErrorIcon sx={{fontSize: 50}}/>
      <h1>Lo sentimos</h1>
      <h2>{description}</h2>
      <Link href='/'><button>Volver al inicio</button></Link>
    </main>
  </>;
}