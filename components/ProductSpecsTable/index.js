import AccordionItem from '../AccordionItem'
import LaunchIcon from '@mui/icons-material/Launch';
import features from '../../content/features'
import IncludesItem from '../IncludesItem'
import includes from '../../content/includes'
import ProductCard from '../ProductCard'

export default function ProductSpecsTable({prod}) {
  const prodFeatures = []
  features.forEach(e => {
    const prodFeature = prod.features.find(f => f.id == e.id)
    if (prodFeature){
      prodFeatures.push({...prodFeature, name: e.name})
    }
  })
  console.log(prodFeatures)
  const prodIncludes = []
  prod.includes.forEach(e => {
    prodIncludes.push(includes.find(f => e == f.id))
  })
  return (
    <section id='prod-specs'>
      <AccordionItem classes='prod-specs-table' name='Especificaciones'>
        <div className='table-cell-container'>
        <div className='table-cell sku'>
              <div className='title'>{prod.sku}</div>
            </div>
          {prodFeatures.map((e,i) => (
            <div className='table-cell' key={i}>
              <div className='title'>{e.name}</div>
              <p className='desc'>{e.value}</p>
            </div>
          ))}
        </div>
      </AccordionItem>
      <AccordionItem classes='prod-specs-table' name='Incluye'>
            <div className='includes-container'>
              {prodIncludes.map((e,i) => <IncludesItem item={e} key={i}/>)}
            </div>
            {prod.certNo && <p><small>*Número de certificado de Seguridad Eléctrica: {prod.certNo}</small></p>}
      </AccordionItem>
      <AccordionItem classes='prod-specs-table' name='Descargas'>
        <div className='download-items'>
            <a href={prod.downloads} target='_blank' rel="noreferrer">
              <LaunchIcon />
              Ver material del producto en Google Drive
            </a>
        </div>
      </AccordionItem>
      {prod.variants.length > 0 && (
        <AccordionItem classes='prod-specs-table variants' name='Nueva Generación' open>
            <div className="wrapper">
              {prod.variants.map((e,i) => (
                <ProductCard key={i} sku={e} showName showSku showDesc />
              ))}
            </div>
        </AccordionItem>
      )}
    </section>
  )
}