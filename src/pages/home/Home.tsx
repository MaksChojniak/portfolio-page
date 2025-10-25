// import PageTitle from './../../components/content/title/Title'
import PageContent from './../../components/content/content/Content'

import { Table, SectionRow, SectionTitleRow, SubTitleCell } from './../resume/Table/Table'

import './style/Home.css'


export const H1 = ({ value }: { value: string } ) => {
  return (
    <div className='home-h1' >{value}</div>
  )
}

export const H2 = ({ value }: { value: string } ) => {
  return (
    <div className='home-h2' >{value}</div>
  )
}

export const H3 = ({ value }: { value: string } ) => {
  return (
    <div className='home-h3' >{value}</div>
  )
}

export const ContentLink = ({ link, value, className }: { link: string, value: string, className? : string } ) => {
  return (
    <a className={"home-link home-h3 "+className} href={link}>{value}</a>
  )
}

export const ListItem = ({ children }: { children: React.ReactNode} ) => {
  return (
    <dd className="home-list-element">{children}</dd>
  )
}

export const Section = ({ children }: { children: React.ReactNode} ) => {
  return (
    <div className="home-section">{children}</div>
  )
} 

const Home = () => {

  const featured_games = [
    <div className='home-table-link-container' ><ContentLink className='home-list-element' value={"ISO Racer"} link="games/iso-racer" /></div>,
    <div className='home-table-link-container' ><ContentLink className='home-list-element' value={"Blocky Patrol"} link="/games/blocky-patrol" /></div>,
  ]

  const unity_projects = [
    <div className='home-table-link-container' ><ContentLink className='home-list-element' value={"Inventory System"} link="" /></div>,
  ]

  const dotnet_projects = [
    <div className='home-table-link-container' ><ContentLink className='home-list-element' value={"Console Application"} link="" /></div>,
  ]

  const cpp_projects = [
    <div className='home-table-link-container' ><ContentLink className='home-list-element' value={"Console Application"} link="" /></div>,
  ]

  const python_projects = [
    <div className='home-table-link-container' ><ContentLink className='home-list-element' value={"Matrix Operations"} link="/projects/python/numerical-algorithms/matrix-operations" /></div>,
    <div className='home-table-link-container' ><ContentLink className='home-list-element' value={"Exact Methods"} link="/projects/python/numerical-algorithms/exact-methods" /></div>,
    <div className='home-table-link-container' ><ContentLink className='home-list-element' value={"Interpolation Methods"} link="/projects/python/numerical-algorithms/interpolation-methods" /></div>,
    <div className='home-table-link-container' ><ContentLink className='home-list-element' value={"Approximation Methods"} link="/projects/python/numerical-algorithms/approximation-methods" /></div>,
    <div className='home-table-link-container' ><ContentLink className='home-list-element' value={"Iterative Methods"} link="/projects/python/numerical-algorithms/iterative-methods" /></div>,
    <div className='home-table-link-container' ><ContentLink className='home-list-element' value={"Approximate Solution"} link="/projects/python/numerical-algorithms/approximate-solution" /></div>,
    <div className='home-table-link-container' ><ContentLink className='home-list-element' value={"Integration Methods"} link="/projects/python/numerical-algorithms/integration-methods" /></div>,
    <div className='home-table-link-container' ><ContentLink className='home-list-element' value={"Discrete Methods For Solving Diff"} link="/projects/python/numerical-algorithms/discrete-methods-for-solving-diff" /></div>,
  ]

  const other_projects = [
    <SectionRow titleElement={<SubTitleCell value={"Unity"}/>} contentElements={[unity_projects]} />,
    <SectionRow titleElement={<SubTitleCell value={".NET C#"}/>} contentElements={[dotnet_projects]} />,
    <SectionRow titleElement={<SubTitleCell value={"C++"}/>} contentElements={[cpp_projects]} />,
    <SectionRow titleElement={<SubTitleCell value={"Python"}/>} contentElements={[python_projects]} />,
  ]

  return (
    <>
    {/* <PageTitle text={"Home"} /> */}
    <PageContent>
      <Section>
        <H1 value={"Hi, I’m Maks Chojniak."}/>
        <div>Developer & indie game creator.</div>
      </Section>

      <Section>
        <div>I love combining creativity with programming — from early prototypes to fully playable projects with custom mechanics and visuals.</div>
        <div>On this site, you’ll find my favorite works, technical challenges I’ve tackled, and ways to support future development.</div>
      </Section>

      <Section>
        <div>Want to know more about my background? Check out my resume/CV for details on my experience and education.<ContentLink className={"home-list-element"} link={"/resume"} value={"Resume"}/></div>
      </Section>

      <Section>
        <Table>
          <SectionRow title='Featured Games' contentElements={featured_games} />
        </Table>
      </Section>

      <Section>
        <Table>
          <SectionTitleRow title='Other Projects' contentElements={other_projects} />
        </Table>
      </Section>

      <Section>
        <div>Interested in games, code, or collaboration? <ContentLink className={"home-list-element"} link={"/contact"} value={"Contact"}/></div>
      </Section>
    
    </PageContent>
    </>
  )
}

export default Home