import Image from "next/image"
import Link from 'next/link'
import { useState, useEffect } from "react"
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import SocialContainer from "../SocialContainer"
import menus from "../../content/menus"
import NavItem from '../NavItem'

export default function Nav() {
  const [isMobile, setMobile] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  useEffect(()=>{
    setMobile(window.screen.width <= 850 ? true : false)
  }, [])
  function handleBurger(){
    setModalOpen(!modalOpen)
    document.body.style.overflow = navModal ? 'visible' : 'hidden'
  }
  console.log(isMobile)
  return (
    <header>
      <nav>
        <Link href='/'>
            <a><Image width='150px' height='50px' src='/aiwa-w.svg' alt='Aiwa logo'/></a>
        </Link>
        <ul>
          {menus.map((e,i) => <NavItem menu={e} key={i} activeTab={activeTab} setActive={setActiveTab}/>)}
        </ul>
      </nav>
    </header>
  )
}