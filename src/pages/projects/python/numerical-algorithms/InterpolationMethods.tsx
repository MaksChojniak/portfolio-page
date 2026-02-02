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
                
        <section id='lagrange' className='project-section'>
          <div className='games-section-title'>Lagrange Interpolation</div>
          <div>
            This method constructs a unique polynomial of degree <LaTeX math={"n"}/> that passes exactly through <LaTeX math={"n+1"}/> given data points. 
            It uses basis polynomials that are constructed to be <LaTeX math={"1"}/> at their specific node and <LaTeX math={"0"}/> at all other nodes.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Calculate the weights (coefficients) <LaTeX math={"a_i"}/> for each node <LaTeX math={"i"}/>:
                <div className='centered-latex'><LaTeX math={"a_i = \\frac{y_i}{\\prod_{j=0, j \\neq i}^{n} (x_i - x_j)}"}/></div>
              </li>
              <li className='project-sublist-item' >Construct the interpolation polynomial value <LaTeX math={"W(x)"}/>:
                <div className='centered-latex'><LaTeX math={"W(x) = \\sum_{i=0}^{n} \\left( a_i \\cdot \\prod_{j=0, j \\neq i}^{n} (x - x_j) \\right)"}/></div>
              </li>
            </ol>
          </div>
        </section>

        <section id='trigonometric' className='project-section'>
          <div className='games-section-title'>Trigonometric Interpolation</div>
          <div>
            Trigonometric interpolation represents a set of data points using a sum of sine and cosine functions, 
            making it ideal for periodic data. It involves solving a system of linear equations to find the coefficients of the Fourier-like series.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Define the trigonometric basis functions based on the number of nodes.</li>
              <li className='project-sublist-item' >Construct the matrix <LaTeX math={"X"}/> where each entry corresponds to a basis function evaluated at a node.</li>
              <li className='project-sublist-item' >Calculate the inverse matrix <LaTeX math={"X^{-1}"}/> (utilizing the property that for specific grids, the inverse is proportional to the transpose).</li>
              <li className='project-sublist-item' >Solve for the coefficient vector <LaTeX math={"C"}/> using: <LaTeX math={"C = X^{-1} \\cdot Y"}/></li>
            </ol>
          </div>
        </section>

        <section id='b-spline' className='project-section'>
          <div className='games-section-title'>Cubic B-splines</div>
          <div>
            Cubic B-splines provide a smooth, piecewise polynomial approximation where the first and second derivatives are continuous at every knot. 
            This method avoids the oscillations often seen in high-degree polynomial interpolation.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Define a uniform grid with step <LaTeX math={"h"}/> and include boundary conditions for derivatives <LaTeX math={"y'_0, y'_n"}/>.</li>
              <li className='project-sublist-item' >Formulate a tridiagonal system for the unknown curvature coefficients <LaTeX math={"K_i"}/>:
                <div className='centered-latex'><LaTeX math={"\\frac{h}{6} K_{i-1} + \\frac{2h}{3} K_i + \\frac{h}{6} K_{i+1} = y_i"}/></div>
              </li>
              <li className='project-sublist-item' >Solve the system to find the weights <LaTeX math={"K_i"}/> used for the <LaTeX math={"B_4"}/> basis functions.</li>
            </ol>
          </div>
        </section>

        </div>
    </PageContent>
    </>
  )
}

export default InterpolationMethods