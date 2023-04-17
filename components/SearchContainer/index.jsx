import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { products } from '../../content/products';
import features from '../../content/features'
import { lvOneCat, lvTwoCat } from '../../content/categories'
import { useState, useEffect } from 'react';
import ProductCard from '../ProductCard'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SearchContainer() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedFeature, setSelectedFeature] = useState('')
  const [selectedValue, setSelectedValue] = useState('')
  const [showDiscontinued, setShowDiscontinued] = useState(true)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(true)
  const [skuInput, setSkuInput] = useState('')
  let finalProducts, finalFeatures, finalValues

  function sortAlphabetically(data, prop){ // Accepts both arrays and objects
    return prop ? data.sort((a,b) => a[prop] >= b[[prop]] ? 1 : -1) : data.sort((a,b) => a >= b ? 1 : -1)
  }
  function removeDuplicates(arr){
    return Array.from(new Set(arr))
  }
  function getPossibleSkus(products){
    return products.map(p => p.sku)
  }
  function findProductsByMasterCategory(catId, products){
    const categories = lvTwoCat.map(e => e.parent == catId && e.id) // Array [101, 102]
    // Return filtered products if any of its categories matches any of the present in the array above
    return products.filter(prod => prod.categories.some(prodCat => categories.some(cat => cat == prodCat)))
  }

  if (!selectedCategory) { // Si no tocaste nada, ves todos los productos
    finalProducts = products
  } else { // Si seleccionaste categoria...
    // Filtras productos por categoría
    finalProducts = findProductsByMasterCategory(selectedCategory, products)
    // Generas lista de características posibles
    const featureArray = features.filter(e => finalProducts.some(prod => prod.features.some(feat => feat.id == e.id && !e.hideInSearchPage)))
    finalFeatures = removeDuplicates(sortAlphabetically(featureArray, 'name'))
    if (selectedFeature) { // Si seleccionaste característica, generas lista de valores posibles
      const featValues = [] // Array temporal de valores posibles
      finalProducts.forEach(prod => { // Por cada producto...
        const match = prod.features.find(feat => feat.id == selectedFeature) // Busca la feature seleccionada
        if (match) featValues.push(match.value) // Si hay coincidencia, incluye su valor en el array temporal
      })
      finalValues = removeDuplicates(sortAlphabetically(featValues)) // Genera los valores posibles sin repetir
      if (selectedValue) {
        finalProducts = finalProducts.filter(prod => prod.features.some(feat => feat.id == selectedFeature && feat.value == selectedValue)) // Filtra por valor seleccionado
      }
    }
  }
  if (!showDiscontinued) {
    finalProducts = finalProducts.filter(prod => !prod.categories.some(cat => cat == 110))
  }
  if (skuInput) {
    finalProducts = finalProducts.filter(prod => prod.sku.includes(skuInput))
  }

  // Handlers
  function selectCategory(e) {
    setSelectedCategory(e.target.value)
    setSelectedFeature('')
    setSelectedValue('')
    scrollToTop()
  }
  function selectFeature(e) {
    setSelectedFeature(e.target.value)
    setSelectedValue('')
    scrollToTop()
  }
  function selectValue(e) {
    setSelectedValue(e.target.value)
    scrollToTop()
    setMobileMenu(false)
  }
  function toggleShowDiscontinued() {
    setShowDiscontinued(e => !e)
    scrollToTop()
  }
  function clearFields() {
    setSelectedCategory('')
    setSelectedFeature('')
    setSelectedValue('')
    setSkuInput('')
    scrollToTop()
  }
  function openMobileMenu() {
    setMobileMenu(e => !e)
    scrollToTop()
  }
  function changeSku(e) {
    setSkuInput(e.target.value)
  }

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    })
  }, [])
  return (
    <main className="search">
      <aside className="filters">
        <button className={`mobile-open ${mobileMenu && 'open'}`} onClick={openMobileMenu}><ArrowUpwardIcon/></button>
        <div className={`wrapper ${mobileMenu && 'open'}`}>
          <h1>Búsqueda de productos</h1>
          <Autocomplete
            disablePortal
            id="sku-input"
            options={getPossibleSkus(finalProducts)}
            fullWidth
            disableClearable
            onSelect={changeSku}
            value={skuInput}
            isOptionEqualToValue={(a, b) => true} // this is only for the console to STFU
            renderInput={(params) => <TextField {...params} onChange={changeSku} label="Modelo"/>}
          />
          <FormControl fullWidth>
            <InputLabel id="category-name">Categoría</InputLabel>
            <Select
              labelId="category-name"
              id="category-name"
              value={selectedCategory}
              label="Categoría"
              onChange={selectCategory}
            >
              {lvOneCat.map((e, i) => <MenuItem key={i} value={e.id}>{e.name}</MenuItem>)}
            </Select>
          </FormControl>
          {selectedCategory && (
            <FormControl fullWidth>
              <InputLabel id="feature-name">Característica</InputLabel>
              <Select
              labelId="feature-name"
              id="feature-name"
              value={selectedFeature}
              label="Característica"
              onChange={selectFeature}>
                {finalFeatures && finalFeatures.map((e, i) => <MenuItem key={i} value={e.id}>{e.name}</MenuItem>)}
              </Select>
            </FormControl>
          )}
          {selectedFeature && (
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Valor</InputLabel>
              <Select
                labelId="feature-value"
                id="feature-value"
                value={selectedValue}
                label="Valor"
                onChange={selectValue}>
                {finalValues.map((e, i) => <MenuItem key={i} value={e}>{e}</MenuItem>)}
              </Select>
            </FormControl>
          )}
          <FormGroup>
            <FormControlLabel control={<Checkbox value={showDiscontinued} defaultChecked/>} label="Mostrar descontinuados" onChange={toggleShowDiscontinued}/>
          </FormGroup>
          <button className='clear-fields' onClick={clearFields} value=''>
            <DeleteSweepIcon/>Limpiar campos
          </button>
          <button className={`back-to-top ${showBackToTop && 'visible'}`} onClick={scrollToTop} value=''>
            <ArrowUpwardIcon fontSize='small'/>
            Volver arriba
          </button>
        </div>
      </aside>
      <div className="products">
        <p className='results'>Resultados: {finalProducts.length}</p>
        {finalProducts.map((e, i) => <ProductCard sku={e.sku} showName showSku showTags showDownload key={i} />)}
      </div>
    </main>
  )
}