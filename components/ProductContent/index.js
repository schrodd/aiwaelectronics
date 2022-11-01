import ImageIcon from '@mui/icons-material/Image'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react'
import Image from 'next/image'
import ThreeSixty from '../ThreeSixty'
import ProductMorePhotos from '../ProductMorePhotos'
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import ProductBanners from '../ProductBanners';

export default function ProductContent({prod}) {
  const [mode, setMode] = useState(0) // 0 = reg | 1 = 360º | 2 = more photos
  return (
    <>
      <div className='top-wrapper'>
        <div className='always-on-top'>
          {(mode == 0 || mode == 2) && (
          <>
            <button className='video pc-only' onClick={() => setMode(1)}>
              <img src='/360-logo.svg' className='three-sixty' />
              <video width="145" height="145" muted autoPlay loop>
                <source src={`/products/${prod.sku}/360-video/150.mp4`} type="video/mp4" />
              </video>
            </button>
            <button className='to-right mobile-only' onClick={() => setMode(1)}><ThreeDRotationIcon /></button>
          </>
          )}
          {(mode == 1 || mode == 2) && (
            <button className='to-right' onClick={() => setMode(0)}><ArrowBackIcon />
              <span className='pc-only'>VOLVER</span>
            </button>
          )}
          {mode != 2 && (
            <button className='to-right' onClick={() => setMode(2)}><ImageIcon />
              <span className='pc-only'>MÁS FOTOS</span>
            </button>
          )}
          <a href='#test-id'>
            <button className='to-right'><FormatListBulletedIcon />
              <span className='pc-only'>DETALLES</span>
            </button>
          </a>
          <a href={prod.buyLink} target='_blank'>
            <button className='to-right'><ShoppingCartIcon />
              <span className='pc-only'>COMPRAR</span>
            </button>
          </a>
        </div>
        {mode == 0 && (
        <div className='default' linea={prod.line}>
          <div className='text-wrapper'>
            <div className='text'>
              <p className='sku'>{prod.sku}</p>
              <h1>{prod.shortDesc}</h1>
              <p className='description'>{prod.longDesc}</p>
            </div>
          </div>
          <Image className='cover' src={`/products/${prod.sku}/img/cover.webp`} width='550' height='463'/>
        </div>
        )}
        {mode == 1 && (
          <ThreeSixty sku={prod.sku} shortDesc={prod.shortDesc} top/>
        )}
        {mode == 2 && <ProductMorePhotos sku={prod.sku} shortDesc={prod.shortDesc} arr={prod.imgs}/>}
      </div>
      <ProductBanners banners={prod.banners}/>
    </>
  )
}
