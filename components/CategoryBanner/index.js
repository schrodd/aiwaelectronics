import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { lvTwoCat } from '../../content/categories'
import Link from 'next/link'
import useWindowSize from '../../hooks/useWindowSize'

export default function CategoryBanner(){
  const size = useWindowSize();
  return (
    <section className='category-banner'>
      <h2>BUSCÁ POR CATEGORÍAS</h2>
      <Swiper
        className='category-swiper'
        modules={[Navigation]}
        slidesPerView={size.width >= 850 ? '4' : '1'}
        initialSlide={size.width >= 850 ? '4' : '1'}
        spaceBetween={0}
        loop
        navigation
      >
        {lvTwoCat.map((e,i) => (
          <SwiperSlide key={i} className='category-banner-slide'>
            <Link href={e.route}>
              <a>
                <Image width='387px' height='237px' src={e.cover} alt={e.name}/>
                <h3>{e.name}</h3>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}