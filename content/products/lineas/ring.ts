import { Product } from '../../types'
import { fileserver } from "../../../config/config";

export const ring: Product[] = [
  { // AW-T2008
    name: `Torre de Sonido Bluetooth Ring 12000W`,
    sku: `AW-T2008`,
    link: `/productos/AW-T2008`,
    line: `ring`,
    categories: [110],
    imgs: [
      `/products/AW-T2008/img/1.webp`,
      `/products/AW-T2008/img/2.webp`,
      `/products/AW-T2008/img/3.webp`,
      `/products/AW-T2008/img/4.webp`,
      `/products/AW-T2008/img/5.webp`,
    ].map((e) => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [
      {
        title: `Micrófono inalámbrico incluido`,
        img: fileserver + `/banners/microfono.webp`,
        desc: `¿Karaoke? ¡de una! Con el micrófono incluido podrás tener increíbles sesiones de Karaoke con tus amigos. ¡Que la fiesta no pare!`,
      },
      {
        title: `True Wireless Stereo`,
        img: fileserver + `/banners/tws.webp`,
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!`,
      },
      {
        title: `Ideal para fiestas y reuniones`,
        img: fileserver + `/banners/poolparty2008.webp`,
        desc: `Posee la potencia y autonomía suficiente para animar cualquier celebración, ¡además podés usarlo conectado y disfrutar por más tiempo!`,
      },
      {
        title: `Preparate para tocar`,
        img: fileserver + `/banners/live.webp`,
        desc: "Ya que es portátil y pudiendo usar hasta 2 micrófonos y una guitarra, permite realizar presentaciones en vivo en bares, celebraciones, espacios públicos, vía streaming... ¡donde quieras!",
      },
      {
        title: `¡Reproducí lo que sea!`,
        img: fileserver + `/banners/conectate2.webp`,
        desc: `Posee Radio, puerto USB, entrada Auxiliar y puerto para tarjetas TF/MicroSD.`,
      },
    ],
    shortDesc: `Sonido Robusto`,
    longDesc:
      "Está preparado para estar a la altura de tus fiestas. No te preocupes por su tamaño, llevalo a todos lados usando sus ruedas.",
    buyLink: ``,
    featuredFeatures: [
      { id: 2, value: `12000W PMPO` }, // Potencia
      { id: 3, value: `2 de 8"` }, // Woofer
      { id: 35, value: `1 de 2"` }, // Tweeter
      { id: 11 }, // TWS
      { id: 12 }, // Bluetooth
      { id: 36 }, // Ruedas y Caja de Madera
      { id: 14 }, // Micrófono Inalámbrico
      { id: 21 }, // Entrada Guitarra y Mic
      { id: 6 }, // Efectos de Luz
      { id: 25 }, // Radio FM
      { id: 8, value: `5 horas (según su uso)` }, // Duracion Batería
      { id: 37 }, // MicroSD y USB
    ],
    features: [
      { id: 3, value: `2 de 8"` },
      { id: 4, value: `1 de 2"` },
      { id: 2, value: "12000W PMPO" },
      { id: 10, value: "Interna Recargable 12V / 4.5Ah" },
      { id: 11, value: "5 horas (según su uso)" },
      { id: 20, value: "Si" },
      {
        id: 12,
        value: "En panel frontal alrededor del Woofer y en panel superior",
      },
      { id: 9, value: "Bluetooth v5.0" },
      { id: 13, value: "TWS, Radio FM, REC" },
      { id: 5, value: "Graves, Agudos y Eco de Micrófono" },
      { id: 7, value: "Si, 3" },
      { id: 8, value: "Micrófono, USB, MicroSD y Auxiliar" },
      { id: 1, value: "Si, inalámbrico" },
      { id: 14, value: "Madera" },
      { id: 15, value: "Ruedas / Empuñaduras de Transporte" },
      { id: 16, value: "31 x 83 x 31 cm" },
      { id: 17, value: "35,5 x 88 x 35,5 cm" },
      { id: 18, value: "13,75 Kg" },
      { id: 19, value: "7798111353957" },
    ],
    includes: [
      1, // Mic inalambrico
      8, // Control remoto negro
      3, // Cable Aux
      12, // Cable de alimentacion
      9, // Manual
    ],
    certNo: `Q-AR-01590-T-0`,
    downloads: `https://drive.google.com/drive/folders/1NCXXr0mqb4YUkrGyHsUpOJ5RYlsIL_2v`,
    variants: [`AW-T2008`, `AW-T2008-PB`],
  },
  { // AW-T2008-PB
    name: `Torre de Sonido Bluetooth Ring 13000W`,
    sku: `AW-T2008-PB`,
    link: `/productos/AW-T2008-PB`,
    line: `ring`,
    categories: [102],
    imgs: [
      `/products/AW-T2008-PB/img/1.webp`,
      `/products/AW-T2008-PB/img/2.webp`,
      `/products/AW-T2008-PB/img/3.webp`,
      `/products/AW-T2008-PB/img/4.webp`,
      `/products/AW-T2008-PB/img/5.webp`,
      `/products/AW-T2008-PB/img/6.webp`,
      `/products/AW-T2008-PB/img/7.webp`,
      `/products/AW-T2008-PB/img/8.webp`,
      `/products/AW-T2008-PB/img/9.webp`,
    ].map((e) => fileserver + e),
    top: true,
    360: true,
    gen: "2º Generación",
    banners: [
      {
        title: `Micrófono inalámbrico incluido`,
        img: fileserver + `/banners/microfono.webp`,
        desc: `¿Karaoke? ¡de una! Con el micrófono incluido podrás tener increíbles sesiones de Karaoke con tus amigos. ¡Que la fiesta no pare!`,
      },
      {
        title: `True Wireless Stereo`,
        img: fileserver + `/banners/tws.webp`,
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!`,
      },
      {
        title: `Power Bank`,
        img: fileserver + `/banners/powerbank.webp`,
        desc: `¡Cargá tu celular o tu dispositivo mientras escuchás música! Ahora podés escuchar tu música favorita, sin que se le agote la batería a tu celular en medio de la fiesta.`,
      },
      {
        title: `Ideal para fiestas y reuniones`,
        img: fileserver + `/banners/poolparty2008.webp`,
        desc: `Posee la potencia y autonomía suficiente para animar cualquier celebración, ¡además podés usarlo conectado y disfrutar por más tiempo!`,
      },
      {
        title: `Preparate para tocar`,
        img: fileserver + `/banners/live.webp`,
        desc: "Ya que es portátil y pudiendo usar hasta 2 micrófonos y una guitarra, permite realizar presentaciones en vivo en bares, celebraciones, espacios públicos, vía streaming... ¡donde quieras!",
      },
    ],
    shortDesc: `Sonido Robusto`,
    longDesc:
      "Está preparado para estar a la altura de tus fiestas. No te preocupes por su tamaño, llevalo a todos lados usando sus ruedas.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/torres-de-sonido/211-parlante-torre-bluetooth-ring-power-bank-aiwa-aw-t2008-pb.html`,
    featuredFeatures: [
      { id: 2, value: `13000W PMPO` }, // Potencia
      { id: 11 }, // TWS
      { id: 12 }, // Bluetooth
      { id: 13 }, // Power Bank
      { id: 14 }, // Micrófono Inalámbrico
      { id: 21 }, // Entrada Guitarra y mic
      { id: 38 }, // Entrada Micrófono
      { id: 17 }, // Entrada Auxiliar
      { id: 6 }, // Efectos de Luz
      { id: 7, value: `Interna Recargable 12V / 4.5Ah` },
      { id: 8, value: `5 horas (según su uso)` }, // Duracion Batería
      { id: 36 }, // Caja de Madera + ruedas
    ],
    features: [
      { id: 3, value: `2 de 8"` },
      { id: 4, value: `1 de 2"` },
      { id: 2, value: "13000W PMPO" },
      { id: 10, value: "Interna Recargable 12V / 4.5Ah" },
      { id: 11, value: "5 horas (según su uso)" },
      {
        id: 12,
        value: "En panel frontal alrededor del Woofer y en panel superior",
      },
      { id: 9, value: "Bluetooth v5.0" },
      { id: 13, value: "TWS, Power Bank (cargá tus dispositivos)" },
      { id: 5, value: "Graves, Agudos y Eco de Micrófono" },
      { id: 7, value: "Si, 3" },
      { id: 8, value: "Guitarra,  Micrófono y Auxiliar" },
      { id: 1, value: "Si, inalámbrico" },
      { id: 23, value: "De luces" },
      { id: 14, value: "Madera" },
      { id: 15, value: "Ruedas / Empuñaduras de Transporte" },
      { id: 16, value: "31 x 83 x 31 cm" },
      { id: 17, value: "35,5 x 88 x 35,5 cm" },
      { id: 18, value: "13,75 Kg" },
      { id: 19, value: "7798111354367" },
    ],
    includes: [
      1, // Mic inalambrico,
      3,
      12, // Cable de alimentacion
      9, // Manual
    ],
    certNo: `Q-AR-01590-T-0`,
    downloads: `https://drive.google.com/drive/folders/1CFO0ECLhRM5A4eT3pAoPxnhWlMJgyN95`,
    variants: [],
    videos: [
      {
        title: 'Presentacion 2008',
        youtubeId: 'l7nJWb8pC9o'
      }
    ]
  },
  { // AW-T2010
    name: `Torre de Sonido Bluetooth Ring 13500W`,
    sku: `AW-T2010`,
    link: `/productos/AW-T2010`,
    line: `ring`,
    categories: [110],
    imgs: [
      `/products/AW-T2010/img/1.webp`,
      `/products/AW-T2010/img/2.webp`,
      `/products/AW-T2010/img/3.webp`,
      `/products/AW-T2010/img/4.webp`,
      `/products/AW-T2010/img/5.webp`,
    ].map((e) => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [
      {
        title: `Micrófono inalámbrico incluido`,
        img: fileserver + `/banners/microfono.webp`,
        desc: `¿Karaoke? ¡de una! Con el micrófono incluido podrás tener increíbles sesiones de Karaoke con tus amigos. ¡Que la fiesta no pare!`,
      },
      {
        title: `True Wireless Stereo`,
        img: fileserver + `/banners/tws.webp`,
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!`,
      },
      {
        title: `Ideal para fiestas y reuniones`,
        img: fileserver + `/banners/poolparty2010.webp`,
        desc: `Posee la potencia y autonomía suficiente para animar cualquier celebración, ¡además podés usarlo conectado y disfrutar por más tiempo!`,
      },
      {
        title: `Preparate para tocar`,
        img: fileserver + `/banners/live.webp`,
        desc: "Ya que es portátil y pudiendo usar hasta 2 micrófonos y una guitarra, permite realizar presentaciones en vivo en bares, celebraciones, espacios públicos, vía streaming... ¡donde quieras!",
      },
      {
        title: `¡Reproducí lo que sea!`,
        img: fileserver + `/banners/conectate2.webp`,
        desc: `Posee Radio, puerto USB, entrada Auxiliar y puerto para tarjetas TF/MicroSD.`,
      },
    ],
    shortDesc: `Potencia y Calidad`,
    longDesc:
      "Con dos parlantes Woofer de 10 pulgadas cada uno y 13.500W de puro poder, vas a poder tirar tu casa por la ventana ¡Cuidado con las vibraciones!",
    buyLink: ``,
    featuredFeatures: [
      { id: 2, value: `13500W PMPO` }, // Potencia
      { id: 3, value: `2 de 10"` }, // Woofer
      { id: 35, value: `1 de 2"` }, // Tweeter
      { id: 11 }, // TWS
      { id: 12 }, // Bluetooth
      { id: 36 }, // Ruedas y Caja de Madera
      { id: 14 }, // Micrófono Inalámbrico
      { id: 21 }, // Entrada Guitarra y Mic
      { id: 6 }, // Efectos de Luz
      { id: 25 }, // Radio FM
      { id: 8, value: `6 horas (según su uso)` },  // Duracion Batería
      { id: 37 }, // MicroSD y USB
    ],
    features: [
      { id: 3, value: `2 de 10"` },
      { id: 4, value: `1 de 2"` },
      { id: 2, value: "13500W PMPO" },
      { id: 10, value: "Interna Recargable 12V / 7.5Ah" },
      { id: 11, value: "6 horas (según su uso)" },
      { id: 20, value: "Si" },
      { id: 12, value: "En panel frontal alrededor del Woofer y en panel superior" },
      { id: 9, value: "Bluetooth v5.0" },
      { id: 13, value: "TWS, Radio FM, REC" },
      { id: 5, value: "Graves, Agudos y Eco de Micrófono" },
      { id: 7, value: "Si, 3" },
      { id: 8, value: "Guitarra,  Micrófono, USB, MicroSD y Auxiliar" },
      { id: 1, value: "Si, inalámbrico" },
      { id: 14, value: "Madera" },
      { id: 15, value: "Ruedas / Empuñaduras de Transporte" },
      { id: 16, value: "31 x 108 x 31 cm" },
      { id: 17, value: "35,5 x 112 x 35,5 cm" },
      { id: 18, value: "15,5 Kg" },
      { id: 19, value: "7798111353964" },
    ],
    includes: [
      1, // Mic inalambrico
      8, // Control remoto negro
      3, // Cable aux
      12, // Cable de alimentacion
      9, // Manual y garantia
    ],
    certNo: `Q-AR-01590-T-0`,
    downloads: `https://drive.google.com/drive/folders/1cvmjEHaxFp8dlIgsqklkbW9HBPkGaWFQ`,
    variants: [`AW-T2010`, `AW-T2010-PB`],
    
  },
  { // AW-T2010-PB
    name: `Torre de Sonido Bluetooth Ring 14500W`,
    sku: `AW-T2010-PB`,
    link: `/productos/AW-T2010-PB`,
    line: `ring`,
    categories: [102],
    imgs: [
      `/products/AW-T2010-PB/img/1.webp`,
      `/products/AW-T2010-PB/img/2.webp`,
      `/products/AW-T2010-PB/img/3.webp`,
      `/products/AW-T2010-PB/img/4.webp`,
      `/products/AW-T2010-PB/img/5.webp`,
      `/products/AW-T2010-PB/img/6.webp`,
      `/products/AW-T2010-PB/img/7.webp`,
      `/products/AW-T2010-PB/img/8.webp`,
      `/products/AW-T2010-PB/img/9.webp`,
    ].map((e) => fileserver + e),
    top: true,
    360: true,
    gen: "2º Generación",
    banners: [
      {
        title: `Micrófono inalámbrico incluido`,
        img: fileserver + `/banners/microfono.webp`,
        desc: `¿Karaoke? ¡de una! Con el micrófono incluido podrás tener increíbles sesiones de Karaoke con tus amigos. ¡Que la fiesta no pare!`,
      },
      {
        title: `True Wireless Stereo`,
        img: fileserver + `/banners/tws.webp`,
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!`,
      },
      {
        title: `Power Bank`,
        img: fileserver + `/banners/powerbank.webp`,
        desc: `¡Cargá tu celular o tu dispositivo mientras escuchás música! Ahora podés escuchar tu música favorita, sin que se le agote la batería a tu celular en medio de la fiesta.`,
      },
      {
        title: `Ideal para fiestas y reuniones`,
        img: fileserver + `/banners/poolparty2010.webp`,
        desc: `Posee la potencia y autonomía suficiente para animar cualquier celebración, ¡además podés usarlo conectado y disfrutar por más tiempo!`,
      },
      {
        title: `Preparate para tocar`,
        img: fileserver + `/banners/live.webp`,
        desc: "Ya que es portátil y pudiendo usar hasta 2 micrófonos y una guitarra, permite realizar presentaciones en vivo en bares, celebraciones, espacios públicos, vía streaming... ¡donde quieras!",
      },
    ],
    shortDesc: `Potencia y Calidad`,
    longDesc:
      "Con dos parlantes Woofer de 10 pulgadas cada uno, vas a poder tirar tu casa por la ventana.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/torres-de-sonido/212-parlante-torre-bluetooth-ring-power-bank-aiwa-aw-t2010-pb.html`,
    
    featuredFeatures: [
      { id: 2, value: `14500W PMPO` }, // Potencia
      { id: 11 }, // TWS
      { id: 12 }, // Bluetooth
      { id: 13 }, // Power Bank
      { id: 14 }, // Micrófono Inalámbrico
      { id: 15 }, // Entrada Guitarra
      { id: 16 }, // Entrada Micrófono
      { id: 17 }, // Entrada Auxiliar
      { id: 6 }, // Efectos de Luz
      { id: 7, value: `Interna Recargable 12V / 7.5Ah` }, // Batería Recargable
      { id: 8, value: `6 horas (según su uso)` }, // Duracion Batería
      { id: 18 }, // Caja de Madera
    ],
    features: [
      { id: 3, value: `2 de 10"` },
      { id: 4, value: `1 de 2"` },
      { id: 2, value: "14500W PMPO" },
      { id: 10, value: "Interna Recargable 12V / 7.5Ah" },
      { id: 11, value: "6 horas (según su uso)" },
      { id: 12, value: "En panel frontal alrededor del Woofer y en panel superior" },
      { id: 9, value: "Bluetooth v5.0" },
      { id: 13, value: "TWS, Power Bank (Cargá tus dispositivos)" },
      { id: 5, value: "Graves, Agudos y Eco de Micrófono" },
      { id: 7, value: "Si, 3" },
      { id: 8, value: "Guitarra, Micrófono y Auxiliar" },
      { id: 1, value: "Si, inalámbrico" },
      { id: 23, value: "De luces" },
      { id: 14, value: "Madera" },
      { id: 15, value: "Ruedas / Empuñaduras de Transporte" },
      { id: 16, value: "31 x 108 x 31 cm" },
      { id: 17, value: "35,5 x 112 x 35,5 cm" },
      { id: 18, value: "15,5 Kg" },
      { id: 19, value: "7798111354374" },
    ],
    includes: [
      1, // Mic inalambrico
      3, // Cable aux
      12, // Cable de alimentacion
      9, // Manual y garantia
    ],
    certNo: `Q-AR-01590-T-0`,
    downloads: `https://drive.google.com/drive/folders/1Cemu-urtrh7h1eOF0ZXxn7vKxMVldKJv`,
    variants: [],
    videos: [
      {
        title: 'Presentacion 2010',
        youtubeId: 'Iwha5SdDhdc'
      }
    ]
  },
  { // AW-T2012
    name: `Torre de Sonido Bluetooth Ring 16000W`,
    sku: `AW-T2012`,
    link: `/productos/AW-T2012`,
    line: `ring`,
    categories: [102],
    imgs: [
      `/products/AW-T2012/img/1.webp`,
      `/products/AW-T2012/img/2.webp`,
      `/products/AW-T2012/img/3.webp`,
      `/products/AW-T2012/img/4.webp`,
      `/products/AW-T2012/img/5.webp`,
      `/products/AW-T2012/img/6.webp`,
      `/products/AW-T2012/img/7.webp`,
      `/products/AW-T2012/img/8.webp`,
      `/products/AW-T2012/img/9.webp`,
    ].map((e) => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [
      {
        title: `Micrófono inalámbrico incluido`,
        img: fileserver + `/banners/microfono.webp`,
        desc: `¿Karaoke? ¡de una! Con el micrófono incluido podrás tener increíbles sesiones de Karaoke con tus amigos. ¡Que la fiesta no pare!`,
      },
      {
        title: `True Wireless Stereo`,
        img: fileserver + `/banners/tws.webp`,
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!`,
      },
      {
        title: `Power Bank`,
        img: fileserver + `/banners/powerbank.webp`,
        desc: `¡Cargá tu celular o tu dispositivo mientras escuchás música! Ahora podés escuchar tu música favorita, sin que se le agote la batería a tu celular en medio de la fiesta.`,
      },
      {
        title: `Ideal para fiestas y reuniones`,
        img: fileserver + `/banners/fiestas2012.webp`,
        desc: `Posee la potencia y autonomía suficiente para animar cualquier celebración, ¡además podés usarlo conectado y disfrutar por más tiempo!`,
      },
      {
        title: `Preparate para tocar`,
        img: fileserver + `/banners/live.webp`,
        desc: "Ya que es portátil y pudiendo usar hasta 2 micrófonos y una guitarra, permite realizar presentaciones en vivo en   bares, celebraciones, espacios públicos, vía streaming... ¡donde quieras!",
      },
    ],
    shortDesc: `Sonido Colosal`,
    longDesc:
      "Caja con cuerpo de madera, 1,49 centímetros de altura. Una gran torre en todo sentido de la palabra. 16.000W de fuerza bruta, más que suficiente para cualquier escenario.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/torres-de-sonido/253-parlante-torre-bluetooth-ring-power-bank-aiwa-aw-t2012.html`,
    featuredFeatures: [
      { id: 2, value: `16000W PMPO` }, // Potencia
      { id: 11 }, // TWS
      { id: 12 }, // Bluetooth
      { id: 13 }, // Power Bank
      { id: 14 }, // Micrófono Inalámbrico
      { id: 15 }, // Entrada Guitarra
      { id: 16 }, // Entrada Micrófono
      { id: 17 }, // Entrada Auxiliar
      { id: 6 }, // Efectos de Luz
      { id: 7, value: `Interna Recargable 12V / 7.5Ah` }, // Batería Recargable
      { id: 8, value: `6 horas (según su uso)` }, // Duracion Batería
      { id: 18 }, // Caja de Madera
    ],
    features: [
      { id: 3, value: `3 de 10"` },
      { id: 4, value: `1 de 2"` },
      { id: 2, value: "16000W PMPO" },
      { id: 10, value: "Interna Recargable 12V / 7.5Ah" },
      { id: 11, value: "6 horas (según su uso)" },
      { id: 12, value: "En panel frontal alrededor del Woofer y en panel superior" },
      { id: 9, value: "Bluetooth v5.0" },
      { id: 13, value: "TWS, Power Bank" },
      { id: 5, value: "Graves, Agudos y Eco de Micrófono" },
      { id: 7, value: "Si"},
      { id: 8, value: "Guitarra,  Micrófono y Auxiliar" },
      { id: 1, value: "Si, inalámbrico" },
      { id: 23, value: "De luces" },
      { id: 14, value: "Madera" },
      { id: 15, value: "Ruedas / Empuñaduras de Transporte" },
      { id: 16,value: "31 x 149 x 31 cm" },
      { id: 17, value: "35,5 x 154 x 35,5 cm" },
      { id: 18, value: "20,7 Kg" },
      { id: 19, value: "7798111354442" },
    ],
    includes: [
      1, // Mic inalambrico
      3, // Cable aux
      12, // Cable de alimentacion
      9, // Manual y garantia
    ],
    certNo: `Q-AR-01590-T-0`,
    downloads: `https://drive.google.com/drive/folders/1LC8zxO0Wveyy-OQk7pDL8D1q80NvccJw`,
    variants: [],
    videos: [
      {
        title: 'Presentacion 2012',
        youtubeId: 'ojsKMgmxZ4A'
      }
    ]
  },
]