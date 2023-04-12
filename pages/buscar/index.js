import SearchContainer from "../../components/SearchContainer";
import { products } from '../../content/products'

export default function Buscar(){
  return (
    <SearchContainer products={products}/>
  )
}