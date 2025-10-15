import PageTitle from './../../components/content/title/Title'
import PageContent from './../../components/content/content/Content'

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

// export const H3 = ({ value }: { value: string } ) => {
//   return (
//     <div className='home-h3' >{value}</div>
//   )
// }

export const ContentLink = ({ link, value, className }: { link: string, value: string, className? : string } ) => {
  return (
    <a className={"home-list-element-link "+className} href={link}>{value}</a>
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

  return (
    <>
    <PageTitle text={"Home"} />
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
        <dl>
          <H2 value={"Featured Games:"}/>
          <ListItem>
            <ContentLink link={""} value={"Blocky Patrol"}/>
          </ListItem>
          <ListItem>
            <ContentLink link={""} value={"ISO Racer"}/>
          </ListItem>
        </dl>
      </Section>

      <Section>
        <dl>
          <H2 value={"Other Projects:"}/>
          <dt className='home-list-title-element'>Unity:</dt>
          <ListItem>
            <ContentLink link={""} value={"Inventory System"}/>
          </ListItem>
          <dt className='home-list-title-element'>.NET C#:</dt>
          <ListItem>
            <ContentLink link={""} value={"Console Application"}/>
          </ListItem>
          <dt className='home-list-title-element'>C++:</dt>
          <ListItem>
            <ContentLink link={""} value={"Console Application"}/>
          </ListItem>
        </dl>
      </Section>
      
      <Section>
        <div>Interested in games, code, or collaboration? <ContentLink className={"home-list-element"} link={""} value={"[Get in touch]"}/></div>
      </Section>
    
    </PageContent>
    </>
  )
}

export default Home