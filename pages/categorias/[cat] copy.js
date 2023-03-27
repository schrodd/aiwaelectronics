import { useRouter } from "next/router"
import MainBanner from '../../components/MainBanner'
import Product from "../../components/Product"
import { lvTwoCat } from "../../content/categories"
import { products } from "../../content/products"
import NotFound from "../../components/NotFound"
import Head from "next/head"
import { AltRoute } from "@mui/icons-material"

export default function Category(){
  const url = useRouter()
  const { cat } = url.query
  const category = lvTwoCat.find(e => e.route === `/categorias/${cat}`)
  if (category === undefined) {return <NotFound desc={`No se ha encontrado la categoría "${cat}"`}/>}
  const prod = products.filter(e => e.categories.includes(category.id) && e.buyLink)
  const categoryObj = { // Formatea la data para el componente MainBanner
    img: category.img,
    mobileImg: category.mobileImg,
    link: category.route,
    alt: category.name,
    text: {
      title: category.name,
      subtitle: category.desc,
      cta: '',
      align: 'left',
      valign: 'center',
    }
  }
  return (
    <>
      <Head>
        <title>{`${category.name} | Aiwa Electronics`}</title>
      </Head>
      <main id={`categorias ${cat}`}>
        <MainBanner banner={categoryObj}/>
        <section className='products'>
          {prod.map((e,i) => <Product key={i} index={i} product={e} />)}
        </section>
      </main>
    </>
  )
}