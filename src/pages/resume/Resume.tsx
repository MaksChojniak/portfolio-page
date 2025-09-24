import { useState } from 'react';

import PageSectionName from './../../components/content/page-section/Section'
import PageTitle from './../../components/content/title/Title'
import PageContent from './../../components/content/content/Content'

import { Table, SectionRow } from './Table/Table'

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
    <PageSectionName text={["Portfolio"]} />
    <PageTitle text={"Resume"} />
    <PageContent>
      <div className='resume-table'>
        <Table>
          <SectionRow title='Name' content='Maksymilian Chojniak' />
          <SectionRow title='Role' content='Programmer / Game Developer' />
          <SectionRow title='Description' content='I am a second-year Computer Science student at the Częstochowa University of Technology, actively developing my skills in game and software development. I combine analytical abilities with creativity, and my sports background – including the title of Polish Basketball Champion and numerous individual awards – has taught me teamwork, determination, and consistency in action. I am a fast learner, adapt well to new environments, and approach challenges with enthusiasm.' />
          <SectionRow title='Experience' content={['Iso Racer 2020 - 2023', 'Blocky Patrol 2023 - 2025']} />
          <SectionRow title='Education' content={['XCIX Liceum Ogólnokształcące z Oddziałami Dwujęzycznymi im.Zbigniewa Herberta, 2020 - 2024', 'Częstochowa University of Technology, Computer Science, 2024 - present']} />
          <SectionRow title='Skills' content='C++, C#, Algorithms, .NET, Python, Unity, Git' />
          <SectionRow title='Skills' contentElements={[(<><div>C++, C#, Algorithms</div></>), (<><div>.NET, Python, Unity, Git</div></>)]} />
          <SectionRow title='Interests' content='Basketball, Cycling, Traveling' />
          <SectionRow title='Certificates' content={['C#', 'Introduction to Generative AI']} />
          <SectionRow title='Languages' content='Polish (native), English (B2), French (A1)' />
        </Table>
      </div>
      {pdf_file_preview}
    </PageContent>
    </>
  )
}

export default Resume
      // <div>
      //   <div>Name</div> - <div>Maksymilian Chojniak</div>
      // </div>
      // <div>
      //   <div>Role</div> - <div>Programmer / Game Developer</div>
      // </div>
      // <div>
      //   <div>Description</div> - <div>I am a second-year Computer Science student at the Częstochowa University of Technology, actively developing my skills in game and 
      //   software development. I combine analytical abilities with creativity, and my sports background – including the title of Polish Basketball Champion 
      //   and numerous individual awards – has taught me teamwork, determination, and consistency in action. I am a fast learner, adapt well to 
      //   new environments, and approach challenges with enthusiasm.</div>
      // </div>
      // <div>
      //   <div>Experience</div> - <div>Iso Racer, Blocky Patrol</div>
      // </div>
      // <div>
      //   <div>Education</div> - <div>Częstochowa University of Technology, Computer Science, 2024 - present</div>
      // </div>
      // <div>
      //   <div>Skills</div> - <div>C++, C#, Algorithms, .NET, Python, Unity, Git</div>
      // </div>
      // <div>
      //   <div>Interests</div> - <div>Basketball, Cycling, Traveling</div>
      // </div>
      // <div>
      //   <div>Certificates</div> - <div>C#, Introduction to Generative AI</div>
      // </div>
      // <div>
      //   <div>Languages</div> - <div>Polish (native), English (B2), French (A1)</div>
      // </div>