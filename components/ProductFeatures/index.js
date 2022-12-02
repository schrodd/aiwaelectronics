import { useState } from 'react'
import featuredFeatures from '../../content/featuredFeatures'
import Head from 'next/head'
import { SvgIcon } from '@mui/material'
import { shadows } from '@mui/system'

export default function ProductFeatures({prod}) {
  const [activeFeature, setActiveFeature] = useState(prod.featuredFeatures[0].id)
  const prodFeatures = []
  prod.featuredFeatures.forEach(e => {
    prodFeatures.push({...featuredFeatures.find(f => e.id == f.id), value: e.value})
  })
  const activeFeatObject = prodFeatures.find(e => e.id == activeFeature)
  return (
    <section className='product-features'>
      <Head>
        <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" key="no-scale"/>
      </Head>
      <div className='left'>
        <p>Seleccioná una característica</p>
        <div className='icons'>  
          {prodFeatures.map((e,i) => (
            <div className='button-wrapper' key={i}>
              <button className={activeFeature == e.id ? 'active' : undefined} onClick={() => setActiveFeature(e.id)}>
                <div className='background'>
                  <SvgIcon component={e.icon} inheritViewBox fontSize="large"/>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className='right'>
        {activeFeatObject && (
          <div className='icon-shadow'>
            <activeFeatObject.icon/>
          </div>
        )}
        <div className='content'>
        {activeFeatObject ? (
          <>
          <activeFeatObject.icon/>
            <div className='text'>
              <h2>{activeFeatObject.name.toUpperCase()}</h2>
              <p>{activeFeatObject.customDesc
                ? activeFeatObject.customDesc(activeFeatObject.value) 
                : activeFeatObject.desc}
              </p>
            </div>
          </>
        ) : <h2>Hacé click en uno de los iconos de la izquierda</h2>}
        </div>
      </div>
    </section>
  )
}