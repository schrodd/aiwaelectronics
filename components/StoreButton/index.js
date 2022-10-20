import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function StoreButton() {
  return (
    <button className='store-button'>
      <a href='https://tienda.aiwaelectronics.com.ar/'>
        <ShoppingCartIcon fontSize='small'/>
        <p>Ir a la tienda</p>
      </a>
    </button>
  )
}