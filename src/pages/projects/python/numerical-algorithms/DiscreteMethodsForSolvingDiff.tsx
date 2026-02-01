import PageSectionName from './../../../../components/content/page-section/Section'
import PageTitle from './../../../../components/content/title/Title'
import PageLinkToContent from './../../../../components/content/link-to-content-page/Link'
import PageContent from './../../../../components/content/content/Content'

import LaTeX from '../../../../components/LaTeX/Latex'

import './../../style/style.css'

const DiscreteMethodsForSolvingDiff = () => {
  return (
    <>
    <PageSectionName text={["Python", "Numerical-Algorithms"]}/>
    <PageTitle text={"Discrete Methods for Solving Differential Equations"} />
    <PageLinkToContent link={"https://github.com/MaksChojniak/Discrete-Methods-For-Solving-Differential-Equations"}>https://github.com/Discrete-Methods-For-Solving-Differential-Equations</PageLinkToContent>
    <PageContent>
      <div className='project-container'>
                
        <div className='project-section'>
          <div className='project-section-title'>Euler Method</div>
          <div>
            Euler's method is the simplest numerical technique for solving ordinary differential equations by stepping forward using the derivative at the current point.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Given:
                <div className='centered-latex'><LaTeX math={"y'=f(t,y),y(t_0)=y_0"}/></div>
              </li>
              <li className='project-sublist-item' >Update:
                <div className='centered-latex'><LaTeX math={"y_{n+1} = y_n + h f(t_n, y_n)"}/></div>
              </li>
            </ol>
          </div>
        </div>

        <div className='project-section'>
          <div className='project-section-title'>Runge-Kutta 4 (RK4)</div>
          <div>
            The fourth-order Runge–Kutta method provides high accuracy for solving ordinary differential equations by combining multiple slope evaluations within each step.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Compute:
                <div className='centered-latex'><LaTeX math={"k_1 = f(t_n, y_n)"}/></div>
                <div className='centered-latex'><LaTeX math={"k_2 = f\\left(t_n + \\frac{h}{2}, y_n + \\frac{h}{2} k_1\\right)"}/></div>
                <div className='centered-latex'><LaTeX math={"k_3 = f\\left(t_n + \\frac{h}{2}, y_n + \\frac{h}{2} k_2\\right)"}/></div>
                <div className='centered-latex'><LaTeX math={"k_4 = f(t_n + h, y_n + h k_3)"}/></div>
              </li>
              <li className='project-sublist-item' >Update:
                <div className='centered-latex'><LaTeX math={"y_{n+1} = y_n + \\frac{h}{6} (k_1 + 2 k_2 + 2 k_3 + k_4)"}/></div>
              </li>
            </ol>
          </div>
        </div>

      </div>
    </PageContent>
    </>
  )
}

export default DiscreteMethodsForSolvingDiff