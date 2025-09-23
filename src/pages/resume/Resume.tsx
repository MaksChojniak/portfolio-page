import { useState } from 'react';

import PageSectionName from './../../components/content/page-section/Section'
import PageTitle from './../../components/content/title/Title'
import PageContent from './../../components/content/content/Content'

import PDF from './../../components/pdf/PDF'

import './style/Resume.css'

const resume_path_en = "/assets/resume/resume-en.pdf";
const resume_path_pl = "/assets/resume/resume-pl.pdf";
const resume_name = "maksymilian-chojniak-resume.pdf"

type Language = "pl" | "en"

const Resume = () => {

  const [language, setLanguage] = useState<Language>("en");
  const path = language === "pl" ? resume_path_pl : resume_path_en;
  // const path = '/assets/resume/test-many-pages.pdf';

  const pdf_file_preview = (
  <>
  <div className='resume-toolbar'>
    <a className="resume-link" href={path} download={resume_name}>
      Download PDF
    </a>
    <div className='language-buttons-container'>
      <button className={`language-button ${language == "en" ? "clicked" : ""}`} onClick={() => setLanguage("en")}>
        en
      </button>
      <button className={`language-button ${language == "pl" ? "clicked" : ""}`} onClick={() => setLanguage("pl")}>
        pl
      </button>
    </div>
  </div>
  <div className='resume-pdf'>
    <PDF path={path} />
  </div>
  </>
  )

  return (
    <>
    <PageSectionName text={["Portfolio"]}/>
    <PageTitle text={"Resume"} />
    <PageContent>
      <div>
        Name - Maksymilian Chojniak
      </div>
      <div>
        Role - Programmer / Game Developer
      </div>
      <div>
        Description - I am a second-year Computer Science student at the Częstochowa University of Technology, actively developing my skills in game and 
        software development. I combine analytical abilities with creativity, and my sports background – including the title of Polish Basketball Champion 
        and numerous individual awards – has taught me teamwork, determination, and consistency in action. I am a fast learner, adapt well to 
        new environments, and approach challenges with enthusiasm.
      </div>
      <div>
        Experience - Iso Racer, Blocky Patrol
      </div>
      <div>
        Education - Częstochowa University of Technology, Computer Science, 2024 - present
      </div>
      <div>
        Skills - C++, C#, Algorithms, .NET, Python, Unity, Git
      </div>
      <div>
        Interests - Basketball, Cycling, Traveling
      </div>
      <div>
        Certificates - C#, Introduction to Generative AI
      </div>
      <div>
        Languages - Polish (native), English (B2), French (A1)
      </div>
      {pdf_file_preview}
    </PageContent>
    </>
  )
}

export default Resume