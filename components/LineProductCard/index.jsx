import Image from "next/image"
import Link from "next/link"

export default function LineProductCard({prod}){
  return (
    <div className="line-product">
      <div className="bg"></div>
      <div className="image">
        <Image src={prod.imgs[0]} fill/>
      </div>
      <p className="sku">{prod.sku}</p>
      <p className="title">{prod.shortDesc}</p>
      <p className="desc">{prod.longDesc}</p>
      <Link className="button" href={`/productos/${prod.sku}`}>
        Ver más
      </Link>
    </div>
  )
}