import Image from "next/image"
import Link from 'next/link'
import { useState, useEffect } from "react"
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import SocialContainer from "../SocialContainer"
import menus from "../../content/menus"
import NavItem from '../NavItem'

export default function Nav() {
  const [modalOpen, setModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  function handleBurger(){
    setModalOpen(!modalOpen)
    document.body.style.overflow = navModal ? 'visible' : 'hidden'
  }
  return (
    <header>
      <nav>
        <Link href='/'>
            <a><Image width='150px' height='50px' src='/aiwa-w.svg' alt='Aiwa logo'/></a>
        </Link>
        <ul className='pc-only'>
          {menus.map((e,i) => <NavItem menu={e} key={i} activeTab={activeTab} setActive={setActiveTab}/>)}
        </ul>
        <button className='mobile-only'><MenuIcon fontSize="large"/></button>
      </nav>
    </header>
  )
}