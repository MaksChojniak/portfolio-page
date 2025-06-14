import PageSectionName from './../../../components/content/page-section/Section'
import PageTitle from './../../../components/content/title/Title'
import PageLinkToContent from './../../../components/content/link-to-content-page/Link'
import PageContent from './../../../components/content/content/Content'

import './style/BlockyPatrol.css'

const BlockyPatrol = () => {
  return (
    <>
    <PageSectionName text={["Games"]}/>
    <PageTitle text={"Blocky Patrol"} />
    <PageLinkToContent link={"https://play.google.com/store/apps/details?id=com.MMK.BlockyPatrol"}>https://play.google.com/store/BlockyPatrol</PageLinkToContent>
    <PageContent>
      Content
    </PageContent>
    </>
  )
}

export default BlockyPatrol