import {lvOneCat, lvTwoCat} from '../../content/categories'
import Link from 'next/link'
import Image from 'next/image'
import SocialContainer from '../SocialContainer'

export default function Footer(){
  const year = new Date().getFullYear();
  return (
    <>
      <footer>
        <div className='wrapper'>
          <div>
            <h3>NUESTROS PRODUCTOS</h3>
            <ul>
              {lvTwoCat.map((e,i) => (
                <li key={i}>
                  <Link href={e.route}>
                    <a>
                      {e.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>SOPORTE</h3>
            <ul>
              <li>
                <Link href='/'>
                  <a>
                    Términos y condiciones
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>
                    Activación Windows
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>
                    Preguntas frecuentes
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>SOBRE NOSOTROS</h3>
            <ul>
              <li>
                <Link href='/'>
                  <a>Quiénes somos</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
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
            <a href='#__next'>Volver arriba</a>
          </div>
        </div>
    </footer>
    <div className='copyright'>{`Aiwa Electronics ${year} | Todos los derechos reservados`}</div>
  </>
  )
}