import AccordionItem from '../AccordionItem'
import features from '../../content/features'
import Link from 'next/link'

export default function ProductSpecsTable({prod}) {
  const prodFeatures = []
  prod.features.forEach(e => {
    prodFeatures.push({...features.find(f => e.id == f.id), value: e.value})
  })
  return (
    <section id='prod-specs'>
      <AccordionItem classes='prod-specs-table' name='Especificaciones'>
        <div className='table-cell-container'>
          <div className='table-cell sku'>
            {prod.variants.map((e,i) => (
              <button key={i} className={e.sku == prod.sku ? 'active' : 'not-active'}>
                <Link href={`${e.link}#prod-specs`}><a>{e.sku}</a></Link>
              </button>
            ))}
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
            <p>{prod.includes}</p>
      </AccordionItem>
      <AccordionItem classes='prod-specs-table' name='Descargas'>
        <div className='download-items'>
          {prod.downloads.map((e,i) => (
              <a href={e.link} key={i}>
                <e.icon />{e.name}
              </a>
          ))}
        </div>
      </AccordionItem>
    </section>
  )
}