import Image from "next/image"

export default function LineBanner({line}) {
  return (
    <section className="line-banner">
      <Image src={line.banner} alt={`banner ${line.name}`} fill/>
    </section>
  )
}