import AccordionItem from '../AccordionItem'
import features from '../../content/features'
import Link from 'next/link'
import Image from 'next/image'
import IncludesItem from '../IncludesItem'
import includes from '../../content/includes'

export default function ProductSpecsTable({prod}) {
  const prodFeatures = []
  prod.features.forEach(e => {
    prodFeatures.push({...features.find(f => e.id == f.id), value: e.value})
  })
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
            {/* <p>{prod.includes}</p> */}
            <div className='includes-container'>
              {prodIncludes.map(e => <IncludesItem item={e}/>)}
            </div>
            {prod.certNo && <p><small>Número de certificado de Seguridad Eléctrica: {prod.certNo}</small></p>}
      </AccordionItem>
      <AccordionItem classes='prod-specs-table' name='Descargas'>
        <div className='download-items'>
            {prod.downloads.map((e,i) => (
              <a href={e.link} key={i}>
                <e.icon />
                {e.name}
              </a>
            ))}
        </div>
      </AccordionItem>
      {prod.variants.length > 0 && (
        <AccordionItem classes='prod-specs-table variants' name='Variantes'>
            <div className="download-items">
              <Image className='versions-thumbnail' src={prod.imgs[0]} alt='img' width="150" height="150"/>
              <div className="buttons">
                {prod.variants.map((e,i) => (
                  <Link href={e.link} key={i}>
                    <a>
                      {e.sku}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
        </AccordionItem>
      )}
    </section>
  )
}