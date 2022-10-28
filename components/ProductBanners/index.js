import Image from "next/image"

export default function ProductBanners({banners}) {
  return (
    <section className='product-banners' id='test-id'>
      {banners.map((e,i) => (
        <div className={`product-banner ${i%2==0 && 'inv'}`} key={i}>
          <div className='img-wrapper'>
            <Image src={e.link} alt={e.title} width='800' height='350' sizes='100vw'/>
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