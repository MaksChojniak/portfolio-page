import PageSectionName from './../../../../components/content/page-section/Section'
import PageTitle from './../../../../components/content/title/Title'
import PageContent from './../../../../components/content/content/Content'

import './style/OwnCommands.css'

const OwnCommands = () => {

  return (
    <>
    <PageSectionName text={["Tools", "Console"]}/>
    <PageTitle text={"Own Commands"} />
    <PageContent>
      Content
    </PageContent>
    </>
  )
}

export default OwnCommands