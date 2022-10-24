import { useRouter } from "next/router"
import NotFound from "../../components/NotFound"
import { products } from "../../content/products"
import ImageIcon from '@mui/icons-material/Image'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Link from "next/link"
import Head from "next/head"

export default function Producto(){
  const url = useRouter()
  const {prod} = url.query
  const selectedProduct = products.find(e => e.sku === prod)
  return (
    <section className='product-page'>
      <Head>
        <title>{selectedProduct && selectedProduct.sku} | AIWA Electronics</title>
      </Head>
      {!selectedProduct ? <NotFound desc={`No se ha encontrado el producto "${prod}"`}/>
      :(<div className='top'>
          <div className='product-description'>
            <p>{prod}</p>
            <h1>{selectedProduct.shortDesc}</h1>
            <h4>{selectedProduct.longDesc}</h4>
          </div>
          <div className='product-photo'>
            <img src={`/products/${prod}/img/cover.webp`} alt={selectedProduct.sku}/>
          </div>
          <div className='product-buttons'>
            <button className='video-360'>
              <img className='logo-360' src='/360-logo.svg' alt='360-logo'/>
              <video width="145" height="145" autoPlay muted loop>
                <source src={`/products/${prod}/360-video/150.mp4`} type="video/mp4"/>
                Tu navegador no tiene soporte para ver videos.
              </video>
            </button>
            <div className='product-small-buttons'>
              <Link href='/buscar'><a><ImageIcon/>MÁS FOTOS</a></Link>
              <Link href='/buscar'><a><FormatListBulletedIcon/>DETALLES</a></Link>
              <Link href='/buscar'><a><ShoppingCartIcon />COMPRAR</a></Link>
            </div>
          </div>
      </div>)}
    </section>
  )
}