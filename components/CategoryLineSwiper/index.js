import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image"

export default function CategoryLineSwiper({products}) {
  return (
    <Swiper
    tag='section'
    className='line-swiper'
    modules={[Navigation, Pagination]}
    loop
    slidesPerView={2}
    navigation
    pagination={{ clickable: true }}
    >
      {products.map((e,i) => (
        <SwiperSlide className='main-banner-slide' key={i}> 
          <div className="product">
            <div className="left">
              <p className="sku">{e.sku}</p>
              <p className="title">{e.shortDesc}</p>
              <p className="desc">{e.longDesc}</p>
            </div>
            <div className="right">
              <Image src={e.imgs[0]} alt={e.sku} fill/>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}