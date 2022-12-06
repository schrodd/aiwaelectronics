import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function StoreButton() {
  return (
    <button className='store-button'>
      <a href='https://tienda.aiwaelectronics.com.ar/' rel='noopener noreferrer' target='_blank'>
        <ShoppingCartIcon fontSize='small'/>
        <p>Shop</p>
      </a>
    </button>
  )
}