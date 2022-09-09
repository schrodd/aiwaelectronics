import { useSwiper } from 'swiper/react'

export default function DiscoverButton({d}){
  const swiper = useSwiper();
  return (
    <>
      {d === 'r'
        ? <button onClick={() => swiper.slideNext()}>¡Descubrilos!</button>
        : <button onClick={() => swiper.slidePrev()}>Volver</button>}
    </>
  )
}