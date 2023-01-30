import Image from "next/legacy/image"
import Link from "next/link"

export default function LineContainer({line, logo, link}){
  return (
    <div className={`line-container ${line}`}>
      <div className='line-image-wrapper'>
        <Image src={logo} alt={`Logo línea ${line}`} layout='fill' objectFit='contain' />
      </div>
      <button>
        <Link href={link}>
          Conocelos
        </Link>
      </button>
    </div>
  );
}