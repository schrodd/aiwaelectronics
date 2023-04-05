import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import Image from 'next/image';
import SupportForms from '../../components/SupportForms';

export default function ContactContent(){
  const [reason, setReason] = useState('')
  const [email, setEmail] = useState('')
  const [cc, setCc] = useState('')

  const reasonsConfig = [
    { value: 'soporte', desc: 'Soporte Técnico', to: 'soporte@totalhome.com.ar', cc: ''},
    { value: 'postventa', desc: 'Postventa (Atención al Retail)', to: 'postventa@totalhome.com.ar', cc: ''},
    { value: 'atencion', desc: 'Atención al Cliente', to: 'consultas@totalhome.com.ar', cc: ''},
    { value: 'comercial', desc: 'Comercial', to: 'dcanton@totalhome.com.ar', cc: 'ventas@totalhome.com.ar'},
    { value: 'marketing', desc: 'Propuestas / Marketing', to: 'arodriguez@totalhome.com.ar', cc: ''},
    { value: 'recursos', desc: 'Recursos Humanos', to: 'rrhh@totalhome.com.ar', cc: ''},
  ]

  function changeReason(value){
    setReason(value)
    setEmail(reasonsConfig.find(e => e.value == value).to)
    setCc(reasonsConfig.find(e => e.value == value).cc)
  }

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
        <form action={`https://formsubmit.co/${email}`} method='POST'>
          <FormControl fullWidth variant='standard'>
            <InputLabel id="motivo-label">Motivo</InputLabel>
            <Select
              labelId='motivo-label'
              value={reason}
              name='tipoConsulta'
              defaultValue='none'
              label="Motivo"
              onChange={e => changeReason(e.target.value)}
            >
              {reasonsConfig.map((e,i) => <MenuItem key={i} value={e.value}>{e.desc}</MenuItem>)}
            </Select>
            <SupportForms type={reason}/>
          </FormControl>
          <input type="hidden" name="_cc" value={cc}></input>
          <input type="hidden" name="_next" value="https://aiwaelectronics.vercel.app/contacto/gracias"></input>
          <input type="hidden" name="_captcha" value="false"></input>
        </form>
      </div>
    </main>
  )
}