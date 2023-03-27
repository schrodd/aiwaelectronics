import Image from "next/image"
import { useEffect } from "react"

export default function LineBanner({line}) {
  useEffect(() => {
    if (window.innerWidth < 850) {
      document.querySelector('.banner').src = line.bannerMobile
    }
  })
  return (
    <section className="line-banner">
      <div className="logo">
        <Image src={line.logo} alt={`logo ${line.name}`} fill/>
      </div>
      <h3>- {line.desc} -</h3>
      <Image className='banner' src={line.banner} alt={`banner ${line.name}`} fill priority/>
    </section>
  )
}