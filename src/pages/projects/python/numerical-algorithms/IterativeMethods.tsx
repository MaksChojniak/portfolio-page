import PageSectionName from './../../../../components/content/page-section/Section'
import PageTitle from './../../../../components/content/title/Title'
import PageLinkToContent from './../../../../components/content/link-to-content-page/Link'
import PageContent from './../../../../components/content/content/Content'

import './../../style/style.css'

import LaTeX from '../../../../components/LaTeX/Latex'

const IterativeMethods = () => {
  return (
    <>
    <PageSectionName text={["Python", "Numerical-Algorithms"]}/>
    <PageTitle text={"Iterative Methods for Solving Linear Systems of Equations"} />
    <PageLinkToContent link={"https://github.com/MaksChojniak/Iterative-Methods-For-Solving-Linear-Systems-of-Equations"}>https://github.com/Iterative-Methods-For-Solving-Linear-Systems-of-Equations</PageLinkToContent>
    <PageContent>
      <div className='project-container'>
                
        <div className='project-section'>
          <div className='games-section-title'>Jacobi Method</div>
          <div>
            The Jacobi method is an iterative algorithm for solving large systems of linear equations, particularly useful when the system is sparse.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Initialize solution vector <LaTeX math={"x^{(0)}"}/></li>
              <li className='project-sublist-item' >Update:
                <div className='centered-latex'><LaTeX math={"P(x) = \\sum_{i=0}^{n} y_i L_i(x)"}/></div>
              </li>
              <li className='project-sublist-item' >Stop when difference between iterations is small</li>
            </ol>
          </div>
        </div>

        <div className='project-section'>
          <div className='games-section-title'>Gauss-Seidel Method</div>
          <div>
            Gauss-Seidel improves upon Jacobi by using newly computed values immediately, leading to faster convergence in many cases.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Start with initial guess</li>
              <li className='project-sublist-item' >Update:
                <div className='centered-latex'><LaTeX math={"x_i^{(k+1)} = \\frac{1}{a_{i i}} \\left( b_i - \\sum_{j < i} a_{i j} x_j^{(k+1)} - \\sum_{j > i} a_{i j} x_j^{(k)} \\right)"}/></div>
              </li>
              <li className='project-sublist-item' >Iterate until convergence</li>
            </ol>
          </div>
        </div>

        <div className='project-section'>
          <div className='games-section-title'>Newton–Raphson Method</div>
          <div>
            Newton’s method is a powerful root-finding algorithm that converges rapidly near the solution, commonly used for solving nonlinear equations.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Choose initial guess <LaTeX math={"x_0"}/></li>
              <li className='project-sublist-item' >Iterate:
                <div className='centered-latex'><LaTeX math={"x_{k+1} = x_k - \\frac{f(x_k)}{f'(x_k)}"}/></div>
              </li>
              <li className='project-sublist-item' >Stop when: <LaTeX math={"|x_{k+1} - x_k| < \\epsilon"}/></li>
            </ol>
          </div>
        </div>

      </div>
    </PageContent>
    </>
  )
}

export default IterativeMethods