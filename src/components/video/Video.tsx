import './style/Style.css'

interface VideoProps{
    src:  string,
    alternative_text?: string | React.ReactNode
    controls?: boolean
    autoPlay?: boolean
    loop?: boolean
    muted?: boolean
}

const Video = ( { src, 
    alternative_text="Your browser does not support the video tag.", 
    controls=true, autoPlay=true, loop=true, muted=true} : VideoProps) => {

  return (
    <>
    <video className='image'
        src={src} controls={controls} autoPlay={autoPlay} loop={loop} muted={muted} >
        {alternative_text}
    </video>
    </>
  )
}

export default Video