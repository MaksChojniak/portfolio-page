import './style/Title.css'


interface TitleProps{
    text?: string,
}

const Title = ( {text="Title",} : TitleProps) => {

  return (
    <>
    <div className='content-title' >{text}</div>
    </>
  )
}

export default Title