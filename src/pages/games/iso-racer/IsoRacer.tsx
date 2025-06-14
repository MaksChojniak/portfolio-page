import PageSectionName from './../../../components/content/page-section/Section'
import PageTitle from './../../../components/content/title/Title'
import PageLinkToContent from './../../../components/content/link-to-content-page/Link'
import PageContent from './../../../components/content/content/Content'

import './style/IsoRacer.css'

const IsoRacer = () => {
  return (
    <>
    <PageSectionName text={["Games"]}/>
    <PageTitle text={"Iso Racer"} />
    <PageLinkToContent link={"https://store.steampowered.com/app/2234020/Iso_Racer/"}>https://store.steampowered.com/Iso_Racer/</PageLinkToContent>
    <PageContent>
      Content
    </PageContent>
    </>
  )
}

export default IsoRacer