import { Stars, Mic, FlashOn, VolumeUp, VolumeDown, Tune, VideoLabel, TipsAndUpdates, SettingsInputComponent, Usb, BatterySaver, BatteryChargingFull, Widgets, AutoAwesome } from '@mui/icons-material'
const features = [ // Características de productos
  { 
    id: 1, name: 'Micrófono', icon: Mic, title: 'Micrófono Incluido',
    desc:'Con el micrófono incluido podés tener sesiones de Karaoke con tus amigos y disfrutar al máximo.',
    /* //// Para cuando se necesite mostrar una característica entre un texto largo ////
    customDesc(input) {
      return 'coso ' + input + ' cosa'
    } */
  },
  { 
    id: 2, name: 'Potencia', icon: FlashOn, title: 'Abrumadora Potencia',
    desc:'',
    customDesc(input) {
      return `Con una potencia de ${input}, será difícil que puedas subir el volumen al 100%.`
    }
  },
  { 
    id: 3, name: 'Woofers', icon: VolumeUp, title: 'Woofers',
    desc:'',
  },
  { 
    id: 4, name: 'Tweeters', icon: VolumeDown, title: 'Tweeters',
    desc:'',
  },
  { 
    id: 5, name: 'Reguladores', icon: Tune, title: 'Controlá todo',
    desc:'Con sus controles reguladores, configurá el sonido para que se adapte al tipo de música que escuchás.',
  },
  { 
    id: 6, name: 'Display', icon: VideoLabel, title: 'Display LED',
    desc:'Posee pantalla LED que muestra información y permite administrar las funciones que ofrece.',
  },
  { 
    id: 7, name: 'Efectos de Luces', icon: AutoAwesome, title: 'Efectos de Luces',
    desc:'Luces cambiantes y colores que resplandecen por todo el lugar.',
  },
  { 
    id: 8, name: 'Entradas', icon: SettingsInputComponent, title: 'Puertos de Entrada',
    desc:'Reproducir tu contenido nunca fué tan fácil con tantas opciones disponibles.',
    customDesc(input) {
      return `Reproducir tu contenido nunca fué tan fácil con tantas opciones disponibles. Posee puertos para ${input}.`
    }
  },
  { 
    id: 9, name: 'Conectividad', icon: Usb, title: '¡Conectate!',
    desc:'Tu música siempre con vos. ¿Necesitás traer música de otro dispositivo? ¡No hay problema! Tenés varias opciones para acceder a tu música.',
    customDesc(input) {
      return `Tu música siempre con vos. ¿Necesitás traer música de otro dispositivo? ¡No hay problema! Conectate a través de ${input}`
    }
  },
  { 
    id: 10, name: 'Batería', icon: BatteryChargingFull, title: 'Con Batería',
    desc:''
  },
  { 
    id: 11, name: 'Duración de Batería', icon: BatterySaver, title: 'Increíble Autonomía',
    desc:'',
    customDesc(input) {
      return `Tiene la capacidad de estar encendido y en uso hasta por ${input} y además podés usarlo conectado. ¡Que la fiesta no pare!`
    }
  },
  { 
    id: 12, name: 'Luces', icon: TipsAndUpdates, title: 'Iluminá tu ambiente',
    desc:'Con sus luces y efectos puede animar cualquier lugar.'
  },
  { 
    id: 13, name: 'Funciones', icon: Widgets, title: 'Variedad de Funciones',
    desc:'Posee una variedad de funciones que te permitirán explorar tu música de diferentes maneras.'
  },
  { 
    id: 14, name: 'Caja (cuerpo)', icon: Stars, title: 'Calidad sin igual',
    desc:''
  },
  { 
    id: 15, name: 'Otras Características', icon: Stars, title: 'Otras Características',
    desc:''
  },
  { 
    id: 16, name: 'Medidas del Producto', icon: Stars, title: 'Medidas del Producto',
    desc:''
  },
  { 
    id: 17, name: 'Medidas de la Caja', icon: Stars, title: 'Medidas de la Caja',
    desc:''
  },
  { 
    id: 18, name: 'Peso', icon: Stars, title: 'Peso',
    desc:''
  },
  { 
    id: 19, name: 'EAN', icon: Stars, title: 'EAN',
    desc:''
  },
  { 
    id: 20, name: 'Power Bank', icon: BatteryChargingFull, title: 'Cargá tus dispositivos',
    desc:'Cargá tu celular (o cualquiera de tus dispositivos) mientras escuchás música con la función Power Bank.'
  }
]

export default features