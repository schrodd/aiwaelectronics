import Link from "next/link"
import Image from "next/image"

export default function Banner({link, image, mobile, alt}){
  link = link ? link : '/'
  return (
    <Link href={link}>
      <a>
        <figure className='desktop'>
          <Image alt={alt} src={image} layout='responsive' width='1920' height='450' priority/>
        </figure>
        <figure className='mobile'>
          <Image alt={alt} src={mobile} layout='responsive' width='600' height='736' priority/>
        </figure>
      </a>
    </Link>
  )
}