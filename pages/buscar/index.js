import { InputBase, Paper, IconButton, FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import ProductCard from '../../components/ProductCard'
import { products } from '../../content/products';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Buscar(){
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [init, setInit] = useState(false)
  const [type, setType] = useState(1)
  const [prop, setProp] = useState(0)

  const allProps = []
  products.forEach(e => {
    if (e.features !== undefined){
      e.features.forEach(e => {
        !allProps.includes(e.name) && allProps.push(e.name)
      })
    }
  })
  
  function compare(e){
    switch (type) {
      case 1:
        return e.name.toLowerCase().includes(query.toLowerCase()) ? true : false
      case 2:
        return e.sku.toLowerCase().includes(query.toLowerCase()) ? true : false
      case 3:
        return e.line.toLowerCase().includes(query.toLowerCase()) ? true : false
      case 4:
        if (e.features !== undefined) {
          return e.features.find(e => e.name === allProps[prop] && e.value.toLowerCase().includes(query.toLowerCase())) ? true : false
        } else return false
      default:
        return false
    } 
  }
  function getResults(e){
    e.preventDefault()
    setInit(true)
    setResults(products.filter(e => compare(e)))
  }
  function changeType(val){
    setQuery('')
    setType(val)
  }
  function changeProp(val){
    setQuery('')
    setProp(val)
  }
  const theme = createTheme({
    palette: {
      primary: {
        main: '#000'
      }
    }
  });  
  return (
    <ThemeProvider theme={theme}>
      <main id='buscar'>
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
              <MenuItem value={4}>Característica</MenuItem>
            </Select>
          </FormControl>
          {type === 4 &&
            <FormControl className='query-prop'>
              <InputLabel id="demo-simple-select-label">Característica</InputLabel>
              <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={prop}
              label="Característica"
              onChange={(e) => changeProp(e.target.value)}>
                {allProps.map((e,i) => <MenuItem key={i} value={i}>{e}</MenuItem>)}
              </Select>
            </FormControl>
          }
          <Paper
          component="form"
          sx={{ p: '4px 4px', display: 'flex', alignItems: 'center', minWidth: 400 }}
          onSubmit={(e) => getResults(e)}
          >
            <InputBase
              id='buscar-input'
              sx={{ ml: 1, flex: 1 }}
              placeholder="Escribí acá"
              inputProps={{ 'aria-label': 'buscar producto' }}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={(e) => getResults(e)}>
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        <section id="buscar-resultados">
          {results.length !== 0 && results.map((e,i) => (<ProductCard key={i} sku={e.sku} showName showSku/>))}
          {results.length === 0 && init === true && <p className='no-results'>No se han encontrado productos, intentalo nuevamente.</p>}
        </section>
      </main>
    </ThemeProvider>
  )
}