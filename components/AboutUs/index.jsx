import Image from 'next/image';

export default function AboutUs(){

  return (
    <>
      <main className="support about-us">
        <div className="left">
          <Image src='/images/pages/sobre-nosotros/ciudad.jpg' alt='contacto' fill/>
        </div>
        <div className="right">
          <h1>¿Quiénes somos?</h1>
          <p>Somos una compañía con más de 30 años de experiencia en el mercado de la tecnología y audio. Desde el año 2015 radicamos en Buenos Aires, Argentina.</p>
          <p>Ofrecemos a nuestros clientes una gran variedad de productos de gran calidad y diseño.</p>
          <h2>Nuestros productos</h2>
          <div className="section">
            <p>Audio</p><hr />
            <p><strong>Parlantes portátiles - Torres de sonido - Audio Hogar</strong></p>
          </div>
          <div className="section">
            <p>Headsets</p><hr />
            <p><strong>Auriculares In-ear - Auriculares On-Ear</strong></p>
          </div>
          <div className="section">
            <p>Informática</p><hr />
            <p><strong>Tablets - Cloudbooks - Notebooks</strong></p>
          </div>
          <div className="section">
            <p>Gaming</p><hr />
            <p><strong>Mouses - Teclados - Auriculares - Sillas - Mousepads</strong></p>
          </div>
        </div>
      </main>
    </>
  )
}