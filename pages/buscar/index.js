import { FormControl, Select, MenuItem, InputLabel, Autocomplete, TextField, FormGroup, FormControlLabel, Switch } from '@mui/material'
import { useState, useEffect } from 'react'
import ProductCard from '../../components/ProductCard'
import { products } from '../../content/products'
import lineas from '../../content/lineas'

export default function Buscar(){
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [init, setInit] = useState(false)
  const [type, setType] = useState(1)
  const [line, setLine] = useState('')

  const resultsArr = results.map(e => {
    switch (type) {
      case 1:
        return { label: e.name }
      case 2:
        return { label: e.sku }
      case 3:
        return { label: e.line }
      default: 
        return undefined
    }
  })

  useEffect(() => {
    getResults()
  }, [line, query])

  function compare(e){
    if (query) {
      switch (type) {
        case 1:
          return e.name.toLowerCase().includes(query.toLowerCase()) ? true : false
        case 2:
          return e.sku.toLowerCase().includes(query.toLowerCase()) ? true : false
        case 3:
          return e.line.toLowerCase().includes(query.toLowerCase()) ? true : false
        default:
          return false
      } 
    }
  }
  function getResults(e){
    e && e.preventDefault()
    setInit(true)
    setResults(products.filter(e => compare(e)))
  }
  function changeType(val){
    setQuery('')
    setType(val)
  }
  function changeLine(e){
    setLine(e.target.value)
    setQuery(e.target.value)
  }
  return (
    <main id='buscar'>
      <div className='izq'>
        <h1>Buscar productos</h1> 
        <div className='inputs'>
          <FormControl className='query-type'>
            <InputLabel id="demo-simple-select-label">Buscar por</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="Buscar por"
            onChange={(e) => changeType(e.target.value)}>
              <MenuItem value={1}>Producto</MenuItem>
              <MenuItem value={2}>Modelo</MenuItem>
              <MenuItem value={3}>Línea</MenuItem>
            </Select>
          </FormControl>
          {type === 3 && (
            <FormControl className='query-line'>
              <InputLabel id="demo-simple-select-label">Línea</InputLabel>
              <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={line}
              label="Línea"
              onChange={(e) => changeLine(e)}>
                {lineas.map((e,i) => <MenuItem key={i} value={e.displayName}>{e.displayName}</MenuItem>)}
              </Select>
            </FormControl>
          )}
          {type !== 3 && (
            <Autocomplete
              isOptionEqualToValue={(option, value) => option.label === value.label}
              disablePortal
              className='buscar-input'
              options={resultsArr}
              sx={{minWidth: 400}}
              onChange={(e,v) => {v && setQuery(v.label)}}
              onInputChange={(e) => {setQuery(e.target.value)}}
              renderInput={(params) => <TextField {...params} label="Tu búsqueda" />}
            />
          )}
        </div>
        <section id="buscar-resultados">
          {results.length !== 0 && results.map((e,i) => (<ProductCard key={i} sku={e.sku} showName showSku/>))}
          {results.length === 0 && init === true && <p className='no-results'>No se han encontrado productos, intentalo nuevamente.</p>}
        </section>
      </div>
      <aside className='der'>
        <h2>Filtros</h2>
        <FormGroup>
          <FormControlLabel control={<Switch defaultChecked />} label="Inalámbrico" />
          <FormControlLabel control={<Switch defaultChecked />} label="Bluetooth" />
        </FormGroup>
      </aside>
    </main>
  )
}