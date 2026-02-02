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
                
        <section  id='euler' className='project-section'>
          <div className='games-section-title'>Euler's Method</div>
          <div>
             Euler's method is a first-order numerical procedure for solving ordinary differential equations (ODEs) with a given initial value. 
             It works by taking small steps along the direction of the tangent line as defined by the differential equation.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Start with initial values <LaTeX math={"x_0, y_0"}/> and a step size <LaTeX math={"h"}/>.</li>
              <li className='project-sublist-item' >Iteratively calculate the next <LaTeX math={"y"}/> value:
                <div className='centered-latex'><LaTeX math={"y_{i+1} = y_i + h \\cdot F(x_i, y_i)"}/></div>
              </li>
            </ol>
          </div>
        </section>

        <section  id='runge-kutta-3' className='project-section'>
          <div className='games-section-title'>Runge-Kutta 3rd Order (RK3)</div>
          <div>
             This method provides a third-order approximation of an ODE solution by calculating the slope at multiple points within each step. 
             It offers a much better balance between computational cost and accuracy compared to the simple Euler method.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Calculate three intermediate slope estimates <LaTeX math={"(m1, m2, m3)"}/>:
                <div className='centered-latex'><LaTeX math={"m_1 = F(x_i, y_i)"}/></div>
                <div className='centered-latex'><LaTeX math={"m_2 = F(x_i + \\frac{h}{2}, y_i + \\frac{h \\cdot m_1}{2})"}/></div>
                <div className='centered-latex'><LaTeX math={"m_3 = F(x_i + h, y_i - h \\cdot m_1 + 2h \\cdot m_2)"}/></div>
              </li>
              <li className='project-sublist-item' >Update the <LaTeX math={"y"}/> value using the weighted average of these slopes:
                <div className='centered-latex'><LaTeX math={"y_{i+1} = y_i + \\frac{h}{6}(m_1 + 4m_2 + m_3)"}/></div>
              </li>
            </ol>
          </div>
        </section>

      </div>
    </PageContent>
    </>
  )
}

export default DiscreteMethodsForSolvingDiff