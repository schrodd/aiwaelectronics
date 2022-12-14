import { useState, useEffect } from 'react'
import { Slider, Tooltip } from '@mui/material'
import ReactHammer from 'react-hammerjs'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import { Pause, PlayArrow, ZoomOutMap, ZoomInMap, Add, AspectRatio } from '@mui/icons-material'
import Head from 'next/head'
import Image from 'next/image'

export default function ThreeSixty({sku, top, shortDesc, fs, setFs}){ // sku (str), if it has top view or not (bool)
  // States 
  const [frac, setFrac] = useState(1000)
  const [idx, setIdx] = useState(1)
  const [auto, setAuto] = useState(false)
  const [intval, setIntval] = useState(0)
  const [zoom, setZoom] = useState(false)
  const [highlightOpen, setHighlightOpen] = useState(false)

 /*  const imageSize = {
    width: isFs ? '800px' : '460px',
    height: isFs ? '800px' : '460px',
  } */

  // Constants
  const sens = 350
  const spd = 75
  const arr = []
  for (let i = 1; i <= 40 ; i++){
    // arr.push(`/products/${sku}/360/${i}.webp`)  ///////// MOVED TO AIWA/FILESERVER, CHECK LINE 127 FOR HQ ROUTE AND 116 FOR TOP VIEW
    arr.push(`https://www.aiwaelectronics.com.ar/fileserver/products/${sku}/360/${i}.webp`)
  }

  // Vars
  let tempIntval = 0

  // UseEffect
  useEffect(() => {
    setIdx(Math.ceil(frac/1000))
  }, [frac])
  useEffect(() => {
    function firstStart(){ // Start the auto spin for the first time
      if (!auto && !zoom && !highlightOpen) {
        setAuto(true)
        tempIntval = setInterval(() => {
          setFrac(prev => prev <= 39500 ? prev + 1000 : 1000)
        }, spd)
        setIntval(tempIntval)
      }
    }
    firstStart()
  }, [])

  // Functions
  function handleChange(v) { // Allows to change to specific image
    clearIntval()
    setFrac(v*1000)
  }
  function handlePan(e){ // Handles panning
    if (!highlightOpen){
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
  }
  function clearIntval(){ // Stop auto spin
    clearInterval(intval)
    setAuto(false)
  }
  function toggleAuto(){ // Toggles auto spin. Doesnt work if zoom is active.
    auto && !zoom  && !highlightOpen ? clearIntval() : handleAuto()
  }
  function toggleZoom(){ // Toggles zoom and pauses auto spin (if active), closes highlight (if active)
    clearIntval()
    setHighlightOpen(false)
    setZoom(!zoom)
  }
  function toggleHighlight(){
    clearIntval()
    setHighlightOpen((prev) => !prev) // Trying new state update syntax, works like a charm!
    // This syntax takes a callback instead of a new value, that callback receives as a parameter the previous value of the state.
    // Its perfect for counters and toggles
  }
  function toggleFs(){
    setFs((prev) => !prev)
  }
  function handleAuto(){ // Start the auto spin
    if (!auto && !zoom && !highlightOpen) {
      setAuto(true)
      tempIntval = setInterval(() => {
        setFrac(prev => prev <= 39500 ? prev + 1000 : 1000)
      }, spd)
      setIntval(tempIntval)
    }
  }
  return (
    <div id='threeSixtyContainer'>
      <Head>
        <meta name = "viewport" content = "width=device-width, minimum-scale=1.0, maximum-scale = 1.0, user-scalable = no" key="no-scale"/>
      </Head>
      <div className='text'>
        <p className='sku'>{sku}</p>
        <h1>{shortDesc}</h1>
      </div>
      {!zoom 
        ? (<ReactHammer onPan={e => handlePan(e)} onPinch={toggleZoom}>
          <div className='image-wrapper' fullscreen={fs.toString()}>
            <div className='points-of-interest'>
              {highlightOpen && <TransformWrapper
              initialScale={1}
              initialPositionX={0}
              initialPositionY={0}>
                <TransformComponent>
                  <img className='zoom-icon' src='/components/threeSixty/zoom-icon.svg' alt='zoom-icon'/>
                  <img className='hl-image' src={`https://www.aiwaelectronics.com.ar/fileserver/products/${sku}/img/top.webp`} alt='hl-image'/>
                </TransformComponent>
              </TransformWrapper>}
            </div>
            {arr.map((e,i) => (
              <div key={i} className={`not-draggable d-none ${i == idx-1 && 'd-block'} ${highlightOpen && 'not-visible'}`} style={{position:'absolute'}}>
                <Image src={e} alt='360-image' width='750px' height='750px' priority/>
              </div>
            ))}
          </div>
        </ReactHammer>)
        : (<TransformWrapper
        initialScale={1}
        initialPositionX={0}
        initialPositionY={0}>
          <TransformComponent>
            <img className='zoom-icon' src='/components/threeSixty/zoom-icon.svg' alt='zoom-icon'/>
            <Image src={`https://www.aiwaelectronics.com.ar/fileserver/products/${sku}/360/${idx}-hq.webp`} className='not-draggable zoomed'alt='360-image-zoomed' width='750px' height='750px' unoptimized priority/>
          </TransformComponent>
        </TransformWrapper>)}
      <div className='controls'>
        <Slider
          disabled={highlightOpen}
          className='slider'
          aria-label="Image"
          defaultValue={idx}
          min={1}
          max={40}
          value={idx}
          valueLabelDisplay='off'
          onChange={(e,v) => handleChange(v)}/>
        <Tooltip title={auto ? 'Pausar' : 'Reproducir'} placement='top' arrow>
          <button onClick={toggleAuto} className={`mui-button play-pause ${auto && 'active'}`} disabled={highlightOpen || zoom}>
            {auto ? <Pause fontSize='large'/> : <PlayArrow fontSize='large'/>}
          </button>
        </Tooltip>
        <Tooltip title={zoom ? 'Volver' : 'Zoom'} placement='top' arrow>
          <button onClick={toggleZoom} className={`mui-button ${zoom && 'active'}`} disabled={highlightOpen}>
            {!zoom ? <ZoomOutMap fontSize='large'/> : <ZoomInMap fontSize='large'/>}
          </button>
        </Tooltip>
        {top && (
          <Tooltip title={highlightOpen ? 'Volver' : 'Ver panel superior'} placement='top' arrow>
            <button className={`mui-button hl-btn ${highlightOpen && 'close'}`} onClick={toggleHighlight} disabled={zoom}>
              <Add fontSize='large'/>
            </button>
          </Tooltip>
        )}
        <Tooltip title='Pantalla completa' placement='top' arrow>
            <button className={`mui-button fs-btn ${fs && 'active'}`} onClick={toggleFs} disabled={zoom}>
              <AspectRatio fontSize='large'/>
            </button>
        </Tooltip>
      </div>
    </div>
  )
}