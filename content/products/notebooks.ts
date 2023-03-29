import { Product } from "../types";
import { fileserver } from "../../config/config";

export const notebooks: Product[] = [
  { // CA-141
    name: `Cloudbook Dual-core 4GB RAM Win 10`,
    sku: `CA-141`,
    link: `/productos/CA-141`,
    categories: [107],
    imgs: [
      `/products/CA-141/img/1.webp`,
      // `/products/CA-141/img/2.webp`,
      `/products/CA-141/img/3.webp`,
      `/products/CA-141/img/4.webp`,
      `/products/CA-141/img/5.webp`,
      `/products/CA-141/img/6.webp`,
      `/products/CA-141/img/7.webp`,
    ].map((e) => fileserver + e),
    360: true,
    gen: "1º Generación",
    altBackground: true,
    banners: [
      {
        title: `Accedé a la nube`,
        img: fileserver + `/banners/cloud.webp`,
        desc: `El almacenamiento local ha quedado en el pasado, almacená tus archivos en la nube y accedé a ellos fácilmente desde cualquier sitio.`,
      },
      {
        title: `Más pantalla`,
        img: fileserver + `/banners/pantalla-cloud.webp`,
        desc: `Su pantalla posee bordes finos para que el contenido que te interesa esté más visible. Alta definición y millones de colores para que tengas una experiencia única.`,
      },
      {
        title: `Cámara web`,
        img: fileserver + `/banners/camara-cloud.webp`,
        desc: `Podés tener reuniones de trabajo, ver clases online, hacer un meet con tus amigos y familiares, y mucho más.`,
      },
      {
        title: `¡Conectate!`,
        img: fileserver + `/banners/puertosca141.webp`,
        desc: `Posee 2 puertos USB, 1 puerto HDMI Mini, slot para tarjetas TF/MicroSD y puerto para auriculares 3.5mm (Audio y micrófono).`,
      },
    ],
    shortDesc: `Con vos siempre `,
    longDesc:
      "Editá, Hacé Streaming, Escribí, Trabajá. La Nube se encarga del resto. Una cloudbook es la computadora de quienes necesitan estar siempre listos para conectarse.",
    buyLink: ``,
    featuredFeatures: [
      { id: 60 }, // Windows
      { id: 62 }, // Camara frontal
      { id: 63, value: "Intel Celeron N3350 Dual-Core" }, // Procesador
      { id: 64, value: "4GB" }, // Memoria RAM
      { id: 65, value: ['14.1"', "1366x768px"] }, // Pantalla
      { id: 66 }, // SD
      { id: 69, value: "HDMI Mini" }, // Salida monitor
      { id: 68, value: '2' }, // Puertos USB
      { id: 79, value: '64GB'}, // Almacenamiento
      { id: 80, value: '5 horas'}, // Duracion bateria
      { id: 81 }, // Bluetooth
      { id: 74 }, // Teclado español
    ],
    features: [
      { id: 41, value: `14.1"` }, // Tamaño de pantalla
      { id: 42, value: `1366*768` }, // Resolucion
      { id: 43, value: `Apollo Lake N3350 (Dual-Core - 1.1GHz)` }, // Procesador
      { id: 44, value: `4GB` }, // Memoria RAM
      { id: 45, value: `64GB` }, // Almacenamiento
      { id: 46, value: `Frontal (0.3MP)` }, // Cámara
      { id: 36, value: `v4.0` }, // Versión BT
      { id: 48, value: 'a/b/g/n/ac' }, // Wifi 
      { id: 49, value: '8Ω/1W x2' }, // Parlantes
      { id: 50, value: 'Si'}, // Microfono
      { id: 8, value: `TF card, USB x2 (2.0 y 3.0), Auxiliar y Mini HDMI` }, // Entradas
      { id: 47, value: `Windows 10 Home` }, // Sistema operativo
      { id: 51, value: 'Polímero de Litio 7.4V/5000mAh' }, // Bateria
      { id: 16, value: `32,8 x 21,7 x 2,2 cm` }, // Dimensiones
      { id: 18, value: `1,34Kg` }, // Peso
      { id: 19, value: `7798111353476` }, // EAN
    ],
    includes: [
      29, // Fuente de Alimentación
      9, // Manual y garantía
    ],
    certNo: `0Q-AR-01307-T-0`,
    downloads: `https://drive.google.com/drive/folders/1KB-EqgUn_6l5fBzhydm_y5cqUJBRMUzT`,
    variants: ["CA-141", "CA141-CO", "CA141-C"],
    colors: [],
  },
  { // CA141-CO
    name: `Cloudbook Dual-core 4GB RAM Win 10 + Funda`,
    sku: `CA141-CO`,
    link: `/productos/CA141-CO`,
    categories: [107],
    imgs: [
      `/products/CA141-CO/img/1.webp`,
      // `/products/CA141-CO/img/2.webp`,
      `/products/CA141-CO/img/3.webp`,
      `/products/CA141-CO/img/4.webp`,
      `/products/CA141-CO/img/5.webp`,
      `/products/CA141-CO/img/6.webp`,
      `/products/CA141-CO/img/7.webp`,
      `/products/CA141-CO/img/8.webp`,
    ].map((e) => fileserver + e),
    360: true,
    gen: "2º Generación",
    altBackground: true,
    banners: [
      {
        title: `Accedé a la nube`,
        img: fileserver + `/banners/cloud.webp`,
        desc: `El almacenamiento local ha quedado en el pasado, almacená tus archivos en la nube y accedé a ellos fácilmente desde cualquier sitio.`,
      },
      {
        title: `Más pantalla`,
        img: fileserver + `/banners/pantalla-cloud.webp`,
        desc: `Su pantalla posee bordes finos para que el contenido que te interesa esté más visible. Alta definición y millones de colores para que tengas una experiencia única.`,
      },
      {
        title: `Cámara web`,
        img: fileserver + `/banners/camara-cloud.webp`,
        desc: `Podés tener reuniones de trabajo, ver clases online, hacer un meet con tus amigos y familiares, y mucho más.`,
      },
      {
        title: `¡Conectate!`,
        img: fileserver + `/banners/puertosca141.webp`,
        desc: `Posee 2 puertos USB, 1 puerto HDMI Mini, slot para tarjetas TF/MicroSD y puerto para auriculares 3.5mm (Audio y micrófono).`,
      },
      {
        title: `Funda de Neoprene`,
        img: fileserver + `/banners/fundaca141co.webp`,
        desc: `Incluye una funda de Neoprene para que puedas trasladar tu equipo de forma segura a donde quiera que vayas.`,
      },
    ],
    shortDesc: `Con vos siempre `,
    longDesc:
      "Editá, Hacé Streaming, Escribí, Trabajá. La Nube se encarga del resto. Una cloudbook es la computadora de quienes necesitan estar siempre listos para conectarse.",
    buyLink: ``,
    featuredFeatures: [
      { id: 60 }, // Windows
      { id: 62 }, // Camara frontal
      { id: 63, value: "Intel Celeron N3350 Dual-Core" }, // Procesador
      { id: 64, value: "4GB" }, // Memoria RAM
      { id: 65, value: ['14.1"', "1366x768px"] }, // Pantalla
      { id: 66 }, // SD
      { id: 69, value: "HDMI Mini" }, // Salida monitor
      { id: 67 }, // Funda
      { id: 79, value: '64GB'}, // Almacenamiento
      { id: 80, value: '5 horas'}, // Duracion bateria
      { id: 81 }, // Bluetooth
      { id: 74 }, // Teclado español
    ],
    features: [
      { id: 41, value: `14.1"` }, // Tamaño de pantalla
      { id: 42, value: `1366*768` }, // Resolucion
      { id: 43, value: `Apollo Lake N3350 (Dual-Core - 1.1GHz)` }, // Procesador
      { id: 44, value: `4GB` }, // Memoria RAM
      { id: 45, value: `64GB` }, // Almacenamiento
      { id: 46, value: `Frontal (0.3MP)` }, // Cámara
      { id: 36, value: `v4.2` }, // Versión BT
      { id: 48, value: 'a/b/g/n/ac' }, // Wifi
      { id: 49, value: '8Ω/1W x2' }, // Parlantes
      { id: 50, value: 'Si'}, // Microfono
      { id: 8, value: `TF card, USB x2 (2.0 y 3.0), Auxiliar y Mini HDMI` }, // Entradas
      { id: 47, value: `Windows 10 Home` }, // Sistema operativo
      { id: 51, value: 'Polímero de Litio 7.4V/5000mAh' }, // Bateria
      { id: 16, value: `32,8 x 21,7 x 2,2 cm` }, // Dimensiones
      { id: 18, value: `1,34Kg` }, // Peso
      { id: 19, value: `7798111353759` }, // EAN
    ],
    includes: [
      24, // Funda de Neoprene
      29, // Fuente de Alimentación
      9, // Manual y garantía
    ],
    certNo: `0Q-AR-01307-T-0`,
    downloads: `https://drive.google.com/drive/folders/1XLVGUK5qp2FQiVr94GrXz_uPG643jARP`,
    variants: ["CA-141", "CA141-CO", "CA141-C"],
    colors: [],
  },
  { // CA141-C
    name: `Cloudbook Dual-core 4GB RAM Win 11 + Funda`,
    sku: `CA141-C`,
    link: `/productos/CA141-C`,
    categories: [107],
    imgs: [
      `/products/CA141-C/img/1.webp`,
      // `/products/CA141-C/img/2.webp`,
      `/products/CA141-C/img/3.webp`,
      `/products/CA141-C/img/4.webp`,
      `/products/CA141-C/img/5.webp`,
      `/products/CA141-C/img/6.webp`,
      `/products/CA141-C/img/7.webp`,
      `/products/CA141-C/img/8.webp`,
    ].map((e) => fileserver + e),
    360: true,
    gen: "3º Generación",
    altBackground: true,
    banners: [
      {
        title: `Accedé a la nube`,
        img: fileserver + `/banners/cloud.webp`,
        desc: `El almacenamiento local ha quedado en el pasado, almacená tus archivos en la nube y accedé a ellos fácilmente desde cualquier sitio.`,
      },
      {
        title: `Más pantalla`,
        img: fileserver + `/banners/pantalla-cloud.webp`,
        desc: `Su pantalla posee bordes finos para que el contenido que te interesa esté más visible. Alta definición y millones de colores para que tengas una experiencia única.`,
      },
      {
        title: `Cámara web`,
        img: fileserver + `/banners/camara-cloud.webp`,
        desc: `Podés tener reuniones de trabajo, ver clases online, hacer un meet con tus amigos y familiares, y mucho más.`,
      },
      {
        title: `¡Conectate!`,
        img: fileserver + `/banners/puertosca141.webp`,
        desc: `Posee 2 puertos USB, 1 puerto HDMI Mini, slot para tarjetas TF/MicroSD y puerto para auriculares 3.5mm (Audio y micrófono).`,
      },
      {
        title: `Funda de Neoprene`,
        img: fileserver + `/banners/fundaca141co.webp`,
        desc: `Incluye una funda de Neoprene para que puedas trasladar tu equipo de forma segura a donde quiera que vayas.`,
      },
    ],
    shortDesc: `Con vos siempre `,
    longDesc:
      "Editá, Hacé Streaming, Escribí, Trabajá. La Nube se encarga del resto. Una cloudbook es la computadora de quienes necesitan estar siempre listos para conectarse.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/notebooks/332-notebook-cloudbook-14-dual-core-4gb-ram-win11-aiwa-funda-ca141-c-7798111354589.html`,
    featuredFeatures: [
      { id: 61 }, // Windows
      { id: 62 }, // Camara frontal
      { id: 63, value: "Intel Celeron N4020 Dual-Core" }, // Procesador
      { id: 64, value: "4GB" }, // Memoria RAM
      { id: 65, value: ['14.1"', "1366x768px"] }, // Pantalla
      { id: 66 }, // SD
      { id: 69, value: "HDMI Mini" }, // Salida monitor
      { id: 67 }, // Funda
      { id: 79, value: '128GB'}, // Almacenamiento
      { id: 80, value: '5 horas'}, // Duracion bateria
      { id: 81 }, // Bluetooth
      { id: 74 }, // Teclado español
    ],
    features: [
      { id: 41, value: `14.1"` }, // Tamaño de pantalla
      { id: 42, value: `1366*768` }, // Resolucion
      { id: 43, value: `Apollo Lake N4020 (Dual-Core - 2.8GHz)` }, // Procesador
      { id: 44, value: `4GB` }, // Memoria RAM
      { id: 45, value: `SSD 128GB` }, // Almacenamiento
      { id: 46, value: `Frontal (0.3MP)` }, // Cámara
      { id: 36, value: `v4.2` }, // Versión BT
      { id: 48, value: 'a/b/g/n/ac' }, // Wifi
      { id: 49, value: '8Ω/1W x2' }, // Parlantes
      { id: 50, value: 'Si'}, // Microfono
      { id: 8, value: `TF card, USB x2 (2.0 y 3.0), Auxiliar y Mini HDMI` }, // Entradas
      { id: 47, value: `Windows 11` }, // Sistema operativo
      { id: 51, value: 'Polímero de Litio 7.4V/5000mAh' }, // Bateria
      { id: 16, value: `32,8 x 21,7 x 2,2 cm` }, // Dimensiones
      { id: 18, value: `1,34Kg` }, // Peso
      { id: 19, value: `7798111354589` }, // EAN
    ],
    includes: [
      24, // Funda de Neoprene
      29, // Fuente de Alimentación
      9, // Manual y garantía
    ],
    certNo: `0Q-AR-01307-T-0`,
    downloads: `https://drive.google.com/drive/folders/16DAMs5p9bKVcBuWSZjz-ANUnAit9Vn5b`,
    colors: [],
  },
  { // NA-1413
    name: `Notebook Core i3 4GB RAM Win 10`,
    sku: `NA-1413`,
    link: `/productos/NA-1413`,
    categories: [107],
    imgs: [
      `/products/NA-1413/img/1.webp`,
      `/products/NA-1413/img/2.webp`,
      `/products/NA-1413/img/3.webp`,
      `/products/NA-1413/img/4.webp`,
      `/products/NA-1413/img/5.webp`,
      `/products/NA-1413/img/6.webp`,
      `/products/NA-1413/img/7.webp`,
      `/products/NA-1413/img/8.webp`,
      `/products/NA-1413/img/9.webp`,
    ].map((e) => fileserver + e),
    360: false,
    gen: "1º Generación",
    banners: [
      {
        title: `Diseño Compacto`,
        img: fileserver + `/banners/compacto1413.webp`,
        desc: `Peso ligero y medidas compactas permiten un uso práctico y un transporte sencillo. Podés disfrutar de pelis estés donde estés, o participar de tus reuniones de trabajo con todos tus archivos a tu alcance.`,
      },
      {
        title: `+Potencia, +Memoria`,
        img: fileserver + `/banners/proce1413.webp`,
        desc: `Posee la potencia suficiente para tus tareas diarias ¡y más! Almacená miles de fotos, videos, audios y documentos.`,
      },
      {
        title: `Más pantalla`,
        img: fileserver + `/banners/pantalla-note.webp`,
        desc: `Su pantalla posee bordes finos para que el contenido que te interesa esté más visible. Alta definición y millones de colores para que tengas una experiencia única.`,
      },
      {
        title: `Cámara web`,
        img: fileserver + `/banners/camaranote.webp`,
        desc: `Podés tener reuniones de trabajo, ver clases online, hacer un meet con tus amigos y familiares, y mucho más.`,
      },
      {
        title: `¡Conectate!`,
        img: fileserver + `/banners/puertosna1431.webp`,
        desc: `Posee 3 puertos USB (2 tipo A, 1 tipo C), 1 puerto HDMI, slot para tarjetas TF/MicroSD, 1 puerto de red Ethernet, ranura para candados Kensington y puerto para auriculares 3.5mm (Audio y micrófono).`,
      },
    ],
    shortDesc: `La solución de tu día a día`,
    longDesc:
      "Una herramienta, un medio de comunicación, de entretenimiento, todo para que tu rutina sea lo más amena posible.",
    buyLink: ``,
    featuredFeatures: [
      { id: 60 }, // Windows
      { id: 62 }, // Camara frontal
      { id: 63, value: "Intel Core i3 6157U" }, // Procesador
      { id: 64, value: "4GB" }, // Memoria RAM
      { id: 65, value: ['14"', "1920x1080"] }, // Pantalla
      { id: 69, value: "HDMI" }, // Salida monitor
      { id: 74 }, // Teclado Esp
      { id: 72 }, // USBC
      { id: 83, value: 'Posee batería de Polímero de Litio 11.4V / 3400mAh con hasta 4   horas de duración' }, // Bateria
      { id: 79, value: "500 Gb" }, // Almacenamiento
      { id: 70 }, // Kensington
      { id: 82 }, // SD usb 
    ],
    features: [
      { id: 41, value: `14.1"` }, // Tamaño de pantalla
      { id: 42, value: `1920*1080` }, // Resolucion
      { id: 43, value: `Intel Core i3 - 6157U (2.4GHz)` }, // Procesador
      { id: 44, value: `4GB` }, // Memoria RAM
      { id: 45, value: `500 GigaBytes (HDD)` }, // Almacenamiento
      { id: 46, value: `Frontal (0.3MP)` }, // Cámara
      { id: 48, value: `a/b/g/n/ac+RJ45` }, // Wifi
      { id: 49, value: `8R/1W*2` }, // Parlante
      { id: 50, value: `Si` }, // Mic
      { id: 52, value: `4 horas` }, // Tiempo de uso
      { id: 36, value: `v4.2` }, // Versión BT
      {
        id: 8,
        value: `TF card, USB 3,0x2 y tipo C, Auxiliar, Puerto de Red y HDMI`,
      }, // Entradas
      { id: 47, value: `Windows 10 Home` }, // Sistema operativo
      { id: 16, value: `37cm x 32 cm x 5,8cm` }, // Dimensiones
      { id: 18, value: `1,41Kg` }, // Peso
      { id: 19, value: `7798111353469` }, // EAN
    ],
    includes: [
      29, // Fuente de Alimentación
      9, // Manual y garantía
    ],
    certNo: `0Q-AR-01307-T-0`,
    downloads: `https://drive.google.com/drive/folders/1egSBU-4Z6Qx5T8D2rZ0TNkeWj2U-O2uR`,
    variants: ["NA-1413", "NA-1431"],
    colors: [],
  },
  { // NA-1431
    name: `Notebook Core i3 8GB RAM Win 10`,
    sku: `NA-1431`,
    link: `/productos/NA-1431`,
    categories: [107],
    imgs: [
      `/products/NA-1431/img/1.webp`,
      `/products/NA-1431/img/2.webp`,
      `/products/NA-1431/img/3.webp`,
      `/products/NA-1431/img/4.webp`,
      `/products/NA-1431/img/5.webp`,
      `/products/NA-1431/img/6.webp`,
      `/products/NA-1431/img/7.webp`,
      `/products/NA-1431/img/8.webp`,
      `/products/NA-1431/img/9.webp`,
    ].map((e) => fileserver + e),
    360: false,
    gen: "2º Generación",
    banners: [
      {
        title: `¡Conectate!`,
        img: fileserver + `/banners/puertosna1431.webp`,
        desc: `Posee 3 puertos USB (2 tipo A, 1 tipo C), 1 puerto HDMI, slot para tarjetas TF/MicroSD, 1 puerto de red Ethernet, ranura para candados Kensington y puerto para auriculares 3.5mm (Audio y micrófono).`,
      },
      {
        title: `+Potencia, +Memoria`,
        img: fileserver + `/banners/proce1431.webp`,
        desc: `Posee la potencia suficiente para tus tareas diarias ¡y más! Almacená miles de fotos, videos, audios y documentos.`,
      },
      {
        title: `Más pantalla`,
        img: fileserver + `/banners/pantalla-note.webp`,
        desc: `Su pantalla posee bordes finos para que el contenido que te interesa esté más visible. Alta definición y millones de colores para que tengas una experiencia única.`,
      },
      {
        title: `Cámara web`,
        img: fileserver + `/banners/camaranote.webp`,
        desc: `Podés tener reuniones de trabajo, ver clases online, hacer un meet con tus amigos y familiares, y mucho más.`,
      },
      {
        title: "Potencia de sobra",
        img: fileserver + "/banners/poderna1431.webp",
        desc: "Está equipada con hardware de última generación. Instalá y usá tus programas preferidos sin inconvenientes.",
      },
      {
        title: `Funda de Neoprene`,
        img: fileserver + `/banners/fundaca141co.webp`,
        desc: `Incluye una funda de Neoprene para que puedas trasladar tu equipo de forma segura a donde quiera que vayas.`,
      },
    ],
    shortDesc: `La velocidad que necesitás`,
    longDesc:
      "Con novedoso hardware que posibilita que tu flujo de trabajo tenga la rapidez y fluidez dignas de un profesional digital.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/`,
    featuredFeatures: [
      { id: 60 }, // Windows
      { id: 62 }, // Camara frontal
      { id: 63, value: "Intel Core i3 1005G1" }, // Procesador
      { id: 64, value: "8GB" }, // Memoria RAM
      { id: 65, value: ['14"', "1920x1080"] }, // Pantalla
      { id: 83, value: 'Posee batería de Polímero de Litio 11.4V / 3400mAh con hasta 4 horas de duración' }, // Bateria
      { id: 69, value: "HDMI" }, // Salida monitor
      { id: 67 }, // Funda
      { id: 72 }, // USBC
      { id: 79, value: "256 Gb (SSD)" }, // Almacenamiento
      { id: 70 }, // Kensington
      { id: 82 }, // SD usb 
    ],
    features: [
      { id: 41, value: `14.1"` }, // Tamaño de pantalla
      { id: 42, value: `1920*1080` }, // Resolucion
      { id: 43, value: `Intel Core i3 1005G1 10th Gen. 3.4GHz` }, // Procesador
      { id: 44, value: `8GB` }, // Memoria RAM
      { id: 45, value: `256 GigaBytes (SSD)` }, // Almacenamiento
      { id: 46, value: `Frontal (0.3MP)` }, // Cámara
      { id: 36, value: `v4.2` }, // Versión BT
      { id: 48, value: `a/b/g/n/ac+RJ45` }, // Wifi
      { id: 49, value: `8R/1W*2` }, // Parlante
      { id: 50, value: `Si` }, // Mic
      { id: 52, value: `4 horas` }, // Tiempo de uso
      { id: 8, value: `TF card, USB 3,0x2 y tipo C, Auxiliar, Puerto de Red y HDMI`}, // Entradas
      { id: 47, value: `Windows 10 Home` }, // Sistema operativo
      { id: 16, value: `37cm x 32 cm x 5,8cm` }, // Dimensiones
      { id: 18, value: `1,41Kg` }, // Peso
      { id: 19, value: `7798111353919` }, // EAN
    ],
    includes: [
      24, // Funda
      29, // Fuente de Alimentación
      9, // Manual y garantía
    ],
    certNo: `0Q-AR-01307-T-0`,
    downloads: `https://drive.google.com/drive/folders/1SvItrVBtKP31e7--X336swDLvI326g3O`,
    colors: [],
  },
]