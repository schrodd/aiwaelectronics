import { InsertDriveFile } from '@mui/icons-material';
const fileserver = 'https://aiwaelectronics.com.ar/fileserver'

export const products = [
  { // AW-T2008
    name: 'Torre de Sonido Bluetooth 12000W',
    sku: 'AW-T2008',
    link: '/productos/AW-T2008',
    line: 'ring',
    categories: [101, 102], 
    imgs: [
      '/products/AW-T2008/img/1.webp',
      '/products/AW-T2008/img/2.webp',
      '/products/AW-T2008/img/3.webp',
      '/products/AW-T2008/img/4.webp',
      '/products/AW-T2008/img/5.webp',
    ].map(e => fileserver + e),
    banners: [
      {
        id: 1,
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
    features: [
      {
        id: 3,
        value: `2 de 8"`,
        feat: false,
      },
      {
        id: 4,
        value: `1 de 2"`,
        feat: false,
      },
      {
        id: 2,
        value: "12000W PMPO",
        feat: true,
      },
      {
        id: 10,
        value: "Interna Recargable 12V / 4.5Ah",
        feat: false,
      },
      {
        id: 11,
        value: "5 horas (según volumen)",
        feat: true,
      },
      {
        id: 12,
        value: "En panel frontal alrededor del Woofer y en panel superior",
        feat: true,
      },
      {
        id: 9,
        value: "Bluetooth v5.0",
        feat: false,
      },
      {
        id: 13,
        value: "TWS, Radio FM, REC",
        feat: true,
      },
      {
        id: 5,
        value: "Graves, Agudos y Eco de Micrófono",
        feat: true,
      },
      {
        id: 7,
        value: "Si, 3",
        feat: true,
      },
      {
        id: 8,
        value: "Guitarra,  Micrófono, USB, MicroSD y Auxiliar",
        feat: true,
      },
      {
        id: 1,
        value: "Si, inalámbrico",
        feat: true,
      },
      {
        id: 6,
        value: "Si",
        feat: false,
      },
      {
        id: 14,
        value: "Madera",
        feat: false,
      },
      {
        id: 15,
        value: "Ruedas / Empuñaduras de Transporte",
        feat: false,
      },
      {
        id: 16,
        value: "31 x 83 x 31 cm",
        feat: false,
      },
      {
        id: 17,
        value: "35,5 x 88 x 35,5 cm",
        feat: false,
      },
      {
        id: 18,
        value: "13,75 Kg",
        feat: false,
      },
      {
        id: 19,
        value: "7798111353957",
        feat: false,
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
        sku: 'AW-T2008',
        link: '/productos/AW-T2008',
      },
      {
        sku: 'AW-T2008-PB',
        link: '/productos/AW-T2008-PB',
      }
    ]
  },
  { // AW-T2008-PB
    name: 'Torre de Sonido Bluetooth 12000W',
    sku: 'AW-T2008-PB',
    link: '/productos/AW-T2008-PB',
    line: 'ring',
    categories: [101, 102], 
    imgs: [
      '/products/AW-T2008/img/1.webp',
      '/products/AW-T2008/img/2.webp',
      '/products/AW-T2008/img/3.webp',
      '/products/AW-T2008/img/4.webp',
      '/products/AW-T2008/img/5.webp',
    ].map(e => fileserver + e),
    banners: [
      {
        id: 1,
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
    features: [
      {
        id: 3,
        value: `2 de 8"`,
        feat: false,
      },
      {
        id: 4,
        value: `1 de 2"`,
        feat: false,
      },
      {
        id: 2,
        value: "13000W PMPO",
        feat: true,
      },
      {
        id: 10,
        value: "Interna Recargable 12V / 4.5Ah",
        feat: false,
      },
      {
        id: 11,
        value: "5 horas (según volumen)",
        feat: true,
      },
      {
        id: 12,
        value: "En panel frontal alrededor del Woofer y en panel superior",
        feat: true,
      },
      {
        id: 9,
        value: "Bluetooth v5.0",
        feat: false,
      },
      {
        id: 13,
        value: "TWS, Power Bank (cargá tus dispositivos)",
        feat: true,
      },
      {
        id: 5,
        value: "Graves, Agudos y Eco de Micrófono",
        feat: true,
      },
      {
        id: 7,
        value: "Si, 3",
        feat: true,
      },
      {
        id: 8,
        value: "Guitarra,  Micrófono y Auxiliar",
        feat: true,
      },
      {
        id: 1,
        value: "Si, inalámbrico",
        feat: true,
      },
      {
        id: 6,
        value: "Si",
        feat: false,
      },
      {
        id: 14,
        value: "Madera",
        feat: false,
      },
      {
        id: 15,
        value: "Ruedas / Empuñaduras de Transporte",
        feat: false,
      },
      {
        id: 16,
        value: "31 x 83 x 31 cm",
        feat: false,
      },
      {
        id: 17,
        value: "35,5 x 88 x 35,5 cm",
        feat: false,
      },
      {
        id: 18,
        value: "13,75 Kg",
        feat: false,
      },
      {
        id: 19,
        value: "7798111353957",
        feat: false,
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
    variants: [
      {
        sku: 'AW-T2008',
        link: '/productos/AW-T2008',
      },
      {
        sku: 'AW-T2008-PB',
        link: '/productos/AW-T2008-PB',
      }
    ]
  },
  {// AW-T2010
    name: 'Torre de Sonido Bluetooth 13500W',
    sku: 'AW-T2010',
    link: '/productos/AW-T2010',
    line: 'ring',
    categories: [101, 102], 
    imgs: [
      '/products/AW-T2010/img/1.webp',
      '/products/AW-T2010/img/2.webp',
      '/products/AW-T2010/img/3.webp',
      '/products/AW-T2010/img/4.webp',
      '/products/AW-T2010/img/5.webp',
    ].map(e => fileserver + e),
    banners: [
      {
        id: 1,
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
    features: [
      {
        id: 3,
        value: `2 de 10"`,
        feat: false,
      },
      {
        id: 4,
        value: `1 de 2"`,
        feat: false,
      },
      {
        id: 2,
        value: "13500W PMPO",
        feat: true,
      },
      {
        id: 10,
        value: "Interna Recargable 12V / 7.5Ah",
        feat: false,
      },
      {
        id: 11,
        value: "6 horas (según volumen)",
        feat: true,
      },
      {
        id: 12,
        value: "En panel frontal alrededor del Woofer y en panel superior",
        feat: true,
      },
      {
        id: 9,
        value: "Bluetooth v5.0",
        feat: false,
      },
      {
        id: 13,
        value: "TWS, Radio FM, REC",
        feat: true,
      },
      {
        id: 5,
        value: "Graves, Agudos y Eco de Micrófono",
        feat: true,
      },
      {
        id: 7,
        value: "Si, 3",
        feat: true,
      },
      {
        id: 8,
        value: "Guitarra,  Micrófono, USB, MicroSD y Auxiliar",
        feat: true,
      },
      {
        id: 1,
        value: "Si, inalámbrico",
        feat: true,
      },
      {
        id: 6,
        value: "Si",
        feat: false,
      },
      {
        id: 14,
        value: "Madera",
        feat: false,
      },
      {
        id: 15,
        value: "Ruedas / Empuñaduras de Transporte",
        feat: false,
      },
      {
        id: 16,
        value: "31 x 108 x 31 cm",
        feat: false,
      },
      {
        id: 17,
        value: "35,5 x 112 x 35,5 cm",
        feat: false,
      },
      {
        id: 18,
        value: "15,5 Kg",
        feat: false,
      },
      {
        id: 19,
        value: "7798111353995",
        feat: false,
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
        sku: 'AW-T2010',
        link: '/productos/AW-T2010',
      }
    ]
  },
  {// AW-T2012
    name: 'Torre de Sonido Bluetooth 16000W',
    sku: 'AW-T2012',
    link: '/productos/AW-T2012',
    line: 'ring',
    categories: [101, 102], 
    imgs: [
      '/products/AW-T2012/img/1.webp',
      '/products/AW-T2012/img/2.webp',
      '/products/AW-T2012/img/3.webp',
      '/products/AW-T2012/img/4.webp',
      '/products/AW-T2012/img/5.webp',
      '/products/AW-T2012/img/6.webp',
      '/products/AW-T2012/img/7.webp',
    ].map(e => fileserver + e),
    banners: [
      {
        id: 1,
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
      /* {
        id: 1,
        title: "Título del video",
        link: "https://www.youtube.com/embed/vN6Qwro1FPU",
      } */
    ],
    features: [
      {
        id: 3,
        value: `3 de 10"`,
        feat: false,
      },
      {
        id: 4,
        value: `1 de 2"`,
        feat: false,
      },
      {
        id: 2,
        value: "16000W PMPO",
        feat: true,
      },
      {
        id: 10,
        value: "Interna Recargable 12V / 7.5Ah",
        feat: false,
      },
      {
        id: 11,
        value: "6 horas (según volumen)",
        feat: true,
      },
      {
        id: 12,
        value: "En panel frontal alrededor del Woofer y en panel superior",
        feat: true,
      },
      {
        id: 9,
        value: "Bluetooth v5.0",
        feat: false,
      },
      {
        id: 13,
        value: "TWS, Power Bank",
        feat: true,
      },
      {
        id: 5,
        value: "Graves, Agudos y Eco de Micrófono",
        feat: true,
      },
      {
        id: 7,
        value: "Si",
        feat: true,
      },
      {
        id: 8,
        value: "Guitarra,  Micrófono y Auxiliar",
        feat: true,
      },
      {
        id: 1,
        value: "Si, inalámbrico",
        feat: true,
      },
      {
        id: 6,
        value: "Si",
        feat: false,
      },
      {
        id: 14,
        value: "Madera",
        feat: false,
      },
      {
        id: 15,
        value: "Ruedas / Empuñaduras de Transporte",
        feat: false,
      },
      {
        id: 16,
        value: "31 x 149 x 31 cm",
        feat: false,
      },
      {
        id: 17,
        value: "35,5 x 154 x 35,5 cm",
        feat: false,
      },
      {
        id: 18,
        value: "20,7 Kg",
        feat: false,
      },
      {
        id: 19,
        value: "7798111354442",
        feat: false,
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
    variants: [
      {
        sku: 'AW-T2012',
        link: '/productos/AW-T2012',
      }
    ]
  }
]

export const variants = []
