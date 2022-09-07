import social from '../../content/social'
import Link from 'next/link'

export default function SocialContainer(){
  return (
    <ul className='social-container'>
      {social.map((e,i) => (
          <li className={`social-item ${e.class}`} key={i}>
            <Link href={e.link}>
              <a>
                <e.icon />
              </a>
            </Link>
          </li>
      ))}
    </ul>
  )
}