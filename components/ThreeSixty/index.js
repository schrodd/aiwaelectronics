import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Slider } from '@mui/material'
import ReactHammer from 'react-hammerjs'

export default function ThreeSixty(){
  const [frac, setFrac] = useState(1000)
  const [idx, setIdx] = useState(1)
  const [auto, setAuto] = useState(false)
  const [intval, setIntval] = useState(0)
  let tempIntval = 0
  const sens = 350
  const spd = 75
  useEffect(() => {
    setIdx(Math.ceil(frac/1000))
  }, [frac])
  function handleChange(v) {
    clearIntval()
    setIdx(v)
  }
  function handlePan(e){
    clearIntval()
    if (e.direction == 2) {
      if (idx < 40) {
        setFrac(frac + sens)
      } else if (idx == 40) {
        setFrac(1000)
      }
    } else if (e.direction == 4) {
      if (idx > 1) {
        setFrac(frac - sens)
      } else if (idx == 1) {
        setFrac(40000)
      }
    }
  }
  function handleAuto(){
    if (!auto) {
      setAuto(true)
      tempIntval = setInterval(() => {
        console.log(intval)
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

  return (
    <div id='threeSixtyContainer'>
      <ReactHammer onPan={e => handlePan(e)}>
        <div className='image-wrapper'>
          {/* <Image className='not-draggable' priority src={`/products/AW-T2008/360/${idx}.webp`} width='500px' height='500px' layout='fixed'></Image> */}
          {arr.map((e,i) => <img key={i} className={`not-draggable d-none ${i == idx-1 && 'd-block'}`} src={e} />)}
        </div>
      </ReactHammer>
      <div className='controls'>
        <Slider
          style={{width: "200px", position: "absolute", bottom: "20px", left: "50px"}}
          aria-label="Image"
          defaultValue={idx}
          min={1}
          max={40}
          value={idx}
          valueLabelDisplay='off'
          onChange={(e,v) => handleChange(v)}
        />
        <button onClick={handleAuto} style={{marginBottom: "20px", padding: "3px 8px"}}>Play</button>
        <button onClick={clearIntval} style={{marginBottom: "20px", padding: "3px 8px"}}>Stop</button>
      </div>
    </div>
  )
}