import PageSectionName from './../../../../components/content/page-section/Section'
import PageTitle from './../../../../components/content/title/Title'
import PageLinkToContent from './../../../../components/content/link-to-content-page/Link'
import PageContent from './../../../../components/content/content/Content'

import './style/NumericalAlgorithms.css'

const IterativeMethods = () => {
  return (
    <>
    <PageSectionName text={["Python", "Numerical-Algorithms"]}/>
    <PageTitle text={"Iterative Methods for Solving Linear Systems of Equations"} />
    <PageLinkToContent link={"https://github.com/MaksChojniak/Iterative-Methods-For-Solving-Linear-Systems-of-Equations"}>https://github.com/Iterative-Methods-For-Solving-Linear-Systems-of-Equations</PageLinkToContent>
    <PageContent>
      Content
    </PageContent>
    </>
  )
}

export default IterativeMethods