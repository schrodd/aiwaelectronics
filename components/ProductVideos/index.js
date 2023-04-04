import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

export default function ProductVideos({videos}) {
  return (
    <Swiper
        className='product-videos-swiper'
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={0}
        loop
        pagination
        navigation={videos.length > 1}
      >
        {videos.map((e,i) => (
          <SwiperSlide key={i} className='product-videos-slide'>
            <iframe src={`https://www.youtube.com/embed/${e.youtubeId}`} title={e.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </SwiperSlide>
        ))}
      </Swiper>
  )
}