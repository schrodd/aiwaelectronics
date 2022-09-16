import { useRouter } from "next/router"
import Banner from '../../components/Banner'
import Product from "../../components/Product"
import { lvTwoCat } from "../../content/categories"
import { products } from "../../content/products"
import NotFound from "../../components/NotFound"
import Head from "next/head"

export default function Category(){
  const url = useRouter()
  const { cat } = url.query
  const category = lvTwoCat.find(e => e.route === `/categorias/${cat}`)
  if (category === undefined) {return <NotFound desc={`No se ha encontrado la categoría "${cat}"`}/>}
  const prod = products.filter(e => e.categories.includes(category.id))

  return (
    <>
      <Head>
        <title>{`${category.name} | Aiwa Electronics`}</title>
      </Head>
      <main id={`categorias ${cat}`}>
        <Banner link={category.route} image={category.banner} mobile={category.banner} title={category.name} desc={category.desc}/>
        <section className='products'>
          {prod.map((e,i) => <Product key={i} index={i} product={e} />)}
        </section>
      </main>
    </>
  )
}