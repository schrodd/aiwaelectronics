import Image from "next/legacy/image"

export default function ProductBanners({banners, line}) {
  return (
    <section className='product-banners' line={line}>
      {banners.map((e,i) => (
        <div className={`product-banner ${i%2==0 && 'inv'}`} key={i}>
          <div className='img-wrapper'>
            <Image src={e.img} alt={e.title} width='800' height='350' sizes='100vw' priority={e.priority ? 'true' : 'false'}/>
          </div>
          <div className='text'>
            <h3>{e.title}</h3>
            <p>{e.desc}</p>
          </div>
        </div>
      ))}
    </section>
  )
}