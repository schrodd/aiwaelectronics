import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { useState } from 'react'
import { AspectRatio } from '@mui/icons-material'

export default function ProductMorePhotos({sku, shortDesc, arr, fullscreen}){ 
  const [swiper, setSwiper] = useState(null)
  const [isFs, setFs] = fullscreen
  function toggleFs(){
    setFs((prev) => !prev)
  }
  return (
    <div className='product-more-photos'>
      <div className='text'>
        <p className='sku'>{sku}</p>
        <h1>{shortDesc}</h1>
      </div>
      <Swiper
          tag='div'
          className='more-photos'
          active={isFs ? "true" : "false"}
          modules={[Navigation, Pagination]}
          loop
          navigation
          pagination={{ clickable: true }}
          onInit={(e) => setSwiper(e)}
      >
        <button className={`mui-button fs-btn ${isFs && 'active'}`} onClick={toggleFs}>
          <AspectRatio fontSize='large'/>
        </button>
        {arr.map((e,i) => (
          <SwiperSlide key={i} className='more-photos-slide'>
            <Image src={e} layout='fill' alt={`${sku} photos`}/>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='thumbnails'>
        {arr.map((e,i) => (
          <button key={i} onClick={() => swiper.slideTo(i+1)}>
            <Image src={e} width='80' height='80' alt='thumbnail'/>
          </button>
        ))}
      </div>
    </div>
  )
}