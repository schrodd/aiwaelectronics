import NavItem from "../NavItem"
import menus from '../../content/menus'

export default function NavItemContainer({className}){
  return (
    <ul className={`nav-item-container ${className}`}>
      {menus.map((e,i) => (
        <NavItem text={e.name} link={e.link} key={i}>
          {/* <e.icon /> */}
        </NavItem>
      ))}
    </ul>
  )
}