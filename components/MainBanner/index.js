import Link from "next/link"
import Image from "next/image"

export default function MainBanner({banner, isFirst}){
  banner.link = banner.link ? banner.link : '/'
  return (
    <Link href={banner.link} className='main-banner'>
      {banner.text && (
        <div className='text' align={banner.text.align} valign={banner.text.valign}>
          <h2>{banner.text.title}</h2>
          <h3>{banner.text.subtitle}</h3>
          {banner.text.cta && (
            <button>{banner.text.cta}</button>
          )}
        </div>
      )}
      <figure className='desktop'>
        <Image alt={banner.alt} src={banner.img} fill priority={isFirst}/>
      </figure>
      <figure className='mobile'>
        <Image alt={banner.alt} src={banner.mobileImg} fill priority={isFirst}/>
      </figure>
    </Link>
  );
}