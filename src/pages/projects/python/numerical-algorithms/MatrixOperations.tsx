import PageSectionName from './../../../../components/content/page-section/Section'
import PageTitle from './../../../../components/content/title/Title'
import PageLinkToContent from './../../../../components/content/link-to-content-page/Link'
import PageContent from './../../../../components/content/content/Content'

import LaTeX from '../../../../components/LaTeX/Latex'

import './../../style/style.css'

const MatrixOperations = () => {
  let multiplication_latex = "C_{m \\times k} = A_{m \\times n} \\times B_{n \\times k}"
  let determinant_latex = "| A_{n \\times n} |"

  return (
    <>
    <PageSectionName text={["Python", "Numerical-Algorithms"]}/>
    <PageTitle text={"Matrix Operations"} />
    <PageLinkToContent link={"https://github.com/MaksChojniak/Matrix-Operations"}>https://github.com/Matrix-Operations/</PageLinkToContent>
    <PageContent>
      <div className='project-container'>
                
        <div className='project-section'>
          <div className='games-section-title'>Matrix Multiplication</div>
          <div>
              <div className='project-latex' ><LaTeX math={multiplication_latex}/></div>
          </div>
          <div className='games-section-title'>Determinant of a Square Matrix</div>
          <div>
              <div className='project-latex' ><LaTeX math={determinant_latex}/></div>
          </div>
        </div>
          
      </div>
    </PageContent>
    </>
  )
}

export default MatrixOperations