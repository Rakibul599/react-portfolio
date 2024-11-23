function getUrlimg(name:string)
{
    return new URL(`../assets/skills/${name}`,import.meta.url).href
}
export {getUrlimg}