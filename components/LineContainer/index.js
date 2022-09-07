import Image from "next/image"

export default function LineContainer({logo}){
  return (
    <div className='line-container'>
      <Image width='1500px' height='1500px' layout="responsive" src='/lineas/flama/bg.png'/>
    </div>
  )
}