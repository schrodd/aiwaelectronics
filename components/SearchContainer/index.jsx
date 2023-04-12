import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { products } from '../../content/products';
import features from '../../content/features'
import { lvTwoCat } from '../../content/categories'
import { useState } from 'react';
import ProductCard from '../ProductCard'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function SearchContainer() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedFeature, setSelectedFeature] = useState('')
  const [selectedValue, setSelectedValue] = useState('')
  const [showDiscontinued, setShowDiscontinued] = useState(true)

  let productList = products
  .filter(({ categories }) => !selectedCategory || categories.some((category) => category === selectedCategory))
  .filter(({ features }) => !selectedValue || features.some((feature) => feature.value === selectedValue))
  .filter(({ buyLink }) => showDiscontinued || buyLink);

  // Filter features depending on actual state
  let featureList = features.filter(e => productList.some(f => f.features.some(g => g.id === e.id)))
  console.log(featureList)

  // Create list of possible values for that feature
  let valuesList = []
  if (selectedFeature) {
    productList.forEach(e => {
      const feature = e.features.find(f => f.id === selectedFeature)
      if (feature) valuesList.push(feature.value)
    })
  }
  let posValuesSet = Array.from(new Set(valuesList))
  console.log(posValuesSet)
  
  // Handle changes
  function selectCategory(e) {
    setSelectedCategory(e.target.value)
    setSelectedFeature('')
    setSelectedValue('')
  }
  function selectFeature(e) {
    setSelectedFeature(e.target.value)
    setSelectedValue('')
  }
  function selectValue(e) {
    setSelectedValue(e.target.value)
  }
  function toggleShowDiscontinued(e) {
    setShowDiscontinued(e => !e)
  }
  return (
    <main className="search">
      <aside className="filters">
        <h1>Buscar productos</h1>
        <FormControl fullWidth>
          <InputLabel id="category-name">Categoría</InputLabel>
          <Select
            labelId="category-name"
            id="category-name"
            value={selectedCategory}
            label="Categoría"
            onChange={selectCategory}
          >
            {lvTwoCat.map((e, i) => <MenuItem key={i} value={e.id}>{e.name}</MenuItem>)}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="feature-name">Característica</InputLabel>
          <Select
          labelId="feature-name"
          id="feature-name"
          value={selectedFeature}
          label="Característica"
          onChange={selectFeature}
          disabled={selectedCategory ? false : true}>
            {featureList && featureList.map((e, i) => <MenuItem key={i} value={e.id}>{e.name}</MenuItem>)}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Valor</InputLabel>
          <Select
            labelId="feature-value"
            id="feature-value"
            value={selectedValue}
            label="Valor"
            onChange={selectValue}
            disabled={selectedFeature ? false : true}>
            {posValuesSet.map((e, i) => <MenuItem key={i} value={e}>{e}</MenuItem>)}
          </Select>
        </FormControl>
        <FormGroup>
          <FormControlLabel control={<Checkbox value={showDiscontinued} defaultChecked/>} label="Mostrar descontinuados" onChange={toggleShowDiscontinued}/>
        </FormGroup>
        <button
        className='clear-fields'
        onClick={selectCategory} value=''>Limpiar campos</button>
      </aside>
      <div className="products">
        {productList.length > 0
        ? productList.map((e, i) => (
          <ProductCard sku={e.sku} showName showSku key={i} />
        ))
        : <div className="no-products">
            <h2>No se han encontrado productos</h2>
            <p>Intentá cambiando los filtros o limpiando los campos completamente</p>
          </div>}
      </div>
    </main>
  )
}