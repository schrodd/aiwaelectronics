import LineContainer from '../LineContainer'
import lineas from '../../content/lineas'

export default function LinesContainer(){
  return (
    <section className='lines'>
          {lineas.map((e,i) => (
            <LineContainer line={e.name} logo={e.logo} link={e.link} bg={e.bg} key={i}/>
          ))}
    </section>
  )
}