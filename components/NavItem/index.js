import Link from "next/link"

export default function NavItem({text, link, children}){
  return (
    <li className={`nav-item ${text.toLowerCase()}`}>
      <Link href={link}><a>{text.toUpperCase()}{children}</a></Link>
    </li>
  )
}