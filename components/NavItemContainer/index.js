import menus from '../../content/menus'
import NavItem from '../NavItem'
import NavItemMobile from '../NavItemMobile'

export default function NavItemContainer({mobile, closeModal}){
  console.log(mobile)
  return (
    <ul className={`nav-item-container ${mobile && 'mobile'}`}>
      {!mobile
      ? menus.map((e,i) => <NavItem text={e.name} link={e.link} key={i} isPopup={e.isPopup} content={e.content}/>)
      : menus.map((e,i) => <NavItemMobile text={e.name} link={e.link} key={i} isPopup={e.isPopup} content={e.content} closeModal={closeModal}/>)}
    </ul>
  )
}