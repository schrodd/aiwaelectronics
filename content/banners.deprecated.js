const fileserver = 'https://aiwaelectronics.com.ar/fileserver'
// MEDIDA DE LOS BANNERS: 800x350 px

const banners = [
  {
    id: 1,
    title: 'Micrófono incluido', img: fileserver + '/banners/microfono.webp',
    desc: '¿Karaoke? ¡de una! Con el micrófono incluido podrás tener increíbles sesiones de Karaoke con tus amigos. ¡Que la fiesta no pare!'
  },
  {
    id: 2,
    title: 'True Wireless Stereo', img: fileserver + '/banners/tws.webp',
    desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!`
  },
  {
    id: 3,
    title: 'Power Bank', img: fileserver + '/banners/powerbank.webp',
    desc: '¡Cargá tu celular o tu dispositivo mientras escuchás música! Ahora podés escuchar tu música favorita, sin que se le agote la batería a tu celular en medio de la fiesta.'
  },
  {
    id: 4,
    title: `Ideal para fiestas y reuniones`, img: fileserver + '/banners/fiestas.webp',
    desc: 'Posee la potencia y autonomía suficiente para animar cualquier celebración, ¡además podés usarlo conectado y disfrutar por más tiempo!'
  },
  {
    id: 5,
    title: `Preparate para tocar`,
    desc: 'Hacé presentaciones en vivo en bares, celebraciones, espacios públicos, vía streaming... ¡donde quieras!',
    img: fileserver + '/banners/live.webp',
  },
  {
    id: 6,
    title: `¡Llevalo a todos lados!`,
    desc: 'Posee batería interna, por lo que podrás escuchar música donde quiera que vayas.',
    img: fileserver + '/banners/portatil.webp',
  },
  {
    id: 7,
    title: `Elevá tu sonido`,
    desc: 'Viene con un soporte de 120cm de alto. ¡Elevá la calidad de tus presentaciones!',
    img: fileserver + '/banners/tripode1500.webp',
  },
  {
    id: 8,
    title: `Cantá en pareja`,
    desc: 'Se pueden usar hasta 2 micrófonos al mismo tiempo y regulas el volumen independientemente de la música para hacer karaoke y divertirte con amigos.',
    img: fileserver + '/banners/doblemic.webp',
  },
  {
    id: 9,
    title: `Iluminá cualquier espacio`,
    desc: 'Elegí si queres acompañar tu música con sus brillantes luces rgb o si preferís dejarlas apagadas.',
    img: fileserver + '/banners/2040luces.webp',
  },
  {
    id: 10,
    title: `Ecualizá tu música`,
    desc: '¡Personalizá tu música como un verdadero Dj! Con las Bandas Ecualizadoras podés ajustar las frecuencias de sonido como más te guste, o simplemente experimentar tu música de otra manera.',
    img: fileserver + '/banners/eq2.webp',
  },
  {
    id: 11,
    title: `¡Pasate a Horizontal!`,
    desc: 'Este parlante tiene la posibilidad de utilizarse como barra. Es decir que si tenés espacios reducidos o con otro tipo de disposición, podés siempre encontrar el lugar óptimo para tu parlante.',
    img: fileserver + '/banners/horizontal2022.webp',
  } ,
  {
    id: 12,
    title: `Personalizá tus temas`,
    desc: 'Podés regular los graves y agudos, o bien modificar el eco del micrófono tan solo presionando y girarando las perillas en el panel de control. ¡Animate a probarlo, es súper fácil!',
    img: fileserver + '/banners/perillas506.webp',
  },
  {
    id: 13,
    title: `Cuerpo de Madera`,
    desc: 'Construcción realizada en madera para lograr un óptimo sonido y una acústica mejorada para el parlante.',
    img: fileserver + '/banners/cuerpomadera806.webp',
  },
  {
    id: 14,
    title: `Nunca te olvides la fiesta afuera`, img: fileserver + '/banners/ruedas1008.webp',
    desc: 'Con sus ruedas vas a poder llevar tu flama a todas partes. Su Peso ligero y empuñadura superior te ayudaran en la tarea de llevar tu música a donde sea.'
  },
  {
    id: 15,
    title: `¡Reproducí lo que sea!`,
    desc: 'Posee Radio, puerto USB, entrada Auxiliar y puerto para tarjetas TF/MicroSD.',
    img: fileserver + '/banners/conectate2.webp'
  },
  {
    id: 16,
    title: `Reguladores independientes`,
    desc: 'Regulá de forma independiente el volumen y eco del micrófono.',
    img: fileserver + '/banners/reguladores600sa.webp'
  },
  {
    id: 21,
    title: `Reguladores independientes`, // + Guitarra
    desc: 'Regulá de forma independiente el volumen de tu guitarra, del micrófono y el eco del micrófono.',
    img: fileserver + '/banners/reg806.webp'
  },
  {
    id: 17,
    title: `No te quedes sin batería`,
    desc: 'Podés usar el cable MicroUSB incluido con el adaptador de tu celular para cargarlo fácilmente.',
    img: fileserver + '/banners/carga451sn.webp'
  },
  {
    id: 18,
    title: `Accesorios incluidos`,
    desc: '¡Armá tu Karaoke! Incluye micrófono con cable, y control remoto para que puedas gestionar tu música a distancia.',
    img: fileserver + '/banners/micycontrol.webp'
  },
  {
    id: 19,
    title: `Entrada para Micrófono`,
    desc: '¡Armá tu Karaoke! Posee entrada para micrófono, conectá uno ¡y disfrutá cantando toda la noche con tus amigos!',
    img: fileserver + '/banners/mic604.webp'
  },
  {
    id: 20,
    title: `Batería de larga duración`,
    desc: `Increíble batería de larga duración para que nunca te quedes sin escuchar la música que más te gusta.`,
    img: fileserver + '/banners/bateria2050.webp'
  },
  {
    id: 22,
    title: `Entrada para Micrófono y Guitarra`,
    desc: '¡Armá tu Karaoke! Posee entrada para micrófono y guitarra ¡conectá y disfrutá tocando toda la noche con tus amigos!',
    img: fileserver + '/banners/panel2022.webp'
  },
  {
    id: 23,
    title: `Control remoto incluido`,
    desc: 'Pasá tus canciones o controlá el volumen desde la distancia con el control remoto incluido.',
    img: fileserver + '/banners/control.webp'
  },
  { id: 24, 
    title: `Vincha Plegable`, img: fileserver + '/banners/diseñocalidad102n.webp',
    desc: '¡Nunca fué tan fácil transportar tus auriculares! Doblá sus extremos y remové el cable para poder llevarlos en cualquier bolsillo.' },
  { id: 25, 
    title: `Diseño Ultraligero`, img: fileserver + '/banners/ligero102b.webp', 
    desc: 'Pesan tan sólo 146g. ¡Apenas sentirás que los tenés puestos! Podés usarlos sin parar durante horas.' },
  { id: 26,
    title: `Almohadillas Soft`, img: fileserver + '/banners/almohadillas102n.webp',
    desc: 'Sus almohadillas son suaves, muy cómodas, y se adaptan a cualquier tipo de oreja.' },
  { id: 27,
    title: `Mantené el control`, img: fileserver + '/banners/cable102n.webp', 
    desc: 'Cable extraíble para tu comodidad, con micrófono y botón para atender llamadas. No te preocupes por cables enredados, su sistema flat-cable evita las torceduras.' },
]

export default banners