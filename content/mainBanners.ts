import { MainBanner } from './types'

const mainBanners: MainBanner[] = [
  {
    img: '/banners/2202b.jpg',
    mobileImg: '/banners/2202b-m.jpg',
    link: '/lineas/infinit',
    alt: 'Banner "de otro mundo"',
    text: {
      title: 'Sonido de otro mundo',
      subtitle: 'Explorá nuevas sensaciones con la mejor calidad de sonido.',
      cta: '',
      align: 'left', // center (default) | right | left - affects pc only
      valign: 'top', // center (default) | top | bottom - affects both pc and mobile
    } 
  },
  {
    img: '/banners/2016b.jpg',
    mobileImg: '/banners/2016b-m.jpg',
    link: '/lineas/infinit',
    alt: 'Parlantes P2016A y P2016B',
    text: {
      title: 'Potente y compacto',
      subtitle: 'Te ofrecemos el balance perfecto entre portabilidad y potencia.',
      cta: '',
      align: 'left', // center (default) | right | left - affects pc only
      valign: 'top', // center (default) | top | bottom - affects both pc and mobile
      dark: true
    }
  },
]

export default mainBanners