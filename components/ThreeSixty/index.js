import { useState } from 'react'
import Image from 'next/image'
import { Slider } from '@mui/material'

export default function ThreeSixty(){
  const [image, setImage] = useState('/products/AW-T2008/360/1.webp')
  const [auto, setAuto] = useState(false);
  function handleChange(v) {
    setAuto(false)
    setIndex(v)
    setImage(`/products/AW-T2008/360/${v}.webp`)
  }
  function start(){
    setAuto(true)
  }
  if (auto) {
    setTimeout(()=>handleChange)
  }
  return (
    <div
    style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "3px solid red", margin: "10px", position: "relative"}}>
      <div>
        <Image priority src={image} width='500px' height='500px' layout='fixed'></Image>
      </div>
      <Slider
        style={{width: "200px", position: "absolute", bottom: "20px", left: "50px"}}
        aria-label="Image"
        defaultValue={1}
        valueLabelDisplay="auto"
        min={1}
        max={40}
        onChange={(e,v) => handleChange(v)}
      />
      <button onClick={()=>start()}></button>
    </div>
  )
}