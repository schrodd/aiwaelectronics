const menus = [
  {
    name: 'Audio',
    id: 1,
    isPopup: true,
    content: [
      {
        name: 'Parlantes',
        link: '/categorias/parlantes'
      },
      {
        name: 'Torres de sonido',
        link: '/categorias/torres-de-sonido'
      },
      /* {
        name: 'Portable',
        link: '/categorias/portable'
      } */
    ]
  },
  {
    name: 'Headsets',
    id: 2,
    isPopup: true,
    content: [
      {
        name: 'In-ear',
        link: '/categorias/in-ear'
      },
      {
        name: 'On-ear',
        link: '/categorias/on-ear'
      }
    ]
  },
  {
    name: 'Informatica',
    id: 3,
    isPopup: true,
    content: [
      {
        name: 'Notebooks',
        link: '/categorias/notebooks'
      },
      {
        name: 'Tablets',
        link: '/categorias/tablets'
      }
    ]
  },
  /* {
    name: 'Televisores',
    id: 4,
    isPopup: false,
    link: '/categorias/tv'
  }, */
  {
    name: 'Gaming',
    id: 5,
    isPopup: false,
    link: 'https://www.constrictor.com.ar/',
    targetBlank: true
  },
  {
    name: 'Soporte',
    id: 6,
    isPopup: false,
    link: '/soporte'
  },
  {
    name: 'Contacto',
    id: 7,
    isPopup: false,
    link: '/contacto'
  },
]

export default menus