// Orden alfabético 
import android from '../public/svg/android.svg'
import battery from '../public/svg/battery.svg'
import batterybars from '../public/svg/batterybars.svg'
import bluetooth from '../public/svg/bluetooth.svg'
import buds from '../public/svg/buds.svg'
import cable from '../public/svg/cable.svg'
import canciones from '../public/svg/canciones.svg'
import carryon from '../public/svg/carryon.svg'
import chip from '../public/svg/chip.svg'
import color from '../public/svg/color.svg'
import display from '../public/svg/display.svg'
import doblemic from '../public/svg/doblemic.svg'
import estuche from '../public/svg/estuche.svg'
import fingerprint from '../public/svg/fingerprint.svg'
import funda from '../public/svg/funda.svg'
import fx from '../public/svg/fx.svg'
import guitar from '../public/svg/guitar.svg'
import guitmic from '../public/svg/guitmic.svg'
import handle from '../public/svg/handle.svg'
import horizontal from '../public/svg/horizontal.svg'
import kensington from '../public/svg/kensington.svg'
import lights from '../public/svg/lights.svg'
import megabass from '../public/svg/megabass.svg'
import mic from '../public/svg/mic.svg'
import micauris from '../public/svg/micauris.svg'
import micreg from '../public/svg/micreg.svg'
import monitorext from '../public/svg/monitorext.svg'
import phone from '../public/svg/phone.svg'
import play from '../public/svg/play.svg'
import plegable from '../public/svg/plegable.svg'
import plug from '../public/svg/plug.svg'
import pluma from '../public/svg/pluma.svg'
import potencia from '../public/svg/potencia.svg'
import powerbank from '../public/svg/powerbank.svg'
import powerusb from '../public/svg/powerusb.svg'
import radio from '../public/svg/radio.svg'
import ram from '../public/svg/ram.svg'
import rec from '../public/svg/rec.svg'
import reso from '../public/svg/reso.svg'
import reg from '../public/svg/reg.svg'
import remote from '../public/svg/remote.svg'
import running from '../public/svg/running.svg'
import sd from '../public/svg/sd.svg'
import ssd from '../public/svg/ssd.svg'
import ssdlabel from '../public/svg/ssdlabel.svg'
import soft from '../public/svg/soft.svg'
import speaker from '../public/svg/speaker.svg'
import speaker2 from '../public/svg/speaker2.svg'
import tecladoesp from '../public/svg/tecladoesp.svg'
import touch from '../public/svg/touch.svg'
import tripod from '../public/svg/tripod.svg'
import tws from '../public/svg/tws.svg'
import usb from '../public/svg/usb.svg'
import usbc from '../public/svg/usbc.svg'
import usbsd from '../public/svg/usbsd.svg'
import voice from '../public/svg/voice.svg'
import volumen from '../public/svg/volumen.svg'
import webcam from '../public/svg/webcam.svg'
import wheel from '../public/svg/wheel.svg'
import wifi from '../public/svg/wifi.svg'
import windows from '../public/svg/windows.svg'
import wireless from '../public/svg/wireless.svg'
import wirelessmic from '../public/svg/wirelessmic.svg'
import wood from '../public/svg/wood.svg'
import woodwheel from '../public/svg/woodwheel.svg'

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
    desc: 'Transmití canciones de forma inalámbrica  o bien conectá tu dispositivo con el cable auxiliar.'
  },
  { id: 11, name: 'TWS', icon: tws,
    desc: 'Con esta herramienta vas a poder conectar dos parlantes iguales a través del bluetooth para transmitir de manera separada el canal izquierdo y el derecho para así conseguir un sonido stereo verdadero.'
  },
  { id: 13, name: 'Power Bank', icon: powerbank,
    desc: '¡Cargá tu celular mientras escuchas música! Gracias a la función de Power Bank, podés escuchar tus temas favoritos durante varias horas, sin que se le agote la batería a tu celular en medio de la fiesta.'
  },
  { id: 31, name: 'Mega Bass', icon: megabass,
    desc: '¿Querés potenciar y sentir aún mas los graves? ¡Hacelo con la función Mega Bass!'
  },
  { id: 22, name: 'Regulador de Graves y Agudos', icon: reg,
    desc: 'Regulá a tu gusto los niveles de Graves y Agudos de tu música.'
  },
  { id: 38, name: 'Regulador de Graves, Agudos y Eco', icon: reg,
    desc: 'Regulá a tu gusto los niveles de Graves y Agudos de tu música, y el eco del micrófono.'
  },
  { id: 28, name: 'Regulador de Eco y Volumen de Micrófono', icon: micreg,
    desc: 'Controlá a gusto los niveles de Eco y Volumen del micrófono.'
  },
  { id: 23, name: 'Regulador de Eco', icon: micreg,
    desc: 'Controlá a gusto los niveles de Eco del micrófono o guitarra.'
  },
  { id: 40, name: 'Reguladores', icon: reg,
    desc: 'Controlá a gusto los niveles de Volumen, Graves, Agudos, Volumen del micrófono, Eco del micrófono y Volumen de Guitarra.'
  },
  { 
    id: 6, name: 'Efectos de Luces', icon: fx,
    /* desc:'Deslumbrantes luces que se dedican a brillar alrededor de los woofer y además con diferentes efectos para que puedas elegir cual acompaña mejor el momento que estas disfrutando.', */
    customDesc(input='') {
      return `Deslumbrantes luces que se dedican a brillar alrededor de los woofer y además con ${input} diferentes efectos para que puedas elegir cual acompaña mejor el momento que estas disfrutando.`
    }
  },
  { id: 20, name: 'Luces', icon: fx,
    desc: 'Con sus luces LED anima cualquier ambiente fácilmente. Si lo preferís, las podés apagar para ahorrar batería.'
  },
  { 
    id: 5, name: 'Display', icon: lights,
    desc:'Posee pantalla LED que muestra información y permite administrar las funciones que ofrece.',
  },
  { 
    id: 4, name: 'Efectos de Voz', icon: voice,
    /* desc:'¡Podrás ser parte de un karaoke único con los efectos de voz preprogramados!', */
    customDesc(input='') {
      return `¡Podrás ser parte de un karaoke único con los ${input} efectos de voz preprogramados!`
    }
  },
  { 
    id: 1, name: 'Micrófono', icon: mic,
    desc:'Con el micrófono incluido podés tener sesiones de Karaoke con tus amigos y disfrutar al máximo.',
  },
  { id: 14, name: 'Micrófono Inalámbrico', icon: wirelessmic,
    desc: 'Con el Micrófono Inalámbrico AIWA podés moverte con total libertad y soltura sin tropezarte con cables ¡Cantá, rapéa, improvisá a todo pulmón junto con tus amigos!'
  },
  {
    id: 10, name: 'Trípode', icon: tripod,
    desc: 'Incluye sólido trípode, realizá presentaciones profesionales ¡y llevá tus sonido más lejos!'
  },
  {id: 41, name: 'Ranura para trípode', icon: tripod,
  desc: '¡Sumá un trípode y elevá tu sonido! Trípode no incluido.'
  },
  { id: 24, name: 'Control Remoto', icon: remote,
    desc: 'La distancia no es problema, controlá cómodamente desde la distancia.'
  },
  { id: 15, name: 'Entrada para Guitarra', icon: guitar,
    desc: '¡Conectá una guitarra y comenzá a rockear!'
  },
  { id: 16, name: 'Entrada para Micrófono', icon: mic,
    customDesc: (val) => `Conectá un micrófono y activá el karaoke donde quieras. ${val ? '¡Usando el micrófono inalámbrico incluido podés cantar en pareja!' : ''}`
  },
  { id: 21, name: 'Entrada para Micrófono y Guitarra', icon: guitmic,
    desc: '¡Tocá donde quieras! Posee entradas para micrófono y guitarra con reguladores de volumen independientes. No necesitás nada más para tu evento.'
  },
  { id: 27, name: '2 Entradas para Micrófono', icon: doblemic,
    desc: 'Tenés la posibilidad de conectar hasta dos micrófonos a la vez y convertir tu fiesta en un verdadero karaoke para divertirte durante toda la noche.'
  },
  { id: 33, name: 'Conexión USB', icon: usb,
    desc: 'Posee puerto USB para que conectes tu pendrive o dispositivo.'
  },
  { id: 26, name: 'Memoria SD', icon: sd,
    desc: '¡Expandí tus posibilidades! usando una tarjeta Micro SD podés reproducir lo que quieras.'
  },
  {
    id: 37, name: 'Puerto USB + Ranura MicroSD', icon: usbsd,
    desc: 'Posee puerto USB para que conectes tu pendrive o dispositivo, ¡y también posee ranura MicroSD!'
  },
  { id: 17, name: 'Entrada Auxiliar', icon: plug,
    desc: 'Conectá tu celular o dispositivo a través de la entrada auxiliar 3.5mm.'
  },
  { id: 25, name: 'Radio FM', icon: radio,
    desc: 'Sintonizá cualquier emisora, disfrutá en la mejor calidad de sonido.'
  },
  { id: 34, name: 'Función REC', icon: rec,
    desc: 'Grabá tu música favorita, sumá un micrófono o guitarra ¡y creá contenido nuevo!'
  },
  { 
    id: 7, name: 'Batería Recargable', icon: battery,
    customDesc(input) {
      return `Disfrutalo donde quieras, tanto en el interior como en el exterior, ya que posee una batería recargable ${input}.`
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
    desc: '¡Llevalo a todas partes gracias a su empuñadura de transporte y ruedas!'
  },
  { id: 18, name: 'Caja de Madera', icon: wood,
    desc: 'Construcción realizada en madera para lograr un óptimo sonido y acústica mejorada para el parlante.'
  },
  { id: 19, name: 'Ruedas', icon: wheel,
    desc: 'Posee ruedas para que puedas transportarlo cómodamente a cualquier lugar.'
  },
  {
    id: 36, name: 'Caja de Madera + Ruedas', icon: woodwheel,
    desc: 'Construcción realizada en madera para lograr un óptimo sonido y acústica mejorada para el parlante. Posee ruedas para que puedas transportarlo cómodamente a cualquier lugar.'
  },
  { id: 30, name: 'Empuñadura de Transporte', icon: handle,
    desc: '¡Llevalo a donde sea! Es muy ligero y además posee Empuñadura de Transporte.'
  },
  { id: 32, name: 'Uso Horizontal', icon: horizontal,
    desc: 'Usalo de forma vertical u horizontal según la ocasión.'
  },
  { id: 29, name: 'Mobile Holder', icon: phone,
    desc: 'Posee ranura para colocar tu dispositivo mientras escuchás música.'
  },
  {id: 39, name: 'Liviano', icon: pluma,
  desc: 'Ni notarás que lo estás sosteniendo. ¡Llevalo a donde sea!'
  },
  {id: 40, name: 'Efectos de Voz', icon: voice,
  desc: 'Divertite con tus amigos usando los 5 efectos de voz incluidos ¡Una experiencia sin igual!'
  },

  // Auriculares
  { id: 90, name: 'Bluetooth', icon: bluetooth,
    desc: 'Transmití tu música de forma inalámbrica desde cualquier celular o reproductor portátil.' },
  { id: 55, name: 'Estuche de carga', icon: estuche,
  desc: 'Cuentan con un estuche de carga portátil, siempre que estén en el mismo, van a estar cargándose.' },
  { id: 53, name: 'Sensor Touch', icon: touch,
  desc: 'Atendé llamadas o pausá canciones con un suave toque usando el botón Touch multifunción incorporado.' },
  { id: 52, name: 'Batería de larga duración', icon: batterybars,
  desc: 'Posee la autonomía suficiente para disfrutar tu música por horas' },
  { id: 78, name: 'Carga rápida', icon: battery,
  customDesc: e => `Carga su batería completamente en tan sólo ${e}.` },
  { id: 42, name: 'Plegable', icon: plegable,
  desc: '¡Llevalo a todas partes! Se puede plegar para caber en cualquier bolsillo.' },
  { id: 46, name: 'Manos libres', icon: micauris,
  desc: 'Gracias al micrófono incorporado podrás realizar y atender llamadas mientras los usas.' },
  { id: 48, name: 'Botón incorporado', icon: touch,
  desc: 'Atendé llamadas o pausá canciones con el botón de función.' },
  { id: 51, name: 'Control de Volumen', icon: volumen,
  desc: 'Subí o bajá el volumen de tu música fácilmente usando los botones integrados.'},
  { id: 54, name: 'Control de Canciones', icon: canciones,
  desc: '¡Navegá tu lista de reproducción libremente!'},
  { id: 77, name: 'Display Digital Led', icon: display,
  desc: 'Posee indicador de carga digital LED, para que sepas cuánto te queda de batería.'},
  { id: 58, name: 'Amplio alcance', icon: wireless,
  desc: 'Tiene un alcance total (aproximado) de 10 metros hasta el dispositivo emisor.'},
  { id: 57, name: 'Cable USB incluido', icon: powerusb,
  desc: 'Incluye cable MicroUSB (sólo para carga). Es tan simple como conectarlo a cualquier adaptador o puerto de tu pc.'},
  { id: 59, name: 'Cable USB-C incluido', icon: usbc,
  desc: 'Incluye cable USB Tipo C (sólo para carga). Es tan simple como conectarlo a cualquier adaptador o puerto de tu pc.'},
  { id: 75, name: 'Control de Canciones', icon: play,
  desc: '¡Pausá y reproducí tus canciones al instante con un toque!'},
  { id: 45, name: 'Cable desmontable', icon: plug, // Flat AVA-102B/N
  desc: 'Cable extraíble para tu comodidad. No te preocupes por cables enredados, su sistema flat-cable evita las torceduras.' },
  { id: 50, name: 'Cable desmontable', icon: plug, // No flat BT301B/N
  desc: 'Cable auxiliar extraíble para tu comodidad. Podés conectar el cable y seguir disfrutando de tu música ¡incluso si te quedás sin batería!' },
  { id: 43, name: 'Almohadilla Soft', icon: soft,
  desc: 'Posee almohadillas de material suave que se adaptan a vos.' },
  { id: 44, name: 'Ligero', icon: pluma,
  desc: '¡Apenas sentirás que los tenés puestos! Podés usarlos sin parar durante horas.' },
  { id: 47, name: 'Cable largo', icon: cable,
  desc: 'Posee un cable lo suficientemente largo para que no tengas que preocuparte por ello.' },
  { id: 56, name: 'Almohadillas de repuesto', icon: buds,
  desc: 'Incluye 3 pares de almohadillas de distintos tamaños (S, M, L) para que puedas usar el que mejor se adapte a vos.' },
  { id: 76, name: 'Aliado Fitness', icon: running,
  desc: '¡Hacé deporte con ellos! poseen una fuerte sujeción y resistencia ante polvo y salpicaduras.'},
  { id: 49, name: 'Colores', icon: color,
  customDesc: colores => `Seleccioná alguno de los colores disponibles y personalizá tu experiencia auditiva. Disponible en ${colores}.` },

  // Tablets y Notebooks
  { id: 89, name: 'Android 10', icon: android,
  desc: 'Sistema operativo Android en su versión 10, aprovechá las nuevas funcionalidades y el rendimiento superior.'},
  { id: 84, name: 'Android 12', icon: android,
  desc: '¡El nuevo Android 12 ya está aqui! Aprovechá la mejora de rendimiento y funcionalidades que trae consigo.'},
  { id: 60, name: 'Windows 10 Home', icon: windows,
  desc: 'Sistema Operativo Windows 10 Home incluido con licencia original.' },
  { id: 61, name: 'Windows 11', icon: windows,
  desc: '¡El nuevo Windows ya está aqui! Windows 11 incluido con licencia original. Aprovechá la mejora de rendimiento y funcionalidades que trae consigo.' },
  { id: 63, name: 'Procesador', icon: chip, // poca potencia, cloud y note 1413
  customDesc: proc => `Posee el modelo ${proc}, ideal para tareas de oficina y navegar por Internet.`},
  { id: 71, name: 'Procesador', icon: chip, // mas potente, 1431
  customDesc: proc => `Posee el modelo ${proc}, lo suficientemente potente para todas tus actividades.`},
  { id: 64, name: 'Memoria RAM', icon: ram,
  customDesc: gb => `Incluye ${gb} de RAM, más que suficiente para tus actividades diarias.`},
  { id: 79, name: 'Almacenamiento', icon: ssd,
  customDesc: gb => `Incluye ${gb} de memoria interna.`},
  { id: 80, name: 'Batería de larga duración', icon: batterybars,
  customDesc: hs => `Posee hasta ${hs} de autonomía (según el uso).`},
  { id: 65, name: 'Tamaño de pantalla', icon: reso,
  customDesc: ([pulg, reso]) => `Pantalla de ${pulg} con resolución de ${reso}.`},
  { id: 72, name: 'Puerto USBC', icon: usbc,
  desc: 'Transferí archivos a máxima velocidad utilizando el puerto USB Tipo C integrado.'},
  { id: 62, name: 'Cámara Frontal', icon: webcam,
  desc: 'Hacé videollamadas, grabá videos o hacé streams usando la webcam integrada de 0.3MP.'},
  { id: 87, name: '2 Cámaras', icon: webcam,
  desc: 'Hacé videollamadas, grabá videos o hacé streams usando la cámara frontal, y tomá fotos o grabá un paisaje hermoso con la cámara trasera.'},
  { id: 66, name: 'Lector de Memoria', icon: sd,
    desc: '¡Expandí tus posibilidades! Posee lector de memorias SD para que puedas guardar tus archivos de la forma más cómoda.' },
  { id: 82, name: 'USB + TF', icon: usbsd, desc: '¡Expandí tus posibilidades! Posee lector de memorias SD y puertos USB.' },
  { id: 69, name: 'Salida de video', icon: monitorext,
  customDesc: p => `Tiene puerto ${p}, conectá un segundo monitor y trabajá de forma mucho más eficiente.`},
  { id: 68, name: 'Puertos USB', icon: usb,
    customDesc: n => `Posee ${n} puerto${n > 1 ? 's' : ''} USB para que conectes tu pendrive o dispositivo.`
  },
  { id: 67, name: 'Funda protectora', icon: funda, desc: 'Incluye funda protectora para que puedas trasladar tu equipo de  segura.' },
  { id: 70, name: 'Puerto Kensington', icon: kensington,
  desc: 'Usando este puerto podrás proteger tu Notebook de robos (candado Kensington no incluido).'},
  { id: 73, name: 'Batería', icon: battery,
  customDesc: n => `Posee batería interna de hasta ${n} horas de duración.`},
  { id: 83, name: 'Batería', icon: battery,
  customDesc: desc => desc },
  { id: 74, name: 'Teclado Español', icon: tecladoesp, desc: 'Posee teclado 100% en español.' },
  { id: 81, name: 'Bluetooth', icon: bluetooth, desc: 'Conectá todo tipo de dispositivos inalámbricos.' },
  { id: 85, name: 'Conexión Wi-Fi', icon: wifi, desc: 'Conectate a una red Wi-Fi y navegá por Internet'},
  { id: 86, name: 'Entrada para auricular', icon: plug, desc: 'Conectá tus auriculares y escuchá tu música preferida'},
  { id: 88, name: 'Ligera', icon: pluma,
  desc: '¡Llevala a todos lados! Gracias a su escaso peso, podrás contar con tu tablet en todo momento.' },
]

export default featuredFeatures