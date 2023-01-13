import { products } from '../../content/products'
import Image from 'next/image'
import Link from 'next/link'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';

export default function ProductCard({sku, showName, showSku, showDesc, showButton, showGen, showTags, showViewing}){
  const router = useRouter()
  const activePath = router.asPath
  console.log(activePath)
  const product = products.find(e => e.sku == sku)
  return (
    <div className='product-card'>
      {activePath == `/productos/${product.sku}` && (
        <RemoveRedEyeIcon/>
      )}
      <Link href={product.link}>
        <div className='image'>
          <Image width='150' height='150' layout='fixed' src={product.imgs[0]} alt={product.name} placeholder='blur' blurDataURL='/ph.png' priority/>
        </div>
        <div className='texts'>
          {showSku && <p className='p-sku'>{product.sku}</p>}
          {showName && <p className='p-name'>{product.name}</p>}
          {showDesc && <p className='p-desc'><small>{product.shortDesc}</small></p>}
          {showGen && <p className='p-desc'><small>{product.gen}</small></p>}
          {showTags && (
            <div className='p-tags'>
              {product.buyLink ? (
                <span style={{background:'#54ac45'}}>
                  <CheckIcon/>
                  Disponible
                </span>
              ) : (
                <span style={{background:'grey'}}>
                  <CloseIcon/>
                  No disponible
                </span>
              )}
            </div>
          )}
        </div>
        {showButton && <button><Link href={product.link}>Ver más</Link></button>}

      </Link>
    </div>
  );
}