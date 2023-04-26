import Image from "next/image"
import { useRouter } from "next/router"
import lineas from '../../content/lineas'
import { products } from "../../content/products"
import NotFound from "../../components/NotFound"
import Head from "next/head"
import LineBanner from "../../components/LineBanner"
import LineProductCard from "../../components/LineProductCard"

export default function Lines({lineas}){
  const url = useRouter()
  const { lin } = url.query
  const linea = lineas.find(e => e.link === `/lineas/${lin}`)
  if (linea === undefined) {return <NotFound desc={`No se ha encontrado la línea "${lin}"`}/>}
  const prod = products.filter(e => e.line === (linea.name) && e.buyLink)

  return (
    <>
      <Head>
          <title>{`Línea ${linea.displayName} | Aiwa Electronics`}</title>
      </Head>
      <main className={`linea ${lin}`}>
        <LineBanner line={linea}/>
        <section className='line-products'>
          {prod.map((e,i) => <LineProductCard prod={e} key={i}/>)}
          <div className="section-bg">
            <Image src={linea.background} fill/>
          </div>
        </section>
      </main>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {lineas}, // will be passed to the page component as props
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { lin: 'infinit' }},
      { params: { lin: 'flama' }},
      { params: { lin: 'ring' }},
      { params: { lin: 'party' }},
    ],
    fallback: false, // can also be true or 'blocking'
  }
}