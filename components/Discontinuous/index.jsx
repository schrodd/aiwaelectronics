import ProductCard from '../ProductCard'
import { products } from '../../content/products'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function Discontinuous(){
  const prodDiscont = products.filter(e => e.categories.some(cat => cat == 110))
  return (
    <section className="discontinuos">
      <div className="title">
        <h1>Discontinuos</h1>
        <h2>Productos que ya no se distribuyen comercialmente</h2>
      </div>
      <div className="wrapper">
        {prodDiscont.map((e,i) => <ProductCard sku={e.sku} showName showSku showDownload/>)}
      </div>
    </section>
  )
}