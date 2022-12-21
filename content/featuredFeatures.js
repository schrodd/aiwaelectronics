
// Orden alfabético
import battery from '../public/svg/battery.svg'
import batterybars from '../public/svg/batterybars.svg'
import bluetooth from '../public/svg/bluetooth.svg'
import carryon from '../public/svg/carryon.svg'
import fx from '../public/svg/fx.svg'
import guitar from '../public/svg/guitar.svg'
import guitmic from '../public/svg/guitmic.svg'
import handle from '../public/svg/handle.svg'
import horizontal from '../public/svg/horizontal.svg'
import lights from '../public/svg/lights.svg'
import megabass from '../public/svg/megabass.svg'
import mic from '../public/svg/mic.svg'
import micreg from '../public/svg/micreg.svg'
import phone from '../public/svg/phone.svg'
import plug from '../public/svg/plug.svg'
import potencia from '../public/svg/potencia.svg'
import powerbank from '../public/svg/powerbank.svg'
import radio from '../public/svg/radio.svg'
import rec from '../public/svg/rec.svg'
import reg from '../public/svg/reg.svg'
import remote from '../public/svg/remote.svg'
import sd from '../public/svg/sd.svg'
import speaker from '../public/svg/speaker.svg'
import speaker2 from '../public/svg/speaker2.svg'
import tripod from '../public/svg/tripod.svg'
import tws from '../public/svg/tws.svg'
import usb from '../public/svg/usb.svg'
import voice from '../public/svg/voice.svg'
import wheel from '../public/svg/wheel.svg'
import wirelessmic from '../public/svg/wirelessmic.svg'
import wood from '../public/svg/wood.svg'

/* //// Para cuando se necesite mostrar una característica entre un texto largo ////
customDesc(input) {
  return 'coso ' + input + ' cosa'
} */

const featuredFeatures = [ // Características destacadas de productos ORDENADAS
  {
    id: 3, name: 'Woofers', icon: speaker,
    customDesc(input) {
      return `El poder está en los Woofers. Posee ${input}. ¡Cuidado con las vibraciones!`
    }
  },
  {
    id: 35, name: 'Tweeter', icon: speaker2,
    customDesc(input) {
      return `Realza los tonos agudos. Posee ${input}.`
    }
  },
  { 
    id: 2, name: 'Potencia', icon: potencia, 
    customDesc(input) {
      return `Con una potencia de ${input}, será difícil que puedas subir el volumen al 100%.`
    }
  },
  { id: 12, name: 'Bluetooth', icon: bluetooth,
    desc: 'Conectá cualquier celular o dispositivo a tu parlante a través de Bluetooth'
  },
  { id: 11, name: 'TWS', icon: tws,
    desc: 'Conectá dos parlantes y experimentá la combinación de potencia y sonido estéreo real'
  },
  { id: 13, name: 'Power Bank', icon: powerbank,
    desc: 'Conectá tu dispositivo a tu parlante AIWA y seguí reproduciendo sin límites'
  },
  { id: 31, name: 'Mega Bass', icon: megabass,
    desc: '¡Incrementá los graves con la función MEGA BASS!'
  },
  { id: 22, name: 'Regulador de Graves y Agudos', icon: reg,
    desc: 'Regulá a tu gusto los niveles de Graves y Agudos de tu música'
  },
  { id: 28, name: 'Regulador de Eco y Volumen de Micrófono', icon: micreg,
    desc: 'Controlá a gusto los niveles de Eco y Volumen del micrófono'
  },
  { id: 23, name: 'Regulador de Eco', icon: micreg,
    desc: 'Controlá a gusto los niveles de Eco del micrófono'
  },
  { 
    id: 6, name: 'Efectos de Luces', icon: fx,
    desc:'Luces cambiantes y colores que resplandecen por todo el lugar.',
  },
  { id: 20, name: 'Luces', icon: lights,
    desc: 'Con sus luces LED anima cualquier ambiente fácilmente'
  },
  { 
    id: 5, name: 'Display', icon: battery,
    desc:'Posee pantalla LED que muestra información y permite administrar las funciones que ofrece.',
  },
  { 
    id: 4, name: 'Efectos de Voz', icon: voice,
    desc:'¡Podrás ser parte de un karaoke único con los efectos de voz preprogramados!',
  },
  { 
    id: 1, name: 'Micrófono', icon: mic,
    desc:'Con el micrófono incluido podés tener sesiones de Karaoke con tus amigos y disfrutar al máximo.',
  },
  { id: 14, name: 'Micrófono Inalámbrico', icon: wirelessmic,
    desc: 'Con el micrófono inalámbrico incluido podrás tener increíbles sesiones de Karaoke con tus amigos'
  },
  {
    id: 10, name: 'Trípode', icon: tripod,
    desc: 'Incluye sólido trípode, realizá presentaciones profesionales ¡y llevá tus sonido más lejos!'
  },
  { id: 24, name: 'Control Remoto', icon: remote,
    desc: 'La distancia no es problema, controlá cómodamente desde la distancia'
  },
  { id: 15, name: 'Entrada para Guitarra', icon: guitar,
    desc: '¡Conectá una guitarra y comenzá a rockear!'
  },
  { id: 16, name: 'Entrada para Micrófono', icon: mic,
    desc: 'Conectá un micrófono y activá el karaoke en tu casa'
  },
  { id: 21, name: 'Entrada para Micrófono y Guitarra', icon: guitmic,
    desc: '¡Tocá donde quieras! Posee entradas para micrófono y guitarra. No necesitás nada más para tu evento.'
  },
  { id: 27, name: '2 Entradas para Micrófono', icon: mic,
    desc: 'Conectá hasta dos micrófonos y activá el karaoke en tu casa'
  },
  { id: 33, name: 'Conexión USB', icon: usb,
    desc: 'Posee puerto USB para que conectes tu pendrive o dispositivo'
  },
  { id: 26, name: 'Memoria SD', icon: sd,
    desc: '¡Expandí tus posibilidades! usando una tarjeta Micro SD podés reproducir lo que quieras'
  },
  { id: 17, name: 'Entrada Auxiliar', icon: plug,
    desc: 'Conectá tu celular o dispositivo a través de la entrada auxiliar 3.5mm'
  },
  { id: 25, name: 'Radio FM', icon: radio,
    desc: 'Sintonizá cualquier emisora, disfrutá en la mejor calidad de sonido'
  },
  { id: 34, name: 'Función REC', icon: rec,
    desc: 'Grabá tu música favorita, sumá un micrófono o guitarra ¡y creá contenido nuevo!'
  },
  { 
    id: 7, name: 'Batería Recargable', icon: battery,
    customDesc(input) {
      return `¡Llevalo a donde sea! Posee una batería ${input}.`
    }
  },
  { 
    id: 8, name: 'Duración de Batería', icon: batterybars,
    customDesc(input) {
      return `Tiene la capacidad de estar encendido y en uso hasta por ${input} y además podés usarlo conectado. ¡Que la fiesta no pare!`
    }
  },
  { 
    id: 9, name: 'Carry-On', icon: carryon,
    desc:'¡Llevalo a todas partes gracias a su sistema Carry-On!'
  },
  { id: 18, name: 'Caja de Madera', icon: wood,
    desc: 'Cuerpo construido enteramente en madera, lo que le brinda mayor calidad de sonido y robustez'
  },
  { id: 19, name: 'Ruedas', icon: wheel,
    desc: 'Posee ruedas para que puedas transportarlo cómodamente a cualquier lugar'
  },
  { id: 30, name: 'Empuñadura de Transporte', icon: handle,
    desc: '¡Llevalo a donde sea! Es muy ligero y además posee Empuñadura de Transporte'
  },
  { id: 32, name: 'Uso Horizontal', icon: horizontal,
    desc: 'Usalo de forma vertical u horizontal según la ocasión'
  },
  { id: 29, name: 'Mobile Holder', icon: phone,
    desc: 'Posee ranura para colocar tu dispositivo mientras escuchás música'
  },
]

export default featuredFeatures