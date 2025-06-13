import PageSectionName from './../../../components/content/page-section/Section'
import PageTitle from './../../../components/content/title/Title'
import PageContent from './../../../components/content/content/Content'

import './style/IsoRacer.css'

const IsoRacer = () => {

  return (
    <>
    <PageSectionName text={["Games"]}/>
    <PageTitle text={"Iso Racer"} />
    <PageContent>
      Content
    </PageContent>
    </>
  )
}

export default IsoRacer