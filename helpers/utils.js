export function toProper(str){
  return str.replace(/(^\w|\s\w)/g, firstCharOfWord => firstCharOfWord.toUpperCase())
}
export function buildYoutubeIframe(title, link) {
  return <iframe width="1280" height="720" src={link} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
}