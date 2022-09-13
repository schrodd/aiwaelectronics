import products from '../../content/products'
import Image from 'next/image'
import Link from 'next/link'
import { Skeleton } from '@mui/material'
import { useState } from 'react'

export default function ProductCard({sku, showDesc}){
  const product = products.find(e => e.sku == sku)
  const [loaded, setLoaded] = useState(false)
  function toggle(){
    setLoaded(true)
  }

  return (
    <div className='product-card'>
      <Link href={product.link}>
        <a>
          {!loaded && (<Skeleton variant='rounded' width='120px' height='120px' />)}
          <Image width='120px' height='120px' src={product.pngs[0]} alt={product.name} onLoadingComplete={() => toggle()}/>
          <p>
            {product.name}<br/>
            {showDesc && (<small>{product.shortDesc}</small>)}
          </p>
        </a>
      </Link>
    </div>
  )
}