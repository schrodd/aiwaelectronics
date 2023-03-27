import Image from "next/image";
import lineas from '../../content/lineas'
import Link from "next/link";

export default function Product({product, index}){
  const classes = index % 2 === 0 ? `product ${product.sku}` : `product ${product.sku} dark`
  const linea = lineas.find(e => e.name === product.line)
  return (
    <div className={classes}>
      <figure className='image'>
        <Image src={product.imgs[0]} alt={product.name} placeholder='blur' blurDataURL='/ph.png' priority fill/>
      </figure>
      <div className='text'>
        { linea && <div className='line-image-wrapper'>
          <Image src={linea.logo} alt={`Logo línea ${linea.name}`} layout='fill' objectFit='contain' 
          objectPosition={index % 2 === 0 ? 'right' : 'left'}/>
        </div> }
        <p className='sku'>{product.sku}</p>
        <h3>{product.shortDesc}</h3>
        <h4>{product.longDesc}</h4>
        <Link href={product.link} legacyBehavior>
          <button>Ver más</button>
        </Link>
      </div>
    </div>
  );
}