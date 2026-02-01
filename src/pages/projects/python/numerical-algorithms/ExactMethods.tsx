import PageSectionName from './../../../../components/content/page-section/Section'
import PageTitle from './../../../../components/content/title/Title'
import PageLinkToContent from './../../../../components/content/link-to-content-page/Link'
import PageContent from './../../../../components/content/content/Content'

import LaTeX from '../../../../components/LaTeX/Latex'

import './../../style/style.css'

const ExactMethods = () => {
  return (
    <>
    <PageSectionName text={["Python", "Numerical-Algorithms"]}/>
    <PageTitle text={"Exact Methods for Solving Linear Systems"} />
    <PageLinkToContent link={"https://github.com/MaksChojniak/Exact-Methods-for-Solving-Linear-Systems"}>https://github.com/Exact-Methods-for-Solving-Linear-Systems</PageLinkToContent>
    <PageContent>
      <div className='project-container'>
                
        <div className='project-section'>
          <div className='games-section-title'>Gaussian Elimination</div>
          <div>
            Gaussian elimination transforms a system of linear equations into an upper triangular form that can be solved efficiently. 
            It is a fundamental direct method for solving linear systems.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >For each pivot row <LaTeX math={"k"}/>:
                <div className='centered-latex'><LaTeX math={"m_{i k} = \\frac{a_{i k}}{a_{k k}}"}/></div>
              </li>
              <li className='project-sublist-item' >Eliminate lower elements:
                <div className='centered-latex'><LaTeX math={"a_{i*} = a_{i*} - m_{ik} a_{k*}"}/></div>
              </li>
              <li className='project-sublist-item' >Perform back substitution:
                <div className='centered-latex'><LaTeX math={"x_i = \\frac{1}{a_{i i}} \\left( b_i - \\sum_{j=i+1}^{n} a_{i j} x_j \\right)"}/></div>
              </li>
            </ol>
          </div>
        </div>

        <div className='project-section'>
          <div className='games-section-title'>LU Decomposition</div>
          <div>
            LU decomposition factors a matrix into lower and upper triangular matrices, making it easier to solve multiple systems with the same coefficient matrix.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Decompose:
                <div className='centered-latex'><LaTeX math={"A=LU"}/></div>
              </li>
              <li className='project-sublist-item' >Solve:
                <div className='centered-latex'><LaTeX math={"Ly=b"}/></div>
                <div className='centered-latex'><LaTeX math={"Ux=y"}/></div>
              </li>
              <li className='project-sublist-item' >Reuse <LaTeX math={"L"}/> and <LaTeX math={"U"}/> for multiple right-hand sides</li>
            </ol>
          </div>
        </div>

        </div>
    </PageContent>
    </>
  )
}

export default ExactMethods