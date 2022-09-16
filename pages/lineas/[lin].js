import Image from "next/image"
import { useRouter } from "next/router"
import Banner from '../../components/Banner'
import Product from "../../components/Product"
import lineas from '../../content/lineas'
import { products } from "../../content/products"

export default function Lines(){
  const url = useRouter()
  const { lin } = url.query
  const linea = lineas.find(e => e.link === `/lineas/${lin}`)
  if (linea === undefined) {return <p>No se encontró la línea</p>}
  const prod = products.filter(e => e.line === (linea.name))
  
  return (
    <main className={`linea ${lin}`}>
      <div className='banner'>
        <Banner link={linea.link} image={linea.bg} mobile={linea.bg}/>
        <div className={`logo ${linea.name}`}>
          <Image layout='fill' objectFit="contain" src={linea.logo} alt={`${linea.name} logo`}/>
        </div>
      </div>
      <section className='products'>
        {prod.map((e,i) => <Product key={i} index={i} product={e} />)}
      </section>
    </main>
  )
}