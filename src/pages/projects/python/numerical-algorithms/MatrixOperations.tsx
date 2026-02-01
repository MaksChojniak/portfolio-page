import PageSectionName from './../../../../components/content/page-section/Section'
import PageTitle from './../../../../components/content/title/Title'
import PageLinkToContent from './../../../../components/content/link-to-content-page/Link'
import PageContent from './../../../../components/content/content/Content'

import LaTeX from '../../../../components/LaTeX/Latex'

import './../../style/style.css'

const MatrixOperations = () => {

  return (
    <>
    <PageSectionName text={["Python", "Numerical-Algorithms"]}/>
    <PageTitle text={"Matrix Operations"} />
    <PageLinkToContent link={"https://github.com/MaksChojniak/Matrix-Operations"}>https://github.com/Matrix-Operations/</PageLinkToContent>
    <PageContent>
      <div className='project-container'>
                
        <div className='project-section'>
          <div className='games-section-title'>Matrix Multiplication</div>
          <div>
            Matrix multiplication combines two matrices into a new matrix that represents the composition of linear transformations. 
            It is used in solving systems of equations, transformations in graphics, neural networks, and scientific simulations.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Take row <LaTeX math={"i"}/> from matrix <LaTeX math={"A"}/> and column <LaTeX math={"j"}/> from matrix <LaTeX math={"B"}/></li>
              <li className='project-sublist-item' >Multiply corresponding elements and sum them:
                <div className='centered-latex'><LaTeX math={"C_{ij} = \\sum_{k=1}^{p} A_{ik} B_{kj}"}/></div>
              </li>
              <li className='project-sublist-item' >Repeat for all rows and columns to form matrix <LaTeX math={"C"}/></li>
            </ol>
          </div>
        </div>

        <div className='project-section'>
          <div className='games-section-title'>Determinant of a Matrix</div>
          <div>
            The determinant is a scalar value that describes important properties of a matrix, such as whether the matrix is invertible and how it scales space. 
            It is used in solving linear systems and computing matrix inverses.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Select a row (usually the first)</li>
              <li className='project-sublist-item' >Compute minors by removing one row and one column</li>
              <li className='project-sublist-item' >Apply Laplace expansion:
                <div className='centered-latex'><LaTeX math={"\\det(A) = \\sum_{j=1}^{n} (-1)^{1+j} a_{1j} \\det(M_{1j})"}/></div>
              </li>
              <li className='project-sublist-item' >Recursively compute determinants of smaller matrices</li>
            </ol>
          </div>
        </div>

        <div className='project-section'>
          <div className='games-section-title'>Matrix Inverse (LU-based)</div>
          <div>
            The inverse of a matrix allows transforming results back to original coordinates and solving linear systems of the form 
            <LaTeX math={"Ax=b"}/>. Numerical methods compute the inverse efficiently for larger matrices.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Check that <LaTeX math={"\\det(A) \\neq 0"}/></li>
              <li className='project-sublist-item' >Factorize matrix:
                <div className='centered-latex'><LaTeX math={"A = LU"}/></div>
              </li>
              <li className='project-sublist-item' >Solve:
                <div className='centered-latex'><LaTeX math={"A^{-1} = \\frac{1}{\\det(A)} \\operatorname{adj}(A)"}/></div>
                <div className='centered-latex'><LaTeX math={"x_i = \\frac{1}{a_{ii}} \\left( b_i - \\sum_{j=i+1}^{n} a_{ij} x_j \\right)"}/></div>
              </li>
              <li className='project-sublist-item' >Repeat for each column of the identity matrix</li>
            </ol>
          </div>
        </div>
          
      </div>
    </PageContent>
    </>
  )
}

export default MatrixOperations