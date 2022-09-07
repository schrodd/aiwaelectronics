import BannerInner from "../components/BannerInner"
import lineas from './lineas'

const flama = (<BannerInner
  logo={lineas.flama.logo}
  name={lineas.flama.name}
  cta='Ver más'
  justifyContent='flex-start'
  posLeft='10%'
  posTop='25%'
/>)

const ring = (<BannerInner
    logo={lineas.ring.logo}
    name={lineas.ring.name}
    cta='Ver más'
    justifyContent='flex-start'
    posLeft='10%'
    posTop='25%'
/>)

const mainBanners = [
  {
    image: '/banners/ata.jpg',
    mobile: '/banners/ata-m.jpg',
    link: '/lineas',
    title: '',
    sub: ''
  },
  {
    image: '/banners/flama.jpg',
    mobile: '/banners/flama-m.jpg',
    link: '/categorias',
    title: '',
    sub: '',
    inner: flama,
  },
  {
    image: '/banners/ring.jpg',
    mobile: '/banners/ring-m.jpg',
    link: '/categorias',
    title: '',
    sub: '',
    inner: ring,
  },
]

export default mainBanners