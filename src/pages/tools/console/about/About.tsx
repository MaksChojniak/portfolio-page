import PageSectionName from './../../../../components/content/page-section/Section'
import PageTitle from './../../../../components/content/title/Title'
import PageLinkToContent from './../../../../components/content/link-to-content-page/Link'
import PageContent from './../../../../components/content/content/Content'

import './style/About.css'

const About = () => {

  return (
    <>
    <PageSectionName text={["Tools", "Console"]}/>
    <PageTitle text={"About"} />
    <PageLinkToContent link='https://github.com/MaksChojniak/Tools-Assets/tree/Console'>
      https://github.com/Tools-Assets/Console
    </PageLinkToContent>
    <PageContent>
      Content
    </PageContent>
    </>
  )
}

export default About