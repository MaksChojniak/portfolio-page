import PageSectionName from './../../../../components/content/page-section/Section'
import PageTitle from './../../../../components/content/title/Title'
import PageContent from './../../../../components/content/content/Content'

import './style/BaseCommands.css'

const BaseCommands = () => {

  return (
    <>
    <PageSectionName text={["Tools", "Console"]}/>
    <PageTitle text={"Base Commands"} />
    <PageContent>
      Content
    </PageContent>
    </>
  )
}

export default BaseCommands