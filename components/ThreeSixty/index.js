import { useState, useEffect } from 'react'
import { Slider } from '@mui/material'
import ReactHammer from 'react-hammerjs'

export default function ThreeSixty(){
  const [frac, setFrac] = useState(1000)
  const [idx, setIdx] = useState(1)
  const [auto, setAuto] = useState(false)
  const [intval, setIntval] = useState(0)
  const [zoom, setZoom] = useState(false)
  const [vpos, setVpos] = useState(0)
  let tempIntval = 0
  const sens = 350
  const spd = 75
  useEffect(() => {
    setIdx(Math.ceil(frac/1000))
  }, [frac])
  useEffect(() => {
    handleAuto()
  }, [])
  function handleChange(v) {
    clearIntval()
    setFrac(v*1000)
  }
  function handlePan(e){
    if (e.direction == 2) { // right
      clearIntval()
      if (idx < 40) {
        setFrac(frac + sens)
      } else if (idx == 40) {
        setFrac(1000)
      }
    } else if (e.direction == 4) { // left
      clearIntval()
      if (idx > 1) {
        setFrac(frac - sens)
      } else if (idx == 1) {
        setFrac(40000)
      }
    } else if (e.direction == 8) { // up
      setVpos(vpos - 1)
      console.log(vpos)
    } else if (e.direction == 16) { // down
      setVpos(vpos + 1)
      console.log(vpos)
    }
  }
  function handleAuto(){
    if (!auto) {
      setAuto(true)
      tempIntval = setInterval(() => {
        setFrac(prev => prev <= 39500 ? prev + 1000 : 1000)
      }, spd)
      setIntval(tempIntval)
    }
  }
  function clearIntval(){
    clearInterval(intval)
    setAuto(false)
  }
  const arr = []
  for (let i = 1; i <= 40 ; i++){
    arr.push(`/products/AW-T2008/360/${i}.webp`)
  }
  function toggleAuto(){
    auto ? clearIntval() : handleAuto()
  }
  function toggleZoom(){
    clearIntval()
    setZoom(!zoom)
  }

  return (
    <div id='threeSixtyContainer'>
      <ReactHammer onPan={e => handlePan(e)} onDoubleTap={toggleZoom} onPinch={toggleZoom}>
        <div className='image-wrapper'>
          {/* <Image className='not-draggable' priority src={`/products/AW-T2008/360/${idx}.webp`} width='500px' height='500px' layout='fixed'></Image> */}
          {arr.map((e,i) => <img key={i} className={`not-draggable d-none ${i == idx-1 && 'd-block'} ${zoom && 'zoom'}`} src={e} alt='360-image'/>)}
        </div>
      </ReactHammer>
      <div className='controls'>
        <Slider
          className='slider'
          aria-label="Image"
          defaultValue={idx}
          min={1}
          max={40}
          value={idx}
          valueLabelDisplay='off'
          onChange={(e,v) => handleChange(v)}
        />
        <button onClick={toggleAuto}>{auto ? 'Stop' : 'Play'}</button>
        <button onClick={() => handleChange(20)}>Etiqueta</button>
        <button onClick={() => handleChange(5)}>Lateral</button>
        <button onClick={toggleZoom}>Zoom</button>
      </div>
    </div>
  )
}