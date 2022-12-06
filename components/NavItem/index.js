import Link from "next/link"

export default function NavItem({menu, activeTab, setActive, closeModal}){
  function toggleHover(){
    if (activeTab === menu.id) {
      setActive(0)
      console.log("a")
    } else {
      setActive(menu.id)
      console.log("b")
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
      ? <button onClick={toggleHover}>{menu.name.toUpperCase()}</button>
      : <button><Link href={menu.link}><a onMouseEnter={(toggleHoverModal)} target={menu.targetBlank ? '_blank' : undefined}>{menu.name.toUpperCase()}</a></Link></button>}
      {menu.content &&
      <div className={`nav-hover ${activeTab === menu.id && "active"}`}>
        {menu.content.map((e,i) => <Link key={i} href={e.link}><a onClick={closeModal ? toggleHoverModal : toggleHover}>{e.name}</a></Link>)}
      </div>}
    </li>
  )
}