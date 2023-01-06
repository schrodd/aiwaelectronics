import Link from "next/link"
import { useRouter } from 'next/router'

export default function NavItem({menu, activeTab, setActive, closeModal}){
  const router = useRouter()
  const activePath = router.asPath
  function toggleHover(){
    if (activeTab === menu.id) {
      setActive(0)
    } else {
      setActive(menu.id)
    }
    if (!menu.content) {
      setActive(0)
    }
  }
  function toggleHoverModal(){
    closeModal && closeModal()
    toggleHover()
  }
  function isActive(){
    if (menu.content){
      if (menu.content.find(e => e.link == activePath)){
        return "true"
      } else {
        return undefined
      }
    } else {
      if (menu.link == activePath) {
        return "true"
      } else {
        return undefined
      }
    }
  }
  return (
    <li className={`${menu.name.toLowerCase()}`}>
      {menu.isPopup
      ? <button onClick={toggleHover} active={isActive()}>{menu.name.toUpperCase()}</button>
      : <button active={isActive()}><Link
        href={menu.link}
        onMouseEnter={(toggleHoverModal)}
        target={menu.targetBlank ? '_blank' : undefined}>{menu.name.toUpperCase()}</Link></button>}
      {menu.content &&
      <div className={`nav-hover ${activeTab === menu.id && "active"}`}>
        {menu.content.map((e,i) => <Link
          key={i}
          href={e.link}
          onClick={closeModal ? toggleHoverModal : toggleHover}>{e.name}</Link>)}
      </div>}
    </li>
  );
}