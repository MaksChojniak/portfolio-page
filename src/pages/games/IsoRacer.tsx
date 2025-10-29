import PageSectionName from './../../components/content/page-section/Section'
import PageTitle from './../../components/content/title/Title'
import PageLinkToContent from './../../components/content/link-to-content-page/Link'
import PageContent from './../../components/content/content/Content'

import Video from './../../components/video/Video'
import Image from './../../components/video/Image'

import { IoMdVideocam, IoMdSearch , IoMdImages, IoMdConstruct, IoLogoGameControllerB  } from "react-icons/io";

import './style/style.css'

const IsoRacer = () => {

  const video1_path = "/assets/iso-racer/trailer1.webm"
  const video2_path = "/assets/iso-racer/trailer2.webm"

  const image1_path = "/assets/iso-racer/screenshot1.jpg"
  const image2_path = "/assets/iso-racer/screenshot2.jpg"

  return (
    <>
    <PageSectionName text={["Games"]}/>
    <PageTitle text={"Iso Racer"} />
    <PageLinkToContent link={"https://store.steampowered.com/app/2234020/Iso_Racer/"}>https://store.steampowered.com/Iso_Racer/</PageLinkToContent>
    <PageContent>
      
      <div className='games-container'>

        <div>
          <b>ISO Racer</b> is a fast-paced <b>isometric racing game</b> available on <b>Steam</b>.  
          It combines classic drift mechanics with modern physics and competitive online modes.
        </div>

        <div className='games-section'>
          <div className='games-section-title'><div className='games-title-icon'><IoMdVideocam/></div>Trailer</div>
          <div className='games-image-container' ><Video src={video1_path} controls={false} /></div>
          <div className='games-image-container' ><Video src={video2_path} controls={false} /></div>
        </div>


        <div className='games-section'>
          <div className='games-section-title'><div className='games-title-icon'><IoMdSearch/></div>Overview</div>
          <div>
            Feel the thrill of precision driving and perfect drifts!  
            In <b>ISO Racer</b>, every corner counts — test your reflexes, master your technique, 
            and climb the global leaderboards.  Try out the brand-new <b>BUSTED Mode</b>, 
            where you switch sides and become the cop chasing other players.
          </div>
        </div>


        <div className='games-section'>
          <div className='games-section-title'><div className='games-title-icon'><IoMdImages/></div>Screenshots</div>
          <div className='games-image-container' ><Image src={image1_path} /></div>
          <div className='games-image-container' ><Image src={image2_path} /></div>
        </div>

        <div className='games-section'>
          <div className='games-section-title'><div className='games-title-icon'><IoMdConstruct/></div>Technical Details</div>
          <div className='games-list-element' >OS: Windows 10 (64-bit)</div>  
          <div className='games-list-element' >CPU: Intel Core i3 or AMD equivalent</div>
          <div className='games-list-element' >RAM: 8 GB</div>  
          <div className='games-list-element' >GPU: Intel HD / GTX 750</div>
          <div className='games-list-element' >Storage: 10 GB free space</div>
        </div>
        
        <div className='games-section'>
          <div className='games-section-title'><div className='games-title-icon'><IoLogoGameControllerB/></div>Download & Play</div>
          <div><a className='games-link' href="https://store.steampowered.com/app/2234020/Iso_Racer/" >Play Iso Racer</a></div>  
        </div>

      </div>

    </PageContent>
    </>
  )
}

export default IsoRacer