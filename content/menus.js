import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import SearchIcon from '@mui/icons-material/Search';

const menus = [
  {
    name: 'Categorías',
    icon: ExpandCircleDownIcon,
    link: '/categorias',
    isPopup: true
  },
  {
    name: 'Líneas',
    icon: ExpandCircleDownIcon,
    link: '/lineas',
    isPopup: true
  },
  {
    name: 'Gaming',
    icon: SportsEsportsIcon,
    link: 'https://www.constrictor.com.ar/',
    isPopup: false
  },
  {
    name: 'Tienda',
    icon: LocalMallIcon,
    link: 'https://tienda.aiwaelectronics.com.ar/',
    isPopup: false
  },
  {
    name: 'Contacto',
    icon: LocalPhoneIcon,
    link: '/contacto',
    isPopup: false
  },
  {
    name: 'Buscar',
    icon: SearchIcon,
    link: '/buscar',
    isPopup: false
  }
]

export default menus