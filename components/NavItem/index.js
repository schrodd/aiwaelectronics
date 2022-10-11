import Link from "next/link"

export default function NavItem({menu, activeTab, setActive, closeModal}){
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
  return (
    <li className={`${menu.name.toLowerCase()}`}>
      {menu.isPopup
      ? <button onMouseEnter={(toggleHover)} onClick={toggleHover}>{menu.name.toUpperCase()}</button>
      : <button><Link href={menu.link}><a onMouseEnter={(toggleHover)}>{menu.name.toUpperCase()}</a></Link></button>}
      {activeTab === menu.id && 
      <div className='nav-hover' onMouseLeave={toggleHover}>
        {menu.content.map((e,i) => <Link key={i} href={e.link}><a onClick={closeModal ? toggleHoverModal : toggleHover}>{e.name}</a></Link>)}
      </div>}
    </li>
  )
}