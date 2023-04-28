import Image from "next/image"
import { Article, QuestionMark, PhoneRounded, WorkspacePremium } from "@mui/icons-material"
import Link from "next/link"

export default function SupportPageContent(){
  return (
    <main className="support-page-content">
      <div className="banner">
        <div className="text">
          <h1>Soporte técnico</h1>
          <h3>Llamanos al 0800-444-1212</h3>
          <h5>De 9:00 a 18:00hs, de lunes a viernes</h5>
        </div>
        <Image src='/images/pages/soporte/soporte.jpg' alt='soporte-banner' fill/>
      </div>
      <div className="buttons">
        <Link href='/buscar' className='card'>
          <Article/>
          <h2>Manuales</h2>
          <p>Descargá los manuales y otros documentos de tu producto, buscando el modelo del mismo.</p>
        </Link>
        {/* <div className="card">
          <QuestionMark/>
          <h2>Preguntas frecuentes</h2>
        </div> */}
        <Link href='/contacto-soporte' className='card'>
          <PhoneRounded/>
          <h2>Servicio técnico</h2>
          <p>Contactanos a través del formulario para solicitar asistencia técnica, comprobar el progreso de reparación u obtener información sobre repuestos.</p>
        </Link>
        <Link href='/terminos-y-condiciones' className='card'>
          <WorkspacePremium/>
          <h2>Garantía</h2>
          <p>Conocé nuestra política de garantía.</p>
        </Link>
      </div>
    </main>
  )
}