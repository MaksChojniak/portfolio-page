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
                
        <section id='thomas' className='project-section'>
          <div className='games-section-title'>Thomas Algorithm (Tridiagonal Systems)</div>
          <div>
             The Thomas algorithm is a highly efficient simplification of Gaussian elimination designed specifically for tridiagonal matrices. 
             It reduces the computational complexity from <LaTeX math={"O(n^3)"}/> to <LaTeX math={"O(n)"}/> by focusing only on the non-zero diagonals
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Forward Elimination: Compute auxiliary coefficients <LaTeX math={"\\beta"}/> and <LaTeX math={"\\gamma"}/>:
                <div className='centered-latex'><LaTeX math={"\\beta_1 = -\\frac{c_1}{b_1}"}/></div>
                <div className='centered-latex'><LaTeX math={"\\gamma_1 = \\frac{d_1}{b_1}"}/></div>
                <li className='project-sublist-item' >For <LaTeX math={"i = 2"}/> to <LaTeX math={"n"}/>:
                  <div className='centered-latex'><LaTeX math={"\\beta_i = -\\frac{c_i}{a_i \\beta_{i-1} + b_i}"}/></div>
                  <div className='centered-latex'><LaTeX math={"\\gamma_i = \\frac{d_i - a_i \\gamma_{i-1}}{a_i \\beta_{i-1} + b_i}"}/></div>
                </li>
              </li>
              <li className='project-sublist-item' >Back Substitution:
                <li className='project-sublist-item' >Start with the last unknown: <LaTeX math={"x_n = \\gamma_n"}/>.</li>
                <li className='project-sublist-item' >For <LaTeX math={"i = n-1"}/> down to <LaTeX math={"1"}/>: <LaTeX math={"x_i = \\beta_i x_{i+1} + \\gamma_i"}/>.</li>
              </li>
            </ol>
          </div>
        </section>

        </div>
    </PageContent>
    </>
  )
}

export default ExactMethods