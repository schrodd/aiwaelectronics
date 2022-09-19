import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import SearchIcon from '@mui/icons-material/Search';

const menus = [
  {
    name: 'Categorías',
    icon: ExpandCircleDownIcon,
    link: '/categorias'
  },
  {
    name: 'Líneas',
    icon: ExpandCircleDownIcon,
    link: '/lineas'
  },
  {
    name: 'Gaming',
    icon: SportsEsportsIcon,
    link: 'https://www.constrictor.com.ar/'
  },
  {
    name: 'Tienda',
    icon: LocalMallIcon,
    link: 'https://tienda.aiwaelectronics.com.ar/'
  },
  {
    name: 'Contacto',
    icon: LocalPhoneIcon,
    link: '/contacto'
  },
  {
    name: 'Buscar',
    icon: SearchIcon,
    link: '/buscar'
  }
]

export default menus