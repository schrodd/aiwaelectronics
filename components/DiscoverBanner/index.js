import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import discoverOptions from '../../content/discoverOptions'
import { useState } from 'react'
import DiscoverButton from './DiscoverButton'
import ProductCard from '../ProductCard'

export default function DiscoverBanner(){
  const [option, setOption] = useState(-1)
  function swipe(dir){
    let newOption = 0;
    if (dir === 'l'){
      newOption = option - 1;
    } else if (dir === 'r'){
      newOption = option + 1;
    }
    if (newOption >= discoverOptions.length){
      newOption = 0;
    }
    if (newOption < 0){
      newOption = discoverOptions.length - 1;
    }
    setOption(newOption)
  }

  return (
    <section className='discover-banner'>
      <Swiper className='wrapper-swiper' allowTouchMove={false} autoHeight>
        <SwiperSlide className='first'>
          <h3>Tenemos un AIWA especialmente para vos</h3>
          <h2>¿Qué estabas buscando?</h2>
          <Swiper
              className='discover-swiper'
              modules={[Navigation]}
              loop
              navigation
              style={{
                "--swiper-navigation-color": "#333",
                "--swiper-navigation-size": "20px",
              }}
              onSlideNextTransitionStart={
                () => swipe('r')
              }
              onSlidePrevTransitionStart={
                () => swipe('l')
              }
          >
            {discoverOptions.map((e,i) => (
              <SwiperSlide key={i} className={`option-${i}`}>
                <p>{e.title}</p>
              </SwiperSlide>
            ))}
          </Swiper>
          <DiscoverButton d='r'/>
        </SwiperSlide>
        <SwiperSlide className='second'>
          <div className='text'>
            {option >= 0 && <h3>{discoverOptions[option].resultText}</h3>}
            <DiscoverButton d='l' />
          </div>
          <div className='results'>
            {option >= 0 && discoverOptions[option].products.map((e,i) => (
                <ProductCard sku={e} showDesc={true} showName={true} showSku={true} key={i}/>
              ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}