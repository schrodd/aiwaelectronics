import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image"
import Link from 'next/link'
import { products } from '../../content/products';

export default function CategorySwiper({skus}) {
  return (
    <>
      {skus.map((group,i) => (
        <Swiper
        tag='section'
        className={`cat-product-swiper light ${i % 2 != 0 && 'to-right'}`}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{delay: 6000}}
        navigation
        pagination={{ clickable: true }}
        key={i}
        >
          {group.map((sku,i) => {
            const prod = products.find(prod => prod.sku == sku)
            return (
              <SwiperSlide className={`main-banner-slide`} key={i}> 
                <div className="product">
                  <div className="left">
                    <div className="wrapper">
                      <p className="title">{prod.shortDesc}</p>
                      <p className="sku">{prod.sku}</p>
                      <p className="desc">{prod.longDesc}</p>
                      <Link href={prod.link ? prod.link : '#'}>
                        VER MÁS
                      </Link>
                    </div>
                    <Image src={`/components/CategorySwiper/patron-${prod.altBackground ? 'b' : 'n'}.png`} alt='background' fill/>
                  </div>
                  <div className={`right${prod.altBackground ? ' dark' : ''}`}>
                    <Image src={prod.imgs[0]} alt={prod.sku} fill/>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      ))}
    </>
  )
}