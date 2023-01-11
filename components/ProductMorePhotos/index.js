import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/legacy/image'
import { useState } from 'react'
import { AspectRatio } from '@mui/icons-material'

export default function ProductMorePhotos({sku, shortDesc, arr, fs, setFs}){ 
  const [swiper, setSwiper] = useState(null)
  function toggleFs(){
    setFs((prev) => !prev)
  }
  return (
    <div className='product-more-photos'>
      <div className='text'>
        
        {!fs && <><p className='sku'>{sku}</p><h1>{shortDesc}</h1></>}
      </div>
      <Swiper
          tag='div'
          className='more-photos'
          active={fs ? "true" : "false"}
          modules={[Navigation, Pagination]}
          loop
          navigation
          pagination={{ clickable: true }}
          onInit={(e) => setSwiper(e)}
      >
        <button className={`mui-button fs-btn ${fs && 'active'}`} onClick={toggleFs}>
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
            <Image src={e} width='105' height='105' alt='thumbnail'/>
          </button>
        ))}
      </div>
    </div>
  )
}