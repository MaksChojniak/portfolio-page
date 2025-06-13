import { MdArrowForwardIos } from "react-icons/md";

import './style/Section.css'

interface SectionProps{
    text?: string[];
}

const Section = ( { text = ["section", "name"] } : SectionProps) => {
  
 
  return (
    <>
    <div className='section-name'>
      {text.map( (value, index) => (
        <span key={index} className="section-part">
          <MdArrowForwardIos/>{value}
        </span> 
      ))}  
    </div>
    </>
  )
}

export default Section