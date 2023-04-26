import { products } from "../../content/products"
import Loading from "../../components/Loading"
import ProductContent from "../../components/ProductContent"
import Head from "next/head"
import texts from "../../content/texts"

export default function Producto({product}){
  return (
    <>
      {product && (
        <Head>
          <title>{product.sku + texts.spacer + texts.aiwaElec}</title>
        </Head>
      )}
      <section className='product-page'>
        {!product ? <Loading/> : <ProductContent prod={product}/>}
      </section>
    </>
  )
}

export async function getStaticProps(context) {
  const product = products.find(e => e.sku === context.params.prod)
  return {
    props: {product}, // will be passed to the page component as props
  }
}

export async function getStaticPaths() {
  const paths = products.map(p => ({ params: { prod: p.sku }}))
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}