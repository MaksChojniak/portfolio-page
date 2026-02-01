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
                
        <div className='project-section'>
          <div className='project-section-title'>Bisection Method</div>
          <div>
            The bisection method finds roots of continuous functions by repeatedly halving an interval where the function changes sign. It is robust and guaranteed to converge.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Choose interval <LaTeX math={"[a,b]"}/> with:
                <div className='centered-latex'><LaTeX math={"f(a) f(b) < 0"}/></div>
              </li>
              <li className='project-sublist-item' >Compute midpoint:
                <div className='centered-latex'><LaTeX math={"c = \\frac{a + b}{2}"}/></div>
              </li>
              <li className='project-sublist-item' >Replace the interval endpoint based on sign</li>
              <li className='project-sublist-item' >Repeat until interval is small enough</li>
            </ol>
          </div>
        </div>

        <div className='project-section'>
          <div className='project-section-title'>Secant Method</div>
          <div>
            The secant method is a root-finding technique that approximates derivatives numerically, making it faster than bisection without requiring analytical derivatives.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Start with two initial points <LaTeX math={"x_0, x_1"}/></li>
              <li className='project-sublist-item' >Iterate:
                <div className='centered-latex'><LaTeX math={"x_{k+1} = x_k - \\frac{f(x_k)(x_k - x_{k-1})}{f(x_k) - f(x_{k-1})}"}/></div>
              </li>
              <li className='project-sublist-item' >Continue until convergence</li>
            </ol>
          </div>
        </div>

      </div>
    </PageContent>
    </>
  )
}

export default ApproximateSolution