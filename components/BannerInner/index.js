export default function BannerInner({logo, name, cta, justifyContent, posLeft, posTop}){
  return (
    <div className='banner-inner' style={{justifyContent: justifyContent, left: posLeft, top: posTop}}>
      <img src={logo}/>
      <button className={name}>{cta}</button>
    </div>
  )
}