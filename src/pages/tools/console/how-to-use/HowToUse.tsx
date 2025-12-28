import PageSectionName from './../../../../components/content/page-section/Section'
import PageTitle from './../../../../components/content/title/Title'
import PageLinkToContent from './../../../../components/content/link-to-content-page/Link'
import PageContent from './../../../../components/content/content/Content'
import Code, { ProgrammingLang } from './../../../../components/content/code/Code'

import { howToUse_Log_Code, howToUse_Warning_Code, howToUse_Error_Code, howToUse_Command_Code } from './Codes'

import './style/HowToUse.css'


const HowToUse = () => {

  return (
    <>
    <PageSectionName text={["Tools", "Console"]}/>
    <PageTitle text={"How To Use"} />
    <PageLinkToContent link='https://github.com/MaksChojniak/Tools-Assets/tree/Console'>
      https://github.com/Tools-Assets/Console
    </PageLinkToContent>
    <PageContent>
        <Code language={ProgrammingLang.csharp} code={howToUse_Log_Code}/>
        <Code language={ProgrammingLang.csharp} code={howToUse_Warning_Code}/>
        <Code language={ProgrammingLang.csharp} code={howToUse_Error_Code}/>
        <Code language={ProgrammingLang.csharp} code={howToUse_Command_Code}/>
    </PageContent>
    </>
  )
}

export default HowToUse
