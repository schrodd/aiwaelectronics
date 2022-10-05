import menus from '../../content/menus'
import NavItem from '../NavItem'
import { useState } from 'react'

export default function NavItemContainer({className}){
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ul className={`nav-item-container ${className}`}>
      {menus.map((e,i) => (
        <NavItem text={e.name} link={e.link} key={i} isPopup={e.isPopup}/>
      ))}
    </ul>
  )
}