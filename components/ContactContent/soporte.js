import Image from 'next/image';
import SupportForms from '../SupportForms';

export default function ContactContent(){

  return (
    <>
      <main className="support">
        <div className="right">
          <p className='over-title'>Soporte Técnico</p>
          <h1>Estamos para ayudarte</h1>
          <h3>Llamanos al 0800-444-1212</h3>
          <h5>De 9:00 a 18:00hs, de lunes a viernes</h5>
          <p className="disclaimer">
            aiwaelectronics.com.ar es representante de la marca AIWA <b>únicamente en Argentina.</b> Para los productos AIWA adquiridos fuera del país no tiene la responsabilidad de la garantía y no cuenta con la información técnica y ni de soporte. Por favor, contactarse con el distribuidor de AIWA correspondiente a su país.
          </p>
          <form action='/mail/soporte_tecnico.php' method='POST' id='contact-form'>
            <SupportForms type='soporte'/>
          </form>
        </div>
        <div className="left">
          <Image src='/components/Support/contacto1.jpg' alt='contacto' fill/>
          <Image src='/components/Support/contacto2.jpg' alt='contacto' className='support-fade' fill/>
        </div>
      </main>
    </>
  )
}