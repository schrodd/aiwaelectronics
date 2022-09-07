import Image from "next/image"
import Link from 'next/link'
import NavItem from "../NavItem"
import menus from '../../content/menus'

export default function Nav() {
  return (
    <header>
      <nav>
        <Link href='/'>
            <a><Image width='150px' height='50px' src='/aiwa-w.svg' alt='Aiwa logo'/></a>
        </Link>
        <ul className='nav-item-container'>
          {menus.map((e,i) => (
          <NavItem text={e.name} link={e.link} key={i}>
            <e.icon />
          </NavItem>
          ))}
        </ul>
      </nav>
    </header>
  )
}