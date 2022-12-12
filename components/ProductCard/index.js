import { products } from '../../content/products'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard({sku, showName, showSku, showDesc, showButton}){
  const product = products.find(e => e.sku == sku)
  return (
    <div className='product-card'>
      <Link href={product.link}>
        <a>
          <div className='image'>
            <Image width='150px' height='150px' layout='fixed' src={product.imgs[0]} alt={product.name} onLoadingComplete={() => toggle()} placeholder='blur' blurDataURL='/ph.png'/>
          </div>
          <div className='texts'>
            {showSku && <p className='p-sku'>{product.sku}</p>}
            {showName && <p className='p-name'>{product.name}</p>}
            {showDesc && <p className='p-desc'><small>{product.shortDesc}</small></p>}
          </div>
          {showButton && <button><Link href={product.link}><a>Ver más</a></Link></button>}
        </a>
      </Link>
    </div>
  )
}