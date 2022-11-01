import { Mic, FlashOn, VolumeUp, VolumeDown, Tune, VideoLabel, TipsAndUpdates, SettingsInputComponent, Usb } from '@mui/icons-material'
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
  { 
    id: 5, name: 'Reguladores', icon: Tune, title: 'Controlá todo',
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...",
  },
  { 
    id: 6, name: 'Display', icon: VideoLabel, title: 'Display LED',
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...",
  },
  { 
    id: 7, name: 'Efectos de Luces', icon: TipsAndUpdates, title: 'Efectos de Luces',
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...",
  },
  { 
    id: 8, name: 'Entradas', icon: SettingsInputComponent, title: 'Puertos de Entrada',
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...",
  },
  { 
    id: 9, name: 'Conectividad', icon: Usb, title: '¡Conectate!',
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...",
    customDesc(input) {
      return `Tu música siempre con vos. ¿Necesitás traer música de otro dispositivo? ¡No hay problema! Conectate a través de ${input}`
    }
  },
]

export default features