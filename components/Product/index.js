import Image from "next/image";

export default function Product({product, index}){
  const classes = index % 2 === 0 ? `product ${product.sku}` : `product ${product.sku} dark`
  return (
    <div className={classes}>
      <figure className='image'>
        <Image width='500px' height='500px' src={product.pngs[0]} alt={product.name}/>
      </figure>
      <div className='text'>
        <p className='sku'>{product.sku}</p>
        <h3>{product.shortDesc}</h3>
        <h4>{product.longDesc}</h4>
        <button>Ver más</button>
      </div>
    </div>
  )
}