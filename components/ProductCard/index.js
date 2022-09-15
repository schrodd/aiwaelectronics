import products from '../../content/products'
import Image from 'next/image'
import Link from 'next/link'
import { Skeleton } from '@mui/material'
import { useState } from 'react'

export default function ProductCard({sku, showName, showSku, showDesc, showButton}){
  const product = products.find(e => e.sku == sku)
  const [loaded, setLoaded] = useState(false)
  function toggle(){
    setLoaded(true)
  }

  return (
    <div className='product-card'>
      <Link href={product.link}>
        <a>
          <div className='image'>
            {!loaded && <Skeleton variant='rounded' width='150px' height='150px' />}
            <Image width='150px' height='150px' layout='fixed' src={product.pngs[0]} alt={product.name} onLoadingComplete={() => toggle()}/>
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