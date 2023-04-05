import Link from "next/link"
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import Head from "next/head";

export default function ThanksAndRedir({desc}){
  const description = desc ? desc : 'Pronto nos contactaremos con vos'
  return <>
    <Head>
      <title>{description}</title>
    </Head>
    <main id='not-found'>
      <InsertEmoticonIcon sx={{fontSize: 50, fill: '#1f1f1f'}}/>
      <h1>¡Muchas gracias!</h1>
      <h2>{description}</h2>
      <Link href='/'><button>Volver al inicio</button></Link>
    </main>
  </>;
}