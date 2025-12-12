import PageSectionName from './../../../../components/content/page-section/Section'
import PageTitle from './../../../../components/content/title/Title'
import PageLinkToContent from './../../../../components/content/link-to-content-page/Link'
import PageContent from './../../../../components/content/content/Content'

import './../../style/style.css'

const InterpolationMethods = () => {
  return (
    <>
    <PageSectionName text={["Python", "Numerical-Algorithms"]}/>
    <PageTitle text={"Interpolation Methods"} />
    <PageLinkToContent link={"https://github.com/MaksChojniak/Interpolation-Methods"}>https://github.com/Interpolation-Methods</PageLinkToContent>
    <PageContent>
      Content
    </PageContent>
    </>
  )
}

export default InterpolationMethods