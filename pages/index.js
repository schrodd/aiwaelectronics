import Head from 'next/head'
import MainBanner from '../components/MainBanner'
import mainBanners from '../content/mainBanners'
import texts from '../content/texts'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import LinesContainer from '../components/LinesContainer'
import DiscoverBanner from '../components/DiscoverBanner'
import Constrictor from '../components/Constrictor'
import CategoryBanner from '../components/CategoryBanner'

export default function Home() {
  return (
    <div>
      <Head>
        <title>{texts.aiwaElec}</title>
        <meta name="title" content="Aiwa Electronics"></meta>
      </Head>
      <main className='index'>
        <Swiper
          tag='section'
          className='main-banner'
          modules={[Navigation, Pagination]}
          loop
          navigation
          pagination={{ clickable: true }}
        >
          {mainBanners.map((e,i) => (
            <SwiperSlide key={i} className='main-banner-slide'> 
              <MainBanner banner={e} isFirst={ i == 0 ? true : false } />
            </SwiperSlide>
          ))}
        </Swiper>
        <LinesContainer />
        <DiscoverBanner />
        <Constrictor />
        <CategoryBanner />
      </main>
    </div>
  )
}