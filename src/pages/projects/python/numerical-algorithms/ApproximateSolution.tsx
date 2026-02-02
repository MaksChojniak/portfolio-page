import PageSectionName from './../../../../components/content/page-section/Section'
import PageTitle from './../../../../components/content/title/Title'
import PageLinkToContent from './../../../../components/content/link-to-content-page/Link'
import PageContent from './../../../../components/content/content/Content'

import LaTeX from '../../../../components/LaTeX/Latex'

import './../../style/style.css'

const ApproximateSolution = () => {
  return (
    <>
    <PageSectionName text={["Python", "Numerical-Algorithms"]}/>
    <PageTitle text={"Approximate Solution of Nonlinear Equations"} />
    <PageLinkToContent link={"https://github.com/MaksChojniak/Approximate-Solution-of-Nonlinear-Equations"}>https://github.com/Approximate-Solution-of-Nonlinear-Equations</PageLinkToContent>
    <PageContent>
      <div className='project-container'>
                
        <section  id='bisection' className='project-section'>
          <div className='games-section-title'>Bisection Method</div>
          <div>
             This is a robust root-finding method that repeatedly bisects an interval and then selects a sub-interval in which a root must lie for further processing. 
             It is guaranteed to converge if the function is continuous and has opposite signs at the interval's endpoints.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Find an isolation interval <LaTeX math={"[a, b]"}/> where <LaTeX math={"f(a) \\cdot f(b) < 0"}/>.</li>
              <li className='project-sublist-item' >Calculate the midpoint: <LaTeX math={"x = \\frac{a+b}{2}"}/></li>
              <li className='project-sublist-item' >If <LaTeX math={"f(a) \\cdot f(x) < 0"}/>, the root is in the left half, so update <LaTeX math={"b = x"}/>. Otherwise, update <LaTeX math={"a = x"}/>.</li>
              <li className='project-sublist-item' >Repeat until the interval width is less than the required precision.</li>
            </ol>
          </div>
        </section>

        <section  id='secant' className='project-section'>
          <div className='games-section-title'>Secant Method (Chord Method)</div>
          <div>
             The secant method approximates the root of a function by using a succession of roots of secant lines. 
             It does not require calculating derivatives, making it useful when the derivative of a function is difficult to compute.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Choose two initial points <LaTeX math={"x_0"}/> and <LaTeX math={"x_1"}/>.</li>
              <li className='project-sublist-item' >Iteratively calculate the next approximation:
                <div className='centered-latex'><LaTeX math={"x_i = x_{i-1} - f(x_{i-1}) \\frac{x_{i-1} - x_{i-2}}{f(x_{i-1}) - f(x_{i-2})}"}/></div>
              </li>
            </ol>
          </div>
        </section>

        <section  id='newtons' className='project-section'>
          <div className='games-section-title'>Newton's Method (Tangents)</div>
          <div>
             Newton's method uses the first derivative of a function to find its roots by following the tangent line at the current point to the x-axis. 
             It converges very quickly (quadratically) provided the initial guess is close enough to the actual root.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Choose a starting point <LaTeX math={"x_1"}/> (specifically where <LaTeX math={"f(x_1) \\cdot f''(x_1) > 0"}/>).</li>
              <li className='project-sublist-item' >Iteratively update the value:
                <div className='centered-latex'><LaTeX math={"x_i = x_{i-1} - \\frac{f(x_{i-1})}{f'(x_{i-1})}"}/></div>
              </li>
            </ol>
          </div>
        </section>

        <section  id='newton-raphson-fixed' className='project-section'>
          <div className='games-section-title'>Newton-Raphson with Fixed Derivative</div>
          <div>
             This variation of Newton's method uses the derivative calculated at the starting point <LaTeX math={"x_1"}/> for all subsequent iterations. 
             While it converges more slowly than the standard method, it saves computational effort by avoiding repeated derivative calculations.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Calculate the constant derivative value <LaTeX math={"f'(x_1)"}/> once.</li>
              <li className='project-sublist-item' >Iteratively calculate:
                <div className='centered-latex'><LaTeX math={"x_i = x_{i-1} - \\frac{f(x_{i-1})}{f'(x_1)}"}/></div>
              </li>
            </ol>
          </div>
        </section>

      </div>
    </PageContent>
    </>
  )
}

export default ApproximateSolution