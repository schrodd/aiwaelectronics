import Link from "next/link"
import Image from "next/image"

export default function Banner({link, image, mobile, alt, title, desc, first}){
  link = link ? link : '/'
  return (
    <Link href={link}>
      <a className='category-banner'>
        <figure className='desktop'>
          <div className='text'>
            <h1>{title}</h1>
            <h2>{desc}</h2>
          </div>
          <Image alt={alt} src={image} layout='responsive' width='1920' height='450' priority={first}/>
        </figure>
        <figure className='mobile'>
          <Image alt={alt} src={mobile} layout='responsive' width='600' height='736' priority={first}/>
        </figure>
      </a>
    </Link>
  )
}