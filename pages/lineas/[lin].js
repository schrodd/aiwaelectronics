import Image from "next/legacy/image"
import { useRouter } from "next/router"
import MainBanner from '../../components/MainBanner'
import Product from "../../components/Product"
import lineas from '../../content/lineas'
import { products } from "../../content/products"
import NotFound from "../../components/NotFound"
import Head from "next/head"
import LineBanner from "../../components/LineBanner"
import LineProductCard from "../../components/LineProductCard"

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
        <LineBanner line={linea}/>
        <section className='line-products'>
          {prod.map((e,i) => <LineProductCard prod={e} key={i}/>)}
        </section>
      </main>
    </>
  )
}