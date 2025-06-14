import './style/Content.css'


interface ContentProps{
    children: React.ReactNode;
}

const Content = ( { children }: ContentProps) => {

  return (
    <>
    <div className='page-content'>{children}</div>
    </>
  )
}

export default Content