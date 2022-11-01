import { useState } from 'react'
import features from '../../content/features'

export default function ProductFeatures({prod}) {
  const [activeFeature, setActiveFeature] = useState(1)
  console.log(activeFeature)
  const prodFeatures = []
  prod.features.forEach(e => {
    prodFeatures.push({...features.find(f => e.id == f.id), value: e.value})
  })
  const activeFeatObject = prodFeatures.find(e => e.id == activeFeature)
  return (
    <div className='product-features'>
      <div className='left'>
        <p>Seleccioná una característica</p>
        <div className='icons'>  
          {prodFeatures.slice(0,8).map((e,i) => (
            <div className='button-wrapper' key={i}>
              <button className={activeFeature == e.id && 'active'} onClick={() => setActiveFeature(e.id)}>
                <e.icon fontSize='large'/>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className='right'>
        <div className='content'>
          <activeFeatObject.icon/>
          <div className='text'>
            <h2>{activeFeatObject.title.toUpperCase()}</h2>
            <p>{activeFeatObject.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}