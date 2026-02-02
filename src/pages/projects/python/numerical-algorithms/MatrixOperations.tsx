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
                
        <section id='multiplication' className='project-section'>
          <div className='games-section-title'>Matrix Multiplication</div>
          <div>
            This algorithm computes the product of two matrices by performing a dot product between the rows of the first matrix and the columns of the second. 
            It is a fundamental operation in linear algebra used to transform coordinate systems or solve systems of equations.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Initialize a result matrix <LaTeX math={"C"}/> of size <LaTeX math={"m \\times k"}/>.</li>
              <li className='project-sublist-item' >Iterate through each row <LaTeX math={"i"}/> from <LaTeX math={"1"}/> to <LaTeX math={"m"}/>.</li>
              <li className='project-sublist-item' >Iterate through each column <LaTeX math={"j"}/> from <LaTeX math={"1"}/> to <LaTeX math={"k"}/>.</li>
              <li className='project-sublist-item' >Set a temporary variable <LaTeX math={"sum = 0"}/>.</li>
              <li className='project-sublist-item' >Iterate <LaTeX math={"s"}/> (the inner dimension) from <LaTeX math={"1"}/> to <LaTeX math={"n"}/> and calculate:
                <div className='centered-latex'><LaTeX math={"C_{ij} = \\sum_{s=1}^{n} A_{is} \\cdot B_{sj}"}/></div>
              </li>
              <li className='project-sublist-item' >Store the final result in <LaTeX math={"C_{ij} = sum"}/>.</li>
            </ol>
          </div>
        </section>

        <section id='determinant-variant1' className='project-section'>
          <div className='games-section-title'>Matrix Determinant (Variant I)</div>
          <div>
            This method calculates the determinant of a square matrix by reducing it to an upper triangular form using a specific row transformation. 
            The determinant is then found by tracking the product of the diagonal elements throughout the elimination process
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Initialize the determinant variable <LaTeX math={"det = A_{11}"}/>.</li>
              <li className='project-sublist-item' >For each pivot step <LaTeX math={"s"}/> from <LaTeX math={"1"}/> to <LaTeX math={"n-1"}/>:
                <li className='project-sublist-item' >For each row <LaTeX math={"i"}/> below the pivot from <LaTeX math={"s+1"}/> to <LaTeX math={"n"}/>:
                  <li className='project-sublist-item' >For each column <LaTeX math={"j"}/> from <LaTeX math={"s+1"}/> to <LaTeX math={"n"}/>:
                    <div className='centered-latex'><LaTeX math={"A_{ij} = A_{ij} - \\frac{A_{is} \\cdot A_{sj}}{A_{ss}}"}/></div>
                  </li>
                </li>
                <li className='project-sublist-item' >Update the determinant:
                  <div className='centered-latex'><LaTeX math={"det = det \\cdot A_{s+1, s+1}"}/></div>
                </li>
              </li>
              <li className='project-sublist-item' >The final value of det is the matrix determinant.</li>
            </ol>
          </div>
        </section>

        <section id='determinant-variant2' className='project-section'>
          <div className='games-section-title'>Matrix Determinant (Variant II)</div>
          <div>
            This version is a more standard Gaussian elimination approach where a multiplier is explicitly calculated for each row. 
            It transforms the matrix into a triangular form and calculates the determinant as the final product of all elements on the main diagonal.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >For <LaTeX math={"s"}/> from <LaTeX math={"1"}/> to <LaTeX math={"n-1"}/>:
                <li className='project-sublist-item' >For each row <LaTeX math={"i"}/> from <LaTeX math={"s+1"}/> to <LaTeX math={"n"}/>:
                  <div className='centered-latex'><LaTeX math={"multiplier = \\frac{A_{is}}{A_{ss}}"}/></div>
                  <div className='centered-latex'><LaTeX math={"A_{ij} = A_{ij} - multiplier \\cdot A_{sj}"}/></div>
                </li>
              </li>
              <li className='project-sublist-item' >Calculate the final determinant by multiplying the diagonal:
                <div className='centered-latex'><LaTeX math={"det = \\prod_{i=1}^{n} A_{ii}"}/></div>
              </li>
            </ol>
          </div>
        </section>

        <section id='inverse' className='project-section'>
          <div className='games-section-title'>Inverting a Non-singular Matrix</div>
          <div>
            This algorithm uses the Gauss-Jordan elimination method to find the inverse of a matrix by applying the same row operations to <LaTeX math={"A"}/> and an identity matrix <LaTeX math={"I"}/>. 
            If <LaTeX math={"A"}/> is successfully transformed into the identity matrix, the identity matrix simultaneously transforms into <LaTeX math={"A^{-1}"}/>.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Create an augmented matrix <LaTeX math={"[A | I]"}/> where <LaTeX math={"I"}/> is the identity matrix of the same size.</li>
              <li className='project-sublist-item' >For each column <LaTeX math={"s"}/> from <LaTeX math={"1"}/> to <LaTeX math={"n"}/>:
                <li className='project-sublist-item' >Normalize the pivot row <LaTeX math={"s"}/> by dividing the entire row by the value <LaTeX math={"A_{ss}"}/> so the pivot becomes <LaTeX math={"1"}/>.</li>
                <li className='project-sublist-item' >For every other row <LaTeX math={"i \\neq s"}/>, subtract the normalized pivot row multiplied by <LaTeX math={"A_{is}"}/> to create zeros in all other positions of column <LaTeX math={"s"}/> </li>
              </li>
              <li className='project-sublist-item' >The resulting right side of the augmented matrix is the inverse <LaTeX math={"A^{-1}"}/>.</li>
            </ol>
          </div>
        </section>
          
      </div>
    </PageContent>
    </>
  )
}

export default MatrixOperations