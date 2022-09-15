import { useRouter } from "next/router"
import Banner from '../../components/Banner'
import Product from "../../components/Product"
import { lvTwoCat } from "../../content/categories"
import products from "../../content/products"

export default function Category(){
  const url = useRouter()
  const { cat } = url.query
  const category = lvTwoCat.find(e => e.route === `/categorias/${cat}`)
  if (category === undefined) {return <p>No se encontró la categoría</p>}
  const prod = products.filter(e => e.categories.includes(category.id))

  return (
    <main id={`categorias ${cat}`}>
      <Banner link={category.route} image={category.banner} mobile={category.banner} title={category.name} desc={category.desc}/>
      <section className='products'>
        {prod.map((e,i) => <Product key={i} index={i} product={e} />)}
      </section>
    </main>
  )
}