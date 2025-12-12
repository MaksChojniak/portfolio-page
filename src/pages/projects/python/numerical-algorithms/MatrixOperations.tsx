import PageSectionName from './../../../../components/content/page-section/Section'
import PageTitle from './../../../../components/content/title/Title'
import PageLinkToContent from './../../../../components/content/link-to-content-page/Link'
import PageContent from './../../../../components/content/content/Content'

import './../../style/style.css'

const MatrixOperations = () => {
  return (
    <>
    <PageSectionName text={["Python", "Numerical-Algorithms"]}/>
    <PageTitle text={"Matrix Operations"} />
    <PageLinkToContent link={"https://github.com/MaksChojniak/Matrix-Operations"}>https://github.com/Matrix-Operations/</PageLinkToContent>
    <PageContent>
      Content
    </PageContent>
    </>
  )
}

export default MatrixOperations