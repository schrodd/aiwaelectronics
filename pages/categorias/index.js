import { lvOneCat, lvTwoCat } from '../../content/categories'
import AccordionItem from '../../components/AccordionItem'
import Footer from '../../components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import DiscoverBanner from '../../components/DiscoverBanner'

export default function categorias(){
  return (
    <>
      <main id='categorias'>
        <div className='cat-wrapper'>
          <h1>CATEGORÍAS</h1>
          {lvOneCat.map((e,i) => (
          <AccordionItem classes='lv-one' name={e.name} key={i}>
            {lvTwoCat.filter((f) => f.parent == e.id)
            .map((e,i) => (
              <Link className='lv-two' href={e.route} key={i}>
                <a>
                  {e.name}
                </a>
              </Link>
            ))}
          </AccordionItem>
          ))}
        </div>
        <div className='cat-img'>
          <Image src='/images/pages/categorias/cat-img.jpg' objectFit='cover' layout='fill' alt='categorías'/>
        </div>
      </main>
      <Footer />
    </>
  )
}