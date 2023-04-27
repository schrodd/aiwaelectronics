import Image from "next/image"

export default function Constrictor(){
  return (
    <section id="constrictor">
      <div className="backdrop"></div>
      <div className='logo'>
        <div className="wrapper">
          <Image fill className="constrictor-logo" src="/images/components/Constrictor/constrictor-logo.png" alt='constrictor logo'/>
        </div>
        <h3>Nuestra línea de productos gamer</h3>
      </div>
      <div className='items'>
        <div className='item'>
          <a href="https://constrictor.com.ar/sillas/">
            <Image width='255' height='283' src="/images/components/Constrictor/const-sillas.png" alt='silla constrictor'/>
            <h4>SILLAS</h4>
          </a>
        </div>
        <div className='item'>
          <a href="https://constrictor.com.ar/teclados/">
            <Image width='255' height='283' src="/images/components/Constrictor/const-teclados.png"  alt='teclado constrictor'/>
            <h4>TECLADOS</h4>
          </a>
        </div>
        <div className='item'>
          <a href="https://constrictor.com.ar/auriculares/">
            <Image width='255' height='283' src="/images/components/Constrictor/const-headsets.png" alt='headset constrictor'/>
            <h4>AURICULARES</h4>
          </a>
        </div>
        <div className='item'>
          <a href="https://constrictor.com.ar/mouses/">
            <Image width='255' height='283' src="/images/components/Constrictor/const-mouses.png"  alt='mouse constrictor'/>
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