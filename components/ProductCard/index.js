import products from '../../content/products'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard({sku, text}){
  const product = products.find(e => e.sku == sku)
  return (
    <div className='product-card'>
      <Link href={product.link}>
        <a>
          <Image width='120px' height='120px' src={product.pngs[0]} alt={product.name} />
          <p>
            {product.name}<br/>
            <small>
              {product.shortDesc}
            </small>
          </p>
        </a>
      </Link>
    </div>
  )
}