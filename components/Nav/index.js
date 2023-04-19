import Link from 'next/link'
import { useState } from "react"
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import SocialContainer from "../SocialContainer"
import menus from "../../content/menus"
import NavItem from '../NavItem'
import StoreButton from '../StoreButton'
import SearchButton from '../SearchButton'

export default function Nav() {
  const [modalOpen, setModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  function handleBurger(){
    setModalOpen(!modalOpen)
    document.body.style.overflow = modalOpen ? 'visible' : 'hidden'
  }
  return (
    <header id='header-nav'>
      <div className={`modal ${!modalOpen && 'd-none'}`}>
        <button className='mobile-only' onClick={handleBurger}><CloseIcon fontSize="large"/></button>
        {menus.map((e,i) => <NavItem menu={e} key={i} activeTab={activeTab} setActive={setActiveTab} closeModal={handleBurger}/>)}
        <SearchButton large closeModal={handleBurger}/>
        <SocialContainer mobile/>
      </div>
      <nav>
        <Link href='/'>
            <img id='main-logo' src='/aiwa-w.svg' alt='Aiwa logo'/>
        </Link>
        <ul className='pc-only'>
          {menus.map((e,i) => <NavItem menu={e} key={i} activeTab={activeTab} setActive={setActiveTab}/>)}
        </ul>
        <div className='right-zone pc-only'>
          <StoreButton />
          <SearchButton />
          <SocialContainer />
        </div>
        <button className='mobile-only' onClick={handleBurger}><MenuIcon fontSize="large"/></button>
      </nav>
    </header>
  );
}