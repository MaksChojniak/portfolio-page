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
                
        <section  id='linear' className='project-section'>
          <div className='games-section-title'>Least Squares Approximation (Linear Approximation)</div>
          <div>
            This method uses the Least Squares criteria to find the best-fitting straight line through a set of points. 
            It minimizes the sum of the squares of the vertical deviations between the observed data and the fitted line.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Set up and solve the normal equations system for parameters <LaTeX math={"p_0"}/> and <LaTeX math={"p_1"}/>:
                <div className='centered-latex'><LaTeX math={"\\begin{bmatrix} n & \\sum x_i \\\\ \\sum x_i & \\sum x_i^2 \\end{bmatrix} \\begin{bmatrix} p_0 \\\\ p_1 \\end{bmatrix} = \\begin{bmatrix} \\sum y_i \\\\ \\sum x_i y_i \\end{bmatrix}"}/></div>
              </li>
            </ol>
          </div>
        </section>

        <section id='quadratic' className='project-section'>
          <div className='games-section-title'>Least Squares Approximation (Quadratic Approximation)</div>
          <div>
            Quadratic approximation fits a second-degree polynomial (parabola) to the data points to capture curvature that a linear model cannot. 
            Like the linear version, it minimizes the total squared error across all data points.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Set up and solve the <LaTeX math={"3 \\times 3"}/> system of normal equations for parameters <LaTeX math={"p_0, p_1, p_2"}/>:
                <div className='centered-latex'><LaTeX math={"\\begin{bmatrix} n & \\sum x_i & \\sum x_i^2 \\\\ \\sum x_i & \\sum x_i^2 & \\sum x_i^3 \\\\ \\sum x_i^2 & \\sum x_i^3 & \\sum x_i^4 \\end{bmatrix} \\begin{bmatrix} p_0 \\\\ p_1 \\\\ p_2 \\end{bmatrix} = \\begin{bmatrix} \\sum y_i \\\\ \\sum x_i y_i \\\\ \\sum x_i^2 y_i \\end{bmatrix}"}/></div>
              </li>
            </ol>
          </div>
        </section>

      </div>
    </PageContent>
    </>
  )
}

export default ApproximationMethods