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
  const toggleLanguage = () => { language === "pl" ? setLanguage("en") : setLanguage("pl"); };

  const path = language === "pl" ? resume_path_pl : resume_path_en;

  return (
    <>
    <PageSectionName text={["Portfolio"]}/>
    <PageTitle text={"Resume"} />
    <PageContent>
      Content
      <div className='resume-toolbar'>
        <a className="resume-link" href={path} download={resume_name}>
          Download Resume PDF
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
      <PDF path={path} />
      Content
    </PageContent>
    </>
  )
}

export default Resume