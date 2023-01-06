import { products } from '../../content/products'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard({sku, showName, showSku, showDesc, showButton, showGen}){
  const product = products.find(e => e.sku == sku)
  return (
    <div className='product-card'>
      <Link href={product.link}>

        <div className='image'>
          <Image width='150' height='150' layout='fixed' src={product.imgs[0]} alt={product.name} placeholder='blur' blurDataURL='/ph.png' priority/>
        </div>
        <div className='texts'>
          {showSku && <p className='p-sku'>{product.sku}</p>}
          {showName && <p className='p-name'>{product.name}</p>}
          {showDesc && <p className='p-desc'><small>{product.shortDesc}</small></p>}
          {showGen && <p className='p-desc'><small>{product.gen}</small></p>}
        </div>
        {showButton && <button><Link href={product.link}>Ver más</Link></button>}

      </Link>
    </div>
  );
}