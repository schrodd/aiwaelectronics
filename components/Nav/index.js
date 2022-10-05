import Image from "next/image"
import Link from 'next/link'
import SocialContainer from "../SocialContainer"
import { useState, useEffect } from "react"
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import NavItemContainer from "../NavItemContainer"

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
            <NavItemContainer />
            <SocialContainer />
          </>
        : <button className='burger' onClick={handleBurger}><MenuIcon fontSize='large'/></button> }
        { navModal &&
        <div id='nav-modal-open' onClick={handleBurger}>
          <button className='close' onClick={handleBurger}><CloseIcon fontSize='large'/></button>
          <NavItemContainer className='mobile' />
          <SocialContainer />
        </div> }
      </nav>
    </header>
  )
}