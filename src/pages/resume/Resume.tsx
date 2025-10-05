import { useState } from 'react';

import PageSectionName from './../../components/content/page-section/Section'
import PageTitle from './../../components/content/title/Title'
import PageContent from './../../components/content/content/Content'

import { Table, SectionRow, Skills } from './Table/Table'

import PDF from './../../components/pdf/PDF'

import './style/Resume.css'

const resume_path_en = "/assets/resume/resume-en.pdf";
const resume_path_pl = "/assets/resume/resume-pl.pdf";
const resume_name = "maksymilian-chojniak-resume.pdf";

type Language = "pl" | "en"

const Resume = () => {

  const [language, setLanguage] = useState<Language>("en");
  const path = language === "pl" ? resume_path_pl : resume_path_en;

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

  const experience = [
    <div className='experience-container'><a className='experience' href="https://store.steampowered.com/app/2234020/Iso_Racer/" >Iso Racer</a>2020 - 2023</div>, 
    <div className='experience-container'><a className='experience' href="https://play.google.com/store/apps/details?id=com.MMK.BlockyPatrol" >Blocky Patrol</a>2023 - 2025</div>
  ];

  const certifcations = [
    <a className='certification' href="" >C#</a>, 
    <a className='certification' href="" >Introduction to Generative AI</a>
  ];

  return (
    <>
    <PageSectionName text={["Portfolio"]} />
    <PageTitle text={"Resume"} />
    <PageContent>
      <div className='resume-table'>
        <Table>
          <SectionRow title='Name' content='Maksymilian Chojniak' />
          <SectionRow title='Role' content='Programmer / Game Developer' />
          <SectionRow title='Description' content='I am a second-year Computer Science student at the Częstochowa University of Technology, actively developing my skills in game and software development. I combine analytical abilities with creativity, and my sports background – including the title of Polish Basketball Champion and numerous individual awards – has taught me teamwork, determination, and consistency in action. I am a fast learner, adapt well to new environments, and approach challenges with enthusiasm.' />
          <SectionRow title='Experience' contentElements={experience} />
          <SectionRow title='Education' content={['XCIX Liceum Ogólnokształcące z Oddziałami Dwujęzycznymi im.Zbigniewa Herberta, 2020 - 2024', 'Częstochowa University of Technology, Computer Science, 2024 - present']} />
          <SectionRow title='Skills' contentElements={<Skills skills={[ {name: "C#", level: 4}, {name: "Unity", level: 3}, {name: "Algorithms", level: 3}, {name: "C++", level: 3}, {name: "Python", level: 3}, {name: ".NET", level: 3}, {name: "Git", level: 3} ]} max_level={5} />} />
          <SectionRow title='Interests' content='Basketball, Cycling, Traveling' />
          <SectionRow title='Certificates' contentElements={certifcations} />
          <SectionRow title='Languages' content='Polish (native), English (B2), French (A1)' />
        </Table>
      </div>
      {pdf_file_preview}
    </PageContent>
    </>
  )
}

export default Resume;