import './style/style.css'

const LaTeX = ({math} : {math: string}) => {

  return (
    <>
    {/* <div className='latex-container'> */}
      <img className='latex' src={"https://latex.codecogs.com/svg.image?\\inline&space; \\boldsymbol{ \\color{white}{" + math + "}}"} />
    {/* </div> */}
    </>
  )
}

export default LaTeX