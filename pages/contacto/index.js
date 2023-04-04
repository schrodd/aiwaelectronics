import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import Image from 'next/image';
import SupportForms from '../../components/SupportForms';

export default function contacto() {
  const [type, setType] = useState('')
  const supportTypes = [
    ['soporte', 'Soporte Técnico'],
    ['postventa', 'Postventa (Atención al Retail)'],
    ['atencion', 'Atención al Cliente'],
    ['comercial', 'Comercial'],
    ['marketing', 'Propuestas / Marketing'],
    ['recursos', 'Recursos Humanos'],
  ]
  return (
    <main className="support">
      <div className="left">
        <Image src='/components/Support/contacto1.jpg' alt='contacto' fill/>
        <Image src='/components/Support/contacto2.jpg' alt='contacto' className='support-fade' fill/>
      </div>
      <div className="right">
        <h1>Contactanos</h1>
        <p>Podés contactarnos, si necesitás ayuda, asesoramiento o sumarte a nuestro equipo.</p>
        <p className="disclaimer">
          aiwaelectronics.com.ar es representante de la marca AIWA <b>únicamente en Argentina.</b> Para los productos AIWA adquiridos fuera del país no tiene la responsabilidad de la garantía y no cuenta con la información técnica y ni de soporte. Por favor, contactarse con el distribuidor de AIWA correspondiente a su país.
        </p>
        <h2>Escribinos</h2>
        <form action='https://formsubmit.co/fe90a362e67d5bec0dae4a99224c6e5c' method='POST'>
          <FormControl fullWidth variant='standard'>
            <InputLabel id="motivo-label">Motivo</InputLabel>
            <Select
              labelId='motivo-label'
              value={type}
              name='tipoConsulta'
              defaultValue='none'
              label="Motivo"
              onChange={e => setType(e.target.value)}
            >
              {supportTypes.map(e => <MenuItem value={e[0]}>{e[1]}</MenuItem>)}
            </Select>
            <SupportForms type={type}/>
          </FormControl>
        </form>
      </div>
    </main>
  )
}