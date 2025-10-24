import PageSectionName from './../../../../components/content/page-section/Section'
import PageTitle from './../../../../components/content/title/Title'
import PageLinkToContent from './../../../../components/content/link-to-content-page/Link'
import PageContent from './../../../../components/content/content/Content'

import './style/NumericalAlgorithms.css'

const ApproximationMethods = () => {
  return (
    <>
    <PageSectionName text={["Python", "Numerical-Algorithms"]}/>
    <PageTitle text={"Approximation Methods"} />
    <PageLinkToContent link={"https://github.com/MaksChojniak/Approximation-Methods"}>https://github.com/Approximation-Methods</PageLinkToContent>
    <PageContent>
      Content
    </PageContent>
    </>
  )
}

export default ApproximationMethods