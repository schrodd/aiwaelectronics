import { useState } from "react"

export default function NavItem({text, link, children, isPopup}){
  const [menuVisible, setMenuVisible] = useState(false)
  function toggleMenu(){
    setMenuVisible(!menuVisible)
  }
  return (
    <li className={`nav-item ${text.toLowerCase()}`}>
      <a onClick={toggleMenu}>{text}</a>
      {menuVisible &&
      <div className='nav-hover'>
        <h3>Audio</h3>
        <p>Parlantes</p>
        <p>Auriculares</p>
      </div>}
    </li>
  )
}