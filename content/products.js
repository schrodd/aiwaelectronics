const fileserver = `https://aiwaelectronics.com.ar/fileserver`

export const products = [
  //////////////// LINEA RING ////////////////

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
      `/products/AW-T2008/img/5.webp`
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [
      { title: `Micrófono inalámbrico incluido`, img: fileserver + `/banners/microfono.webp`,
        desc: `¿Karaoke? ¡de una! Con el micrófono incluido podrás tener increíbles sesiones de Karaoke con tus amigos. ¡Que la fiesta no pare!` },
      { title: `True Wireless Stereo`, img: fileserver + `/banners/tws.webp`,
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!` },
      { title: `Ideal para fiestas y reuniones`, img: fileserver + `/banners/poolparty2008.webp`,
        desc: `Posee la potencia y autonomía suficiente para animar cualquier celebración, ¡además podés usarlo conectado y disfrutar por más tiempo!` },
      { title: `Preparate para tocar`, img: fileserver + `/banners/live.webp`,
        desc: "Ya que es portátil y pudiendo usar hasta 2 micrófonos y una guitarra, permite realizar presentaciones en vivo en bares, celebraciones, espacios públicos, vía streaming... ¡donde quieras!" },
      { title: `¡Reproducí lo que sea!`, img: fileserver + `/banners/conectate2.webp`, 
        desc: `Posee Radio, puerto USB, entrada Auxiliar y puerto para tarjetas TF/MicroSD.` }
    ],
    shortDesc: `Sonido Robusto`,
    longDesc: "Está preparado para estar a la altura de tus fiestas. No te preocupes por su tamaño, llevalo a todos lados usando sus ruedas.",
    buyLink: ``,
     // obj array, each with props: id, title, link
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
      { id: 37 } // MicroSD y USB
    ],
    features: [
      { id: 3, value: `2 de 8"` },
      { id: 4, value: `1 de 2"` },
      { id: 2, value: "12000W PMPO" },
      { id: 10, value: "Interna Recargable 12V / 4.5Ah" },
      { id: 11, value: "5 horas (según su uso)" },
      { id: 20, value: "Si" },
      { id: 12, value: "En panel frontal alrededor del Woofer y en panel superior" },
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
    variants: [`AW-T2008`, `AW-T2008-PB`]
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
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "2º Generación",
    banners: [
      { title: `Micrófono inalámbrico incluido`, img: fileserver + `/banners/microfono.webp`,
        desc: `¿Karaoke? ¡de una! Con el micrófono incluido podrás tener increíbles sesiones de Karaoke con tus amigos. ¡Que la fiesta no pare!` },
      { title: `True Wireless Stereo`, img: fileserver + `/banners/tws.webp`,
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!` },
      { title: `Power Bank`, img: fileserver + `/banners/powerbank.webp`,
        desc: `¡Cargá tu celular o tu dispositivo mientras escuchás música! Ahora podés escuchar tu música favorita, sin que se le agote la batería a tu celular en medio de la fiesta.` },
      { title: `Ideal para fiestas y reuniones`, img: fileserver + `/banners/poolparty2008.webp`,
        desc: `Posee la potencia y autonomía suficiente para animar cualquier celebración, ¡además podés usarlo conectado y disfrutar por más tiempo!` },
      { title: `Preparate para tocar`, img: fileserver + `/banners/live.webp`,
        desc: "Ya que es portátil y pudiendo usar hasta 2 micrófonos y una guitarra, permite realizar presentaciones en vivo en bares, celebraciones, espacios públicos, vía streaming... ¡donde quieras!" },
    ],
    shortDesc: `Sonido Robusto`,
    longDesc: "Está preparado para estar a la altura de tus fiestas. No te preocupes por su tamaño, llevalo a todos lados usando sus ruedas.",
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
      { id: 36 } // Caja de Madera + ruedas
    ],
    features: [
      { id: 3, value: `2 de 8"` },
      { id: 4, value: `1 de 2"` },
      { id: 2, value: "13000W PMPO" },
      { id: 10, value: "Interna Recargable 12V / 4.5Ah" },
      { id: 11, value: "5 horas (según su uso)" },
      { id: 12, value: "En panel frontal alrededor del Woofer y en panel superior" },
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
      9 // Manual
    ],
    certNo: `Q-AR-01590-T-0`,
    downloads: `https://drive.google.com/drive/folders/1CFO0ECLhRM5A4eT3pAoPxnhWlMJgyN95`,
    variants: []
  },
  {// AW-T2010
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
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [
      { title: `Micrófono inalámbrico incluido`, img: fileserver + `/banners/microfono.webp`,
        desc: `¿Karaoke? ¡de una! Con el micrófono incluido podrás tener increíbles sesiones de Karaoke con tus amigos. ¡Que la fiesta no pare!` },
      { title: `True Wireless Stereo`, img: fileserver + `/banners/tws.webp`, 
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!` },
      { title: `Ideal para fiestas y reuniones`, img: fileserver + `/banners/poolparty2010.webp`,
        desc: `Posee la potencia y autonomía suficiente para animar cualquier celebración, ¡además podés usarlo conectado y disfrutar por más tiempo!` },
      { title: `Preparate para tocar`, img: fileserver + `/banners/live.webp`,
        desc: "Ya que es portátil y pudiendo usar hasta 2 micrófonos y una guitarra, permite realizar presentaciones en vivo en bares, celebraciones, espacios públicos, vía streaming... ¡donde quieras!" },
      { title: `¡Reproducí lo que sea!`, img: fileserver + `/banners/conectate2.webp`,
        desc: `Posee Radio, puerto USB, entrada Auxiliar y puerto para tarjetas TF/MicroSD.` }
    ],
    shortDesc: `Potencia y Calidad`,
    longDesc: "Con dos parlantes Woofer de 10 pulgadas cada uno, vas a poder tirar tu casa por la ventana.",
    buyLink: ``,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `13500W PMPO`
      },
      { // Woofer
        id: 3,
        value: `2 de 10"`
      },
      { // Tweeter
        id: 35,
        value: `1 de 2"`
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Ruedas y Caja de Madera
        id: 36,
      },
      { // Micrófono Inalámbrico 
        id: 14,
      },
      { // Entrada Guitarra y Mic
        id: 21,
      },
      { // Efectos de Luz
        id: 6,
      },
      /* { // Batería Recargable
        id: 7,
        value: `Interna Recargable 12V / 4.5Ah`
      }, */
      { // Radio FM
        id: 25,
      },
      { // Duracion Batería
        id: 8,
        value: `6 horas (según su uso)`
      },
      { // MicroSD y USB
        id: 37,
      }
    ],
    features: [
      {
        id: 3,
        value: `2 de 10"`,
      },
      {
        id: 4,
        value: `1 de 2"`,
      },
      {
        id: 2,
        value: "13500W PMPO",
      },
      {
        id: 10,
        value: "Interna Recargable 12V / 7.5Ah",
      },
      {
        id: 11,
        value: "6 horas (según su uso)",
      },
      {
        id: 20,
        value: "Si",
      },
      {
        id: 12,
        value: "En panel frontal alrededor del Woofer y en panel superior",
      },
      {
        id: 9,
        value: "Bluetooth v5.0",
      },
      {
        id: 13,
        value: "TWS, Radio FM, REC",
      },
      {
        id: 5,
        value: "Graves, Agudos y Eco de Micrófono",
      },
      {
        id: 7,
        value: "Si, 3",
      },
      {
        id: 8,
        value: "Guitarra,  Micrófono, USB, MicroSD y Auxiliar",
      },
      {
        id: 1,
        value: "Si, inalámbrico",
      },
      {
        id: 14,
        value: "Madera",
      },
      {
        id: 15,
        value: "Ruedas / Empuñaduras de Transporte",
      },
      {
        id: 16,
        value: "31 x 108 x 31 cm",
      },
      {
        id: 17,
        value: "35,5 x 112 x 35,5 cm",
      },
      {
        id: 18,
        value: "15,5 Kg",
      },
      {
        id: 19,
        value: "7798111353964",
      },
    ],
    includes: [
      1, // Mic inalambrico
      8, // Control remoto negro
      3, // Cable aux
      12, // Cable de alimentacion
      9 // Manual y garantia
    ],
    certNo: `Q-AR-01590-T-0`,
    downloads: `https://drive.google.com/drive/folders/1cvmjEHaxFp8dlIgsqklkbW9HBPkGaWFQ`,
    variants: [`AW-T2010`, `AW-T2010-PB`]
  },
  {// AW-T2010-PB
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
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "2º Generación",
    banners: [
      { title: `Micrófono inalámbrico incluido`, img: fileserver + `/banners/microfono.webp`,
        desc: `¿Karaoke? ¡de una! Con el micrófono incluido podrás tener increíbles sesiones de Karaoke con tus amigos. ¡Que la fiesta no pare!` },
      { title: `True Wireless Stereo`, img: fileserver + `/banners/tws.webp`,
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!` },
      { title: `Power Bank`, img: fileserver + `/banners/powerbank.webp`,
        desc: `¡Cargá tu celular o tu dispositivo mientras escuchás música! Ahora podés escuchar tu música favorita, sin que se le agote la batería a tu celular en medio de la fiesta.` },
      { title: `Ideal para fiestas y reuniones`, img: fileserver + `/banners/poolparty2010.webp`,
        desc: `Posee la potencia y autonomía suficiente para animar cualquier celebración, ¡además podés usarlo conectado y disfrutar por más tiempo!` },
      { title: `Preparate para tocar`, img: fileserver + `/banners/live.webp`,
        desc: "Ya que es portátil y pudiendo usar hasta 2 micrófonos y una guitarra, permite realizar presentaciones en vivo en bares, celebraciones, espacios públicos, vía streaming... ¡donde quieras!" }
    ],
    shortDesc: `Potencia y Calidad`,
    longDesc: "Con dos parlantes Woofer de 10 pulgadas cada uno, vas a poder tirar tu casa por la ventana.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/torres-de-sonido/212-parlante-torre-bluetooth-ring-power-bank-aiwa-aw-t2010-pb.html`,
    videos: [
      /* {
        id: 1,
        title: "Título del video",
        link: "https://www.youtube.com/embed/vN6Qwro1FPU",
      } */
    ],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `14500W PMPO`
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Power Bank
        id: 13,
      },
      { // Micrófono Inalámbrico 
        id: 14,
      },
      { // Entrada Guitarra
        id: 15,
      },
      { // Entrada Micrófono 
        id: 16,
      },
      { // Entrada Auxiliar
        id: 17,
      },
      { // Efectos de Luz
        id: 6,
      },
      { // Batería Recargable
        id: 7,
        value: `Interna Recargable 12V / 7.5Ah`
      },
      { // Duracion Batería
        id: 8,
        value: `6 horas (según su uso)`
      },
      { // Caja de Madera
        id: 18,
      } 
    ],
    features: [
      {
        id: 3,
        value: `2 de 10"`,
      },
      {
        id: 4,
        value: `1 de 2"`,
      },
      {
        id: 2,
        value: "14500W PMPO",
      },
      {
        id: 10,
        value: "Interna Recargable 12V / 7.5Ah",
      },
      {
        id: 11,
        value: "6 horas (según su uso)",
      },
      {
        id: 12,
        value: "En panel frontal alrededor del Woofer y en panel superior",
      },
      {
        id: 9,
        value: "Bluetooth v5.0",
      },
      {
        id: 13,
        value: "TWS, Power Bank (Cargá tus dispositivos)",
      },
      {
        id: 5,
        value: "Graves, Agudos y Eco de Micrófono",
      },
      {
        id: 7,
        value: "Si, 3",
      },
      {
        id: 8,
        value: "Guitarra, Micrófono y Auxiliar",
      },
      {
        id: 1,
        value: "Si, inalámbrico",
      },
      {
        id: 23,
        value: "De luces",
      },
      {
        id: 14,
        value: "Madera",
      },
      {
        id: 15,
        value: "Ruedas / Empuñaduras de Transporte",
      },
      {
        id: 16,
        value: "31 x 108 x 31 cm",
      },
      {
        id: 17,
        value: "35,5 x 112 x 35,5 cm",
      },
      {
        id: 18,
        value: "15,5 Kg",
      },
      {
        id: 19,
        value: "7798111354374",
      },
    ],
    includes: [
      1, // Mic inalambrico
      3, // Cable aux
      12, // Cable de alimentacion
      9 // Manual y garantia
    ],
    certNo: `Q-AR-01590-T-0`,
    downloads: `https://drive.google.com/drive/folders/1Cemu-urtrh7h1eOF0ZXxn7vKxMVldKJv`,
    variants: []
  },
  {// AW-T2012
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
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [
      { title: `Micrófono inalámbrico incluido`, img: fileserver + `/banners/microfono.webp`, 
        desc: `¿Karaoke? ¡de una! Con el micrófono incluido podrás tener increíbles sesiones de Karaoke con tus amigos. ¡Que la fiesta no pare!` },
      { title: `True Wireless Stereo`, img: fileserver + `/banners/tws.webp`,
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!` },
      { title: `Power Bank`, img: fileserver + `/banners/powerbank.webp`,
        desc: `¡Cargá tu celular o tu dispositivo mientras escuchás música! Ahora podés escuchar tu música favorita, sin que se le agote la batería a tu celular en medio de la fiesta.` },
      { title: `Ideal para fiestas y reuniones`, img: fileserver + `/banners/fiestas2012.webp`,
        desc: `Posee la potencia y autonomía suficiente para animar cualquier celebración, ¡además podés usarlo conectado y disfrutar por más tiempo!` },
      { title: `Preparate para tocar`, img: fileserver + `/banners/live.webp`,
        desc: "Ya que es portátil y pudiendo usar hasta 2 micrófonos y una guitarra, permite realizar presentaciones en vivo en   bares, celebraciones, espacios públicos, vía streaming... ¡donde quieras!" }
    ],
    shortDesc: `Sonido Colosal`,
    longDesc: "Caja con cuerpo de madera, 1,49 centímetros de altura. Una gran torre en todo sentido de la palabra.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/torres-de-sonido/253-parlante-torre-bluetooth-ring-power-bank-aiwa-aw-t2012.html`,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `16000W PMPO`
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Power Bank
        id: 13,
      },
      { // Micrófono Inalámbrico 
        id: 14,
      },
      { // Entrada Guitarra
        id: 15,
      },
      { // Entrada Micrófono 
        id: 16,
      },
      { // Entrada Auxiliar
        id: 17,
      },
      { // Efectos de Luz
        id: 6,
      },
      { // Batería Recargable
        id: 7,
        value: `Interna Recargable 12V / 7.5Ah`
      },
      { // Duracion Batería
        id: 8,
        value: `6 horas (según su uso)`
      },
      { // Caja de Madera
        id: 18,
      } 
    ],
    features: [
      {
        id: 3,
        value: `3 de 10"`,
      },
      {
        id: 4,
        value: `1 de 2"`,
      },
      {
        id: 2,
        value: "16000W PMPO",
      },
      {
        id: 10,
        value: "Interna Recargable 12V / 7.5Ah",
      },
      {
        id: 11,
        value: "6 horas (según su uso)",
      },
      {
        id: 12,
        value: "En panel frontal alrededor del Woofer y en panel superior",
      },
      {
        id: 9,
        value: "Bluetooth v5.0",
      },
      {
        id: 13,
        value: "TWS, Power Bank",
      },
      {
        id: 5,
        value: "Graves, Agudos y Eco de Micrófono",
      },
      {
        id: 7,
        value: "Si",
      },
      {
        id: 8,
        value: "Guitarra,  Micrófono y Auxiliar",
      },
      {
        id: 1,
        value: "Si, inalámbrico",
      },
      {
        id: 23,
        value: "De luces",
      },
      {
        id: 14,
        value: "Madera",
      },
      {
        id: 15,
        value: "Ruedas / Empuñaduras de Transporte",
      },
      {
        id: 16,
        value: "31 x 149 x 31 cm",
      },
      {
        id: 17,
        value: "35,5 x 154 x 35,5 cm",
      },
      {
        id: 18,
        value: "20,7 Kg",
      },
      {
        id: 19,
        value: "7798111354442",
      },
    ],
    includes: [
      1, // Mic inalambrico
      3, // Cable aux
      12, // Cable de alimentacion
      9 // Manual y garantia
    ],
    certNo: `Q-AR-01590-T-0`,
    downloads: `https://drive.google.com/drive/folders/1LC8zxO0Wveyy-OQk7pDL8D1q80NvccJw`,
    variants: []
  },

  /////////////// LINEA PARTY ////////////////

  {// AW-P240D
    name: `Parlante Portátil Bluetooth Party 2500W`,
    sku: `AW-P240D`,
    link: `/productos/AW-P240D`,
    line: `party`,
    categories: [110], 
    imgs: [
      `/products/AW-P240D/img/7.webp`,
      `/products/AW-P240D/img/8.webp`,
      `/products/AW-P240D/img/9.webp`,
      `/products/AW-P240D/img/4.webp`,
      `/products/AW-P240D/img/5.webp`,
      `/products/AW-P240D/img/6.webp`,
      `/products/AW-P240D/img/1.webp`,
      `/products/AW-P240D/img/2.webp`,
      `/products/AW-P240D/img/3.webp`,
    ].map(e => fileserver + e),
    360: false,
    gen: "1º Generación",
    banners: [
      { title: `¡Reproducí lo que sea!`, img: fileserver + `/banners/panel240sa.webp`,
        desc: `Posee Radio, puerto USB, entrada Auxiliar y puerto para tarjetas TF/MicroSD.` },
      { title: `Micrófono incluido`, img: fileserver + `/banners/microfonocable.webp`,
        desc: `¿Karaoke? ¡de una! Con el micrófono incluido podrás tener increíbles sesiones de Karaoke con tus amigos. ¡Que la fiesta no pare!` },
      { title: `True Wireless Stereo`, img: fileserver + `/banners/tws240.webp`, 
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno` },
      { title: `¡Llevalo a todos lados!`, img: fileserver + `/banners/portatil240.webp`,
        desc: `Posee batería interna, por lo que podrás escuchar música donde quiera que vayas.` },
      { title: `Control remoto incluido`, img: fileserver + `/banners/control.webp`, 
        desc: `Pasá tus canciones o controlá el volumen desde la distancia con el control remoto incluido.` }
    ],
    shortDesc: `Musicalizá tu día`,
    longDesc: "Debido a su gran portabilidad y liviano peso, este parlante es un compañero de viajes, de rutas, y de estudio ideal. Transformá los momentos cotidianos en una ocasión especial",
    buyLink: ``,
    videos: [
      {
        id: 1,
        title: "Título del video",
        link: "https://www.youtube.com/embed/4IN_K5HtEOI",
      }
    ],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `2500W PMPO`
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: `1 de 8"`
      },
      { // Entrada Micrófono 
        id: 16,
      },
      { // Entrada Auxiliar
        id: 17,
      },
      { // Luces LED
        id: 20,
      },
      { // Duración de batería
        id: 8,
        value: `3 horas a máximo volumen`
      },
      { // USB
        id: 33
      },
      { // TF
        id: 26
      },
      { // Radio
        id: 25
      },
      { // Reg Eco
        id: 23
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `1 de 8"`,
      },
      { // Tweeters
        id: 4,
        value: `No`,
      },
      { // Potencia
        id: 2,
        value: "2500W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 3.7V / 1800mAh",
      },
      { // Duración de batería
        id: 11,
        value: "3 horas (máximo volumen)",
      },
      { // Luces
        id: 12,
        value: "RGB en woofer (ON/OFF)",
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth",
      },
      { // Funciones
        id: 13,
        value: "TWS, Radio FM",
      },
      { // Reguladores
        id: 5,
        value: "Volumen y Eco de Micrófono",
      },
      { // Entradas
        id: 8,
        value: "Micrófono, USB, MicroSD y Auxiliar",
      },
      { // Micrófono
        id: 1,
        value: "Si, con cable",
      },
      { // Radio FM
        id: 20,
        value: "Si",
      },
      { // Otras características
        id: 15,
        value: "Empuñadura de Transporte",
      },
      { // Medidas del producto
        id: 16,
        value: "25 x 36 x 19 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "26 x 38 x 21 cm",
      },
      { // Peso
        id: 18,
        value: "2 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111353308",
      },
    ],
    includes: [
      2, // Mic c/cable
      7, // Control remoto
      3, // Cable aux
      4, // Cable microusb
      9, // Manual de usuario
    ],
    downloads: `https://drive.google.com/drive/folders/1SkL0B6U6qEuWoQbGNK2aL4IVoeNyAE7R`,
    variants: [`AW-P240D`, `AW-P240D-SA`,`AW-P240D-SN`]
  },
  {// AW-P240D-SA
    name: `Parlante Portátil Bluetooth Party 2500W`,
    sku: `AW-P240D-SA`,
    link: `/productos/AW-P240D-SA`,
    line: `party`,
    categories: [110], 
    imgs: [
      `/products/AW-P240D-SA/img/1.webp`,
      `/products/AW-P240D-SA/img/2.webp`,
      `/products/AW-P240D-SA/img/3.webp`,
      `/products/AW-P240D-SA/img/4.webp`,
      `/products/AW-P240D-SA/img/5.webp`,
      `/products/AW-P240D-SA/img/6.webp`,
      `/products/AW-P240D-SA/img/7.webp`,
      `/products/AW-P240D-SA/img/8.webp`,
    ].map(e => fileserver + e),
    360: false,
    gen: "2º Generación",
    banners: [
      { title: `¡Reproducí lo que sea!`, img: fileserver + `/banners/panel240sa.webp`,
        desc: `Posee Radio, puerto USB, entrada Auxiliar y puerto para tarjetas TF/MicroSD.` },
      { title: `True Wireless Stereo`, img: fileserver + `/banners/tws240.webp`, 
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!` },
      { title: `Reguladores independientes`, img: fileserver + `/banners/reguladores450sa.webp`, 
        desc: `Regulá de forma independiente el volumen y eco del micrófono.` },
      { title: `¡Llevalo a todos lados!`, img: fileserver + `/banners/portatil240.webp`, 
        desc: `Posee batería interna, por lo que podrás escuchar música donde quiera que vayas.` }
    ],
    shortDesc: `Musicalizá tu día`,
    longDesc: "Debido a su gran portabilidad y liviano peso, este parlante es un compañero de viajes, de rutas, y de estudio ideal. Transformá los momentos cotidianos en una ocasión especial",
    buyLink: ``,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `2500W PMPO`
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: `1 de 8"`
      },
      { // Entrada Micrófono 
        id: 16,
      },
      { // Entrada Auxiliar
        id: 17,
      },
      { // Luces LED
        id: 20,
      },
      { // Duración de batería
        id: 8,
        value: `3 horas a máximo volumen`
      },
      { // USB
        id: 33
      },
      { // TF
        id: 26
      },
      { // Radio
        id: 25
      },
      { // Reg Eco
        id: 23
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `1 de 8"`,
      },
      { // Tweeters
        id: 4,
        value: `No`,
      },
      { // Potencia
        id: 2,
        value: "2500W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 3.7V / 1800mAh",
      },
      { // Duración de batería
        id: 11,
        value: "3 horas (máximo volumen)",
      },
      { // Luces
        id: 12,
        value: "RGB en woofer (ON/OFF)",
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth",
      },
      { // Funciones
        id: 13,
        value: "TWS, Radio FM",
      },
      { // Reguladores
        id: 5,
        value: "Volumen y Eco de Micrófono",
      },
      { // Entradas
        id: 8,
        value: "Micrófono, USB, MicroSD y Auxiliar",
      },
      { // Micrófono
        id: 1,
        value: "No",
      },
      { // Radio
        id: 20,
        value: "Si",
      },
      { // Otras características
        id: 15,
        value: "Empuñadura de Transporte",
      },
      { // Medidas del producto
        id: 16,
        value: "25 x 36 x 19 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "26 x 38 x 21 cm",
      },
      { // Peso
        id: 18,
        value: "2 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111354084",
      },
    ],
    includes: [
      3, // Cable aux
      4, // Cable microusb
      9, // Manual de usuario
    ],
    downloads: `https://drive.google.com/drive/folders/1-UQ3H-GaeaCwa56k3rGV0KSMxKdPQmI_`,
    variants: [`AW-P240D`,`AW-P240D-SA`,`AW-P240D-SN`]
  },
  {// AW-P240D-SN
    name: `Parlante Portátil Bluetooth Party 2500W`,
    sku: `AW-P240D-SN`,
    link: `/productos/AW-P240D-SN`,
    line: `party`,
    categories: [101], 
    imgs: [
      `/products/AW-P240D-SN/img/1.webp`,
      `/products/AW-P240D-SN/img/2.webp`,
      `/products/AW-P240D-SN/img/3.webp`,
      `/products/AW-P240D-SN/img/4.webp`,
      `/products/AW-P240D-SN/img/5.webp`,
      `/products/AW-P240D-SN/img/6.webp`,
      `/products/AW-P240D-SN/img/7.webp`,
      `/products/AW-P240D-SN/img/8.webp`,
      `/products/AW-P240D-SN/img/9.webp`,
    ].map(e => fileserver + e),
    360: true,
    gen: "3º Generación",
    banners: [
      { title: `Reguladores independientes`, img: fileserver + `/banners/reguladores450sn.webp`, 
        desc: `Regulá de forma independiente el volumen y eco del micrófono.` },
      { title: `True Wireless Stereo`, img: fileserver + `/banners/tws240.webp`,
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!` },
      { title: `¡Llevalo a todos lados!`, img: fileserver + `/banners/portatil240.webp`,
        desc: `Posee batería interna, por lo que podrás escuchar música donde quiera que vayas.` },
      { title: `Entrada para micrófono`, img: fileserver + `/banners/microfonocable.webp`,
        desc: `¿Karaoke? ¡de una! Gracias a su entrada para micrófono podés conectar uno y cantar con tus amigos toda la noche. ¡Que la fiesta no pare!` }
    ],
    shortDesc: `Musicalizá tu día`,
    longDesc: "Debido a su gran portabilidad y liviano peso, este parlante es un compañero de viajes, de rutas, y de estudio ideal. Transformá los momentos cotidianos en una ocasión especial",
    buyLink: `https://tienda.aiwaelectronics.com.ar/parlantes-portatiles/331-parlante-bluetooth-portatil-2500w-aiwa-aw-p240d-sn.html`,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `2500W PMPO`
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: `1 de 8"`
      },
      { // Entrada Micrófono 
        id: 16,
      },
      { // Entrada Auxiliar
        id: 17,
      },
      { // Luces LED
        id: 20,
      },
      { // Duración de batería
        id: 8,
        value: `3 horas a máximo volumen`
      },
      {
        id: 28
      },
      {
        id: 30
      },
      {
        id: 5
      },
      {
        id: 7,
        value: "de 3.7V / 1800mAh"
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `1 de 8"`,
      },
      { // Tweeters
        id: 4,
        value: `No`,
      },
      { // Potencia
        id: 2,
        value: "2500W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 3.7V / 1800mAh",
      },
      { // Duración de batería
        id: 11,
        value: "3 horas (máximo volumen)",
      },
      { // Luces
        id: 12,
        value: "RGB en woofer (ON/OFF)",
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth",
      },
      { // Funciones
        id: 13,
        value: "TWS",
      },
      { // Reguladores
        id: 5,
        value: "Volumen y Eco de Micrófono",
      },
      { // Entradas
        id: 8,
        value: "Micrófono y Auxiliar",
      },
      { // Micrófono
        id: 1,
        value: "No",
      },
      { // Radio FM
        id: 20,
        value: "No",
      },
      { // Otras características
        id: 15,
        value: "Empuñadura de Transporte",
      },
      { // Medidas del producto
        id: 16,
        value: "25 x 36 x 19 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "26 x 38 x 21 cm",
      },
      { // Peso
        id: 18,
        value: "2 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111354299",
      },
    ],
    includes: [
      3, // Cable aux
      4, // Cable microusb
      9, // Manual de usuario
    ],
    downloads: `https://drive.google.com/drive/folders/1AkUOXIGyh1tLjEGlNq2iN2CHEIodiBFY`,
    variants: []
  },
  {// AW-P450D
    name: `Parlante Portátil Bluetooth Party 4500W`,
    sku: `AW-P450D`,
    link: `/productos/AW-P450D`,
    line: `party`,
    categories: [110], 
    imgs: [
      `/products/AW-P450D/img/1.webp`,
      `/products/AW-P450D/img/2.webp`,
      `/products/AW-P450D/img/4.webp`,
      `/products/AW-P450D/img/6.webp`,
      `/products/AW-P450D/img/7.webp`,
      `/products/AW-P450D/img/8.webp`,
      `/products/AW-P450D/img/9.webp`,
      `/products/AW-P450D/img/5.webp`,
    ].map(e => fileserver + e),
    360: false,
    gen: "1º Generación",
    banners: [
      { title: `¡Reproducí lo que sea!`, img: fileserver + `/banners/panel450sa.webp`,
        desc: `Posee Radio, puerto USB, entrada Auxiliar y puerto para tarjetas TF/MicroSD.` },
      { title: `Micrófono incluido`, img: fileserver + `/banners/microfonocable.webp`,
        desc: `¿Karaoke? ¡de una! Con el micrófono incluido podrás tener increíbles sesiones de Karaoke con tus amigos. ¡Que la fiesta no pare!` },
      { title: `Reguladores independientes`, img: fileserver + `/banners/reguladores450sa.webp`,
        desc: `Regulá de forma independiente el volumen y eco del micrófono.` },
      { title: `True Wireless Stereo`, img: fileserver + `/banners/tws450.webp`,
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!` },
      { title: `Control remoto incluido`, img: fileserver + `/banners/control.webp`,
        desc: `Pasá tus canciones o controlá el volumen desde la distancia con el control remoto incluido.` }
    ],
    shortDesc: `Tu compañía indispensable`,
    longDesc: "A donde vayas, lo llevas para que tu música preferida suene en alta fidelidad.",
    buyLink: ``,
    videos: [
      {
        id: 1,
        title: "Título del video",
        link: "https://www.youtube.com/embed/3lIKM_uQuqk",
      }
    ],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `4500W PMPO`
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: `2 de 6.5"`
      },
      { // Entrada Micrófono 
        id: 16,
      },
      { // Entrada Auxiliar
        id: 17,
      },
      { // Luces LED
        id: 20,
      },
      { // Duración de batería
        id: 8,
        value: `3 horas a máximo volumen`
      },
      { // USB
        id: 33
      },
      { // TF
        id: 26
      },
      { // Radio
        id: 25
      },
      { // Reg Eco
        id: 23
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `2 de 6,5"`,
      },
      { // Tweeters
        id: 4,
        value: `No`,
      },
      { // Potencia
        id: 2,
        value: "4500W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 3.7V / 1800mAh",
      },
      { // Duración de batería
        id: 11,
        value: "3 horas (máximo volumen)",
      },
      { // Luces
        id: 12,
        value: "RGB en woofer (ON/OFF)",
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth",
      },
      { // Funciones
        id: 13,
        value: "TWS, Radio FM",
      },
      { // Reguladores
        id: 5,
        value: "Volumen y Eco de Micrófono",
      },
      { // Entradas
        id: 8,
        value: "Micrófono, USB, MicroSD y Auxiliar",
      },
      { // Micrófono
        id: 1,
        value: "Si, con cable",
      },
      { // Radio
        id: 20,
        value: "Si",
      },
      { // Otras características
        id: 15,
        value: "Empuñadura de Transporte y Ranura para Trípode",
      },
      { // Medidas del producto
        id: 16,
        value: "23 x 39 x 21 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "25 x 42 x 24 cm",
      },
      { // Peso
        id: 18,
        value: "3 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111353292",
      },
    ],
    includes: [
      2, // Mic c/cable
      7, // Control remoto
      3, // Cable aux
      4, // Cable microusb
      9, // Manual de usuario
    ],
    downloads: `https://drive.google.com/drive/folders/11HuAZNrU_0t1Ri1lf79m_4gef_ICWMbR`,
    variants: [`AW-P450D`, `AW-P450D-SA`, `AW-P450D-SN`]
  },
  {// AW-P450D-SA
    name: `Parlante Portátil Bluetooth Party 4500W`,
    sku: `AW-P450D-SA`,
    link: `/productos/AW-P450D-SA`,
    line: `party`,
    categories: [110], 
    imgs: [
      `/products/AW-P450D-SA/img/1.webp`,
      `/products/AW-P450D-SA/img/2.webp`,
      `/products/AW-P450D-SA/img/4.webp`,
      `/products/AW-P450D-SN/img/5.webp`,
      `/products/AW-P450D-SA/img/6.webp`,
      `/products/AW-P450D-SA/img/7.webp`,
      `/products/AW-P450D-SA/img/8.webp`,
      `/products/AW-P450D-SA/img/9.webp`,
    ].map(e => fileserver + e),
    360: false,
    gen: "2º Generación",
    banners: [
      { title: `¡Reproducí lo que sea!`, img: fileserver + `/banners/panel450sa.webp`,
        desc: `Posee Radio, puerto USB, entrada Auxiliar y puerto para tarjetas TF/MicroSD.` },
      { title: `True Wireless Stereo`, img: fileserver + `/banners/tws450.webp`, 
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!` },
      { title: `Reguladores independientes`, img: fileserver + `/banners/reguladores450sa.webp`,
        desc: `Regulá de forma independiente el volumen y eco del micrófono.` },
      { title: `¡Llevalo a todos lados!`, img: fileserver + `/banners/bar450.webp`,
        desc: `Posee batería interna, por lo que podrás escuchar música donde quiera que vayas.` }
    ],
    shortDesc: `Tu compañía indispensable`,
    longDesc: "A donde vayas, lo llevas para que tu música preferida suene en alta fidelidad.",
    buyLink: ``,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `4500W PMPO`
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: `2 de 6.5"`
      },
      { // Entrada Micrófono 
        id: 16,
      },
      { // Entrada Auxiliar
        id: 17,
      },
      { // Luces LED
        id: 20,
      },
      { // Duración de batería
        id: 8,
        value: `3 horas a máximo volumen`
      },
      { // USB
        id: 33
      },
      { // TF
        id: 26
      },
      { // Radio
        id: 25
      },
      { // Reg Eco
        id: 23
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `2 de 6,5"`,
      },
      { // Tweeters
        id: 4,
        value: `No`,
      },
      { // Potencia
        id: 2,
        value: "4500W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 3.7V / 1800mAh",
      },
      { // Duración de batería
        id: 11,
        value: "3 horas (máximo volumen)",
      },
      { // Luces
        id: 12,
        value: "RGB en woofer (ON/OFF)",
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth",
      },
      { // Funciones
        id: 13,
        value: "TWS, Radio FM",
      },
      { // Reguladores
        id: 5,
        value: "Volumen y Eco de Micrófono",
      },
      { // Entradas
        id: 8,
        value: "Micrófono, USB, MicroSD y Auxiliar",
      },
      { // Micrófono
        id: 1,
        value: "No",
      },
      { // Radio
        id: 20,
        value: "Si",
      },
      { // Otras características
        id: 15,
        value: "Empuñadura de Transporte y Ranura para Trípode",
      },
      { // Medidas del producto
        id: 16,
        value: "23 x 39 x 21 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "25 x 42 x 24 cm",
      },
      { // Peso
        id: 18,
        value: "3 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111354206",
      },
    ],
    includes: [
      3, // Cable aux
      4, // Cable microusb
      9, // Manual de usuario
    ],
    downloads: `https://drive.google.com/drive/folders/126X1HtcyfECqgoFRFaqpEV94gAZ2c4Xc`,
    variants: [`AW-P450D`, `AW-P450D-SA`, `AW-P450D-SN`]
  },
  {// AW-P450D-SN
    name: `Parlante Portátil Bluetooth Party 4500W`,
    sku: `AW-P450D-SN`,
    link: `/productos/AW-P450D-SN`,
    line: `party`,
    categories: [101], 
    imgs: [
      `/products/AW-P450D-SN/img/1.webp`,
      `/products/AW-P450D-SN/img/2.webp`,
      `/products/AW-P450D-SN/img/3.webp`,
      `/products/AW-P450D-SN/img/4.webp`,
      `/products/AW-P450D-SN/img/5.webp`,
      `/products/AW-P450D-SN/img/6.webp`,
      `/products/AW-P450D-SN/img/7.webp`,
      `/products/AW-P450D-SN/img/8.webp`,
    ].map(e => fileserver + e),
    360: true,
    gen: "3º Generación",
    banners: [
      { title: `Reguladores independientes`, img: fileserver + `/banners/reguladores450.webp`,
        desc: `Regulá de forma independiente el volumen y eco del micrófono.` },
      { title: `True Wireless Stereo`, img: fileserver + `/banners/tws450.webp`,
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!` },
      { title: `¡Llevalo a todos lados!`, img: fileserver + `/banners/bar450.webp`,
        desc: `Posee batería interna, por lo que podrás escuchar música donde quiera que vayas.` },
      { title: `Entrada para micrófono`, img: fileserver + `/banners/karaoke450.webp`,
        desc: `¿Karaoke? ¡de una! Gracias a su entrada para micrófono podés conectar uno y cantar con tus amigos toda la noche. ¡Que la fiesta no pare!` }
    ],
    shortDesc: `Tu compañía indispensable`,
    longDesc: "A donde vayas, lo llevas para que tu música preferida suene en alta fidelidad.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/torres-de-sonido/252-parlante-portatil-bluetooth-aiwa-aw-p450d-sn.html`,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `4500W PMPO`
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: `2 de 6.5"`
      },
      { // Entrada Micrófono 
        id: 16,
      },
      { // Entrada Auxiliar
        id: 17,
      },
      { // Luces LED
        id: 20,
      },
      { // Duración de batería
        id: 8,
        value: `3 horas a máximo volumen`
      },
      {
        id: 28
      },
      {
        id: 30
      },
      {
        id: 5
      },
      {
        id: 7,
        value: "de 3.7V / 1800mAh"
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `2 de 6,5"`,
      },
      { // Tweeters
        id: 4,
        value: `No`,
      },
      { // Potencia
        id: 2,
        value: "4500W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 3.7V / 1800mAh",
      },
      { // Duración de batería
        id: 11,
        value: "3 horas (máximo volumen)",
      },
      { // Luces
        id: 12,
        value: "RGB en woofer (ON/OFF)",
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth",
      },
      { // Funciones
        id: 13,
        value: "TWS",
      },
      { // Reguladores
        id: 5,
        value: "Volumen y Eco de Micrófono",
      },
      { // Entradas
        id: 8,
        value: "Micrófono y Auxiliar",
      },
      { // Micrófono
        id: 1,
        value: "No",
      },
      { // Radio
        id: 20,
        value: "No",
      },
      { // Otras características
        id: 15,
        value: "Empuñadura de Transporte y Ranura para Trípode",
      },
      { // Medidas del producto
        id: 16,
        value: "23 x 39 x 21 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "25 x 42 x 24 cm",
      },
      { // Peso
        id: 18,
        value: "3 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111354305",
      },
    ],
    includes: [
      3, // Cable aux
      4, // Cable microusb
      9, // Manual de usuario
    ],
    downloads: `https://drive.google.com/drive/folders/1TxmR_vMk0uC10q29mnngRGS8rRKmRTBe`,
    variants: []
  },
  {// AW-T451D
    name: `Torre de Sonido Portátil Bluetooth Party 4500W`,
    sku: `AW-T451D`,
    link: `/productos/AW-T451D`,
    line: `party`,
    categories: [110], 
    imgs: [
      `/products/AW-T451D/img/1.webp`,
      `/products/AW-T451D/img/2.webp`,
      `/products/AW-T451D/img/3.webp`,
      `/products/AW-T451D/img/4.webp`,
      `/products/AW-T451D/img/5.webp`,
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [
      { title: `¡Reproducí lo que sea!`, img: fileserver + `/banners/panel451.webp`,
        desc: 'Posee Radio, puerto USB, entrada Auxiliar y puerto para tarjetas TF/MicroSD.' },
      { title: 'Micrófono incluido', img: fileserver + `/banners/microfonocable.webp`,
        desc: '¿Karaoke? ¡de una! Con el micrófono incluido podrás tener increíbles sesiones de Karaoke con tus amigos. ¡Que la fiesta no pare!' },
      { title: 'True Wireless Stereo', img: fileserver + `/banners/tws600.webp`,
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!` },
      { title: `¡Llevalo a todos lados!`, img: fileserver + `/banners/portatil451.webp`,
        desc: 'Posee batería interna, por lo que podrás escuchar música donde quiera que vayas.' },
      { title: `Accesorios incluidos`, img: fileserver + '/banners/micycontrol.webp',
        desc: '¡Armá tu Karaoke! Incluye micrófono con cable, y control remoto para que puedas gestionar tu música a distancia.' },
      { title: `No te quedes sin batería`, img: fileserver + '/banners/carga451.webp',
        desc: 'Podés usar el cable MicroUSB incluido con el adaptador de tu celular para cargarlo fácilmente.' },
    ],
    shortDesc: `La potencia que estabas esperando`,
    longDesc: "Esta torre fue diseñada para lograr la mejor relación entre potencia y tamaño. Liviana, y de fácil uso, sus múltiples modos de conexión la convierten en una opción muy práctica cuando se trata de poner ritmo y alegría a tus fiestas.",
    buyLink: ``,
    videos: [
      {
        id: 1,
        title: "Título del video",
        link: "https://www.youtube.com/embed/lEUuZtKHCUI",
      },
    ],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `4500W PMPO`
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: `2 de 6.5"`
      },
      { // Entrada Micrófono 
        id: 16,
      },
      { // Entrada Auxiliar
        id: 17,
      },
      { // Luces LED
        id: 20,
      },
      { // Duración de batería
        id: 8,
        value: `3 horas a máximo volumen`
      },
      { // Mobile Holder
        id: 29,
      },
      { // Radio.
        id: 25,
      },
      { // Batería
        id: 7,
        value: "3.7V / 1800mAh"
      },
      { // USB + TF
        id: 37
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `2 de 6,5"`,
      },
      { // Tweeters
        id: 4,
        value: `No`,
      },
      { // Potencia
        id: 2,
        value: "4500W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 3.7V / 1800mAh",
      },
      { // Duración de batería
        id: 11,
        value: "3 horas (máximo volumen)",
      },
      { // Luces
        id: 12,
        value: "RGB en woofer (ON/OFF)",
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth",
      },
      { // Funciones
        id: 13,
        value: "TWS, Radio FM",
      },
      { // Reguladores
        id: 5,
        value: "Volumen y Eco de Micrófono",
      },
      { // Entradas
        id: 8,
        value: "Micrófono, USB, MicroSD y Auxiliar",
      },
      { // Micrófono
        id: 1,
        value: "Si, con cable",
      },
      { // Radio FM
        id: 20,
        value: "Si",
      },
      { // Otras características
        id: 15,
        value: "Empuñadura de Transporte, Mobile Holder",
      },
      { // Medidas del producto
        id: 16,
        value: "21 x 58 x 21 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "26 x 63 x 26 cm",
      },
      { // Peso
        id: 18,
        value: "4 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111353278",
      },
    ],
    includes: [
      2, // Mic c/cable
      7, // Control remoto
      3, // Cable aux
      4, // Cable microusb
      9, // Manual de usuario
    ],
    downloads: `https://drive.google.com/drive/folders/1_jqaumAFlrCm0kDam7RewKtMBY5PLCrw`,
    variants: [`AW-T451D`, `AW-T451D-SA`, `AW-T451D-SN`]
  },
  {// AW-T451D-SA
    name: `Torre de Sonido Portátil Bluetooth Party 4500W`,
    sku: `AW-T451D-SA`,
    link: `/productos/AW-T451D-SA`,
    line: `party`,
    categories: [110], 
    imgs: [
      `/products/AW-T451D-SA/img/1.webp`,
      `/products/AW-T451D-SA/img/2.webp`,
      `/products/AW-T451D-SA/img/3.webp`,
      `/products/AW-T451D-SA/img/4.webp`,
      `/products/AW-T451D-SA/img/5.webp`,
      `/products/AW-T451D-SA/img/6.webp`,
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "2º Generación",
    banners: [
      { title: `¡Reproducí lo que sea!`, img: fileserver + `/banners/panel451.webp`,
        desc: 'Posee Radio, puerto USB, entrada Auxiliar y puerto para tarjetas TF/MicroSD.' },
      { title: "¿Karaoke? ¡De una!", img: fileserver + `/banners/microfonocable.webp`,
        desc: "Conectá un micrófono y creá recuerdos inolvidables con tu familia y amigos." },
      { title: 'True Wireless Stereo', img: fileserver + `/banners/tws600.webp`,
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!` },
      { title: `¡Llevalo a todos lados!`, img: fileserver + `/banners/portatil451.webp`,
        desc: 'Posee batería interna, por lo que podrás escuchar música donde quiera que vayas.' },
      { title: `No te quedes sin batería`, img: fileserver + '/banners/carga451.webp',
        desc: 'Podés usar el cable MicroUSB incluido con el adaptador de tu celular para cargarlo fácilmente.' },
    ],
    shortDesc: `La potencia que estabas esperando`,
    longDesc: "Esta torre fue diseñada para lograr la mejor relación entre potencia y tamaño. Liviana, y de fácil uso, sus múltiples modos de conexión la convierten en una opción muy práctica cuando se trata de poner ritmo y alegría a tus fiestas.",
    buyLink: ``,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `4500W PMPO`
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: `2 de 6.5"`
      },
      { // Entrada Micrófono 
        id: 16,
      },
      { // Entrada Auxiliar
        id: 17,
      },
      { // Luces LED
        id: 20,
      },
      { // Duración de batería
        id: 8,
        value: `3 horas a máximo volumen`
      },
      { // Mobile Holder
        id: 29,
      },
      { // Radio.
        id: 25,
      },
      { // Batería
        id: 7,
        value: "3.7V / 1800mAh"
      },
      { // USB + TF
        id: 37
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `2 de 6,5"`,
      },
      { // Tweeters
        id: 4,
        value: `No`,
      },
      { // Potencia
        id: 2,
        value: "4500W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 3.7V / 1800mAh",
      },
      { // Duración de batería
        id: 11,
        value: "3 horas (máximo volumen)",
      },
      { // Luces
        id: 12,
        value: "RGB en woofer (ON/OFF)",
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth",
      },
      { // Funciones
        id: 13,
        value: "TWS, Radio FM",
      },
      { // Reguladores
        id: 5,
        value: "Volumen y Eco de Micrófono",
      },
      { // Entradas
        id: 8,
        value: "Micrófono, USB, MicroSD y Auxiliar",
      },
      { // Micrófono incluido
        id: 1,
        value: "No",
      },
      { // Radio
        id: 20,
        value: "Si",
      },
      { // Otras características
        id: 15,
        value: "Empuñadura de Transporte, Mobile Holder",
      },
      { // Medidas del producto
        id: 16,
        value: "21 x 58 x 21 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "26 x 63 x 26 cm",
      },
      { // Peso
        id: 18,
        value: "4 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111354077",
      },
    ],
    includes: [
      3, // Cable aux
      4, // Cable microusb
      9, // Manual de usuario
    ],
    downloads: `https://drive.google.com/drive/folders/1-mGYda-uVaWyDputWWobMvJxvFIX-1Hs`,
    variants: [`AW-T451D`, `AW-T451D-SA`, `AW-T451D-SN`]
  },
  {// AW-T451D-SN
    name: `Torre de Sonido Portátil Bluetooth Party 4500W`,
    sku: `AW-T451D-SN`,
    link: `/productos/AW-T451D-SN`,
    line: `party`,
    categories: [102],
    imgs: [
      `/products/AW-T451D-SN/img/1.webp`,
      `/products/AW-T451D-SN/img/2.webp`,
      `/products/AW-T451D-SN/img/3.webp`,
      `/products/AW-T451D-SN/img/4.webp`,
      `/products/AW-T451D-SN/img/5.webp`,
      `/products/AW-T451D-SN/img/6.webp`,
      `/products/AW-T451D-SN/img/7.webp`,
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "3º Generación",
    banners: [
      { title: "¿Karaoke? ¡De una!", img: fileserver + `/banners/microfonocable.webp`,
        desc: "Conectá un micrófono y creá recuerdos inolvidables con tu familia y amigos." },
      { title: 'True Wireless Stereo', img: fileserver + `/banners/tws600.webp`,
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!` },
      { title: `¡Llevalo a todos lados!`, img: fileserver + `/banners/portatil451.webp`,
        desc: 'Posee batería interna, por lo que podrás escuchar música donde quiera que vayas.' },
      { title: `No te quedes sin batería`, img: fileserver + '/banners/carga451sn.webp',
        desc: 'Podés usar el cable MicroUSB incluido con el adaptador de tu celular para cargarlo fácilmente.' },
    ],
    shortDesc: `La potencia que estabas esperando`,
    longDesc: "Esta torre fue diseñada para lograr la mejor relación entre potencia y tamaño. Liviana, y de fácil uso, sus múltiples modos de conexión la convierten en una opción muy práctica cuando se trata de poner ritmo y alegría a tus fiestas.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/torres-de-sonido/257-parlante-portatil-torre-bluetooth-aiwa-aw-t451d-sn.html`,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `4500W PMPO`
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: `2 de 6.5"`
      },
      { // Entrada Micrófono 
        id: 16,
      },
      { // Entrada Auxiliar
        id: 17,
      },
      { // Luces LED
        id: 20,
      },
      { // Duración de batería
        id: 8,
        value: `3 horas a máximo volumen`
      },
      { // Mobile Holder
        id: 29,
      },
      { // Empuñadura transp.
        id: 30,
      },
      { // Batería
        id: 7,
        value: "3.7V / 1800mAh"
      },
      { // Display
        id: 5
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `2 de 6,5"`,
      },
      { // Tweeters
        id: 4,
        value: `No`,
      },
      { // Potencia
        id: 2,
        value: "4500W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 3.7V / 1800mAh",
      },
      { // Duración de batería
        id: 11,
        value: "3 horas (máximo volumen)",
      },
      { // Luces
        id: 12,
        value: "RGB en woofer (ON/OFF)",
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth",
      },
      { // Funciones
        id: 13,
        value: "TWS",
      },
      { // Reguladores
        id: 5,
        value: "Volumen y Eco de Micrófono",
      },
      { // Entradas
        id: 8,
        value: "Micrófono y Auxiliar",
      },
      { // Radio
        id: 20,
        value: "No",
      },
      { // Otras características
        id: 15,
        value: "Empuñadura de Transporte, Mobile Holder"
      },
      { // Medidas del producto
        id: 16,
        value: "21 x 58 x 21 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "26 x 63 x 26 cm",
      },
      { // Peso
        id: 18,
        value: "4 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111354312",
      },
    ],
    includes: [
      3, // Cable aux
      4, // Cable microusb
      9, // Manual de usuario
    ],
    downloads: `https://drive.google.com/drive/folders/15kC-dwt90ybZ5ax-91uWvisOVJYDAfPH`,
    variants: []
  },
  {// AW-T600D
    name: `Torre de Sonido Portátil Bluetooth Party 5000W`,
    sku: `AW-T600D`,
    link: `/productos/AW-T600D`,
    line: `party`,
    categories: [110], 
    imgs: [
      `/products/AW-T600D/img/1.webp`,
      `/products/AW-T600D/img/2.webp`,
      `/products/AW-T600D/img/3.webp`,
      `/products/AW-T600D/img/4.webp`,
      `/products/AW-T600D/img/5.webp`,
      `/products/AW-T600D/img/6.webp`,
      `/products/AW-T600D/img/7.webp`,
      `/products/AW-T600D/img/8.webp`,
      `/products/AW-T600D/img/9.webp`,
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [
      { title: `¡Reproducí lo que sea!`, img: fileserver + `/banners/reproduci600.webp`,
        desc: 'Posee Radio, puerto USB, entrada Auxiliar y puerto para tarjetas TF/MicroSD.' },
      { title: 'Micrófono incluido', img: fileserver + `/banners/microfonocable.webp`,
        desc: '¿Karaoke? ¡de una! Con el micrófono incluido podrás tener increíbles sesiones de Karaoke con tus amigos. ¡Que la fiesta no pare!' },
      { title: 'True Wireless Stereo', img: fileserver + `/banners/tws600.webp`,
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!` },
      { title: `¡Llevalo a todos lados!`, img: fileserver + `/banners/portatil600.webp`,
        desc: 'Posee batería interna, por lo que podrás escuchar música donde quiera que vayas.' }
    ],
    shortDesc: `El aliado en tus fiestas`,
    longDesc: "Una torre de sonido es sinónimo de potencia. Y este parlante, está preparado para aceptar el desafío. Tus momentos van a ser recordados por siempre.",
    buyLink: ``,
    videos: [
      {
        id: 1,
        title: "Título del video",
        link: "https://www.youtube.com/embed/eOWUeIdJV58",
      }
    ],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `5000W PMPO`
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: `2 de 8"`
      },
      { // Entrada Micrófono 
        id: 16,
      },
      { // Entrada Auxiliar
        id: 17,
      },
      { // Luces LED
        id: 20,
      },
      { // Ruedas
        id: 19,
      },
      { // USB + SD
        id: 37,
      },
      { // Holder
        id: 29
      },
      { // Radio
        id: 25
      },
      { // Tweeter
        id: 35,
        value: `1 de 1"`
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `2 de 8"`,
      },
      { // Tweeters
        id: 4,
        value: `1 de 1"`,
      },
      { // Potencia
        id: 2,
        value: "5000W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 7.4V / 1800mAh",
      },
      { // Duración de batería
        id: 11,
        value: "3 horas (máximo volumen)",
      },
      { // Luces
        id: 12,
        value: "RGB en woofer (ON/OFF)",
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth",
      },
      { // Funciones
        id: 13,
        value: "TWS, Radio FM",
      },
      { // Reguladores
        id: 5,
        value: "Volumen y Eco de Micrófono",
      },
      { // Entradas
        id: 8,
        value: "Micrófono, USB, MicroSD y Auxiliar",
      },
      { // Micrófono
        id: 1,
        value: "Si, con cable",
      },
      { // Radio
        id: 20,
        value: "Si",
      },
      { // Otras características
        id: 15,
        value: "Empuñadura de Transporte, Ruedas y Mobile Holder",
      },
      { // Medidas del producto
        id: 16,
        value: "28 x 80,5 x 28 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "33 x 88 x 33 cm",
      },
      { // Peso
        id: 18,
        value: "6,5 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111353285",
      },
    ],
    includes: [
      2, // Mic c/cable
      7, // Control remoto
      3, // Cable aux
      5, // Fuente 
      9, // Manual de usuario
    ],
    certNo: `00Q-AR-01223-T-1`,
    downloads: `https://drive.google.com/drive/folders/1cw-sGt21j80tZ5031iVSGqvPsmXJTEp4`,
    variants: [`AW-T600D`, `AW-T600D-SA`, `AW-T600D-SN`]
  },
  {// AW-T600D-SA
    name: `Torre de Sonido Portátil Bluetooth Party 5000W`,
    sku: `AW-T600D-SA`,
    link: `/productos/AW-T600D-SA`,
    line: `party`,
    categories: [110], 
    imgs: [
      `/products/AW-T600D/img/2.webp`,
      `/products/AW-T600D/img/3.webp`,
      `/products/AW-T600D/img/4.webp`,
      `/products/AW-T600D/img/5.webp`,
      `/products/AW-T600D/img/6.webp`,
      `/products/AW-T600D/img/7.webp`,
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "2º Generación",
    banners: [
      { title: `¡Reproducí lo que sea!`, img: fileserver + `/banners/reproduci600.webp`,
        desc: 'Posee Radio, puerto USB, entrada Auxiliar y puerto para tarjetas TF/MicroSD.' },
      { title: 'True Wireless Stereo', img: fileserver + `/banners/tws600.webp`,
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!` },
      { title: `¡Llevalo a todos lados!`, img: fileserver + `/banners/portatil600.webp`,
        desc: 'Posee batería interna, por lo que podrás escuchar música donde quiera que vayas.' },
      { title: `Reguladores independientes`, img: fileserver + '/banners/reguladores600sa.webp',
        desc: 'Regulá de forma independiente el volumen y eco del micrófono.' }
    ],
    shortDesc: `El aliado en tus fiestas`,
    longDesc: "Una torre de sonido es sinónimo de potencia. Y este parlante, está preparado para aceptar el desafío. Tus momentos van a ser recordados por siempre.",
    buyLink: ``,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `5000W PMPO`
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: `2 de 8"`
      },
      { // Entrada Micrófono 
        id: 16,
      },
      { // Entrada Auxiliar
        id: 17,
      },
      { // Luces LED
        id: 20,
      },
      { // Ruedas
        id: 19,
      },
      { // USB + SD
        id: 37,
      },
      { // Holder
        id: 29
      },
      { // Radio
        id: 25
      },
      { // Tweeter
        id: 35,
        value: `1 de 1"`
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `2 de 8"`,
      },
      { // Tweeters
        id: 4,
        value: `1 de 1"`,
      },
      { // Potencia
        id: 2,
        value: "5000W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 7.4V / 1800mAh",
      },
      { // Duración de batería
        id: 11,
        value: "3 horas (máximo volumen)",
      },
      { // Luces
        id: 12,
        value: "RGB en woofer (ON/OFF)",
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth",
      },
      { // Funciones
        id: 13,
        value: "TWS, Radio FM",
      },
      { // Reguladores
        id: 5,
        value: "Volumen y Eco de Micrófono",
      },
      { // Entradas
        id: 8,
        value: "Micrófono, USB, MicroSD y Auxiliar",
      },
      { // Micrófono
        id: 1,
        value: "No",
      },
      { // Radio
        id: 20,
        value: "Si",
      },
      { // Otras características
        id: 15,
        value: "Empuñadura de Transporte, Ruedas y Mobile Holder",
      },
      { // Medidas del producto
        id: 16,
        value: "28 x 80,5 x 28 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "33 x 88 x 33 cm",
      },
      { // Peso
        id: 18,
        value: "6,5 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111354060",
      },
    ],
    includes: [
      3, // Cable aux
      5, // Fuente 
      9, // Manual de usuario
    ],
    certNo: `00Q-AR-01223-T-1`,
    downloads: `https://drive.google.com/drive/folders/10AlqdoQ_rOCdTM_mldiNMPzc9mdRaHk_`,
    variants: [`AW-T600D`, `AW-T600D-SA`, `AW-T600D-SN`]
  },
  {// AW-T600D-SN
    name: `Torre de Sonido Portátil Bluetooth Party 5000W`,
    sku: `AW-T600D-SN`,
    link: `/productos/AW-T600D-SN`,
    line: `party`,
    categories: [102], 
    imgs: [
      `/products/AW-T600D-SN/img/1.webp`,
      `/products/AW-T600D-SN/img/2.webp`,
      `/products/AW-T600D-SN/img/3.webp`,
      `/products/AW-T600D-SN/img/4.webp`,
      `/products/AW-T600D-SN/img/5.webp`,
      `/products/AW-T600D-SN/img/6.webp`,
      `/products/AW-T600D-SN/img/7.webp`,
      `/products/AW-T600D-SN/img/8.webp`,
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "3º Generación",
    banners: [
      { title: 'True Wireless Stereo', img: fileserver + `/banners/tws600.webp`,
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!` },
      { title: `¡Llevalo a todos lados!`, img: fileserver + `/banners/portatil600.webp`,
        desc: `Gracias a su batería interna y a sus ruedas podrás trasladarlo escuchar música donde quiera que vayas.` },
      { title: "¿Karaoke? ¡De una!", img: fileserver + `/banners/microfonocable.webp`,
        desc: "Conectá un micrófono y creá recuerdos inolvidables con tu familia y amigos." },
      { title: `¡Reproducí lo que sea!`, img: fileserver + `/banners/reguladores600sn.webp`,
        desc: 'Posee Radio, puerto USB, entrada Auxiliar y puerto para tarjetas TF/MicroSD.' }
    ],
    shortDesc: `El aliado en tus fiestas`,
    longDesc: "Una torre de sonido es sinónimo de potencia. Y este parlante, está preparado para aceptar el desafío. Tus momentos van a ser recordados por siempre.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/torres-de-sonido/266-parlante-portatil-bluetooth-aiwa-aw-t600d-sn.html`,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `5000W PMPO`
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: `2 de 8"`
      },
      { // Entrada Micrófono 
        id: 16,
      },
      { // Entrada Auxiliar
        id: 17,
      },
      { // Luces LED
        id: 20,
      },
      { // Ruedas
        id: 19,
      },
      { // Holder
        id: 29
      },
      { // Tweeter
        id: 35,
        value: `1 de 1"`
      },
      {
        id: 28
      },
      {
        id: 7,
        value: `de 7.4V / 1800mAh`
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `2 de 8"`,
      },
      { // Tweeters
        id: 4,
        value: `1 de 1"`,
      },
      { // Potencia
        id: 2,
        value: "5000W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 7.4V / 1800mAh",
      },
      { // Duración de batería
        id: 11,
        value: "3 horas (máximo volumen)",
      },
      { // Luces
        id: 12,
        value: "RGB en woofer (ON/OFF)",
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth",
      },
      { // Funciones
        id: 13,
        value: "TWS",
      },
      { // Reguladores
        id: 5,
        value: "Volumen y Eco de Micrófono",
      },
      { // Entradas
        id: 8,
        value: "Micrófono y Auxiliar",
      },
      { // Micrófono
        id: 1,
        value: "No",
      },
      { // Display
        id: 6,
        value: "Si",
      },
      { // Otras características
        id: 15,
        value: "Empuñadura de Transporte, Ruedas y Mobile Holder",
      },
      { // Medidas del producto
        id: 16,
        value: "28 x 80,5 x 28 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "33 x 88 x 33 cm",
      },
      { // Peso
        id: 18,
        value: "6,5 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111354329",
      },
    ],
    includes: [
      3, // Cable aux
      5, // Fuente 
      9, // Manual de usuario
    ],
    certNo: `00Q-AR-01223-T-1`,
    downloads: `https://drive.google.com/drive/folders/1LOrmrc6dboTou4qxp9cyD4-n62oy04NL`,
    variants: []
  },
  {// AW-P1200D
    name: `Parlante Portátil Bluetooth Party 6000W`,
    sku: `AW-P1200D`,
    link: `/productos/AW-P1200D`,
    line: `party`,
    categories: [110], 
    imgs: [
      `/products/AW-P1200D/img/1.webp`,
      `/products/AW-P1200D/img/2.webp`,
      `/products/AW-P1200D/img/3.webp`,
      `/products/AW-P1200D/img/4.webp`,
      `/products/AW-P1200D/img/5.webp`,
      `/products/AW-P1200D/img/6.webp`,
      `/products/AW-P1200D/img/7.webp`,
      `/products/AW-P1200D/img/8.webp`,
      `/products/AW-P1200D/img/9.webp`,
    ].map(e => fileserver + e),
    360: false,
    gen: "1º Generación",
    banners: [
      { title: `¡Reproducí lo que sea!`, img: fileserver + `/banners/panel1200.webp`,
        desc: 'Posee Radio, puerto USB, entrada Auxiliar y puerto para tarjetas TF/MicroSD.' },
      { title: 'Micrófono incluido', img: fileserver + `/banners/microfonocable.webp`,
        desc: `¡Diversión sin cables! Usalo a distancia con el micrófono y control remoto incluidos.` },
      { title: `Reguladores independientes`, img: fileserver + `/banners/reguladores1200.webp`,
        desc: `Regulá de forma independiente el volumen y eco del micrófono. Posee entrada para micrófono estándar de 6,5mm.` },
      { title: 'True Wireless Stereo', img: fileserver + `/banners/tws1200.webp`,
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!` },
      { title: `¡Llevalo a todos lados!`, img: fileserver + `/banners/portatil1200.webp`,
        desc: `Gracias a su sistema Carry-on y a su batería interna podrás escuchar música donde quiera que vayas` }
    ],
    shortDesc: `El alma de la fiesta`,
    longDesc: "Un sonido potente, y bajos profundos, hacen que tu fiesta sea una experiencia donde tus invitados puedan sumergirse y hacer de ella un recuerdo inolvidable.",
    buyLink: ``,
    videos: [
      {
        id: 1,
        title: "Título del video",
        link: "https://www.youtube.com/embed/TMV3Btqij7M",
      }
    ],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `6000W PMPO`
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: `1 de 12"`
      },
      { // Entrada Micrófono 
        id: 16,
      },
      { // Entrada Auxiliar
        id: 17,
      },
      { // Luces LED
        id: 20,
      },
      { // Carry On
        id: 9,
      },
      { // USB
        id: 33
      },
      { // TF
        id: 26
      },
      { // Radio
        id: 25,
        value: `3 horas (según volumen)`
      },
      { // Bateria
        id: 7,
        value: `de 3.7V / 1800mAh`
      },
    ],
    features: [
      { // Woofers
        id: 3,
        value: `1 de 12"`,
      },
      { // Tweeters
        id: 4,
        value: `1 de 1"`,
      },
      { // Potencia
        id: 2,
        value: "6000W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 3.7V / 1800mAh",
      },
      { // Duración de batería
        id: 11,
        value: "3 horas (máximo volumen)",
      },
      { // Luces
        id: 12,
        value: "RGB en woofer (ON/OFF)",
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth",
      },
      { // Funciones
        id: 13,
        value: "TWS, Radio FM",
      },
      { // Reguladores
        id: 5,
        value: "Volumen y Eco de Micrófono",
      },
      { // Entradas
        id: 8,
        value: "Micrófono, USB, MicroSD y Auxiliar",
      },
      { // Micrófono
        id: 1,
        value: "Si, con cable",
      },
      { // Carry On
        id: 26,
        value: "Si",
      },
      { // Otras características
        id: 15,
        value: "Empuñadura de Transporte, Ruedas y Ranura para trípode",
      },
      { // Medidas del producto
        id: 16,
        value: "34 x 53 x 29 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "38 x 54 x 32 cm",
      },
      { // Peso
        id: 18,
        value: "4,5 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111353537",
      },
    ],
    includes: [
      2, // Mic
      7, // Control
      3, // Cable aux
      5, // Fuente 
      9, // Manual de usuario
    ],
    certNo: `Q-AR-01374-T-0`,
    downloads: `https://drive.google.com/drive/folders/1DDQI7xoXAhdQY2mZEhZwRJp6HO2GdSAW`,
    variants: [`AW-P1200D`, `AW-P1200D-SA`, `AW-P1200D-SN`]
  },
  {// AW-P1200D-SA
    name: `Parlante Portátil Bluetooth Party 6000W`,
    sku: `AW-P1200D-SA`,
    link: `/productos/AW-P1200D-SA`,
    line: `party`,
    categories: [110], 
    imgs: [
      `/products/AW-P1200D-SA/img/1.webp`,
      `/products/AW-P1200D-SA/img/2.webp`,
      `/products/AW-P1200D-SA/img/3.webp`,
      `/products/AW-P1200D-SA/img/4.webp`,
      `/products/AW-P1200D-SA/img/5.webp`,
      `/products/AW-P1200D-SA/img/6.webp`,
      `/products/AW-P1200D-SA/img/7.webp`,
      `/products/AW-P1200D-SA/img/8.webp`,
      `/products/AW-P1200D-SA/img/9.webp`,
    ].map(e => fileserver + e),
    360: false,
    gen: "2º Generación",
    banners: [
      { title: `¡Reproducí lo que sea!`, img: fileserver + `/banners/panel1200.webp`,
        desc: 'Posee Radio, puerto USB, entrada Auxiliar y puerto para tarjetas TF/MicroSD.' },
      { title: 'True Wireless Stereo', img: fileserver + `/banners/tws1200.webp`,
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!` },
      { title: `Reguladores independientes`, img: fileserver + `/banners/reguladores1200.webp`, 
        desc: `Regulá de forma independiente el volumen y eco del micrófono. Posee entrada para micrófono estándar de 6,5mm.` },
      { title: `¡Llevalo a todos lados!`, img: fileserver + `/banners/portatil1200.webp`,
        desc: `Gracias a su sistema Carry-on y a su batería interna podrás escuchar música donde quiera que vayas` }
    ],
    shortDesc: `El alma de la fiesta`,
    longDesc: "Un sonido potente, y bajos profundos, hacen que tu fiesta sea una experiencia donde tus invitados puedan sumergirse y hacer de ella un recuerdo inolvidable.",
    buyLink: ``,
    videos: [
    ],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `6000W PMPO`
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: `1 de 12"`
      },
      { // Entrada Micrófono 
        id: 16,
      },
      { // Entrada Auxiliar
        id: 17,
      },
      { // Luces LED
        id: 20,
      },
      { // Carry On
        id: 9,
      },
      { // USB
        id: 33
      },
      { // TF
        id: 26
      },
      { // Radio
        id: 25,
        value: `3 horas (según volumen)`
      },
      { // Bateria
        id: 7,
        value: `de 3.7V / 1800mAh`
      },
    ],
    features: [
      { // Woofers
        id: 3,
        value: `1 de 12"`,
      },
      { // Tweeters
        id: 4,
        value: `1 de 1"`,
      },
      { // Potencia
        id: 2,
        value: "6000W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 3.7V / 1800mAh",
      },
      { // Duración de batería
        id: 11,
        value: "3 horas (máximo volumen)",
      },
      { // Luces
        id: 12,
        value: "RGB en woofer (ON/OFF)",
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth",
      },
      { // Funciones
        id: 13,
        value: "TWS, Radio FM",
      },
      { // Reguladores
        id: 5,
        value: "Volumen y Eco de Micrófono",
      },
      { // Entradas
        id: 8,
        value: "Micrófono, USB, MicroSD y Auxiliar",
      },
      { // Micrófono
        id: 1,
        value: "No",
      },
      { // Carry On
        id: 26,
        value: "Si",
      },
      { // Otras características
        id: 15,
        value: "Empuñadura de Transporte, Ruedas y Ranura para trípode",
      },
      { // Medidas del producto
        id: 16,
        value: "34 x 53 x 29 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "38 x 54 x 32 cm",
      },
      { // Peso
        id: 18,
        value: "4,5 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111354091",
      },
    ],
    includes: [
      3, // Cable aux
      5, // Fuente 
      9, // Manual de usuario
    ],
    certNo: `Q-AR-01374-T-0`,
    downloads: `https://drive.google.com/drive/folders/12O54GzSjl0Nm_-2DIHENTO5dmAincenI`,
    variants: [`AW-P1200D`, `AW-P1200D-SA`, `AW-P1200D-SN`]
  },
  {// AW-P1200D-SN
    name: `Parlante Portátil Bluetooth Party 6000W`,
    sku: `AW-P1200D-SN`,
    link: `/productos/AW-P1200D-SN`,
    line: `party`,
    categories: [101], 
    imgs: [
      `/products/AW-P1200D-SN/img/1.webp`,
      `/products/AW-P1200D-SN/img/2.webp`,
      `/products/AW-P1200D-SN/img/3.webp`,
      `/products/AW-P1200D-SN/img/4.webp`,
      `/products/AW-P1200D-SN/img/5.webp`,
      `/products/AW-P1200D-SN/img/6.webp`,
      `/products/AW-P1200D-SN/img/7.webp`,
      `/products/AW-P1200D-SN/img/8.webp`,
      `/products/AW-P1200D-SN/img/9.webp`,
    ].map(e => fileserver + e),
    360: true,
    gen: "3º Generación",
    banners: [
      { title: 'Controlá a tu gusto', img: fileserver + `/banners/reguladores1200sn.webp`,
      desc: `Posee reguladores independientes de Eco, Volumen General y Volumen de Micrófono.`},
      { title: 'True Wireless Stereo', img: fileserver + `/banners/tws1200.webp`,
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!` },
      { title: `¡Llevalo a todos lados!`, img: fileserver + `/banners/portatil1200.webp`,
      desc: `Gracias a su sistema Carry-on y a su batería interna podrás escuchar música donde quiera que vayas` },
      { title: `Elevá tu sonido`, img: fileserver + `/banners/tripode1200.webp`,
      desc: `¡Posee ranura para trípode! Sumá uno, y de esa forma podés posicionarlo mejor y hacer que el sonido llegue más lejos. Trípode no incluido.`}
    ],
    shortDesc: `El alma de la fiesta`,
    longDesc: "Un sonido potente, y bajos profundos, hacen que tu fiesta sea una experiencia donde tus invitados puedan sumergirse y hacer de ella un recuerdo inolvidable.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/torres-de-sonido/217-parlante-portatil-aiwa-12-pulgadas-bluetooth-aw-p1200d.html`,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `6000W PMPO`
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: `1 de 12"`
      },
      { // Entrada Micrófono 
        id: 16,
      },
      { // Entrada Auxiliar
        id: 17,
      },
      { // Luces LED
        id: 20,
      },
      { // Carry On
        id: 9,
      },
      { // Eco vol mic
        id: 28
      },
      { // Bateria
        id: 7,
        value: `de 3.7V / 1800mAh`
      },
      { // Ranura tripode
        id: 41
      },
      { // Duracion bateria
        id: 8,
        value: `3 horas (según volumen)`
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `1 de 12"`,
      },
      { // Tweeters
        id: 4,
        value: `1 de 1"`,
      },
      { // Potencia
        id: 2,
        value: "6000W PMPO", 
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 3.7V / 1800mAh",
      },
      { // Duración de batería
        id: 11,
        value: "3 horas (máximo volumen)",
      },
      { // Luces
        id: 12,
        value: "RGB en woofer (ON/OFF)",
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth",
      },
      { // Funciones
        id: 13,
        value: "TWS",
      },
      { // Reguladores
        id: 5,
        value: "Volumen y Eco de Micrófono",
      },
      { // Entradas
        id: 8,
        value: "Micrófono y Auxiliar",
      },
      { // Micrófono
        id: 1,
        value: "No",
      },
      { // Carry-On
        id: 26,
        value: "Si",
      },
      { // Otras características
        id: 15,
        value: "Empuñadura de Transporte, Ruedas y Ranura para trípode",
      },
      { // Medidas del producto
        id: 16,
        value: "34 x 53 x 29 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "38 x 54 x 32 cm",
      },
      { // Peso
        id: 18,
        value: "4,5 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111354336",
      },
    ],
    includes: [
      3, // Cable aux
      5, // Fuente 
      9, // Manual de usuario
    ],
    certNo: `Q-AR-01374-T-0`,
    downloads: `https://drive.google.com/drive/folders/15GtEvArmGnIgG4S7qyJzjPUqpDnSR-jR`,
    variants: []
  },
  {// AW-P1510D
    name: `Parlante Portátil Bluetooth Party 7000W`,
    sku: `AW-P1510D`,
    link: `/productos/AW-P1510D`,
    line: `party`,
    categories: [110], 
    imgs: [
      `/products/AW-P1510D/img/1.webp`,
      `/products/AW-P1510D/img/2.webp`,
      `/products/AW-P1510D/img/3.webp`,
      `/products/AW-P1510D/img/4.webp`,
      `/products/AW-P1510D/img/5.webp`,
      `/products/AW-P1510D/img/6.webp`,
      `/products/AW-P1510D/img/7.webp`,
      `/products/AW-P1510D/img/8.webp`,
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [
      { title: `¡Reproducí lo que sea!`, img: fileserver + `/banners/panel1510.webp`,
        desc: 'Posee Radio, puerto USB, entrada Auxiliar y puerto para tarjetas TF/MicroSD.' },
      { title: "Micrófono Inalámbrico Incluido", img: fileserver + '/banners/microfono.webp',
        desc: `¡Diversión sin cables! Usalo a distancia con el micrófono inalámbrico y control remoto incluidos.` },
      { title: 'True Wireless Stereo', img: fileserver + `/banners/tws1200.webp`,
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!` },
      { title: `¡Llevalo a todos lados!`, img: fileserver + `/banners/portatil1200.webp`,
        desc: `Gracias a su sistema Carry-on y a su batería interna podrás escuchar música donde quiera que vayas.` }
    ],
    shortDesc: `La distancia no es problema`,
    longDesc: "Este producto cuenta con un micrófono inalámbrico muy útil en distintos escenarios, ya sea para dar conferencias, cantar con su modo Karaoke, para musicalizar tu negocio o animar tu fiesta.",
    buyLink: ``,
    videos: [
      {
        id: 1,
        title: "Título del video",
        link: "https://www.youtube.com/embed/tLHabla-j4o",
      }
    ],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `7000W PMPO`
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: `1 de 15"`
      },
      { // Entrada Mic y Guit 
        id: 21,
      },
      { // Entrada Auxiliar
        id: 17,
      },
      { // Luces LED
        id: 20,
      },
      { // Carry On
        id: 9,
      },
      { // Bateria
        id: 7,
        value: "Interna Recargable 7.4V / 1800mAh"
      },
      { // Duracion Bateria
        id: 8,
        value: "3 horas (máximo volumen)"
      },
      { // Reg Graves y Agudos
        id: 22,
      },
      { // Reg Eco
        id: 23,
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `1 de 15"`,
      },
      { // Tweeters
        id: 4,
        value: `1 de 1"`,
      },
      { // Potencia
        id: 2,
        value: "7000W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 7.4V / 1800mAh",
      },
      { // Duración de batería
        id: 11,
        value: "3 horas (máximo volumen)",
      },
      { // Luces
        id: 12,
        value: "RGB en woofer (ON/OFF)",
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth",
      },
      { // Funciones
        id: 13,
        value: "TWS, Radio FM",
      },
      { // Reguladores
        id: 5,
        value: "Graves, Agudos, Volumen y Eco de Mic",
      },
      { // Entradas
        id: 8,
        value: "Micrófono, Guitarra, USB, MicroSD y Auxiliar",
      },
      { // Micrófono
        id: 1,
        value: "Si, inalámbrico",
      },
      { // Display
        id: 6,
        value: "Si",
      },
      { // Otras características
        id: 15,
        value: "Empuñadura de Transporte, Ruedas y Ranura para trípode",
      },
      { // Medidas del producto
        id: 16,
        value: "40 x 61 x 30 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "41 x 67 x 34,5 cm",
      },
      { // Peso
        id: 18,
        value: "5 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111353544",
      },
    ],
    includes: [
      1, // Mic
      7, // Control
      3, // Cable aux
      5, // Fuente 
      9, // Manual de usuario
    ],
    certNo: `00Q-AR-01223-T-1`,
    downloads: `https://drive.google.com/drive/folders/1yv88lYDFWpsptavOJggiSgz9Xv8TiEMr`,
    variants: [`AW-P1510D`, `AW-P1510D-SN`]
  },
  {// AW-P1510D-SN
    name: `Parlante Portátil Bluetooth Party 7000W`,
    sku: `AW-P1510D-SN`,
    link: `/productos/AW-P1510D-SN`,
    line: `party`,
    categories: [101], 
    imgs: [
      `/products/AW-P1510D-SN/img/1.webp`,
      `/products/AW-P1510D-SN/img/2.webp`,
      `/products/AW-P1510D-SN/img/3.webp`,
      `/products/AW-P1510D-SN/img/4.webp`,
      `/products/AW-P1510D-SN/img/5.webp`,
      `/products/AW-P1510D-SN/img/6.webp`,
      `/products/AW-P1510D-SN/img/7.webp`,
      `/products/AW-P1510D-SN/img/8.webp`,
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "2º Generación",
    banners: [
      { title: `Conectá y escuchá`, img: fileserver + `/banners/panel1510sn.webp`,
        desc: `Posee una entrada para micrófono o guitarra, y una entrada auxiliar para que traigas tu sonido de donde quieras.` },
      { title: "Micrófono Inalámbrico Incluido", img: fileserver + '/banners/microfono.webp',
        desc: '¿Karaoke? ¡de una! Con el micrófono incluido podrás tener increíbles sesiones de Karaoke con tus amigos. ¡Que la fiesta no pare!' },
      { title: 'True Wireless Stereo', img: fileserver + `/banners/tws1200.webp`,
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!` },
      { title: `¡Llevalo a todos lados!`, img: fileserver + `/banners/portatil1200.webp`,
        desc: `Gracias a su sistema Carry-on y a su batería interna podrás escuchar música donde quiera que vayas.` }
    ],
    shortDesc: `La distancia no es problema`,
    longDesc: "Este producto cuenta con un micrófono inalámbrico muy útil en distintos escenarios, ya sea para dar conferencias, cantar con su modo Karaoke, para musicalizar tu negocio o animar tu fiesta.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/parlantes-portatiles/95-parlante-portatil-aiwa-15-pulgadas-bluetooth-aw-p1510d-7798111353544.html`,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `7000W PMPO`
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: `1 de 15"`
      },
      { // Entrada Mic y Guit 
        id: 21,
      },
      { // Entrada Auxiliar
        id: 17,
      },
      { // Luces LED
        id: 20,
      },
      { // Carry On
        id: 9,
      },
      { // Bateria
        id: 7,
        value: "Interna Recargable 7.4V / 1800mAh"
      },
      { // Duracion Bateria
        id: 8,
        value: "3 horas (máximo volumen)"
      },
      { // Reg Graves y Agudos
        id: 22,
      },
      { // Reg Eco
        id: 23,
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `1 de 15"`,
      },
      { // Tweeters
        id: 4,
        value: `1 de 1"`,
      },
      { // Potencia
        id: 2,
        value: "7000W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 7.4V / 1800mAh",
      },
      { // Duración de batería
        id: 11,
        value: "3 horas (máximo volumen)",
      },
      { // Luces
        id: 12,
        value: "RGB en woofer (ON/OFF)",
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth",
      },
      { // Funciones
        id: 13,
        value: "TWS",
      },
      { // Reguladores
        id: 5,
        value: "Graves, Agudos, Volumen y Eco de Mic",
      },
      { // Entradas
        id: 8,
        value: "Micrófono, Guitarra y Auxiliar",
      },
      { // Micrófono
        id: 1,
        value: "Si, inalámbrico",
      },
      { // Display
        id: 6,
        value: "Si",
      },
      { // Otras características
        id: 15,
        value: "Empuñadura de Transporte, Ruedas y Ranura para trípode",
      },
      { // Medidas del producto
        id: 16,
        value: "40 x 61 x 30 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "41 x 67 x 34,5 cm",
      },
      { // Peso
        id: 18,
        value: "5 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111354343",
      },
    ],
    includes: [
      1, // Mic
      3, // Cable aux
      5, // Fuente 
      9, // Manual de usuario
    ],
    certNo: `00Q-AR-01223-T-1`,
    downloads: `https://drive.google.com/drive/folders/15G8xiA9_vbWH8G5a8oBL76t7icFDRjMh`,
    variants: []
  },
  {// AW-P1500PS
    name: `Parlante Portátil Bluetooth Party 9000W`,
    sku: `AW-P1500PS`,
    link: `/productos/AW-P1500PS`,
    line: `party`,
    categories: [101], 
    imgs: [
      `/products/AW-P1500PS/img/1.webp`,
      `/products/AW-P1500PS/img/8.webp`,
      `/products/AW-P1500PS/img/9.webp`,
      `/products/AW-P1500PS/img/2.webp`,
      `/products/AW-P1500PS/img/3.webp`,
      `/products/AW-P1500PS/img/4.webp`,
      `/products/AW-P1500PS/img/5.webp`,
      `/products/AW-P1500PS/img/6.webp`,
      `/products/AW-P1500PS/img/7.webp`,
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [
      { title: `¡Reproducí lo que sea!`, img: fileserver + `/banners/panel1500.webp`,
        desc: 'Posee Radio, puerto USB, entrada Auxiliar y puerto para tarjetas TF/MicroSD.' },
      { title: "Micrófono Inalámbrico Incluido", img: fileserver + '/banners/microfono.webp',
        desc: `¡Diversión sin cables! Incluye micrófono inalámbrico UHF (Ultra High Frequency) y control remoto.` },
      { title: `Elevá tu sonido`, img: fileserver + '/banners/tripode1500.webp',
        desc: 'Viene con un soporte de 120cm de alto. ¡Elevá la calidad de tus presentaciones!' },
      { title: 'True Wireless Stereo', img: fileserver + `/banners/tws1500.webp`,
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!` },
      { title: `¡Llevalo a todos lados!`, img: fileserver + `/banners/portatil1500.webp`,
        desc: `Gracias a su sistema Carry-on y a su batería interna podrás escuchar música donde quiera que vayas` }
    ],
    shortDesc: `¡Listo para tocar!`,
    longDesc: "Está listo para conectar una guitarra, un micrófono y tocar o cantar en vivo. Hace llegar a todos la música que sale de tu corazón. También Incluye la función Karaoke con la cual podés pasar horas divirtiéndote sin parar con tu familia y amigos.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/parlantes-portatiles/94-parlante-aiwa-bluetooth-portatil-con-tripode-aw-p1500ps-7798111353438.html`,
    videos: [
      {
        id: 1,
        title: "Título del video",
        link: "https://www.youtube.com/embed/UVKHkHIiFIk",
      }
    ],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `9000W PMPO`
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: `1 de 15" y 1 tweeter de 25mm`
      },
      { // Entrada Mic y Guit 
        id: 21,
      },
      { // Entrada Auxiliar
        id: 17,
      },
      { // USB
        id: 33,
      },
      { // Tripode
        id: 10,
      },
      { // Bateria
        id: 7,
        value: "Interna Recargable 7.4V / 1800mAh"
      },
      { // Radio FM
        id: 25,
      },
      { // Memoria
        id: 26,
      },
      { // Carryon
        id: 9,
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `1 de 15"`,
      },
      { // Tweeters
        id: 4,
        value: `1 de 25mm`,
      },
      { // Potencia
        id: 2,
        value: "9000W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 12V / 4500mAh",
      },
      { // Luces
        id: 12,
        value: "RGB en woofer (ON/OFF)",
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth",
      },
      { // Funciones
        id: 13,
        value: "TWS, REC",
      },
      { // Reguladores
        id: 5,
        value: "Graves, Agudos, Vol. de Mic, Vol. de Guitarra, Eco de Mic/Guitarra",
      },
      { // Entradas
        id: 8,
        value: "Guitarra, Micrófono, USB, MicroSD, Auxiliar y de línea",
      },
      { // Altura de Tripode
        id: 21,
        value: "Mín. 70 cm - Máx. 120 cm",
      },
      { // Micrófono
        id: 1,
        value: "Si, inalámbrico",
      },
      { // Radio
        id: 20,
        value: "Si",
      },
      { // Otras características
        id: 15,
        value: "Carry-on, ranura para trípode",
      },
      { // Medidas del producto
        id: 16,
        value: "41 x 65,5 x 36 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "48 x 75 x 44,5 cm",
      },
      { // Peso
        id: 18,
        value: "13 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111353438",
      },
    ],
    includes: [
      10, // Tripode
      1, // Mic inalam
      7, // Control
      3, // Cable aux
      12, // Cable 
      9, // Manual de usuario
    ],
    certNo: `00Q-AR-01388-T-1`,
    downloads: `https://drive.google.com/drive/folders/1EeW6E5-uS2S-lLUHG4TtRtcjswgjlr84`,
    variants: []
  },
  {// AW-T2040
    name: `Torre de Sonido Bluetooth Party 6000W`,
    sku: `AW-T2040`,
    link: `/productos/AW-T2040`,
    line: `party`,
    categories: [102], 
    imgs: [
      `/products/AW-T2040/img/1.webp`,
      `/products/AW-T2040/img/2.webp`,
      `/products/AW-T2040/img/3.webp`,
      `/products/AW-T2040/img/4.webp`,
      `/products/AW-T2040/img/5.webp`,
      `/products/AW-T2040/img/6.webp`,
      `/products/AW-T2040/img/7.webp`,
      `/products/AW-T2040/img/8.webp`,
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [ 
      { title: `Cantá en pareja`, img: fileserver + `/banners/doblemic2.webp`,
        desc: 'Se pueden usar hasta 2 micrófonos al mismo tiempo y regulas el volumen independientemente de la música para hacer karaoke y divertirte con amigos.' },
      { title: `Iluminá cualquier espacio`, img: fileserver + `/banners/2040luces.webp`,
        desc: 'Elegí si queres acompañar tu música con sus brillantes luces rgb o si preferís dejarlas apagadas.' },
      { title: 'Power Bank', img: fileserver + '/banners/powerbank.webp',
        desc: '¡Cargá tu celular o tu dispositivo mientras escuchás música! Ahora podés escuchar tu música favorita, sin que se le agote la batería a tu celular en medio de la fiesta.' },
      { title: 'True Wireless Stereo', img: fileserver + `/banners/tws2040.webp`,
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!` },
    ],
    shortDesc: `Show luminoso`,
    longDesc: "Cautivá a tus invitados con variados y coloridos efectos de Luz durante toda la noche.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/torres-de-sonido/254-parlante-torre-bluetooth-power-bank-aiwa-aw-t2040-7798111354398.html`,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `6000W PMPO`
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Power Bank
        id: 13,
      },
      { // Dos Entradas Micrófono 
        id: 27,
      },
      { // Regulador de Volumen de Mic 
        id: 28,
      },
      { // Reguladores graves agudos
        id: 22,
      },
      { // Efectos de Luz
        id: 6,
      },
      { // Woofer + tweeter
        id: 3,
        value: `2 de 8" y 1 tweeter de 2"`
      },
      { // Duracion Batería
        id: 8,
        value: `8 horas (según su uso)`
      },
      { // Mobile Holder
        id: 29,
      },
      { // Manija de Transporte
        id: 30,
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `2 de 8"`,
      },
      { // Tweeters
        id: 4,
        value: `1 de 2"`,
      },
      { // Potencia
        id: 2,
        value: "6000W PMPO",
      },
      { // Batería
        id: 10,
        value: "Litio 3,7v / 3600mAh",
      },
      { // Duración de batería
        id: 11,
        value: "Hasta 8 horas (según su uso)",
      },
      { // Luces
        id: 12,
        value: "RGB en woofer",
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth 5.0",
      },
      { // Funciones
        id: 13,
        value: "TWS, Power Bank",
      },
      { // Reguladores
        id: 5,
        value: "Graves, Agudos, Vol. y Eco de Mic",
      },
      { // Entradas
        id: 8,
        value: "Micrófono x2, Auxiliar",
      },
      { // Efectos
        id: 23,
        value: "De luces",
      },
      { // Otras características
        id: 15,
        value: "Empuñadura de Transporte, Mobile Holder",
      },
      { // Medidas del producto
        id: 16,
        value: "27,5 x 72,5 x 26,5 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "32 x 77 x 30,5 cm",
      },
      { // Peso
        id: 18,
        value: "4,2 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111354398",
      },
    ],
    includes: [
      3, // Cable aux
      4, // Cable microusb
      9, // Manual de usuario
    ],
    downloads: `https://drive.google.com/drive/folders/1QSNSdv4YxPuPEPFxA9K4DPOt-UkdISBk`,
    variants: []
  },
  {// AW-T2042
    name: `Torre de Sonido Bluetooth Party 6000W`,
    sku: `AW-T2042`,
    link: `/productos/AW-T2042`,
    line: `party`,
    categories: [102], 
    imgs: [
      `/products/AW-T2042/img/1.webp`,
      `/products/AW-T2042/img/2.webp`,
      `/products/AW-T2042/img/3.webp`,
      `/products/AW-T2042/img/4.webp`,
      `/products/AW-T2042/img/5.webp`,
      `/products/AW-T2042/img/6.webp`,
      `/products/AW-T2042/img/7.webp`,
      `/products/AW-T2042/img/8.webp`,
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [ 
      { title: `Cantá en pareja`, img: fileserver + `/banners/doblemic2.webp`,
        desc: 'Se pueden usar hasta 2 micrófonos al mismo tiempo y regulas el volumen independientemente de la música para hacer karaoke y divertirte con amigos.' },
      { title: `Iluminá cualquier espacio`, img: fileserver + `/banners/2042luces.webp`,
        desc: 'Elegí si queres acompañar tu música con sus brillantes luces rgb o si preferís dejarlas apagadas.' },
      { title: 'Power Bank', img: fileserver + '/banners/powerbank.webp',
        desc: '¡Cargá tu celular o tu dispositivo mientras escuchás música! Ahora podés escuchar tu música favorita, sin que se le agote la batería a tu celular en medio de la fiesta.' },
      { title: 'True Wireless Stereo', img: fileserver + `/banners/tws2042.webp`,
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!` },
    ],
    shortDesc: `En todo momento`,
    longDesc: "Una torre lista para acompañarte durante largas horas en todo momento y lugar. Te permite llevar tu música junto a un variado show luminoso.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/torres-de-sonido/255-parlante-torre-bluetooth-power-bank-aiwa-aw-t2042.html`,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `6000W PMPO`
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Power Bank
        id: 13,
      },
      { // Dos Entradas Micrófono 
        id: 27,
      },
      { // Regulador de Volumen de Mic 
        id: 28,
      },
      { // Reguladores graves agudos
        id: 22,
      },
      { // Efectos de Luz
        id: 6,
      },
      { // Woofer + tweeter
        id: 3,
        value: `2 de 8" y 1 tweeter de 2"`
      },
      { // Duracion Batería
        id: 8,
        value: `8 horas (según su uso)`
      },
      { // Mobile Holder
        id: 29,
      },
      { // Manija de Transporte
        id: 30,
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `2 de 8"`,
      },
      { // Tweeters
        id: 4,
        value: `1 de 2"`,
      },
      { // Potencia
        id: 2,
        value: "6000W PMPO",
      },
      { // Batería
        id: 10,
        value: "Litio 3,7v / 3600mAh",
      },
      { // Duración de batería
        id: 11,
        value: "Hasta 8 horas (según su uso)",
      },
      { // Luces
        id: 12,
        value: "RGB en woofer",
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth 5.0",
      },
      { // Funciones
        id: 13,
        value: "TWS, Power Bank",
      },
      { // Reguladores
        id: 5,
        value: "Graves, Agudos, Vol. y Eco de Mic",
      },
      { // Entradas
        id: 8,
        value: "Micrófono x2, Auxiliar",
      },
      { // Efectos
        id: 23,
        value: "De luces",
      },
      { // Otras características
        id: 15,
        value: "Empuñadura de Transporte, Mobile Holder",
      },
      { // Medidas del producto
        id: 16,
        value: "27,5 x 72,5 x 26,5 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "32 x 77 x 30,5 cm",
      },
      { // Peso
        id: 18,
        value: "4,2 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111354402",
      },
    ],
    includes: [
      3, // Cable aux
      4, // Cable microusb
      9, // Manual de usuario
    ],
    downloads: `https://drive.google.com/drive/folders/1QXDROpyb9KKtipho2ldRwI1rJoiBXzgT`,
    variants: []
  },
  {// AW-T2044
    name: `Torre de Sonido Bluetooth Party 6000W`,
    sku: `AW-T2044`,
    link: `/productos/AW-T2044`,
    line: `party`,
    categories: [102], 
    imgs: [
      `/products/AW-T2044/img/1.webp`,
      `/products/AW-T2044/img/2.webp`,
      `/products/AW-T2044/img/3.webp`,
      `/products/AW-T2044/img/4.webp`,
      `/products/AW-T2044/img/5.webp`,
      `/products/AW-T2044/img/6.webp`,
      `/products/AW-T2044/img/7.webp`,
      `/products/AW-T2044/img/8.webp`,
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [ 
      { title: `Cantá en pareja`, img: fileserver + `/banners/doblemic2.webp`,
        desc: 'Se pueden usar hasta 2 micrófonos al mismo tiempo y regulas el volumen independientemente de la música para hacer karaoke y divertirte con amigos.' },
      { title: `Iluminá cualquier espacio`, img: fileserver + `/banners/2044luces.webp`,
        desc: 'Elegí si queres acompañar tu música con sus brillantes luces rgb o si preferís dejarlas apagadas.' },
      { title: 'Power Bank', img: fileserver + '/banners/powerbank.webp',
        desc: '¡Cargá tu celular o tu dispositivo mientras escuchás música! Ahora podés escuchar tu música favorita, sin que se le agote la batería a tu celular en medio de la fiesta.' },
      { title: 'True Wireless Stereo', img: fileserver + `/banners/tws2044.webp`,
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!` },
    ],
    shortDesc: `Coloreá tus fiestas`,
    longDesc: "Preparada para llenar de colores toda la noche. Su Empuñadura de Fácil Transporte y su liviano peso te permiten llevar tu música junto a un variado show luminoso.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/torres-de-sonido/256-parlante-torre-bluetooth-power-bank-aiwa-aw-t2044.html`,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `6000W PMPO`
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Power Bank
        id: 13,
      },
      { // Dos Entradas Micrófono 
        id: 27,
      },
      { // Regulador de Volumen de Mic 
        id: 28,
      },
      { // Reguladores graves agudos
        id: 22,
      },
      { // Efectos de Luz
        id: 6,
      },
      { // Woofer + tweeter
        id: 3,
        value: `2 de 8" y 1 tweeter de 2"`
      },
      { // Duracion Batería
        id: 8,
        value: `8 horas (según su uso)`
      },
      { // Mobile Holder
        id: 29,
      },
      { // Manija de Transporte
        id: 30,
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `2 de 8"`,
      },
      { // Tweeters
        id: 4,
        value: `1 de 2"`,
      },
      { // Potencia
        id: 2,
        value: "6000W PMPO",
      },
      { // Batería
        id: 10,
        value: "Litio 3,7v / 3600mAh",
      },
      { // Duración de batería
        id: 11,
        value: "Hasta 8 horas (según su uso)",
      },
      { // Luces
        id: 12,
        value: "RGB en woofer",
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth 5.0",
      },
      { // Funciones
        id: 13,
        value: "TWS, Power Bank",
      },
      { // Reguladores
        id: 5,
        value: "Graves, Agudos, Vol. y Eco de Mic",
      },
      { // Entradas
        id: 8,
        value: "Micrófono x2, Auxiliar",

      },
      { // Efectos
        id: 23,
        value: "De luces",
      },
      { // Otras características
        id: 15,
        value: "Empuñadura de Transporte, Mobile Holder",
      },
      { // Medidas del producto
        id: 16,
        value: "27,5 x 72,5 x 26,5 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "32 x 77 x 30,5 cm",
      },
      { // Peso
        id: 18,
        value: "4,2 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111354411",
      },
    ],
    includes: [
      3, // Cable aux
      4, // Cable microusb
      9, // Manual de usuario
    ],
    downloads: `https://drive.google.com/drive/folders/1QOPtS-kaZzgK9-kD-SFT8decnb82PeFx`,
    variants: []
  },
  
  /////////////// LINEA INFINIT ////////////////

  {// AW-T2021
    name: `Torre de Sonido Bluetooth Infinit 9500W`,
    sku: `AW-T2021`,
    link: `/productos/AW-T2021`,
    line: `infinit`,
    categories: [102], 
    imgs: [
      `/products/AW-T2021/img/1.webp`,
      `/products/AW-T2021/img/2.webp`,
      `/products/AW-T2021/img/3.webp`,
      `/products/AW-T2021/img/4.webp`,
      `/products/AW-T2021/img/5.webp`,
      `/products/AW-T2021/img/6.webp`,
      `/products/AW-T2021/img/7.webp`,
      `/products/AW-T2021/img/8.webp`,
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [ 
      { title: `Micrófono inalámbrico incluido`, img: fileserver + `/banners/doblemic.webp`,
        desc: '¿Karaoke? ¡de una! Con el micrófono incluido podrás tener increíbles sesiones de Karaoke con tus amigos. ¡Que la fiesta no pare!' },
      { title: 'Power Bank', img: fileserver + '/banners/powerbank.webp',
        desc: '¡Cargá tu celular o tu dispositivo mientras escuchás música! Ahora podés escuchar tu música favorita, sin que se le agote la batería a tu celular en medio de la fiesta.' },
      { title: `Ecualizá tu música`, img: fileserver + `/banners/panel2021.webp`,
        desc: '¡Personalizá tu música como un verdadero Dj! Con las Bandas Ecualizadoras podés ajustar las frecuencias de sonido como más te guste, o simplemente experimentar tu música de otra manera.' },
      { title: `Ideal para fiestas y reuniones`, img: fileserver + `/banners/portatil2021.webp`,
        desc: 'Posee la potencia y autonomía suficiente para animar cualquier celebración, ¡además podés usarlo conectado y disfrutar por más tiempo!' },
    ],
    shortDesc: `Ecualizador preciso`,
    longDesc: "Efectos de luces en forma de anillos Led agregarán un toque fantástico a donde los lleves. Podrás ajustar el sonido a gusto como un verdadero Dj.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/torres-de-sonido/214-parlante-torre-bluetooth-power-bank-aiwa-aw-t2021.html`,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `9500W PMPO`
      },
      { // Woofer
        id: 3,
        value: `2 de 8" y 1 Tweeter de 2"`
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Power Bank
        id: 13,
      },
      { // Mega Bass
        id: 31,
      },
      { // Entrada Aux
        id: 17,
      },
      { // Micrófono Inalámbrico
        id: 14,
      },
      { // Entrada Guitarra y Mic
        id: 21,
      },
      { // Batería Recargable
        id: 7,
        value: `Interna Recargable 7.4V / 3600mAh`
      },
      { // Duracion Batería
        id: 8,
        value: `5 horas (según su uso)`
      },
      { // Reg Graves y Agudos
        id: 22,
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `2 de 8"`,
      },
      { // Tweeters
        id: 4,
        value: `1 de 2"`,
      },
      { // Potencia
        id: 2,
        value: "9500W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 7.4V / 3600mAh",
      },
      { // Duración de batería
        id: 11,
        value: "Hasta 5 horas (según su uso)",
      },
      { // Luces
        id: 12,
        value: "En Panel Superior y alrededor del Woofer",
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth 5.0",
      },
      { // Funciones
        id: 13,
        value: "TWS, Power Bank, Mega Bass",
      },
      { // Reguladores
        id: 5,
        value: "Frecuencias, Graves, Agudos, Eco y Vol. de Micrófono",
      },
      { // Entradas
        id: 8,
        value: "Auxiliar, Micrófono y Guitarra",
      },
      { // Efectos
        id: 23,
        value: "De luces",
      },
      { // Otras características
        id: 15,
        value: "Empuñadura de Transporte",
      },
      { // Medidas del producto
        id: 16,
        value: "30 x 66 x 30 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "37 x 73,3 x 35,5 cm",
      },
      { // Peso
        id: 18,
        value: "8,45 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111354251",
      },
      { // Características Técnicas
        id: 22,
        value: "100-240V~ / 50-60Hz / 40W / Clase II",
      },
    ],
    includes: [
      1, // Mic Inalam
      3, // Cable Aux
      12, // Cable
      9, // Manual de usuario
    ],
    certNo: `Q-AR-01590-T-1`,
    downloads: `https://drive.google.com/drive/folders/1FyB2FsIgxRZDRe_pSfftnQzz7lOFPRDg`,
    variants: []
  },
  {// AW-T2022
    name: `Torre de Sonido Bluetooth Infinit 8500W`,
    sku: `AW-T2022`,
    link: `/productos/AW-T2022`,
    line: `infinit`,
    categories: [102], 
    imgs: [
      `/products/AW-T2022/img/1.webp`,
      `/products/AW-T2022/img/2.webp`,
      `/products/AW-T2022/img/3.webp`,
      `/products/AW-T2022/img/4.webp`,
      `/products/AW-T2022/img/5.webp`,
      `/products/AW-T2022/img/6.webp`,
      `/products/AW-T2022/img/7.webp`,
      `/products/AW-T2022/img/8.webp`,
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [ 
      { title: `¡Pasate a Horizontal!`, img: fileserver + '/banners/horizontal2022.webp',
        desc: 'Este parlante tiene la posibilidad de utilizarse como barra. Es decir que si tenés espacios reducidos o con otro tipo de disposición, podés siempre encontrar el lugar óptimo para tu parlante.' },
      { title: `Entrada para Micrófono y Guitarra`, img: fileserver + '/banners/panel2022.webp',
        desc: '¡Armá tu Karaoke! Posee entrada para micrófono y guitarra ¡conectá y disfrutá tocando toda la noche con tus amigos!' },
      { title: `¡Llevalo a todos lados!`, img: fileserver + `/banners/portatil2022.webp`,
        desc: `¡Llevá la fiesta a donde sea que vayas! Con la Correa de fácil transporte podés moverte con tu música a la terraza, a la playa o a donde gustes.` },
      { title: `Ideal para fiestas y reuniones`, img: fileserver + '/banners/fiestas.webp',
        desc: 'Posee la potencia y autonomía suficiente para animar cualquier celebración, ¡además podés usarlo conectado y disfrutar por más tiempo!' },
      { title: 'Power Bank', img: fileserver + '/banners/powerbank.webp',
        desc: '¡Cargá tu celular o tu dispositivo mientras escuchás música! Ahora podés escuchar tu música favorita, sin que se le agote la batería a tu celular en medio de la fiesta.' },
    ],
    shortDesc: `Transportá tu música`,
    longDesc: "Con la Correa de fácil transporte podés moverte con tu música de la terraza, a la playa o en donde mas gustes. Práctica, liviana y portatil, con un sonido potente.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/torres-de-sonido/215-parlante-torre-bluetooth-power-bank-aiwa-aw-t2022.html`,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `8500W PMPO`
      },
      { // Woofer
        id: 3,
        value: `2 de 6,5"`
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Power Bank
        id: 13,
      },
      { // Efectos de Luz
        id: 6,
      },
      { // Entrada Mic y Guitarra
        id: 21,
      },
      { // Tweeter
        id: 35,
        value: `2 de 2"`
      },
      { // Uso Horizontal
        id: 32,
      },
      { // Batería Recargable
        id: 7,
        value: `Interna Recargable 7.4V / 3600mAh`
      },
      { // Duracion Batería
        id: 8,
        value: `5 horas (según su uso)`
      },
      { // Reg Graves y Agudos
        id: 22,
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `2 de 6,5"`,
      },
      { // Tweeters
        id: 4,
        value: `2 de 2"`,
      },
      { // Potencia
        id: 2,
        value: "8500W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 7.4V / 3600mAh",
      },
      { // Duración de batería
        id: 11,
        value: "Hasta 5 horas (según su uso)",
      },
      { // Luces
        id: 12,
        value: "En Panel Superior y alrededor del Woofer",
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth 5.0",
      },
      { // Funciones
        id: 13,
        value: "TWS, Power Bank",
      },
      { // Reguladores
        id: 5,
        value: "Agudos y Graves",
      },
      { // Entradas
        id: 8,
        value: "Auxiliar, Micrófono y Guitarra",
      },
      { // Efectos
        id: 23,
        value: "De luces",
      },
      { // Otras características
        id: 15,
        value: "Correa para Transporte",
      },
      { // Medidas del producto
        id: 16,
        value: "59,4 x 28 x 24,5 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "68,7 x 34 x 30 cm",
      },
      { // Peso
        id: 18,
        value: "6,6 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111354268",
      },
      { // Características Técnicas
        id: 22,
        value: "100-240V~ / 50-60Hz / 40W / Clase II",
      },
    ],
    includes: [
      11, // Correa
      3, // Cable Aux
      5, // Fuente
      9, // Manual de usuario
    ],
    certNo: `Q-AR-01590-T-1`,
    downloads: `https://drive.google.com/drive/folders/1G-0ZfmHeh3HiECKxeV1--6Zo8ObYh1tc`,
    variants: []
  },
  {// AW-T2018R
    name: `Torre de Sonido Bluetooth Infinit 8000W`,
    sku: `AW-T2018R`,
    link: `/productos/AW-T2018R`,
    line: `infinit`,
    categories: [102], 
    imgs: [
      `/products/AW-T2018R/img/1.webp`,
      `/products/AW-T2018R/img/2.webp`,
      `/products/AW-T2018R/img/3.webp`,
      `/products/AW-T2018R/img/4.webp`,
      `/products/AW-T2018R/img/5.webp`,
      `/products/AW-T2018R/img/6.webp`,
      `/products/AW-T2018R/img/7.webp`,
      `/products/AW-T2018R/img/8.webp`,
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [ 
      { title: `Cantá en pareja`, img: fileserver + `/banners/doblemic2.webp`,
        desc: 'Se pueden usar hasta 2 micrófonos al mismo tiempo y regulas el volumen independientemente de la música para hacer karaoke y divertirte con amigos.' },
      { title: 'Power Bank', img: fileserver + '/banners/powerbank.webp',
        desc: '¡Cargá tu celular o tu dispositivo mientras escuchás música! Ahora podés escuchar tu música favorita, sin que se le agote la batería a tu celular en medio de la fiesta.' },
      { title: `Batería de larga duración`, img: fileserver + `/banners/bateria2018.webp`,
        desc: `Increíble batería de larga duración para que nunca te quedes sin escuchar la música que más te gusta.` },
      { title: `Ecualizá tu música`, img: fileserver + `/banners/eq2018.webp`,
        desc: `¡Personalizá tus temas como mas te guste! El botón de Ecualización te permite controlar a tu antojo los Agudos y Graves para darle un sonido auténtico a tus fiestas.` },
    ],
    shortDesc: `Llevalo con vos`,
    longDesc: "Una torre práctica y portátil, con un sonido potente. Con la Empuñadura de Fácil Transporte podés moverte con tu música por donde más gustes.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/torres-de-sonido/213-parlante-torre-bluetooth-power-bank-aiwa-aw-t2018r.html`,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `8000W PMPO`
      },
      { // Woofer
        id: 3,
        value: `1 de 8"`
      },
      { // Bluetooth
        id: 12,
      },
      { // Power Bank
        id: 13,
      },
      { // TWS
        id: 11,
      },
      { // Efectos luz
        id: 6,
      },
      { // Reg Eco
        id: 23,
      },
      { // Doble Entrada Mic 
        id: 27,
      },
      { // Tweeter
        id: 35,
        value: `1 de 2"`
      },
      { // Batería Recargable
        id: 7,
        value: `Interna Recargable 7.4V / 3600mAh`
      },
      { // Duracion Batería
        id: 8,
        value: `6 horas (según su uso)`
      },
      { // Reg Graves y Agudos
        id: 22,
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `1 de 8"`,
      },
      { // Tweeters
        id: 4,
        value: `1 de 2"`,
      },
      { // Potencia
        id: 2,
        value: "8000W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 7.4V / 3600mAh",
      },
      { // Duración de batería
        id: 11,
        value: "Hasta 6 horas (según su uso)",
      },
      { // Luces
        id: 12,
        value: "En Panel Superior y alrededor del Woofer",
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth 5.0",
      },
      { // Funciones
        id: 13,
        value: "TWS, Power Bank",
      },
      { // Reguladores
        id: 5,
        value: "Graves, Agudos y Eco de Micrófono",
      },
      { // Entradas
        id: 8,
        value: "Micrófono x2, Auxiliar",
      },
      { // Display
        id: 6,
        value: "Si",
      },
      { // Otras características
        id: 15,
        value: "Empuñadura de Transporte",
      },
      { // Medidas del producto
        id: 16,
        value: "32 x 56,5 x 32 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "37,5 x 6,08 x 36,5 cm",
      },
      { // Peso
        id: 18,
        value: "5,95 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111354435",
      },
      { // Características Técnicas
        id: 22,
        value: "100-240V~ / 50-60Hz / 25W / Clase II",
      },
    ],
    includes: [
      3, // Aux
      12, // Cable
      9, // Manual de usuario
    ],
    certNo: `Q-AR-01590-T-2`,
    downloads: `https://drive.google.com/drive/folders/1GE6Z6B6kaWc8rHWDrsOloDgEDlfbAYmN`,
    variants: []
  },
  {// AW-T2050R
    name: `Torre de Sonido Bluetooth Infinit 8000W`,
    sku: `AW-T2050R`,
    link: `/productos/AW-T2050R`,
    line: `infinit`,
    categories: [102], 
    imgs: [
      `/products/AW-T2050R/img/1.webp`,
      `/products/AW-T2050R/img/2.webp`,
      `/products/AW-T2050R/img/3.webp`,
      `/products/AW-T2050R/img/4.webp`,
      `/products/AW-T2050R/img/5.webp`,
      `/products/AW-T2050R/img/6.webp`,
      `/products/AW-T2050R/img/7.webp`,
      `/products/AW-T2050R/img/8.webp`,
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [ 
      { title: `Cantá en pareja`, img: fileserver + `/banners/doblemic2.webp`,
        desc: 'Se pueden usar hasta 2 micrófonos al mismo tiempo y regulas el volumen independientemente de la música para hacer karaoke y divertirte con amigos.' },
      { title: `Batería de larga duración`, img: fileserver + '/banners/bateria2050.webp',
        desc: `Increíble batería de larga duración para que nunca te quedes sin escuchar la música que más te gusta.` },
      { title: 'Power Bank', img: fileserver + '/banners/powerbank.webp',
        desc: '¡Cargá tu celular o tu dispositivo mientras escuchás música! Ahora podés escuchar tu música favorita, sin que se le agote la batería a tu celular en medio de la fiesta.' },
      { title: `Ecualizá tu música`, img: fileserver + `/banners/eq2050.webp`,
        desc: `¡Personalizá tus temas como mas te guste! El botón de Ecualización te permite controlar a tu antojo los Agudos y Graves para darle un sonido auténtico a tus fiestas.` },
    ],
    shortDesc: `Fiesta donde vayas`,
    longDesc: "Una torre liviana, práctica y portatil, con un sonido potente. Sus deslumbrantes efectos de luces en forma de anillos le darán ese toque mágico a todos tus momentos.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/torres-de-sonido/216-parlante-torre-bluetooth-power-bank-aiwa-aw-t2050r.html`,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `7000W PMPO`
      },
      { // Woofer
        id: 3,
        value: `2 de 6,5"`
      },
      { // Bluetooth
        id: 12,
      },
      { // Power Bank
        id: 13,
      },
      { // TWS
        id: 11,
      },
      { // Efectos luz
        id: 6,
      },
      { // Reg Eco y Vol Mic
        id: 28,
      },
      { // Doble Entrada Mic 
        id: 27,
      },
      { // Tweeter
        id: 35,
        value: `1 de 2"`
      },
      { // Batería Recargable
        id: 7,
        value: `Interna Recargable 7.4V / 3600mAh`
      },
      { // Duracion Batería
        id: 8,
        value: `8 horas (según su uso)`
      },
      { // Reg Graves y Agudos
        id: 22,
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `2 de 6,5"`,
      },
      { // Tweeters
        id: 4,
        value: `1 de 2"`,
      },
      { // Potencia
        id: 2,
        value: "7000W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 7.4V / 3600mAh",
      },
      { // Duración de batería
        id: 11,
        value: "Hasta 8 horas (según su uso)",
      },
      { // Luces
        id: 12,
        value: "En Panel Superior y alrededor del Woofer",
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth 5.0",
      },
      { // Funciones
        id: 13,
        value: "TWS, Power Bank",
      },
      { // Reguladores
        id: 5,
        value: "Graves, Agudos y Eco de Micrófono",
      },
      { // Entradas
        id: 8,
        value: "Auxiliar, Micrófono x2",
      },
      { // Efectos
        id: 23,
        value: "De luces",
      },
      { // Otras características
        id: 15,
        value: "Empuñadura de Transporte",
      },
      { // Medidas del producto
        id: 16,
        value: "26 x 59 x 30 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "37 x 73,3 x 25 cm",
      },
      { // Peso
        id: 18,
        value: "5,35 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111354428",
      },
      { // Características Técnicas
        id: 22,
        value: "100-240V~ / 50-60Hz / 0.6A MAX / Clase II",
      },
    ],
    includes: [
      3, // Aux
      5, // Fuente
      9, // Manual de usuario
    ],
    certNo: `RA 4183955 E`,
    downloads: `https://drive.google.com/drive/folders/1Gzi7xqLXOCRYK42Zz3Jv3C_bDA7E8SBA`,
    variants: []
  },
  {// AW-T506R
    name: `Torre de Sonido Bluetooth Infinit 6500W`,
    sku: `AW-T506R`,
    link: `/productos/AW-T506R`,
    line: `infinit`,
    categories: [102], 
    imgs: [
      `/products/AW-T506R/img/1.webp`,
      `/products/AW-T506R/img/2.webp`,
      `/products/AW-T506R/img/3.webp`,
      `/products/AW-T506R/img/4.webp`,
      `/products/AW-T506R/img/5.webp`,
      `/products/AW-T506R/img/6.webp`,
      `/products/AW-T506R/img/7.webp`,
      `/products/AW-T506R/img/8.webp`,
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [ 
      { title: `¡Pasate a Horizontal!`, img: fileserver + `/banners/horizontal506.webp`,
        desc: 'Este parlante tiene la posibilidad de utilizarse como barra. Es decir que si tenés espacios reducidos o con otro tipo de disposición, podés siempre encontrar el lugar óptimo para tu parlante.' },
      { title: `Conectividad sin límites`, img: fileserver + `/banners/panel506.webp`,
        desc: `¡Cuántas formas de reproducir música! Posee Bluetooth, Radio, puerto USB, entrada Auxiliar y puerto para tarjetas TF/MicroSD.` },
      { title: `Cantá en pareja`, img: fileserver + `/banners/doblemic2.webp`,
        desc: 'Se pueden usar hasta 2 micrófonos al mismo tiempo y regulas el volumen independientemente de la música para hacer karaoke y divertirte con amigos.' },
      { title: `Personalizá tus temas`, img: fileserver + `/banners/perillas506nopb.webp`,
        desc: 'Podés regular los graves y agudos, o bien modificar el eco del micrófono tan solo presionando y girarando las perillas en el panel de control. ¡Animate a probarlo, es súper fácil!' },
      { title: `Accesorios incluidos`, img: fileserver + '/banners/micycontrol.webp',
        desc: '¡Armá tu Karaoke! Incluye micrófono con cable, y control remoto para que puedas gestionar tu música a distancia.' }
    ],
    shortDesc: `Más versatilidad`,
    longDesc: "Práctico. Ideal para escuchar música en cualquier formato. Potente y altamente portable. Se puede utilizar tanto en vertical como en horizontal.",
    buyLink: ``,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `6500W PMPO`
      },
      { // Woofer
        id: 3,
        value: `2 de 6,5"`
      },
      { // Bluetooth
        id: 12,
      },
      { // TWS
        id: 11,
      },
      { // Efectos luz
        id: 6,
        value: 5, // Cantidad de efectos
      },
      { // TF
        id: 26,
      },
      { // USB
        id: 33,
      },
      { // Tweeter
        id: 35,
        value: `1 de 2"`
      },
      { // Uso Horizontal
        id: 32,
      },
      { // Duracion Batería
        id: 8,
        value: `8 horas (según su uso)`
      },
      { // Reg Graves y Agudos
        id: 22,
      },
      { // Radio
        id: 25,
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `2 de 6,5"`,
      },
      { // Tweeters
        id: 4,
        value: `1 de 2"`,
      },
      { // Potencia
        id: 2,
        value: "6500W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 7.4V / 3600mAh",
      },
      { // Luces
        id: 12,
        value: "En Panel Superior y alrededor del Woofer",
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth 5.0",
      },
      { // Funciones
        id: 13,
        value: "TWS, Radio FM",
      },
      { // Reguladores
        id: 5,
        value: "Graves, Agudos, Eco y Volumen de Micrófono",
      },
      { // Entradas
        id: 8,
        value: "Auxiliar, USB, Micro SD, Micrófono x2",
      },
      { // Efectos
        id: 23,
        value: "De luces",
      },
      { // Otras características
        id: 15,
        value: "Empuñadura de Transporte",
      },
      { // Medidas del producto
        id: 16,
        value: "25 x 59 x 23 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "30 x 64 x 28 cm",
      },
      { // Peso
        id: 18,
        value: "4,2 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111353988",
      },
      { // USO
        id: 21,
        value: "Horizontal y vertical",
      },
    ],
    includes: [
      2, // Mic cable
      7, // Control
      3, // Aux
      5, // Fuente
      9, // Manual
    ],
    certNo: `00Q-AR-01223-T-1`,
    downloads: `https://drive.google.com/drive/folders/18tQIPtI8gXQqVhDkp2vT8Lxb00Cqz9t9`,
    variants: [`AW-T506R`, `AW-T265SF`, `AW-T265SF-SA`, `AW-T506R-PB`]
  },
  {// AW-T265SF
    name: `Torre de Sonido Bluetooth Infinit 6500W`,
    sku: `AW-T265SF`,
    link: `/productos/AW-T265SF`,
    line: `infinit`,
    categories: [102], 
    imgs: [
      `/products/AW-T265SF/img/1.webp`,
      `/products/AW-T265SF/img/2.webp`,
      `/products/AW-T265SF/img/3.webp`,
      `/products/AW-T265SF/img/4.webp`,
      `/products/AW-T265SF/img/5.webp`,
      `/products/AW-T265SF/img/6.webp`,
      `/products/AW-T265SF/img/7.webp`,
      `/products/AW-T265SF/img/8.webp`,
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "2º Generación",
    banners: [ 
      { title: `¡Pasate a Horizontal!`, img: fileserver + `/banners/horizontal506.webp`,
        desc: 'Este parlante tiene la posibilidad de utilizarse como barra. Es decir que si tenés espacios reducidos o con otro tipo de disposición, podés siempre encontrar el lugar óptimo para tu parlante.' },
      { title: `Cantá en pareja`, img: fileserver + `/banners/doblemic2.webp`,
        desc: 'Se pueden usar hasta 2 micrófonos al mismo tiempo y regulas el volumen independientemente de la música para hacer karaoke y divertirte con amigos.' },
      { title: `Conectividad sin límites`,  img: fileserver + `/banners/panel265.webp`,
        desc: `¡Cuántas formas de reproducir música! Posee Bluetooth, puerto USB, entrada Auxiliar y puerto para tarjetas TF/MicroSD.` },
      { title: `Personalizá tus temas`, img: fileserver + `/banners/perillas506nopb.webp`,
        desc: 'Podés regular los graves y agudos, o bien modificar el eco del micrófono tan solo presionando y girarando las perillas en el panel de control. ¡Animate a probarlo, es súper fácil!' },
      { title: `Accesorios incluidos`, img: fileserver + '/banners/micycontrol.webp',
        desc: '¡Armá tu Karaoke! Incluye micrófono con cable, y control remoto para que puedas gestionar tu música a distancia.' },
    ],
    shortDesc: `Más versatilidad`,
    longDesc: "Práctico. Ideal para escuchar música en cualquier formato. Potente y altamente portable. Se puede utilizar tanto en vertical como en horizontal.",
    buyLink: ``,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `6500W PMPO`
      },
      { // Woofer
        id: 3,
        value: `2 de 6,5"`
      },
      { // Bluetooth
        id: 12,
      },
      { // TWS
        id: 11,
      },
      { // Efectos luz
        id: 6,
        value: 5
      },
      { // Reg Eco y Vol Mic
        id: 28,
      },
      { // Reg Graves y Agudos
        id: 22,
      },
      { // Doble Entrada Mic 
        id: 27,
      },
      { // Tweeter
        id: 35,
        value: `1 de 2"`
      },
      { // Uso Horizontal
        id: 32,
      },
      { // Memoria
        id: 26,
      },
      { // USB
        id: 33,
      },
    ],
    features: [
      { // Woofers
        id: 3,
        value: `2 de 6,5"`,
      },
      { // Tweeters
        id: 4,
        value: `1 de 2"`,
      },
      { // Potencia
        id: 2,
        value: "6500W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 7.4V / 3600mAh",
      },
      { // Luces
        id: 12,
        value: "En Panel Superior y alrededor del Woofer",
      },
      { // Uso
        id: 21,
        value: "Horizontal y vertical"
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth 5.0",
      },
      { // Funciones
        id: 13,
        value: "TWS",
      },
      { // Reguladores
        id: 5,
        value: "Graves, Agudos, Eco y Volumen de Micrófono",
      },
      { // Entradas
        id: 8,
        value: "Micrófono x2, Auxiliar, USB, Micro SD",
      },
      { // Radio
        id: 20,
        value: "No posee",
      },
      { // Efectos
        id: 23,
        value: "De luces x5",
      },
      { // Medidas del producto
        id: 16,
        value: "25 x 59 x 23 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "30 x 64 x 28 cm",
      },
      { // Peso
        id: 18,
        value: "4,2 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111354039",
      },
    ],
    includes: [
      2, // Mic cable
      7, // Control
      3, // Aux
      5, // Fuente
      9, // Manual
    ],
    certNo: `00Q-AR-01223-T-1`,
    downloads: `https://drive.google.com/drive/folders/19TuPLjfUNqNVzcWsP9bttgJ3SEH1lXEr`,
    variants: [`AW-T506R`, `AW-T265SF`, `AW-T265SF-SA`, `AW-T506R-PB`]
  },
  {// AW-T265SF-SA
    name: `Torre de Sonido Bluetooth Infinit 6500W`,
    sku: `AW-T265SF-SA`,
    link: `/productos/AW-T265SF-SA`,
    line: `infinit`,
    categories: [102], 
    imgs: [
      `/products/AW-T265SF-SA/img/1.webp`,
      `/products/AW-T265SF-SA/img/2.webp`,
      `/products/AW-T265SF-SA/img/3.webp`,
      `/products/AW-T265SF-SA/img/4.webp`,
      `/products/AW-T265SF-SA/img/5.webp`,
      `/products/AW-T265SF-SA/img/6.webp`,
      `/products/AW-T265SF-SA/img/7.webp`,
      `/products/AW-T265SF-SA/img/8.webp`,
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "3º Generación",
    banners: [ 
      { title: `¡Pasate a Horizontal!`, img: fileserver + `/banners/horizontal506.webp`,
        desc: 'Este parlante tiene la posibilidad de utilizarse como barra. Es decir que si tenés espacios reducidos o con otro tipo de disposición, podés siempre encontrar el lugar óptimo para tu parlante.' },
      { title: `Cantá en pareja`, img: fileserver + `/banners/doblemic2.webp`,
        desc: 'Se pueden usar hasta 2 micrófonos al mismo tiempo y regulas el volumen independientemente de la música para hacer karaoke y divertirte con amigos.' },
      { title: `Conectividad sin límites`, img: fileserver + `/banners/panel265.webp`,
        desc: `¡Cuántas formas de reproducir música! Posee Bluetooth, puerto USB, entrada Auxiliar y puerto para tarjetas TF/MicroSD.` },
      { title: `Personalizá tus temas`, img: fileserver + `/banners/perillas506nopb.webp`,
        desc: 'Podés regular los graves y agudos, o bien modificar el eco del micrófono tan solo presionando y girarando las perillas en el panel de control. ¡Animate a probarlo, es súper fácil!' },
      { title: 'Power Bank', img: fileserver + '/banners/powerbank.webp',
        desc: '¡Cargá tu celular o tu dispositivo mientras escuchás música! Ahora podés escuchar tu música favorita, sin que se le agote la batería a tu celular en medio de la fiesta.' },
    ],
    shortDesc: `Más versatilidad`,
    longDesc: "Práctico. Ideal para escuchar música en cualquier formato. Potente y altamente portable. Se puede utilizar tanto en vertical como en horizontal.",
    buyLink: ``,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `6500W PMPO`
      },
      { // Woofer
        id: 3,
        value: `2 de 6,5"`
      },
      { // Bluetooth
        id: 12,
      },
      { // TWS
        id: 11,
      },
      { // Efectos luz
        id: 6,
        value: 5
      },
      { // Reg Eco y Vol Mic
        id: 28,
      },
      { // Reg Graves y Agudos
        id: 22,
      },
      { // Doble Entrada Mic 
        id: 27,
      },
      { // Tweeter
        id: 35,
        value: `1 de 2"`
      },
      { // Uso Horizontal
        id: 32,
      },
      { // Memoria
        id: 26,
      },
      { // USB
        id: 33,
      },
    ],
    features: [
      { // Woofers
        id: 3,
        value: `2 de 6,5"`,
      },
      { // Tweeters
        id: 4,
        value: `1 de 2"`,
      },
      { // Potencia
        id: 2,
        value: "6500W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 7.4V / 3600mAh",
      },
      { // Luces
        id: 12,
        value: "En Panel Superior y alrededor del Woofer",
      },
      { // Uso
        id: 21,
        value: "Horizontal y vertical"
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth 5.0",
      },
      { // Funciones
        id: 13,
        value: "TWS",
      },
      { // Reguladores
        id: 5,
        value: "Graves, Agudos, Eco y Volumen de Micrófono",
      },
      { // Entradas
        id: 8,
        value: "Micrófono x2, Auxiliar, USB, Micro SD",
      },
      { // Radio
        id: 20,
        value: "No posee",
      },
      { // Efectos
        id: 23,
        value: "De luces x5",
      },
      { // Medidas del producto
        id: 16,
        value: "25 x 59 x 23 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "30 x 64 x 28 cm",
      },
      { // Peso
        id: 18,
        value: "4,2 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111354121",
      },
    ],
    includes: [
      3, // Aux
      5, // Fuente
      9, // Manual
    ],
    certNo: `00Q-AR-01223-T-1`,
    downloads: `https://drive.google.com/drive/folders/1aaXePdKCLlh-Qr1eLbemZO1lAyDNoG50`,
    variants: [`AW-T506R`, `AW-T265SF`, `AW-T265SF-SA`, `AW-T506R-PB`]
  },
  {// AW-T506R-PB
    name: `Torre de Sonido Bluetooth Infinit 6500W`,
    sku: `AW-T506R-PB`,
    link: `/productos/AW-T506R-PB`,
    line: `infinit`,
    categories: [102], 
    imgs: [
      `/products/AW-T506R-PB/img/1.webp`,
      `/products/AW-T506R-PB/img/2.webp`,
      `/products/AW-T506R-PB/img/3.webp`,
      `/products/AW-T506R-PB/img/4.webp`,
      `/products/AW-T506R-PB/img/5.webp`,
      `/products/AW-T506R-PB/img/6.webp`,
      `/products/AW-T506R-PB/img/7.webp`,
      `/products/AW-T506R-PB/img/8.webp`,
      `/products/AW-T506R-PB/img/9.webp`,
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "4º Generación",
    banners: [ 
      { title: `¡Pasate a Horizontal!`, img: fileserver + `/banners/horizontal506.webp`,
        desc: 'Este parlante tiene la posibilidad de utilizarse como barra. Es decir que si tenés espacios reducidos o con otro tipo de disposición, podés siempre encontrar el lugar óptimo para tu parlante.' },
      { title: `Cantá en pareja`, img: fileserver + `/banners/doblemic2.webp`,
        desc: 'Se pueden usar hasta 2 micrófonos al mismo tiempo y regulas el volumen independientemente de la música para hacer karaoke y divertirte con amigos.' },
      { title: `Personalizá tus temas`, img: fileserver + '/banners/perillas506.webp',
        desc: 'Podés regular los graves y agudos, o bien modificar el eco del micrófono tan solo presionando y girarando las perillas en el panel de control. ¡Animate a probarlo, es súper fácil!' },
    ],
    shortDesc: `Más versatilidad`,
    longDesc: "Práctico. Ideal para escuchar música en cualquier formato. Potente y altamente portable. Se puede utilizar tanto en vertical como en horizontal.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/torres-de-sonido/210-parlante-torre-bluetooth-aiwa-25w-power-bank.html`,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `6500W PMPO`
      },
      { // Woofer
        id: 3,
        value: `2 de 6,5"`
      },
      { // Bluetooth
        id: 12,
      },
      { // TWS
        id: 11,
      },
      { // Efectos luz
        id: 6,
        value: 5
      },
      { // Reg Eco y Vol Mic
        id: 28,
      },
      { // Doble Entrada Mic 
        id: 27,
      },
      { // Tweeter
        id: 35,
        value: `1 de 2"`
      },
      { // Uso Horizontal
        id: 32,
      },
      { // Duracion Batería
        id: 8,
        value: `8 horas (según su uso)`
      },
      { // Reg Graves y Agudos
        id: 22,
      },
      { // Power Bank
        id: 13,
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `2 de 6,5"`,
      },
      { // Tweeters
        id: 4,
        value: `1 de 2"`,
      },
      { // Potencia
        id: 2,
        value: "6500W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 7.4V / 3600mAh",
      },
      { // Luces
        id: 12,
        value: "En Panel Superior y alrededor del Woofer",
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth 5.0",
      },
      { // Funciones
        id: 13,
        value: "TWS, Power Bank",
      },
      { // Reguladores
        id: 5,
        value: "Graves, Agudos, Eco y Volumen de Micrófono",
      },
      { // Entradas
        id: 8,
        value: "Micrófono x2, Auxiliar",
      },
      { // Efectos
        id: 23,
        value: "De luces",
      },
      { // Otras características
        id: 15,
        value: "Empuñadura de Transporte",
      },
      { // Medidas del producto
        id: 16,
        value: "25 x 59 x 23 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "30 x 64 x 28 cm",
      },
      { // Peso
        id: 18,
        value: "4,2 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111354350",
      },
      { // Uso
        id: 21,
        value: "Horizontal y vertical"
      }
    ],
    includes: [
      3, // Aux
      5, // Fuente
      9, // Manual
    ],
    certNo: `00Q-AR-01223-T-1`,
    downloads: `https://drive.google.com/drive/folders/188BCWXjwtJWRqXjNcz4YEuZVjhnEjcsA`,
    variants: []
  },
  {// AW-T2202
    name: `Torre de Sonido Bluetooth Infinit 8500W`,
    sku: `AW-T2202`,
    link: `/productos/AW-T2202`,
    line: `infinit`,
    categories: [102], 
    imgs: [
      `/products/AW-T2202/img/1.webp`,
      `/products/AW-T2202/img/2.webp`,
      `/products/AW-T2202/img/3.webp`,
      `/products/AW-T2202/img/4.webp`,
      `/products/AW-T2202/img/5.webp`,
      `/products/AW-T2202/img/6.webp`,
      `/products/AW-T2202/img/7.webp`,
      `/products/AW-T2202/img/8.webp`,
      `/products/AW-T2202/img/9.webp`,
    ].map(e => fileserver + e),
    360: false,
    gen: "1º Generación",
    banners: [ 
      { title: `Power Bank`, img: fileserver + `/banners/powerbank.webp`,
        desc: '¡Cargá tu celular o tu dispositivo mientras escuchás música! Ahora podés escuchar tu música favorita, sin que se le agote la batería a tu celular en medio de la fiesta.' },
      { title: `True Wireless Stereo`, img: fileserver + `/banners/tws2202.webp`,
      desc: 'Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!.' },
      { title: `Batería de larga duración`, img: fileserver + `/banners/bateria2202.webp`,
      desc: `Increíble batería de larga duración para que nunca te quedes sin escuchar la música que más te gusta.`},
      { title: `Conectá y escuchá`, img: fileserver + `/banners/panel2x22.webp`,
      desc: `Posee una entrada para micrófono, una para guitarra, y una entrada auxiliar para que traigas tu sonido de donde quieras.`}
    ],
    shortDesc: `Cargá y reproducí`,
    longDesc: "Gracias a su función Power Bank, cargá tus dispositivos mientras reproducís tus canciones favoritas. ¡Disfrutalo en interiores o exteriores! Posee batería recargable de larga duración.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/torres-de-sonido/336-parlante-torre-bluetooth-power-bank-8500w-aiwa-aw-t2202-7798111354664.html`,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `8500W PMPO`
      },
      { // Woofer
        id: 3,
        value: `2 de 8"`
      },
      { // Bluetooth
        id: 12,
      },
      { // TWS
        id: 11,
      },
      { // Efectos luz
        id: 6,
      },
      { // Reg Eco y Vol Mic
        id: 28,
      },
      { // Entrada Mic 
        id: 16,
      },
      { // Tweeter
        id: 35,
        value: `1 de 2"`
      },
      { // Mobile Holder
        id: 29,
      },
      { // Duracion Batería
        id: 8,
        value: `6 horas (según su uso)`
      },
      { // Reg Graves y Agudos
        id: 22,
      },
      { // Power Bank
        id: 13,
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `2 de 8"`,
      },
      { // Tweeters
        id: 4,
        value: `1 de 2"`,
      },
      { // Potencia
        id: 2,
        value: "8500W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 7.4V / 3600mAh",
      },
      { // Funciones
        id: 13,
        value: "Bluetooth, TWS, Power Bank",
      },
      { // Reguladores
        id: 5,
        value: "Graves, Agudos, Eco y Volumen de Micrófono",
      },
      { // Entradas
        id: 8,
        value: "Micrófono, Auxiliar",
      },
      { // Efectos
        id: 23,
        value: "De luces RGB",
      },
      { // Otras características
        id: 15,
        value: "Empuñadura de Transporte y Ruedas",
      },
      { // Medidas del producto
        id: 16,
        value: "25 x 59 x 24 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "33 x 62 x 33 cm",
      },
      { // EAN
        id: 19,
        value: "7798111354466",
      },
    ],
    includes: [
      3, // Aux
      5, // Fuente
      9, // Manual
    ],
    certNo: `RA 4183955 E`,
    downloads: `https://drive.google.com/drive/folders/1J-Us5t2Ibxg-XO-EvggbG9Ks6KXUqYia`,
    variants: []
  },
  {// AW-T2302
    name: `Torre de Sonido Bluetooth Infinit 8500W`,
    sku: `AW-T2302`,
    link: `/productos/AW-T2302`,
    line: `infinit`,
    categories: [102], 
    imgs: [
      `/products/AW-T2302/img/1.webp`,
      `/products/AW-T2302/img/2.webp`,
      `/products/AW-T2302/img/3.webp`,
      `/products/AW-T2302/img/4.webp`,
      `/products/AW-T2302/img/5.webp`,
      `/products/AW-T2302/img/6.webp`,
      `/products/AW-T2302/img/7.webp`,
      `/products/AW-T2302/img/8.webp`,
      `/products/AW-T2302/img/9.webp`,
    ].map(e => fileserver + e),
    360: false,
    gen: "1º Generación",
    banners: [ 
      { title: `Power Bank`, img: fileserver + `/banners/powerbank.webp`,
        desc: '¡Cargá tu celular o tu dispositivo mientras escuchás música! Ahora podés escuchar tu música favorita, sin que se le agote la batería a tu celular en medio de la fiesta.' },
      { title: `True Wireless Stereo`, img: fileserver + `/banners/tws2302.webp`,
      desc: 'Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!.' },
      { title: `Batería de larga duración`, img: fileserver + `/banners/bateria2302.webp`,
      desc: `Increíble batería de larga duración para que nunca te quedes sin escuchar la música que más te gusta.`},
      { title: `Conectá y escuchá`, img: fileserver + `/banners/panel2x22.webp`,
      desc: `Posee una entrada para micrófono, una para guitarra, y una entrada auxiliar para que traigas tu sonido de donde quieras.`}
    ],
    shortDesc: `Cargá y reproducí`,
    longDesc: "Gracias a su función Power Bank, cargá tus dispositivos mientras reproducís tus canciones favoritas. ¡Disfrutalo en interiores o exteriores! Posee batería recargable de larga duración.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/torres-de-sonido/340-parlante-torre-bluetooth-power-bank-8500w-aiwa-aw-t2302-7798111354688.html`,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `8500W PMPO`
      },
      { // Woofer
        id: 3,
        value: `2 de 8"`
      },
      { // Bluetooth
        id: 12,
      },
      { // TWS
        id: 11,
      },
      { // Efectos luz
        id: 6,
      },
      { // Reg Eco y Vol Mic
        id: 28,
      },
      { // Entrada Mic 
        id: 16,
      },
      { // Tweeter
        id: 35,
        value: `1 de 2"`
      },
      { // Mobile Holder
        id: 29,
      },
      { // Duracion Batería
        id: 8,
        value: `6 horas (según su uso)`
      },
      { // Reg Graves y Agudos
        id: 22,
      },
      { // Power Bank
        id: 13,
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `2 de 8"`,
      },
      { // Tweeters
        id: 4,
        value: `1 de 2"`,
      },
      { // Potencia
        id: 2,
        value: "8500W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 7.4V / 3600mAh",
      },
      { // Funciones
        id: 13,
        value: "Bluetooth, TWS, Power Bank",
      },
      { // Reguladores
        id: 5,
        value: "Graves, Agudos, Eco y Volumen de Micrófono",
      },
      { // Entradas
        id: 8,
        value: "Micrófono, Auxiliar",
      },
      { // Efectos
        id: 23,
        value: "De luces RGB",
      },
      { // Otras características
        id: 15,
        value: "Empuñadura de Transporte y Ruedas",
      },
      { // Medidas del producto
        id: 16,
        value: "25 x 59 x 24 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "33 x 62 x 33 cm",
      },
      { // EAN
        id: 19,
        value: "7798111354664",
      },
    ],
    includes: [
      3, // Aux
      5, // Fuente
      9, // Manual
    ],
    certNo: `RA 4183955 E`,
    downloads: `https://drive.google.com/drive/folders/1_RGkWGhk25SpmSqFyJgq56kcWI4O06EL`,
    variants: []
  },
  {// AW-T2203
    name: `Torre de Sonido Bluetooth Infinit 12.500W`,
    sku: `AW-T2203`,
    link: `/productos/AW-T2203`,
    line: `infinit`,
    categories: [102], 
    imgs: [
      `/products/AW-T2203/img/1.webp`,
      `/products/AW-T2203/img/2.webp`,
      `/products/AW-T2203/img/3.webp`,
      `/products/AW-T2203/img/4.webp`,
      `/products/AW-T2203/img/5.webp`,
      `/products/AW-T2203/img/6.webp`,
      `/products/AW-T2203/img/7.webp`,
      `/products/AW-T2203/img/8.webp`,
      `/products/AW-T2203/img/9.webp`,
    ].map(e => fileserver + e),
    360: false,
    gen: "1º Generación",
    banners: [
      { title: `Micrófono inalámbrico incluido`, img: fileserver + `/banners/microfono.webp`,
      desc: `¿Karaoke? ¡de una! Con el micrófono incluido podrás tener increíbles sesiones de Karaoke con tus amigos. ¡Que la fiesta no pare!`},
      { title: `Conectá y escuchá`, img: fileserver + `/banners/panel2x23.webp`,
      desc: `Posee una entrada para micrófono, una para guitarra, y una entrada auxiliar para que traigas tu sonido de donde quieras.`},
      { title: `True Wireless Stereo`, img: fileserver + `/banners/tws2203.webp`,
      desc: 'Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!.' },
      { title: `Batería de larga duración`, img: fileserver + `/banners/bateria2203.webp`,
      desc: `Increíble batería de larga duración para que nunca te quedes sin escuchar la música que más te gusta.`},
      { title: `Power Bank`, img: fileserver + `/banners/powerbank.webp`,
      desc: '¡Cargá tu celular o tu dispositivo mientras escuchás música! Ahora podés escuchar tu música favorita, sin que se le agote la batería a tu celular en medio de la fiesta.' },
    ],
    shortDesc: `Potencia portátil`,
    longDesc: "Posee 12.500W PMPO de puro poder ¡Cuidado con las vibraciones! Además es completamente portátil e incluye un micrófono inalámbrico para que se arme la fiesta donde quiera que estés, sin necesidad de cables.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/torres-de-sonido/339-parlante-torre-bluetooth-carry-on-12500w-aiwa-aw-t2203-7798111354671.html`,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `12.500W PMPO`
      },
      { // Woofer
        id: 3,
        value: `2 de 10"`
      },
      { // Bluetooth
        id: 12,
      },
      { // TWS
        id: 11,
      },
      { // Efectos luz
        id: 6,
      },
      { // Reg Todos
        id: 40,
      },
      { // Entrada Guitarra
        id: 15,
      },
      { // Tweeter
        id: 35,
        value: `1 de 2"`
      },
      { // Carry-on
        id: 9,
      },
      { // Duracion Batería
        id: 8,
        value: `5 horas (según su uso)`
      },
      { // Doble Entrada Mic
        id: 16,
        value: true
      },
      { // Power Bank
        id: 13,
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `2 de 10"`,
      },
      { // Tweeters
        id: 4,
        value: `1 de 2"`,
      },
      { // Potencia
        id: 2,
        value: "12.500W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 12V / 7.5 Ah",
      },
      { // Funciones
        id: 13,
        value: "Bluetooth, TWS, Power Bank",
      },
      { // Reguladores
        id: 5,
        value: "Graves, Agudos, Eco y Volumen de Micrófono, Volumen de Guitarra",
      },
      { // Entradas
        id: 8,
        value: "Micrófono, Auxiliar, Guitarra",
      },
      { // Efectos
        id: 23,
        value: "De luces RGB",
      },
      { // Otras características
        id: 15,
        value: "Manija extensible y Ruedas",
      },
      { // Medidas del producto
        id: 16,
        value: "34 x 73 x 32 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "38 x 78 x 38 cm",
      },
      { // EAN
        id: 19,
        value: "7798111354671",
      },
    ],
    includes: [
      1, // Mic Inalam
      3, // Aux
      5, // Fuente
      9, // Manual
    ],
    certNo: `Q-AR-01590-T-2`,
    downloads: `https://drive.google.com/drive/folders/1LWDgrClDIxr8AivGY2HqydFlypgeM-Qs`,
    variants: []
  },
  {// AW-T2303
    name: `Torre de Sonido Bluetooth Infinit 12.500W`,
    sku: `AW-T2303`,
    link: `/productos/AW-T2303`,
    line: `infinit`,
    categories: [102], 
    imgs: [
      `/products/AW-T2303/img/1.webp`,
      `/products/AW-T2303/img/2.webp`,
      `/products/AW-T2303/img/3.webp`,
      `/products/AW-T2303/img/4.webp`,
      `/products/AW-T2303/img/5.webp`,
      `/products/AW-T2303/img/6.webp`,
      `/products/AW-T2303/img/7.webp`,
      `/products/AW-T2303/img/8.webp`,
      `/products/AW-T2303/img/9.webp`,
    ].map(e => fileserver + e),
    360: false,
    gen: "1º Generación",
    banners: [ 
      { title: `Micrófono inalámbrico incluido`, img: fileserver + `/banners/microfono.webp`,
      desc: `¿Karaoke? ¡de una! Con el micrófono incluido podrás tener increíbles sesiones de Karaoke con tus amigos. ¡Que la fiesta no pare!`},
      { title: `Conectá y escuchá`, img: fileserver + `/banners/panel2x23.webp`,
      desc: `Posee una entrada para micrófono, una para guitarra, y una entrada auxiliar para que traigas tu sonido de donde quieras.`},
      { title: `True Wireless Stereo`, img: fileserver + `/banners/tws2303.webp`,
      desc: 'Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!.' },
      { title: `Batería de larga duración`, img: fileserver + `/banners/bateria2303.webp`,
      desc: `Increíble batería de larga duración para que nunca te quedes sin escuchar la música que más te gusta.`},
      { title: `Power Bank`, img: fileserver + `/banners/powerbank.webp`,
      desc: '¡Cargá tu celular o tu dispositivo mientras escuchás música! Ahora podés escuchar tu música favorita, sin que se le agote la batería a tu celular en medio de la fiesta.' },
    ],
    shortDesc: `Potencia portátil`,
    longDesc: "Posee 12.500W PMPO de puro poder ¡Cuidado con las vibraciones! Además es completamente portátil e incluye un micrófono inalámbrico para que se arme la fiesta donde quiera que estés, sin necesidad de cables.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/torres-de-sonido/341-parlante-torre-bluetooth-carry-on-12500w-aiwa-2303-7798111354695.html`,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `12.500W PMPO`
      },
      { // Woofer
        id: 3,
        value: `2 de 10"`
      },
      { // Bluetooth
        id: 12,
      },
      { // TWS
        id: 11,
      },
      { // Efectos luz
        id: 6,
      },
      { // Reg Todos
        id: 40,
      },
      { // Entrada Guitarra
        id: 15,
      },
      { // Tweeter
        id: 35,
        value: `1 de 2"`
      },
      { // Carry-on
        id: 9,
      },
      { // Duracion Batería
        id: 8,
        value: `5 horas (según su uso)`
      },
      { // Doble Entrada Mic
        id: 16,
        value: true
      },
      { // Power Bank
        id: 13,
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `2 de 10"`,
      },
      { // Tweeters
        id: 4,
        value: `1 de 2"`,
      },
      { // Potencia
        id: 2,
        value: "12.500W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 12V / 7.5 Ah",
      },
      { // Funciones
        id: 13,
        value: "Bluetooth, TWS, Power Bank",
      },
      { // Reguladores
        id: 5,
        value: "Graves, Agudos, Eco y Volumen de Micrófono, Volumen de Guitarra",
      },
      { // Entradas
        id: 8,
        value: "Micrófono, Auxiliar, Guitarra",
      },
      { // Efectos
        id: 23,
        value: "De luces RGB",
      },
      { // Otras características
        id: 15,
        value: "Manija extensible y Ruedas",
      },
      { // Medidas del producto
        id: 16,
        value: "34 x 73 x 32 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "38 x 78 x 38 cm",
      },
      { // EAN
        id: 19,
        value: "7798111354688",
      },
    ],
    includes: [
      1, // Micrófono inalámbrico
      3, // Aux
      5, // Fuente
      9, // Manual
    ],
    certNo: `Q-AR-01590-T-2`,
    downloads: `https://drive.google.com/drive/folders/1uj7TxKU1pmHBsFiA1wndqz_H62iZA-6o`,
    variants: []
  },
  {// AW-P2016A
    name: `Parlante portátil 5000W`,
    sku: `AW-P2016A`,
    link: `/productos/AW-P2016A`,
    line: `infinit`,
    categories: [102], 
    imgs: [
      `/products/AW-P2016A/img/1.webp`,
      `/products/AW-P2016A/img/2.webp`,
      `/products/AW-P2016A/img/3.webp`,
      `/products/AW-P2016A/img/4.webp`,
      `/products/AW-P2016A/img/5.webp`,
      `/products/AW-P2016A/img/6.webp`,
      `/products/AW-P2016A/img/7.webp`,
      `/products/AW-P2016A/img/8.webp`,
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [ 
      { title: `Efectos de Luces`, img: fileserver + `/banners/luces2016.webp`,
      desc: `Elegí si queres acompañar tu música con sus brillantes luces rgb, posee varios modos para que seleccionés el que va más con vos.`},
      { title: `True Wireless Stereo`, img: fileserver + `/banners/tws2016.webp`,
      desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!`},
      { title: `¡Llevalo a todos lados!`, img: fileserver + `/banners/portatil2016a.webp`,
      desc: `Es ligero y posee batería interna, por lo que podrás escuchar música donde quiera que vayas.`},
    ],
    shortDesc: `Sonido compacto`,
    longDesc: "Imprescindible para tus salidas al aire libre. Altamente portátil, y ofrece un sonido fuerte e impecable. Sus luces RGB son la mejor compañía para cualquier canción.",
    buyLink: ``,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `5000W PMPO`
      },
      { // Woofer
        id: 3,
        value: `1 de 6,5"`
      },
      { // Bluetooth
        id: 12,
      },
      { // TWS
        id: 11,
      },
      { // Efectos luz
        id: 6,
      },
      { // Reg G/A
        id: 22,
      },
      { // Reg Eco/Vol Mic
        id: 28,
      },
      { // Tweeter
        id: 35,
        value: `1 de 1,5"`
      },
      { // Emp Transp
        id: 30,
      },
      { // Duracion Batería
        id: 7,
        value: `de 7,4v / 2400 mAh`
      },
      { // Doble Entrada Mic
        id: 16,
      },
      { // Mobile Holder
        id: 29,
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `1 de 6,5"`,
      },
      { // Tweeters
        id: 4,
        value: `1 de 1,5"`,
      },
      { // Potencia
        id: 2,
        value: "5000 PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 7,4v / 2400mAh",
      },
      { // Funciones
        id: 13,
        value: "Bluetooth, TWS",
      },
      { // Reguladores
        id: 5,
        value: "Graves, Agudos, Volumen y Eco de Micrófono",
      },
      { // Entradas
        id: 8,
        value: "Micrófono y Auxiliar",
      },
      { // Efectos
        id: 23,
        value: "De luces RGB",
      },
      { // Otras características
        id: 15,
        value: "Empuñadura de transporte, Mobile Holder",
      },
      { // Medidas del producto
        id: 16,
        value: "24 x 29.5 x 23 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "28.6 x 37.6 x 27.6 cm",
      },
      { // EAN
        id: 19,
        value: "7798111354688",
      },
    ],
    includes: [
      3, // Aux
      5, // Fuente
      9, // Manual
    ],
    certNo: `A-AR-01984-T0`,
    downloads: `https://drive.google.com/drive/folders/1fqvhM9smX2drb6kmQJZUYXmjO3KzzSgB`,
    variants: []
  },
  {// AW-P2016B
    name: `Parlante portátil 5000W`,
    sku: `AW-P2016B`,
    link: `/productos/AW-P2016B`,
    line: `infinit`,
    categories: [102], 
    imgs: [
      `/products/AW-P2016B/img/1.webp`,
      `/products/AW-P2016B/img/2.webp`,
      `/products/AW-P2016B/img/3.webp`,
      `/products/AW-P2016B/img/4.webp`,
      `/products/AW-P2016B/img/5.webp`,
      `/products/AW-P2016B/img/6.webp`,
      `/products/AW-P2016B/img/7.webp`,
      `/products/AW-P2016B/img/8.webp`,
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [ 
      { title: `Efectos de Luces`, img: fileserver + `/banners/luces2016.webp`,
      desc: `Elegí si queres acompañar tu música con sus brillantes luces rgb, posee varios modos para que seleccionés el que va más con vos.`},
      { title: `True Wireless Stereo`, img: fileserver + `/banners/tws2016.webp`,
      desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!`},
      { title: `¡Llevalo a todos lados!`, img: fileserver + `/banners/portatil2016b.webp`,
      desc: `Es ligero y posee batería interna, por lo que podrás escuchar música donde quiera que vayas.`},
    ],
    shortDesc: `Sonido compacto`,
    longDesc: "Imprescindible para tus salidas al aire libre. Altamente portátil, y ofrece un sonido fuerte e impecable. Sus luces RGB son la mejor compañía para cualquier canción.",
    buyLink: ``,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `5000W PMPO`
      },
      { // Woofer
        id: 3,
        value: `1 de 6,5"`
      },
      { // Bluetooth
        id: 12,
      },
      { // TWS
        id: 11,
      },
      { // Efectos luz
        id: 6,
      },
      { // Reg G/A
        id: 22,
      },
      { // Reg Eco/Vol Mic
        id: 28,
      },
      { // Tweeter
        id: 35,
        value: `1 de 1,5"`
      },
      { // Emp Transp
        id: 30,
      },
      { // Duracion Batería
        id: 7,
        value: `de 7,4v / 2400 mAh`
      },
      { // Doble Entrada Mic
        id: 16,
      },
      { // Mobile Holder
        id: 29,
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `1 de 6,5"`,
      },
      { // Tweeters
        id: 4,
        value: `1 de 1,5"`,
      },
      { // Potencia
        id: 2,
        value: "5000 PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 7,4v / 2400mAh",
      },
      { // Funciones
        id: 13,
        value: "Bluetooth, TWS",
      },
      { // Reguladores
        id: 5,
        value: "Graves, Agudos, Volumen y Eco de Micrófono",
      },
      { // Entradas
        id: 8,
        value: "Micrófono y Auxiliar",
      },
      { // Efectos
        id: 23,
        value: "De luces RGB",
      },
      { // Otras características
        id: 15,
        value: "Empuñadura de transporte, Mobile Holder",
      },
      { // Medidas del producto
        id: 16,
        value: "24 x 29.5 x 23 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "28.6 x 37.6 x 27.6 cm",
      },
      { // EAN
        id: 19,
        value: "7798111354688",
      },
    ],
    includes: [
      3, // Aux
      5, // Fuente
      9, // Manual
    ],
    certNo: `A-AR-01984-T0`,
    downloads: `https://drive.google.com/drive/folders/1fqvhM9smX2drb6kmQJZUYXmjO3KzzSgB`,
    variants: []
  },
  
  /////////////// LINEA FLAMA ////////////////

  {// AW-T604F
    name: `Torre de Sonido Bluetooth Flama 6500W`,
    sku: `AW-T604F`,
    link: `/productos/AW-T604F`,
    line: `flama`,
    categories: [102], 
    imgs: [
      `/products/AW-T604F/img/1.webp`,
      `/products/AW-T604F/img/2.webp`,
      `/products/AW-T604F/img/3.webp`,
      `/products/AW-T604F/img/4.webp`,
      `/products/AW-T604F/img/5.webp`,
      `/products/AW-T604F/img/6.webp`,
    ].map(e => fileserver + e),
    360: true,
    gen: "1º Generación",
    banners: [ 
      { title: `¡Pasate a Horizontal!`, img: fileserver + `/banners/horizontal604.webp`,
        desc: 'Este parlante tiene la posibilidad de utilizarse como barra. Es decir que si tenés espacios reducidos o con otro tipo de disposición, podés siempre encontrar el lugar óptimo para tu parlante.' },
      { title: `Ideal para fiestas y reuniones`, img: fileserver + `/banners/fiestas604.webp`,
        desc: 'Posee la potencia y autonomía suficiente para animar cualquier celebración, ¡además podés usarlo conectado y disfrutar por más tiempo!' },
      { title: `¡Llevalo a todos lados!`, img: fileserver + `/banners/portatil604.webp`,
        desc: 'Posee batería interna, por lo que podrás escuchar música donde quiera que vayas.' },
      { title: `Entrada para Micrófono`, img: fileserver + '/banners/mic604.webp',
      desc: '¡Armá tu Karaoke! Posee entrada para micrófono, conectá uno ¡y disfrutá cantando toda la noche con tus amigos!' },
      { title: 'True Wireless Stereo', img: fileserver + `/banners/tws604.webp`,
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!` },
    ],
    shortDesc: `Llevate fuego`,
    longDesc: "Su práctico tamaño te permitirá llevar el fuego y la diversión a todas partes.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/torres-de-sonido/209-parlante-bluetooth-portatil-serie-flama-6500w.html`,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `6500W PMPO`
      },
      { // Woofer
        id: 3,
        value: `1 de 8"`
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Entrada Mic 
        id: 16,
      },
      { // Tweeter
        id: 35,
        value: `1 de 1"`
      },
      { // Batería Recargable
        id: 7,
        value: `Interna Recargable 7.4V / 3600mAh`
      },
      { // Reg Graves y Agudos
        id: 28,
      },
      { // Uso vertical y hor.
        id: 32,
      },
      { // Empuñadura
        id: 30,
      },
      { // Liviano
        id: 39,
      },
      { // Efectos de luces
        id: 6
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `1 de 8"`,
      },
      { // Tweeters
        id: 4,
        value: `1 de 1"`,
      },
      { // Potencia
        id: 2,
        value: "6500W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 7.4V / 3600mAh",
      },
      { // Luces
        id: 12,
        value: "En Todo el Panel Frontal",
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth",
      },
      { // Funciones
        id: 13,
        value: "TWS",
      },
      { // Reguladores
        id: 5,
        value: "Eco y Vol. de Micrófono",
      },
      { // Entradas
        id: 8,
        value: "Auxiliar y Micrófono",
      },
      { // Display
        id: 6,
        value: "Si",
      },
      { // Otras características
        id: 15,
        value: "Empuñadura de Transporte",
      },
      { // Medidas del producto
        id: 16,
        value: "25 x 39 x 23 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "26,5 x 39,6 x 23,6 cm",
      },
      { // Peso
        id: 18,
        value: "2,6 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111354183",
      },
      { // Características Técnicas
        id: 22,
        value: "100-240V~ / 50-60Hz / 40W / Clase II",
      },
      { // Uso
        id: 21,
        value: "Horizontal y vertical"
      }
    ],
    includes: [
      3, // Aux
      5, // Fuente
      9, // Manual
    ],
    certNo: `00Q-AR-01223-T-1`,
    downloads: `https://drive.google.com/drive/folders/10omQmKKjtEd40bO4OimLYlHeZM_Oqskf`,
    variants: []
  },
  {// AW-T806F
    name: `Torre de Sonido Bluetooth Flama 8000W`,
    sku: `AW-T806F`,
    link: `/productos/AW-T806F`,
    line: `flama`,
    categories: [102], 
    imgs: [
      `/products/AW-T806F/img/1.webp`,
      `/products/AW-T806F/img/2.webp`,
      `/products/AW-T806F/img/3.webp`,
      `/products/AW-T806F/img/4.webp`,
      `/products/AW-T806F/img/5.webp`,
      `/products/AW-T806F/img/6.webp`,
      `/products/AW-T806F/img/7.webp`,
      `/products/AW-T806F/img/8.webp`,
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [ 
      { title: 'Micrófono incluido', img: fileserver + `/banners/microfonocable.webp`,
        desc: `¿Karaoke? ¡de una! Con el micrófono incluido podrás tener increíbles sesiones de Karaoke con tus amigos. Cambiá canciones usando el control remoto incluido. ¡Que la fiesta no pare!` },  
      { title: `Cuerpo de Madera`, img: fileserver + '/banners/cuerpomadera806.webp',
        desc: 'Construcción realizada en madera para lograr un óptimo sonido y una acústica mejorada para el parlante.' },
      { title: `Elegí como hacer brillar tu fuego`, img: fileserver + `/banners/efectos806.webp`,
        desc: `Presionando el botón "Luz" vas a pasar de Llama en llama para elegir la que mejor va con tu fiesta y con tu gente.`,
        priority: true },
      { title: `¡Reproducí lo que sea!`, img: fileserver + `/banners/panel806.webp`,
        desc: 'Posee Radio, puerto USB, entrada Auxiliar y puerto para tarjetas TF/MicroSD.' },
      { title: 'True Wireless Stereo', img: fileserver + `/banners/tws806.webp`,
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!` },
    ],
    shortDesc: `Diversión al máximo`,
    longDesc: "Efectos de luz que van a llamar la atención de todos tus amigos. Llevá con vos esta torre y serás el alma de la fiesta.",
    buyLink: ``,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `8000W PMPO`
      },
      { // Woofer
        id: 3,
        value: `2 de 6,5"`
      },
      { // TWS
        id: 11,
      },
      { // Efectos de luces
        id: 6,
      },
      { // Bluetooth
        id: 12,
      },
      { // Entrada Mic y Guit
        id: 21,
      },
      { // USB + SD
        id: 37,
      },
      { // Batería Recargable
        id: 7,
        value: `Interna Recargable 7.4V / 3600mAh`
      },
      { // Reguladores de todo
        id: 40,
      },
      { // Cuerpo Madera
        id: 18,
      },
      { // Radio
        id: 25,
      },
      { // Tweeter
        id: 35,
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `2 de 6,5"`,
      },
      { // Tweeters
        id: 4,
        value: `1 de 1"`,
      },
      { // Potencia
        id: 2,
        value: "8000W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 7.4V / 3600mAh",
      },
      { // Luces
        id: 12,
        value: "En Todo el Panel Frontal",
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth",
      },
      { // Funciones
        id: 13,
        value: "TWS, Radio FM, REC",
      },
      { // Reguladores
        id: 5,
        value: "Graves, Agudos, Volumen de Guitarra, Eco y Vol. de Micrófono",
      },
      { // Entradas
        id: 8,
        value: "Guitarra, USB, Micro SD, Auxiliar y Micrófono",
      },
      { // Cuerpo madera
        id: 24,
        value: "Madera",
      },
      { // Otras características
        id: 15,
        value: "Mobile Holder, Empuñadura de Transporte",
      },
      { // Medidas del producto
        id: 16,
        value: "27 x 65,5 x 27 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "32 x 74 x 30,5 cm",
      },
      { // Peso
        id: 18,
        value: "7,2 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111353995",
      },
      { // Efectos de luces
        id: 23,
        value: "De luces x6"
      }
    ],
    includes: [
      2, // Mic cable
      7, // Control
      3, // Aux
      5, // Fuente
      9, // Manual
    ],
    certNo: `00Q-AR-01223-T-1`,
    downloads: `https://drive.google.com/drive/folders/19-zSuHUdeevC5edP-winJgJDvXuqjezA`,
    variants: [`AW-T806F`, `AW-T806F-SA`, `AW-T806F-PB`]
  },
  {// AW-T806F-SA
    name: `Torre de Sonido Bluetooth Flama 8000W`,
    sku: `AW-T806F-SA`,
    link: `/productos/AW-T806F-SA`,
    line: `flama`,
    categories: [102], 
    imgs: [
      `/products/AW-T806F-SA/img/1.webp`,
      `/products/AW-T806F-SA/img/2.webp`,
      `/products/AW-T806F-SA/img/3.webp`,
      `/products/AW-T806F-SA/img/4.webp`,
      `/products/AW-T806F-SA/img/5.webp`,
      `/products/AW-T806F-SA/img/6.webp`,
      `/products/AW-T806F-SA/img/7.webp`,
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "2º Generación",
    banners: [ 
      { title: `Cuerpo de Madera`, img: fileserver + '/banners/cuerpomadera806.webp',
        desc: 'Construcción realizada en madera para lograr un óptimo sonido y una acústica mejorada para el parlante.' },
      { title: `¡Reproducí lo que sea!`, img: fileserver + `/banners/panel806.webp`,
        desc: 'Posee Radio, puerto USB, entrada Auxiliar y puerto para tarjetas TF/MicroSD.' },
      { title: `Elegí como hacer brillar tu fuego`, img: fileserver + `/banners/efectos806.webp`,
        desc: `Presionando el botón "Luz" vas a pasar de Llama en llama para elegir la que mejor va con tu fiesta y con tu gente.` },
      { title: `Reguladores independientes`, img: fileserver + '/banners/reg806.webp',
        desc: 'Regulá de forma independiente el volumen de tu guitarra, del micrófono y el eco del micrófono.' },
      { title: 'True Wireless Stereo', img: fileserver + `/banners/tws806.webp`,
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!` },
    ],
    shortDesc: `Diversión al máximo`,
    longDesc: "Efectos de luz que van a llamar la atención de todos tus amigos. Llevá con vos esta torre y serás el alma de la fiesta.",
    buyLink: ``,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `8000W PMPO`
      },
      { // Woofer
        id: 3,
        value: `2 de 6,5"`
      },
      { // TWS
        id: 11,
      },
      { // Efectos de luces
        id: 6,
      },
      { // Bluetooth
        id: 12,
      },
      { // Entrada Mic y Guit
        id: 21,
      },
      { // Radio
        id: 25,
      },
      { // Batería Recargable
        id: 7,
        value: `Interna Recargable 7.4V / 3600mAh`
      },
      { // Reguladores
        id: 22,
      },
      { // Reg Eco y Vol
        id: 28,
      },
      { // Memoria SD + USB
        id: 37,
      },
      { // Tweeter
        id: 35,
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `2 de 6,5"`,
      },
      { // Tweeters
        id: 4,
        value: `1 de 1"`,
      },
      { // Potencia
        id: 2,
        value: "8000W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 7.4V / 3600mAh",
      },
      { // Efectos
        id: 23,
        value: "De luces x6",
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth",
      },
      { // Funciones
        id: 13,
        value: "TWS, Radio FM, REC",
      },
      { // Reguladores
        id: 5,
        value: "Graves, Agudos, Volumen de Guitarra, Eco y Vol. de Micrófono",
      },
      { // Entradas
        id: 8,
        value: "Guitarra, USB, Micro SD, Auxiliar y Micrófono",
      },
      { // Display
        id: 6,
        value: "Si",
      },
      { // Otras características
        id: 15,
        value: "Mobile Holder, Empuñadura de Transporte",
      },
      { // Medidas del producto
        id: 16,
        value: "27 x 65,5 x 27 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "32 x 74 x 30,5 cm",
      },
      { // Peso
        id: 18,
        value: "7,2 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111354114",
      },
      {
        id: 24,
        value: "Madera"
      }
    ],
    includes: [
      3, // Aux
      5, // Fuente
      9, // Manual
    ],
    certNo: `00Q-AR-01223-T-1`,
    downloads: `https://drive.google.com/drive/folders/10X95ULeGxUO5PkCI8hbaJtSF59eDUSST`,
    variants: [`AW-T806F`, `AW-T806F-SA`, `AW-T806F-PB`]
  },
  {// AW-T806F-PB
    name: `Torre de Sonido Bluetooth Flama 8000W`,
    sku: `AW-T806F-PB`,
    link: `/productos/AW-T806F-PB`,
    line: `flama`,
    categories: [102], 
    imgs: [
      `/products/AW-T806F-PB/img/1.webp`,
      `/products/AW-T806F-PB/img/2.webp`,
      `/products/AW-T806F-PB/img/3.webp`,
      `/products/AW-T806F-PB/img/4.webp`,
      `/products/AW-T806F-PB/img/5.webp`,
      `/products/AW-T806F-PB/img/6.webp`,
      `/products/AW-T806F-PB/img/7.webp`,
      `/products/AW-T806F-PB/img/8.webp`,
      `/products/AW-T806F-PB/img/9.webp`,
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "3º Generación",
    banners: [ 
      { title: `Cuerpo de Madera`, img: fileserver + '/banners/cuerpomadera806.webp',
        desc: 'Construcción realizada en madera para lograr un óptimo sonido y una acústica mejorada para el parlante.' },
      { title: `Elegí como hacer brillar tu fuego`, img: fileserver + `/banners/efectos806.webp`,
        desc: `Presionando el botón "Luz" vas a pasar de Llama en llama para elegir la que mejor va con tu fiesta y con tu gente.` },
      { title: `Reguladores independientes`, img: fileserver + '/banners/reg806.webp',
        desc: 'Regulá de forma independiente el volumen de tu guitarra, del micrófono y el eco del micrófono.' },
      { title: 'True Wireless Stereo', img: fileserver + `/banners/tws806.webp`,
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!` },
      { title: 'Power Bank', img: fileserver + '/banners/powerbank.webp',
        desc: '¡Cargá tu celular o tu dispositivo mientras escuchás música! Ahora podés escuchar tu música favorita, sin que se le agote la batería a tu celular en medio de la fiesta.' },
    ],
    shortDesc: `Diversión al máximo`,
    longDesc: "Efectos de luz que van a llamar la atención de todos tus amigos. Llevá con vos esta torre y serás el alma de la fiesta.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/torres-de-sonido/103-parlante-torre-bluetooth-portatil-flama-luces-aiwa-aw-t806f-7798111353995.html`,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `8000W PMPO`
      },
      { // Woofer
        id: 3,
        value: `2 de 6,5"`
      },
      { // TWS
        id: 11,
      },
      { // Efectos de luces
        id: 6,
        value: 6
      },
      { // Bluetooth
        id: 12,
      },
      { // Entrada Mic y Guit
        id: 21,
      },
      { // Power Bank
        id: 13,
      },
      { // Entrada Auxiliar
        id: 17,
      },
      { // Batería Recargable
        id: 7,
        value: `Interna Recargable 7.4V / 3600mAh`
      },
      { // Reguladores
        id: 22,
      },
      { // Reg Eco y Vol
        id: 28,
      },
      { // Tweeter
        id: 35,
        value: `1 de 1"`
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `2 de 6,5"`,
      },
      { // Tweeters
        id: 4,
        value: `1 de 1"`,
      },
      { // Potencia
        id: 2,
        value: "8000W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 7.4V / 3600mAh",
      },
      { // Luces
        id: 23,
        value: "De luces x6",
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth",
      },
      { // Funciones
        id: 13,
        value: "TWS, Power Bank, Estilos, Mute",
      },
      { // Reguladores
        id: 5,
        value: "Graves, Agudos, Volumen de Guitarra, Eco y Vol. de Micrófono",
      },
      { // Entradas
        id: 8,
        value: "Guitarra, Auxiliar y Micrófono",
      },
      { // Cuerpo Madera
        id: 24,
        value: "Madera",
      },
      { // Otras características
        id: 15,
        value: "Mobile Holder, Empuñadura de Transporte",
      },
      { // Medidas del producto
        id: 16,
        value: "27 x 65,5 x 27 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "32 x 74 x 30,5 cm",
      },
      { // Peso
        id: 18,
        value: "7,2 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111354466",
      },
      {
        id: 6,
        value: `Si`
      }
    ],
    includes: [
      3, // Aux
      5, // Fuente
      9, // Manual
    ],
    certNo: `00Q-AR-01223-T-1`,
    downloads: `https://drive.google.com/drive/folders/19pctxOL_BvlxooIZqpQSDT-RmdGa6LQV`,
    variants: []
  },
  {// AW-T1008F
    name: `Torre de Sonido Bluetooth Flama 9500W`,
    sku: `AW-T1008F`,
    link: `/productos/AW-T1008F`,
    line: `flama`,
    categories: [102], 
    imgs: [
      `/products/AW-T1008F/img/1.webp`,
      `/products/AW-T1008F/img/2.webp`,
      `/products/AW-T1008F/img/3.webp`,
      `/products/AW-T1008F/img/4.webp`,
      `/products/AW-T1008F/img/5.webp`,
      `/products/AW-T1008F/img/6.webp`,
      `/products/AW-T1008F/img/7.webp`,
      `/products/AW-T1008F/img/8.webp`,
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [ 
      { title: `¡Reproducí lo que sea!`, img: fileserver + `/banners/panel1008.webp`,
        desc: 'Posee Radio, puerto USB, entrada Auxiliar y puerto para tarjetas TF/MicroSD.' },
      { title: `Micrófono Inalámbrico`, img: fileserver + `/banners/microfonofx.webp`,
        desc: `¡Libre de cables! Incluye micrófono inalámbrico y control remoto. 5 efectos de voz integrados para tener divertidas sesiones de Karaoke.` },
      { title: `Elegí como hacer brillar tu fuego`, img: fileserver + `/banners/efectos806.webp`,
        desc: `Presionando el botón "Luz" vas a pasar de Llama en llama para elegir la que mejor va con tu fiesta y con tu gente. Posee en total 6 efectos diferentes.`,
        priority: true },
      { title: 'Power Bank', img: fileserver + '/banners/powerbank.webp',
        desc: '¡Cargá tu celular o tu dispositivo mientras escuchás música! Ahora podés escuchar tu música favorita, sin que se le agote la batería a tu celular en medio de la fiesta.' },
      { title: `Ideal para fiestas y reuniones`, img: fileserver + '/banners/fiestas.webp',
        desc: 'Posee la potencia y autonomía suficiente para animar cualquier celebración, ¡además podés usarlo conectado y disfrutar por más tiempo!' },
      { title: `Nunca te olvides la fiesta afuera`, img: fileserver + '/banners/ruedas1008.webp',
        desc: 'Con sus ruedas vas a poder llevar tu flama a todas partes. Su Peso ligero y empuñadura superior te ayudaran en la tarea de llevar tu música a donde sea.' }
    ],
    shortDesc: `Acercate al fuego`,
    longDesc: "No solo podrás reproducir música desde cualquier dispositivo, sino que hasta 3 micrófonos pueden conectarse al parlante para poder disfrutar de una noche FLAMA.",
    buyLink: ``,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `9500W PMPO`
      },
      { // Woofer
        id: 3,
        value: `2 de 8" y 1 tweeter de 1"`
      },
      { // TWS
        id: 11,
      },
      { // Efectos de luces
        id: 6,
        value: 6
      },
      { // Bluetooth
        id: 12,
      },
      { // Entrada Mic
        id: 27,
      },
      { // Reg graves/agudos
        id: 22,
      },
      { // Power Bank
        id: 13,
      },
      { // Reg Eco y Vol
        id: 28,
      },
      { // Memoria SD + USB
        id: 37,
      },
      { // Radio
        id: 25,
      },
      { // Efectos de voz
        id: 4,
        value: 5
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `2 de 8"`,
      },
      { // Tweeters
        id: 4,
        value: `1 de 1"`,
      },
      { // Potencia
        id: 2,
        value: "9500W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 7.4V / 3600mAh",
      },
      { // Luces
        id: 12,
        value: "En Todo el Panel Frontal, 6 efectos",
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth",
      },
      { // Funciones
        id: 13,
        value: "TWS, Power Bank, Radio FM, REC",
      },
      { // Reguladores
        id: 5,
        value: "Estilos, Eco y Vol. de Micrófono",
      },
      { // Entradas
        id: 8,
        value: "USB, Micro SD, Auxiliar y Micrófono x2",
      },
      { // Display
        id: 6,
        value: "Si",
      },
      { // Efectos de voz
        id: 25,
        value: "Si, 5"
      },
      { // Otras características
        id: 15,
        value: "Mobile Holder, Empuñadura de Transporte, Ruedas",
      },
      { // Medidas del producto
        id: 16,
        value: "31 x 76,5 x 30 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "36 x 81 x 36 cm",
      },
      { // Peso
        id: 18,
        value: "9,5 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111354008",
      },
    ],
    includes: [
      1, // Mic inalam
      8, // Control
      3, // Aux
      5, // Fuente
      9, // Manual
    ],
    certNo: `00Q-AR-01223-T-1`,
    downloads: `https://drive.google.com/drive/folders/1x8k5MstMDILw0gNMnFilaf1Kuf_yGZQ2`,
    variants: [`AW-T1008F`, `AW-T1008F-PB`]
  },
  {// AW-T1008F-PB
    name: `Torre de Sonido Bluetooth Flama 9500W`,
    sku: `AW-T1008F-PB`,
    link: `/productos/AW-T1008F-PB`,
    line: `flama`,
    categories: [102], 
    imgs: [
      `/products/AW-T1008F-PB/img/1.webp`,
      `/products/AW-T1008F-PB/img/2.webp`,
      `/products/AW-T1008F-PB/img/3.webp`,
      `/products/AW-T1008F-PB/img/4.webp`,
      `/products/AW-T1008F-PB/img/5.webp`,
      `/products/AW-T1008F-PB/img/6.webp`,
      `/products/AW-T1008F-PB/img/8.webp`,
      `/products/AW-T1008F-PB/img/9.webp`,
      `/products/AW-T1008F-PB/img/10.webp`,
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "2º Generación",
    banners: [ 
      { title: `Micrófono Inalámbrico`, img: fileserver + `/banners/microfonofx.webp`,
        desc: `Con el micrófono inalámbrico incluido y los 5 efectos de voz integrados podrás tener increíbles sesiones de Karaoke con tus amigos. ¡Que la fiesta no pare!` },
      { title: `Elegí como hacer brillar tu fuego`, img: fileserver + `/banners/efectos806.webp`,
        desc: `Presionando el botón "Luz" vas a pasar de Llama en llama para elegir la que mejor va con tu fiesta y con tu gente. Posee en total 6 efectos diferentes.`,
        priority: true },
      { title: 'Power Bank', img: fileserver + '/banners/powerbank.webp',
        desc: '¡Cargá tu celular o tu dispositivo mientras escuchás música! Ahora podés escuchar tu música favorita, sin que se le agote la batería a tu celular en medio de la fiesta.' },
      { title: `Ideal para fiestas y reuniones`, img: fileserver + '/banners/fiestas.webp',
        desc: 'Posee la potencia y autonomía suficiente para animar cualquier celebración, ¡además podés usarlo conectado y disfrutar por más tiempo!' },
      { title: `Nunca te olvides la fiesta afuera`, img: fileserver + '/banners/ruedas1008.webp',
        desc: 'Con sus ruedas vas a poder llevar tu flama a todas partes. Su Peso ligero y empuñadura superior te ayudaran en la tarea de llevar tu música a donde sea.' }
    ],
    shortDesc: `Acercate al fuego`,
    longDesc: "No solo podrás reproducir música desde cualquier dispositivo, sino que hasta 3 micrófonos pueden conectarse al parlante para poder disfrutar de una noche FLAMA.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/torres-de-sonido/98-parlante-torre-bluetooth-portatil-flama-luces-aiwa-aw-t1008f-7798111354008.html`,
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: `9500W PMPO`
      },
      { // Woofer
        id: 3,
        value: `2 de 8" y 1 tweeter de 1"`
      },
      { // TWS
        id: 11,
      },
      { // Efectos de luces
        id: 6,
        value: 6
      },
      { // Bluetooth
        id: 12,
      },
      { // Entrada Mic
        id: 27,
      },
      { // Reg graves y agudos
        id: 22,
      },
      { // Power Bank
        id: 13,
      },
      { // Reg Eco y Vol
        id: 28,
      },
      { // Megabass
        id: 31,
      },
      { // Ruedas
        id: 19,
      },
      { // Efectos de voz
        id: 4,
        value: 5
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `2 de 8"`,
      },
      { // Tweeters
        id: 4,
        value: `1 de 1"`,
      },
      { // Potencia
        id: 2,
        value: "9500W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 7.4V / 3600mAh",
      },
      { // Luces
        id: 12,
        value: "En Todo el Panel Frontal (6 efectos)",
      },
      { // Conectividad
        id: 9,
        value: "Bluetooth",
      },
      { // Funciones
        id: 13,
        value: "TWS, Power Bank, MEGA BASS",
      },
      { // Reguladores
        id: 5,
        value: "Agudos, Graves, Eco y Vol. de Micrófono",
      },
      { // Entradas
        id: 8,
        value: "Auxiliar y Micrófono x2",
      },
      { // Display
        id: 6,
        value: "Si",
      },
      { // Efectos de Voz
        id: 25, value: `Si, 5`,
      },
      { // Otras características
        id: 15,
        value: "Mobile Holder, Empuñadura de Transporte, Ruedas",
      },
      { // Medidas del producto
        id: 16,
        value: "31 x 76,5 x 30 cm",
      },
      { // Medidas de la caja
        id: 17,
        value: "36 x 81 x 36 cm",
      },
      { // Peso
        id: 18,
        value: "9,5 Kg",
      },
      { // EAN
        id: 19,
        value: "7798111354459",
      },
    ],
    includes: [
      1, // Mic inalam
      3, // Aux
      5, // Fuente
      9, // Manual
    ],
    certNo: `00Q-AR-01223-T-1`,
    downloads: `https://drive.google.com/drive/folders/19O4ElAPI5VeQy71U01Y9U17tnsG-KUn-`,
    variants: []
  },

  /////////////// AURICULARES ////////////////

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
    ].map(e => fileserver + e),
    360: true,
    gen: "1º Generación",
    banners: [   
      { title: `Almohadillas Soft`, img: fileserver + '/banners/almohadillas102n.webp',
      desc: 'Sus almohadillas son suaves, muy cómodas, y se adaptan a cualquier tipo de oreja.' },
      { title: `Mantené el control`, img: fileserver + '/banners/cable102n.webp', 
      desc: 'Cable extraíble para tu comodidad, con micrófono y botón para atender llamadas. No te preocupes por cables enredados, su sistema flat-cable evita las torceduras.' },
      { title: `Vincha Plegable`, img: fileserver + '/banners/diseñocalidad102n.webp',
      desc: '¡Nunca fué tan fácil transportar tus auriculares! Doblá sus extremos y remové el cable para poder llevarlos en cualquier bolsillo.' },
      { title: `Diseño Ultraligero`, img: fileserver + '/banners/ligero102b.webp', 
      desc: 'Pesan tan sólo 146g. ¡Apenas sentirás que los tenés puestos! Podés usarlos sin parar durante horas.' },
    ],
    shortDesc: `Tu compañía indispensable`,
    longDesc: "A donde vayas, lo llevas para que tu música preferida suene en alta fidelidad. Posee cable extraíble con micrófono para que puedas retirarlo, y guardarlo o reemplazarlo.",
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
    colors: [`AVA-102N`, `AVA-102B`]
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
    ].map(e => fileserver + e),
    360: true,
    gen: "1º Generación",
    banners: [ 
      { title: `Almohadillas Soft`, img: fileserver + '/banners/almohadillas102n.webp',
      desc: 'Sus almohadillas son suaves, muy cómodas, y se adaptan a cualquier tipo de oreja.' },
      { title: `Mantené el control`, img: fileserver + '/banners/cable102b.webp', 
      desc: 'Cable extraíble para tu comodidad, con micrófono y botón para atender llamadas. No te preocupes por cables enredados, su sistema flat-cable evita las torceduras.' },
      { title: `Vincha Plegable`, img: fileserver + '/banners/diseñocalidad102b.webp',
      desc: '¡Nunca fué tan fácil transportar tus auriculares! Doblá sus extremos y remové el cable para poder llevarlos en cualquier bolsillo.' },
      { title: `Diseño Ultraligero`, img: fileserver + '/banners/ligero102b.webp', 
      desc: 'Pesan tan sólo 146g. ¡Apenas sentirás que los tenés puestos! Podés usarlos sin parar durante horas.' },  
    ],
    shortDesc: `Tu compañía indispensable`,
    longDesc: "A donde vayas, lo llevas para que tu música preferida suene en alta fidelidad. Posee cable extraíble con micrófono para que puedas retirarlo, y guardarlo o reemplazarlo.",
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
    colors: [`AVA-102N`, `AVA-102B`]
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
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [ 
      { title: `Almohadillas Soft`, img: fileserver + `/banners/almohadillas301n.webp`,
        desc: `Los materiales ligeros y las suaves almohadillas con banda de sujeción acolchada hacen que los auriculares sean cómodos durante largos períodos.` },
      { title: `Conexión Bluetooth 5.0`, img: fileserver + `/banners/bluetooth301n.webp`,
        desc: `Los auriculares AIWA cuentan con la nueva tecnología Bluetooth versión 5.0 que te permiten transmitir datos con el doble de rapidez, y a una distancia mucho mayor que la versión anterior.` },
      { title: `Llevá la calidad a todas partes`, img: fileserver + `/banners/plegables301n.webp`,
        desc: `¡Llevalo a donde quieras! Su sistema de vincha plegable facilita el guardado y el traslado` },
      { title: `Excelentes materiales`, img: fileserver + `/banners/diseñocalidad301n.webp`,
        desc: `Está construido con materiales de primera calidad que te brindarán una experiencia auditiva sin igual` }
    ],
    shortDesc: `Tu música y vos, sin intermediarios`,
    longDesc: "Desplazate sin restricciones, tu música siempre te va acompañar. Ideal para quienes quieran realizar actividad física, viajar o trabajar.",
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
      { id: 37, value: `HSP / HFP / A2DP / AVRCP`}, // Formatos BT
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
    colors: ['AVA-BT301B', 'AVA-BT301N']
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
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [ 
      { title: `Almohadillas Soft`, img: fileserver + `/banners/almohadillas301b.webp`,
        desc: `Los materiales ligeros y las suaves almohadillas con banda de sujeción acolchada hacen que los auriculares sean cómodos durante largos períodos.` },
      { title: `Conexión Bluetooth 5.0`, img: fileserver + `/banners/bluetooth301b.webp`,
        desc: `Los auriculares AIWA cuentan con la nueva tecnología Bluetooth versión 5.0 que te permiten transmitir datos con el doble de rapidez, y a una distancia mucho mayor que la versión anterior.` },
      { title: `Llevá la calidad a todas partes`, img: fileserver + `/banners/plegables301b.webp`,
        desc: `¡Llevalo a donde quieras! Su sistema de vincha plegable facilita el guardado y el traslado` },
      { title: `Excelentes materiales`, img: fileserver + `/banners/diseñocalidad301b.webp`,
        desc: `Está construido con materiales de primera calidad que te brindarán una experiencia auditiva sin igual` }
    ],
    shortDesc: `Tu música y vos, sin intermediarios`,
    longDesc: "Desplazate sin restricciones, tu música siempre te va acompañar. Ideal para quienes quieran realizar actividad física, viajar o trabajar.",
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
      { id: 37, value: `HSP / HFP / A2DP / AVRCP`}, // Formatos BT
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
    colors: ['AVA-BT301B', 'AVA-BT301N']
  },
  { // ATA-105N
    name: `Auriculares In-ear Bluetooth`,
    sku: `ATA-105N`,
    link: `/productos/ATA-105N`,
    categories: [103], 
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
    ].map(e => fileserver + e),
    360: true,
    gen: "1º Generación",
    banners: [ 
      { title: `Conexión Bluetooth 5.0`, img: fileserver + `/banners/bluetooth106n.webp`,
      desc: `La última versión, te permiten transmitir datos con el doble de rapidez, y a mayor distancia. Podés sincronizarlos con cualquier dispositivo Bluetooth.` },
      { title: `Larga autonomía`, img: fileserver + `/banners/energia106n.webp`,
      desc: `Tienen una batería de larga duración y cuentan con estuche de carga portátil para llevarlos siempre con vos, además de tener un display led que te indica exactamente cuándo recargarlo.` },
      { title: `Controles Touch`, img: fileserver + `/banners/touch106n.webp`,
      desc: `Controles fáciles de usar con un ligero toque. Contestá llamadas, reproducí/pausá canciones o usá un asistente de voz sin ninguna dificultad.` },
    ],
    shortDesc: `Tu música donde quieras`,
    longDesc: "Gracias a las cómodas almohadillas siliconadas de los auriculares AIWA in-ear, podes conectar a un mayor nivel con tus temas favoritos, disminuyendo en gran cantidad el ruido del entorno. Su práctico tamaño te permiten vivir de esta experiencia en cualquier lugar.",
    buyLink: ``,
    featuredFeatures: [
      { id: 57 }, // Cable usb carga
      { id: 46 }, // Manos libres
      { id: 52 }, // Batería larga duración
      { id: 53 }, // Boton incorporado
      { id: 58 }, // Alcance
      { id: 55 }, // Estuche
      { id: 56 }, // Almohadillas repuesto
      { id: 49, value: `blanco y negro` }, // Colores
    ],
    featuresSections: [
      {
        title: 'Auricular',
        items: [
          { name: 'Duración de Batería', value: `5h aprox.` }, // Duración Batería 
          { name: 'Capacidad de Batería', value: `40mAh` }, // Batería
          { name: 'Alcance de Bluetooth', value: `10m` }, // Alcance BT
          { name: 'Formatos de Bluetooth', value: `HSP / HFP / A2DP / AVRCP`}, // Formatos BT
          { name: 'Versión de Bluetooth', value: `V5.0` }, // Version BT
          { name: 'Controles', value: `Reproducir/Pausar, Manos Libres y Asistente de voz` }, // Controles
          { name: 'Dimensiones', value: `26,65 x 16,4 x 21,6 mm` }, // Dimension prod
          { name: 'Peso', value: `4,1 g (cada uno)` }, // Peso
        ]
      },
      {
        title: 'Estuche',
        items: [
          { name: 'Indicador de Carga', value: `Si, Digital LED` },
          { name: 'Capacidad de Batería', value: `300mAh` },
          { name: 'Tipo de Batería', value: `Polímero de iones de litio` },
          { name: 'Entrada / Salida', value: `DC 5V 500mAh / 150mAh` },
          { name: 'Tiempo de Carga', value: `2h` },
          { name: 'Tiempo en Stand-by', value: `4 meses` },
          { name: 'Dimensiones', value: `62 x 40 x 27,2 mm` },
          { name: 'Peso', value: `32,5g` },
        ]
      },
      {
        title: 'Pack',
        items: [
          { name: 'Color', value: `Negro` },
          { name: 'Dimensiones', value: `10 x 10 x 3,5` },
          { name: 'Peso', value: `110g` },
          { name: 'EAN', value: `7798111354145` },
        ]
      },
    ],
    includes: [
      18, // Estuche de carga
      16, // Almohadillas b
      4, // MicroUSB
      9, // Manual
    ],
    downloads: `https://drive.google.com/drive/folders/1HannaUT0NFv5IMiIxnIhFZS84VR8uLv2`,
    variants: ['ATA-105N', 'ATA-106N'],
    colors: ['ATA-105B', 'ATA-105N']
  },
  { // ATA-105B
    name: `Auriculares In-ear Bluetooth`,
    sku: `ATA-105B`,
    link: `/productos/ATA-105B`,
    categories: [103],
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
    ].map(e => fileserver + e),
    360: true,
    gen: "1º Generación",
    banners: [ 
      { title: `Conexión Bluetooth 5.0`, img: fileserver + `/banners/bluetooth106b.webp`,
      desc: `La última versión, te permiten transmitir datos con el doble de rapidez, y a mayor distancia. Podés sincronizarlos con cualquier dispositivo Bluetooth.` },
      { title: `Larga autonomía`, img: fileserver + `/banners/energia106b.webp`,
      desc: `Tienen una batería de larga duración y cuentan con estuche de carga portátil para llevarlos siempre con vos, además de tener un display led que te indica exactamente cuándo recargarlo.` },
      { title: `Controles Touch`, img: fileserver + `/banners/touch106b.webp`,
      desc: `Controles fáciles de usar con un ligero toque. Contestá llamadas, reproducí/pausá canciones o usá un asistente de voz sin ninguna dificultad.` },
    ],
    shortDesc: `Tu música donde quieras`,
    longDesc: "Gracias a las cómodas almohadillas siliconadas de los auriculares AIWA in-ear, podes conectar a un mayor nivel con tus temas favoritos, disminuyendo en gran cantidad el ruido del entorno. Su práctico tamaño te permiten vivir de esta experiencia en cualquier lugar.",
    buyLink: ``,
    featuredFeatures: [
      { id: 57 }, // Cable usb carga
      { id: 46 }, // Manos libres
      { id: 52 }, // Batería larga duración
      { id: 53 }, // Boton incorporado
      { id: 58 }, // Alcance
      { id: 55 }, // Estuche
      { id: 56 }, // Almohadillas repuesto
      { id: 49, value: `blanco y negro` }, // Colores
    ],
    featuresSections: [
      {
        title: 'Auricular',
        items: [
          { name: 'Duración de Batería', value: `5h aprox.` }, // Duración Batería 
          { name: 'Capacidad de Batería', value: `40mAh` }, // Batería
          { name: 'Alcance de Bluetooth', value: `10m` }, // Alcance BT
          { name: 'Formatos de Bluetooth', value: `HSP / HFP / A2DP / AVRCP`}, // Formatos BT
          { name: 'Versión de Bluetooth', value: `V5.0` }, // Version BT
          { name: 'Controles', value: `Reproducir/Pausar, Manos Libres y Asistente de voz` }, // Controles
          { name: 'Dimensiones', value: `26,65 x 16,4 x 21,6 mm` }, // Dimension prod
          { name: 'Peso', value: `4,1 g (cada uno)` }, // Peso
        ]
      },
      {
        title: 'Estuche',
        items: [
          { name: 'Indicador de Carga', value: `Si, Digital LED` },
          { name: 'Capacidad de Batería', value: `300mAh` },
          { name: 'Tipo de Batería', value: `Polímero de iones de litio` },
          { name: 'Entrada / Salida', value: `DC 5V 500mAh / 150mAh` },
          { name: 'Tiempo de Carga', value: `2h` },
          { name: 'Tiempo en Stand-by', value: `4 meses` },
          { name: 'Dimensiones', value: `62 x 40 x 27,2 mm` },
          { name: 'Peso', value: `32,5g` },
        ]
      },
      {
        title: 'Pack',
        items: [
          { name: 'Color', value: `Blanco` },
          { name: 'Dimensiones del paquete', value: `10 x 10 x 3,5` },
          { name: 'Peso', value: `110g` },
          { name: 'EAN', value: `7798111354138` }, 
        ]
      },
    ],
    includes: [
      17, // Estuche de carga
      15, // Almohadillas b
      21, // MicroUSB
      9, // Manual
    ],
    downloads: `https://drive.google.com/drive/folders/1I4WOc5v36nqEq-qFmAqHXDS7QryypHZU`,
    variants: ['ATA-105B', 'ATA-106B'],
    colors: ['ATA-105B', 'ATA-105N']
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
    ].map(e => fileserver + e),
    360: true,
    gen: "2º Generación",
    banners: [ 
      { title: `Conexión Bluetooth 5.0`, img: fileserver + `/banners/bluetooth106n.webp`,
      desc: `La última versión, te permiten transmitir datos con el doble de rapidez, y a mayor distancia. Podés sincronizarlos con cualquier dispositivo Bluetooth.` },
      { title: `Larga autonomía`, img: fileserver + `/banners/energia106n.webp`,
      desc: `Tienen una batería de larga duración y cuentan con estuche de carga portátil para llevarlos siempre con vos, además de tener un display led que te indica exactamente cuándo recargarlo.` },
      { title: `Controles Touch`, img: fileserver + `/banners/touch106n.webp`,
      desc: `Controles fáciles de usar con un ligero toque. Contestá llamadas, pasá canciones o subí/bajá volumen sin ninguna dificultad.` },
    ],
    shortDesc: `Tu música donde quieras`,
    longDesc: "Gracias a las cómodas almohadillas siliconadas de los auriculares AIWA in-ear, podes conectar a un mayor nivel con tus temas favoritos, disminuyendo en gran cantidad el ruido del entorno. Su práctico tamaño te permiten vivir de esta experiencia en cualquier lugar.",
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
    ],
    featuresSections: [
      {
        title: 'Auricular',
        items: [
          { name: 'Duración de Batería', value: `5h aprox.` }, // Duración Batería 
          { name: 'Capacidad de Batería', value: `40mAh` }, // Batería
          { name: 'Alcance de Bluetooth', value: `10m` }, // Alcance BT
          { name: 'Formatos de Bluetooth', value: `HSP / HFP / A2DP / AVRCP`}, // Formatos BT
          { name: 'Versión de Bluetooth', value: `V5.0` }, // Version BT
          { name: 'Controles', value: `Reproducir/Pausar, Retroceder/Avanzar, Volumen y Manos Libres` }, // Controles
          { name: 'Dimensiones', value: `26,65 x 16,4 x 21,6 mm` }, // Dimension prod
          { name: 'Peso', value: `4,1 g (cada uno)` }, // Peso
        ]
      },
      {
        title: 'Estuche',
        items: [
          { name: 'Indicador de Carga', value: `Si, Digital LED` },
          { name: 'Capacidad de Batería', value: `300mAh` },
          { name: 'Tipo de Batería', value: `Polímero de iones de litio` },
          { name: 'Entrada / Salida', value: `DC 5V 500mAh / 150mAh` },
          { name: 'Tiempo de Carga', value: `2h` },
          { name: 'Tiempo en Stand-by', value: `4 meses` },
          { name: 'Dimensiones', value: `62 x 40 x 27,2 mm` },
          { name: 'Peso', value: `32,5g` },
        ]
      },
      {
        title: 'Pack',
        items: [
          { name: 'Color', value: `Negro` },
          { name: 'Dimensiones del paquete', value: `10 x 10 x 3,5` },
          { name: 'Peso', value: `110g` },
          { name: 'EAN', value: `7798111354473` }, 
        ]
      },
    ],
    includes: [
      18, // Estuche de carga
      16, // Almohadillas b
      4, // MicroUSB
      9, // Manual
    ],
    downloads: `https://drive.google.com/drive/folders/1Uu8rm2ALdiXv_fwNKk-SFXgBpZOJEkBY`,
    colors: ['ATA-106B', 'ATA-106N']
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
    ].map(e => fileserver + e),
    360: true,
    gen: "2º Generación",
    banners: [ 
      { title: `Conexión Bluetooth 5.0`, img: fileserver + `/banners/bluetooth106b.webp`,
      desc: `La última versión, te permiten transmitir datos con el doble de rapidez, y a mayor distancia. Podés sincronizarlos con cualquier dispositivo Bluetooth.` },
      { title: `Larga autonomía`, img: fileserver + `/banners/energia106b.webp`,
      desc: `Tienen una batería de larga duración y cuentan con estuche de carga portátil para llevarlos siempre con vos, además de tener un display led que te indica exactamente cuándo recargarlo.` },
      { title: `Controles Touch`, img: fileserver + `/banners/touch106b.webp`,
      desc: `Controles fáciles de usar con un ligero toque. Contestá llamadas, pasá canciones o subí/bajá volumen sin ninguna dificultad.` },
    ],
    shortDesc: `Tu música donde quieras`,
    longDesc: "Gracias a las cómodas almohadillas siliconadas de los auriculares AIWA in-ear, podes conectar a un mayor nivel con tus temas favoritos, disminuyendo en gran cantidad el ruido del entorno. Su práctico tamaño te permiten vivir de esta experiencia en cualquier lugar.",
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
    ],
    featuresSections: [
      {
        title: 'Auricular',
        items: [
          { name: 'Duración de Batería', value: `5h aprox.` }, // Duración Batería 
          { name: 'Capacidad de Batería', value: `40mAh` }, // Batería
          { name: 'Alcance de Bluetooth', value: `10m` }, // Alcance BT
          { name: 'Formatos de Bluetooth', value: `HSP / HFP / A2DP / AVRCP`}, // Formatos BT
          { name: 'Versión de Bluetooth', value: `V5.0` }, // Version BT
          { name: 'Controles', value: `Reproducir/Pausar, Retroceder/Avanzar, Volumen y Manos Libres` }, // Controles
          { name: 'Dimensiones', value: `26,65 x 16,4 x 21,6 mm` }, // Dimension prod
          { name: 'Peso', value: `4,1 g (cada uno)` }, // Peso
        ]
      },
      {
        title: 'Estuche',
        items: [
          { name: 'Indicador de Carga', value: `Si, Digital LED` },
          { name: 'Capacidad de Batería', value: `300mAh` },
          { name: 'Tipo de Batería', value: `Polímero de iones de litio` },
          { name: 'Entrada / Salida', value: `DC 5V 500mAh / 150mAh` },
          { name: 'Tiempo de Carga', value: `2h` },
          { name: 'Tiempo en Stand-by', value: `4 meses` },
          { name: 'Dimensiones', value: `62 x 40 x 27,2 mm` },
          { name: 'Peso', value: `32,5g` },
        ]
      },
      {
        title: 'Pack',
        items: [
          { name: 'Color', value: `Blanco` },
          { name: 'Dimensiones del paquete', value: `10 x 10 x 3,5` },
          { name: 'Peso', value: `110g` },
          { name: 'EAN', value: `7798111354480` }, 
        ]
      },
    ],
    includes: [
      17, // Estuche de carga
      15, // Almohadillas b
      21, // MicroUSB
      9, // Manual
    ],
    downloads: `https://drive.google.com/drive/folders/1UlHBO7yRy7Bv_vOXgu4QNYmzjOJHRtnt`,
    colors: ['ATA-106B', 'ATA-106N']
  },
  { // ATA-205N
    name: `Auriculares In-ear Bluetooth`,
    sku: `ATA-205N`,
    link: `/productos/ATA-205N`,
    categories: [103], 
    imgs: [
      `/products/ATA-205N/img/1.webp`,
      `/products/ATA-205N/img/2.webp`,
      `/products/ATA-205N/img/3.webp`,
    ].map(e => fileserver + e),
    360: false,
    gen: "1º Generación",
    banners: [ 
      { title: `Controles Touch`, img: fileserver + `/banners/touch205n.webp`,
      desc: `Controles fáciles de usar con un ligero toque. Contestá llamadas, reproducí/pausá canciones o usá un asistente de voz sin ninguna dificultad.` },
      { title: `USB-C`, img: fileserver + `/banners/usbc205n.webp`,
      desc: `Gran capacidad de batería y carga a través de USB tipo C, compatible con todo tipo de cargadores en el mercado, por lo que no tendrás que preocuparte por encontrar uno.` },
      { title: `Conexión Bluetooth 5.0`, img: fileserver + `/banners/bluetooth205n.webp`,
      desc: `La última versión, te permiten transmitir datos con el doble de rapidez, y a mayor distancia. Podés sincronizarlos con cualquier dispositivo Bluetooth.` },
      { title: `Larga autonomía`, img: fileserver + `/banners/energia205n.webp`,
      desc: `Tienen una batería de larga duración y cuentan con estuche de carga portátil para llevarlos siempre con vos, además de tener un display led que te indica exactamente cuándo recargarlo.` },
    ],
    shortDesc: `Sumergite en tu música`,
    longDesc: "Su delicado diseño permite una verdadera experiencia de sonido envolvente. Gracias a sus almohadillas de silicona suaves y flexibles, el ajuste es personalizado y se adaptarán perfectamente a tu oído.",
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
    featuresSections: [
      {
        title: 'Auricular',
        items: [
          { name: 'Duración de Batería', value: `5h aprox.` }, // Duración Batería 
          { name: 'Capacidad de Batería', value: `30mAh` }, // Batería
          { name: 'Alcance de Bluetooth', value: `10m` }, // Alcance BT
          { name: 'Formatos de Bluetooth', value: `HSP / HFP / A2DP / AVRCP`}, // Formatos BT
          { name: 'Versión de Bluetooth', value: `V5.0` }, // Version BT
          { name: 'Controles', value: `Reproducir/Pausar, Manos Libres y Asistente de voz` }, // Controles
          { name: 'Dimensiones', value: `32 x 23 x 23,4 mm` }, // Dimension prod
          { name: 'Peso', value: `4 g (cada uno)` }, // Peso
        ]
      },
      {
        title: 'Estuche',
        items: [
          { name: 'Indicador de Carga', value: `Si` }, // Indicador de carga
          { name: 'Capacidad de Batería', value: `300mAh` }, // Batería
          { name: 'Tipo de Batería', value: `Polímero de iones de litio` }, // Tipo de batería
          { name: 'Tiempo de Carga', value: `2h` }, // Tiempo de carga 
          { name: 'Dimensiones', value: `59,5 x 45,6 x 24,3 mm` }, // Dimension prod
          { name: 'Dimensiones del paquete', value: `80 x 80 x 40 mm` }, // Dimension caja
          { name: 'Peso', value: `38g` }, // Peso
          { name: 'EAN', value: `7798111354145` }, // EAN
        ]
      },
    ],
    includes: [
      23, // Estuche de carga
      16, // Almohadillas 
      6, // USBC
      9, // Manual
    ],
    downloads: `https://drive.google.com/drive/folders/162INfmrVv8p8pPnueX_CPHcq941OLXmS`,
    variants: ['ATA-205N', 'ATA-206N'],
    colors: ['ATA-205B', 'ATA-205N']
  },
  { // ATA-205B
    name: `Auriculares In-ear Bluetooth`,
    sku: `ATA-205B`,
    link: `/productos/ATA-205B`,
    categories: [103], 
    altBackground: true,
    imgs: [
      `/products/ATA-205B/img/1.webp`,
      `/products/ATA-205B/img/2.webp`,
      `/products/ATA-205B/img/3.webp`,
    ].map(e => fileserver + e),
    360: false,
    gen: "1º Generación",
    banners: [ 
      { title: `Controles Touch`, img: fileserver + `/banners/touch205b.webp`,
      desc: `Controles fáciles de usar con un ligero toque. Contestá llamadas, reproducí/pausá canciones o usá un asistente de voz sin ninguna dificultad.` },
      { title: `Conexión Bluetooth 5.0`, img: fileserver + `/banners/bluetooth205b.webp`,
      desc: `La última versión, te permiten transmitir datos con el doble de rapidez, y a mayor distancia. Podés sincronizarlos con cualquier dispositivo Bluetooth.` },
      { title: `USB-C`, img: fileserver + `/banners/usbc205b.webp`,
      desc: `Gran capacidad de batería y carga a través de USB tipo C, compatible con todo tipo de cargadores en el mercado, por lo que no tendrás que preocuparte por encontrar uno.` },
      { title: `Larga autonomía`, img: fileserver + `/banners/energia205b.webp`,
      desc: `Tienen una batería de larga duración y cuentan con estuche de carga portátil para llevarlos siempre con vos, además de tener un display led que te indica exactamente cuándo recargarlo.` },
    ],
    shortDesc: `Sumergite en tu música`,
    longDesc: "Su delicado diseño permite una verdadera experiencia de sonido envolvente. Gracias a sus almohadillas de silicona suaves y flexibles, el ajuste es personalizado y se adaptarán perfectamente a tu oído.",
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
    featuresSections: [
      {
        title: 'Auricular',
        items: [
          { name: 'Duración de Batería', value: `5h aprox.` }, // Duración Batería 
          { name: 'Capacidad de Batería', value: `30mAh` }, // Batería
          { name: 'Alcance de Bluetooth', value: `10m` }, // Alcance BT
          { name: 'Formatos de Bluetooth', value: `HSP / HFP / A2DP / AVRCP`}, // Formatos BT
          { name: 'Versión de Bluetooth', value: `V5.0` }, // Version BT
          { name: 'Controles', value: `Reproducir/Pausar, Manos Libres y Asistente de voz` }, // Controles
          { name: 'Dimensiones', value: `32 x 23 x 23,4 mm` }, // Dimension prod
          { name: 'Peso', value: `4 g (cada uno)` }, // Peso
        ]
      },
      {
        title: 'Estuche',
        items: [
          { name: 'Indicador de Carga', value: `Si` }, // Indicador de carga
          { name: 'Capacidad de Batería', value: `300mAh` }, // Batería
          { name: 'Tipo de Batería', value: `Polímero de iones de litio` }, // Tipo de batería
          { name: 'Tiempo de Carga', value: `2h` }, // Tiempo de carga 
          { name: 'Dimensiones', value: `59,5 x 45,6 x 24,3 mm` }, // Dimension prod
          { name: 'Dimensiones del paquete', value: `80 x 80 x 40 mm` }, // Dimension caja
          { name: 'Peso', value: `38g` }, // Peso
          { name: 'EAN', value: `7798111354152` }, // EAN
        ]
      },
    ],
    includes: [
      22, // Estuche de carga
      15, // Almohadillas 
      20, // USBC
      9, // Manual
    ],
    downloads: `https://drive.google.com/drive/folders/1VVvRs6BlRtF3kKoIFIqXkvb4f9Za5W5t`,
    variants: ['ATA-205B', 'ATA-206B'],
    colors: ['ATA-205B', 'ATA-205N']
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
    ].map(e => fileserver + e),
    360: false,
    gen: "2º Generación",
    banners: [ 
      { title: `Controles Touch`, img: fileserver + `/banners/touch205n.webp`,
      desc: `Controles fáciles de usar con un ligero toque. Contestá llamadas, pasá canciones o subí/bajá volumen sin ninguna dificultad.` },
      { title: `USB-C`, img: fileserver + `/banners/usbc205n.webp`,
      desc: `Gran capacidad de batería y carga a través de USB tipo C, compatible con todo tipo de cargadores en el mercado, por lo que no tendrás que preocuparte por encontrar uno.` },
      { title: `Conexión Bluetooth 5.0`, img: fileserver + `/banners/bluetooth205n.webp`,
      desc: `La última versión, te permiten transmitir datos con el doble de rapidez, y a mayor distancia. Podés sincronizarlos con cualquier dispositivo Bluetooth.` },
      { title: `Larga autonomía`, img: fileserver + `/banners/energia205n.webp`,
      desc: `Tienen una batería de larga duración y cuentan con estuche de carga portátil para llevarlos siempre con vos, además de tener un display led que te indica exactamente cuándo recargarlo.` },
    ],
    shortDesc: `Sumergite en tu música`,
    longDesc: "Su delicado diseño permite una verdadera experiencia de sonido envolvente. Gracias a sus almohadillas de silicona suaves y flexibles, el ajuste es personalizado y se adaptarán perfectamente a tu oído.",
    buyLink: ``,
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
    featuresSections: [
      {
        title: 'Auricular',
        items: [
          { name: 'Duración de Batería', value: `5h aprox.` }, // Duración Batería 
          { name: 'Capacidad de Batería', value: `30mAh` }, // Batería
          { name: 'Alcance de Bluetooth', value: `10m` }, // Alcance BT
          { name: 'Formatos de Bluetooth', value: `HSP / HFP / A2DP / AVRCP`}, // Formatos BT
          { name: 'Versión de Bluetooth', value: `V5.0` }, // Version BT
          { name: 'Controles', value: `Reproducir/Pausar, Retroceder/Avanzar, Volumen y Manos Libres` }, // Controles
          { name: 'Dimensiones', value: `32 x 23 x 23,4 mm` }, // Dimension prod
          { name: 'Peso', value: `4 g (cada uno)` }, // Peso
        ]
      },
      {
        title: 'Estuche',
        items: [
          { name: 'Indicador de Carga', value: `Si` }, // Indicador de carga
          { name: 'Capacidad de Batería', value: `300mAh` }, // Batería
          { name: 'Tipo de Batería', value: `Polímero de iones de litio` }, // Tipo de batería
          { name: 'Tiempo de Carga', value: `2h` }, // Tiempo de carga 
          { name: 'Dimensiones', value: `59,5 x 45,6 x 24,3 mm` }, // Dimension prod
          { name: 'Dimensiones del paquete', value: `80 x 80 x 40 mm` }, // Dimension caja
          { name: 'Peso', value: `38g` }, // Peso
          { name: 'EAN', value: `7798111354145` }, // EAN
        ]
      },
    ],
    includes: [
      23, // Estuche de carga
      16, // Almohadillas 
      6, // USBC
      9, // Manual
    ],
    downloads: `https://drive.google.com/drive/folders/162INfmrVv8p8pPnueX_CPHcq941OLXmS`,
    colors: ['ATA-206B', 'ATA-206N']
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
    ].map(e => fileserver + e),
    360: false,
    gen: "2º Generación",
    banners: [ 
      { title: `Controles Touch`, img: fileserver + `/banners/touch205b.webp`,
      desc: `Controles fáciles de usar con un ligero toque. Contestá llamadas, pasá canciones o subí/bajá volumen sin ninguna dificultad.` },
      { title: `Conexión Bluetooth 5.0`, img: fileserver + `/banners/bluetooth205b.webp`,
      desc: `La última versión, te permiten transmitir datos con el doble de rapidez, y a mayor distancia. Podés sincronizarlos con cualquier dispositivo Bluetooth.` },
      { title: `USB-C`, img: fileserver + `/banners/usbc205b.webp`,
      desc: `Gran capacidad de batería y carga a través de USB tipo C, compatible con todo tipo de cargadores en el mercado, por lo que no tendrás que preocuparte por encontrar uno.` },
      { title: `Larga autonomía`, img: fileserver + `/banners/energia205b.webp`,
      desc: `Tienen una batería de larga duración y cuentan con estuche de carga portátil para llevarlos siempre con vos, además de tener un display led que te indica exactamente cuándo recargarlo.` },
    ],
    shortDesc: `Sumergite en tu música`,
    longDesc: "Su delicado diseño permite una verdadera experiencia de sonido envolvente. Gracias a sus almohadillas de silicona suaves y flexibles, el ajuste es personalizado y se adaptarán perfectamente a tu oído.",
    buyLink: ``,
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
    featuresSections: [
      {
        title: 'Auricular',
        items: [
          { name: 'Duración de Batería', value: `5h aprox.` }, // Duración Batería 
          { name: 'Capacidad de Batería', value: `30mAh` }, // Batería
          { name: 'Alcance de Bluetooth', value: `10m` }, // Alcance BT
          { name: 'Formatos de Bluetooth', value: `HSP / HFP / A2DP / AVRCP`}, // Formatos BT
          { name: 'Versión de Bluetooth', value: `V5.0` }, // Version BT
          { name: 'Controles', value: `Reproducir/Pausar, Retroceder/Avanzar, Volumen y Manos Libres` }, // Controles
          { name: 'Dimensiones', value: `32 x 23 x 23,4 mm` }, // Dimension prod
          { name: 'Peso', value: `4 g (cada uno)` }, // Peso
        ]
      },
      {
        title: 'Estuche',
        items: [
          { name: 'Indicador de Carga', value: `Si` }, // Indicador de carga
          { name: 'Capacidad de Batería', value: `300mAh` }, // Batería
          { name: 'Tipo de Batería', value: `Polímero de iones de litio` }, // Tipo de batería
          { name: 'Tiempo de Carga', value: `2h` }, // Tiempo de carga 
          { name: 'Dimensiones', value: `59,5 x 45,6 x 24,3 mm` }, // Dimension prod
          { name: 'Dimensiones del paquete', value: `80 x 80 x 40 mm` }, // Dimension caja
          { name: 'Peso', value: `38g` }, // Peso
          { name: 'EAN', value: `7798111354503` }, // EAN
        ]
      },
    ],
    includes: [
      22, // Estuche de carga
      15, // Almohadillas 
      20, // USBC
      9, // Manual
    ],
    downloads: `https://drive.google.com/drive/folders/1VVvRs6BlRtF3kKoIFIqXkvb4f9Za5W5t`,
    colors: ['ATA-206B', 'ATA-206N']
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
    ].map(e => fileserver + e),
    360: true,
    gen: "1º Generación",
    banners: [ 
      { title: `USB-C`, img: fileserver + `/banners/usbc306b.webp`,
      desc: `Gran capacidad de batería y carga a través de USB tipo C, compatible con todo tipo de cargadores en el mercado, por lo que no tendrás que preocuparte por encontrar uno.` },
      { title: `Conexión Bluetooth 5.0`, img: fileserver + `/banners/bluetooth306b.webp`,
      desc: `La última versión, te permiten transmitir datos con el doble de rapidez, y a mayor distancia. Podés sincronizarlos con cualquier dispositivo Bluetooth.` },
      { title: `Larga autonomía`, img: fileserver + `/banners/energia306b.webp`,
      desc: `Tienen una batería de larga duración y cuentan con estuche de carga portátil para llevarlos siempre con vos, además de tener un display led que te indica exactamente cuándo recargarlo.` },
      { title: `Controles Touch`, img: fileserver + `/banners/touch306b.webp`,
      desc: `Controles fáciles de usar con un ligero toque. Contestá llamadas, pasá canciones o subí/bajá volumen sin ninguna dificultad.` },
    ],
    shortDesc: `Sonido sin igual`,
    longDesc: "Impresionante calidad de sonido en un formato cómodo. Escuchá tu música preferida donde sea, sin limitaciones.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/bluetooth/251-auriculares-in-ear-inalambricos-aiwa-ata-306b-7798111354510.html`,
    featuredFeatures: [
      { id: 51 }, // Control de Volumen
      { id: 46 }, // Manos libres
      { id: 52 }, // Batería larga duración
      { id: 53 }, // Boton incorporado
      { id: 54 }, // Controles canciones
      { id: 55 }, // Estuche
      { id: 56 }, // Almohadillas repuesto
      { id: 59 }, // USBC
    ],
    featuresSections: [
      {
        title: 'Auricular',
        items: [
          { name: 'Duración de Batería', value: `5h aprox.` }, // Duración Batería 
          { name: 'Capacidad de Batería', value: `30mAh` }, // Batería
          { name: 'Alcance de Bluetooth', value: `10m` }, // Alcance BT
          { name: 'Formatos de Bluetooth', value: `HSP / HFP / A2DP / AVRCP`}, // Formatos BT
          { name: 'Versión de Bluetooth', value: `V5.0` }, // Version BT
          { name: 'Controles', value: `Reproducir/Pausar, Retroceder/Avanzar, Volumen y Manos Libres` }, // Controles
          { name: 'Dimensiones', value: `24,5 x 17 x 18 mm` }, // Dimension prod
          { name: 'Peso', value: `4 g (cada uno)` }, // Peso
        ]
      },
      {
        title: 'Estuche',
        items: [
          { name: 'Indicador de Carga', value: `Si` }, // Indicador de carga
          { name: 'Capacidad de Batería', value: `200mAh` }, // Batería
          { name: 'Tipo de Batería', value: `Polímero de iones de litio` }, // Tipo de batería
          { name: 'Tiempo de Carga', value: `2h` }, // Tiempo de carga 
          { name: 'Dimensiones', value: `42 x 52 x 25,5 mm` }, // Dimension prod
          { name: 'Dimensiones del paquete', value: `80 x 80 x 40 mm` }, // Dimension caja
          { name: 'Peso', value: `36g` }, // Peso
          { name: 'EAN', value: `7798111354510` }, // EAN
        ]
      },
    ],
    includes: [
      19, // Estuche de carga
      15, // Almohadillas b
      20, // USB tipo C
      9, // Manual
    ],
    downloads: `https://drive.google.com/drive/folders/1WSuTjo1gQNYQ-2VYm9wuMe6u5amcjSQy`,
    colors: []
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
    ].map(e => fileserver + e),
    360: true,
    gen: "1º Generación",
    banners: [ 
      { title: `Controles Touch`, img: fileserver + `/banners/touch406n.webp`,
      desc: `Controles fáciles de usar con un ligero toque. Contestá llamadas, pasá canciones o subí/bajá volumen sin ninguna dificultad.` },
      { title: `USB-C`, img: fileserver + `/banners/usbc406n.webp`,
      desc: `Gran capacidad de batería y carga a través de USB tipo C, compatible con todo tipo de cargadores en el mercado, por lo que no tendrás que preocuparte por encontrar uno.` },
      { title: `Conexión Bluetooth 5.0`, img: fileserver + `/banners/bluetooth406n.webp`,
      desc: `La última versión, te permiten transmitir datos con el doble de rapidez, y a mayor distancia. Podés sincronizarlos con cualquier dispositivo Bluetooth.` },
      { title: `Larga autonomía`, img: fileserver + `/banners/energia406n.webp`,
      desc: `Tienen una batería de larga duración y cuentan con estuche de carga portátil para llevarlos siempre con vos, además de tener un display led que te indica exactamente cuándo recargarlo.` },
    ],
    shortDesc: `Sonido sin límites`,
    longDesc: "Impresionante calidad de sonido en un formato cómodo. Cancelación de ruido pasiva para que disfrutes sin distracciones.",
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
    ],
    featuresSections: [
      {
        title: 'Auricular',
        items: [
          { name: 'Duración de Batería', value: `5h aprox.` }, // Duración Batería 
          { name: 'Capacidad de Batería', value: `40mAh` }, // Batería
          { name: 'Alcance de Bluetooth', value: `10m` }, // Alcance BT
          { name: 'Formatos de Bluetooth', value: `HSP / HFP / A2DP / AVRCP`}, // Formatos BT
          { name: 'Versión de Bluetooth', value: `V5.0` }, // Version BT
          { name: 'Controles', value: `Reproducir/Pausar, Retroceder/Avanzar, Volumen y Manos Libres` }, // Controles
          { name: 'Dimensiones', value: `20 x 20 x 22,5 mm` }, // Dimension prod
          { name: 'Peso', value: `5 g (cada uno)` }, // Peso
        ]
      },
      {
        title: 'Estuche',
        items: [
          { name: 'Indicador de Carga', value: `Si` }, // Indicador de carga
          { name: 'Capacidad de Batería', value: `300mAh` }, // Batería
          { name: 'Tipo de Batería', value: `Polímero de iones de litio` }, // Tipo de batería
          { name: 'Tiempo de Carga', value: `2h` }, // Tiempo de carga 
          { name: 'Dimensiones', value: `60 x 45 x 30 mm` }, // Dimension prod
          { name: 'Dimensiones del paquete', value: `80 x 80 x 40 mm` }, // Dimension caja
          { name: 'Peso', value: `40g` }, // Peso
          { name: 'EAN', value: `7798111354527` }, // EAN
        ]
      },
    ],
    includes: [
      23, // Estuche de carga
      16, // Almohadillas 
      6, // USBC
      9, // Manual
    ],
    downloads: `https://drive.google.com/drive/folders/1X1kjKXFrCMsob_Egu_YJDR19gRJHlIT5`,
    colors: ['ATA-406B', 'ATA-406N']
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
    ].map(e => fileserver + e),
    360: true,
    gen: "1º Generación",
    banners: [ 
      { title: `Controles Touch`, img: fileserver + `/banners/touch406b.webp`,
      desc: `Controles fáciles de usar con un ligero toque. Contestá llamadas, pasá canciones o subí/bajá volumen sin ninguna dificultad.` },
      { title: `Conexión Bluetooth 5.0`, img: fileserver + `/banners/bluetooth406b.webp`,
      desc: `La última versión, te permiten transmitir datos con el doble de rapidez, y a mayor distancia. Podés sincronizarlos con cualquier dispositivo Bluetooth.` },
      { title: `USB-C`, img: fileserver + `/banners/usbc406b.webp`,
      desc: `Gran capacidad de batería y carga a través de USB tipo C, compatible con todo tipo de cargadores en el mercado, por lo que no tendrás que preocuparte por encontrar uno.` },
      { title: `Larga autonomía`, img: fileserver + `/banners/energia406b.webp`,
      desc: `Tienen una batería de larga duración y cuentan con estuche de carga portátil para llevarlos siempre con vos, además de tener un display led que te indica exactamente cuándo recargarlo.` },
    ],
    shortDesc: `Sonido sin límites`,
    longDesc: "Impresionante calidad de sonido en un formato cómodo. Cancelación de ruido pasiva para que disfrutes sin distracciones.",
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
    ],
    featuresSections: [
      {
        title: 'Auricular',
        items: [
          { name: 'Duración de Batería', value: `5h aprox.` }, // Duración Batería 
          { name: 'Capacidad de Batería', value: `40mAh` }, // Batería
          { name: 'Alcance de Bluetooth', value: `10m` }, // Alcance BT
          { name: 'Formatos de Bluetooth', value: `HSP / HFP / A2DP / AVRCP`}, // Formatos BT
          { name: 'Versión de Bluetooth', value: `V5.0` }, // Version BT
          { name: 'Controles', value: `Reproducir/Pausar, Retroceder/Avanzar, Volumen y Manos Libres` }, // Controles
          { name: 'Dimensiones', value: `20 x 20 x 22,5 mm` }, // Dimension prod
          { name: 'Peso', value: `5 g (cada uno)` }, // Peso
        ]
      },
      {
        title: 'Estuche',
        items: [
          { name: 'Indicador de Carga', value: `Si` }, // Indicador de carga
          { name: 'Capacidad de Batería', value: `300mAh` }, // Batería
          { name: 'Tipo de Batería', value: `Polímero de iones de litio` }, // Tipo de batería
          { name: 'Tiempo de Carga', value: `2h` }, // Tiempo de carga 
          { name: 'Dimensiones', value: `60 x 45 x 30 mm` }, // Dimension prod
          { name: 'Dimensiones del paquete', value: `80 x 80 x 40 mm` }, // Dimension caja
          { name: 'Peso', value: `40g` }, // Peso
          { name: 'EAN', value: `7798111354534` }, // EAN
        ]
      },
    ],
    includes: [
      22, // Estuche de carga
      15, // Almohadillas 
      20, // USBC
      9, // Manual
    ],
    downloads: `https://drive.google.com/drive/folders/1WuUfgOnQsZbcCmCks9yM9-XE5l4-0k0i`,
    colors: ['ATA-406B', 'ATA-406N']
  },

  /////////////// AURICULARES ////////////////

  { // CA-141
    name: `Cloudbook Dual-core 4GB RAM Win 10`,
    sku: `CA-141`,
    link: `/productos/CA-141`,
    categories: [103], 
    imgs: [
      `/products/CA-141/img/1.webp`,
      // `/products/CA-141/img/2.webp`,
      `/products/CA-141/img/3.webp`,
      `/products/CA-141/img/4.webp`,
      `/products/CA-141/img/5.webp`,
      `/products/CA-141/img/6.webp`,
      `/products/CA-141/img/7.webp`,
    ].map(e => fileserver + e),
    360: true,
    gen: "1º Generación",
    banners: [ 
      { title: `Accedé a la nube`, img: fileserver + `/banners/cloud.webp`,
      desc: `El almacenamiento local ha quedado en el pasado, almacená tus archivos en la nube y accedé a ellos fácilmente desde cualquier sitio.` },
      { title: `¡Conectate!`, img: fileserver + `/banners/puertosca141.webp`,
      desc: `Posee 2 puertos USB, 1 puerto HDMI Mini, slot para tarjetas TF/MicroSD y puerto para auriculares 3.5mm (Audio y micrófono).` },
    ],
    shortDesc: `Con vos siempre `,
    longDesc: "Editá, Hacé Streaming, Escribí, Trabajá. La Nube se encarga del resto. Una cloudbook es la computadora de quienes necesitan estar siempre listos para conectarse.",
    buyLink: ``,
    featuredFeatures: [
      { id: 60 }, // Windows
      { id: 62 }, // Camara frontal
      { id: 63, value: 'Intel Celeron N3350 Dual-Core'}, // Procesador
      { id: 64, value: '4GB'}, // Memoria RAM
      { id: 65, value: ['14"', '1366x768px']}, // Pantalla 
      { id: 66 }, // SD
      { id: 69, value: 'HDMI Mini' }, // Salida monitor
      { id: 68, value: 2 }, // Puertos USB
    ],
    features: [
      { id: 41, value: `14"` }, // Tamaño de pantalla
      { id: 42, value: `1366*768`}, // Resolucion
      { id: 43, value: `Apollo Lake N3350 (Dual-Core - 1.1GHz)`}, // Procesador
      { id: 44, value: `4GB`}, // Memoria RAM
      { id: 45, value: `64GB`}, // Almacenamiento
      { id: 46, value: `Frontal (0.3MP)`}, // Cámara
      { id: 36, value: `v4.0`}, // Versión BT
      { id: 8, value: `TF card, USB x2 (2.0 y 3.0), Auxiliar y Mini HDMI`}, // Entradas
      { id: 47, value: `Windows 10 Home`}, // Sistema operativo
      { id: 16, value: `32,8 x 21,7 x 2,2 cm`}, // Dimensiones
      { id: 18, value: `1,34Kg`}, // Peso
      { id: 19, value: `7798111353476`}, // EAN
    ],
    featuresSections: false,
    includes: [
      5, // Fuente de Alimentación
      9, // Manual y garantía
    ],
    certNo: `0Q-AR-01307-T-0`,
    downloads: `https://drive.google.com/drive/folders/1KB-EqgUn_6l5fBzhydm_y5cqUJBRMUzT`,
    variants: ['CA-141', 'CA141-CO', 'CA141-C'],
    colors: []
  },
  { // CA141-CO
    name: `Cloudbook Dual-core 4GB RAM Win 10 + Funda`,
    sku: `CA141-CO`,
    link: `/productos/CA141-CO`,
    categories: [103], 
    imgs: [
      `/products/CA141-CO/img/1.webp`,
      // `/products/CA141-CO/img/2.webp`,
      `/products/CA141-CO/img/3.webp`,
      `/products/CA141-CO/img/4.webp`,
      `/products/CA141-CO/img/5.webp`,
      `/products/CA141-CO/img/6.webp`,
      `/products/CA141-CO/img/7.webp`,
      `/products/CA141-CO/img/8.webp`,
    ].map(e => fileserver + e),
    360: true,
    gen: "2º Generación",
    banners: [ 
      { title: `Accedé a la nube`, img: fileserver + `/banners/cloud.webp`,
      desc: `El almacenamiento local ha quedado en el pasado, almacená tus archivos en la nube y accedé a ellos fácilmente desde cualquier sitio.` },
      { title: `¡Conectate!`, img: fileserver + `/banners/puertosca141.webp`,
      desc: `Posee 2 puertos USB, 1 puerto HDMI Mini, slot para tarjetas TF/MicroSD y puerto para auriculares 3.5mm (Audio y micrófono).` },
      { title: `Funda de Neoprene`, img: fileserver + `/banners/fundaca141co.webp`,
      desc: `Incluye una funda de Neoprene para que puedas trasladar tu equipo de forma segura a donde quiera que vayas.` },
    ],
    shortDesc: `Con vos siempre `,
    longDesc: "Editá, Hacé Streaming, Escribí, Trabajá. La Nube se encarga del resto. Una cloudbook es la computadora de quienes necesitan estar siempre listos para conectarse.",
    buyLink: ``,
    featuredFeatures: [
      { id: 60 }, // Windows
      { id: 62 }, // Camara frontal
      { id: 63, value: 'Intel Celeron N3350 Dual-Core'}, // Procesador
      { id: 64, value: '4GB'}, // Memoria RAM
      { id: 65, value: ['14"', '1366x768px']}, // Pantalla 
      { id: 66 }, // SD
      { id: 69, value: 'HDMI Mini' }, // Salida monitor
      { id: 67 }, // Funda
    ],
    features: [
      { id: 41, value: `14"` }, // Tamaño de pantalla
      { id: 42, value: `1366*768`}, // Resolucion
      { id: 43, value: `Apollo Lake N3350 (Dual-Core - 1.1GHz)`}, // Procesador
      { id: 44, value: `4GB`}, // Memoria RAM
      { id: 45, value: `64GB`}, // Almacenamiento
      { id: 46, value: `Frontal (0.3MP)`}, // Cámara
      { id: 36, value: `v4.2`}, // Versión BT
      { id: 8, value: `TF card, USB x2 (2.0 y 3.0), Auxiliar y Mini HDMI`}, // Entradas
      { id: 47, value: `Windows 10 Home`}, // Sistema operativo
      { id: 16, value: `32,8 x 21,7 x 2,2 cm`}, // Dimensiones
      { id: 18, value: `1,34Kg`}, // Peso
      { id: 19, value: `7798111353759`}, // EAN
    ],
    featuresSections: false,
    includes: [
      24, // Funda de Neoprene
      5, // Fuente de Alimentación
      9, // Manual y garantía
    ],
    certNo: `0Q-AR-01307-T-0`,
    downloads: `https://drive.google.com/drive/folders/1XLVGUK5qp2FQiVr94GrXz_uPG643jARP`,
    variants: ['CA-141', 'CA141-CO', 'CA141-C'],
    colors: []
  },
  { // CA141-C
    name: `Cloudbook Dual-core 4GB RAM Win 11 + Funda`,
    sku: `CA141-C`,
    link: `/productos/CA141-C`,
    categories: [103], 
    imgs: [
      `/products/CA141-C/img/1.webp`,
      // `/products/CA141-C/img/2.webp`,
      `/products/CA141-C/img/3.webp`,
      `/products/CA141-C/img/4.webp`,
      `/products/CA141-C/img/5.webp`,
      `/products/CA141-C/img/6.webp`,
      `/products/CA141-C/img/7.webp`,
      `/products/CA141-C/img/8.webp`,
    ].map(e => fileserver + e),
    360: true,
    gen: "3º Generación",
    banners: [ 
      { title: `Accedé a la nube`, img: fileserver + `/banners/cloud.webp`,
      desc: `El almacenamiento local ha quedado en el pasado, almacená tus archivos en la nube y accedé a ellos fácilmente desde cualquier sitio.` },
      { title: `¡Conectate!`, img: fileserver + `/banners/puertosca141.webp`,
      desc: `Posee 2 puertos USB, 1 puerto HDMI Mini, slot para tarjetas TF/MicroSD y puerto para auriculares 3.5mm (Audio y micrófono).` },
      { title: `Funda de Neoprene`, img: fileserver + `/banners/fundaca141co.webp`,
      desc: `Incluye una funda de Neoprene para que puedas trasladar tu equipo de forma segura a donde quiera que vayas.` },
    ],
    shortDesc: `Con vos siempre `,
    longDesc: "Editá, Hacé Streaming, Escribí, Trabajá. La Nube se encarga del resto. Una cloudbook es la computadora de quienes necesitan estar siempre listos para conectarse.",
    buyLink: `https://tienda.aiwaelectronics.com.ar/notebooks/332-notebook-cloudbook-14-dual-core-4gb-ram-win11-aiwa-funda-ca141-c-7798111354589.html`,
    featuredFeatures: [
      { id: 61 }, // Windows
      { id: 62 }, // Camara frontal
      { id: 63, value: 'Intel Celeron N4020 Dual-Core'}, // Procesador
      { id: 64, value: '4GB'}, // Memoria RAM
      { id: 65, value: ['14"', '1366x768px']}, // Pantalla 
      { id: 66 }, // SD
      { id: 69, value: 'HDMI Mini' }, // Salida monitor
      { id: 67 }, // Funda
    ],
    features: [
      { id: 41, value: `14"` }, // Tamaño de pantalla
      { id: 42, value: `1366*768`}, // Resolucion
      { id: 43, value: `Apollo Lake N4020 (Dual-Core - 2.8GHz)`}, // Procesador
      { id: 44, value: `4GB`}, // Memoria RAM
      { id: 45, value: `SSD 128GB`}, // Almacenamiento
      { id: 46, value: `Frontal (0.3MP)`}, // Cámara
      { id: 36, value: `v4.2`}, // Versión BT
      { id: 8, value: `TF card, USB x2 (2.0 y 3.0), Auxiliar y Mini HDMI`}, // Entradas
      { id: 47, value: `Windows 11`}, // Sistema operativo
      { id: 16, value: `32,8 x 21,7 x 2,2 cm`}, // Dimensiones
      { id: 18, value: `1,34Kg`}, // Peso
      { id: 19, value: `7798111354589`}, // EAN
    ],
    featuresSections: false,
    includes: [
      24, // Funda de Neoprene
      5, // Fuente de Alimentación
      9, // Manual y garantía
    ],
    certNo: `0Q-AR-01307-T-0`,
    downloads: `https://drive.google.com/drive/folders/16DAMs5p9bKVcBuWSZjz-ANUnAit9Vn5b`,
    colors: []
  },
  { // NA-1413
    name: `Notebook Core i3 4GB RAM Win 10`,
    sku: `NA-1413`,
    link: `/productos/NA-1413`,
    categories: [103], 
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
    ].map(e => fileserver + e),
    360: false,
    gen: "1º Generación",
    banners: [ 
      { title: `Diseño Compacto`, img: fileserver + `/banners/compacto1413.webp`,
      desc: `Peso ligero y medidas compactas permiten un uso práctico y un transporte sencillo. Podés disfrutar de pelis estés donde estés, o participar de tus reuniones de trabajo con todos tus archivos a tu alcance.` },
      { title: `¡Conectate!`, img: fileserver + `/banners/puertosna1431.webp`,
      desc: `Posee 3 puertos USB (2 tipo A, 1 tipo C), 1 puerto HDMI, slot para tarjetas TF/MicroSD, 1 puerto de red Ethernet, ranura para candados Kensington y puerto para auriculares 3.5mm (Audio y micrófono).` },
    ],
    shortDesc: `La solución de tu día a día`,
    longDesc: "Una herramienta, un medio de comunicación, de entretenimiento, todo para que tu rutina sea lo más amena posible.",
    buyLink: ``,
    featuredFeatures: [
      { id: 60 }, // Windows
      { id: 62 }, // Camara frontal
      { id: 63, value: 'Intel Core i3 6157U'}, // Procesador
      { id: 64, value: '4GB'}, // Memoria RAM
      { id: 65, value: ['14"', '1920x1080']}, // Pantalla 
      { id: 66 }, // SD
      { id: 69, value: 'HDMI' }, // Salida monitor
      { id: 74 }, // Teclado Esp
      { id: 72 }, // USBC
      { id: 73, value: 6 }, // Bateria
      { id: 70 }, // Kensington
      { id: 68, value: 2 }, // Puertos USB
    ],
    features: [
      { id: 41, value: `14"` }, // Tamaño de pantalla
      { id: 42, value: `1920*1080`}, // Resolucion
      { id: 43, value: `Intel Core i3 - 6157U (2.4GHz)`}, // Procesador
      { id: 44, value: `4GB`}, // Memoria RAM
      { id: 45, value: `500 GigaBytes (HDD)`}, // Almacenamiento
      { id: 46, value: `Frontal (0.3MP)`}, // Cámara
      { id: 36, value: `v4.2`}, // Versión BT
      { id: 8, value: `TF card, USB 3,0x2 y tipo C, Auxiliar, Puerto de Red y HDMI`}, // Entradas
      { id: 47, value: `Windows 10 Home`}, // Sistema operativo
      { id: 16, value: `37cm x 32 cm x 5,8cm`}, // Dimensiones
      { id: 18, value: `1,41Kg`}, // Peso
      { id: 19, value: `7798111353469`}, // EAN
    ],
    featuresSections: false,
    includes: [
      5, // Fuente de Alimentación
      9, // Manual y garantía
    ],
    certNo: `0Q-AR-01307-T-0`,
    downloads: `https://drive.google.com/drive/folders/1egSBU-4Z6Qx5T8D2rZ0TNkeWj2U-O2uR`,
    variants: ['NA-1413', 'NA-1431'],
    colors: []
  },
  { // NA-1431
    name: `Notebook Core i3 8GB RAM Win 10`,
    sku: `NA-1431`,
    link: `/productos/NA-1431`,
    categories: [103], 
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
    ].map(e => fileserver + e),
    360: false,
    gen: "2º Generación",
    banners: [ 
      { title: `¡Conectate!`, img: fileserver + `/banners/puertosna1431.webp`,
      desc: `Posee 3 puertos USB (2 tipo A, 1 tipo C), 1 puerto HDMI, slot para tarjetas TF/MicroSD, 1 puerto de red Ethernet, ranura para candados Kensington y puerto para auriculares 3.5mm (Audio y micrófono).` },
      { title: 'Potencia de sobra', img: fileserver + '/banners/poderna1431.webp',
      desc: 'Está equipada con hardware de última generación. Instalá y usá tus programas preferidos sin inconvenientes.'},
      { title: `Funda de Neoprene`, img: fileserver + `/banners/fundaca141co.webp`,
      desc: `Incluye una funda de Neoprene para que puedas trasladar tu equipo de forma segura a donde quiera que vayas.` },
    ],
    shortDesc: `La velocidad que necesitás`,
    longDesc: "Con novedoso hardware que posibilita que tu flujo de trabajo tenga la rapidez y fluidez dignas de un profesional digital.",
    buyLink: ``,
    featuredFeatures: [
      { id: 60 }, // Windows
      { id: 62 }, // Camara frontal
      { id: 63, value: 'Intel Core i3 1005G1'}, // Procesador
      { id: 64, value: '8GB'}, // Memoria RAM
      { id: 65, value: ['14"', '1920x1080']}, // Pantalla 
      { id: 66 }, // SD
      { id: 69, value: 'HDMI' }, // Salida monitor
      { id: 67 }, // Funda
      { id: 72 }, // USBC
      { id: 73, value: 6 }, // Bateria
      { id: 70 }, // Kensington
      { id: 68, value: 2 }, // Puertos USB
    ],
    features: [
      { id: 41, value: `14"` }, // Tamaño de pantalla
      { id: 42, value: `1920*1080`}, // Resolucion
      { id: 43, value: `Intel Core i3 1005G1 10th Gen. 3.4GHz`}, // Procesador
      { id: 44, value: `8GB`}, // Memoria RAM
      { id: 45, value: `256 GigaBytes (SSD)`}, // Almacenamiento
      { id: 46, value: `Frontal (0.3MP)`}, // Cámara
      { id: 36, value: `v4.2`}, // Versión BT
      { id: 8, value: `TF card, USB 3,0x2 y tipo C, Auxiliar, Puerto de Red y HDMI`}, // Entradas
      { id: 47, value: `Windows 10 Home`}, // Sistema operativo
      { id: 16, value: `37cm x 32 cm x 5,8cm`}, // Dimensiones
      { id: 18, value: `1,41Kg`}, // Peso
      { id: 19, value: `7798111353919`}, // EAN
    ],
    featuresSections: false,
    includes: [
      24, // Funda
      5, // Fuente de Alimentación
      9, // Manual y garantía
    ],
    certNo: `0Q-AR-01307-T-0`,
    downloads: `https://drive.google.com/drive/folders/1SvItrVBtKP31e7--X336swDLvI326g3O`,
    colors: []
  }
]