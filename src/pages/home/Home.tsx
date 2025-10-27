// import PageTitle from './../../components/content/title/Title'
import PageContent from './../../components/content/content/Content'

// import { SectionRow, SubTitleCell } from './../resume/Table/Table'

import './style/Home.css'

const ContentLink = ({ link, value, className }: { link: string, value: string, className? : string } ) => {
  return (
    <a className={"home-link home-h3 "+className} href={link}>{value}</a>
  )
}


const Title = () => {

  return (
  <>
  <div className='blocky-patrol-section'>
    <div className='home-h1' >Hi, I’m Maks Chojniak.</div>
    <div>Developer & indie game creator.</div>
  </div>
  </>
  )
}

const AboutMe = () => {
  return (
  <>
  <div className='blocky-patrol-section'>
    <div className='blocky-patrol-section-title'>About Me</div>
    <div>
      <div>
        I love combining creativity with programming — from early prototypes to fully playable 
        projects with custom mechanics and visuals.
      </div>
      <div>
        On this site, you’ll find my favorite works, technical challenges I’ve tackled, and ways 
        to support future development.
      </div>
    </div>
  </div>
  </>
  )
}

const Resume = () => {
  return (
  <>
  <div className='blocky-patrol-section'>
    <div className='blocky-patrol-section-title'>Resume</div>
    <div>
      Want to know more about my background? Check out my resume/CV for details on my experience and education.
      <ContentLink className={"home-list-element"} link={"/resume"} value={"Resume"}/>
    </div>
  </div>
  </>
  )
}

const Games = () => {

  const featured_games = [
    <div className='home-table-link-container' ><ContentLink className='home-list-element' value={"ISO Racer"} link="games/iso-racer" /></div>,
    <div className='home-table-link-container' ><ContentLink className='home-list-element' value={"Blocky Patrol"} link="/games/blocky-patrol" /></div>,
  ]

  return (
  <>
  <div className='blocky-patrol-section'>
    <div className='blocky-patrol-section-title'>Featured Games</div>
    <div>
      {featured_games.map((child, index) => (
        <div key={index}>{child}</div>
      ))}
    </div>
  </div>
  </>
  )
}

// const Projects = () => {
//   const unity_projects = [
//     <div className='home-table-link-container' ><ContentLink className='home-list-element' value={"Inventory System"} link="" /></div>,
//   ]

//   const dotnet_projects = [
//     <div className='home-table-link-container' ><ContentLink className='home-list-element' value={"Console Application"} link="" /></div>,
//   ]

//   const cpp_projects = [
//     <div className='home-table-link-container' ><ContentLink className='home-list-element' value={"Console Application"} link="" /></div>,
//   ]

//   const python_projects = [
//     <div className='home-table-link-container' ><ContentLink className='home-list-element' value={"Matrix Operations"} link="/projects/python/numerical-algorithms/matrix-operations" /></div>,
//     <div className='home-table-link-container' ><ContentLink className='home-list-element' value={"Exact Methods"} link="/projects/python/numerical-algorithms/exact-methods" /></div>,
//     <div className='home-table-link-container' ><ContentLink className='home-list-element' value={"Interpolation Methods"} link="/projects/python/numerical-algorithms/interpolation-methods" /></div>,
//     <div className='home-table-link-container' ><ContentLink className='home-list-element' value={"Approximation Methods"} link="/projects/python/numerical-algorithms/approximation-methods" /></div>,
//     <div className='home-table-link-container' ><ContentLink className='home-list-element' value={"Iterative Methods"} link="/projects/python/numerical-algorithms/iterative-methods" /></div>,
//     <div className='home-table-link-container' ><ContentLink className='home-list-element' value={"Approximate Solution"} link="/projects/python/numerical-algorithms/approximate-solution" /></div>,
//     <div className='home-table-link-container' ><ContentLink className='home-list-element' value={"Integration Methods"} link="/projects/python/numerical-algorithms/integration-methods" /></div>,
//     <div className='home-table-link-container' ><ContentLink className='home-list-element' value={"Discrete Methods For Solving Diff"} link="/projects/python/numerical-algorithms/discrete-methods-for-solving-diff" /></div>,
//   ]

//   // const other_projects = [
//   //   <SectionRow titleElement={<SubTitleCell value={"Unity"}/>} contentElements={[unity_projects]} />,
//   //   <SectionRow titleElement={<SubTitleCell value={".NET C#"}/>} contentElements={[dotnet_projects]} />,
//   //   <SectionRow titleElement={<SubTitleCell value={"C++"}/>} contentElements={[cpp_projects]} />,
//   //   <SectionRow titleElement={<SubTitleCell value={"Python"}/>} contentElements={[python_projects]} />,
//   // ]

//   return (
//   <>
//   <div className='blocky-patrol-section'>
//     <div className='blocky-patrol-section-title'>Other Projects</div>
//     <div>
//       <div>Unity</div>
//       <div>
//       {unity_projects.map((child, index) => (
//         <div key={index}>{child}</div>
//       ))}
//       </div>
//     </div>
//     <div>
//       <div>.NET C#</div>
//       <div>
//       {dotnet_projects.map((child, index) => (
//         <div key={index}>{child}</div>
//       ))}
//       </div>
//     </div>
//     <div>
//       <div>C++</div>
//       <div>
//       {cpp_projects.map((child, index) => (
//         <div key={index}>{child}</div>
//       ))}
//       </div>
//     </div>
//     <div>
//       <div>Python</div>
//       <div>
//       {python_projects.map((child, index) => (
//         <div key={index}>{child}</div>
//       ))}
//       </div>
//     </div>
//   </div>
//   </>
//   )
// }

const Contact = () => {
  return (
  <>
  <div className='blocky-patrol-section'>
    <div className='blocky-patrol-section-title'>Contact</div>
    <div>
      Interested in games, code, or collaboration? 
      <ContentLink className={"home-list-element"} link={"/contact"} value={"Contact"}/>
    </div>
  </div>
  </>
  )
}

const Donate = () => {
  return (
  <>
  <div className='blocky-patrol-section'>
    <div className='blocky-patrol-section-title'>Donate</div>
    <div>
      Every contribution brings us one step closer to our goal. Tap the button to donate and make an impact today!
      <ContentLink className={"home-list-element"} link={"/donate"} value={"Donate"}/>
    </div>
  </div>
  </>
  )
}

const Home = () => {

  return (
    <>
    {/* <PageTitle text={"Home"} /> */}
    <PageContent>
      <div className='blocky-patrol-container'>

        <Title/>
        <AboutMe/>
        <Resume/>
        <Games/>  
        {/* <Projects/> */}
        <Contact/>
        <Donate/>
        
      </div>

      {/* <Section>
        <Table>
          <SectionRow title='Featured Games' contentElements={featured_games} />
        </Table>
      </Section>

      <Section>
        <Table>
          <SectionTitleRow title='Other Projects' contentElements={other_projects} />
        </Table>
      </Section> */}

        {/* <div className='blocky-patrol-section'>
          <div className='blocky-patrol-section-title'>Donation</div>
          <div>
            Want to know more about my background? Check out my resume/CV for details on my experience and education. 
            <ContentLink className={"home-list-element"} link={"/resume"} value={"Donation"}/>
          </div>
        </div> */}

    </PageContent>
    </>
  )
}

export default Home