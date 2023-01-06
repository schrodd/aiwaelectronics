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
        {lvTwoCat.filter(e => e.hidden == false).map((e,i) => (
          <SwiperSlide key={i} className='category-banner-slide'>
            <Link href={e.route}>
              <div className="image-wrapper">
                <Image fill src={e.cover} alt={e.name}/>  
              </div>
              <h3>{e.name}</h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}