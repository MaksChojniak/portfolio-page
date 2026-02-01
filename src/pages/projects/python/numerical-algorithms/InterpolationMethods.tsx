import PageSectionName from './../../../../components/content/page-section/Section'
import PageTitle from './../../../../components/content/title/Title'
import PageLinkToContent from './../../../../components/content/link-to-content-page/Link'
import PageContent from './../../../../components/content/content/Content'

import LaTeX from '../../../../components/LaTeX/Latex'

import './../../style/style.css'

const InterpolationMethods = () => {
  return (
    <>
    <PageSectionName text={["Python", "Numerical-Algorithms"]}/>
    <PageTitle text={"Interpolation Methods"} />
    <PageLinkToContent link={"https://github.com/MaksChojniak/Interpolation-Methods"}>https://github.com/Interpolation-Methods</PageLinkToContent>
    <PageContent>
      <div className='project-container'>
                
        <div className='project-section'>
          <div className='games-section-title'>Lagrange Interpolation </div>
          <div>
            Lagrange interpolation constructs a polynomial that passes exactly through all given data points. It is useful for reconstructing unknown values between measurements.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Build basis polynomials:
                <div className='centered-latex'><LaTeX math={"L_i(x) = \\prod_{j\\ne i}^{n} \\frac{x - x_j}{x_i - x_j}"}/></div>
              </li>
              <li className='project-sublist-item' >Form polynomial:
                <div className='centered-latex'><LaTeX math={"P(x) = \\sum_{i=0}^{n} y_i L_i(x)"}/></div>
              </li>
              <li className='project-sublist-item' >Evaluate polynomial at desired <LaTeX math={"x"}/></li>
            </ol>
          </div>
        </div>

        <div className='project-section'>
          <div className='games-section-title'>Newton Interpolation</div>
          <div>
            Newton interpolation builds a polynomial incrementally using divided differences, making it efficient when new data points are added.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Compute divided differences</li>
              <li className='project-sublist-item' >Construct polynomial:
                <div className='centered-latex'><LaTeX math={"P(x) = a_0 + a_1 (x - x_0) + a_2 (x - x_0)(x - x_1) + \\dots"}/></div>
              </li>
              <li className='project-sublist-item' >Evaluate polynomial at chosen point</li>
            </ol>
          </div>
        </div>

        </div>
    </PageContent>
    </>
  )
}

export default InterpolationMethods