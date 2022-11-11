import { useRouter } from "next/router"
import { products } from "../../content/products"
import Loading from "../../components/Loading"
import ProductContent from "../../components/ProductContent"

export default function Producto(){
  const url = useRouter()
  const { prod } = url.query
  const selectedProduct = products.find(e => e.sku === prod)
  console.log('prod is loading')
  return (
    <section className='product-page'>
      {!selectedProduct ? <Loading/> : <ProductContent prod={selectedProduct}/>}
    </section>
  )
}