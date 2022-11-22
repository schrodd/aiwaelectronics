import ImageIcon from '@mui/icons-material/Image'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react'
import Image from 'next/image'
import ThreeSixty from '../ThreeSixty'
import ProductMorePhotos from '../ProductMorePhotos'
import ProductVideos from '../ProductVideos';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import VideocamIcon from '@mui/icons-material/Videocam';
import ProductBanners from '../ProductBanners';
import ProductFeatures from '../ProductFeatures';
import ProductSpecsTable from '../ProductSpecsTable'
import YoutubeBanner from '../YoutubeBanner';
import lineas from '../../content/lineas'
import { PrivacyTipOutlined } from '@mui/icons-material';

export default function ProductContent({prod}) {
  const [mode, setMode] = useState(0) // 0 = reg | 1 = 360º | 2 = view more photos
  const prodLine = lineas.find(e => e.name == prod.line)
  return (
    <>
      <section className='top-wrapper'>
        <div className='always-on-top'>
          {(mode == 0 || mode == 2) && (
          <>
            <button className='video pc-only' onClick={() => setMode(1)}>
              <img src='/360-logo.svg' className='three-sixty' alt='360-logo'/>
              <video width="145" height="145" muted autoPlay loop>
                <source src={`/products/${prod.sku}/360.mp4`} type="video/mp4" />
              </video>
            </button>
            <button className='to-right mobile-only' onClick={() => setMode(1)}><ThreeDRotationIcon /></button>
          </>
          )}
          {(mode == 1 || mode == 2 || mode == 3) && (
            <button className='to-right' onClick={() => setMode(0)}><ArrowBackIcon />
              <span className='pc-only'>VOLVER</span>
            </button>
          )}
          {mode != 2 && (
            <button className='to-right' onClick={() => setMode(2)}><ImageIcon />
              <span className='pc-only'>FOTOS</span>
            </button>
          )}
          {console.log(prod.videos)}
          {mode != 3 && prod.videos.length > 0 && (
            <button className='to-right' onClick={() => setMode(3)}><VideocamIcon />
              <span className='pc-only'>VIDEOS</span>
            </button>
          )}
          <a href='#prod-specs'>
            <button className='to-right'><FormatListBulletedIcon />
              <span className='pc-only'>DETALLES</span>
            </button>
          </a>
          <a href={prod.buyLink} target='_blank' rel="noreferrer">
            <button className='to-right'><ShoppingCartIcon />
              <span className='pc-only'>COMPRAR</span>
            </button>
          </a>
        </div>
        {mode == 0 && (
        <div className='default' linea={prod.line}>
          <div className='text-wrapper'>
            <div className='text'>
              {prodLine && <Image src={prodLine.logo} alt={prodLine.displayName} width='150' height='55'/>}
              <p className='sku'>{prod.sku}</p>
              <h1>{prod.shortDesc}</h1>
              <p className='description'>{prod.longDesc}</p>
            </div>
          </div>
          <Image className='cover' src={`/products/${prod.sku}/cover.webp`} width='550' height='463' alt='product-cover'/>
        </div>
        )}
        {mode == 1 && (
          <ThreeSixty sku={prod.sku} shortDesc={prod.shortDesc} top={prod.top}/>
        )}
        {mode == 2 && <ProductMorePhotos sku={prod.sku} shortDesc={prod.shortDesc} arr={prod.imgs}/>}
        {mode == 3 && <ProductVideos videos={prod.videos} />}
      </section>
      <ProductBanners banners={prod.banners}/>
      <ProductFeatures prod={prod}/>
      <ProductSpecsTable prod={prod}/>
      <YoutubeBanner/>
    </>
  )
}
