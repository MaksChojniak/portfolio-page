import PageSectionName from './../../../../components/content/page-section/Section'
import PageTitle from './../../../../components/content/title/Title'
import PageLinkToContent from './../../../../components/content/link-to-content-page/Link'
import PageContent from './../../../../components/content/content/Content'

import './style/About.css'


const About = () => {

  return (
    <>
    <PageSectionName text={["Tools", "Console"]}/>
    <PageTitle text={"About"} />
    <PageLinkToContent link='https://github.com/MaksChojniak/Tools-Assets/tree/Console'>
      https://github.com/Tools-Assets/Console
    </PageLinkToContent>
    <PageContent>
      <div className='console-about-introduction'>
        Welcome to the Custom Console made by MChojniak Studio for Unity. it is powerful extension designed to enhance your Unity development workflow. This tool goes beyond the default Unity Console by providing advanced features tailored for both solo developers and teams.
      </div>
      <div className='console-about-key-features'>
        <ul>
          <li className="console-about-key-feature">
            <span className='console-about-key-feature-title'>Custom Loggers:</span>
          </li>
          <li className="console-about-key-feature">
            <span className='console-about-key-feature-title'>Custom Commands:</span>
          </li>
          <li className="console-about-key-feature">
            <span className='console-about-key-feature-title'>Possibility of Extending:</span>
          </li>
        </ul>
      </div>
      
      {/* The default Unity Console is great for basic logging, but as projects grow, so do the challenges of managing logs and debugging complex systems. Our Custom Console addresses these challenges by giving you more control and flexibility, helping you stay organized and efficient.

      ## Get Started

      Integrating the Custom Console into your Unity project is simple. Just follow the installation instructions and start customizing your loggers and commands to suit your needs. Whether you’re debugging gameplay, testing new features, or collaborating with a team, this tool will streamline your process.

      Take your Unity development to the next level with a Console built for */}

    </PageContent>
    </>
  )
}

export default About