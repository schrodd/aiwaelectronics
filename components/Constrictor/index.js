import Image from "next/image"

export default function Constrictor(){
  return (
    <section id="constrictor">
      <div className='logo'>
        <Image width='300px' height='110px' className="constrictor-logo" src="/images/components/Constrictor/constrictor-logo.png" />
        <h3>Nuestra línea de productos gamer</h3>
      </div>
      <div className='items'>
        <div className='item'>
          <a href="https://constrictor.com.ar/sillas/">
            <Image width='255px' height='283px' src="/images/components/Constrictor/const-sillas.png" />
            <h4>SILLAS</h4>
          </a>
        </div>
        <div className='item'>
          <a href="https://constrictor.com.ar/teclados/">
            <Image width='255px' height='283px' src="/images/components/Constrictor/const-teclados.png" />
            <h4>TECLADOS</h4>
          </a>
        </div>
        <div className='item'>
          <a href="https://constrictor.com.ar/auriculares/">
            <Image width='255px' height='283px' src="/images/components/Constrictor/const-headsets.png" />
            <h4>AURICULARES</h4>
          </a>
        </div>
        <div className='item'>
          <a href="https://constrictor.com.ar/mouses/">
            <Image width='255px' height='283px' src="/images/components/Constrictor/const-mouses.png" />
            <h4>MOUSES</h4>
          </a>
        </div>
      </div>
      <button>
        <a href="https://constrictor.com.ar/" rel="noopener noreferrer" target="_blank" >Ver Todos</a>
      </button>
    </section>
  )
}