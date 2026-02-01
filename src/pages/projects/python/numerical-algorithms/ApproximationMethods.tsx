import PageSectionName from './../../../../components/content/page-section/Section'
import PageTitle from './../../../../components/content/title/Title'
import PageLinkToContent from './../../../../components/content/link-to-content-page/Link'
import PageContent from './../../../../components/content/content/Content'

import LaTeX from '../../../../components/LaTeX/Latex'

import './../../style/style.css'

const ApproximationMethods = () => {
  return (
    <>
    <PageSectionName text={["Python", "Numerical-Algorithms"]}/>
    <PageTitle text={"Approximation Methods"} />
    <PageLinkToContent link={"https://github.com/MaksChojniak/Approximation-Methods"}>https://github.com/Approximation-Methods</PageLinkToContent>
    <PageContent>
      <div className='project-container'>
                
        <div className='project-section'>
          <div className='games-section-title'>Least Squares Approximation</div>
          <div>
            Least squares approximation finds the function that best fits data in the sense of minimizing the total squared error between predicted and observed values.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Build system:
                <div className='centered-latex'><LaTeX math={"Ax \\approx b"}/></div>
              </li>
              <li className='project-sublist-item' >Solve normal equations:
                <div className='centered-latex'><LaTeX math={"A^T A x = A^T b"}/></div>
              </li>
              <li className='project-sublist-item' >Compute coefficients of the approximating function</li>
            </ol>
          </div>
        </div>

      </div>
    </PageContent>
    </>
  )
}

export default ApproximationMethods