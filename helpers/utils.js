export function toProper(str){
  return str.replace(/(^\w|\s\w)/g, firstCharOfWord => firstCharOfWord.toUpperCase())
}