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
                
        <section  id='jacobi' className='project-section'>
          <div className='games-section-title'>Jacobi Method</div>
          <div>
             This iterative technique solves a linear system by expressing each variable in terms of the others and updating all variables simultaneously in each step. 
             It requires the system to be transformed into a convergent form <LaTeX math={"X = WX + Z"}/>.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Start with an initial guess vector <LaTeX math={"X^{(0)}"}/>.</li>
              <li className='project-sublist-item' >For each iteration <LaTeX math={"k"}/>, calculate the new vector:
                <div className='centered-latex'><LaTeX math={"X^{(k+1)} = W \\cdot X^{(k)} + Z"}/></div>
              </li>
              <li className='project-sublist-item' >Repeat until the difference between iterations is below a specified tolerance.</li>
            </ol>
          </div>
        </section>

        <section  id='gauss-seidel' className='project-section'>
          <div className='games-section-title'>Gauss-Seidel Method</div>
          <div>
            The Gauss-Seidel method improves upon simple iteration by using the newly calculated values of variables as soon as they are available within the same iteration. 
            This usually leads to faster convergence compared to the Jacobi method.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >For each component <LaTeX math={"i"}/> from <LaTeX math={"1"}/> to <LaTeX math={"n"}/>, update the value using the most recent estimates:
                <div className='centered-latex'><LaTeX math={"x_i^{(k+1)} = \\sum_{j=1}^{i-1} w_{ij} x_j^{(k+1)} + \\sum_{j=i+1}^{n} w_{ij} x_j^{(k)} + z_i"}/></div>
              </li>
            </ol>
          </div>
        </section>

        <section  id='gauss-seidel-sor' className='project-section'>
          <div className='games-section-title'>Gauss-Seidel with Relaxation (SOR)</div>
          <div>
            Successive Over-Relaxation (SOR) introduces a relaxation factor <LaTeX math={"\\alpha"}/> to accelerate the convergence of the Gauss-Seidel method. 
            By choosing an optimal <LaTeX math={"\\alpha"}/> between <LaTeX math={"1"}/> and <LaTeX math={"2"}/>, the number of iterations required for a solution can be significantly reduced.
            <li className='project-sublist' ><b>Step-by-Step:</b></li>
            <ol>
              <li className='project-sublist-item' >Calculate the standard Gauss-Seidel update value <LaTeX math={"X_{GS}^{(k+1)}"}/>.</li>
              <li className='project-sublist-item' >Adjust the update using the relaxation factor <LaTeX math={"\\alpha"}/>:
                <div className='centered-latex'><LaTeX math={"X^{(k+1)} = (1 - \\alpha)X^{(k)} + \\alpha X_{GS}^{(k+1)}"}/></div>
              </li>
            </ol>
          </div>
        </section>

      </div>
    </PageContent>
    </>
  )
}

export default IterativeMethods