const fileserver = 'https://aiwaelectronics.com.ar/fileserver'

export const products = [
  //////////////// LINEA RING ////////////////

  { // AW-T2008
    name: 'Torre de Sonido Bluetooth Ring 12000W',
    sku: 'AW-T2008',
    link: '/productos/AW-T2008',
    line: 'ring',
    categories: [110], 
    imgs: [
      '/products/AW-T2008/img/1.webp',
      '/products/AW-T2008/img/2.webp',
      '/products/AW-T2008/img/3.webp',
      '/products/AW-T2008/img/4.webp',
      '/products/AW-T2008/img/5.webp'
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [
      {
        id: 1,
        customTitle: 'Micrófono inalámbrico incluido',
        // customImg: 'https://aiwaelectronics.com.ar/fileserver/banners/bar450.webp'
        // TO OVERWRITE PRESET TITLE AND DESCRIPTION MUST SET: customTitle, customDesc
      },
      {
        id: 2,
      },
      {
        id: 4,
        customImg: fileserver + '/banners/poolparty2008.webp'
      },
      {
        id: 5,
        customDesc: "Ya que es portátil y pudiendo usar hasta 2 micrófonos y una guitarra, permite realizar presentaciones en vivo en bares, celebraciones, espacios públicos, vía streaming... ¡donde quieras!"
      },
      {
        id: 15
      }
    ],
    shortDesc: 'Sonido Robusto',
    longDesc: "Está preparado para estar a la altura de tus fiestas. No te preocupes por su tamaño, llevalo a todos lados usando sus ruedas.",
    buyLink: '',
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
        value: '12000W PMPO'
      },
      { // Woofer
        id: 3,
        value: '2 de 8"'
      },
      { // Woofer
        id: 35,
        value: '1 de 2"'
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
        value: 'Interna Recargable 12V / 4.5Ah'
      }, */
      { // Radio FM
        id: 25,
      },
      { // Duracion Batería
        id: 8,
        value: '5 horas (según su uso)'
      },
      { // MicroSD y USB
        id: 37,
      }
    ],
    features: [
      {
        id: 3,
        value: `2 de 8"`,
        
      },
      {
        id: 4,
        value: `1 de 2"`,
        
      },
      {
        id: 2,
        value: "12000W PMPO",
        
      },
      {
        id: 10,
        value: "Interna Recargable 12V / 4.5Ah",
        
      },
      {
        id: 11,
        value: "5 horas (según su uso)",
        
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
        value: "Micrófono, USB, MicroSD y Auxiliar",
        
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
        value: "31 x 83 x 31 cm",
        
      },
      {
        id: 17,
        value: "35,5 x 88 x 35,5 cm",
        
      },
      {
        id: 18,
        value: "13,75 Kg",
        
      },
      {
        id: 19,
        value: "7798111353957",
        
      },
    ],
    includes: [
      1, // Mic inalambrico
      8, // Control remoto negro
      3, // Cable Aux
      12, // Cable de alimentacion
      9, // Manual
    ],
    certNo: 'Q-AR-01590-T-0',
    downloads: 'https://drive.google.com/drive/folders/1NCXXr0mqb4YUkrGyHsUpOJ5RYlsIL_2v',
    variants: ['AW-T2008', 'AW-T2008-PB']
  },
  { // AW-T2008-PB
    name: 'Torre de Sonido Bluetooth Ring 13000W',
    sku: 'AW-T2008-PB',
    link: '/productos/AW-T2008-PB',
    line: 'ring',
    categories: [102], 
    imgs: [
      '/products/AW-T2008-PB/img/1.webp',
      '/products/AW-T2008-PB/img/2.webp',
      '/products/AW-T2008-PB/img/3.webp',
      '/products/AW-T2008-PB/img/4.webp',
      '/products/AW-T2008-PB/img/5.webp',
      '/products/AW-T2008-PB/img/6.webp',
      '/products/AW-T2008-PB/img/7.webp',
      '/products/AW-T2008-PB/img/8.webp',
      '/products/AW-T2008-PB/img/9.webp',
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "2º Generación",
    banners: [
      {
        id: 1,
        customTitle: 'Micrófono inalámbrico incluido'
        // TO OVERWRITE PRESET TITLE AND DESCRIPTION MUST SET: customTitle, customDesc
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
      {
        id: 4,
        customImg: fileserver + '/banners/poolparty2008.webp'
      },
      {
        id: 5,
        customDesc: "Ya que es portátil y pudiendo usar hasta 2 micrófonos y una guitarra, permite realizar presentaciones en vivo en bares, celebraciones, espacios públicos, vía streaming... ¡donde quieras!"
      }
    ],
    shortDesc: 'Sonido Robusto',
    longDesc: "Está preparado para estar a la altura de tus fiestas. No te preocupes por su tamaño, llevalo a todos lados usando sus ruedas.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/torres-de-sonido/211-parlante-torre-bluetooth-ring-power-bank-aiwa-aw-t2008-pb.html',
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
        value: '13000W PMPO'
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
      { // Entrada Guitarra y mic
        id: 21,
      },
      { // Entrada Micrófono 
        id: 38,
      },
      { // Entrada Auxiliar
        id: 17,
      },
      { // Efectos de Luz
        id: 6,
      },
      { // Batería Recargable
        id: 7,
        value: 'Interna Recargable 12V / 4.5Ah'
      },
      { // Duracion Batería
        id: 8,
        value: '5 horas (según su uso)'
      },
      { // Caja de Madera + ruedas
        id: 36,
      } 
    ],
    features: [
      {
        id: 3,
        value: `2 de 8"`,
        
      },
      {
        id: 4,
        value: `1 de 2"`,
        
      },
      {
        id: 2,
        value: "13000W PMPO",
        
      },
      {
        id: 10,
        value: "Interna Recargable 12V / 4.5Ah",
        
      },
      {
        id: 11,
        value: "5 horas (según su uso)",
        
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
        value: "TWS, Power Bank (cargá tus dispositivos)",
        
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
        value: "31 x 83 x 31 cm",
        
      },
      {
        id: 17,
        value: "35,5 x 88 x 35,5 cm",
        
      },
      {
        id: 18,
        value: "13,75 Kg",
        
      },
      {
        id: 19,
        value: "7798111354367",
        
      },
    ],
    includes: [
      1, // Mic inalambrico,
      3,
      12, // Cable de alimentacion
      9 // Manual
    ],
    certNo: 'Q-AR-01590-T-0',
    downloads: 'https://drive.google.com/drive/folders/1CFO0ECLhRM5A4eT3pAoPxnhWlMJgyN95',
    variants: []
  },
  {// AW-T2010
    name: 'Torre de Sonido Bluetooth Ring 13500W',
    sku: 'AW-T2010',
    link: '/productos/AW-T2010',
    line: 'ring',
    categories: [110], 
    imgs: [
      '/products/AW-T2010/img/1.webp',
      '/products/AW-T2010/img/2.webp',
      '/products/AW-T2010/img/3.webp',
      '/products/AW-T2010/img/4.webp',
      '/products/AW-T2010/img/5.webp',
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [
      {
        id: 1,
        customTitle: 'Micrófono inalámbrico incluido'
        // TO OVERWRITE PRESET TITLE AND DESCRIPTION MUST SET: customTitle, customDesc
      },
      {
        id: 2,
      },
      {
        id: 4,
        customImg: fileserver + '/banners/poolparty2010.webp'
      },
      {
        id: 5,
        customDesc: "Ya que es portátil y pudiendo usar hasta 2 micrófonos y una guitarra, permite realizar presentaciones en vivo en bares, celebraciones, espacios públicos, vía streaming... ¡donde quieras!"
      },
      {
        id: 15
      }
    ],
    shortDesc: 'Potencia y Calidad',
    longDesc: "Con dos parlantes Woofer de 10 pulgadas cada uno, vas a poder tirar tu casa por la ventana.",
    buyLink: '',
    videos: [],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: '13500W PMPO'
      },
      { // Woofer
        id: 3,
        value: '2 de 10"'
      },
      { // Tweeter
        id: 35,
        value: '1 de 2"'
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
        value: 'Interna Recargable 12V / 4.5Ah'
      }, */
      { // Radio FM
        id: 25,
      },
      { // Duracion Batería
        id: 8,
        value: '6 horas (según su uso)'
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
    certNo: 'Q-AR-01590-T-0',
    downloads: 'https://drive.google.com/drive/folders/1cvmjEHaxFp8dlIgsqklkbW9HBPkGaWFQ',
    variants: ['AW-T2010', 'AW-T2010-PB']
  },
  {// AW-T2010-PB
    name: 'Torre de Sonido Bluetooth Ring 14500W',
    sku: 'AW-T2010-PB',
    link: '/productos/AW-T2010-PB',
    line: 'ring',
    categories: [102], 
    imgs: [
      '/products/AW-T2010-PB/img/1.webp',
      '/products/AW-T2010-PB/img/2.webp',
      '/products/AW-T2010-PB/img/3.webp',
      '/products/AW-T2010-PB/img/4.webp',
      '/products/AW-T2010-PB/img/5.webp',
      '/products/AW-T2010-PB/img/6.webp',
      '/products/AW-T2010-PB/img/7.webp',
      '/products/AW-T2010-PB/img/8.webp',
      '/products/AW-T2010-PB/img/9.webp',
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "2º Generación",
    banners: [
      {
        id: 1,
        customTitle: 'Micrófono inalámbrico incluido'
        // TO OVERWRITE PRESET TITLE AND DESCRIPTION MUST SET: customTitle, customDesc
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
      {
        id: 4,
        customImg: fileserver + '/banners/poolparty2010.webp'
      },
      {
        id: 5,
        customDesc: "Ya que es portátil y pudiendo usar hasta 2 micrófonos y una guitarra, permite realizar presentaciones en vivo en bares, celebraciones, espacios públicos, vía streaming... ¡donde quieras!"
      }
    ],
    shortDesc: 'Potencia y Calidad',
    longDesc: "Con dos parlantes Woofer de 10 pulgadas cada uno, vas a poder tirar tu casa por la ventana.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/torres-de-sonido/212-parlante-torre-bluetooth-ring-power-bank-aiwa-aw-t2010-pb.html',
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
        value: '14500W PMPO'
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
        value: 'Interna Recargable 12V / 7.5Ah'
      },
      { // Duracion Batería
        id: 8,
        value: '6 horas (según su uso)'
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
    certNo: 'Q-AR-01590-T-0',
    downloads: 'https://drive.google.com/drive/folders/1Cemu-urtrh7h1eOF0ZXxn7vKxMVldKJv',
    variants: []
  },
  {// AW-T2012
    name: 'Torre de Sonido Bluetooth Ring 16000W',
    sku: 'AW-T2012',
    link: '/productos/AW-T2012',
    line: 'ring',
    categories: [102], 
    imgs: [
      '/products/AW-T2012/img/1.webp',
      '/products/AW-T2012/img/2.webp',
      '/products/AW-T2012/img/3.webp',
      '/products/AW-T2012/img/4.webp',
      '/products/AW-T2012/img/5.webp',
      '/products/AW-T2012/img/6.webp',
      '/products/AW-T2012/img/7.webp',
      '/products/AW-T2012/img/8.webp',
      '/products/AW-T2012/img/9.webp',
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [
      {
        id: 1,
        customTitle: 'Micrófono inalámbrico incluido'
        // TO OVERWRITE PRESET TITLE AND DESCRIPTION MUST SET: customTitle, customDesc
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
      {
        id: 4,
        customImg: fileserver + '/banners/fiestas2012.webp'
      },
      {
        id: 5,
        customDesc: "Ya que es portátil y pudiendo usar hasta 2 micrófonos y una guitarra, permite realizar presentaciones en vivo en bares, celebraciones, espacios públicos, vía streaming... ¡donde quieras!"
      }
    ],
    shortDesc: 'Sonido Colosal',
    longDesc: "Caja con cuerpo de madera, 1,49 centímetros de altura. Una gran torre en todo sentido de la palabra.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/torres-de-sonido/253-parlante-torre-bluetooth-ring-power-bank-aiwa-aw-t2012.html',
    videos: [],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: '16000W PMPO'
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
        value: 'Interna Recargable 12V / 7.5Ah'
      },
      { // Duracion Batería
        id: 8,
        value: '6 horas (según su uso)'
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
    certNo: 'Q-AR-01590-T-0',
    downloads: 'https://drive.google.com/drive/folders/1LC8zxO0Wveyy-OQk7pDL8D1q80NvccJw',
    variants: []
  },

  /////////////// LINEA PARTY ////////////////

  {// AW-P240D
    name: 'Parlante Portátil Bluetooth Party 2500W',
    sku: 'AW-P240D',
    link: '/productos/AW-P240D',
    line: 'party',
    categories: [110], 
    imgs: [
      '/products/AW-P240D/img/1.webp',
      '/products/AW-P240D/img/2.webp',
      '/products/AW-P240D/img/3.webp',
      '/products/AW-P240D/img/4.webp',
      '/products/AW-P240D/img/5.webp',
      '/products/AW-P240D/img/6.webp',
      '/products/AW-P240D/img/7.webp',
      '/products/AW-P240D/img/8.webp',
      '/products/AW-P240D/img/9.webp',
    ].map(e => fileserver + e),
    top: false,
    360: false,
    gen: "1º Generación",
    banners: [
      {
        id: 15,
        customImg: fileserver + '/banners/panel240sa.webp'
      },
      {
        id: 1,
        customImg: fileserver + '/banners/microfonocable.webp'
        // TO OVERWRITE MUST SET: customTitle, customDesc, customImg
      },
      {
        id: 2,
        customImg: fileserver + '/banners/tws240.webp'
      },
      {
        id: 6,
        customImg: fileserver + '/banners/portatil240.webp'
      },
      {
        id: 23,
        customImg: fileserver + '/banners/control.webp'
      }
    ],
    shortDesc: 'Musicalizá tu día',
    longDesc: "Debido a su gran portabilidad y liviano peso, este parlante es un compañero de viajes, de rutas, y de estudio ideal. Transformá los momentos cotidianos en una ocasión especial",
    buyLink: '',
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
        value: '2500W PMPO'
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: '1 de 8"'
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
        value: '3 horas a máximo volumen'
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
    certNo: '',
    downloads: 'https://drive.google.com/drive/folders/1SkL0B6U6qEuWoQbGNK2aL4IVoeNyAE7R',
    variants: ['AW-P240D', 'AW-P240D-SA','AW-P240D-SN']
  },
  {// AW-P240D-SA
    name: 'Parlante Portátil Bluetooth Party 2500W',
    sku: 'AW-P240D-SA',
    link: '/productos/AW-P240D-SA',
    line: 'party',
    categories: [110], 
    imgs: [
      '/products/AW-P240D-SA/img/1.webp',
      '/products/AW-P240D-SA/img/2.webp',
      '/products/AW-P240D-SA/img/3.webp',
      '/products/AW-P240D-SA/img/4.webp',
      '/products/AW-P240D-SA/img/5.webp',
      '/products/AW-P240D-SA/img/6.webp',
      '/products/AW-P240D-SA/img/7.webp',
      '/products/AW-P240D-SA/img/8.webp',
    ].map(e => fileserver + e),
    top: false,
    360: false,
    gen: "2º Generación",
    banners: [
      {
        id: 15,
        customImg: fileserver + '/banners/panel240sa.webp'
      },
      {
        id: 2,
        customImg: fileserver + '/banners/tws240.webp'
        // TO OVERWRITE MUST SET: customTitle, customDesc, customImg
      },
      {
        id: 16,
        customImg: fileserver + '/banners/reguladores450sa.webp'
      },
      {
        id: 6,
        customImg: fileserver + '/banners/portatil240.webp'
      }
    ],
    shortDesc: 'Musicalizá tu día',
    longDesc: "Debido a su gran portabilidad y liviano peso, este parlante es un compañero de viajes, de rutas, y de estudio ideal. Transformá los momentos cotidianos en una ocasión especial",
    buyLink: '',
    videos: [],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: '2500W PMPO'
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: '1 de 8"'
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
        value: '3 horas a máximo volumen'
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
    certNo: '',
    downloads: 'https://drive.google.com/drive/folders/1-UQ3H-GaeaCwa56k3rGV0KSMxKdPQmI_',
    variants: ['AW-P240D','AW-P240D-SA','AW-P240D-SN']
  },
  {// AW-P240D-SN
    name: 'Parlante Portátil Bluetooth Party 2500W',
    sku: 'AW-P240D-SN',
    link: '/productos/AW-P240D-SN',
    line: 'party',
    categories: [101], 
    imgs: [
      '/products/AW-P240D-SN/img/1.webp',
      '/products/AW-P240D-SN/img/2.webp',
      '/products/AW-P240D-SN/img/3.webp',
      '/products/AW-P240D-SN/img/4.webp',
      '/products/AW-P240D-SN/img/5.webp',
      '/products/AW-P240D-SN/img/6.webp',
      '/products/AW-P240D-SN/img/7.webp',
      '/products/AW-P240D-SN/img/8.webp',
      '/products/AW-P240D-SN/img/9.webp',
    ].map(e => fileserver + e),
    top: false,
    360: true,
    gen: "3º Generación",
    banners: [
      {
        id: 16,
        customImg: fileserver + '/banners/reguladores450sn.webp'
      },
      {
        id: 2,
        customImg: fileserver + '/banners/tws240.webp'
      },
      {
        id: 6,
        customImg: fileserver + '/banners/portatil240.webp'
      },
      {
        id: 1,
        customTitle: 'Entrada para micrófono',
        customDesc: '¿Karaoke? ¡de una! Gracias a su entrada para micrófono podés conectar uno y cantar con tus amigos toda la noche. ¡Que la fiesta no pare!',
        customImg: fileserver + '/banners/microfonocable.webp'
      }
    ],
    shortDesc: 'Musicalizá tu día',
    longDesc: "Debido a su gran portabilidad y liviano peso, este parlante es un compañero de viajes, de rutas, y de estudio ideal. Transformá los momentos cotidianos en una ocasión especial",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/parlantes-portatiles/331-parlante-bluetooth-portatil-2500w-aiwa-aw-p240d-sn.html',
    videos: [],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: '2500W PMPO'
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: '1 de 8"'
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
        value: '3 horas a máximo volumen'
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
    certNo: '',
    downloads: 'https://drive.google.com/drive/folders/1AkUOXIGyh1tLjEGlNq2iN2CHEIodiBFY',
    variants: []
  },
  {// AW-P450D
    name: 'Parlante Portátil Bluetooth Party 4500W',
    sku: 'AW-P450D',
    link: '/productos/AW-P450D',
    line: 'party',
    categories: [110], 
    imgs: [
      '/products/AW-P450D/img/1.webp',
      '/products/AW-P450D/img/2.webp',
      '/products/AW-P450D/img/4.webp',
      '/products/AW-P450D/img/6.webp',
      '/products/AW-P450D/img/7.webp',
      '/products/AW-P450D/img/8.webp',
      '/products/AW-P450D/img/9.webp',
      '/products/AW-P450D/img/5.webp',
    ].map(e => fileserver + e),
    top: false,
    360: false,
    gen: "1º Generación",
    banners: [
      {
        id: 15,
        customImg: fileserver + '/banners/panel450sa.webp'
      },
      {
        id: 1,
        customImg: fileserver + '/banners/microfonocable.webp'
        // TO OVERWRITE MUST SET: customTitle, customDesc, customImg
      },
      {
        id: 16,
        customImg: fileserver + '/banners/reguladores450sa.webp'
      },
      {
        id: 2,
        customImg: fileserver + '/banners/tws450.webp'
      },
      /* {
        id: 6,
        customImg: fileserver + '/banners/bar450.webp'
      }, */
      {
        id: 23,
        customImg: fileserver + '/banners/control.webp'
      }
    ],
    shortDesc: 'Tu compañía indispensable',
    longDesc: "A donde vayas, lo llevas para que tu música preferida suene en alta fidelidad.",
    buyLink: '',
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
        value: '4500W PMPO'
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: '2 de 6.5"'
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
        value: '3 horas a máximo volumen'
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
    certNo: '',
    downloads: 'https://drive.google.com/drive/folders/11HuAZNrU_0t1Ri1lf79m_4gef_ICWMbR',
    variants: ['AW-P450D', 'AW-P450D-SA', 'AW-P450D-SN']
  },
  {// AW-P450D-SA
    name: 'Parlante Portátil Bluetooth Party 4500W',
    sku: 'AW-P450D-SA',
    link: '/productos/AW-P450D-SA',
    line: 'party',
    categories: [110], 
    imgs: [
      '/products/AW-P450D-SA/img/1.webp',
      '/products/AW-P450D-SA/img/2.webp',
      '/products/AW-P450D-SA/img/4.webp',
      '/products/AW-P450D-SN/img/5.webp',
      '/products/AW-P450D-SA/img/6.webp',
      '/products/AW-P450D-SA/img/7.webp',
      '/products/AW-P450D-SA/img/8.webp',
      '/products/AW-P450D-SA/img/9.webp',
    ].map(e => fileserver + e),
    top: false,
    360: false,
    gen: "2º Generación",
    banners: [
      {
        id: 15,
        customImg: fileserver + '/banners/panel450sa.webp'
      },
      { // TO OVERWRITE MUST SET: customTitle, customDesc, customImg
        id: 2,
        customImg: fileserver + '/banners/tws450.webp'
      },
      {
        id: 16,
        customImg: fileserver + '/banners/reguladores450sa.webp'
      },
      {
        id: 6,
        customImg: fileserver + '/banners/bar450.webp'
      }
    ],
    shortDesc: 'Tu compañía indispensable',
    longDesc: "A donde vayas, lo llevas para que tu música preferida suene en alta fidelidad.",
    buyLink: '',
    videos: [],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: '4500W PMPO'
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: '2 de 6.5"'
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
        value: '3 horas a máximo volumen'
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
    certNo: '',
    downloads: 'https://drive.google.com/drive/folders/126X1HtcyfECqgoFRFaqpEV94gAZ2c4Xc',
    variants: ['AW-P450D', 'AW-P450D-SA', 'AW-P450D-SN']
  },
  {// AW-P450D-SN
    name: 'Parlante Portátil Bluetooth Party 4500W',
    sku: 'AW-P450D-SN',
    link: '/productos/AW-P450D-SN',
    line: 'party',
    categories: [101], 
    imgs: [
      '/products/AW-P450D-SN/img/1.webp',
      '/products/AW-P450D-SN/img/2.webp',
      '/products/AW-P450D-SN/img/3.webp',
      '/products/AW-P450D-SN/img/4.webp',
      '/products/AW-P450D-SN/img/5.webp',
      '/products/AW-P450D-SN/img/6.webp',
      '/products/AW-P450D-SN/img/7.webp',
      '/products/AW-P450D-SN/img/8.webp',
    ].map(e => fileserver + e),
    top: false,
    360: true,
    gen: "3º Generación",
    banners: [
      {
        id: 16,
        customImg: fileserver + '/banners/reguladores450.webp'
      },
      { // TO OVERWRITE MUST SET: customTitle, customDesc, customImg
        id: 2,
        customImg: fileserver + '/banners/tws450.webp'
      },
      {
        id: 6,
        customImg: fileserver + '/banners/bar450.webp'
      },
      {
        id: 1,
        customTitle: 'Entrada para micrófono',
        customDesc: '¿Karaoke? ¡de una! Gracias a su entrada para micrófono podés conectar uno y cantar con tus amigos toda la noche. ¡Que la fiesta no pare!',
        customImg: fileserver + '/banners/karaoke450.webp'
      }
    ],
    shortDesc: 'Tu compañía indispensable',
    longDesc: "A donde vayas, lo llevas para que tu música preferida suene en alta fidelidad.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/torres-de-sonido/252-parlante-portatil-bluetooth-aiwa-aw-p450d-sn.html',
    videos: [],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: '4500W PMPO'
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: '2 de 6.5"'
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
        value: '3 horas a máximo volumen'
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
    certNo: '',
    downloads: 'https://drive.google.com/drive/folders/1TxmR_vMk0uC10q29mnngRGS8rRKmRTBe',
    variants: []
  },
  {// AW-T451D
    name: 'Torre de Sonido Portátil Bluetooth Party 4500W',
    sku: 'AW-T451D',
    link: '/productos/AW-T451D',
    line: 'party',
    categories: [110], 
    imgs: [
      '/products/AW-T451D/img/1.webp',
      '/products/AW-T451D/img/2.webp',
      '/products/AW-T451D/img/3.webp',
      '/products/AW-T451D/img/4.webp',
      '/products/AW-T451D/img/5.webp',
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [
      {
        id: 15,
        customImg: fileserver + '/banners/panel451.webp'
      },
      {
        id: 1,
        customImg: fileserver + '/banners/microfonocable.webp',
        // TO OVERWRITE MUST SET: customTitle, customDesc, customImg
      },
      {
        id: 2,
        customImg: fileserver + '/banners/tws600.webp'
      },
      {
        id: 6,
        customImg: fileserver + '/banners/portatil451.webp'
      },
      {
        id: 18,
      },
      {
        id: 17
      },
    ],
    shortDesc: 'La potencia que estabas esperando',
    longDesc: "Esta torre fue diseñada para lograr la mejor relación entre potencia y tamaño. Liviana, y de fácil uso, sus múltiples modos de conexión la convierten en una opción muy práctica cuando se trata de poner ritmo y alegría a tus fiestas.",
    buyLink: '',
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
        value: '4500W PMPO'
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: '2 de 6.5"'
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
        value: '3 horas a máximo volumen'
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
    certNo: '',
    downloads: 'https://drive.google.com/drive/folders/1_jqaumAFlrCm0kDam7RewKtMBY5PLCrw',
    variants: ['AW-T451D', 'AW-T451D-SA', 'AW-T451D-SN']
  },
  {// AW-T451D-SA
    name: 'Torre de Sonido Portátil Bluetooth Party 4500W',
    sku: 'AW-T451D-SA',
    link: '/productos/AW-T451D-SA',
    line: 'party',
    categories: [110], 
    imgs: [
      '/products/AW-T451D-SA/img/1.webp',
      '/products/AW-T451D-SA/img/2.webp',
      '/products/AW-T451D-SA/img/3.webp',
      '/products/AW-T451D-SA/img/4.webp',
      '/products/AW-T451D-SA/img/5.webp',
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "2º Generación",
    banners: [
      {
        id: 15,
        customImg: fileserver + '/banners/panel451.webp'
      },
      {
        id: 1,
        customImg: fileserver + '/banners/microfonocable.webp',
        customTitle: "¿Karaoke? ¡De una!",
        customDesc: "Conectá un micrófono y creá recuerdos inolvidables con tu familia y amigos."
      },
      {
        id: 2,
        customImg: fileserver + '/banners/tws600.webp'
      },
      {
        id: 6,
        customImg: fileserver + '/banners/portatil451.webp'
      },
      {
        id: 17
      },
    ],
    shortDesc: 'La potencia que estabas esperando',
    longDesc: "Esta torre fue diseñada para lograr la mejor relación entre potencia y tamaño. Liviana, y de fácil uso, sus múltiples modos de conexión la convierten en una opción muy práctica cuando se trata de poner ritmo y alegría a tus fiestas.",
    buyLink: '',
    videos: [],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: '4500W PMPO'
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: '2 de 6.5"'
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
        value: '3 horas a máximo volumen'
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
    certNo: '',
    downloads: 'https://drive.google.com/drive/folders/1-mGYda-uVaWyDputWWobMvJxvFIX-1Hs',
    variants: ['AW-T451D', 'AW-T451D-SA', 'AW-T451D-SN']
  },
  {// AW-T451D-SN
    name: 'Torre de Sonido Portátil Bluetooth Party 4500W',
    sku: 'AW-T451D-SN',
    link: '/productos/AW-T451D-SN',
    line: 'party',
    categories: [102],
    imgs: [
      '/products/AW-T451D-SN/img/1.webp',
      '/products/AW-T451D-SN/img/2.webp',
      '/products/AW-T451D-SN/img/3.webp',
      '/products/AW-T451D-SN/img/4.webp',
      '/products/AW-T451D-SN/img/5.webp',
      '/products/AW-T451D-SN/img/6.webp',
      '/products/AW-T451D-SN/img/7.webp',
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "3º Generación",
    banners: [
      {
        id: 1,
        customImg: fileserver + '/banners/microfonocable.webp',
        customTitle: "¿Karaoke? ¡De una!",
        customDesc: "Conectá un micrófono y creá recuerdos inolvidables con tu familia y amigos."
      },
      {
        id: 2,
        customImg: fileserver + '/banners/tws600.webp'
      },
      {
        id: 6,
        customImg: fileserver + '/banners/portatil451.webp'
      },
      {
        id: 17
      },
    ],
    shortDesc: 'La potencia que estabas esperando',
    longDesc: "Esta torre fue diseñada para lograr la mejor relación entre potencia y tamaño. Liviana, y de fácil uso, sus múltiples modos de conexión la convierten en una opción muy práctica cuando se trata de poner ritmo y alegría a tus fiestas.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/torres-de-sonido/257-parlante-portatil-torre-bluetooth-aiwa-aw-t451d-sn.html',
    videos: [],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: '4500W PMPO'
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: '2 de 6.5"'
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
        value: '3 horas a máximo volumen'
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
    certNo: '',
    downloads: 'https://drive.google.com/drive/folders/15kC-dwt90ybZ5ax-91uWvisOVJYDAfPH',
    variants: []
  },
  {// AW-T600D
    name: 'Torre de Sonido Portátil Bluetooth Party 5000W',
    sku: 'AW-T600D',
    link: '/productos/AW-T600D',
    line: 'party',
    categories: [110], 
    imgs: [
      '/products/AW-T600D/img/1.webp',
      '/products/AW-T600D/img/2.webp',
      '/products/AW-T600D/img/3.webp',
      '/products/AW-T600D/img/4.webp',
      '/products/AW-T600D/img/5.webp',
      '/products/AW-T600D/img/6.webp',
      '/products/AW-T600D/img/7.webp',
      '/products/AW-T600D/img/8.webp',
      '/products/AW-T600D/img/9.webp',
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [
      {
        id: 15,
        customImg: fileserver + '/banners/reproduci600.webp'
      },
      {
        id: 1,
        customImg: fileserver + '/banners/microfonocable.webp'
        // TO OVERWRITE MUST SET: customTitle, customDesc, customImg
      },
      {
        id: 2,
        customImg: fileserver + '/banners/tws600.webp'
      },
      {
        id: 6,
        customImg: fileserver + '/banners/portatil600.webp'
      }
    ],
    shortDesc: 'El aliado en tus fiestas',
    longDesc: "Una torre de sonido es sinónimo de potencia. Y este parlante, está preparado para aceptar el desafío. Tus momentos van a ser recordados por siempre.",
    buyLink: '',
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
        value: '5000W PMPO'
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: '2 de 8"'
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
    certNo: '00Q-AR-01223-T-1',
    downloads: 'https://drive.google.com/drive/folders/1cw-sGt21j80tZ5031iVSGqvPsmXJTEp4',
    variants: ['AW-T600D', 'AW-T600D-SA', 'AW-T600D-SN']
  },
  {// AW-T600D-SA
    name: 'Torre de Sonido Portátil Bluetooth Party 5000W',
    sku: 'AW-T600D-SA',
    link: '/productos/AW-T600D-SA',
    line: 'party',
    categories: [110], 
    imgs: [
      '/products/AW-T600D/img/2.webp',
      '/products/AW-T600D/img/3.webp',
      '/products/AW-T600D/img/4.webp',
      '/products/AW-T600D/img/5.webp',
      '/products/AW-T600D/img/6.webp',
      '/products/AW-T600D/img/7.webp',
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "2º Generación",
    banners: [
      {
        id: 15,
        customImg: fileserver + '/banners/reproduci600.webp'
      },
      {
        id: 2,
        customImg: fileserver + '/banners/tws600.webp'
      },
      {
        id: 6,
        customImg: fileserver + '/banners/portatil600.webp'
      },
      {
        id: 16,
      }
    ],
    shortDesc: 'El aliado en tus fiestas',
    longDesc: "Una torre de sonido es sinónimo de potencia. Y este parlante, está preparado para aceptar el desafío. Tus momentos van a ser recordados por siempre.",
    buyLink: '',
    videos: [],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: '5000W PMPO'
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: '2 de 8"'
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
    certNo: '00Q-AR-01223-T-1',
    downloads: 'https://drive.google.com/drive/folders/10AlqdoQ_rOCdTM_mldiNMPzc9mdRaHk_',
    variants: ['AW-T600D', 'AW-T600D-SA', 'AW-T600D-SN']
  },
  {// AW-T600D-SN
    name: 'Torre de Sonido Portátil Bluetooth Party 5000W',
    sku: 'AW-T600D-SN',
    link: '/productos/AW-T600D-SN',
    line: 'party',
    categories: [102], 
    imgs: [
      '/products/AW-T600D-SN/img/1.webp',
      '/products/AW-T600D-SN/img/2.webp',
      '/products/AW-T600D-SN/img/3.webp',
      '/products/AW-T600D-SN/img/4.webp',
      '/products/AW-T600D-SN/img/5.webp',
      '/products/AW-T600D-SN/img/6.webp',
      '/products/AW-T600D-SN/img/7.webp',
      '/products/AW-T600D-SN/img/8.webp',
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "3º Generación",
    banners: [
      {
        id: 2,
        customImg: fileserver + '/banners/tws600.webp'
      },
      {
        id: 6,
        customImg: fileserver + '/banners/portatil600.webp',
        customDesc: 'Gracias a su batería interna y a sus ruedas podrás trasladarlo escuchar música donde quiera que vayas.'
      },
      {
        id: 1,
        customImg: fileserver + '/banners/microfonocable.webp',
        customTitle: "¿Karaoke? ¡De una!",
        customDesc: "Conectá un micrófono y creá recuerdos inolvidables con tu familia y amigos."
      },
      {
        id: 16,
        customImg: fileserver + '/banners/reguladores600sn.webp'
      }
    ],
    shortDesc: 'El aliado en tus fiestas',
    longDesc: "Una torre de sonido es sinónimo de potencia. Y este parlante, está preparado para aceptar el desafío. Tus momentos van a ser recordados por siempre.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/torres-de-sonido/266-parlante-portatil-bluetooth-aiwa-aw-t600d-sn.html',
    videos: [],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: '5000W PMPO'
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: '2 de 8"'
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
    certNo: '00Q-AR-01223-T-1',
    downloads: 'https://drive.google.com/drive/folders/1LOrmrc6dboTou4qxp9cyD4-n62oy04NL',
    variants: []
  },
  {// AW-P1200D
    name: 'Parlante Portátil Bluetooth Party 6000W',
    sku: 'AW-P1200D',
    link: '/productos/AW-P1200D',
    line: 'party',
    categories: [110], 
    imgs: [
      '/products/AW-P1200D/img/1.webp',
      '/products/AW-P1200D/img/2.webp',
      '/products/AW-P1200D/img/3.webp',
      '/products/AW-P1200D/img/4.webp',
      '/products/AW-P1200D/img/5.webp',
      '/products/AW-P1200D/img/6.webp',
    ].map(e => fileserver + e),
    top: false,
    360: false,
    gen: "1º Generación",
    banners: [
      {
        id: 15,
        customImg: fileserver + '/banners/panel1200.webp'
      },
      {
        id: 1,
        customImg: fileserver + '/banners/microfonocable.webp',
        customDesc: '¡Diversión sin cables! Usalo a distancia con el micrófono y control remoto incluidos.'
        // TO OVERWRITE MUST SET: customTitle, customDesc, customImg
      },
      {
        id: 16,
        customImg: fileserver + '/banners/reguladores1200.webp',
        customDesc: 'Regulá de forma independiente el volumen y eco del micrófono. Posee entrada para micrófono estándar de 6,5mm.'
      },
      {
        id: 2,
        customImg: fileserver + '/banners/tws1200.webp'
      },
      {
        id: 6,
        customImg: fileserver + '/banners/portatil1200.webp',
        customText: 'Gracias a su sistema Carry-on y a su batería interna podrás escuchar música donde quiera que vayas'
      }
    ],
    shortDesc: 'El alma de la fiesta',
    longDesc: "Un sonido potente, y bajos profundos, hacen que tu fiesta sea una experiencia donde tus invitados puedan sumergirse y hacer de ella un recuerdo inolvidable.",
    buyLink: '',
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
        value: '6000W PMPO'
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: '1 de 12"'
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
        value: '3 horas (según volumen)'
      },
      { // Bateria
        id: 7,
        value: 'de 3.7V / 1800mAh'
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
    certNo: 'Q-AR-01374-T-0',
    downloads: 'https://drive.google.com/drive/folders/1DDQI7xoXAhdQY2mZEhZwRJp6HO2GdSAW',
    variants: ['AW-P1200D', 'AW-P1200D-SA', 'AW-P1200D-SN']
  },
  {// AW-P1200D-SA
    name: 'Parlante Portátil Bluetooth Party 6000W',
    sku: 'AW-P1200D-SA',
    link: '/productos/AW-P1200D-SA',
    line: 'party',
    categories: [110], 
    imgs: [
      '/products/AW-P1200D-SA/img/1.webp',
      '/products/AW-P1200D-SA/img/2.webp',
      '/products/AW-P1200D-SA/img/3.webp',
      '/products/AW-P1200D-SA/img/4.webp',
      '/products/AW-P1200D-SA/img/5.webp',
      '/products/AW-P1200D-SA/img/6.webp',
    ].map(e => fileserver + e),
    top: false,
    360: false,
    gen: "2º Generación",
    banners: [
      {
        id: 15,
        customImg: fileserver + '/banners/panel1200.webp'
      },
      {
        id: 2,
        customImg: fileserver + '/banners/tws1200.webp'
      },
      {
        id: 16,
        customImg: fileserver + '/banners/reguladores1200.webp',
        customDesc: 'Regulá de forma independiente el volumen y eco del micrófono. Posee entrada para micrófono estándar de 6,5mm.'
      },
      {
        id: 6,
        customImg: fileserver + '/banners/portatil1200.webp',
        customDesc: 'Gracias a su sistema Carry-on y a su batería interna podrás escuchar música donde quiera que vayas'
      }
    ],
    shortDesc: 'El alma de la fiesta',
    longDesc: "Un sonido potente, y bajos profundos, hacen que tu fiesta sea una experiencia donde tus invitados puedan sumergirse y hacer de ella un recuerdo inolvidable.",
    buyLink: '',
    videos: [
    ],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: '6000W PMPO'
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: '1 de 12"'
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
        value: '3 horas (según volumen)'
      },
      { // Bateria
        id: 7,
        value: 'de 3.7V / 1800mAh'
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
    certNo: 'Q-AR-01374-T-0',
    downloads: 'https://drive.google.com/drive/folders/12O54GzSjl0Nm_-2DIHENTO5dmAincenI',
    variants: ['AW-P1200D', 'AW-P1200D-SA', 'AW-P1200D-SN']
  },
  {// AW-P1200D-SN
    name: 'Parlante Portátil Bluetooth Party 6000W',
    sku: 'AW-P1200D-SN',
    link: '/productos/AW-P1200D-SN',
    line: 'party',
    categories: [101], 
    imgs: [
      '/products/AW-P1200D-SN/img/1.webp',
      '/products/AW-P1200D-SN/img/2.webp',
      '/products/AW-P1200D-SN/img/3.webp',
      '/products/AW-P1200D-SN/img/4.webp',
      '/products/AW-P1200D-SN/img/5.webp',
      '/products/AW-P1200D-SN/img/6.webp',
    ].map(e => fileserver + e),
    top: false,
    360: true,
    gen: "3º Generación",
    banners: [
      {
        id: 2,
        customImg: fileserver + '/banners/tws1200.webp'
      },
      {
        id: 6,
        customImg: fileserver + '/banners/portatil1200.webp'
      }
    ],
    shortDesc: 'El alma de la fiesta',
    longDesc: "Un sonido potente, y bajos profundos, hacen que tu fiesta sea una experiencia donde tus invitados puedan sumergirse y hacer de ella un recuerdo inolvidable.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/torres-de-sonido/217-parlante-portatil-aiwa-12-pulgadas-bluetooth-aw-p1200d.html',
    videos: [],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: '6000W PMPO'
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: '1 de 12"'
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
        value: 'de 3.7V / 1800mAh'
      },
      { // Ranura tripode
        id: 41
      },
      { // Duracion bateria
        id: 8,
        value: '3 horas (según volumen)'
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
        value: "34 x 53 x 29 cm",
        
      },
      { // Medidas de la caja
        id: 17,
        value: "38 x 54 x 32 cm",
        
      },
      { // Peso
        id: 18,
        value: "5 Kg",
        
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
    certNo: 'Q-AR-01374-T-0',
    downloads: 'https://drive.google.com/drive/folders/15GtEvArmGnIgG4S7qyJzjPUqpDnSR-jR',
    variants: []
  },
  {// AW-P1510D
    name: 'Parlante Portátil Bluetooth Party 7000W',
    sku: 'AW-P1510D',
    link: '/productos/AW-P1510D',
    line: 'party',
    categories: [110], 
    imgs: [
      '/products/AW-P1510D/img/1.webp',
      '/products/AW-P1510D/img/2.webp',
      '/products/AW-P1510D/img/3.webp',
      '/products/AW-P1510D/img/4.webp',
      '/products/AW-P1510D/img/5.webp',
      '/products/AW-P1510D/img/6.webp',
      '/products/AW-P1510D/img/7.webp',
      '/products/AW-P1510D/img/8.webp',
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [
      {
        id: 15,
        customImg: fileserver + '/banners/panel1510.webp'
      },
      {
        id: 1,
        customTitle: "Micrófono Inalámbrico Incluido",
        customDesc: '¡Diversión sin cables! Usalo a distancia con el micrófono inalámbrico y control remoto incluidos.'
        // TO OVERWRITE MUST SET: customTitle, customDesc, customImg
      },
      {
        id: 2,
        customImg: fileserver + '/banners/tws1200.webp'
      },
      {
        id: 6,
        customImg: fileserver + '/banners/portatil1200.webp',
        customDesc: 'Gracias a su sistema Carry-on y a su batería interna podrás escuchar música donde quiera que vayas.'
      }
    ],
    shortDesc: 'La distancia no es problema',
    longDesc: "Este producto cuenta con un micrófono inalámbrico muy útil en distintos escenarios, ya sea para dar conferencias, cantar con su modo Karaoke, para musicalizar tu negocio o animar tu fiesta.",
    buyLink: '',
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
        value: '7000W PMPO'
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: '1 de 15"'
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
    certNo: '00Q-AR-01223-T-1',
    downloads: 'https://drive.google.com/drive/folders/1yv88lYDFWpsptavOJggiSgz9Xv8TiEMr',
    variants: ['AW-P1510D', 'AW-P1510D-SN']
  },
  {// AW-P1510D-SN
    name: 'Parlante Portátil Bluetooth Party 7000W',
    sku: 'AW-P1510D-SN',
    link: '/productos/AW-P1510D-SN',
    line: 'party',
    categories: [101], 
    imgs: [
      '/products/AW-P1510D-SN/img/1.webp',
      '/products/AW-P1510D-SN/img/2.webp',
      '/products/AW-P1510D-SN/img/3.webp',
      '/products/AW-P1510D-SN/img/4.webp',
      '/products/AW-P1510D-SN/img/5.webp',
      '/products/AW-P1510D-SN/img/6.webp',
      '/products/AW-P1510D-SN/img/7.webp',
      '/products/AW-P1510D-SN/img/8.webp',
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "2º Generación",
    banners: [
      {
        id: 15,
        customTitle: 'Conectá y escuchá',
        customImg: fileserver + '/banners/panel1510sn.webp',
        customDesc: 'Posee una entrada para micrófono o guitarra, y una entrada auxiliar para que traigas tu sonido de donde quieras.'
      },
      {
        id: 1,
        customTitle: "Micrófono Inalámbrico Incluido"
        // TO OVERWRITE MUST SET: customTitle, customDesc, customImg
      },
      {
        id: 2,
        customImg: fileserver + '/banners/tws1200.webp'
      },
      {
        id: 6,
        customImg: fileserver + '/banners/portatil1200.webp',
        customDesc: 'Gracias a su sistema Carry-on y a su batería interna podrás escuchar música donde quiera que vayas.'
      }
    ],
    shortDesc: 'La distancia no es problema',
    longDesc: "Este producto cuenta con un micrófono inalámbrico muy útil en distintos escenarios, ya sea para dar conferencias, cantar con su modo Karaoke, para musicalizar tu negocio o animar tu fiesta.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/parlantes-portatiles/95-parlante-portatil-aiwa-15-pulgadas-bluetooth-aw-p1510d-7798111353544.html',
    videos: [],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: '7000W PMPO'
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: '1 de 15"'
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
    certNo: '00Q-AR-01223-T-1',
    downloads: 'https://drive.google.com/drive/folders/15G8xiA9_vbWH8G5a8oBL76t7icFDRjMh',
    variants: []
  },
  {// AW-P1500PS
    name: 'Parlante Portátil Bluetooth Party 9000W',
    sku: 'AW-P1500PS',
    link: '/productos/AW-P1500PS',
    line: 'party',
    categories: [101], 
    imgs: [
      '/products/AW-P1500PS/img/1.webp',
      '/products/AW-P1500PS/img/8.webp',
      '/products/AW-P1500PS/img/9.webp',
      '/products/AW-P1500PS/img/2.webp',
      '/products/AW-P1500PS/img/3.webp',
      '/products/AW-P1500PS/img/4.webp',
      '/products/AW-P1500PS/img/5.webp',
      '/products/AW-P1500PS/img/6.webp',
      '/products/AW-P1500PS/img/7.webp',
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [
      {
        id: 15,
        customImg: fileserver + '/banners/panel1500.webp'
      },
      {
        id: 1,
        customTitle: "Micrófono Inalámbrico Incluido",
        customDesc: '¡Diversión sin cables! Incluye micrófono inalámbrico UHF (Ultra High Frequency) y control remoto.'
        // TO OVERWRITE MUST SET: customTitle, customDesc, customImg
      },
      {
        id: 7,
      },
      {
        id: 2,
        customImg: fileserver + '/banners/tws1500.webp',
      },
      {
        id: 6,
        customImg: fileserver + '/banners/portatil1500.webp',
        customDesc: 'Gracias a su sistema Carry-on y a su batería interna podrás escuchar música donde quiera que vayas'
      }
    ],
    shortDesc: '¡Listo para tocar!',
    longDesc: "Está listo para conectar una guitarra, un micrófono y tocar o cantar en vivo. Hace llegar a todos la música que sale de tu corazón. También Incluye la función Karaoke con la cual podés pasar horas divirtiéndote sin parar con tu familia y amigos.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/parlantes-portatiles/94-parlante-aiwa-bluetooth-portatil-con-tripode-aw-p1500ps-7798111353438.html',
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
        value: '9000W PMPO'
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Woofer
        id: 3,
        value: '1 de 15" y 1 tweeter de 25mm'
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
    certNo: '00Q-AR-01388-T-1',
    downloads: 'https://drive.google.com/drive/folders/1EeW6E5-uS2S-lLUHG4TtRtcjswgjlr84',
    variants: []
  },
  {// AW-T2040
    name: 'Torre de Sonido Bluetooth Party 6000W',
    sku: 'AW-T2040',
    link: '/productos/AW-T2040',
    line: 'party',
    categories: [102], 
    imgs: [
      '/products/AW-T2040/img/1.webp',
      '/products/AW-T2040/img/2.webp',
      '/products/AW-T2040/img/3.webp',
      '/products/AW-T2040/img/4.webp',
      '/products/AW-T2040/img/5.webp',
      '/products/AW-T2040/img/6.webp',
      '/products/AW-T2040/img/7.webp',
      '/products/AW-T2040/img/8.webp',
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [ // TO OVERWRITE PROPS MUST SET: customTitle, customDesc, customImg
      {
        id: 8,
        customImg: fileserver + '/banners/doblemic2.webp'
      },
      {
        id: 9,
        customImg: fileserver + '/banners/2040luces.webp'
      },
      {
        id: 3,
      },
      {
        id: 2,
        customImg: fileserver + '/banners/tws2040.webp'
      },
    ],
    shortDesc: 'Show luminoso',
    longDesc: "Cautivá a tus invitados con variados y coloridos efectos de Luz durante toda la noche.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/torres-de-sonido/254-parlante-torre-bluetooth-power-bank-aiwa-aw-t2040-7798111354398.html',
    videos: [],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: '6000W PMPO'
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
        value: '2 de 8" y 1 tweeter de 2"'
      },
      { // Duracion Batería
        id: 8,
        value: '8 horas (según su uso)'
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
    certNo: '',
    downloads: 'https://drive.google.com/drive/folders/1QSNSdv4YxPuPEPFxA9K4DPOt-UkdISBk',
    variants: []
  },
  {// AW-T2042
    name: 'Torre de Sonido Bluetooth Party 6000W',
    sku: 'AW-T2042',
    link: '/productos/AW-T2042',
    line: 'party',
    categories: [102], 
    imgs: [
      '/products/AW-T2042/img/1.webp',
      '/products/AW-T2042/img/2.webp',
      '/products/AW-T2042/img/3.webp',
      '/products/AW-T2042/img/4.webp',
      '/products/AW-T2042/img/5.webp',
      '/products/AW-T2042/img/6.webp',
      '/products/AW-T2042/img/7.webp',
      '/products/AW-T2042/img/8.webp',
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [ // TO OVERWRITE PROPS MUST SET: customTitle, customDesc, customImg
      {
        id: 8,
        customImg: fileserver + '/banners/doblemic2.webp'
      },
      {
        id: 9,
        customImg: fileserver + '/banners/2042luces.webp'
      },
      {
        id: 3,
      },
      {
        id: 2,
        customImg: fileserver + '/banners/tws2042.webp'
      },
    ],
    shortDesc: 'En todo momento',
    longDesc: "Una torre lista para acompañarte durante largas horas en todo momento y lugar. Te permite llevar tu música junto a un variado show luminoso.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/torres-de-sonido/255-parlante-torre-bluetooth-power-bank-aiwa-aw-t2042.html',
    videos: [],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: '6000W PMPO'
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
        value: '2 de 8" y 1 tweeter de 2"'
      },
      { // Duracion Batería
        id: 8,
        value: '8 horas (según su uso)'
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
    certNo: '',
    downloads: 'https://drive.google.com/drive/folders/1QXDROpyb9KKtipho2ldRwI1rJoiBXzgT',
    variants: []
  },
  {// AW-T2044
    name: 'Torre de Sonido Bluetooth Party 6000W',
    sku: 'AW-T2044',
    link: '/productos/AW-T2044',
    line: 'party',
    categories: [102], 
    imgs: [
      '/products/AW-T2044/img/1.webp',
      '/products/AW-T2044/img/2.webp',
      '/products/AW-T2044/img/3.webp',
      '/products/AW-T2044/img/4.webp',
      '/products/AW-T2044/img/5.webp',
      '/products/AW-T2044/img/6.webp',
      '/products/AW-T2044/img/7.webp',
      '/products/AW-T2044/img/8.webp',
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [ // TO OVERWRITE PROPS MUST SET: customTitle, customDesc, customImg
      {
        id: 8,
        customImg: fileserver + '/banners/doblemic2.webp'
      },
      {
        id: 9,
        customImg: fileserver + '/banners/2044luces.webp'
      },
      {
        id: 3,
      },
      {
        id: 2,
        customImg: fileserver + '/banners/tws2044.webp'
      },
    ],
    shortDesc: 'Coloreá tus fiestas',
    longDesc: "Preparada para llenar de colores toda la noche. Su Empuñadura de Fácil Transporte y su liviano peso te permiten llevar tu música junto a un variado show luminoso.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/torres-de-sonido/256-parlante-torre-bluetooth-power-bank-aiwa-aw-t2044.html',
    videos: [],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: '6000W PMPO'
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
        value: '2 de 8" y 1 tweeter de 2"'
      },
      { // Duracion Batería
        id: 8,
        value: '8 horas (según su uso)'
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
    certNo: '',
    downloads: 'https://drive.google.com/drive/folders/1QOPtS-kaZzgK9-kD-SFT8decnb82PeFx',
    variants: []
  },
  
  /////////////// LINEA INFINIT ////////////////

  {// AW-T2021
    name: 'Torre de Sonido Bluetooth Infinit 9500W',
    sku: 'AW-T2021',
    link: '/productos/AW-T2021',
    line: 'infinit',
    categories: [102], 
    imgs: [
      '/products/AW-T2021/img/1.webp',
      '/products/AW-T2021/img/2.webp',
      '/products/AW-T2021/img/3.webp',
      '/products/AW-T2021/img/4.webp',
      '/products/AW-T2021/img/5.webp',
      '/products/AW-T2021/img/6.webp',
      '/products/AW-T2021/img/7.webp',
      '/products/AW-T2021/img/8.webp',
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [ // TO OVERWRITE PROPS MUST SET: customTitle, customDesc, customImg
      {
        id: 1,
        customImg: fileserver + '/banners/doblemic.webp',
        customTitle: 'Micrófono inalámbrico incluido',
      },
      {id: 3},
      {
        id: 10,
        customImg: fileserver + '/banners/panel2021.webp',
      },
      {
        id: 4,
        customImg: fileserver + '/banners/portatil2021.webp',
      },
    ],
    shortDesc: 'Ecualizador preciso',
    longDesc: "Efectos de luces en forma de anillos Led agregarán un toque fantástico a donde los lleves. Podrás ajustar el sonido a gusto como un verdadero Dj.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/torres-de-sonido/214-parlante-torre-bluetooth-power-bank-aiwa-aw-t2021.html',
    videos: [],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: '9500W PMPO'
      },
      { // Woofer
        id: 3,
        value: '2 de 8" y 1 Tweeter de 2"'
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
        value: 'Interna Recargable 7.4V / 3600mAh'
      },
      { // Duracion Batería
        id: 8,
        value: '5 horas (según su uso)'
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
    certNo: 'Q-AR-01590-T-1',
    downloads: 'https://drive.google.com/drive/folders/1FyB2FsIgxRZDRe_pSfftnQzz7lOFPRDg',
    variants: []
  },
  {// AW-T2022
    name: 'Torre de Sonido Bluetooth Infinit 8500W',
    sku: 'AW-T2022',
    link: '/productos/AW-T2022',
    line: 'infinit',
    categories: [102], 
    imgs: [
      '/products/AW-T2022/img/1.webp',
      '/products/AW-T2022/img/2.webp',
      '/products/AW-T2022/img/3.webp',
      '/products/AW-T2022/img/4.webp',
      '/products/AW-T2022/img/5.webp',
      '/products/AW-T2022/img/6.webp',
      '/products/AW-T2022/img/7.webp',
      '/products/AW-T2022/img/8.webp',
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [ // TO OVERWRITE PROPS MUST SET: customTitle, customDesc, customImg
      {
        id: 11,
      },
      {
        id: 22
      },
      {
        id: 6,
        customDesc: '¡Llevá la fiesta a donde sea que vayas! Con la Correa de fácil transporte podés moverte con tu música a la terraza, a la playa o a donde gustes.',
        customImg: fileserver + '/banners/portatil2022.webp'
      },
      {
        id: 4,
      },
      {
        id: 3,
      },
    ],
    shortDesc: 'Transportá tu música',
    longDesc: "Con la Correa de fácil transporte podés moverte con tu música de la terraza, a la playa o en donde mas gustes. Práctica, liviana y portatil, con un sonido potente.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/torres-de-sonido/215-parlante-torre-bluetooth-power-bank-aiwa-aw-t2022.html',
    videos: [],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: '8500W PMPO'
      },
      { // Woofer
        id: 3,
        value: '2 de 6,5"'
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
        value: '2 de 2"'
      },
      { // Uso Horizontal
        id: 32,
      },
      { // Batería Recargable
        id: 7,
        value: 'Interna Recargable 7.4V / 3600mAh'
      },
      { // Duracion Batería
        id: 8,
        value: '5 horas (según su uso)'
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
    certNo: 'Q-AR-01590-T-1',
    downloads: 'https://drive.google.com/drive/folders/1G-0ZfmHeh3HiECKxeV1--6Zo8ObYh1tc',
    variants: []
  },
  {// AW-T2018R
    name: 'Torre de Sonido Bluetooth Infinit 8000W',
    sku: 'AW-T2018R',
    link: '/productos/AW-T2018R',
    line: 'infinit',
    categories: [102], 
    imgs: [
      '/products/AW-T2018R/img/1.webp',
      '/products/AW-T2018R/img/2.webp',
      '/products/AW-T2018R/img/3.webp',
      '/products/AW-T2018R/img/4.webp',
      '/products/AW-T2018R/img/5.webp',
      '/products/AW-T2018R/img/6.webp',
      '/products/AW-T2018R/img/7.webp',
      '/products/AW-T2018R/img/8.webp',
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [ // TO OVERWRITE PROPS MUST SET: customTitle, customDesc, customImg
      {
        id: 8,
        customImg: fileserver + '/banners/doblemic2.webp',
      },
      {
        id: 3,
      },
      {
        id: 20,
        customImg: fileserver + '/banners/bateria2018.webp',
      },
      {
        id: 10,
        customImg: fileserver + '/banners/eq2018.webp',
        customDesc: '¡Personalizá tus temas como mas te guste! El botón de Ecualización te permite controlar a tu antojo los Agudos y Graves para darle un sonido auténtico a tus fiestas.'
      },
    ],
    shortDesc: 'Llevalo con vos',
    longDesc: "Una torre práctica y portátil, con un sonido potente. Con la Empuñadura de Fácil Transporte podés moverte con tu música por donde más gustes.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/torres-de-sonido/213-parlante-torre-bluetooth-power-bank-aiwa-aw-t2018r.html',
    videos: [],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: '8000W PMPO'
      },
      { // Woofer
        id: 3,
        value: '1 de 8"'
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
        value: '1 de 2"'
      },
      { // Batería Recargable
        id: 7,
        value: 'Interna Recargable 7.4V / 3600mAh'
      },
      { // Duracion Batería
        id: 8,
        value: '6 horas (según su uso)'
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
        value: "En Panel Superior y alrededor del Woofer ON / OFF",
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
    certNo: 'Q-AR-01590-T-2',
    downloads: 'https://drive.google.com/drive/folders/1GE6Z6B6kaWc8rHWDrsOloDgEDlfbAYmN',
    variants: []
  },
  {// AW-T2050R
    name: 'Torre de Sonido Bluetooth Infinit 8000W',
    sku: 'AW-T2050R',
    link: '/productos/AW-T2050R',
    line: 'infinit',
    categories: [102], 
    imgs: [
      '/products/AW-T2050R/img/1.webp',
      '/products/AW-T2050R/img/2.webp',
      '/products/AW-T2050R/img/3.webp',
      '/products/AW-T2050R/img/4.webp',
      '/products/AW-T2050R/img/5.webp',
      '/products/AW-T2050R/img/6.webp',
      '/products/AW-T2050R/img/7.webp',
      '/products/AW-T2050R/img/8.webp',
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [ // TO OVERWRITE PROPS MUST SET: customTitle, customDesc, customImg
      {
        id: 8,
        customImg: fileserver + '/banners/doblemic2.webp',
      },
      {
        id: 20,
      },
      {
        id: 3,
      },
      {
        id: 10,
        customImg: fileserver + '/banners/eq2050.webp',
        customDesc: '¡Personalizá tus temas como mas te guste! El botón de Ecualización te permite controlar a tu antojo los Agudos y Graves para darle un sonido auténtico a tus fiestas.'
      },

    ],
    shortDesc: 'Fiesta donde vayas',
    longDesc: "Una torre liviana, práctica y portatil, con un sonido potente. Sus deslumbrantes efectos de luces en forma de anillos le darán ese toque mágico a todos tus momentos.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/torres-de-sonido/216-parlante-torre-bluetooth-power-bank-aiwa-aw-t2050r.html',
    videos: [],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: '7000W PMPO'
      },
      { // Woofer
        id: 3,
        value: '2 de 6,5"'
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
        value: '1 de 2"'
      },
      { // Batería Recargable
        id: 7,
        value: 'Interna Recargable 7.4V / 3600mAh'
      },
      { // Duracion Batería
        id: 8,
        value: '8 horas (según su uso)'
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
    certNo: 'RA 4183955 E',
    downloads: 'https://drive.google.com/drive/folders/1Gzi7xqLXOCRYK42Zz3Jv3C_bDA7E8SBA',
    variants: []
  },
  {// AW-T506R
    name: 'Torre de Sonido Bluetooth Infinit 6500W',
    sku: 'AW-T506R',
    link: '/productos/AW-T506R',
    line: 'infinit',
    categories: [102], 
    imgs: [
      '/products/AW-T506R/img/1.webp',
      '/products/AW-T506R/img/2.webp',
      '/products/AW-T506R/img/3.webp',
      '/products/AW-T506R/img/4.webp',
      '/products/AW-T506R/img/5.webp',
      '/products/AW-T506R/img/6.webp',
      '/products/AW-T506R/img/7.webp',
      '/products/AW-T506R/img/8.webp',
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [ // TO OVERWRITE PROPS MUST SET: customTitle, customDesc, customImg
      {
        id: 11,
        customImg: fileserver + '/banners/horizontal506.webp'
      },
      {
        id: 15,
        customTitle: 'Conectividad sin límites',
        customDesc: '¡Cuántas formas de reproducir música! Posee Bluetooth, Radio, puerto USB, entrada Auxiliar y puerto para tarjetas TF/MicroSD.',
        customImg: fileserver + '/banners/panel506.webp'
      },
      {
        id: 8,
        customImg: fileserver + '/banners/doblemic2.webp'
      },
      {
        id: 12,
        customImg: fileserver + '/banners/perillas506nopb.webp'
      },
      {
        id: 18,
      }
    ],
    shortDesc: 'Más versatilidad',
    longDesc: "Práctico. Ideal para escuchar música en cualquier formato. Potente y altamente portable. Se puede utilizar tanto en vertical como en horizontal.",
    buyLink: '',
    videos: [],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: '6500W PMPO'
      },
      { // Woofer
        id: 3,
        value: '2 de 6,5"'
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
        value: '1 de 2"'
      },
      { // Uso Horizontal
        id: 32,
      },
      { // Duracion Batería
        id: 8,
        value: '8 horas (según su uso)'
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
    certNo: '00Q-AR-01223-T-1',
    downloads: 'https://drive.google.com/drive/folders/18tQIPtI8gXQqVhDkp2vT8Lxb00Cqz9t9',
    variants: ['AW-T506R', 'AW-T265SF', 'AW-T265SF-SA', 'AW-T506R-PB']
  },
  {// AW-T265SF
    name: 'Torre de Sonido Bluetooth Infinit 6500W',
    sku: 'AW-T265SF',
    link: '/productos/AW-T265SF',
    line: 'infinit',
    categories: [102], 
    imgs: [
      '/products/AW-T265SF/img/1.webp',
      '/products/AW-T265SF/img/2.webp',
      '/products/AW-T265SF/img/3.webp',
      '/products/AW-T265SF/img/4.webp',
      '/products/AW-T265SF/img/5.webp',
      '/products/AW-T265SF/img/6.webp',
      '/products/AW-T265SF/img/7.webp',
      '/products/AW-T265SF/img/8.webp',
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "2º Generación",
    banners: [ // TO OVERWRITE PROPS MUST SET: customTitle, customDesc, customImg
      {
        id: 11,
        customImg: fileserver + '/banners/horizontal506.webp'
      },
      {
        id: 8,
        customImg: fileserver + '/banners/doblemic2.webp'
      },
      {
        id: 15,
        customTitle: 'Conectividad sin límites',
        customDesc: '¡Cuántas formas de reproducir música! Posee Bluetooth, puerto USB, entrada Auxiliar y puerto para tarjetas TF/MicroSD.',
        customImg: fileserver + '/banners/panel265.webp'
      },
      {
        id: 12,
        customImg: fileserver + '/banners/perillas506nopb.webp'
      },
      {
        id: 18
      },
    ],
    shortDesc: 'Más versatilidad',
    longDesc: "Práctico. Ideal para escuchar música en cualquier formato. Potente y altamente portable. Se puede utilizar tanto en vertical como en horizontal.",
    buyLink: '',
    videos: [],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: '6500W PMPO'
      },
      { // Woofer
        id: 3,
        value: '2 de 6,5"'
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
        value: '1 de 2"'
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
    certNo: '00Q-AR-01223-T-1',
    downloads: 'https://drive.google.com/drive/folders/19TuPLjfUNqNVzcWsP9bttgJ3SEH1lXEr',
    variants: ['AW-T506R', 'AW-T265SF', 'AW-T265SF-SA', 'AW-T506R-PB']
  },
  {// AW-T265SF-SA
    name: 'Torre de Sonido Bluetooth Infinit 6500W',
    sku: 'AW-T265SF-SA',
    link: '/productos/AW-T265SF-SA',
    line: 'infinit',
    categories: [102], 
    imgs: [
      '/products/AW-T265SF-SA/img/1.webp',
      '/products/AW-T265SF-SA/img/2.webp',
      '/products/AW-T265SF-SA/img/3.webp',
      '/products/AW-T265SF-SA/img/4.webp',
      '/products/AW-T265SF-SA/img/5.webp',
      '/products/AW-T265SF-SA/img/6.webp',
      '/products/AW-T265SF-SA/img/7.webp',
      '/products/AW-T265SF-SA/img/8.webp',
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "3º Generación",
    banners: [ // TO OVERWRITE PROPS MUST SET: customTitle, customDesc, customImg
      {
        id: 11,
        customImg: fileserver + '/banners/horizontal506.webp'
      },
      {
        id: 8,
        customImg: fileserver + '/banners/doblemic2.webp'
      },
      {
        id: 15,
        customTitle: 'Conectividad sin límites',
        customDesc: '¡Cuántas formas de reproducir música! Posee Bluetooth, puerto USB, entrada Auxiliar y puerto para tarjetas TF/MicroSD.',
        customImg: fileserver + '/banners/panel265.webp'
      },
      {
        id: 12,
        customImg: fileserver + '/banners/perillas506nopb.webp'
      },
      {
        id: 3,
      },
    ],
    shortDesc: 'Más versatilidad',
    longDesc: "Práctico. Ideal para escuchar música en cualquier formato. Potente y altamente portable. Se puede utilizar tanto en vertical como en horizontal.",
    buyLink: '',
    videos: [],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: '6500W PMPO'
      },
      { // Woofer
        id: 3,
        value: '2 de 6,5"'
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
        value: '1 de 2"'
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
    certNo: '00Q-AR-01223-T-1',
    downloads: 'https://drive.google.com/drive/folders/1aaXePdKCLlh-Qr1eLbemZO1lAyDNoG50',
    variants: ['AW-T506R', 'AW-T265SF', 'AW-T265SF-SA', 'AW-T506R-PB']
  },
  {// AW-T506R-PB
    name: 'Torre de Sonido Bluetooth Infinit 6500W',
    sku: 'AW-T506R-PB',
    link: '/productos/AW-T506R-PB',
    line: 'infinit',
    categories: [102], 
    imgs: [
      '/products/AW-T506R-PB/img/1.webp',
      '/products/AW-T506R-PB/img/2.webp',
      '/products/AW-T506R-PB/img/3.webp',
      '/products/AW-T506R-PB/img/4.webp',
      '/products/AW-T506R-PB/img/5.webp',
      '/products/AW-T506R-PB/img/6.webp',
      '/products/AW-T506R-PB/img/7.webp',
      '/products/AW-T506R-PB/img/8.webp',
      '/products/AW-T506R-PB/img/9.webp',
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "4º Generación",
    banners: [ // TO OVERWRITE PROPS MUST SET: customTitle, customDesc, customImg
      {
        id: 11,
        customImg: fileserver + '/banners/horizontal506.webp'
      },
      {
        id: 8,
        customImg: fileserver + '/banners/doblemic2.webp'
      },
      {
        id: 12,
      },
    ],
    shortDesc: 'Más versatilidad',
    longDesc: "Práctico. Ideal para escuchar música en cualquier formato. Potente y altamente portable. Se puede utilizar tanto en vertical como en horizontal.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/torres-de-sonido/210-parlante-torre-bluetooth-aiwa-25w-power-bank.html',
    videos: [],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: '6500W PMPO'
      },
      { // Woofer
        id: 3,
        value: '2 de 6,5"'
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
        value: '1 de 2"'
      },
      { // Uso Horizontal
        id: 32,
      },
      { // Duracion Batería
        id: 8,
        value: '8 horas (según su uso)'
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
    certNo: '00Q-AR-01223-T-1',
    downloads: 'https://drive.google.com/drive/folders/188BCWXjwtJWRqXjNcz4YEuZVjhnEjcsA',
    variants: []
  },
  
  /////////////// LINEA FLAMA ////////////////

  {// AW-T604F
    name: 'Torre de Sonido Bluetooth Flama 6500W',
    sku: 'AW-T604F',
    link: '/productos/AW-T604F',
    line: 'flama',
    categories: [102], 
    imgs: [
      '/products/AW-T604F/img/1.webp',
      '/products/AW-T604F/img/2.webp',
      '/products/AW-T604F/img/3.webp',
      '/products/AW-T604F/img/4.webp',
      '/products/AW-T604F/img/5.webp',
      '/products/AW-T604F/img/6.webp',
    ].map(e => fileserver + e),
    top: false,
    360: true,
    gen: "1º Generación",
    banners: [ // TO OVERWRITE PROPS MUST SET: customTitle, customDesc, customImg
      {
        id: 11,
        customImg: fileserver + '/banners/horizontal604.webp',
      },
      {
        id: 4,
        customImg: fileserver + '/banners/fiestas604.webp',
      },
      {
        id: 6,
        customImg: fileserver + '/banners/portatil604.webp',
      },
      { id: 19 },
      {
        id: 2,
        customImg: fileserver + '/banners/tws604.webp',
      },
    ],
    shortDesc: 'Llevate fuego',
    longDesc: "Su práctico tamaño te permitirá llevar el fuego y la diversión a todas partes.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/torres-de-sonido/209-parlante-bluetooth-portatil-serie-flama-6500w.html',
    videos: [],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: '6500W PMPO'
      },
      { // Woofer
        id: 3,
        value: '1 de 8"'
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
        value: '1 de 1"'
      },
      { // Batería Recargable
        id: 7,
        value: 'Interna Recargable 7.4V / 3600mAh'
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
    certNo: '00Q-AR-01223-T-1',
    downloads: 'https://drive.google.com/drive/folders/10omQmKKjtEd40bO4OimLYlHeZM_Oqskf',
    variants: []
  },
  {// AW-T806F
    name: 'Torre de Sonido Bluetooth Flama 8000W',
    sku: 'AW-T806F',
    link: '/productos/AW-T806F',
    line: 'flama',
    categories: [102], 
    imgs: [
      '/products/AW-T806F/img/1.webp',
      '/products/AW-T806F/img/2.webp',
      '/products/AW-T806F/img/3.webp',
      '/products/AW-T806F/img/4.webp',
      '/products/AW-T806F/img/5.webp',
      '/products/AW-T806F/img/6.webp',
      '/products/AW-T806F/img/7.webp',
      '/products/AW-T806F/img/8.webp',
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [ // TO OVERWRITE PROPS MUST SET: customTitle, customDesc, customImg
      { 
        id: 1,
        customImg: fileserver + '/banners/microfonocable.webp',
        customDesc: '¿Karaoke? ¡de una! Con el micrófono incluido podrás tener increíbles sesiones de Karaoke con tus amigos. Cambiá canciones usando el control remoto incluido. ¡Que la fiesta no pare!'
      },  
      { id: 13 },
      {
        id: 9,
        customTitle: 'Elegí como hacer brillar tu fuego',
        customImg: fileserver + '/banners/efectos806.webp',
        customDesc: 'Presionando el botón "Luz" vas a pasar de Llama en llama para elegir la que mejor va con tu fiesta y con tu gente.',
        priority: true
      },
      {
        id: 15,
        customImg: fileserver + '/banners/panel806.webp',
      },
      {
        id: 2,
        customImg: fileserver + '/banners/tws806.webp'
      },
    ],
    shortDesc: 'Diversión al máximo',
    longDesc: "Efectos de luz que van a llamar la atención de todos tus amigos. Llevá con vos esta torre y serás el alma de la fiesta.",
    buyLink: '',
    videos: [],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: '8000W PMPO'
      },
      { // Woofer
        id: 3,
        value: '2 de 6,5"'
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
        value: 'Interna Recargable 7.4V / 3600mAh'
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
    certNo: '00Q-AR-01223-T-1',
    downloads: 'https://drive.google.com/drive/folders/19-zSuHUdeevC5edP-winJgJDvXuqjezA',
    variants: ['AW-T806F', 'AW-T806F-SA', 'AW-T806F-PB']
  },
  {// AW-T806F-SA
    name: 'Torre de Sonido Bluetooth Flama 8000W',
    sku: 'AW-T806F-SA',
    link: '/productos/AW-T806F-SA',
    line: 'flama',
    categories: [102], 
    imgs: [
      '/products/AW-T806F-SA/img/1.webp',
      '/products/AW-T806F-SA/img/2.webp',
      '/products/AW-T806F-SA/img/3.webp',
      '/products/AW-T806F-SA/img/4.webp',
      '/products/AW-T806F-SA/img/5.webp',
      '/products/AW-T806F-SA/img/6.webp',
      '/products/AW-T806F-SA/img/7.webp',
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "2º Generación",
    banners: [ // TO OVERWRITE PROPS MUST SET: customTitle, customDesc, customImg
      {
        id: 13,
      },
      {
        id: 15,
        customImg: fileserver + '/banners/panel806.webp',
      },
      {
        id: 9,
        customTitle: 'Elegí como hacer brillar tu fuego',
        customImg: fileserver + '/banners/efectos806.webp',
        customDesc: 'Presionando el botón "Luz" vas a pasar de Llama en llama para elegir la que mejor va con tu fiesta y con tu gente.'
      },
      {
        id: 21,
      },
      {
        id: 2,
        customImg: fileserver + '/banners/tws806.webp'
      },
    ],
    shortDesc: 'Diversión al máximo',
    longDesc: "Efectos de luz que van a llamar la atención de todos tus amigos. Llevá con vos esta torre y serás el alma de la fiesta.",
    buyLink: '',
    videos: [],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: '8000W PMPO'
      },
      { // Woofer
        id: 3,
        value: '2 de 6,5"'
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
        value: 'Interna Recargable 7.4V / 3600mAh'
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
    certNo: '00Q-AR-01223-T-1',
    downloads: 'https://drive.google.com/drive/folders/10X95ULeGxUO5PkCI8hbaJtSF59eDUSST',
    variants: ['AW-T806F', 'AW-T806F-SA', 'AW-T806F-PB']
  },
  {// AW-T806F-PB
    name: 'Torre de Sonido Bluetooth Flama 8000W',
    sku: 'AW-T806F-PB',
    link: '/productos/AW-T806F-PB',
    line: 'flama',
    categories: [102], 
    imgs: [
      '/products/AW-T806F-PB/img/1.webp',
      '/products/AW-T806F-PB/img/2.webp',
      '/products/AW-T806F-PB/img/3.webp',
      '/products/AW-T806F-PB/img/4.webp',
      '/products/AW-T806F-PB/img/5.webp',
      '/products/AW-T806F-PB/img/6.webp',
      '/products/AW-T806F-PB/img/7.webp',
      '/products/AW-T806F-PB/img/8.webp',
      '/products/AW-T806F-PB/img/9.webp',
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "3º Generación",
    banners: [ // TO OVERWRITE PROPS MUST SET: customTitle, customDesc, customImg
      {
        id: 13,
      },
      {
        id: 9,
        customTitle: 'Elegí como hacer brillar tu fuego',
        customImg: fileserver + '/banners/efectos806.webp',
        customDesc: 'Presionando el botón "Luz" vas a pasar de Llama en llama para elegir la que mejor va con tu fiesta y con tu gente.'
      },
      {
        id: 21,
      },
      {
        id: 2,
        customImg: fileserver + '/banners/tws806.webp'
      },
      {id: 3},
    ],
    shortDesc: 'Diversión al máximo',
    longDesc: "Efectos de luz que van a llamar la atención de todos tus amigos. Llevá con vos esta torre y serás el alma de la fiesta.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/torres-de-sonido/103-parlante-torre-bluetooth-portatil-flama-luces-aiwa-aw-t806f-7798111353995.html',
    videos: [],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: '8000W PMPO'
      },
      { // Woofer
        id: 3,
        value: '2 de 6,5"'
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
        value: 'Interna Recargable 7.4V / 3600mAh'
      },
      { // Reguladores
        id: 22,
      },
      { // Reg Eco y Vol
        id: 28,
      },
      { // Tweeter
        id: 35,
        value: '1 de 1"'
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
        value: 'Si'
      }
    ],
    includes: [
      3, // Aux
      5, // Fuente
      9, // Manual
    ],
    certNo: '00Q-AR-01223-T-1',
    downloads: 'https://drive.google.com/drive/folders/19pctxOL_BvlxooIZqpQSDT-RmdGa6LQV',
    variants: []
  },
  {// AW-T1008F
    name: 'Torre de Sonido Bluetooth Flama 9500W',
    sku: 'AW-T1008F',
    link: '/productos/AW-T1008F',
    line: 'flama',
    categories: [102], 
    imgs: [
      '/products/AW-T1008F/img/1.webp',
      '/products/AW-T1008F/img/2.webp',
      '/products/AW-T1008F/img/3.webp',
      '/products/AW-T1008F/img/4.webp',
      '/products/AW-T1008F/img/5.webp',
      '/products/AW-T1008F/img/6.webp',
      '/products/AW-T1008F/img/7.webp',
      '/products/AW-T1008F/img/8.webp',
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    banners: [ // TO OVERWRITE PROPS MUST SET: customTitle, customDesc, customImg
      {
        id: 15,
        customImg: fileserver + '/banners/panel1008.webp',
      },
      { 
        id: 1,
        customTitle: 'Micrófono Inalámbrico',
        customImg: fileserver + '/banners/microfonofx.webp',
        customDesc: '¡Libre de cables! Incluye micrófono inalámbrico y control remoto. 5 efectos de voz integrados para tener divertidas sesiones de Karaoke.' 
      },
      {
        id: 9,
        customTitle: 'Elegí como hacer brillar tu fuego',
        customImg: fileserver + '/banners/efectos806.webp',
        customDesc: 'Presionando el botón "Luz" vas a pasar de Llama en llama para elegir la que mejor va con tu fiesta y con tu gente. Posee en total 6 efectos diferentes.',
        priority: true
      },
      { id: 3 },
      { id: 4 },
      { id: 14 }
    ],
    shortDesc: 'Acercate al fuego',
    longDesc: "No solo podrás reproducir música desde cualquier dispositivo, sino que hasta 3 micrófonos pueden conectarse al parlante para poder disfrutar de una noche FLAMA.",
    buyLink: '',
    videos: [],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: '9500W PMPO'
      },
      { // Woofer
        id: 3,
        value: '2 de 8" y 1 tweeter de 1"'
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
    certNo: '00Q-AR-01223-T-1',
    downloads: 'https://drive.google.com/drive/folders/1x8k5MstMDILw0gNMnFilaf1Kuf_yGZQ2',
    variants: ['AW-T1008F', 'AW-T1008F-PB']
  },
  {// AW-T1008F-PB
    name: 'Torre de Sonido Bluetooth Flama 9500W',
    sku: 'AW-T1008F-PB',
    link: '/productos/AW-T1008F-PB',
    line: 'flama',
    categories: [102], 
    imgs: [
      '/products/AW-T1008F-PB/img/1.webp',
      '/products/AW-T1008F-PB/img/2.webp',
      '/products/AW-T1008F-PB/img/3.webp',
      '/products/AW-T1008F-PB/img/4.webp',
      '/products/AW-T1008F-PB/img/5.webp',
      '/products/AW-T1008F-PB/img/6.webp',
      '/products/AW-T1008F-PB/img/8.webp',
      '/products/AW-T1008F-PB/img/9.webp',
      '/products/AW-T1008F-PB/img/10.webp',
    ].map(e => fileserver + e),
    top: true,
    360: true,
    gen: "2º Generación",
    banners: [ // TO OVERWRITE PROPS MUST SET: customTitle, customDesc, customImg
      { 
        id: 1,
        customTitle: 'Micrófono Inalámbrico',
        customImg: fileserver + '/banners/microfonofx.webp',
        customDesc: 'Con el micrófono inalámbrico incluido y los 5 efectos de voz integrados podrás tener increíbles sesiones de Karaoke con tus amigos. ¡Que la fiesta no pare!' 
      },
      {
        id: 9,
        customTitle: 'Elegí como hacer brillar tu fuego',
        customImg: fileserver + '/banners/efectos806.webp',
        customDesc: 'Presionando el botón "Luz" vas a pasar de Llama en llama para elegir la que mejor va con tu fiesta y con tu gente. Posee en total 6 efectos diferentes.',
        priority: true
      },
      { id: 3 },
      { id: 4 },
      { id: 14 }
    ],
    shortDesc: 'Acercate al fuego',
    longDesc: "No solo podrás reproducir música desde cualquier dispositivo, sino que hasta 3 micrófonos pueden conectarse al parlante para poder disfrutar de una noche FLAMA.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/torres-de-sonido/98-parlante-torre-bluetooth-portatil-flama-luces-aiwa-aw-t1008f-7798111354008.html',
    videos: [],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: '9500W PMPO'
      },
      { // Woofer
        id: 3,
        value: '2 de 8" y 1 tweeter de 1"'
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
        id: 25, value: 'Si, 5',
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
    certNo: '00Q-AR-01223-T-1',
    downloads: 'https://drive.google.com/drive/folders/19O4ElAPI5VeQy71U01Y9U17tnsG-KUn-',
    variants: []
  },

  /////////////// AURICULARES ////////////////

  {// AVA-102N
    name: 'Auriculares con Vincha y Cable Removible',
    sku: 'AVA-102N',
    link: '/productos/AVA-102N',
    line: '',
    categories: [104], 
    imgs: [
      '/products/AVA-102N/img/1.webp',
      '/products/AVA-102N/img/2.webp',
      '/products/AVA-102N/img/3.webp',
      '/products/AVA-102N/img/4.webp',
      '/products/AVA-102N/img/5.webp',
      '/products/AVA-102N/img/6.webp',
      '/products/AVA-102N/img/7.webp',
      '/products/AVA-102N/img/8.webp',
      '/products/AVA-102N/img/9.webp',
    ].map(e => fileserver + e),
    top: false,
    360: true,
    gen: "1º Generación",
    banners: [ // TO OVERWRITE PROPS MUST SET: customTitle, customDesc, customImg
      { id: 25 },  
      { id: 27 },
      { id: 26 },
      { id: 24 },
    ],
    shortDesc: 'Tu compañía indispensable',
    longDesc: "A donde vayas, lo llevas para que tu música preferida suene en alta fidelidad.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/auriculares/89-auriculares-aiwa-vincha-plegable-ava-102-manos-libres-7798111353421.html',
    videos: [],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: '6500W PMPO'
      },
      { // Woofer
        id: 3,
        value: '1 de 8"'
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
        value: '1 de 1"'
      },
      { // Batería Recargable
        id: 7,
        value: 'Interna Recargable 7.4V / 3600mAh'
      },
      { // Reg Graves y Agudos
        id: 28,
      },
    ],
    features: [
      { id: 27, value: 'Manos Libres' }, // Controles
      { id: 28, value: '3,5 mm' }, // Tipo de conex
      { id: 2, value: '50mW' }, // Potencia
      { id: 29, value: '1,2m aprox.' }, // Longitud cable
      { id: 39, value: '20Hz ~ 20KHz' }, // Frecuencia
      { id: 31, value: '32Ω' }, // Impedancia
      { id: 32, value: '110dB±3dB' }, // Sensibilidad
      { id: 33, value: '-42dB±3dB' }, // Sens. Mic
      { id: 16, value: '169 * 68 * 188 mm' }, // Dimension prod
      { id: 17, value: '177 * 210 * 76 mm' }, // Dimension caja
      { id: 18, value: '146,39 gr' }, // Peso
      { id: 34, value: '40 mm' }, // Diametro diafrag.
      { id: 19, value: '7798111353421' }, // EAN

    ],
    includes: [
      3, // Aux
      5, // Fuente
      9, // Manual
    ],
    certNo: '',
    downloads: 'https://drive.google.com/drive/folders/188QHcTvUUNE4HttH4Nwfv7h4Gi59RSpr',
    variants: []
  },
]

export const variants = []
