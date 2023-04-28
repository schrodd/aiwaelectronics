import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import Image from 'next/image';
import SupportForms from '../SupportForms';

export default function ContactContent(){
  const [reason, setReason] = useState('')
  const [action, setAction] = useState('')

  const reasonsConfig = [
    { value: 'soporte', desc: 'Soporte Técnico', action: '/mail/soporte_tecnico.php'},
    { value: 'postventa', desc: 'Postventa (Atención al Retail)', action: '/mail/postventa.php'},
    { value: 'atencion', desc: 'Atención al Cliente', action: '/mail/atencion_al_cliente.php'},
    { value: 'comercial', desc: 'Comercial', action: '/mail/comercial.php'},
    { value: 'marketing', desc: 'Marketing', action: '/mail/marketing.php'},
    { value: 'recursos', desc: 'Recursos Humanos', action: ''},
  ]

  function changeReason(value){
    setReason(value)
    setAction(reasonsConfig.find(e => e.value == value).action)
  }

  return (
    <>
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
          <form action={action} method='POST' id='contact-form'>
            <FormControl fullWidth variant='standard'>
              <InputLabel id="motivo-label">Motivo</InputLabel>
              <Select
              labelId='motivo-label'
              value={reason}
              name='tipoConsulta'
              defaultValue='none'
              label="Motivo"
              onChange={e => changeReason(e.target.value)}>
                {reasonsConfig.map((e,i) => <MenuItem key={i} value={e.value}>{e.desc}</MenuItem>)}
              </Select>
              <SupportForms type={reason}/>
            </FormControl>
          </form>
        </div>
      </main>
    </>
  )
}