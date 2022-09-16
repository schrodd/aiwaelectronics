import Image from "next/image"
import { useRouter } from "next/router"
import Banner from '../../components/Banner'
import Product from "../../components/Product"
import lineas from '../../content/lineas'
import { products } from "../../content/products"
import NotFound from "../../components/NotFound"
import Head from "next/head"

export default function Lines(){
  const url = useRouter()
  const { lin } = url.query
  const linea = lineas.find(e => e.link === `/lineas/${lin}`)
  if (linea === undefined) {return <NotFound desc={`No se ha encontrado la línea "${lin}"`}/>}
  const prod = products.filter(e => e.line === (linea.name))
  
  return (
    <>
      <Head>
          <title>{`Línea ${linea.displayName} | Aiwa Electronics`}</title>
      </Head>
      <main className={`linea ${lin}`}>
        <div className='banner'>
          <Banner link={linea.link} image={linea.banner} mobile={linea.bannerMobile}/>
          <div className={`logo ${linea.name}`}>
            <Image layout='fill' objectFit="contain" src={linea.logo} alt={`${linea.name} logo`}/>
          </div>
        </div>
        <section className='products'>
          {prod.map((e,i) => <Product key={i} index={i} product={e} />)}
        </section>
      </main>
    </>
  )
}