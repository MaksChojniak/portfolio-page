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
                
        <section  id='rectangular-left' className='project-section'>
          <div className='games-section-title'>Rectangular Method (Left-hand)</div>
          <div>
             This method approximates a definite integral by summing the areas of rectangles whose heights are determined by the function's value at the left endpoint of each sub-interval. 
             It is the simplest form of numerical integration and serves as a baseline for more complex methods.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Divide the interval <LaTeX math={"[a, b]"}/> into <LaTeX math={"n"}/> sub-intervals with step <LaTeX math={"h = \\frac{b-a}{n}"}/>.</li>
              <li className='project-sublist-item' >Calculate the approximate area:
                <div className='centered-latex'><LaTeX math={"I \\approx h \\sum_{i=0}^{n-1} f(x_i)"}/></div>
              </li>
            </ol>
          </div>
        </section>

        <section  id='trapezoidal' className='project-section'>
          <div className='games-section-title'>Trapezoidal Method</div>
          <div>
             The trapezoidal rule approximates the region under a curve as a series of trapezoids rather than rectangles. 
             This generally provides a more accurate approximation of the area, especially for functions with significant slopes.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Calculate the step size <LaTeX math={"h = \\frac{b-a}{n}"}/>.</li>
              <li className='project-sublist-item' >Apply the weighted sum formula:
                <div className='centered-latex'><LaTeX math={"I \\approx \\frac{h}{2} \\left[ f(x_0) + 2\\sum_{i=1}^{n-1} f(x_i) + f(x_n) \\right]"}/></div>
              </li>
            </ol>
          </div>
        </section>

        <section  id='simpson' className='project-section'>
          <div className='games-section-title'>Simpson's Method</div>
          <div>
             Simpson's rule uses quadratic polynomials (parabolas) to approximate the function across pairs of intervals. 
             It is much more accurate than the trapezoidal rule for smooth functions and requires an even number of sub-intervals.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Ensure <LaTeX math={"n"}/> is an even integer and calculate <LaTeX math={"h = \\frac{b-a}{n}"}/>.</li>
              <li className='project-sublist-item' >Apply the formula using alternating weights:
                <div className='centered-latex'><LaTeX math={"I \\approx \\frac{h}{3} \\left[ f(x_0) + 4\\sum_{i \\in \\{odd\\}} f(x_i) + 2\\sum_{i \\in \\{even\\}} f(x_i) + f(x_n) \\right]"}/></div>
              </li>
            </ol>
          </div>
        </section>

      </div>
    </PageContent>
    </>
  )
}

export default IntegrationMethods