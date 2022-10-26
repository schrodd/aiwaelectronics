import ImageIcon from '@mui/icons-material/Image'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react'
import Image from 'next/image'
import ThreeSixty from '../ThreeSixty'

export default function ProductContent({prod}) {
  const [threeSixty, setThreeSixty] = useState(false) // 0 = reg | 1 = 360º
  return (
    <div className='top-wrapper'>
      <div className='always-on-top'>
        {!threeSixty ? (
          <button className='video' onClick={() => setThreeSixty(true)}>
          <img src='/360-logo.svg' className='three-sixty' />
          <video width="145" height="145" muted autoPlay loop>
            <source src={`/products/${prod.sku}/360-video/150.mp4`} type="video/mp4" />
          </video>
        </button>
        ) : (
          <button class='to-right' onClick={() => setThreeSixty(false)}><ArrowBackIcon />VOLVER</button>
        )}
        <button class='to-right'><ImageIcon />MÁS FOTOS</button>
        <button class='to-right'><FormatListBulletedIcon />DETALLES</button>
        <button class='to-right'><ShoppingCartIcon />COMPRAR</button>
      </div>
      {!threeSixty ? (
      <div className='default' linea={prod.line}>
        <div className='text'>
          <p className='sku'>{prod.sku}</p>
          <h1>{prod.shortDesc}</h1>
          <p className='description'>{prod.longDesc}</p>
        </div>
        <Image src={`/products/${prod.sku}/img/cover.webp`} width='500' height='421'/>
      </div>
      ) : (
        <ThreeSixty sku={prod.sku} shortDesc={prod.shortDesc} top/>
      )}
    </div>
    
  )
}
