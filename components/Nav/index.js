import Image from "next/image"
import Link from 'next/link'
import NavItem from "../NavItem"
import menus from '../../content/menus'
import SocialContainer from "../SocialContainer"
import { useState, useEffect } from "react"
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

export default function Nav() {
  const [width, setWidth] = useState(0)
  const [navModal, setNavModal] = useState(false)
  useEffect(()=>{
    setWidth(window.screen.width)
  }, [])
  function handleBurger(){
    setNavModal(!navModal)
  }

  return (
    <header>
      <nav className={`${width < 850 ? "mobile" : "desktop"}`}>
        <Link href='/'>
            <a><Image width='150px' height='50px' src='/aiwa-w.svg' alt='Aiwa logo'/></a>
        </Link>
        { width > 850
        ? <>
            <ul className='nav-item-container'>
              {menus.map((e,i) => (
              <NavItem text={e.name} link={e.link} key={i}>
                {/* <e.icon /> */}
              </NavItem>
              ))}
            </ul>
            <SocialContainer />
          </>
        : <button className='burger' onClick={handleBurger}><MenuIcon fontSize='large'/></button> }
        { navModal &&
        <div id='nav-modal-open' onClick={handleBurger}>
          <button className='close' onClick={handleBurger}><CloseIcon fontSize='large'/></button>
          <ul className='nav-item-container mobile'>
            {menus.map((e,i) => (
              <NavItem text={e.name} link={e.link} key={i}>
                {/* <e.icon /> */}
              </NavItem>
            ))}
          </ul>
          <SocialContainer />
        </div> }
      </nav>
    </header>
  )
}