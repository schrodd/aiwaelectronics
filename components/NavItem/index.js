import { useState } from "react"
import Link from "next/link"

export default function NavItem({text, link, isPopup, content}){
  const [menuVisible, setMenuVisible] = useState(false)
  function toggleMenu(){
    setMenuVisible(!menuVisible)
  }
  return (
    <li className={`nav-item ${text.toLowerCase()}`}>
      {isPopup
        ? <a onClick={toggleMenu}>{text.toUpperCase()}</a>
        : <Link href={link}><a>{text.toUpperCase()}</a></Link>}
      {menuVisible && content &&
      <div className={`nav-hover ${text.toLowerCase()}`} onClick={toggleMenu}>
        {content.map((e,i) => <Link href={e.link} key={i}>{e.name}</Link>)}
      </div>}
    </li>
  )
}