import { FlareSharp, InsertDriveFile } from '@mui/icons-material';
const fileserver = 'https://aiwaelectronics.com.ar/fileserver'

export const products = [

  /////////////// LINEA RING ////////////////

  { // AW-T2008
    name: 'Torre de Sonido Bluetooth 12000W',
    sku: 'AW-T2008',
    link: '/productos/AW-T2008',
    line: 'ring',
    categories: [110], 
    imgs: [
      '/products/AW-T2008/img/1.webp',
      '/products/AW-T2008/img/2.webp',
      '/products/AW-T2008/img/3.webp',
      '/products/AW-T2008/img/4.webp',
      '/products/AW-T2008/img/5.webp',
    ].map(e => fileserver + e),
    top: true,
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
      },
      {
        id: 5,
        customDesc: "Ya que es portátil y pudiendo usar hasta 2 micrófonos y una guitarra, permite realizar presentaciones en vivo en bares, celebraciones, espacios públicos, vía streaming... ¡donde quieras!"
      }
    ],
    shortDesc: 'Sonido Robusto',
    longDesc: "Está preparado para estar a la altura de tus fiestas. No te preocupes por su tamaño, llevalo a todos lados usando sus ruedas.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/',
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
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Ruedas
        id: 19,
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
        value: 'Interna Recargable 12V / 4.5Ah'
      },
      { // Duracion Batería
        id: 8,
        value: '5 horas (según volumen)'
      },
      { // Caja de Madera
        id: 18,
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
        value: "5 horas (según volumen)",
        
      },
      {
        id: 20,
        value: "No",
        
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
        id: 6,
        value: "Si",
        
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
    includes: 'Micrófono Inalámbrico, Control Remoto, Cable de Alimentación (N° de Certificación: Q-AR-01590-T-0), Manual de Instrucciones y Garantía',
    downloads: [
      {
        name: 'Manual',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T2008-2010_MANUAL.pdf'
      },
      {
        name: 'Ficha',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T2008_FICHA.pdf'
      }
    ],
    variants: [
      {
        sku: 'AW-T2008-PB',
        link: '/productos/AW-T2008-PB',
      }
    ]
  },
  { // AW-T2008-PB
    name: 'Torre de Sonido Bluetooth 13000W',
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
    ].map(e => fileserver + e),
    top: true,
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
      },
      {
        id: 5,
        customDesc: "Ya que es portátil y pudiendo usar hasta 2 micrófonos y una guitarra, permite realizar presentaciones en vivo en bares, celebraciones, espacios públicos, vía streaming... ¡donde quieras!"
      }
    ],
    shortDesc: 'Sonido Robusto',
    longDesc: "Está preparado para estar a la altura de tus fiestas. No te preocupes por su tamaño, llevalo a todos lados usando sus ruedas.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/',
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
        value: 'Interna Recargable 12V / 4.5Ah'
      },
      { // Duracion Batería
        id: 8,
        value: '5 horas (según volumen)'
      },
      { // Caja de Madera
        id: 18,
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
        value: "5 horas (según volumen)",
        
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
        id: 6,
        value: "Si",
        
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
    includes: 'Micrófono Inalámbrico, Cable de Alimentación (N° de Certificación: Q-AR-01590-T-0), Manual de Instrucciones y Garantía',
    downloads: [
      {
        name: 'Manual',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T2008-PB_MANUAL.pdf'
      },
      {
        name: 'Ficha',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T2008-PB_FICHA.pdf'
      }
    ],
    variants: []
  },
  {// AW-T2010
    name: 'Torre de Sonido Bluetooth 13500W',
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
      },
      {
        id: 5,
        customDesc: "Ya que es portátil y pudiendo usar hasta 2 micrófonos y una guitarra, permite realizar presentaciones en vivo en bares, celebraciones, espacios públicos, vía streaming... ¡donde quieras!"
      }
    ],
    shortDesc: 'Potencia y Calidad',
    longDesc: "Con dos parlantes Woofer de 10 pulgadas cada uno y 2 tweeters, vas a poder tirar tu casa por la ventana.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/',
    videos: [
      {
        id: 1,
        title: "Título del video",
        link: "https://www.youtube.com/embed/vN6Qwro1FPU",
      },
      {
        id: 2,
        title: "Título del video 2",
        link: "https://www.youtube.com/embed/gXGeD2sd12Q"
      },
    ],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: '13500W PMPO'
      },
      { // TWS
        id: 11,
      },
      { // Bluetooth
        id: 12,
      },
      { // Ruedas
        id: 19,
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
        value: '5 horas (según volumen)'
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
        value: "13500W PMPO",
        
      },
      {
        id: 10,
        value: "Interna Recargable 12V / 7.5Ah",
        
      },
      {
        id: 11,
        value: "6 horas (según volumen)",
        
      },
      {
        id: 20,
        value: "No",
        
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
        id: 6,
        value: "Si",
        
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
        value: "7798111353995",
        
      },
    ],
    includes: 'Micrófono Inalámbrico, Control Remoto, Cable de Alimentación (N° de Certificación: Q-AR-01590-T-0), Manual de Instrucciones y Garantía',
    downloads: [
      {
        name: 'Manual',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T2008-2010_MANUAL.pdf'
      },
      {
        name: 'Ficha',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T2010_FICHA.pdf'
      }
    ],
    variants: [
      {
        sku: 'AW-T2010-PB',
        link: '/productos/AW-T2010-PB',
      }
    ]
  },
  {// AW-T2010-PB
    name: 'Torre de Sonido Bluetooth 14500W',
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
    ].map(e => fileserver + e),
    top: true,
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
      },
      {
        id: 5,
        customDesc: "Ya que es portátil y pudiendo usar hasta 2 micrófonos y una guitarra, permite realizar presentaciones en vivo en bares, celebraciones, espacios públicos, vía streaming... ¡donde quieras!"
      }
    ],
    shortDesc: 'Potencia y Calidad',
    longDesc: "Con dos parlantes Woofer de 10 pulgadas cada uno y 2 tweeters, vas a poder tirar tu casa por la ventana.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/',
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
        value: '5 horas (según volumen)'
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
        value: "6 horas (según volumen)",
        
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
        id: 6,
        value: "Si",
        
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
    includes: 'Micrófono Inalámbrico, Cable de Alimentación (N° de Certificación: Q-AR-01590-T-0), Manual de Instrucciones y Garantía',
    downloads: [
      {
        name: 'Manual',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-2010-PB_MANUAL.pdf'
      },
      {
        name: 'Ficha',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T2010-PB_FICHA.pdf'
      }
    ],
    variants: []
  },
  {// AW-T2012
    name: 'Torre de Sonido Bluetooth 16000W',
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
    ].map(e => fileserver + e),
    top: true,
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
      },
      {
        id: 5,
        customDesc: "Ya que es portátil y pudiendo usar hasta 2 micrófonos y una guitarra, permite realizar presentaciones en vivo en bares, celebraciones, espacios públicos, vía streaming... ¡donde quieras!"
      }
    ],
    shortDesc: 'Sonido Colosal',
    longDesc: "Caja con cuerpo de madera, 1,49 centímetros de altura. Una gran torre en todo sentido de la palabra.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/',
    videos: [
      {
        id: 1,
        title: "Título del video",
        link: "https://www.youtube.com/embed/vN6Qwro1FPU",
      },
      {
        id: 2,
        title: "Título del video 2",
        link: "https://www.youtube.com/embed/gXGeD2sd12Q"
      },
    ],
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
        value: '5 horas (según volumen)'
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
        value: "6 horas (según volumen)",
        
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
        id: 6,
        value: "Si",
        
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
    includes: 'Micrófono Inalámbrico, Cable Auxiliar, Cable de Alimentación (N° de Certificación: Q-AR-01590-T-2), Manual de Instrucciones y Garantía',
    downloads: [
      {
        name: 'Manual',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T2012_MANUAL.pdf'
      },
      {
        name: 'Ficha',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T2012_FICHA.pdf'
      }
    ],
    variants: []
  },

  /////////////// LINEA PARTY ////////////////

  {// AW-P240D
    name: 'Parlante Portátil Bluetooth 2500W',
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
    ].map(e => fileserver + e),
    top: false,
    banners: [
      {
        id: 1,
        // TO OVERWRITE MUST SET: customTitle, customDesc, customImg
      },
      {
        id: 2,
        customImg: fileserver + '/banners/tws240.webp'
      },
      {
        id: 6,
        customImg: fileserver + '/banners/portatil240.webp'
      }
    ],
    shortDesc: 'MUSICALIZÁ TU DÍA',
    longDesc: "Debido a su gran portabilidad y liviano peso, este parlante es un compañero de viajes, de rutas, y de estudio ideal. Transformá los momentos cotidianos en una ocasión especial",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/',
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
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `1 de 8"`,
        
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
    includes: 'Micrófono con cable, Control remoto, Cable Auxiliar, Cable USB, Manual de Instrucciones y Garantía',
    downloads: [
      {
        name: 'Manual',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-P240D_MANUAL.pdf'
      },
      {
        name: 'Ficha',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-P240D_FICHA.pdf'
      }
    ],
    variants: [
      {
        sku: 'AW-P240D-SA',
        link: '/productos/AW-P240D-SA',
      },
      {
        sku: 'AW-P240D-SN',
        link: '/productos/AW-P240D-SN',
      }
    ]
  },
  {// AW-P240D-SA
    name: 'Parlante Portátil Bluetooth 2500W',
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
    ].map(e => fileserver + e),
    top: false,
    banners: [
      {
        id: 2,
        customImg: fileserver + '/banners/tws240.webp'
        // TO OVERWRITE MUST SET: customTitle, customDesc, customImg
      },
      {
        id: 6,
        customImg: fileserver + '/banners/portatil240.webp'
      }
    ],
    shortDesc: 'MUSICALIZÁ TU DÍA',
    longDesc: "Debido a su gran portabilidad y liviano peso, este parlante es un compañero de viajes, de rutas, y de estudio ideal. Transformá los momentos cotidianos en una ocasión especial",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/',
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
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `1 de 8"`,
        
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
    includes: 'Cable Auxiliar, Cable USB, Manual de Instrucciones y Garantía',
    downloads: [
      {
        name: 'Manual',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-P240D-SA_MANUAL.pdf'
      },
      {
        name: 'Ficha',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-P240D-SA_FICHA.pdf'
      }
    ],
    variants: [
      {
        sku: 'AW-P240D-SN',
        link: '/productos/AW-P240D-SN',
      }
    ]
  },
  {// AW-P240D-SN
    name: 'Parlante Portátil Bluetooth 2500W',
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
    ].map(e => fileserver + e),
    top: false,
    banners: [
      {
        id: 2,
        customImg: fileserver + '/banners/tws240.webp'
      },
      {
        id: 6,
        customImg: fileserver + '/banners/portatil240.webp'
      }
    ],
    shortDesc: 'MUSICALIZÁ TU DÍA',
    longDesc: "Debido a su gran portabilidad y liviano peso, este parlante es un compañero de viajes, de rutas, y de estudio ideal. Transformá los momentos cotidianos en una ocasión especial",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/',
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
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `1 de 8"`,
        
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
    includes: 'Cable Auxiliar, Cable USB, Manual de Instrucciones y Garantía',
    downloads: [
      {
        name: 'Manual',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-P240D-SN_MANUAL.pdf'
      },
      {
        name: 'Ficha',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-P240D-SN_FICHA.pdf'
      }
    ],
    variants: []
  },
  {// AW-P450D
    name: 'Parlante Portátil Bluetooth 4500W',
    sku: 'AW-P450D',
    link: '/productos/AW-P450D',
    line: 'party',
    categories: [110], 
    imgs: [
      '/products/AW-P450D/img/1.webp',
      '/products/AW-P450D/img/2.webp',
      '/products/AW-P450D/img/3.webp',
      '/products/AW-P450D/img/4.webp',
      '/products/AW-P450D/img/5.webp',
    ].map(e => fileserver + e),
    top: false,
    banners: [
      {
        id: 1,
        // TO OVERWRITE MUST SET: customTitle, customDesc, customImg
      },
      {
        id: 2,
        customImg: fileserver + '/banners/tws450.webp'
      },
      {
        id: 6,
        customImg: fileserver + '/banners/bar450.webp'
      }
    ],
    shortDesc: 'TU COMPAÑÍA INDISPENSABLE',
    longDesc: "A donde vayas, lo llevas para que tu música preferida suene en alta fidelidad.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/',
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
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `2 de 6,5"`,
        
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
        value: "2 horas (máximo volumen)",
        
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
      { // Display
        id: 6,
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
    includes: 'Micrófono con cable, Control remoto, Cable Auxiliar, Cable USB, Manual de Instrucciones y Garantía',
    downloads: [
      {
        name: 'Manual',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-P450D_MANUAL.pdf'
      },
      {
        name: 'Ficha',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-P450D_FICHA.pdf'
      }
    ],
    variants: [
      {
        sku: 'AW-P450D-SA',
        link: '/productos/AW-P450D-SA',
      },
      {
        sku: 'AW-P450D-SN',
        link: '/productos/AW-P450D-SN',
      }
    ]
  },
  {// AW-P450D-SA
    name: 'Parlante Portátil Bluetooth 4500W',
    sku: 'AW-P450D-SA',
    link: '/productos/AW-P450D-SA',
    line: 'party',
    categories: [110], 
    imgs: [
      '/products/AW-P450D/img/1.webp',
      '/products/AW-P450D/img/2.webp',
      '/products/AW-P450D/img/3.webp',
      '/products/AW-P450D/img/4.webp',
      '/products/AW-P450D/img/5.webp',
    ].map(e => fileserver + e),
    top: false,
    banners: [
      { // TO OVERWRITE MUST SET: customTitle, customDesc, customImg
        id: 2,
        customImg: fileserver + '/banners/tws450.webp'
      },
      {
        id: 6,
        customImg: fileserver + '/banners/bar450.webp'
      }
    ],
    shortDesc: 'TU COMPAÑÍA INDISPENSABLE',
    longDesc: "A donde vayas, lo llevas para que tu música preferida suene en alta fidelidad.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/',
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
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `2 de 6,5"`,
        
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
        value: "2 horas (máximo volumen)",
        
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
      { // Display
        id: 6,
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
    includes: 'Cable Auxiliar, Cable USB, Manual de Instrucciones y Garantía',
    downloads: [
      {
        name: 'Manual',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-P450D-SA_MANUAL.pdf'
      },
      {
        name: 'Ficha',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-P450D-SA_FICHA.pdf'
      }
    ],
    variants: [
      {
        sku: 'AW-P450D-SN',
        link: '/productos/AW-P450D-SN',
      }
    ]
  },
  {// AW-P450D-SN
    name: 'Parlante Portátil Bluetooth 4500W',
    sku: 'AW-P450D-SN',
    link: '/productos/AW-P450D-SN',
    line: 'party',
    categories: [101], 
    imgs: [
      '/products/AW-P450D/img/1.webp',
      '/products/AW-P450D/img/2.webp',
      '/products/AW-P450D/img/3.webp',
      '/products/AW-P450D/img/4.webp',
      '/products/AW-P450D/img/5.webp',
    ].map(e => fileserver + e),
    top: false,
    banners: [
      { // TO OVERWRITE MUST SET: customTitle, customDesc, customImg
        id: 2,
        customImg: fileserver + '/banners/tws450.webp'
      },
      {
        id: 6,
        customImg: fileserver + '/banners/bar450.webp'
      }
    ],
    shortDesc: 'TU COMPAÑÍA INDISPENSABLE',
    longDesc: "A donde vayas, lo llevas para que tu música preferida suene en alta fidelidad.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/',
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
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `2 de 6,5"`,
        
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
        value: "2 horas (máximo volumen)",
        
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
    includes: 'Cable Auxiliar, Cable USB, Manual de Instrucciones y Garantía',
    downloads: [
      {
        name: 'Manual',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-P450D-SN_MANUAL.pdf'
      },
      {
        name: 'Ficha',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-P450D-SN_FICHA.pdf'
      }
    ],
    variants: []
  },
  {// AW-T451D
    name: 'Torre de Sonido Portátil Bluetooth 4500W',
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
      '/products/AW-T451D/img/6.webp',
      '/products/AW-T451D/img/7.webp',
    ].map(e => fileserver + e),
    top: true,
    banners: [
      {
        id: 1,
        // TO OVERWRITE MUST SET: customTitle, customDesc, customImg
      },
      {
        id: 2,
        customImg: fileserver + '/banners/tws600.webp'
      },
      {
        id: 6,
        customImg: fileserver + '/banners/portatil451.webp'
      }
    ],
    shortDesc: 'LA POTENCIA QUE ESTABAS ESPERANDO',
    longDesc: "Esta torre fue diseñada para lograr la mejor relación entre potencia y tamaño. Liviana, y de fácil uso, sus múltiples modos de conexión la convierten en una opción muy práctica cuando se trata de poner ritmo y alegría a tus fiestas.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/',
    videos: [
      {
        id: 1,
        title: "Título del video",
        link: "https://www.youtube.com/embed/lEUuZtKHCUI",
      },
      {
        id: 1,
        title: "Título del video",
        link: "https://www.youtube.com/embed/lEUuZtKHCUI",
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
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `2 de 6,5"`,
        
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
        value: "2 horas (máximo volumen)",
        
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
    includes: 'Micrófono con cable, Control remoto, Cable Auxiliar, Cable USB, Manual de Instrucciones y Garantía',
    downloads: [
      {
        name: 'Manual',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T451D_MANUAL.pdf'
      },
      {
        name: 'Ficha',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T451D_FICHA.pdf'
      }
    ],
    variants: [
      {
        sku: 'AW-T451D-SA',
        link: '/productos/AW-T451D-SA',
      },
      {
        sku: 'AW-T451D-SN',
        link: '/productos/AW-T451D-SN',
      }
    ]
  },
  {// AW-T451D-SA
    name: 'Torre de Sonido Portátil Bluetooth 4500W',
    sku: 'AW-T451D-SA',
    link: '/productos/AW-T451D-SA',
    line: 'party',
    categories: [110], 
    imgs: [
      '/products/AW-T451D/img/1.webp',
      '/products/AW-T451D/img/2.webp',
      '/products/AW-T451D/img/3.webp',
      '/products/AW-T451D/img/4.webp',
      '/products/AW-T451D/img/5.webp',
      '/products/AW-T451D/img/6.webp',
      '/products/AW-T451D/img/7.webp',
    ].map(e => fileserver + e),
    top: true,
    banners: [
      {
        id: 2,
        customImg: fileserver + '/banners/tws600.webp'
      },
      {
        id: 6,
        customImg: fileserver + '/banners/portatil451.webp'
      }
    ],
    shortDesc: 'LA POTENCIA QUE ESTABAS ESPERANDO',
    longDesc: "Esta torre fue diseñada para lograr la mejor relación entre potencia y tamaño. Liviana, y de fácil uso, sus múltiples modos de conexión la convierten en una opción muy práctica cuando se trata de poner ritmo y alegría a tus fiestas.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/',
    videos: [
      {
        id: 1,
        title: "Título del video",
        link: "https://www.youtube.com/embed/lEUuZtKHCUI",
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
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `2 de 6,5"`,
        
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
        value: "2 horas (máximo volumen)",
        
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
    includes: 'Cable Auxiliar, Cable USB, Manual de Instrucciones y Garantía',
    downloads: [
      {
        name: 'Manual',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T451D-SA_MANUAL.pdf'
      },
      {
        name: 'Ficha',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T451D-SA_FICHA.pdf'
      }
    ],
    variants: [
      {
        sku: 'AW-T451D-SN',
        link: '/productos/AW-T451D-SN',
      }
    ]
  },
  {// AW-T451D-SN
    name: 'Torre de Sonido Portátil Bluetooth 4500W',
    sku: 'AW-T451D-SN',
    link: '/productos/AW-T451D-SN',
    line: 'party',
    categories: [102], 
    imgs: [
      '/products/AW-T451D/img/1.webp',
      '/products/AW-T451D/img/2.webp',
      '/products/AW-T451D/img/3.webp',
      '/products/AW-T451D/img/4.webp',
      '/products/AW-T451D/img/5.webp',
      '/products/AW-T451D/img/6.webp',
      '/products/AW-T451D/img/7.webp',
    ].map(e => fileserver + e),
    top: true,
    banners: [
      {
        id: 2,
        customImg: fileserver + '/banners/tws600.webp'
      },
      {
        id: 6,
        customImg: fileserver + '/banners/portatil451.webp'
      }
    ],
    shortDesc: 'LA POTENCIA QUE ESTABAS ESPERANDO',
    longDesc: "Esta torre fue diseñada para lograr la mejor relación entre potencia y tamaño. Liviana, y de fácil uso, sus múltiples modos de conexión la convierten en una opción muy práctica cuando se trata de poner ritmo y alegría a tus fiestas.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/',
    videos: [
      {
        id: 1,
        title: "Título del video",
        link: "https://www.youtube.com/embed/lEUuZtKHCUI",
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
      }
    ],
    features: [
      { // Woofers
        id: 3,
        value: `2 de 6,5"`,
        
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
        value: "2 horas (máximo volumen)",
        
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
        value: "Empuñadura de Transporte",
        
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
    includes: 'Cable Auxiliar, Cable USB, Manual de Instrucciones y Garantía',
    downloads: [
      {
        name: 'Manual',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T451D-SN_MANUAL.pdf'
      },
      {
        name: 'Ficha',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T451D-SN_FICHA.pdf'
      }
    ],
    variants: []
  },
  {// AW-T600D
    name: 'Torre de Sonido Portátil Bluetooth 5000W',
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
    ].map(e => fileserver + e),
    top: true,
    banners: [
      {
        id: 1,
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
    shortDesc: 'EL ALIADO EN TUS FIESTAS',
    longDesc: "Una torre de sonido es sinónimo de potencia. Y este parlante, está preparado para aceptar el desafío. Tus momentos van a ser recordados por siempre.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/',
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
        value: "27,5 x 72,5 x 26,5 cm",
        
      },
      { // Medidas de la caja
        id: 17,
        value: "32 x 77 x 30 cm",
        
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
    includes: 'Micrófono con cable, Control remoto, Cable Auxiliar, Fuente de Alimentación (N° De Certificación: 00Q-AR-01223-T-1), Manual de Instrucciones y Garantía',
    downloads: [
      {
        name: 'Manual',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T600D_MANUAL.pdf'
      },
      {
        name: 'Ficha',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T600D_FICHA.pdf'
      }
    ],
    variants: [
      {
        sku: 'AW-T600D-SA',
        link: '/productos/AW-T600D-SA',
      },
      {
        sku: 'AW-T600D-SN',
        link: '/productos/AW-T600D-SN',
      }
    ]
  },
  {// AW-T600D-SA
    name: 'Torre de Sonido Portátil Bluetooth 5000W',
    sku: 'AW-T600D-SA',
    link: '/productos/AW-T600D-SA',
    line: 'party',
    categories: [110], 
    imgs: [
      '/products/AW-T600D/img/1.webp',
      '/products/AW-T600D/img/2.webp',
      '/products/AW-T600D/img/3.webp',
      '/products/AW-T600D/img/4.webp',
      '/products/AW-T600D/img/5.webp',
    ].map(e => fileserver + e),
    top: true,
    banners: [
      {
        id: 2,
        customImg: fileserver + '/banners/tws600.webp'
      },
      {
        id: 6,
        customImg: fileserver + '/banners/portatil600.webp'
      }
    ],
    shortDesc: 'EL ALIADO EN TUS FIESTAS',
    longDesc: "Una torre de sonido es sinónimo de potencia. Y este parlante, está preparado para aceptar el desafío. Tus momentos van a ser recordados por siempre.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/',
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
        value: "27,5 x 72,5 x 26,5 cm",
        
      },
      { // Medidas de la caja
        id: 17,
        value: "32 x 77 x 30 cm",
        
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
    includes: 'Cable Auxiliar, Fuente de Alimentación (N° De Certificación: 00Q-AR-01223-T-1), Manual de Instrucciones y Garantía',
    downloads: [
      {
        name: 'Manual',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T600D-SA_MANUAL.pdf'
      },
      {
        name: 'Ficha',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T600D-SA_FICHA.pdf'
      }
    ],
    variants: [
      {
        sku: 'AW-T600D-SN',
        link: '/productos/AW-T600D-SN',
      }
    ]
  },
  {// AW-T600D-SN
    name: 'Torre de Sonido Portátil Bluetooth 5000W',
    sku: 'AW-T600D-SN',
    link: '/productos/AW-T600D-SN',
    line: 'party',
    categories: [102], 
    imgs: [
      '/products/AW-T600D/img/1.webp',
      '/products/AW-T600D/img/2.webp',
      '/products/AW-T600D/img/3.webp',
      '/products/AW-T600D/img/4.webp',
      '/products/AW-T600D/img/5.webp',
    ].map(e => fileserver + e),
    top: true,
    banners: [
      {
        id: 2,
        customImg: fileserver + '/banners/tws600.webp'
      },
      {
        id: 6,
        customImg: fileserver + '/banners/portatil600.webp'
      }
    ],
    shortDesc: 'EL ALIADO EN TUS FIESTAS',
    longDesc: "Una torre de sonido es sinónimo de potencia. Y este parlante, está preparado para aceptar el desafío. Tus momentos van a ser recordados por siempre.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/',
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
        value: "Empuñadura de Transporte, Ruedas y Mobile Holder",
        
      },
      { // Medidas del producto
        id: 16,
        value: "27,5 x 72,5 x 26,5 cm",
        
      },
      { // Medidas de la caja
        id: 17,
        value: "32 x 77 x 30 cm",
        
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
    includes: 'Cable Auxiliar, Fuente de Alimentación (N° De Certificación: 00Q-AR-01223-T-1), Manual de Instrucciones y Garantía',
    downloads: [
      {
        name: 'Manual',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T600D-SN_MANUAL.pdf'
      },
      {
        name: 'Ficha',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T600D-SN_FICHA.pdf'
      }
    ],
    variants: []
  },
  {// AW-P1200D
    name: 'Parlante Portátil Bluetooth 6000W',
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
    banners: [
      {
        id: 1,
        // TO OVERWRITE MUST SET: customTitle, customDesc, customImg
      },
      {
        id: 2,
        customImg: fileserver + '/banners/tws1200.webp'
      },
      {
        id: 6,
        customImg: fileserver + '/banners/portatil1200.webp'
      }
    ],
    shortDesc: 'EL ALMA DE LA FIESTA',
    longDesc: "Un sonido potente, y bajos profundos, hacen que tu fiesta sea una experiencia donde tus invitados puedan sumergirse y hacer de ella un recuerdo inolvidable.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/',
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
        value: "7798111353537",
        
      },
    ],
    includes: 'Micrófono con cable, Control remoto, Cable Auxiliar, Fuente de Alimentación (N° De Certificación: 00Q-AR-01223-T-1), Manual de Instrucciones y Garantía',
    downloads: [
      {
        name: 'Manual',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-P1200D_MANUAL.pdf'
      },
      {
        name: 'Ficha',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-P1200D_FICHA.pdf'
      }
    ],
    variants: [
      {
        sku: 'AW-P1200D-SA',
        link: '/productos/AW-P1200D-SA',
      },
      {
        sku: 'AW-P1200D-SN',
        link: '/productos/AW-P1200D-SN',
      }
    ]
  },
  {// AW-P1200D-SA
    name: 'Parlante Portátil Bluetooth 6000W',
    sku: 'AW-P1200D-SA',
    link: '/productos/AW-P1200D-SA',
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
    shortDesc: 'EL ALMA DE LA FIESTA',
    longDesc: "Un sonido potente, y bajos profundos, hacen que tu fiesta sea una experiencia donde tus invitados puedan sumergirse y hacer de ella un recuerdo inolvidable.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/',
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
        value: "7798111354091",
        
      },
    ],
    includes: 'Cable Auxiliar, Fuente de Alimentación (N° De Certificación: 00Q-AR-01223-T-1), Manual de Instrucciones y Garantía',
    downloads: [
      {
        name: 'Manual',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-P1200D-SA_MANUAL.pdf'
      },
      {
        name: 'Ficha',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-P1200D-SA_FICHA.pdf'
      }
    ],
    variants: [
      {
        sku: 'AW-P1200D-SN',
        link: '/productos/AW-P1200D-SN',
      }
    ]
  },
  {// AW-P1200D-SN
    name: 'Parlante Portátil Bluetooth 6000W',
    sku: 'AW-P1200D-SN',
    link: '/productos/AW-P1200D-SN',
    line: 'party',
    categories: [101], 
    imgs: [
      '/products/AW-P1200D/img/1.webp',
      '/products/AW-P1200D/img/2.webp',
      '/products/AW-P1200D/img/3.webp',
      '/products/AW-P1200D/img/4.webp',
      '/products/AW-P1200D/img/5.webp',
      '/products/AW-P1200D/img/6.webp',
    ].map(e => fileserver + e),
    top: false,
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
    shortDesc: 'EL ALMA DE LA FIESTA',
    longDesc: "Un sonido potente, y bajos profundos, hacen que tu fiesta sea una experiencia donde tus invitados puedan sumergirse y hacer de ella un recuerdo inolvidable.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/',
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
        value: "7798111354343",
        
      },
    ],
    includes: 'Cable Auxiliar, Fuente de Alimentación (N° De Certificación: 00Q-AR-01223-T-1), Manual de Instrucciones y Garantía',
    downloads: [
      {
        name: 'Manual',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-P1200D-SN_MANUAL.pdf'
      },
      {
        name: 'Ficha',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-P1200D-SN_FICHA.pdf'
      }
    ],
    variants: []
  },
  {// AW-P1510D
    name: 'Parlante Portátil Bluetooth 7000W',
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
    ].map(e => fileserver + e),
    top: false,
    banners: [
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
        customImg: fileserver + '/banners/portatil1200.webp'
      }
    ],
    shortDesc: 'LA DISTANCIA NO ES PROBLEMA',
    longDesc: "Este producto cuenta con un micrófono inalámbrico muy útil en distintos escenarios, ya sea para dar conferencias, cantar con su modo Karaoke, para musicalizar tu negocio o animar tu fiesta.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/',
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
    includes: 'Micrófono inalámbrico, Control remoto, Cable Auxiliar, Fuente de Alimentación (N° De Certificación: 00Q-AR-01223-T-1), Manual de Instrucciones y Garantía',
    downloads: [
      {
        name: 'Manual',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-P1510D_MANUAL.pdf'
      },
      {
        name: 'Ficha',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-P1510D_FICHA.pdf'
      }
    ],
    variants: [
      {
        sku: 'AW-P1510D-SN',
        link: '/productos/AW-P1510D-SN',
      }
    ]
  },
  {// AW-P1510D-SN
    name: 'Parlante Portátil Bluetooth 7000W',
    sku: 'AW-P1510D-SN',
    link: '/productos/AW-P1510D-SN',
    line: 'party',
    categories: [101], 
    imgs: [
      '/products/AW-P1510D/img/1.webp',
      '/products/AW-P1510D/img/2.webp',
      '/products/AW-P1510D/img/3.webp',
      '/products/AW-P1510D/img/4.webp',
      '/products/AW-P1510D/img/5.webp',
      '/products/AW-P1510D/img/6.webp',
    ].map(e => fileserver + e),
    top: false,
    banners: [
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
        customImg: fileserver + '/banners/portatil1200.webp'
      }
    ],
    shortDesc: 'LA DISTANCIA NO ES PROBLEMA',
    longDesc: "Este producto cuenta con un micrófono inalámbrico muy útil en distintos escenarios, ya sea para dar conferencias, cantar con su modo Karaoke, para musicalizar tu negocio o animar tu fiesta.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/',
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
        value: "7798111354336",
        
      },
    ],
    includes: 'Micrófono inalámbrico, Cable Auxiliar, Fuente de Alimentación (N° De Certificación: 00Q-AR-01223-T-1), Manual de Instrucciones y Garantía',
    downloads: [
      {
        name: 'Manual',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-P1510D-SN_MANUAL.pdf'
      },
      {
        name: 'Ficha',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-P1510D-SN_FICHA.pdf'
      }
    ],
    variants: []
  },
  {// AW-P1500PS
    name: 'Parlante Portátil Bluetooth 9000W',
    sku: 'AW-P1500PS',
    link: '/productos/AW-P1500PS',
    line: 'party',
    categories: [101], 
    imgs: [
      '/products/AW-P1500PS/img/1.webp',
      '/products/AW-P1500PS/img/2.webp',
      '/products/AW-P1500PS/img/3.webp',
      '/products/AW-P1500PS/img/4.webp',
      '/products/AW-P1500PS/img/5.webp',
      '/products/AW-P1500PS/img/6.webp',
    ].map(e => fileserver + e),
    top: false,
    banners: [
      {
        id: 1,
        customTitle: "Micrófono Inalámbrico Incluido"
        // TO OVERWRITE MUST SET: customTitle, customDesc, customImg
      },
      {
        id: 2,
        customImg: fileserver + '/banners/tws1500.webp'
      },
      {
        id: 6,
        customImg: fileserver + '/banners/portatil1500.webp'
      },
      {
        id: 7,
      }
    ],
    shortDesc: '¡LISTO PARA TOCAR!',
    longDesc: "Está listo para conectar una guitarra, un micrófono y tocar o cantar en vivo. Hace llegar a todos la música que sale de tu corazón. También Incluye la función Karaoke con la cual podés pasar horas divirtiéndote sin parar con tu familia y amigos.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/',
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
        value: '1 de 15"'
      },
      { // Entrada Mic y Guit 
        id: 21,
      },
      { // Entrada Auxiliar
        id: 17,
      },
      { // Mic Inalambrico
        id: 14,
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
      { // Remoto
        id: 24,
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
        value: "TWS, Radio FM, REC",
        
      },
      { // Reguladores
        id: 5,
        value: "Graves, Agudos, Vol. y Eco de Mic, Vol. de Guitarra",
        
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
    includes: 'Trípode de 1.2m, Micrófono inalámbrico UHF, Control remoto, Cable Auxiliar, Fuente de Alimentación (N° De Certificación: 00Q-AR-01388-T-1), Manual de Instrucciones y Garantía',
    downloads: [
      {
        name: 'Manual',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-P1500PS_MANUAL.pdf'
      },
      {
        name: 'Ficha',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-P1500PS_FICHA.pdf'
      }
    ],
    variants: []
  },
  {// AW-T2040
    name: 'Torre de Sonido Bluetooth 6000W',
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
      '/products/AW-T2040/img/9.webp',
    ].map(e => fileserver + e),
    top: true,
    banners: [ // TO OVERWRITE PROPS MUST SET: customTitle, customDesc, customImg
      {
        id: 8,
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
    shortDesc: 'SHOW LUMINOSO',
    longDesc: "Cautivá a tus invitados con variados y coloridos efectos de Luz durante toda la noche.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/',
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
      { // Entrada Auxiliar
        id: 17,
      },
      { // Efectos de Luz
        id: 6,
      },
      { // Batería Recargable
        id: 7,
        value: 'Litio 3,7v / 3600mAh'
      },
      { // Duracion Batería
        id: 8,
        value: '8 horas (según volumen)'
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
        value: "Hasta 8 horas (según volumen)",
        
      },
      { // Luces
        id: 12,
        value: "RGB en woofer (ON/OFF)",
        
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
        value: "Auxiliar, Micrófono x2",
        
      },
      { // Display
        id: 6,
        value: "Si",
        
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
    includes: 'Cable Auxiliar, Cable de Alimentación USB, Manual de Instrucciones y Garantía',
    downloads: [
      {
        name: 'Manual',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T2040_MANUAL.pdf'
      },
      {
        name: 'Ficha',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T2040_FICHA.pdf'
      }
    ],
    variants: []
  },
  {// AW-T2042
    name: 'Torre de Sonido Bluetooth 6000W',
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
      '/products/AW-T2042/img/9.webp',
    ].map(e => fileserver + e),
    top: true,
    banners: [ // TO OVERWRITE PROPS MUST SET: customTitle, customDesc, customImg
      {
        id: 8,
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
    shortDesc: 'EN TODO MOMENTO',
    longDesc: "Una torre lista para acompañarte durante largas horas en todo momento y lugar. Te permite llevar tu música junto a un variado show luminoso.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/',
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
      { // Entrada Auxiliar
        id: 17,
      },
      { // Efectos de Luz
        id: 6,
      },
      { // Batería Recargable
        id: 7,
        value: 'Litio 3,7v / 3600mAh'
      },
      { // Duracion Batería
        id: 8,
        value: '8 horas (según volumen)'
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
        value: "Hasta 8 horas (según volumen)",
        
      },
      { // Luces
        id: 12,
        value: "RGB en woofer (ON/OFF)",
        
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
        value: "Auxiliar, Micrófono x2",
        
      },
      { // Display
        id: 6,
        value: "Si",
        
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
    includes: 'Cable Auxiliar, Cable de Alimentación USB, Manual de Instrucciones y Garantía',
    downloads: [
      {
        name: 'Manual',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T2042_MANUAL.pdf'
      },
      {
        name: 'Ficha',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T2042_FICHA.pdf'
      }
    ],
    variants: []
  },
  {// AW-T2044
    name: 'Torre de Sonido Bluetooth 6000W',
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
      '/products/AW-T2044/img/9.webp',
    ].map(e => fileserver + e),
    top: true,
    banners: [ // TO OVERWRITE PROPS MUST SET: customTitle, customDesc, customImg
      {
        id: 8,
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
    shortDesc: 'COLORÉA TUS FIESTAS',
    longDesc: "Preparada para llenar de colores toda la noche. Su Empuñadura de Fácil Transporte y su liviano peso te permiten llevar tu música junto a un variado show luminoso.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/',
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
      { // Entrada Auxiliar
        id: 17,
      },
      { // Efectos de Luz
        id: 6,
      },
      { // Batería Recargable
        id: 7,
        value: 'Litio 3,7v / 3600mAh'
      },
      { // Duracion Batería
        id: 8,
        value: '8 horas (según volumen)'
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
        value: "Hasta 8 horas (según volumen)",
        
      },
      { // Luces
        id: 12,
        value: "RGB en woofer (ON/OFF)",
        
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
        value: "Auxiliar, Micrófono x2",
        
      },
      { // Display
        id: 6,
        value: "Si",
        
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
    includes: 'Cable Auxiliar, Cable de Alimentación USB, Manual de Instrucciones y Garantía',
    downloads: [
      {
        name: 'Manual',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T2044_MANUAL.pdf'
      },
      {
        name: 'Ficha',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T2044_FICHA.pdf'
      }
    ],
    variants: []
  },
  
  /////////////// LINEA INFINIT ////////////////

  {// AW-T2021
    name: 'Torre de Sonido Bluetooth 9500W',
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
    ].map(e => fileserver + e),
    top: true,
    banners: [ // TO OVERWRITE PROPS MUST SET: customTitle, customDesc, customImg
      {
        id: 1,
        customTitle: 'Micrófono inalámbrico incluido',
      },
      {id: 3},
      {id: 10},
      {id: 4},
    ],
    shortDesc: 'ECUALIZADOR PRECISO',
    longDesc: "Efectos de luces en forma de anillos Led agregarán un toque fantástico a donde los lleves. Podrás ajustar el sonido a gusto como un verdadero Dj.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/',
    videos: [],
    featuredFeatures: [
      { // Potencia
        id: 2,
        value: '9500W PMPO'
      },
      { // Woofer
        id: 3,
        value: '2 de 8"'
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
      { // Entrada Mic 
        id: 16,
      },
      { // Entrada Auxiliar
        id: 17,
      },
      { // Entrada Guitarra
        id: 15,
      },
      { // Batería Recargable
        id: 7,
        value: 'Interna Recargable 7.4V / 3600mAh'
      },
      { // Duracion Batería
        id: 8,
        value: '5 horas (según volumen)'
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
        value: "Hasta 5 horas (según volumen)",
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
    includes: 'Micrófono Inalámbrico | Cable de Alimentación (Nª de Certificación: Q-AR-01590-T-1) | Manual de Instrucciones y Garantía',
    downloads: [
      {
        name: 'Manual',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T2021_MANUAL.pdf'
      },
      {
        name: 'Ficha',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T2021_FICHA.pdf'
      }
    ],
    variants: []
  },
  {// AW-T2022
    name: 'Torre de Sonido Bluetooth 8500W',
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
      '/products/AW-T2022/img/9.webp',
    ].map(e => fileserver + e),
    top: true,
    banners: [ // TO OVERWRITE PROPS MUST SET: customTitle, customDesc, customImg
      {
        id: 11,
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
    shortDesc: 'TRANSPORTÁ TU MÚSICA',
    longDesc: "Con la Correa de fácil transporte podés moverte con tu música de la terraza, a la playa o en donde mas gustes. Práctica, liviana y portatil, con un sonido potente.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/',
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
      { // Entrada Auxiliar
        id: 17,
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
        value: '5 horas (según volumen)'
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
        value: "8500W PMPO",
      },
      { // Batería
        id: 10,
        value: "Interna Recargable 7.4V / 3600mAh",
      },
      { // Duración de batería
        id: 11,
        value: "Hasta 5 horas (según volumen)",
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
        value: "Agudos y Graves",
      },
      { // Entradas
        id: 8,
        value: "Auxiliar, Micrófono y Guitarra",
      },
      { // Display
        id: 6,
        value: "Si",
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
    includes: 'Correa para Transporte | Fuente de Alimentación (Nª de Certificación: Q-AR-01590-T-1) | Manual de Instrucciones y Garantía.',
    downloads: [
      {
        name: 'Manual',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T2022_MANUAL.pdf'
      },
      {
        name: 'Ficha',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T2022_FICHA.pdf'
      }
    ],
    variants: []
  },
  {// AW-T2018R
    name: 'Torre de Sonido Bluetooth 8000W',
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
    banners: [ // TO OVERWRITE PROPS MUST SET: customTitle, customDesc, customImg
      {
        id: 8,
      },
      {
        id: 3,
      },
      {
        id: 10,
        customImg: fileserver + '/banners/eq2018.webp',
        customDesc: '¡Personalizá tus temas como mas te guste! El botón de Ecualización te permite controlar a tu antojo los Agudos y Graves para darle un sonido auténtico a tus fiestas.'
      },
    ],
    shortDesc: 'LLEVALO CON VOS',
    longDesc: "Una torre práctica y portátil, con un sonido potente. Con la Empuñadura de Fácil Transporte podés moverte con tu música por donde más gustes.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/',
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
      { // Entrada Auxiliar
        id: 17,
      },
      { // Batería Recargable
        id: 7,
        value: 'Interna Recargable 7.4V / 3600mAh'
      },
      { // Duracion Batería
        id: 8,
        value: '6 horas (según volumen)'
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
        value: "Hasta 6 horas (según volumen)",
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
    includes: 'Cable Auxiliar | Cable de Alimentación (Nª de Certificación: Q-AR-01590-T-2) | Manual de Instrucciones y Garantía.',
    downloads: [
      {
        name: 'Manual',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T2018R_MANUAL.pdf'
      },
      {
        name: 'Ficha',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T2018R_FICHA.pdf'
      }
    ],
    variants: []
  },
  {// AW-T2050R
    name: 'Torre de Sonido Bluetooth 8000W',
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
    ].map(e => fileserver + e),
    top: true,
    banners: [ // TO OVERWRITE PROPS MUST SET: customTitle, customDesc, customImg
      {
        id: 8,
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
    shortDesc: 'FIESTA DONDE VAYAS',
    longDesc: "Una torre liviana, práctica y portatil, con un sonido potente. Sus deslumbrantes efectos de luces en forma de anillos le darán ese toque mágico a todos tus momentos.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/',
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
      { // Entrada Auxiliar
        id: 17,
      },
      { // Batería Recargable
        id: 7,
        value: 'Interna Recargable 7.4V / 3600mAh'
      },
      { // Duracion Batería
        id: 8,
        value: '8 horas (según volumen)'
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
        value: "Hasta 6 horas (según volumen)",
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
    includes: 'Cable Auxiliar | Cargador (Nª de Certificación: RA 4183955 E) | Manual de Instrucciones y Garantía.',
    downloads: [
      {
        name: 'Manual',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T2050R_MANUAL.pdf'
      },
      {
        name: 'Ficha',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T2050R_FICHA.pdf'
      }
    ],
    variants: []
  },
  {// AW-T506R
    name: 'Torre de Sonido Bluetooth 6500W',
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
      '/products/AW-T506R/img/9.webp',
      '/products/AW-T506R/img/10.webp',
    ].map(e => fileserver + e),
    top: true,
    banners: [ // TO OVERWRITE PROPS MUST SET: customTitle, customDesc, customImg
      {
        id: 11,
        customImg: fileserver + '/banners/horizontal506.webp'
      },
      {
        id: 8,
      },
      {
        id: 12,
      },
    ],
    shortDesc: 'MÁS VERSATILIDAD',
    longDesc: "Práctico. Ideal para escuchar música en cualquier formato. Potente y altamente portable. Se puede utilizar tanto en vertical como en horizontal.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/',
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
      },
      { // Reg Eco y Vol Mic
        id: 28,
      },
      { // Doble Entrada Mic 
        id: 27,
      },
      { // Entrada Auxiliar
        id: 17,
      },
      { // Uso Horizontal
        id: 32,
      },
      { // Duracion Batería
        id: 8,
        value: '8 horas (según volumen)'
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
        value: "En Panel Superior y alrededor del Woofer ON / OFF",
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
    ],
    includes: 'Micrófono con Cable / Control Remoto / Cable Auxiliar / Fuente de Alimentación (N° De Certificación: 00Q-AR-01223-T-1) / Manual de Instrucciones y Garantía',
    downloads: [
      {
        name: 'Manual',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T506R_MANUAL.pdf'
      },
      {
        name: 'Ficha',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T506R_FICHA.pdf'
      }
    ],
    variants: []
  },
  {// AW-T506R-PB
    name: 'Torre de Sonido Bluetooth 6500W',
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
    ].map(e => fileserver + e),
    top: true,
    banners: [ // TO OVERWRITE PROPS MUST SET: customTitle, customDesc, customImg
      {
        id: 11,
        customImg: fileserver + '/banners/horizontal506.webp'
      },
      {
        id: 8,
      },
      {
        id: 12,
      },
    ],
    shortDesc: 'MÁS VERSATILIDAD',
    longDesc: "Práctico. Ideal para escuchar música en cualquier formato. Potente y altamente portable. Se puede utilizar tanto en vertical como en horizontal.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/',
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
      },
      { // Reg Eco y Vol Mic
        id: 28,
      },
      { // Doble Entrada Mic 
        id: 27,
      },
      { // Entrada Auxiliar
        id: 17,
      },
      { // Uso Horizontal
        id: 32,
      },
      { // Duracion Batería
        id: 8,
        value: '8 horas (según volumen)'
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
        value: "Graves, Agudos, Eco y Volumen de Micrófono",
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
    ],
    includes: 'Cable Auxiliar / Fuente de Alimentación (N° De Certificación: 00Q-AR-01223-T-1) / Manual de Instrucciones y Garantía',
    downloads: [
      {
        name: 'Manual',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T506R-PB_MANUAL.pdf'
      },
      {
        name: 'Ficha',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T506R-PB_FICHA.pdf'
      }
    ],
    variants: []
  },
  {// AW-T265SF
    name: 'Torre de Sonido Bluetooth 6500W',
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
    ].map(e => fileserver + e),
    top: true,
    banners: [ // TO OVERWRITE PROPS MUST SET: customTitle, customDesc, customImg
      {
        id: 11,
        customImg: fileserver + '/banners/horizontal506.webp'
      },
      {
        id: 8,
      },
      {
        id: 12,
      },
    ],
    shortDesc: 'MÁS VERSATILIDAD',
    longDesc: "Práctico. Ideal para escuchar música en cualquier formato. Potente y altamente portable. Se puede utilizar tanto en vertical como en horizontal.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/',
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
      { // Entrada Auxiliar
        id: 17,
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
        value: "En Panel Superior y alrededor del Woofer ON / OFF",
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
        value: "Auxiliar, USB, Micro SD, Micrófono x2",
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
    includes: 'Micrófono con Cable / Control Remoto / Cable Auxiliar / Fuente de Alimentación (N° De Certificación: 00Q-AR-01223-T-1) / Manual de Instrucciones y Garantía',
    downloads: [
      {
        name: 'Manual',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T265SF_MANUAL.pdf'
      },
      {
        name: 'Ficha',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T265SF_FICHA.pdf'
      }
    ],
    variants: []
  },
  {// AW-T265SF-SA
    name: 'Torre de Sonido Bluetooth 6500W',
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
    ].map(e => fileserver + e),
    top: true,
    banners: [ // TO OVERWRITE PROPS MUST SET: customTitle, customDesc, customImg
      {
        id: 11,
        customImg: fileserver + '/banners/horizontal506.webp'
      },
      {
        id: 8,
      },
      {
        id: 12,
      },
      {
        id: 3,
      },
    ],
    shortDesc: 'MÁS VERSATILIDAD',
    longDesc: "Práctico. Ideal para escuchar música en cualquier formato. Potente y altamente portable. Se puede utilizar tanto en vertical como en horizontal.",
    buyLink: 'https://tienda.aiwaelectronics.com.ar/',
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
      { // Entrada Auxiliar
        id: 17,
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
        value: "En Panel Superior y alrededor del Woofer ON / OFF",
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
        value: "Auxiliar, USB, Micro SD, Micrófono x2",
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
    ],
    includes: 'Cable Auxiliar / Fuente de Alimentación (N° De Certificación: 00Q-AR-01223-T-1) / Manual de Instrucciones y Garantía',
    downloads: [
      {
        name: 'Manual',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T265SF-SA_MANUAL.pdf'
      },
      {
        name: 'Ficha',
        icon: InsertDriveFile,
        link: fileserver + '/docs/AW-T265SF-SA_FICHA.pdf'
      }
    ],
    variants: []
  },
]

export const variants = []
