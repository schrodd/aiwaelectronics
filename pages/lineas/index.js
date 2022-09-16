import Head from "next/head";
import Footer from "../../components/Footer";
import LinesContainer from '../../components/LinesContainer'

export default function Lineas(){
  return (
    <>
      <Head>
        <title>Líneas | Aiwa Electronics</title>
      </Head>
      <main id='lineas'>
        <div className='text'>
          <h1>LÍNEAS</h1>
          <h2>Explorá nuestras diversas colecciones de productos</h2>
        </div>
        <LinesContainer />
      </main>
    </>
  )
}