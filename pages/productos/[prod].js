import { useRouter } from "next/router"
import { products } from "../../content/products"
import Loading from "../../components/Loading"
import ProductContent from "../../components/ProductContent"
import Head from "next/head"
import texts from "../../content/texts"

export default function Producto(){
  const url = useRouter()
  const { prod } = url.query
  const selectedProduct = products.find(e => e.sku === prod)
  return (
    <>
      {selectedProduct && (
        <Head>
          <title>{selectedProduct.sku + texts.spacer + texts.aiwaElec}</title>
        </Head>
      )}
      <section className='product-page'>
        {!selectedProduct ? <Loading/> : <ProductContent prod={selectedProduct}/>}
      </section>
    </>
  )
}