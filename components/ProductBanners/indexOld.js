import Image from "next/legacy/image"
import bannerList from '../../content/banners'

export default function ProductBanners({banners, line}) {
  const bannersArr = []
  banners.forEach(e => {
    bannersArr.push({...bannerList.find(f => e.id == f.id), customTitle: e.customTitle, customDesc: e.customDesc, customImg: e.customImg, priority: e.priority})
  })
  return (
    <section className='product-banners' line={line}>
      {bannersArr.map((e,i) => (
        <div className={`product-banner ${i%2==0 && 'inv'}`} key={i}>
          <div className='img-wrapper'>
            <Image src={e.customImg ? e.customImg : e.img} alt={e.title} width='800' height='350' sizes='100vw' priority={e.priority}/>
          </div>
          <div className='text'>
            <h3>{e.customTitle ? e.customTitle : e.title}</h3>
            <p>{e.customDesc ? e.customDesc : e.desc}</p>
          </div>
        </div>
      ))}
    </section>
  )
}