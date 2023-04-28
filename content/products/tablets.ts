import { Product } from "../types";
import { fileserver } from "../../config/config";

export const tablets: Product[] = [
  { // TA-07
    name: `Tablet Aiwa Quad-core 7" 16GB`,
    sku: `TA-07`,
    link: `/productos/TA-07`,
    categories: [106, 110],
    imgs: [
      `/products/TA-07/img/1.webp`,
      `/products/TA-07/img/2.webp`,
      `/products/TA-07/img/3.webp`,
      `/products/TA-07/img/4.webp`,
      `/products/TA-07/img/5.webp`,
    ].map((e) => fileserver + e),
    360: false,
    gen: "1º Generación",
    altBackground: false,
    banners: [
      {
        title: `Ideal para el uso diario`,
        img: fileserver + `/banners/caracteristicasta07.webp`,
        desc: `Navegar en internet, usar redes sociales, ver videos, leer o abrir documentos... Podés hacer esto y mucho más.`,
      },
      {
        title: `Doble cámara`,
        img: fileserver + `/banners/camta073mp.webp`,
        desc: `Hacé videollamadas, tomá fotos o hacé videos sin problema gracias a sus dos cámaras.`,
      },
      {
        title: `Escuchalo todo`,
        img: fileserver + `/banners/sonidota07.webp`,
        desc: `Posee un potente parlante que te permitirá escuchar cada detalle de tu contenido multimedia favorito.`,
      },
      {
        title: `Llevala con vos`,
        img: fileserver + `/banners/compacta07.webp`,
        desc: `Gracias a su elegante diseño delgado y sólido, además de su poco peso, es ideal para llevarla siempre con vos.`,
      }
    ],
    shortDesc: `Mil historias en tu mochila`,
    longDesc:
      "Libros, Series, Películas, Podcasts, Música, Radio, son solo algunas de las historias que podes disfrutar desde tu tablet AIWA.",
    featuredFeatures: [
      { id: 91 }, // Android 8.1
      { id: 63, value: "RK3126 Cortex-A7 (Quad Core - 1.2GHz)" }, // Procesador
      { id: 64, value: "1GB" }, // Memoria RAM
      { id: 65, value: ['7"', "1024x600 px"] }, // Pantalla
      { id: 66 }, // SD
      { id: 79, value: '16GB, expandible a 32GB'}, // Almacenamiento
      { id: 80, value: '3 horas'}, // Duracion bateria
      { id: 81 }, // Bluetooth
      { id: 86 }, // Entrada Auricular
      { id: 87 }, // Camara frontal
      { id: 88 }, // Ligero
      { id: 85 }, // Wifi 
    ],
    features: [
      { id: 41, value: `7" 16:9` }, // Tamaño de pantalla
      { id: 42, value: `1024x600 px` }, // Resolucion
      { id: 43, value: `RK3126C Cortex-A7 (Quad Core - 1.2GHz)` }, // Procesador
      { id: 44, value: `1GB` }, // Memoria RAM
      { id: 45, value: `16GB` }, // Almacenamiento
      { id: 46, value: `Frontal 0.3MP / Trasera 0.3MP` }, // Cámara
      { id: 36, value: `v4.0` }, // Versión BT
      { id: 48, value: '802.11 b/g/n' }, // Wifi 
      { id: 49, value: '8Ω/1W' }, // Parlantes
      { id: 50, value: 'Si'}, // Microfono
      { id: 8, value: `TF card, Micro USB 2.0 y Auxiliar` }, // Entradas
      { id: 47, value: `Android 8.1` }, // Sistema operativo
      { id: 51, value: 'Polímero de Litio 3.7V/2500mAh' }, // Bateria
      { id: 16, value: `18,9 x 10,9 x 0,9 cm` }, // Dimensiones
      { id: 18, value: `282 g` }, // Peso
      { id: 19, value: `7798111353445` }, // EAN
    ],
    includes: [
      4, // Cable USB 
      9, // Manual y garantía
    ],
    downloads: `https://drive.google.com/drive/folders/1ULEqtMnMPhcpzZe_xn_327C7Vt8aYvwC`,
    variants: ['TA-07', 'TA07-2GB', 'TA-07-232'],
  },
  { // TA07-2GB
    name: `Tablet Aiwa Quad-core 7" 16GB`,
    sku: `TA07-2GB`,
    link: `/productos/TA07-2GB`,
    categories: [106, 110],
    imgs: [
      `/products/TA07-2GB/img/1.webp`,
      `/products/TA07-2GB/img/2.webp`,
      `/products/TA07-2GB/img/3.webp`,
      `/products/TA07-2GB/img/4.webp`,
      `/products/TA07-2GB/img/5.webp`,
    ].map((e) => fileserver + e),
    360: false,
    gen: "2º Generación",
    altBackground: false,
    banners: [
      {
        title: `Ideal para el uso diario`,
        img: fileserver + `/banners/caracteristicasta072gb.webp`,
        desc: `Navegar en internet, usar redes sociales, ver videos, leer o abrir documentos... Podés hacer esto y mucho más.`,
      },
      {
        title: `Doble cámara`,
        img: fileserver + `/banners/camta07.webp`,
        desc: `Hacé videollamadas, tomá fotos o hacé videos sin problema gracias a sus dos cámaras.`,
      },
      {
        title: `Escuchalo todo`,
        img: fileserver + `/banners/sonidota07.webp`,
        desc: `Posee un potente parlante que te permitirá escuchar cada detalle de tu contenido multimedia favorito.`,
      },
      {
        title: `Llevala con vos`,
        img: fileserver + `/banners/compacta07.webp`,
        desc: `Gracias a su elegante diseño delgado y sólido, además de su poco peso, es ideal para llevarla siempre con vos.`,
      }
    ],
    shortDesc: `Mil historias en tu mochila`,
    longDesc:
      "Libros, Series, Películas, Podcasts, Música, Radio, son solo algunas de las historias que podes disfrutar desde tu tablet AIWA.",
    featuredFeatures: [
      { id: 89 }, // Android 10
      { id: 63, value: "RK3126C Cortex-A7 (Quad Core - 1.2GHz)" }, // Procesador
      { id: 64, value: "2GB" }, // Memoria RAM
      { id: 65, value: ['7"', "1024x600 px"] }, // Pantalla
      { id: 66 }, // SD
      { id: 79, value: '16GB, expandible a 32GB'}, // Almacenamiento
      { id: 80, value: '3 horas'}, // Duracion bateria
      { id: 81 }, // Bluetooth
      { id: 86 }, // Entrada Auricular
      { id: 87 }, // Camara frontal
      { id: 88 }, // Ligero
      { id: 85 }, // Wifi 
    ],
    features: [
      { id: 41, value: `7" 16:9` }, // Tamaño de pantalla
      { id: 42, value: `1024x600 px` }, // Resolucion
      { id: 43, value: `RK3126C Cortex-A7 (Quad Core - 1.2GHz)` }, // Procesador
      { id: 44, value: `2GB` }, // Memoria RAM
      { id: 45, value: `16GB` }, // Almacenamiento
      { id: 46, value: `Frontal 0.3MP / Trasera 2.0MP` }, // Cámara
      { id: 36, value: `v4.0` }, // Versión BT
      { id: 48, value: '802.11 b/g/n' }, // Wifi 
      { id: 49, value: '8Ω/1W' }, // Parlantes
      { id: 50, value: 'Si'}, // Microfono
      { id: 8, value: `TF card, Micro USB 2.0 y Auxiliar` }, // Entradas
      { id: 47, value: `Android 10` }, // Sistema operativo
      { id: 51, value: 'Polímero de Litio 3.7V/2500mAh' }, // Bateria
      { id: 16, value: `18,9 x 10,9 x 0,9 cm` }, // Dimensiones
      { id: 18, value: `282 g` }, // Peso
      { id: 19, value: `7798111353735` }, // EAN
    ],
    includes: [
      4, // Cable USB 
      9, // Manual y garantía
    ],
    downloads: `https://drive.google.com/drive/folders/1wPpOJ2x8nhwzA6cl2gFBu0h0J2Q6owux`,
    variants: ['TA-07', 'TA07-2GB', 'TA-07-232'],
  },
  { // TA-07-232
    name: `Tablet Aiwa Quad-core 7" 32GB`,
    sku: `TA-07-232`,
    link: `/productos/TA-07-232`,
    categories: [106],
    imgs: [
      `/products/TA-07-232/img/1.webp`,
      `/products/TA-07-232/img/2.webp`,
      `/products/TA-07-232/img/3.webp`,
      `/products/TA-07-232/img/4.webp`,
      `/products/TA-07-232/img/5.webp`,
    ].map((e) => fileserver + e),
    360: false,
    gen: "3º Generación",
    altBackground: false,
    banners: [
      {
        title: `Ideal para el uso diario`,
        img: fileserver + `/banners/caracteristicasta07232.webp`,
        desc: `Navegar en internet, usar redes sociales, ver videos, leer o abrir documentos... Podés hacer esto y mucho más.`,
      },
      {
        title: `Doble cámara`,
        img: fileserver + `/banners/camta07.webp`,
        desc: `Hacé videollamadas, tomá fotos o hacé videos sin problema gracias a sus dos cámaras.`,
      },
      {
        title: `Escuchalo todo`,
        img: fileserver + `/banners/sonidota07.webp`,
        desc: `Posee un potente parlante que te permitirá escuchar cada detalle de tu contenido multimedia favorito.`,
      },
      {
        title: `Llevala con vos`,
        img: fileserver + `/banners/compacta07232.webp`,
        desc: `Gracias a su elegante diseño delgado y sólido, además de su poco peso, es ideal para llevarla siempre con vos.`,
      }
    ],
    shortDesc: `Mil historias en tu mochila`,
    longDesc:
      "Libros, Series, Películas, Podcasts, Música, Radio, son solo algunas de las historias que podes disfrutar desde tu tablet AIWA.",
    featuredFeatures: [
      { id: 84 }, // Android
      { id: 63, value: "RK3326S Cortex A35 (Quad Core - 1.5GHz)" }, // Procesador
      { id: 64, value: "2GB" }, // Memoria RAM
      { id: 65, value: ['7"', "1024x600 px"] }, // Pantalla
      { id: 66 }, // SD
      { id: 79, value: '32GB, expandible a 128GB'}, // Almacenamiento
      { id: 80, value: '3 horas'}, // Duracion bateria
      { id: 81 }, // Bluetooth
      { id: 86 }, // Entrada Auricular
      { id: 87 }, // Camara frontal
      { id: 72 }, // USBC
      { id: 85 }, // Wifi 
    ],
    features: [
      { id: 41, value: `7" 16:9` }, // Tamaño de pantalla
      { id: 42, value: `1024x600 px` }, // Resolucion
      { id: 43, value: `RK3326S Cortex A35 (Quad Core - 1.5GHz)` }, // Procesador
      { id: 44, value: `2GB` }, // Memoria RAM
      { id: 45, value: `32GB` }, // Almacenamiento
      { id: 46, value: `Frontal 0.3MP / Trasera 2.0MP` }, // Cámara
      { id: 36, value: `v4.0` }, // Versión BT
      { id: 48, value: '802.11 b/g/n' }, // Wifi 
      { id: 49, value: '8Ω/1W' }, // Parlantes
      { id: 50, value: 'Si'}, // Microfono
      { id: 8, value: `TF card, USB tipo C y Auxiliar` }, // Entradas
      { id: 47, value: `Android 12` }, // Sistema operativo
      { id: 51, value: 'Polímero de Litio 3.7V/2500mAh' }, // Bateria
      { id: 16, value: `18,9 x 10,9 x 0,9 cm` }, // Dimensiones
      { id: 18, value: `282 g` }, // Peso
      { id: 19, value: `7798111354572` }, // EAN
    ],
    includes: [
      6, // Cable USB tipo C
      9, // Manual y garantía
    ],
    downloads: `https://drive.google.com/drive/folders/1DF3a6p2lXRpVEozb0JCiOHIC1jyajQw6`,
  },
  { // TA-10
    name: `Tablet Aiwa Quad-core 10" 16GB`,
    sku: `TA-10`,
    link: `/productos/TA-10`,
    categories: [106, 110],
    imgs: [
      `/products/TA-10/img/1.webp`,
      `/products/TA-10/img/2.webp`,
      `/products/TA-10/img/3.webp`,
      `/products/TA-10/img/4.webp`,
    ].map((e) => fileserver + e),
    360: false,
    gen: "1º Generación",
    altBackground: true,
    banners: [
      {
        title: `Ideal para el uso diario`,
        img: fileserver + `/banners/caracteristicasta10.webp`,
        desc: `Navegar en internet, usar redes sociales, ver videos, leer o abrir documentos... Podés hacer esto y mucho más.`,
      },
      {
        title: `Doble cámara`,
        img: fileserver + `/banners/camta10.webp`,
        desc: `Hacé videollamadas, tomá fotos o hacé videos sin problema gracias a sus dos cámaras.`,
      },
      {
        title: `Escuchalo todo`,
        img: fileserver + `/banners/sonidota10.webp`,
        desc: `Posee un potente sonido que te permitirá escuchar cada detalle de tu contenido multimedia favorito.`,
      },
      {
        title: `Llevala con vos`,
        img: fileserver + `/banners/compacta10so10.webp`,
        desc: `Gracias a su elegante diseño delgado y sólido, además de su poco peso, es ideal para llevarla siempre con vos.`,
      }
    ],
    shortDesc: `Una caja de herramientas en tu mano`,
    longDesc:
      "Utilizala tanto para leer y mirar series como para diagramar, dibujar e incluso escribir. La opción de poder conectar un teclado y mouse potencian su funcionabilidad al máximo.",
    featuredFeatures: [
      { id: 91 }, // Android 8.1
      { id: 63, value: "RK3326 Cortex A35 (Quad Core - 1.5GHz)" }, // Procesador
      { id: 64, value: "2GB" }, // Memoria RAM
      { id: 65, value: ['10"', "800x1280 px"] }, // Pantalla
      { id: 66 }, // SD
      { id: 79, value: '16GB'}, // Almacenamiento
      { id: 80, value: '5 horas'}, // Duracion bateria
      { id: 81 }, // Bluetooth
      { id: 86 }, // Entrada Auricular
      { id: 87 }, // Camara frontal
      { id: 88 }, // Ligero
      { id: 85 }, // Wifi 
    ],
    features: [
      { id: 41, value: `10" 16:10` }, // Tamaño de pantalla
      { id: 42, value: `800x1280 px` }, // Resolucion
      { id: 43, value: `RK3326S Cortex A35 (Quad Core - 1.5GHz)` }, // Procesador
      { id: 44, value: `2GB` }, // Memoria RAM
      { id: 45, value: `16GB, expandible a 128GB` }, // Almacenamiento
      { id: 46, value: `Frontal 2.0MP / Trasera 5.0MP` }, // Cámara
      { id: 36, value: `v4.0` }, // Versión BT
      { id: 48, value: '802.11 b/g/n' }, // Wifi 
      { id: 49, value: '8Ω/1W' }, // Parlantes
      { id: 50, value: 'Si'}, // Microfono
      { id: 8, value: `TF card, Micro USB, Auxiliar` }, // Entradas
      { id: 47, value: `Android 8.1` }, // Sistema operativo
      { id: 51, value: 'Polímero de Litio 3.7V/5000mAh' }, // Bateria
      { id: 16, value: `25 x 17,1 x 0,9 cm` }, // Dimensiones
      { id: 18, value: `515 g` }, // Peso
      { id: 19, value: `7798111353452` }, // EAN
    ],
    includes: [
      4, // Cable USB
      5, // Cargador
      9, // Manual y garantía
    ],
    certNo: `RA 4184359 E`,
    downloads: `https://drive.google.com/drive/folders/14GurF_y4Y_frkelR1pjh0AkUhbQOFQhE`,
    variants: ['TA-10', 'TA10-SO10', 'TA-10-232'],
  },
  { // TA10-SO10
    name: `Tablet Aiwa Quad-core 10" 16GB`,
    sku: `TA10-SO10`,
    link: `/productos/TA10-SO10`,
    categories: [106, 110],
    imgs: [
      `/products/TA10-SO10/img/1.webp`,
      `/products/TA10-SO10/img/2.webp`,
      `/products/TA10-SO10/img/3.webp`,
      `/products/TA10-SO10/img/4.webp`,
    ].map((e) => fileserver + e),
    360: false,
    gen: "2º Generación",
    altBackground: true,
    banners: [
      {
        title: `Ideal para el uso diario`,
        img: fileserver + `/banners/caracteristicasta10so10.webp`,
        desc: `Navegar en internet, usar redes sociales, ver videos, leer o abrir documentos... Podés hacer esto y mucho más.`,
      },
      {
        title: `Doble cámara`,
        img: fileserver + `/banners/camta10.webp`,
        desc: `Hacé videollamadas, tomá fotos o hacé videos sin problema gracias a sus dos cámaras.`,
      },
      {
        title: `Escuchalo todo`,
        img: fileserver + `/banners/sonidota10.webp`,
        desc: `Posee un potente sonido que te permitirá escuchar cada detalle de tu contenido multimedia favorito.`,
      },
      {
        title: `Llevala con vos`,
        img: fileserver + `/banners/compacta10so10.webp`,
        desc: `Gracias a su elegante diseño delgado y sólido, además de su poco peso, es ideal para llevarla siempre con vos.`,
      }
    ],
    shortDesc: `Una caja de herramientas en tu mano`,
    longDesc:
      "Utilizala tanto para leer y mirar series como para diagramar, dibujar e incluso escribir. La opción de poder conectar un teclado y mouse potencian su funcionabilidad al máximo.",
    featuredFeatures: [
      { id: 89 }, // Android 10
      { id: 63, value: "RK3326S Cortex A35 (Quad Core - 1.5GHz)" }, // Procesador
      { id: 64, value: "2GB" }, // Memoria RAM
      { id: 65, value: ['10"', "800x1280 px"] }, // Pantalla
      { id: 66 }, // SD
      { id: 79, value: '16GB'}, // Almacenamiento
      { id: 80, value: '5 horas'}, // Duracion bateria
      { id: 81 }, // Bluetooth
      { id: 86 }, // Entrada Auricular
      { id: 87 }, // Camara frontal
      { id: 88 }, // Ligero
      { id: 85 }, // Wifi 
    ],
    features: [
      { id: 41, value: `10" 16:10` }, // Tamaño de pantalla
      { id: 42, value: `800x1280 px` }, // Resolucion
      { id: 43, value: `RK3326S Cortex A35 (Quad Core - 1.5GHz)` }, // Procesador
      { id: 44, value: `2GB` }, // Memoria RAM
      { id: 45, value: `16GB, expandible a 128GB` }, // Almacenamiento
      { id: 46, value: `Frontal 2.0MP / Trasera 5.0MP` }, // Cámara
      { id: 36, value: `v4.0` }, // Versión BT
      { id: 48, value: '802.11 b/g/n' }, // Wifi 
      { id: 49, value: '8Ω/1W' }, // Parlantes
      { id: 50, value: 'Si'}, // Microfono
      { id: 8, value: `TF card, Micro USB, Auxiliar` }, // Entradas
      { id: 47, value: `Android 10` }, // Sistema operativo
      { id: 51, value: 'Polímero de Litio 3.7V/5000mAh' }, // Bateria
      { id: 16, value: `25 x 17,1 x 0,9 cm` }, // Dimensiones
      { id: 18, value: `515 g` }, // Peso
      { id: 19, value: `7798111353742` }, // EAN
    ],
    includes: [
      4, // Cable USB
      5, // Cargador
      9, // Manual y garantía
    ],
    certNo: `RA 4184359 E`,
    downloads: `https://drive.google.com/drive/folders/1HvVezdCjXdCQDlCEHJOV9aMm-CIq0flT`,
    variants: ['TA-10', 'TA10-SO10', 'TA-10-232'],
  },
  { // TA-10-232
    name: `Tablet Aiwa Quad-core 10" 32GB`,
    sku: `TA-10-232`,
    link: `/productos/TA-10-232`,
    categories: [106],
    imgs: [
      `/products/TA-10-232/img/1.webp`,
      `/products/TA-10-232/img/2.webp`,
      `/products/TA-10-232/img/3.webp`,
      `/products/TA-10-232/img/4.webp`,
    ].map((e) => fileserver + e),
    360: false,
    gen: "3º Generación",
    altBackground: true,
    banners: [
      {
        title: `Ideal para el uso diario`,
        img: fileserver + `/banners/caracteristicasta10232.webp`,
        desc: `Navegar en internet, usar redes sociales, ver videos, leer o abrir documentos... Podés hacer esto y mucho más.`,
      },
      {
        title: `Doble cámara`,
        img: fileserver + `/banners/camta10.webp`,
        desc: `Hacé videollamadas, tomá fotos o hacé videos sin problema gracias a sus dos cámaras.`,
      },
      {
        title: `Escuchalo todo`,
        img: fileserver + `/banners/sonidota10.webp`,
        desc: `Posee un potente sonido que te permitirá escuchar cada detalle de tu contenido multimedia favorito.`,
      },
      {
        title: `Llevala con vos`,
        img: fileserver + `/banners/compacta10232.webp`,
        desc: `Gracias a su elegante diseño delgado y sólido, además de su poco peso, es ideal para llevarla siempre con vos.`,
      }
    ],
    shortDesc: `Una caja de herramientas en tu mano`,
    longDesc:
      "Utilizala tanto para leer y mirar series como para diagramar, dibujar e incluso escribir. La opción de poder conectar un teclado y mouse potencian su funcionabilidad al máximo.",
    featuredFeatures: [
      { id: 84 }, // Android 12
      { id: 63, value: "RK3326S Cortex A35 (Quad Core - 1.5GHz)" }, // Procesador
      { id: 64, value: "2GB" }, // Memoria RAM
      { id: 65, value: ['10"', "800x1280 px"] }, // Pantalla
      { id: 66 }, // SD
      { id: 79, value: '32GB'}, // Almacenamiento
      { id: 80, value: '5 horas'}, // Duracion bateria
      { id: 81 }, // Bluetooth
      { id: 86 }, // Entrada Auricular
      { id: 87 }, // Camara frontal
      { id: 72 }, // USBC
      { id: 85 }, // Wifi 
    ],
    features: [
      { id: 41, value: `10" 16:10` }, // Tamaño de pantalla
      { id: 42, value: `800x1280 px` }, // Resolucion
      { id: 43, value: `RK3326S Cortex A35 (Quad Core - 1.5GHz)` }, // Procesador
      { id: 44, value: `2GB` }, // Memoria RAM
      { id: 45, value: `32GB, expandible a 128GB` }, // Almacenamiento
      { id: 46, value: `Frontal 2.0MP / Trasera 5.0MP` }, // Cámara
      { id: 36, value: `v4.0` }, // Versión BT
      { id: 48, value: '802.11 b/g/n' }, // Wifi 
      { id: 49, value: '8Ω/1W' }, // Parlantes
      { id: 50, value: 'Si'}, // Microfono
      { id: 8, value: `TF card, USB tipo C y Auxiliar` }, // Entradas
      { id: 47, value: `Android 12` }, // Sistema operativo
      { id: 51, value: 'Polímero de Litio 3.7V/5000mAh' }, // Bateria
      { id: 16, value: `25 x 17,1 x 0,9 cm` }, // Dimensiones
      { id: 18, value: `515 g` }, // Peso
      { id: 19, value: `7798111354565 ` }, // EAN
    ],
    includes: [
      6, // Cable USB tipo C
      5, // Cargador
      9, // Manual y garantía
    ],
    certNo: `RA 4184359 E`,
    downloads: `https://drive.google.com/drive/folders/1B8gh6h0LPazSwwKfpDDHDxTmnUKz3vtm`,
  },
]