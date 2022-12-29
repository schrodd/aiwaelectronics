import { lvOneCat, lvTwoCat } from '../../content/categories'
import Link from 'next/link'
import Image from 'next/image'
import SocialContainer from '../SocialContainer'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState, useEffect } from 'react'

export default function Footer(){
  const year = new Date().getFullYear()
  const [showButton, setShowButton] = useState(false)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  function toggleMenu(e){
    document.querySelector(`.lv-two.id${e}`).classList.toggle('active')
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  return (
    <>
      <footer>
        <div className='wrapper'>
          <div className='footer-section'>
            <h3>NUESTROS PRODUCTOS</h3>
            <ul className='lv-one'>
              {lvOneCat.map((e,i) => (
                <li key={i}>
                  <button onClick={() => toggleMenu(e.id) }>{e.name}</button>
                  <ul className={`lv-two id${e.id}`}>
                    {lvTwoCat.filter(f => f.parent == e.id).map((g,i) => (
                      <li key={i}>
                        <Link href={g.route}><a>{g.name}</a></Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className='footer-section'>
            <h3>SOPORTE</h3>
            <ul>
              <li>
                <Link href='/terminos-y-condiciones'>
                  <a>Términos y condiciones</a>
                </Link>
              </li>
              <li>
                <Link href='/activacion-windows'>
                  <a>Activación Windows</a>
                </Link>
              </li>
              <li>
                <Link href='/preguntas-frecuentes'>
                  <a>Preguntas frecuentes</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='footer-section'>
            <h3>SOBRE NOSOTROS</h3>
            <ul>
              <li>
                <Link href='/quienes-somos'>
                  <a>Quiénes somos</a>
                </Link>
              </li>
              <li>
                <Link href='/contacto'>
                  <a>Contacto</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='social'>
            <Link href='/'>
              <a><Image width='200px' height='80px' src='/aiwa-w.svg' alt='Aiwa logo'/></a>
            </Link>
            <SocialContainer />
            {showButton && (
              <button onClick={() => scrollToTop()}>
                <KeyboardArrowUpIcon />
                Volver arriba
              </button>
            )}
          </div>
        </div>
    </footer>
    <div className='copyright'>{`Aiwa Electronics ${year} | Todos los derechos reservados`}</div>
  </>
  )
}