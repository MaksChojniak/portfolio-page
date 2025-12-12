import PageSectionName from './../../../../components/content/page-section/Section'
import PageTitle from './../../../../components/content/title/Title'
import PageLinkToContent from './../../../../components/content/link-to-content-page/Link'
import PageContent from './../../../../components/content/content/Content'

import './../../style/style.css'

const ApproximateSolution = () => {
  return (
    <>
    <PageSectionName text={["Python", "Numerical-Algorithms"]}/>
    <PageTitle text={"Approximate Solution of Nonlinear Equations"} />
    <PageLinkToContent link={"https://github.com/MaksChojniak/Approximate-Solution-of-Nonlinear-Equations"}>https://github.com/Approximate-Solution-of-Nonlinear-Equations</PageLinkToContent>
    <PageContent>
      Content
    </PageContent>
    </>
  )
}

export default ApproximateSolution