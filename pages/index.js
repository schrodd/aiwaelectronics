import Head from 'next/head'
import Banner from '../components/Banner'
import mainBanners from '../content/mainBanners'
import texts from '../content/texts'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Home() {
  return (
    <div>
      <Head>
        <title>{texts.aiwaElec}</title>
        <meta name="title" content="Aiwa Electronics"></meta>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main>
        {/* <section className='main-banner'>
          {mainBanners.map(e => (
            <Banner link={e.link} image={e.image} mobile={e.mobile} />
          ))}
        </section> */}
        <Swiper
          tag='section'
          className='main-banner'
          modules={[Navigation, Pagination]}
          loop
          navigation
          pagination={{ clickable: true }}
        >
          {mainBanners.map((e,i) => (
            <SwiperSlide>
              <Banner link={e.link} image={e.image} mobile={e.mobile} key={i}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </div>
  )
}