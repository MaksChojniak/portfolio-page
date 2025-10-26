import PageSectionName from './../../../components/content/page-section/Section'
import PageTitle from './../../../components/content/title/Title'
import PageLinkToContent from './../../../components/content/link-to-content-page/Link'
import PageContent from './../../../components/content/content/Content'

import Video from './../../../components/video/Video'
import Image from './../../../components/video/Image'

import './style/IsoRacer.css'

const IsoRacer = () => {

  const video1_path = "/assets/iso-racer/video1.webm"
  const video2_path = "/assets/iso-racer/video2.webm"

  const image1_path = "/assets/iso-racer/image1.jpg"
  const image2_path = "/assets/iso-racer/image2.jpg"

  return (
    <>
    <PageSectionName text={["Games"]}/>
    <PageTitle text={"Iso Racer"} />
    <PageLinkToContent link={"https://store.steampowered.com/app/2234020/Iso_Racer/"}>https://store.steampowered.com/Iso_Racer/</PageLinkToContent>
    <PageContent>
      
      <div className='iso-racer-container'>

        <div>
          <b>ISO Racer</b> is a fast-paced <b>isometric racing game</b> available on <b>Steam</b>.  
          It combines classic drift mechanics with modern physics and competitive online modes.
        </div>

        <div className='iso-racer-section'>
          <div className='iso-racer-section-title'>Trailer</div>
          <div className='iso-racer-image-container' ><Video src={video1_path} controls={false} /></div>
          <div className='iso-racer-image-container' ><Video src={video2_path} controls={false} /></div>
        </div>


        <div className='iso-racer-section'>
          <div className='iso-racer-section-title'>Overview</div>
          <div>
            Feel the thrill of precision driving and perfect drifts!  
            In <b>ISO Racer</b>, every corner counts — test your reflexes, master your technique, 
            and climb the global leaderboards.  Try out the brand-new <b>BUSTED Mode</b>, 
            where you switch sides and become the cop chasing other players.
          </div>
        </div>


        <div className='iso-racer-section'>
          <div className='iso-racer-section-title'>Screenshots</div>
          <div className='iso-racer-image-container' ><Image src={image1_path} /></div>
          <div className='iso-racer-image-container' ><Image src={image2_path} /></div>
        </div>

        <div className='iso-racer-section'>
          <div className='iso-racer-section-title'>Technical Details</div>
          <div className='iso-racer-list-element' >OS: Windows 10 (64-bit)</div>  
          <div className='iso-racer-list-element' >CPU: Intel Core i3 or AMD equivalent</div>
          <div className='iso-racer-list-element' >RAM: 8 GB</div>  
          <div className='iso-racer-list-element' >GPU: Intel HD / GTX 750</div>
          <div className='iso-racer-list-element' >Storage: 10 GB free space</div>
        </div>
        
        <div className='iso-racer-section'>
          <div className='iso-racer-section-title'>Download & Play</div>
          <div><a className='iso-racer-link' href="https://store.steampowered.com/app/2234020/Iso_Racer/" >Play Iso Racer/</a></div>  
        </div>

      </div>

    </PageContent>
    </>
  )
}

export default IsoRacer