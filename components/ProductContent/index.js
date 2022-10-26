import ImageIcon from '@mui/icons-material/Image'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react'
import Image from 'next/image'
import ThreeSixty from '../ThreeSixty'
import ProductMorePhotos from '../ProductMorePhotos'

export default function ProductContent({prod}) {
  const [mode, setMode] = useState(0) // 0 = reg | 1 = 360º | 2 = more photos
  return (
    <div className='top-wrapper'>
      <div className='always-on-top'>
        {(mode == 0 || mode == 2) && (
        <button className='video' onClick={() => setMode(1)}>
          <img src='/360-logo.svg' className='three-sixty' />
          <video width="145" height="145" muted autoPlay loop>
            <source src={`/products/${prod.sku}/360-video/150.mp4`} type="video/mp4" />
          </video>
        </button>
        )}
        {(mode == 1 || mode == 2) && (
          <button className='to-right' onClick={() => setMode(0)}><ArrowBackIcon />VOLVER</button>
        )}
        <button className='to-right' onClick={() => setMode(2)}><ImageIcon />MÁS FOTOS</button>
        <button className='to-right'><FormatListBulletedIcon />DETALLES</button>
        <button className='to-right'><ShoppingCartIcon />COMPRAR</button>
      </div>
      {mode == 0 && (
      <div className='default' linea={prod.line}>
        <div className='text'>
          <p className='sku'>{prod.sku}</p>
          <h1>{prod.shortDesc}</h1>
          <p className='description'>{prod.longDesc}</p>
        </div>
        <Image className='cover' src={`/products/${prod.sku}/img/cover.webp`} width='500' height='421'/>
      </div>
      )}
      {mode == 1 && (
        <ThreeSixty sku={prod.sku} shortDesc={prod.shortDesc} top/>
      )}
      {mode == 2 && <ProductMorePhotos sku={prod.sku} shortDesc={prod.shortDesc} arr={prod.imgs}/>}
    </div>
    
  )
}
