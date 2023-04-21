import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image"
import lines from '../../content/lineas'
import Link from 'next/link';

export default function CategoryLineSwiper({products}) {
  const line = lines.find(e => e.name == products[0].line)
  // Filtro discontinuos
  products = products.filter(e => !e.categories.some(f => f == 110))
  return (
    <Swiper
    tag='section'
    className='line-swiper'
    modules={[Navigation, Pagination, Autoplay]}
    autoplay={{delay: 6000}}
    loop
    slidesPerView={2}
    navigation
    pagination={{ clickable: true }}
    onSwiper={(swiper) => {
      if (window.innerWidth < 850){
        console.log(swiper)
        swiper.params.slidesPerView = 1
        swiper.params.centeredSlides = true
      }
    }}
    >
      {products.map((e,i) => (
        <SwiperSlide className='main-banner-slide' key={i}> 
          <div className="product">
            <div className="left">
              <div className="line-logo-wrapper">
                <Image src={line.logo} alt={line.name} fill/>
              </div>
              <p className="sku">{e.sku}</p>
              <p className="title">{e.shortDesc}</p>
              <p className="desc">{e.longDesc}</p>
              <Link href={e.link ? e.link : '#'}>
                Ver más
              </Link>
            </div>
            <div className="right">
              <Image hor={e.sku == 'AW-T2022' ? 'true' : 'false'} src={e.imgs[0]} alt={e.sku} fill/>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <Image className='line-background' src={line.background} alt='line background' fill/>
    </Swiper>
  )
}