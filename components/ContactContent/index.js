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
    { value: 'soporte', desc: 'Soporte Técnico', to: 'fe90a362e67d5bec0dae4a99224c6e5c', cc: 'andres_alejandro_rodriguez@hotmail.com,gelupeyi@mailgolem.com'},
    { value: 'postventa', desc: 'Postventa (Atención al Retail)', to: 'amolina@totalhome.com.ar', cc: ''},
    { value: 'atencion', desc: 'Atención al Cliente', to: 'amolina@totalhome.com.ar', cc: ''},
    { value: 'comercial', desc: 'Comercial', to: 'amolina@totalhome.com.ar', cc: ''},
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
            <input type="hidden" name="_cc" value={cc}/>
            <input type="hidden" name="_next" value="https://aiwaelectronics.com.ar"/>
            <input type="hidden" name="_captcha" value="false"/>
            <input type="hidden" name="_template" value="box"/>
          </FormControl>
        </form>
      </div>
    </main>
  )
}