import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Slider } from '@mui/material'
import ReactHammer from 'react-hammerjs'

export default function ThreeSixty(){
  const [frac, setFrac] = useState(1000)
  const [idx, setIdx] = useState(1)
  const sens = 250
  useEffect(() => {
    setIdx(Math.ceil(frac/1000))
  }, [frac])
  function handleChange(v) {
    setIdx(v)
  }
  function handlePan(e){
    if (e.direction == 2) {
      if (idx < 40) {
        setFrac(frac+sens)
      } else if (idx == 40) {
        setFrac(1000)
      }
    } else if (e.direction == 4) {
      if (idx > 1) {
        setFrac(frac-sens)
      } else if (idx == 1) {
        setFrac(40000)
      }
    }
  }

  return (
    <div
    style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "3px solid red", margin: "10px", position: "relative"}}>
      <ReactHammer onPan={e => handlePan(e)}>
        <div>
          <Image className='not-draggable' priority src={`/products/AW-T2008/360/${idx}.webp`} width='500px' height='500px' layout='fixed'></Image>
        </div>
      </ReactHammer>
      <Slider
        style={{width: "200px", position: "absolute", bottom: "20px", left: "50px"}}
        aria-label="Image"
        defaultValue={idx}
        valueLabelDisplay="auto"
        min={1}
        max={40}
        value={idx}
        onChange={(e,v) => handleChange(v)}
      />
      <button onClick={()=>start()}></button>
    </div>
  )
}