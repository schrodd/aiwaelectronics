import Link from "next/link"

export default function NavItem({text, link, children}){
  return (
    <li className='nav-item'>
      <Link href={link}><a>{text}{children}</a></Link>
    </li>
  )
}