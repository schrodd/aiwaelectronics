import { InputBase, Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import ProductCard from '../../components/ProductCard'
import { products } from '../../content/products';

export default function Buscar(){
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  function getResults(e){
    e.preventDefault()
    setResults(products.filter(e => e.name.toLowerCase().includes(query.toLowerCase())))
  }
  return (
    <main id='buscar'>
      <h1>Buscar producto</h1>
      <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      onSubmit={(e) => getResults(e)}
      >
        <InputBase
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
      <section id="buscar-resultados" style={{display:'flex',padding: '20px'}}>
        {results.length != 0 && results.map(e => (<ProductCard sku={e.sku} showName showSku/>))}
      </section>
    </main>
  )
}