import { Mic, FlashOn, VolumeUp, VolumeDown } from '@mui/icons-material'

const features = [ // Características de productos
  { 
    id: 1, name: 'Micrófono', icon: Mic, title: 'Micrófono Incluido',
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...",
    /* //// Para cuando se necesite mostrar una característica entre un texto largo ////
    customDesc(input) {
      return 'coso ' + input + ' cosa'
    } */
  },
  { 
    id: 2, name: 'Potencia', icon: FlashOn, title: 'Abrumadora Potencia',
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...",
  },
  { 
    id: 3, name: 'Woofers', icon: VolumeUp, title: 'Woofers Potentes',
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...",
  },
  { 
    id: 4, name: 'Tweeters', icon: VolumeDown, title: 'Tweeters',
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...",
  },
]

export default features