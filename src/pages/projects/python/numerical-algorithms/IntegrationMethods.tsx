import PageSectionName from './../../../../components/content/page-section/Section'
import PageTitle from './../../../../components/content/title/Title'
import PageLinkToContent from './../../../../components/content/link-to-content-page/Link'
import PageContent from './../../../../components/content/content/Content'

import LaTeX from '../../../../components/LaTeX/Latex'

import './../../style/style.css'

const IntegrationMethods = () => {
  return (
    <>
    <PageSectionName text={["Python", "Numerical-Algorithms"]}/>
    <PageTitle text={"Integration Methods"} />
    <PageLinkToContent link={"https://github.com/MaksChojniak/Integration-Methods"}>https://github.com/Integration-Methods</PageLinkToContent>
    <PageContent>
      <div className='project-container'>
                
        <div className='project-section'>
          <div className='project-section-title'>Trapezoidal Rule</div>
          <div>
            The trapezoidal rule approximates the area under a curve by dividing it into trapezoids. It provides a simple and efficient numerical integration method.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Divide interval into <LaTeX math={"n"}/> subintervals:
                <div className='centered-latex'><LaTeX math={"h = \\frac{b - a}{n}"}/></div>
              </li>
              <li className='project-sublist-item' >Apply:
                <div className='centered-latex'><LaTeX math={"\\int_a^b f(x)\\,dx \\approx \\frac{h}{2} \\left[ f(a) + 2 \\sum_{i=1}^{n-1} f(x_i) + f(b) \\right]"}/></div>
              </li>
            </ol>
          </div>
        </div>

        <div className='project-section'>
          <div className='project-section-title'>Simpson's Rule</div>
          <div>
            Simpson's rule approximates integrals using quadratic polynomials, giving higher accuracy than the trapezoidal rule for smooth functions.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Divide interval into even number of subintervals</li>
              <li className='project-sublist-item' >Apply:
                <div className='centered-latex'><LaTeX math={"\\int_a^b f(x)\\,dx \\approx \\frac{h}{3} \\left[ f(x_0) + 4 f(x_1) + 2 f(x_2) + \\dots + f(x_n) \\right]"}/></div>
              </li>
            </ol>
          </div>
        </div>

      </div>
    </PageContent>
    </>
  )
}

export default IntegrationMethods