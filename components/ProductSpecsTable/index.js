import AccordionItem from '../AccordionItem'
import features from '../../content/features'

export default function ProductSpecsTable({prod}) {
  const prodFeatures = []
  prod.features.forEach(e => {
    prodFeatures.push({...features.find(f => e.id == f.id), value: e.value})
  })
  console.log(prodFeatures)
  return (
    <section id='prod-specs'>
      <AccordionItem classes='prod-specs-table' name='Especificaciones y características'>
        <div className='table-cell-container'>
          <div className='table-cell sku'>
            {prod.sku}
          </div>
          {prodFeatures.map(e => (
            <div className='table-cell'>
              <div className='title'><e.icon/>{e.name}</div>
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
          {prod.downloads.map(e => (
              <a href={e.link}>
                <e.icon />{e.name}
              </a>
          ))}
        </div>
      </AccordionItem>
    </section>
  )
}