import PageSectionName from './../../../components/content/page-section/Section'
import PageTitle from './../../../components/content/title/Title'
import PageLinkToContent from './../../../components/content/link-to-content-page/Link'
import PageContent from './../../../components/content/content/Content'

import Video from './../../../components/video/Video'

import './style/IsoRacer.css'

const IsoRacer = () => {

  const video1_path = "/assets/iso-racer/video1.webm"
  const video2_path = "/assets/iso-racer/video2.webm"

  return (
    <>
    <PageSectionName text={["Games"]}/>
    <PageTitle text={"Iso Racer"} />
    <PageLinkToContent link={"https://store.steampowered.com/app/2234020/Iso_Racer/"}>https://store.steampowered.com/Iso_Racer/</PageLinkToContent>
    <PageContent>
      <Video src={video1_path} controls={false} />
      <Video src={video2_path} controls={false} />
    </PageContent>
    </>
  )
}

export default IsoRacer