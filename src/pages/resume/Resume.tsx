import { useState } from 'react';

import PageSectionName from './../../components/content/page-section/Section'
import PageTitle from './../../components/content/title/Title'
import PageContent from './../../components/content/content/Content'

import { Table, SectionRow, Skills, TitleCell } from './Table/Table'

import PDF from './../../components/pdf/PDF'

import { IoMdPricetags, IoMdInformationCircle, IoMdStar, IoMdDocument } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { PiOfficeChairFill } from "react-icons/pi";
import { MdDirectionsBike } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

import './style/Resume.css'

const resume_path_en = "/assets/resume/resume-en.pdf";
const resume_path_pl = "/assets/resume/resume-pl.pdf";
const resume_name = "maksymilian-chojniak-resume.pdf";

type Language = "pl" | "en"


const Title = ( {icon, title} : {icon : React.ReactNode, title : string}) => {
  return (
  <>
  <TitleCell><div className='resume-section-title' ><div className='resume-title-icon'>{icon}</div>{title}</div></TitleCell>
  </>
  );
}

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


  const education = [
    <div className='education-container'><span>XCIX Liceum Ogólnokształcące z Oddziałami Dwujęzycznymi im.Zbigniewa Herberta</span>2020 - 2024</div>,
    <div className='education-container'><span>Częstochowa University of Technology (Computer Science)</span>2024 - present</div>,
  ]

  const experience = [
    <div className='experience-container'><a className='experience' href="/games/iso-racer" >Iso Racer</a>2020 - 2023</div>, 
    <div className='experience-container'><a className='experience' href="/games/blocky-patrol" >Blocky Patrol</a>2023 - 2025</div>
  ];

  const skills = <Skills skills={[ {name: "C#", level: 4}, {name: "Unity", level: 3}, {name: "Algorithms", level: 3},
     {name: "C++", level: 3}, {name: "Python", level: 3}, {name: ".NET", level: 3}, {name: "Git", level: 3} ]} max_level={5} />;

  const certifcations = [
    <div className='certification-container'><a className='certification' href="/assets/certificates/gigathon-2etap-certificate.pdf" >Gigathon Stage 2</a>2023</div>,
    <div className='certification-container'><a className='certification' href="https://www.hackerrank.com/certificates/ebd54a7fa872" >C# (Basic)</a>2023</div>,
    <div className='certification-container'><a className='certification' href="https://www.hackerrank.com/certificates/598408e3cf49" >Problem Solving (Basic)</a>2025</div>,
    <div className='certification-container'><a className='certification' href="https://www.hackerrank.com/certificates/28f6f760921a" >Problem Solving (Intermediate)</a>2025</div>,
    <div className='certification-container'><a className='certification' href="/assets/certificates/cppbuzz-cpp-certificate.pdf" >C++ (Basic)</a>2025</div>,
    // <div className='certification-container'><a className='certification' href="" >Introduction to Generative AI</a>2025</div>
  ];

  return (
    <>
    <PageSectionName text={["Portfolio"]} />
    <PageTitle text={"Resume"} />
    <PageContent>
      <div className='resume-table'>
        <Table>
          <SectionRow titleElement={<Title icon={<IoMdPricetags/>} title='Name' />} content='Maksymilian Chojniak' />
          <SectionRow titleElement={<Title icon={<PiOfficeChairFill/>} title='Role' />} content='Programmer / Game Developer' />
          <SectionRow titleElement={<Title icon={<IoMdInformationCircle/>} title='Description' />} content='I am a second-year Computer Science student at the Częstochowa University of Technology, actively developing my skills in game and software development. I combine analytical abilities with creativity, and my sports background – including the title of Polish Basketball Champion and numerous individual awards – has taught me teamwork, determination, and consistency in action. I am a fast learner, adapt well to new environments, and approach challenges with enthusiasm.' />
          <SectionRow titleElement={<Title icon={<AiOutlineFundProjectionScreen/>} title='Experience' />} contentElements={experience} />
          <SectionRow titleElement={<Title icon={<FaBook/>} title='Education' />} contentElements={education} />
          <SectionRow titleElement={<Title icon={<IoMdStar/>} title='Skills' />} contentElements={skills} />
          <SectionRow titleElement={<Title icon={<MdDirectionsBike/>} title='Interests' />} content='Basketball, Cycling, Traveling' />
          <SectionRow titleElement={<Title icon={<IoMdDocument/>} title='Certificates' />} contentElements={certifcations} />
          <SectionRow titleElement={<Title icon={<IoLanguage/>} title='Languages' />} content='Polish (native), English (B2), French (A1)' />
        </Table>
      </div>
      {pdf_file_preview}
    </PageContent>
    </>
  )
}

export default Resume;