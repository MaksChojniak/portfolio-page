import PageSectionName from './../../../../components/content/page-section/Section'
import PageTitle from './../../../../components/content/title/Title'
import PageLinkToContent from './../../../../components/content/link-to-content-page/Link'
import PageContent from './../../../../components/content/content/Content'

import './../../style/style.css'

const ExactMethods = () => {
  return (
    <>
    <PageSectionName text={["Python", "Numerical-Algorithms"]}/>
    <PageTitle text={"Exact Methods for Solving Linear Systems"} />
    <PageLinkToContent link={"https://github.com/MaksChojniak/Exact-Methods-for-Solving-Linear-Systems"}>https://github.com/Exact-Methods-for-Solving-Linear-Systems</PageLinkToContent>
    <PageContent>
      Content
    </PageContent>
    </>
  )
}

export default ExactMethods