import PageTitle from './../../components/content/title/Title'
import PageContent from './../../components/content/content/Content'

import './style/Home.css'

const Home = () => {

  return (
    <>
    <PageTitle text={"Home"} />
    <PageContent>
Hi, I’m Maks Chojniak.
Developer & indie game creator.

I love combining creativity with programming — from early prototypes to fully playable projects with custom mechanics and visuals.

On this site, you’ll find my favorite works, technical challenges I’ve tackled, and ways to support future development.

Featured Games:
  -Blocky Patrol — a fast-paced puzzle platformer
  -ISO Racer — an isometric racing game

Other Projects:
    Unity:
      -Inventory System
    .NET C#:
      -Console Application
    C++:
      -Console Application

Interested in games, code, or collaboration? [Get in touch →Contact Page]
    </PageContent>
    </>
  )
}

export default Home