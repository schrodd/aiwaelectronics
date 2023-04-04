import TextField from '@mui/material/TextField'
import Link from 'next/link'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react'

export default function SupportForms({type}){
  const [commercial, setCommercial] = useState(undefined)
  const config = {
    inputName: {
      name: 'nombre',
      label: 'Nombre y apellido',
      variant: 'standard',
      fullWidth: true,
      required: true
    },
    inputNameMayorista: {
      name: 'nombre',
      label: 'Nombre o Razón Social',
      variant: 'standard',
      fullWidth: true,
      required: true
    },
    inputEmail: {
      name: 'email',
      label: 'Email',
      variant: 'standard',
      fullWidth: true,
      type: 'email',
      required: true
    },
    inputPhone: {
      name: 'telefono',
      label: 'Teléfono',
      variant: 'standard',
      fullWidth: true,
      type: 'number',
      required: true
    },
    inputMessage: {
      name: 'mensaje',
      label: 'Mensaje',
      variant: 'standard',
      fullWidth: true,
      multiline: true,
      minRows: '3',
      required: true
    }
  }
  return (
    <>
      {type == 'soporte' && (
       <>
        <h3>Exclusivo para Servicio Técnico al Consumidor Final, Garantías y Repuestos</h3>
        <TextField className="form-text name" {...config.inputName}/>
        <TextField className="form-text email" {...config.inputEmail}/>
        <TextField className="form-text phone" {...config.inputPhone}/>
        <TextField className="form-text message" {...config.inputMessage}/>
        <button type='submit'>Enviar</button>
       </>
      )}
      {type == 'postventa' && (
        <>
          <h3>Exclusivo para atención a comercios y red de compras</h3>
          <TextField className="form-text name" {...config.inputName}/>
          <TextField className="form-text email" {...config.inputEmail}/>
          <TextField className="form-text phone" {...config.inputPhone}/>
          <TextField className="form-text message" {...config.inputMessage}/>
          <button type='submit'>Enviar</button>
        </>
      )}
      {type == 'atencion' && (
        <>
          <h3>Consultas generales sobre productos y funciones</h3>
          <Link className='btn' href='/soporte'>También podés buscar tu producto acá</Link>
          <TextField className="form-text name" {...config.inputName}/>
          <TextField className="form-text email" {...config.inputEmail}/>
          <TextField className="form-text phone" {...config.inputPhone}/>
          <TextField className="form-text message" {...config.inputMessage}/>
          <button type='submit'>Enviar</button>
        </>
      )}
      {type == 'comercial' && (
        <>
          <h3>Consultas comerciales</h3>
          <FormControl sx={{marginTop: "20px", marginBottom: "-10px"}}>
            <RadioGroup row name="unidades" value={commercial}>
              <FormControlLabel value="menos de 50" control={<Radio />} onChange={e => setCommercial(e.target.value)} label="Menos de 50 unidades" />
              <FormControlLabel value="50 o mas" control={<Radio />} onChange={e => setCommercial(e.target.value)} label="50 Unidades o más" />
            </RadioGroup>
          </FormControl>
          {commercial && 
            <>
              <TextField className="form-text zone" name='zona' label="Zona de comercialización" variant="standard" fullWidth required/>
              <TextField className="form-text name" name='nombre' label="Nombre o razón social" variant="standard" fullWidth required/>
              <TextField className="form-text email" {...config.inputEmail}/>
              <TextField className="form-text phone" {...config.inputPhone}/>
              <TextField className="form-text message" {...config.inputMessage}/>
              <button type='submit'>Enviar</button>
            </>
          }
        </>
      )}
      {type == 'marketing' && (
        <>
          <h3>Propuestas y consultas relacionadas al Marketing</h3>
          <TextField className="form-text name" {...config.inputName}/>
          <TextField className="form-text email" {...config.inputEmail}/>
          <TextField className="form-text phone" {...config.inputPhone}/>
          <TextField className="form-text message" {...config.inputMessage}/>
          <button type='submit'>Enviar</button>
        </>
      )}
      {type == 'recursos' && (
        <>
          <h3>Recursos Humanos - Consultas y Postulaciones</h3>
          <p className='rrhh-text'>
          Compartinos tu CV vía e-mail a a <a href='mailto:rrhh@totalhome.com.ar'>rrhh@totalhome.com.ar</a> indicando en el asunto el área de interés (Administración y Finanzas, Logística y Depósito, Comercio Exterior, Marketing y Diseño o Atención al Cliente/Recepción)
          </p>
        </>
      )}
    </>
  )
}