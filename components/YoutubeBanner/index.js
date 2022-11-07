import YouTubeIcon from '@mui/icons-material/YouTube';

export default function YoutubeBanner() {
  return (
    <section className='youtube-banner'>
      <YouTubeIcon />
      <div className='text'>
        <h2>Seguinos en Youtube</h2>
        <p>Mantenete al dia con nuestros últimos lanzamientos</p>
        <button>
          <a href='https://www.youtube.com/channel/UCRkTF2nWEUD3-KcAwwoVwrg' target='_blank' rel='noopener noreferrer'>
            Ir al canal
          </a>
        </button>
      </div>
    </section>
  )
}