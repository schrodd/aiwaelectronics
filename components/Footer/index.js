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

  return <>
    <footer>
      <div className='wrapper'>
        <div className='footer-section'>
          <h3>NUESTROS PRODUCTOS</h3>
          <ul className='lv-one'>
            {lvOneCat.filter(e => !e.hidden).map((e,i) => (
              <li key={i}>
                <button onClick={() => toggleMenu(e.id) }>{e.name}</button>
                <ul className={`lv-two id${e.id}`}>
                  {lvTwoCat.filter(f => f.parent == e.id && !f.hidden).map((g,i) => (
                    <li key={i}>
                      <Link href={g.route}>{g.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li>
              <Link href='/discontinuos'>
                Discontinuos
              </Link>
            </li>
          </ul>
        </div>
        <div className='footer-section'>
          <h3>SOPORTE</h3>
          <ul>
            <li>
              <Link href='/soporte'>
                Soporte Técnico
              </Link>
            </li>
            <li>
              <Link href='/terminos-y-condiciones'>
                Términos y condiciones
              </Link>
            </li>
          </ul>
        </div>
        <div className='footer-section'>
          <h3>SOBRE NOSOTROS</h3>
          <ul>
            <li>
              <Link href='/sobre-nosotros'>
                Quiénes somos
              </Link>
            </li>
            <li>
              <Link href='/contacto'>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <div className='social'>
          <Link href='/'>
            <Image width='200' height='80' src='/aiwa-w.svg' alt='Aiwa logo'/>
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
</>;
}