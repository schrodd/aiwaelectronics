/*
Nivel 1: Audio, Informática, Hogar
Nivel 2: Parlantes, Torres, Inear, Onear, Portable, etc
*/

export const lvOneCat = [
  {
    name: 'Audio',
    id: 1,
    route: '/categorias/audio'
  },
  {
    name: 'Informática',
    id: 2,
    route: '/categorias/informatica'
  },
  {
    name: 'Hogar',
    id: 3,
    route: '/categorias/hogar'
  }
]
 /* Los ID de las categorías de 2º nivel comienzan en 101 */
export const lvTwoCat = [
  {
    name: 'Parlantes',
    desc: 'Productos preparados para los más variados usos, pero todos con la misma calidad.',
    id: 101,
    parent: 1,
    route: '/categorias/parlantes',
    hidden: false,
    cover: '/images/categories/cover/parlantes.png',
    banner: '/images/categories/banner/parlantes.jpg'
  },
  {
    name: 'Torres de sonido',
    desc: 'description',
    id: 102,
    parent: 1,
    route: '/categorias/torres-de-sonido',
    hidden: false,
    cover: '/images/categories/cover/torres.png'
  },
  {
    name: 'Auriculares In-ear',
    desc: 'description',
    id: 103,
    parent: 1,
    route: '/categorias/in-ear',
    hidden: false,
    cover: '/images/categories/cover/inear.png'
  },
  {
    name: 'Auriculares On-ear',
    desc: 'description',
    id: 104,
    parent: 1,
    route: '/categorias/on-ear',
    hidden: false,
    cover: '/images/categories/cover/onear.png'
  },
  {
    name: 'Portable',
    desc: 'description',
    id: 105,
    parent: 1,
    route: '/categorias/portable',
    hidden: true,
    cover: '/images/categories/cover/portable.png'
  },
  {
    name: 'Tablets',
    desc: 'description',
    id: 106,
    parent: 2,
    route: '/categorias/tablets',
    hidden: false,
    cover: '/images/categories/cover/tablets.png'
  },
  {
    name: 'Notebooks',
    desc: 'description',
    id: 107,
    parent: 2,
    route: '/categorias/notebooks',
    hidden: false,
    cover: '/images/categories/cover/notebooks.png'
  },
  {
    name: 'TV',
    desc: 'description',
    id: 108,
    parent: 3,
    route: '/categorias/tv',
    hidden: true,
    cover: '/images/categories/cover/tv.png'
  },
  {
    name: 'Gaming',
    desc: 'description',
    id: 109,
    parent: 2,
    route: 'https://www.constrictor.com.ar/',
    hidden: false,
    cover: '/images/categories/cover/gaming.png'
  },
]