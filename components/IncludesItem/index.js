import Image from "next/image"

export default function IncludesItem({item}) {
  return (
    <div className='includes-item'>
      <Image src={item.img} alt={item.name} width='100' height='100'/>
      <p>{item.name}</p>
    </div>
  )
}