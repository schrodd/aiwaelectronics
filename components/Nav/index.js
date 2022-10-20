import Image from "next/image"
import Link from 'next/link'
import { useState } from "react"
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import SocialContainer from "../SocialContainer"
import menus from "../../content/menus"
import NavItem from '../NavItem'
import StoreButton from '../StoreButton'

export default function Nav() {
  const [modalOpen, setModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  function handleBurger(){
    setModalOpen(!modalOpen)
    document.body.style.overflow = modalOpen ? 'visible' : 'hidden'
  }
  return (
    <header>
      <div className={`modal ${!modalOpen && 'd-none'}`}>
        <button className='mobile-only' onClick={handleBurger}><CloseIcon fontSize="large"/></button>
        {menus.map((e,i) => <NavItem menu={e} key={i} activeTab={activeTab} setActive={setActiveTab} closeModal={handleBurger}/>)}
        <SocialContainer mobile/>
      </div>
      <nav>
        <Link href='/'>
            <a><Image width='150px' height='50px' src='/aiwa-w.svg' alt='Aiwa logo'/></a>
        </Link>
        <ul className='pc-only'>
          {menus.map((e,i) => <NavItem menu={e} key={i} activeTab={activeTab} setActive={setActiveTab}/>)}
        </ul>
        <div className='right-zone pc-only'>
          <StoreButton />
        </div>
        <button className='mobile-only' onClick={handleBurger}><MenuIcon fontSize="large"/></button>
      </nav>
    </header>
  )
}