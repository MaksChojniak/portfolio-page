
interface ImageProps{
    src:  string,
    alternative_text?: string
    width?: number
    height?: number
}

const Image = ( { src, width, height,
    alternative_text="Your browser does not support the video tag." } : ImageProps) => {

  return (
    <>
    <img src={src} alt={alternative_text} width={width} height={height}></img>
    </>
  )
}

export default Image