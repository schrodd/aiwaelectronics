import Image from "next/image";
import lineas from '../../content/lineas'

export default function Product({product, index}){
  const classes = index % 2 === 0 ? `product ${product.sku}` : `product ${product.sku} dark`
  const linea = lineas.find(e => e.name === product.line)
  return (
    <div className={classes}>
      <figure className='image'>
        <Image width='500px' height='500px' src={product.imgs[0]} alt={product.name}/>
      </figure>
      <div className='text'>
        <div className='line-image-wrapper'>
          <Image src={linea.logo} alt={`Logo línea ${linea.name}`} layout='fill' objectFit='contain' />
        </div>
        <p className='sku'>{product.sku}</p>
        <h3>{product.shortDesc}</h3>
        <h4>{product.longDesc}</h4>
        <button>Ver más</button>
      </div>
    </div>
  )
}