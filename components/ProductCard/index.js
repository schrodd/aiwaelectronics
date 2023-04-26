import { products } from '../../content/products'
import Image from 'next/image'
import Link from 'next/link'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useRouter } from 'next/router';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import DownloadIcon from '@mui/icons-material/Download';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';


export default function ProductCard({sku, showName, showSku, showDesc, showButton, showGen, showTags, showDownload, showMenu}){
  const router = useRouter()
  const activePath = router.asPath
  const product = products.find(e => e.sku == sku)
  const [menuAnchorElement, setMenuAnchorElement] = useState(null)
  const open = Boolean(menuAnchorElement)
  function toggleMenu(e) {
    if (open) {
      setMenuAnchorElement(null)
    } else {
      setMenuAnchorElement(e.currentTarget)
    }
  }
  return (
    <div className='product-card'>
      {activePath == `/productos/${product.sku}` && (
        <RemoveRedEyeIcon/>
      )}
      <Link href={product.link}>
        <div className='image'>
          <Image width='150' height='150' layout='fixed' src={product.imgs[0]} alt={product.name} placeholder='blur' blurDataURL='/ph.png' priority/>
        </div>
      </Link>
      <div className='texts'>
        {showSku && <p className='p-sku'>{product.sku}</p>}
        {showName && <Link href={product.link}><p className='p-name'>{product.name}</p></Link>}
        {showDesc && <p className='p-desc'><small>{product.shortDesc}</small></p>}
        {showGen && <p className='p-desc'><small>{product.gen}</small></p>}
        {showTags && (
          <div className='p-tags'>
            {!product.categories.some(e => e == 110) ? (
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
        {showDownload && <a className='p-download-button' href={product.downloads} target='_blank' rel="noreferrer"><OpenInNewIcon/>Descargas</a> }
        {showMenu && (
          <>
            <button
              className='options-menu'
              onClick={toggleMenu}
            >
              <FormatListBulletedIcon/>
              Opciones
            </button>
            <Menu
              anchorEl={menuAnchorElement}
              open={open}
              onClose={toggleMenu}
              sx={{maxWidth: '300px'}}
            >
              <MenuItem onClick={toggleMenu} sx={{fontSize: '14px'}}>
                <Link className='search-menu-link' href={product.link}>
                  <VisibilityIcon fontSize="small" /> 
                  Ver producto
                </Link>
              </MenuItem>
              {product.buyLink && (
                <MenuItem onClick={toggleMenu} sx={{fontSize: '14px'}}>
                  <Link className='search-menu-link' href={product.buyLink}>
                    <LocalGroceryStoreIcon fontSize="small" />
                    Comprar
                  </Link>
                </MenuItem>
              )}
              {product.features && (
                <MenuItem onClick={toggleMenu} sx={{fontSize: '14px'}}>
                  <Link className='search-menu-link' href={`${product.link}#product-features-anchor`}>
                    <QuestionMarkIcon fontSize="small" />
                    Características
                  </Link>
                </MenuItem>
              )}
              {product.downloads && (
                <MenuItem onClick={toggleMenu} sx={{fontSize: '14px'}}>
                  <Link className='search-menu-link' href={product.downloads} target='_blank'>
                    <DownloadIcon fontSize="small" />
                    Descargas
                  </Link>
                </MenuItem>
              )}
            </Menu>
          </>
        )}
      </div>
      {showButton && <button className='see-more'><Link href={product.link}>Ver más</Link></button>}
    </div>
  );
}