import PageSectionName from './../../../components/content/page-section/Section'
import PageTitle from './../../../components/content/title/Title'
import PageContent from './../../../components/content/content/Content'

import './style/BlockyPatrol.css'

const BlockyPatrol = () => {

  return (
    <>
    <PageSectionName text={["Games"]}/>
    <PageTitle text={"Blocky Patrol"} />
    <PageContent>
      Content
    </PageContent>
    </>
  )
}

export default BlockyPatrol