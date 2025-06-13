import PageSectionName from './../../../../components/content/page-section/Section'
import PageTitle from './../../../../components/content/title/Title'
import PageContent from './../../../../components/content/content/Content'

import './style/About.css'

const About = () => {

  return (
    <>
    <PageSectionName text={["Tools", "Console"]}/>
    <PageTitle text={"About"} />
    <PageContent>
      Content
    </PageContent>
    </>
  )
}

export default About