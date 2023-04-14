import { Product } from "../types"
import { fileserver } from "../../config/config"

export const headsets: Product[] = [
  { // AVA-102N
    name: `Auricular Vincha On-Ear y Cable Removible`,
    sku: `AVA-102N`,
    link: `/productos/AVA-102N`,
    categories: [104],
    imgs: [
      `/products/AVA-102N/img/1.webp`,
      `/products/AVA-102N/img/2.webp`,
      `/products/AVA-102N/img/3.webp`,
      `/products/AVA-102N/img/4.webp`,
      `/products/AVA-102N/img/5.webp`,
      `/products/AVA-102N/img/6.webp`,
      `/products/AVA-102N/img/7.webp`,
      `/products/AVA-102N/img/8.webp`,
      `/products/AVA-102N/img/9.webp`,
    ].map((e) => fileserver + e),
    360: true,
    gen: "1º Generación",
    banners: [
      {
        title: `Almohadillas Soft`,
        img: fileserver + "/banners/almohadillas102n.webp",
        desc: "Sus almohadillas son suaves, muy cómodas, y se adaptan a cualquier tipo de oreja.",
      },
      {
        title: `Mantené el control`,
        img: fileserver + "/banners/cable102n.webp",
        desc: "Cable extraíble, con micrófono y botón para atender llamadas. Sin el cable no los podés usar, pero al plegarlos y quedar más compactos, ¡lo podés guardar más fácil!",
      },
      {
        title: `Vincha Plegable`,
        img: fileserver + "/banners/diseñocalidad102n.webp",
        desc: "¡Nunca fué tan fácil transportar tus auriculares! Doblá sus extremos y remové el cable para poder llevarlos en cualquier bolsillo.",
      },
      {
        title: `Diseño Ultraligero`,
        img: fileserver + "/banners/ligero102b.webp",
        desc: "Pesan tan sólo 146g. ¡Apenas sentirás que los tenés puestos! Podés usarlos sin parar durante horas.",
      },
    ],
    shortDesc: `Tu compañía indispensable`,
    longDesc:
      "A donde vayas, lo llevas para que tu música preferida suene en alta fidelidad. Posee cable extraíble con micrófono para que puedas retirarlo, y guardarlo o reemplazarlo.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/auriculares/89-auriculares-aiwa-vincha-plegable-ava-102-manos-libres-7798111353421.html`,
    featuredFeatures: [
      { id: 42 }, // Plegable
      { id: 43 }, // Almohadilla
      { id: 44 }, // Ligero
      { id: 45 }, // Cable desmontable
      { id: 46 }, // Manos libres
      { id: 47 }, // Cable largo
      { id: 48 }, // Boton incorporado
      { id: 49, value: `blanco y negro` }, // Colores
    ],
    features: [
      { id: 27, value: `Manos Libres` }, // Controles
      { id: 28, value: `3,5 mm` }, // Tipo de conex
      { id: 2, value: `50mW` }, // Potencia
      { id: 29, value: `1,2m aprox.` }, // Longitud cable
      { id: 31, value: `32Ω` }, // Impedancia
      { id: 32, value: `110dB±3dB` }, // Sensibilidad
      { id: 33, value: `-42dB±3dB` }, // Sens. Mic
      { id: 16, value: `169 * 68 * 188 mm` }, // Dimension prod
      { id: 17, value: `177 * 210 * 76 mm` }, // Dimension caja
      { id: 18, value: `146,39 gr` }, // Peso
      { id: 34, value: `40 mm` }, // Diametro diafrag.
      { id: 19, value: `7798111353421` }, // EAN
    ],
    includes: [
      14, // Aux c mic n
      25, // Garantia
    ],
    noManual: true,
    downloads: `https://drive.google.com/drive/folders/188QHcTvUUNE4HttH4Nwfv7h4Gi59RSpr`,
    colors: [`AVA-102N`, `AVA-102B`],
  },
  { // AVA-102B
    name: `Auricular Vincha On-Ear y Cable Removible`,
    sku: `AVA-102B`,
    link: `/productos/AVA-102B`,
    categories: [104],
    altBackground: true,
    imgs: [
      `/products/AVA-102B/img/1.webp`,
      `/products/AVA-102B/img/2.webp`,
      `/products/AVA-102B/img/3.webp`,
      `/products/AVA-102B/img/4.webp`,
      `/products/AVA-102B/img/5.webp`,
      `/products/AVA-102B/img/6.webp`,
      `/products/AVA-102B/img/7.webp`,
    ].map((e) => fileserver + e),
    360: true,
    gen: "1º Generación",
    banners: [
      {
        title: `Almohadillas Soft`,
        img: fileserver + "/banners/almohadillas102n.webp",
        desc: "Sus almohadillas son suaves, muy cómodas, y se adaptan a cualquier tipo de oreja.",
      },
      {
        title: `Mantené el control`,
        img: fileserver + "/banners/cable102b.webp",
        desc: "Cable extraíble, con micrófono y botón para atender llamadas. Sin el cable no los podés usar, pero al plegarlos y quedar más compactos, ¡lo podés guardar más fácil!",
      },
      {
        title: `Vincha Plegable`,
        img: fileserver + "/banners/diseñocalidad102b.webp",
        desc: "¡Nunca fué tan fácil transportar tus auriculares! Doblá sus extremos y remové el cable para poder llevarlos en cualquier bolsillo.",
      },
      {
        title: `Diseño Ultraligero`,
        img: fileserver + "/banners/ligero102b.webp",
        desc: "Pesan tan sólo 146g. ¡Apenas sentirás que los tenés puestos! Podés usarlos sin parar durante horas.",
      },
    ],
    shortDesc: `Tu compañía indispensable`,
    longDesc:
      "A donde vayas, lo llevas para que tu música preferida suene en alta fidelidad. Posee cable extraíble con micrófono para que puedas retirarlo, y guardarlo o reemplazarlo.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/cableado/89-auriculares-aiwa-vincha-plegable-ava-102-manos-libres-7798111353421.html`,
    featuredFeatures: [
      { id: 42 }, // Plegable
      { id: 43 }, // Almohadilla
      { id: 44 }, // Ligero
      { id: 45 }, // Cable desmontable
      { id: 46 }, // Manos libres
      { id: 47 }, // Cable largo
      { id: 48 }, // Boton incorporado
      { id: 49, value: `blanco y negro` }, // Colores
    ],
    features: [
      { id: 27, value: `Manos Libres` }, // Controles
      { id: 28, value: `3,5 mm` }, // Tipo de conex
      { id: 2, value: `50mW` }, // Potencia
      { id: 29, value: `1,2m aprox.` }, // Longitud cable
      { id: 31, value: `32Ω` }, // Impedancia
      { id: 32, value: `110dB±3dB` }, // Sensibilidad
      { id: 33, value: `-42dB±3dB` }, // Sens. Mic
      { id: 16, value: `169 * 68 * 188 mm` }, // Dimension prod
      { id: 17, value: `177 * 210 * 76 mm` }, // Dimension caja
      { id: 18, value: `146,39 gr` }, // Peso
      { id: 34, value: `40 mm` }, // Diametro diafrag.
      { id: 19, value: `7798111353414` }, // EAN
    ],
    includes: [
      13, // Cable 3.5mm + mic b
      25, // Garantia
    ],
    downloads: `https://drive.google.com/drive/folders/1gZAzU6_u-LxAjnrBnZgukRYBP0V3aYNW`,
    colors: [`AVA-102N`, `AVA-102B`],
  },
  { // AVA-BT301N
    name: `Auriculares On-ear Bluetooth`,
    sku: `AVA-BT301N`,
    link: `/productos/AVA-BT301N`,
    categories: [104],
    imgs: [
      `/products/AVA-BT301N/img/1.webp`,
      `/products/AVA-BT301N/img/2.webp`,
      `/products/AVA-BT301N/img/3.webp`,
      `/products/AVA-BT301N/img/4.webp`,
      `/products/AVA-BT301N/img/5.webp`,
      `/products/AVA-BT301N/img/6.webp`,
      `/products/AVA-BT301N/img/7.webp`,
      `/products/AVA-BT301N/img/8.webp`,
    ].map((e) => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [
      {
        title: `Controlá todo`,
        img: fileserver + `/banners/botones301n.webp`,
        desc: `Posee botones para realizar cualquier acción que necesités, pasá canciones, cambiá el volumen ¡y mucho más! Consultá el manual para más información.`,
      },
      {
        title: `Conexión Bluetooth 5.0`,
        img: fileserver + `/banners/bluetooth301n.webp`,
        desc: `Los auriculares AIWA cuentan con la nueva tecnología Bluetooth versión 5.0 que te permiten transmitir datos con el doble de rapidez, y a una distancia mucho mayor que la versión anterior.`,
      },
      {
        title: `Llevá la calidad a todas partes`,
        img: fileserver + `/banners/plegables301n.webp`,
        desc: `¡Llevalo a donde quieras! Su sistema de vincha plegable facilita el guardado y el traslado`,
      },
      {
        title: `Almohadillas Soft`,
        img: fileserver + `/banners/almohadillas301n.webp`,
        desc: `Las suaves almohadillas hacen que los auriculares sean cómodos durante largos períodos. Con altura e inclinación regulable, se adapta perfectamente a vos.`,
      },
      {
        title: `¿Sin batería?`,
        img: fileserver + `/banners/cable301n.webp`,
        desc: `¡No hay problema! Conectá el cable auxiliar incluido y seguí escuchando el tiempo que quieras.`,
      },
    ],
    shortDesc: `Tu música y vos, sin intermediarios`,
    longDesc:
      "Desplazate sin restricciones, tu música siempre te va acompañar. Ideal para quienes quieran realizar actividad física, viajar o trabajar.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/auriculares/91-auricular-bluetooth-aiwa-plegable-ava-bt301-mic-7798111353384.html`,
    featuredFeatures: [
      { id: 42 }, // Plegable
      { id: 43 }, // Almohadilla
      { id: 51 }, // Control de Volumen
      { id: 50 }, // Cable desmontable
      { id: 46 }, // Manos libres
      { id: 52 }, // Batería larga duración
      { id: 48 }, // Boton incorporado
      { id: 54 }, // Ctrl. Canciones
    ],
    features: [
      { id: 11, value: `Uso: 8h / Stand-by: 600h` }, // Duración Batería
      { id: 10, value: `3.7V - 400mAh` }, // Batería
      { id: 38, value: `de 2,5h a 3h` }, // Tiempo de carga
      { id: 35, value: `10m` }, // Alcance BT
      { id: 32, value: `103dB±3dB` }, // Sensibilidad
      { id: 33, value: `-42dB±3dB` }, // Sens. Mic
      { id: 31, value: `32Ω±15%` }, // Impedancia
      { id: 30, value: `20Hz ~ 20KHz` }, // Frecuencia de respuesta
      { id: 37, value: `HSP / HFP / A2DP / AVRCP` }, // Formatos BT
      { id: 36, value: `V5.0+EDR` }, // Version BT
      { id: 27, value: `Canciones, Volumen y Manos Libres` }, // Controles
      { id: 16, value: `199 * 50 * 176 mm` }, // Dimension prod
      { id: 17, value: `201 * 230 * 61 mm` }, // Dimension caja
      { id: 18, value: `200g` }, // Peso
      { id: 19, value: `7798111353384` }, // EAN
      { id: 15, value: `Plegable, Uso con cable (opcional), Reg. Altura` }, // Otras caracteristicas
    ],
    includes: [
      4, // Cable USB
      3, // Cable aux
      9, // Manual
    ],
    downloads: `https://drive.google.com/drive/folders/1Tg2oFaysAoXIMu-ZvrOF2YnFEF7bVRKA`,
    colors: ["AVA-BT301B", "AVA-BT301N"],
  },
  { // AVA-BT301B
    name: `Auriculares On-ear Bluetooth`,
    sku: `AVA-BT301B`,
    link: `/productos/AVA-BT301B`,
    categories: [104],
    altBackground: true,
    imgs: [
      `/products/AVA-BT301B/img/1.webp`,
      `/products/AVA-BT301B/img/2.webp`,
      `/products/AVA-BT301B/img/3.webp`,
      `/products/AVA-BT301B/img/4.webp`,
      `/products/AVA-BT301B/img/5.webp`,
      `/products/AVA-BT301B/img/6.webp`,
      `/products/AVA-BT301B/img/7.webp`,
      `/products/AVA-BT301B/img/8.webp`,
      `/products/AVA-BT301B/img/9.webp`,
    ].map((e) => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [
      {
        title: `Controlá todo`,
        img: fileserver + `/banners/botones301b.webp`,
        desc: `Posee botones para realizar cualquier acción que necesités, pasá canciones, cambiá el volumen ¡y mucho más! Consultá el manual para más información.`,
      },
      {
        title: `Llevá la calidad a todas partes`,
        img: fileserver + `/banners/plegables301b.webp`,
        desc: `¡Llevalo a donde quieras! Su sistema de vincha plegable facilita el guardado y el traslado`,
      },
      {
        title: `Conexión Bluetooth 5.0`,
        img: fileserver + `/banners/bluetooth301b.webp`,
        desc: `Los auriculares AIWA cuentan con la nueva tecnología Bluetooth versión 5.0 que te permiten transmitir datos con el doble de rapidez, y a una distancia mucho mayor que la versión anterior.`,
      },
      {
        title: `Almohadillas Soft`,
        img: fileserver + `/banners/almohadillas301b.webp`,
        desc: `Las suaves almohadillas hacen que los auriculares sean cómodos durante largos períodos. Con altura e inclinación regulable, se adapta perfectamente a vos.`,
      },
      {
        title: `¿Sin batería?`,
        img: fileserver + `/banners/cable301b.webp`,
        desc: `¡No hay problema! Conectá el cable auxiliar incluido y seguí escuchando el tiempo que quieras.`,
      },
    ],
    shortDesc: `Tu música y vos, sin intermediarios`,
    longDesc:
      "Desplazate sin restricciones, tu música siempre te va acompañar. Ideal para quienes quieran realizar actividad física, viajar o trabajar.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/auriculares/90-auricular-bluetooth-aiwa-plegable-ava-bt301-mic-7798111353391.html`,
    featuredFeatures: [
      { id: 42 }, // Plegable
      { id: 43 }, // Almohadilla
      { id: 51 }, // Control de Volumen
      { id: 50 }, // Cable desmontable
      { id: 46 }, // Manos libres
      { id: 52 }, // Batería larga duración
      { id: 48 }, // Boton incorporado
      { id: 54 }, // Ctrl. Canciones
    ],
    features: [
      { id: 11, value: `Uso: 8h / Stand-by: 600h` }, // Duración Batería
      { id: 10, value: `3.7V - 400mAh` }, // Batería
      { id: 38, value: `de 2,5h a 3h` }, // Tiempo de carga
      { id: 35, value: `10m` }, // Alcance BT
      { id: 32, value: `103dB±3dB` }, // Sensibilidad
      { id: 33, value: `-42dB±3dB` }, // Sens. Mic
      { id: 31, value: `32Ω±15%` }, // Impedancia
      { id: 30, value: `20Hz ~ 20KHz` }, // Frecuencia de respuesta
      { id: 37, value: `HSP / HFP / A2DP / AVRCP` }, // Formatos BT
      { id: 36, value: `V5.0+EDR` }, // Version BT
      { id: 27, value: `Canciones, Volumen y Manos Libres` }, // Controles
      { id: 16, value: `199 * 50 * 176 mm` }, // Dimension prod
      { id: 17, value: `201 * 230 * 61 mm` }, // Dimension caja
      { id: 18, value: `200g` }, // Peso
      { id: 19, value: `7798111353391` }, // EAN
      { id: 15, value: `Plegable, Uso con cable (opcional), Reg. Altura` }, // Otras caracteristicas
    ],
    includes: [
      4, // Cable USB
      3, // Cable aux
      9, // Manual
    ],
    downloads: `https://drive.google.com/drive/folders/1v8HOmraKEBIoSlQCZCs2kBfQAVlSdySF`,
    colors: ["AVA-BT301B", "AVA-BT301N"],
  },
  { // ATA-105N
    name: `Auriculares In-ear Bluetooth`,
    sku: `ATA-105N`,
    link: `/productos/ATA-105N`,
    categories: [103,110],
    imgs: [
      `/products/ATA-105N/img/1.webp`,
      `/products/ATA-105N/img/2.webp`,
      `/products/ATA-105N/img/3.webp`,
      `/products/ATA-105N/img/4.webp`,
      `/products/ATA-105N/img/5.webp`,
      `/products/ATA-105N/img/6.webp`,
      `/products/ATA-105N/img/7.webp`,
      `/products/ATA-105N/img/8.webp`,
      `/products/ATA-105N/img/9.webp`,
    ].map((e) => fileserver + e),
    360: true,
    gen: "1º Generación",
    banners: [
      {
        title: `Conexión Bluetooth 5.0`,
        img: fileserver + `/banners/bluetooth106n.webp`,
        desc: `La última versión, te permiten transmitir datos con el doble de rapidez, y a mayor distancia. Podés sincronizarlos con cualquier dispositivo Bluetooth.`,
      },
      {
        title: `Larga autonomía`,
        img: fileserver + `/banners/energia106n.webp`,
        desc: `Tienen una batería de larga duración y cuentan con estuche de carga portátil para llevarlos siempre con vos, además de tener un display led que te indica exactamente cuándo recargarlo.`,
      },
      {
        title: `Controles Touch`,
        img: fileserver + `/banners/touch106n.webp`,
        desc: `Controles fáciles de usar con un ligero toque. Contestá llamadas, reproducí/pausá canciones o usá un asistente de voz sin ninguna dificultad.`,
      },
      {
        title: `Aliado Fitness`,
        img: fileserver + `/banners/running106n.webp`,
        desc: `Podés usarlos para hacer deporte ya que son extremadamente ligeros, además son resistentes al polvo y las salpicaduras o ligeras lloviznas.`,
      },
      {
        title: `3 Simples pasos`,
        img: fileserver + `/banners/pasos106n.webp`,
        desc: `Encendé, conectá y disfrutá. Nunca fué tan fácil escuchar música. El emparejamiento se hace por única vez, y luego, simplemente al sacarlos del estuche estarán conectados y listos para el uso.`,
      },
    ],
    shortDesc: `Tu música donde quieras`,
    longDesc:
      "Gracias a las cómodas almohadillas siliconadas de los auriculares AIWA in-ear, podes conectar a un mayor nivel con tus temas favoritos, disminuyendo en gran cantidad el ruido del entorno. Su práctico tamaño te permiten vivir de esta experiencia en cualquier lugar.",
    buyLink: ``,
    features: [],
    featuredFeatures: [
      { id: 57 }, // Cable usb carga
      { id: 46 }, // Manos libres
      { id: 52 }, // Batería larga duración
      { id: 53 }, // Boton incorporado
      { id: 58 }, // Alcance
      { id: 55 }, // Estuche
      { id: 56 }, // Almohadillas repuesto
      { id: 49, value: `blanco y negro` }, // Colores
      { id: 75 }, // Play/pausa
      { id: 77 }, // Display LED
      { id: 44 }, // Ligero
      { id: 76 }, // Aliado Fitness
    ],
    featuresSections: [
      {
        title: "Auricular",
        items: [
          { name: "Duración de Batería", value: `5h aprox.` }, // Duración Batería
          { name: "Capacidad de Batería", value: `40mAh` }, // Batería
          { name: "Alcance de Bluetooth", value: `10m` }, // Alcance BT
          { name: "Formatos de Bluetooth", value: `HSP / HFP / A2DP / AVRCP` }, // Formatos BT
          { name: "Versión de Bluetooth", value: `V5.0` }, // Version BT
          {
            name: "Controles",
            value: `Reproducir/Pausar, Manos Libres y Asistente de voz`,
          }, // Controles
          { name: "Dimensiones", value: `26,65 x 16,4 x 21,6 mm` }, // Dimension prod
          { name: "Peso", value: `4,1 g (cada uno)` }, // Peso
        ],
      },
      {
        title: "Estuche",
        items: [
          { name: "Indicador de Carga", value: `Si, Digital LED` },
          { name: "Capacidad de Batería", value: `300mAh` },
          { name: "Tipo de Batería", value: `Polímero de iones de litio` },
          { name: "Entrada / Salida", value: `DC 5V 500mAh / 150mAh` },
          { name: "Tiempo de Carga", value: `2h` },
          { name: "Tiempo en Stand-by", value: `4 meses` },
          { name: "Dimensiones", value: `62 x 40 x 27,2 mm` },
          { name: "Peso", value: `32,5g` },
        ],
      },
      {
        title: "Pack",
        items: [
          { name: "Color", value: `Negro` },
          { name: "Dimensiones", value: `10 x 10 x 3,5` },
          { name: "Peso", value: `110g` },
          { name: "EAN", value: `7798111354145` },
        ],
      },
    ],
    includes: [
      18, // Estuche de carga
      16, // Almohadillas b
      4, // MicroUSB
      9, // Manual
    ],
    downloads: `https://drive.google.com/drive/folders/1HannaUT0NFv5IMiIxnIhFZS84VR8uLv2`,
    variants: ["ATA-105N", "ATA-106N"],
    colors: ["ATA-105B", "ATA-105N"],
  },
  { // ATA-105B
    name: `Auriculares In-ear Bluetooth`,
    sku: `ATA-105B`,
    link: `/productos/ATA-105B`,
    categories: [103,110],
    altBackground: true,
    imgs: [
      `/products/ATA-105B/img/1.webp`,
      `/products/ATA-105B/img/2.webp`,
      `/products/ATA-105B/img/3.webp`,
      `/products/ATA-105B/img/4.webp`,
      `/products/ATA-105B/img/5.webp`,
      `/products/ATA-105B/img/6.webp`,
      `/products/ATA-105B/img/7.webp`,
      `/products/ATA-105B/img/8.webp`,
      `/products/ATA-105B/img/9.webp`,
    ].map((e) => fileserver + e),
    360: true,
    gen: "1º Generación",
    banners: [
      {
        title: `Conexión Bluetooth 5.0`,
        img: fileserver + `/banners/bluetooth106b.webp`,
        desc: `La última versión, te permiten transmitir datos con el doble de rapidez, y a mayor distancia. Podés sincronizarlos con cualquier dispositivo Bluetooth.`,
      },
      {
        title: `Larga autonomía`,
        img: fileserver + `/banners/energia106b.webp`,
        desc: `Tienen una batería de larga duración y cuentan con estuche de carga portátil para llevarlos siempre con vos, además de tener un display led que te indica exactamente cuándo recargarlo.`,
      },
      {
        title: `Controles Touch`,
        img: fileserver + `/banners/touch106b.webp`,
        desc: `Controles fáciles de usar con un ligero toque. Contestá llamadas, reproducí/pausá canciones o usá un asistente de voz sin ninguna dificultad.`,
      },
      {
        title: `Aliado Fitness`,
        img: fileserver + `/banners/running106b.webp`,
        desc: `Podés usarlos para hacer deporte ya que son extremadamente ligeros, además son resistentes al polvo y las salpicaduras o ligeras lloviznas.`,
      },
      {
        title: `3 Simples pasos`,
        img: fileserver + `/banners/pasos106b.webp`,
        desc: `Encendé, conectá y disfrutá. Nunca fué tan fácil escuchar música. El emparejamiento se hace por única vez, y luego, simplemente al sacarlos del estuche estarán conectados y listos para el uso.`,
      },
    ],
    shortDesc: `Tu música donde quieras`,
    longDesc:
      "Gracias a las cómodas almohadillas siliconadas de los auriculares AIWA in-ear, podes conectar a un mayor nivel con tus temas favoritos, disminuyendo en gran cantidad el ruido del entorno. Su práctico tamaño te permiten vivir de esta experiencia en cualquier lugar.",
    buyLink: ``,
    features: [],
    featuredFeatures: [
      { id: 57 }, // Cable usb carga
      { id: 46 }, // Manos libres
      { id: 52 }, // Batería larga duración
      { id: 53 }, // Boton incorporado
      { id: 58 }, // Alcance
      { id: 55 }, // Estuche
      { id: 56 }, // Almohadillas repuesto
      { id: 49, value: `blanco y negro` }, // Colores
      { id: 75 }, // Play/pausa
      { id: 77 }, // Display LED
      { id: 44 }, // Ligero
      { id: 76 }, // Aliado Fitness
    ],
    featuresSections: [
      {
        title: "Auricular",
        items: [
          { name: "Duración de Batería", value: `5h aprox.` }, // Duración Batería
          { name: "Capacidad de Batería", value: `40mAh` }, // Batería
          { name: "Alcance de Bluetooth", value: `10m` }, // Alcance BT
          { name: "Formatos de Bluetooth", value: `HSP / HFP / A2DP / AVRCP` }, // Formatos BT
          { name: "Versión de Bluetooth", value: `V5.0` }, // Version BT
          {
            name: "Controles",
            value: `Reproducir/Pausar, Manos Libres y Asistente de voz`,
          }, // Controles
          { name: "Dimensiones", value: `26,65 x 16,4 x 21,6 mm` }, // Dimension prod
          { name: "Peso", value: `4,1 g (cada uno)` }, // Peso
        ],
      },
      {
        title: "Estuche",
        items: [
          { name: "Indicador de Carga", value: `Si, Digital LED` },
          { name: "Capacidad de Batería", value: `300mAh` },
          { name: "Tipo de Batería", value: `Polímero de iones de litio` },
          { name: "Entrada / Salida", value: `DC 5V 500mAh / 150mAh` },
          { name: "Tiempo de Carga", value: `2h` },
          { name: "Tiempo en Stand-by", value: `4 meses` },
          { name: "Dimensiones", value: `62 x 40 x 27,2 mm` },
          { name: "Peso", value: `32,5g` },
        ],
      },
      {
        title: "Pack",
        items: [
          { name: "Color", value: `Blanco` },
          { name: "Dimensiones del paquete", value: `10 x 10 x 3,5` },
          { name: "Peso", value: `110g` },
          { name: "EAN", value: `7798111354138` },
        ],
      },
    ],
    includes: [
      17, // Estuche de carga
      15, // Almohadillas b
      21, // MicroUSB
      9, // Manual
    ],
    downloads: `https://drive.google.com/drive/folders/1I4WOc5v36nqEq-qFmAqHXDS7QryypHZU`,
    variants: ["ATA-105B", "ATA-106B"],
    colors: ["ATA-105B", "ATA-105N"],
  },
  { // ATA-106N
    name: `Auriculares In-ear Bluetooth`,
    sku: `ATA-106N`,
    link: `/productos/ATA-106N`,
    categories: [103],
    imgs: [
      `/products/ATA-106N/img/1.webp`,
      `/products/ATA-106N/img/2.webp`,
      `/products/ATA-106N/img/3.webp`,
      `/products/ATA-106N/img/4.webp`,
      `/products/ATA-106N/img/5.webp`,
      `/products/ATA-106N/img/6.webp`,
      `/products/ATA-106N/img/7.webp`,
      `/products/ATA-106N/img/8.webp`,
      `/products/ATA-106N/img/9.webp`,
    ].map((e) => fileserver + e),
    360: true,
    gen: "2º Generación",
    banners: [
      {
        title: `Conexión Bluetooth 5.0`,
        img: fileserver + `/banners/bluetooth106n.webp`,
        desc: `La última versión, te permiten transmitir datos con el doble de rapidez, y a mayor distancia. Podés sincronizarlos con cualquier dispositivo Bluetooth.`,
      },
      {
        title: `Larga autonomía`,
        img: fileserver + `/banners/energia106n.webp`,
        desc: `Tienen una batería de larga duración y cuentan con estuche de carga portátil para llevarlos siempre con vos, además de tener un display led que te indica exactamente cuándo recargarlo.`,
      },
      {
        title: `Controles Touch`,
        img: fileserver + `/banners/touch106n.webp`,
        desc: `Controles fáciles de usar con un ligero toque. Contestá llamadas, pasá canciones o subí/bajá volumen sin ninguna dificultad.`,
      },
      {
        title: `Aliado Fitness`,
        img: fileserver + `/banners/running106n.webp`,
        desc: `Podés usarlos para hacer deporte ya que son extremadamente ligeros, además son resistentes al polvo y las salpicaduras o ligeras lloviznas.`,
      },
      {
        title: `3 Simples pasos`,
        img: fileserver + `/banners/pasos106n.webp`,
        desc: `Encendé, conectá y disfrutá. Nunca fué tan fácil escuchar música. El emparejamiento se hace por única vez, y luego, simplemente al sacarlos del estuche estarán conectados y listos para el uso.`,
      },
    ],
    shortDesc: `Tu música donde quieras`,
    longDesc:
      "Gracias a las cómodas almohadillas siliconadas de los auriculares AIWA in-ear, podes conectar a un mayor nivel con tus temas favoritos, disminuyendo en gran cantidad el ruido del entorno. Su práctico tamaño te permiten vivir de esta experiencia en cualquier lugar.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/bluetooth/250-auriculares-in-ear-inalambricos-aiwa-ata-106n-7798111354473.html`,
    featuredFeatures: [
      { id: 51 }, // Control de Volumen
      { id: 46 }, // Manos libres
      { id: 52 }, // Batería larga duración
      { id: 53 }, // Boton incorporado
      { id: 54 }, // Controles canciones
      { id: 55 }, // Estuche
      { id: 56 }, // Almohadillas repuesto
      { id: 49, value: `blanco y negro` }, // Colores
      { id: 58 }, // Amplio alcance
      { id: 77 }, // Display LED
      { id: 44 }, // Ligero
      { id: 76 }, // Aliado Fitness
    ],
    features: [],
    featuresSections: [
      {
        title: "Auricular",
        items: [
          { name: "Duración de Batería", value: `5h aprox.` }, // Duración Batería
          { name: "Capacidad de Batería", value: `40mAh` }, // Batería
          { name: "Alcance de Bluetooth", value: `10m` }, // Alcance BT
          { name: "Formatos de Bluetooth", value: `HSP / HFP / A2DP / AVRCP` }, // Formatos BT
          { name: "Versión de Bluetooth", value: `V5.0` }, // Version BT
          {
            name: "Controles",
            value: `Reproducir/Pausar, Retroceder/Avanzar, Volumen y Manos Libres`,
          }, // Controles
          { name: "Dimensiones", value: `26,65 x 16,4 x 21,6 mm` }, // Dimension prod
          { name: "Peso", value: `4,1 g (cada uno)` }, // Peso
        ],
      },
      {
        title: "Estuche",
        items: [
          { name: "Indicador de Carga", value: `Si, Digital LED` },
          { name: "Capacidad de Batería", value: `300mAh` },
          { name: "Tipo de Batería", value: `Polímero de iones de litio` },
          { name: "Entrada / Salida", value: `DC 5V 500mAh / 150mAh` },
          { name: "Tiempo de Carga", value: `2h` },
          { name: "Tiempo en Stand-by", value: `4 meses` },
          { name: "Dimensiones", value: `62 x 40 x 27,2 mm` },
          { name: "Peso", value: `32,5g` },
        ],
      },
      {
        title: "Pack",
        items: [
          { name: "Color", value: `Negro` },
          { name: "Dimensiones del paquete", value: `10 x 10 x 3,5` },
          { name: "Peso", value: `110g` },
          { name: "EAN", value: `7798111354473` },
        ],
      },
    ],
    includes: [
      18, // Estuche de carga
      16, // Almohadillas b
      4, // MicroUSB
      9, // Manual
    ],
    downloads: `https://drive.google.com/drive/folders/1Uu8rm2ALdiXv_fwNKk-SFXgBpZOJEkBY`,
    colors: ["ATA-106B", "ATA-106N"],
  },
  { // ATA-106B
    name: `Auriculares In-ear Bluetooth`,
    sku: `ATA-106B`,
    link: `/productos/ATA-106B`,
    categories: [103],
    altBackground: true,
    imgs: [
      `/products/ATA-106B/img/1.webp`,
      `/products/ATA-106B/img/2.webp`,
      `/products/ATA-106B/img/3.webp`,
      `/products/ATA-106B/img/4.webp`,
      `/products/ATA-106B/img/5.webp`,
      `/products/ATA-106B/img/6.webp`,
      `/products/ATA-106B/img/7.webp`,
      `/products/ATA-106B/img/8.webp`,
      `/products/ATA-106B/img/9.webp`,
    ].map((e) => fileserver + e),
    360: true,
    gen: "2º Generación",
    banners: [
      {
        title: `Conexión Bluetooth 5.0`,
        img: fileserver + `/banners/bluetooth106b.webp`,
        desc: `La última versión, te permiten transmitir datos con el doble de rapidez, y a mayor distancia. Podés sincronizarlos con cualquier dispositivo Bluetooth.`,
      },
      {
        title: `Larga autonomía`,
        img: fileserver + `/banners/energia106b.webp`,
        desc: `Tienen una batería de larga duración y cuentan con estuche de carga portátil para llevarlos siempre con vos, además de tener un display led que te indica exactamente cuándo recargarlo.`,
      },
      {
        title: `Controles Touch`,
        img: fileserver + `/banners/touch106b.webp`,
        desc: `Controles fáciles de usar con un ligero toque. Contestá llamadas, pasá canciones o subí/bajá volumen sin ninguna dificultad.`,
      },
      {
        title: `Aliado Fitness`,
        img: fileserver + `/banners/running106b.webp`,
        desc: `Podés usarlos para hacer deporte ya que son extremadamente ligeros, además son resistentes al polvo y las salpicaduras o ligeras lloviznas.`,
      },
      {
        title: `3 Simples pasos`,
        img: fileserver + `/banners/pasos106b.webp`,
        desc: `Encendé, conectá y disfrutá. Nunca fué tan fácil escuchar música. El emparejamiento se hace por única vez, y luego, simplemente al sacarlos del estuche estarán conectados y listos para el uso.`,
      },
    ],
    shortDesc: `Llevá tu música con vos`,
    longDesc: "Con las almohadillas siliconadas cómodas de los auriculares AIWA in-ear, puedes conectarte a tus temas favoritos en un nivel más profundo y disminuir significativamente el ruido del entorno. Su tamaño práctico te permite disfrutar de esta experiencia en cualquier lugar.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/bluetooth/264-auriculares-in-ear-inalambricos-aiwa-ata-106b-7798111354480.html`,
    featuredFeatures: [
      { id: 51 }, // Control de Volumen
      { id: 46 }, // Manos libres
      { id: 52 }, // Batería larga duración
      { id: 53 }, // Boton incorporado
      { id: 54 }, // Controles canciones
      { id: 55 }, // Estuche
      { id: 56 }, // Almohadillas repuesto
      { id: 49, value: `blanco y negro` }, // Colores
      { id: 58 }, // Amplio alcance
      { id: 77 }, // Display LED
      { id: 44 }, // Ligero
      { id: 76 }, // Aliado Fitness
    ],
    features: [],
    featuresSections: [
      {
        title: "Auricular",
        items: [
          { name: "Duración de Batería", value: `5h aprox.` }, // Duración Batería
          { name: "Capacidad de Batería", value: `40mAh` }, // Batería
          { name: "Alcance de Bluetooth", value: `10m` }, // Alcance BT
          { name: "Formatos de Bluetooth", value: `HSP / HFP / A2DP / AVRCP` }, // Formatos BT
          { name: "Versión de Bluetooth", value: `V5.0` }, // Version BT
          {
            name: "Controles",
            value: `Reproducir/Pausar, Retroceder/Avanzar, Volumen y Manos Libres`,
          }, // Controles
          { name: "Dimensiones", value: `26,65 x 16,4 x 21,6 mm` }, // Dimension prod
          { name: "Peso", value: `4,1 g (cada uno)` }, // Peso
        ],
      },
      {
        title: "Estuche",
        items: [
          { name: "Indicador de Carga", value: `Si, Digital LED` },
          { name: "Capacidad de Batería", value: `300mAh` },
          { name: "Tipo de Batería", value: `Polímero de iones de litio` },
          { name: "Entrada / Salida", value: `DC 5V 500mAh / 150mAh` },
          { name: "Tiempo de Carga", value: `2h` },
          { name: "Tiempo en Stand-by", value: `4 meses` },
          { name: "Dimensiones", value: `62 x 40 x 27,2 mm` },
          { name: "Peso", value: `32,5g` },
        ],
      },
      {
        title: "Pack",
        items: [
          { name: "Color", value: `Blanco` },
          { name: "Dimensiones del paquete", value: `10 x 10 x 3,5` },
          { name: "Peso", value: `110g` },
          { name: "EAN", value: `7798111354480` },
        ],
      },
    ],
    includes: [
      17, // Estuche de carga
      15, // Almohadillas b
      21, // MicroUSB
      9, // Manual
    ],
    downloads: `https://drive.google.com/drive/folders/1UlHBO7yRy7Bv_vOXgu4QNYmzjOJHRtnt`,
    colors: ["ATA-106B", "ATA-106N"],
  },
  { // ATA-205N
    name: `Auriculares In-ear Bluetooth`,
    sku: `ATA-205N`,
    link: `/productos/ATA-205N`,
    categories: [103,110],
    imgs: [
      `/products/ATA-205N/img/1.webp`,
      `/products/ATA-205N/img/2.webp`,
      `/products/ATA-205N/img/3.webp`,
      `/products/ATA-205N/img/4.webp`,
      `/products/ATA-205N/img/5.webp`,
    ].map((e) => fileserver + e),
    360: false,
    gen: "1º Generación",
    banners: [
      {
        title: `Controles Touch`,
        img: fileserver + `/banners/touch205n.webp`,
        desc: `Controles fáciles de usar con un ligero toque. Contestá llamadas, reproducí/pausá canciones o usá un asistente de voz sin ninguna dificultad.`,
      },
      {
        title: `USB-C`,
        img: fileserver + `/banners/usbc205n.webp`,
        desc: `Gran capacidad de batería y carga a través de USB tipo C, compatible con todo tipo de cargadores en el mercado, por lo que no tendrás que preocuparte por encontrar uno.`,
      },
      {
        title: `Conexión Bluetooth 5.0`,
        img: fileserver + `/banners/bluetooth205n.webp`,
        desc: `La última versión, te permiten transmitir datos con el doble de rapidez, y a mayor distancia. Podés sincronizarlos con cualquier dispositivo Bluetooth.`,
      },
      {
        title: `Larga autonomía`,
        img: fileserver + `/banners/energia205n.webp`,
        desc: `Tienen una batería de larga duración y cuentan con estuche de carga portátil para llevarlos siempre con vos, además de tener un display led que te indica exactamente cuándo recargarlo.`,
      },
    ],
    shortDesc: `Sumergite en tu música`,
    longDesc:
      "Su delicado diseño permite una verdadera experiencia de sonido envolvente. Gracias a sus almohadillas de silicona suaves y flexibles, el ajuste es personalizado y se adaptarán perfectamente a tu oído.",
    buyLink: ``,
    featuredFeatures: [
      { id: 59 }, // Cable usb carga
      { id: 46 }, // Manos libres
      { id: 52 }, // Batería larga duración
      { id: 53 }, // Boton incorporado
      { id: 58 }, // Alcance
      { id: 55 }, // Estuche
      { id: 56 }, // Almohadillas repuesto
      { id: 49, value: `blanco y negro` }, // Colores
    ],
    features: [],
    featuresSections: [
      {
        title: "Auricular",
        items: [
          { name: "Duración de Batería", value: `5h aprox.` },
          { name: "Capacidad de Batería", value: `30mAh` },
          { name: "Alcance de Bluetooth", value: `10m` },
          { name: "Formatos de Bluetooth", value: `HSP / HFP / A2DP / AVRCP` },
          { name: "Versión de Bluetooth", value: `V5.0` },
          {
            name: "Controles",
            value: `Reproducir/Pausar, Manos Libres y Asistente de voz`,
          },
          { name: "Dimensiones", value: `32 x 23 x 23,4 mm` },
          { name: "Peso", value: `4 g (cada uno)` },
        ],
      },
      {
        title: "Estuche",
        items: [
          { name: "Indicador de Carga", value: `Si` },
          { name: "Capacidad de Batería", value: `300mAh` },
          { name: "Tipo de Batería", value: `Polímero de iones de litio` },
          { name: "Entrada / Salida", value: "DC 5V 500mAh / 150 mAh" },
          { name: "Tiempo de Carga", value: `2h` },
          { name: "Tiempo en Stand-by", value: `4 meses` },
          { name: "Dimensiones", value: `59,5 x 45,6 x 24,3 mm` },
          { name: "Peso", value: `38g` },
        ],
      },
      {
        title: "Pack",
        items: [
          { name: "Color", value: `Negro` },
          { name: "Dimensiones del paquete", value: `10 x 10 x 3,5 cm` },
          { name: "Peso", value: `110g` },
          { name: "EAN", value: `7798111354169` },
        ],
      },
    ],
    includes: [
      23, // Estuche de carga
      16, // Almohadillas
      6, // USBC
      9, // Manual
    ],
    downloads: `https://drive.google.com/drive/folders/162INfmrVv8p8pPnueX_CPHcq941OLXmS`,
    variants: ["ATA-205N", "ATA-206N"],
    colors: ["ATA-205B", "ATA-205N"],
  },
  { // ATA-205B
    name: `Auriculares In-ear Bluetooth`,
    sku: `ATA-205B`,
    link: `/productos/ATA-205B`,
    categories: [103,110],
    altBackground: true,
    imgs: [
      `/products/ATA-205B/img/1.webp`,
      `/products/ATA-205B/img/2.webp`,
      `/products/ATA-205B/img/3.webp`,
      `/products/ATA-205B/img/4.webp`,
      `/products/ATA-205B/img/5.webp`,
    ].map((e) => fileserver + e),
    360: false,
    gen: "1º Generación",
    banners: [
      {
        title: `Controles Touch`,
        img: fileserver + `/banners/touch205b.webp`,
        desc: `Controles fáciles de usar con un ligero toque. Contestá llamadas, reproducí/pausá canciones o usá un asistente de voz sin ninguna dificultad.`,
      },
      {
        title: `Conexión Bluetooth 5.0`,
        img: fileserver + `/banners/bluetooth205b.webp`,
        desc: `La última versión, te permiten transmitir datos con el doble de rapidez, y a mayor distancia. Podés sincronizarlos con cualquier dispositivo Bluetooth.`,
      },
      {
        title: `USB-C`,
        img: fileserver + `/banners/usbc205b.webp`,
        desc: `Gran capacidad de batería y carga a través de USB tipo C, compatible con todo tipo de cargadores en el mercado, por lo que no tendrás que preocuparte por encontrar uno.`,
      },
      {
        title: `Larga autonomía`,
        img: fileserver + `/banners/energia205b.webp`,
        desc: `Tienen una batería de larga duración y cuentan con estuche de carga portátil para llevarlos siempre con vos, además de tener un display led que te indica exactamente cuándo recargarlo.`,
      },
    ],
    shortDesc: `Sumergite en tu música`,
    longDesc:
      "Su delicado diseño permite una verdadera experiencia de sonido envolvente. Gracias a sus almohadillas de silicona suaves y flexibles, el ajuste es personalizado y se adaptarán perfectamente a tu oído.",
    buyLink: ``,
    featuredFeatures: [
      { id: 59 }, // Cable usb carga
      { id: 46 }, // Manos libres
      { id: 52 }, // Batería larga duración
      { id: 53 }, // Boton incorporado
      { id: 58 }, // Alcance
      { id: 55 }, // Estuche
      { id: 56 }, // Almohadillas repuesto
      { id: 49, value: `blanco y negro` }, // Colores
    ],
    features: [],
    featuresSections: [
      {
        title: "Auricular",
        items: [
          { name: "Duración de Batería", value: `5h aprox.` },
          { name: "Capacidad de Batería", value: `30mAh` },
          { name: "Alcance de Bluetooth", value: `10m` },
          { name: "Formatos de Bluetooth", value: `HSP / HFP / A2DP / AVRCP` },
          { name: "Versión de Bluetooth", value: `V5.0` },
          {
            name: "Controles",
            value: `Reproducir/Pausar, Manos Libres y Asistente de voz`,
          },
          { name: "Dimensiones", value: `32 x 23 x 23,4 mm` },
          { name: "Peso", value: `4 g (cada uno)` },
        ],
      },
      {
        title: "Estuche",
        items: [
          { name: "Indicador de Carga", value: `Si` },
          { name: "Capacidad de Batería", value: `300mAh` },
          { name: "Tipo de Batería", value: `Polímero de iones de litio` },
          { name: "Entrada / Salida", value: "DC 5V 500mAh / 150 mAh" },
          { name: "Tiempo de Carga", value: `2h` },
          { name: "Tiempo en Stand-by", value: `4 meses` },
          { name: "Dimensiones", value: `59,5 x 45,6 x 24,3 mm` },
          { name: "Peso", value: `38g` },
        ],
      },
      {
        title: "Pack",
        items: [
          { name: "Color", value: `Blanco` },
          { name: "Dimensiones del paquete", value: `10 x 10 x 3,5 cm` },
          { name: "Peso", value: `110g` },
          { name: "EAN", value: `7798111354152` },
        ],
      },
    ],
    includes: [
      22, // Estuche de carga
      15, // Almohadillas
      20, // USBC
      9, // Manual
    ],
    downloads: `https://drive.google.com/drive/folders/1638KQqlDPwWhcGHtTbYGM9a0dWiJI2C1`,
    variants: ["ATA-205B", "ATA-206B"],
    colors: ["ATA-205B", "ATA-205N"],
  },
  { // ATA-206N
    name: `Auriculares In-ear Bluetooth`,
    sku: `ATA-206N`,
    link: `/productos/ATA-206N`,
    categories: [103],
    imgs: [
      `/products/ATA-205N/img/1.webp`,
      `/products/ATA-205N/img/2.webp`,
      `/products/ATA-205N/img/3.webp`,
      `/products/ATA-205N/img/4.webp`,
      `/products/ATA-205N/img/5.webp`,
    ].map((e) => fileserver + e),
    360: false,
    gen: "2º Generación",
    banners: [
      {
        title: `Controles Touch`,
        img: fileserver + `/banners/touch205n.webp`,
        desc: `Controles fáciles de usar con un ligero toque. Contestá llamadas, pasá canciones o subí/bajá volumen sin ninguna dificultad.`,
      },
      {
        title: `USB-C`,
        img: fileserver + `/banners/usbc205n.webp`,
        desc: `Gran capacidad de batería y carga a través de USB tipo C, compatible con todo tipo de cargadores en el mercado, por lo que no tendrás que preocuparte por encontrar uno.`,
      },
      {
        title: `Conexión Bluetooth 5.0`,
        img: fileserver + `/banners/bluetooth205n.webp`,
        desc: `La última versión, te permiten transmitir datos con el doble de rapidez, y a mayor distancia. Podés sincronizarlos con cualquier dispositivo Bluetooth.`,
      },
      {
        title: `Larga autonomía`,
        img: fileserver + `/banners/energia205n.webp`,
        desc: `Tienen una batería de larga duración y cuentan con estuche de carga portátil para llevarlos siempre con vos, además de tener un display led que te indica exactamente cuándo recargarlo.`,
      },
    ],
    shortDesc: `Sumergite en tu música`,
    longDesc:
      "Su delicado diseño permite una verdadera experiencia de sonido envolvente. Gracias a sus almohadillas de silicona suaves y flexibles, el ajuste es personalizado y se adaptarán perfectamente a tu oído.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/`,
    featuredFeatures: [
      { id: 51 }, // Control de Volumen
      { id: 46 }, // Manos libres
      { id: 52 }, // Batería larga duración
      { id: 53 }, // Boton incorporado
      { id: 54 }, // Controles canciones
      { id: 55 }, // Estuche
      { id: 56 }, // Almohadillas repuesto
      { id: 49, value: `blanco y negro` }, // Colores
    ],
    features: [],
    featuresSections: [
      {
        title: "Auricular",
        items: [
          { name: "Duración de Batería", value: `5h aprox.` },
          { name: "Capacidad de Batería", value: `30mAh` },
          { name: "Alcance de Bluetooth", value: `10m` },
          { name: "Formatos de Bluetooth", value: `HSP / HFP / A2DP / AVRCP` },
          { name: "Versión de Bluetooth", value: `V5.0` },
          {
            name: "Controles",
            value: `Reproducir/Pausar, Retroceder/Avanzar, Volumen y Manos Libres`,
          },
          { name: "Dimensiones", value: `32 x 23 x 23,4 mm` },
          { name: "Peso", value: `4 g (cada uno)` },
        ],
      },
      {
        title: "Estuche",
        items: [
          { name: "Indicador de Carga", value: `Si` },
          { name: "Capacidad de Batería", value: `300mAh` },
          { name: "Tipo de Batería", value: `Polímero de iones de litio` },
          { name: "Entrada / Salida", value: "DC 5V 500mAh / 150 mAh" },
          { name: "Tiempo de Carga", value: `2h` },
          { name: "Tiempo en Stand-by", value: `4 meses` },
          { name: "Dimensiones", value: `59,5 x 45,6 x 24,3 mm` },
          { name: "Peso", value: `38g` },
        ],
      },
      {
        title: "Pack",
        items: [
          { name: "Color", value: `Negro` },
          { name: "Dimensiones del paquete", value: `10 x 10 x 3,5 cm` },
          { name: "Peso", value: `110g` },
          { name: "EAN", value: `7798111354497` },
        ],
      },
    ],
    includes: [
      23, // Estuche de carga
      16, // Almohadillas
      6, // USBC
      9, // Manual
    ],
    downloads: `https://drive.google.com/drive/folders/1ViUSBo9XZ3Ii7yrGtZ4Y5MadW7cBmBAB`,
    colors: ["ATA-206B", "ATA-206N"],
  },
  { // ATA-206B
    name: `Auriculares In-ear Bluetooth`,
    sku: `ATA-206B`,
    link: `/productos/ATA-206B`,
    categories: [103],
    altBackground: true,
    imgs: [
      `/products/ATA-205B/img/1.webp`,
      `/products/ATA-205B/img/2.webp`,
      `/products/ATA-205B/img/3.webp`,
      `/products/ATA-205B/img/4.webp`,
      `/products/ATA-205B/img/5.webp`,
    ].map((e) => fileserver + e),
    360: false,
    gen: "2º Generación",
    banners: [
      {
        title: `Controles Touch`,
        img: fileserver + `/banners/touch205b.webp`,
        desc: `Controles fáciles de usar con un ligero toque. Contestá llamadas, pasá canciones o subí/bajá volumen sin ninguna dificultad.`,
      },
      {
        title: `Conexión Bluetooth 5.0`,
        img: fileserver + `/banners/bluetooth205b.webp`,
        desc: `La última versión, te permiten transmitir datos con el doble de rapidez, y a mayor distancia. Podés sincronizarlos con cualquier dispositivo Bluetooth.`,
      },
      {
        title: `USB-C`,
        img: fileserver + `/banners/usbc205b.webp`,
        desc: `Gran capacidad de batería y carga a través de USB tipo C, compatible con todo tipo de cargadores en el mercado, por lo que no tendrás que preocuparte por encontrar uno.`,
      },
      {
        title: `Larga autonomía`,
        img: fileserver + `/banners/energia205b.webp`,
        desc: `Tienen una batería de larga duración y cuentan con estuche de carga portátil para llevarlos siempre con vos, además de tener un display led que te indica exactamente cuándo recargarlo.`,
      },
    ],
    shortDesc: `Sonido excepcional`,
    longDesc:
      "Gracias a su diseño delicado, puedes disfrutar de una experiencia de sonido envolvente auténtica. Sus almohadillas de silicona suaves y flexibles permiten un ajuste personalizado que se adapta perfectamente a tus oídos.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/`,
    featuredFeatures: [
      { id: 51 }, // Control de Volumen
      { id: 46 }, // Manos libres
      { id: 52 }, // Batería larga duración
      { id: 53 }, // Boton incorporado
      { id: 54 }, // Controles canciones
      { id: 55 }, // Estuche
      { id: 56 }, // Almohadillas repuesto
      { id: 49, value: `blanco y negro` }, // Colores
    ],
    features: [],
    featuresSections: [
      {
        title: "Auricular",
        items: [
          { name: "Duración de Batería", value: `5h aprox.` },
          { name: "Capacidad de Batería", value: `30mAh` },
          { name: "Alcance de Bluetooth", value: `10m` },
          { name: "Formatos de Bluetooth", value: `HSP / HFP / A2DP / AVRCP` },
          { name: "Versión de Bluetooth", value: `V5.0` },
          {
            name: "Controles",
            value: `Reproducir/Pausar, Retroceder/Avanzar, Volumen y Manos Libres`,
          },
          { name: "Dimensiones", value: `32 x 23 x 23,4 mm` },
          { name: "Peso", value: `4 g (cada uno)` },
        ],
      },
      {
        title: "Estuche",
        items: [
          { name: "Indicador de Carga", value: `Si` },
          { name: "Capacidad de Batería", value: `300mAh` },
          { name: "Tipo de Batería", value: `Polímero de iones de litio` },
          { name: "Entrada / Salida", value: "DC 5V 500mAh / 150 mAh" },
          { name: "Tiempo de Carga", value: `2h` },
          { name: "Tiempo en Stand-by", value: `4 meses` },
          { name: "Dimensiones", value: `59,5 x 45,6 x 24,3 mm` },
          { name: "Peso", value: `38g` },
        ],
      },
      {
        title: "Pack",
        items: [
          { name: "Color", value: `Blanco` },
          { name: "Dimensiones del paquete", value: `10 x 10 x 3,5 cm` },
          { name: "Peso", value: `110g` },
          { name: "EAN", value: `7798111354503` },
        ],
      },
    ],
    includes: [
      22, // Estuche de carga
      15, // Almohadillas
      20, // USBC
      9, // Manual
    ],
    downloads: `https://drive.google.com/drive/folders/1VVvRs6BlRtF3kKoIFIqXkvb4f9Za5W5t`,
    colors: ["ATA-206B", "ATA-206N"],
  },
  { // ATA-306B
    name: `Auriculares In-ear Bluetooth`,
    sku: `ATA-306B`,
    link: `/productos/ATA-306B`,
    categories: [103],
    altBackground: true,
    imgs: [
      `/products/ATA-306B/img/1.webp`,
      `/products/ATA-306B/img/2.webp`,
      `/products/ATA-306B/img/3.webp`,
      `/products/ATA-306B/img/4.webp`,
      `/products/ATA-306B/img/5.webp`,
      `/products/ATA-306B/img/6.webp`,
      `/products/ATA-306B/img/7.webp`,
    ].map((e) => fileserver + e),
    360: true,
    gen: "1º Generación",
    banners: [
      {
        title: `Controles Touch`,
        img: fileserver + `/banners/touch306b.webp`,
        desc: `Controles fáciles de usar con un ligero toque. Contestá llamadas, pasá canciones o subí/bajá volumen sin ninguna dificultad.`,
      },
      {
        title: `Aliado Fitness`,
        img: fileserver + `/banners/running306b.webp`,
        desc: `Podés usarlos para hacer deporte ya que son extremadamente ligeros, además son resistentes al polvo y las salpicaduras o ligeras lloviznas.`,
      },
      {
        title: `Calidad de sonido`,
        img: fileserver + `/banners/calidad306b.webp`,
        desc: `Disfrutá de la alta fidelidad y baja latencia que sólo AIWA te puede brindar.`,
      },
      {
        title: `Rápido emparejamiento`,
        img: fileserver + `/banners/emparejamiento306b.webp`,
        desc: `Comenzá a escuchar en pocos segundos ¡configurá una sola vez! Luego, tan sólo con sacarlos del estuche se conectarán.`,
      },
      {
        title: `Larga autonomía`,
        img: fileserver + `/banners/energia306b.webp`,
        desc: `Tienen una batería de larga duración y cuentan con estuche de carga portátil para llevarlos siempre con vos, además de tener un display led que te indica exactamente cuándo recargarlo.`,
      },
      {
        title: `USB-C`,
        img: fileserver + `/banners/usbc306b.webp`,
        desc: `Gran capacidad de batería y carga a través de USB tipo C, compatible con todo tipo de cargadores en el mercado, por lo que no tendrás que preocuparte por encontrar uno.`,
      },
    ],
    shortDesc: `Sonido sin igual`,
    longDesc:
      "Impresionante calidad de sonido en un formato cómodo. Escuchá tu música preferida donde sea, sin limitaciones.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/bluetooth/251-auriculares-in-ear-inalambricos-aiwa-ata-306b-7798111354510.html`,
    featuredFeatures: [
      { id: 51 }, // Control de Volumen
      { id: 46 }, // Manos libres
      { id: 52 }, // Batería larga duración
      { id: 53 }, // Boton incorporado
      { id: 54 }, // Controles canciones
      { id: 55 }, // Estuche
      { id: 58 }, // Amplio alcance
      { id: 59 }, // USBC
      { id: 76 }, // Sport
      { id: 44 }, // Ligero
      { id: 12 }, // Bluetooth
      { id: 78, value: "dos horas" }, // Carga rápida
    ],
    features: [],
    featuresSections: [
      {
        title: "Auricular",
        items: [
          { name: "Duración de Batería", value: `5h aprox.` }, // Duración Batería
          { name: "Capacidad de Batería", value: `30mAh` }, // Batería
          { name: "Alcance de Bluetooth", value: `10m` }, // Alcance BT
          { name: "Formatos de Bluetooth", value: `HSP / HFP / A2DP / AVRCP` }, // Formatos BT
          { name: "Versión de Bluetooth", value: `V5.0` }, // Version BT
          {
            name: "Controles",
            value: `Reproducir/Pausar, Retroceder/Avanzar, Volumen y Manos Libres`,
          }, // Controles
          { name: "Dimensiones", value: `24,5 x 17 x 18 mm` }, // Dimension prod
          { name: "Peso", value: `4 g (cada uno)` }, // Peso
        ],
      },
      {
        title: "Estuche",
        items: [
          { name: "Indicador de Carga", value: `Si` },
          { name: "Capacidad de Batería", value: `200mAh` },
          { name: "Tipo de Batería", value: `Polímero de iones de litio` },
          { name: "Entrada / Salida", value: `80 x 80 x 40 mm` },
          { name: "Tiempo de Carga", value: `2h` },
          { name: "Tiempo en Stand-by", value: `4 meses` },
          { name: "Dimensiones", value: `42 x 52 x 25,5 mm` },
          { name: "Peso", value: `36g` },
        ],
      },
      {
        title: "Pack",
        items: [
          { name: "Color", value: "Blanco" },
          { name: "Dimensiones del paquete", value: "10 x 10 x 3,5 cm" },
          { name: "Peso", value: "110g" },
          { name: "EAN", value: "7798111354510" },
        ],
      },
    ],
    includes: [
      19, // Estuche de carga
      20, // USB tipo C
      9, // Manual
    ],
    downloads: `https://drive.google.com/drive/folders/1WSuTjo1gQNYQ-2VYm9wuMe6u5amcjSQy`,
    colors: [],
  },
  { // ATA-406N
    name: `Auriculares In-ear Bluetooth`,
    sku: `ATA-406N`,
    link: `/productos/ATA-406N`,
    categories: [103],
    imgs: [
      `/products/ATA-406N/img/1.webp`,
      `/products/ATA-406N/img/2.webp`,
      `/products/ATA-406N/img/3.webp`,
      `/products/ATA-406N/img/4.webp`,
      `/products/ATA-406N/img/5.webp`,
      `/products/ATA-406N/img/6.webp`,
      `/products/ATA-406N/img/7.webp`,
      `/products/ATA-406N/img/8.webp`,
    ].map((e) => fileserver + e),
    360: true,
    gen: "1º Generación",
    banners: [
      {
        title: `Controles Touch`,
        img: fileserver + `/banners/touch406n.webp`,
        desc: `Controles fáciles de usar con un ligero toque. Contestá llamadas, pasá canciones o subí/bajá volumen sin ninguna dificultad.`,
      },
      {
        title: `Aliado Fitness`,
        img: fileserver + `/banners/running406n.webp`,
        desc: `Podés usarlos para hacer deporte ya que son extremadamente ligeros, además son resistentes al polvo y las salpicaduras o ligeras lloviznas.`,
      },
      {
        title: `Rápido emparejamiento`,
        img: fileserver + `/banners/emparejamiento406.webp`,
        desc: `Comenzá a escuchar en pocos segundos ¡configurá una sola vez! Luego, tan sólo con sacarlos del estuche se conectarán.`,
      },
      {
        title: `USB-C`,
        img: fileserver + `/banners/usbc406n.webp`,
        desc: `Gran capacidad de batería y carga a través de USB tipo C, compatible con todo tipo de cargadores en el mercado, por lo que no tendrás que preocuparte por encontrar uno.`,
      },
      {
        title: `Conexión Bluetooth 5.0`,
        img: fileserver + `/banners/bluetooth406n.webp`,
        desc: `La última versión, te permiten transmitir datos con el doble de rapidez, y a mayor distancia. Podés sincronizarlos con cualquier dispositivo Bluetooth.`,
      },
      {
        title: `Larga autonomía`,
        img: fileserver + `/banners/energia406n.webp`,
        desc: `Tienen una batería de larga duración y cuentan con estuche de carga portátil para llevarlos siempre con vos, además de tener un display led que te indica exactamente cuándo recargarlo.`,
      },
    ],
    shortDesc: `Sonido sin límites`,
    longDesc:
      "Impresionante calidad de sonido en un formato cómodo. Cancelación de ruido pasiva para que disfrutes sin distracciones.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/bluetooth/328-auriculares-in-ear-inalambricos-aiwa-ata-406n.html`,
    featuredFeatures: [
      { id: 51 }, // Control de Volumen
      { id: 46 }, // Manos libres
      { id: 52 }, // Batería larga duración
      { id: 53 }, // Boton incorporado
      { id: 54 }, // Controles canciones
      { id: 55 }, // Estuche
      { id: 56 }, // Almohadillas repuesto
      { id: 49, value: `blanco y negro` }, // Colores
      { id: 77 }, // Display
      { id: 76 }, // Fitness
      { id: 58 }, // Alcance
      { id: 59 }, // USBC
    ],
    features: [],
    featuresSections: [
      {
        title: "Auricular",
        items: [
          { name: "Duración de Batería", value: `5h aprox.` },
          { name: "Capacidad de Batería", value: `40mAh` },
          { name: "Alcance de Bluetooth", value: `10m` },
          { name: "Formatos de Bluetooth", value: `HSP / HFP / A2DP / AVRCP` },
          { name: "Versión de Bluetooth", value: `V5.0` },
          {
            name: "Controles",
            value: `Reproducir/Pausar, Retroceder/Avanzar, Volumen y Manos Libres`,
          },
          { name: "Dimensiones", value: `20 x 20 x 22,5 mm` },
          { name: "Peso", value: `5 g (cada uno)` },
        ],
      },
      {
        title: "Estuche",
        items: [
          { name: "Indicador de Carga", value: `Si` },
          { name: "Capacidad de Batería", value: `300mAh` },
          { name: "Tipo de Batería", value: `Polímero de iones de litio` },
          { name: "Entrada / Salida", value: `DC 5V 500mAh / 150mAh` },
          { name: "Tiempo de Carga", value: `2h` },
          { name: "Tiempo de Stand-by", value: `4 meses` },
          { name: "Dimensiones", value: `60 x 45 x 30 mm` },
          { name: "Peso", value: `40g` },
        ],
      },
      {
        title: "Pack",
        items: [
          { name: "Color", value: "Negro" },
          { name: "Dimensiones del paquete", value: "10 x 10 x 3,5" },
          { name: "Peso", value: "110g" },
          { name: "EAN", value: "7798111354527" },
        ],
      },
    ],
    includes: [
      27, // Estuche de carga
      16, // Almohadillas
      6, // USBC
      9, // Manual
    ],
    downloads: `https://drive.google.com/drive/folders/1X1kjKXFrCMsob_Egu_YJDR19gRJHlIT5`,
    colors: ["ATA-406B", "ATA-406N"],
  },
  { // ATA-406B
    name: `Auriculares In-ear Bluetooth`,
    sku: `ATA-406B`,
    link: `/productos/ATA-406B`,
    categories: [103],
    altBackground: true,
    imgs: [
      `/products/ATA-406B/img/1.webp`,
      `/products/ATA-406B/img/2.webp`,
      `/products/ATA-406B/img/3.webp`,
      `/products/ATA-406B/img/4.webp`,
      `/products/ATA-406B/img/5.webp`,
      `/products/ATA-406B/img/6.webp`,
      `/products/ATA-406B/img/7.webp`,
      `/products/ATA-406B/img/8.webp`,
    ].map((e) => fileserver + e),
    360: true,
    gen: "1º Generación",
    banners: [
      {
        title: `Controles Touch`,
        img: fileserver + `/banners/touch406b.webp`,
        desc: `Controles fáciles de usar con un ligero toque. Contestá llamadas, pasá canciones o subí/bajá volumen sin ninguna dificultad.`,
      },
      {
        title: `Aliado Fitness`,
        img: fileserver + `/banners/running406b.webp`,
        desc: `Podés usarlos para hacer deporte ya que son extremadamente ligeros, además son resistentes al polvo y las salpicaduras o ligeras lloviznas.`,
      },
      {
        title: `Rápido emparejamiento`,
        img: fileserver + `/banners/emparejamiento406.webp`,
        desc: `Comenzá a escuchar en pocos segundos ¡configurá una sola vez! Luego, tan sólo con sacarlos del estuche se conectarán.`,
      },
      {
        title: `Conexión Bluetooth 5.0`,
        img: fileserver + `/banners/bluetooth406b.webp`,
        desc: `La última versión, te permiten transmitir datos con el doble de rapidez, y a mayor distancia. Podés sincronizarlos con cualquier dispositivo Bluetooth.`,
      },
      {
        title: `USB-C`,
        img: fileserver + `/banners/usbc406b.webp`,
        desc: `Gran capacidad de batería y carga a través de USB tipo C, compatible con todo tipo de cargadores en el mercado, por lo que no tendrás que preocuparte por encontrar uno.`,
      },
      {
        title: `Larga autonomía`,
        img: fileserver + `/banners/energia406b.webp`,
        desc: `Tienen una batería de larga duración y cuentan con estuche de carga portátil para llevarlos siempre con vos, además de tener un display led que te indica exactamente cuándo recargarlo.`,
      },
    ],
    shortDesc: `Sonido sin fronteras`,
    longDesc:
      "Disfruta de una calidad de sonido impresionante en un formato cómodo, con cancelación de ruido pasiva para una experiencia libre de distracciones.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/bluetooth/327-auriculares-in-ear-inalambricos-aiwa-ata-406b-7798111354534.html`,
    featuredFeatures: [
      { id: 51 }, // Control de Volumen
      { id: 46 }, // Manos libres
      { id: 52 }, // Batería larga duración
      { id: 53 }, // Boton incorporado
      { id: 54 }, // Controles canciones
      { id: 55 }, // Estuche
      { id: 56 }, // Almohadillas repuesto
      { id: 49, value: `blanco y negro` }, // Colores
      { id: 77 }, // Display
      { id: 76 }, // Fitness
      { id: 58 }, // Alcance
      { id: 59 }, // USBC
    ],
    features: [],
    featuresSections: [
      {
        title: "Auricular",
        items: [
          { name: "Duración de Batería", value: `5h aprox.` },
          { name: "Capacidad de Batería", value: `40mAh` },
          { name: "Alcance de Bluetooth", value: `10m` },
          { name: "Formatos de Bluetooth", value: `HSP / HFP / A2DP / AVRCP` },
          { name: "Versión de Bluetooth", value: `V5.0` },
          {
            name: "Controles",
            value: `Reproducir/Pausar, Retroceder/Avanzar, Volumen y Manos Libres`,
          },
          { name: "Dimensiones", value: `20 x 20 x 22,5 mm` },
          { name: "Peso", value: `5 g (cada uno)` },
        ],
      },
      {
        title: "Estuche",
        items: [
          { name: "Indicador de Carga", value: `Si` },
          { name: "Capacidad de Batería", value: `300mAh` },
          { name: "Tipo de Batería", value: `Polímero de iones de litio` },
          { name: "Entrada / Salida", value: `DC 5V 500mAh / 150mAh` },
          { name: "Tiempo de Carga", value: `2h` },
          { name: "Tiempo de Stand-by", value: `4 meses` },
          { name: "Dimensiones", value: `60 x 45 x 30 mm` },
          { name: "Peso", value: `40g` },
        ],
      },
      {
        title: "Pack",
        items: [
          { name: "Color", value: "Blanco" },
          { name: "Dimensiones del paquete", value: "10 x 10 x 3,5" },
          { name: "Peso", value: "110g" },
          { name: "EAN", value: "7798111354534" },
        ],
      },
    ],
    includes: [
      26, // Estuche de carga
      15, // Almohadillas
      20, // USBC
      9, // Manual
    ],
    downloads: `https://drive.google.com/drive/folders/1WuUfgOnQsZbcCmCks9yM9-XE5l4-0k0i`,
    colors: ["ATA-406B", "ATA-406N"],
  },
]