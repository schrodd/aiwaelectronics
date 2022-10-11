import social from '../../content/social'
import useWindowSize from '../../hooks/useWindowSize'

export default function SocialContainer({mobile}){
  const { width } = useWindowSize()
  return (
    <ul className={`social-container ${mobile ? 'mobile-only' : 'pc-only'}`}>
      {social.map((e,i) => (
          <li className={`social-item ${e.class}`} key={i}>
            <a href={e.link} target='_blank' rel="noopener noreferrer">
              <e.icon />
            </a>
          </li>
      ))}
    </ul>
  )
}