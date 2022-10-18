import { useState, useEffect } from 'react'
import { Slider } from '@mui/material'
import ReactHammer from 'react-hammerjs'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import { PauseCircle, PlayCircle } from '@mui/icons-material'

export default function ThreeSixty(){

  // States
  const [frac, setFrac] = useState(1000)
  const [idx, setIdx] = useState(1)
  const [auto, setAuto] = useState(false)
  const [intval, setIntval] = useState(0)
  const [zoom, setZoom] = useState(false)

  // Constants
  const sens = 350
  const spd = 75
  const arr = []
  for (let i = 1; i <= 40 ; i++){
    arr.push(`/products/AW-T2008/360/${i}.webp`)
  }

  // Vars
  let tempIntval = 0

  // UseEffect
  useEffect(() => {
    setIdx(Math.ceil(frac/1000))
  }, [frac])
  useEffect(() => {
    handleAuto()
  }, [])

  // Functions
  function handleChange(v) { // Allows to change to specific image
    clearIntval()
    setFrac(v*1000)
  }
  function handlePan(e){ // Handles the panning
    if (e.direction == 2) { // Right
      clearIntval()
      if (idx < 40) {
        setFrac(frac + sens)
      } else if (idx == 40) {
        setFrac(1000)
      }
    } else if (e.direction == 4) { // Left
      clearIntval()
      if (idx > 1) {
        setFrac(frac - sens)
      } else if (idx == 1) {
        setFrac(40000)
      }
    }
  }
  function handleAuto(){ // Start the auto spin
    if (!auto && !zoom) {
      setAuto(true)
      tempIntval = setInterval(() => {
        setFrac(prev => prev <= 39500 ? prev + 1000 : 1000)
      }, spd)
      setIntval(tempIntval)
    }
  }
  function clearIntval(){ // Stop the auto spin
    clearInterval(intval)
    setAuto(false)
  }
  function toggleAuto(){ // Toggles auto spin. Doesnt work if zoom is active.
    auto && !zoom ? clearIntval() : handleAuto()
  }
  function toggleZoom(){ // Toggles zoom and pauses auto spin (if active)
    clearIntval()
    setZoom(!zoom)
  }

  return (
    <div id='threeSixtyContainer'>
      {!zoom 
        ? (<ReactHammer onPan={e => handlePan(e)} onDoubleTap={toggleZoom} onPinch={toggleZoom}>
            <div className='image-wrapper'>
              {/* <Image className='not-draggable' priority src={`/products/AW-T2008/360/${idx}.webp`} width='500px' height='500px' layout='fixed'></Image> */}
              {arr.map((e,i) => <img key={i} className={`not-draggable d-none ${i == idx-1 && 'd-block'}`} src={e} alt='360-image'/>)}
            </div>
          </ReactHammer>)
        : (
          <TransformWrapper
          initialScale={1.2}
          initialPositionX={0}
          initialPositionY={0}
          >
            <TransformComponent className='image-wrapper'>
              <img className='not-draggable zoomed' src={`/products/AW-T2008/360/${idx }-hq.webp`} alt='360-image-zoomed'/>
            </TransformComponent>
          </TransformWrapper>
        )
      }
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
        {!zoom && <button onClick={toggleAuto} className='mui-button'>
          {auto ? <PauseCircle fontSize='large'/> : <PlayCircle fontSize='large'/>}
        </button>}
        <button onClick={toggleZoom} className={`control-button ${zoom && `zoom-active`}`}>{!zoom ? 'Zoom' : 'Volver'}</button>
      </div>
    </div>
  )
}