import { useState } from "react"
import Link from "next/link"

export default function NavItemMobile({text, link, isPopup, content, closeModal}){
  const [accordion, setAccordion] = useState(false)
  function toggleAccordion(){
    setAccordion(!accordion)
  }
  return (
    <li className={`nav-item ${text.toLowerCase()}`}>
      {isPopup
        ? <a onClick={toggleAccordion}>{text.toUpperCase()}</a>
        : <Link href={link}><a onClick={closeModal}>{text.toUpperCase()}</a></Link>}
      {accordion && content &&
      <div className={`nav-accordion ${text.toLowerCase()} ${accordion && 'active'}`} onClick={toggleAccordion}>
        {content && content.map((e,i) => <Link href={e.link} key={i}><a onClick={closeModal}>{e.name}</a></Link>)}
      </div>}
    </li>
  )
}