import PageSectionName from './../../../components/content/page-section/Section'
import PageTitle from './../../../components/content/title/Title'
import PageLinkToContent from './../../../components/content/link-to-content-page/Link'
import PageContent from './../../../components/content/content/Content'

import Video from './../../../components/video/Video'
import Image from './../../../components/video/Image'

import './style/BlockyPatrol.css'

const BlockyPatrol = () => {

  const video1_path = "/assets/blocky-partol/video.webm"
  
  const image1_path = "/assets/blocky-partol/blocky1.png"
  const image2_path = "/assets/blocky-partol/blocky2.png"
  const image3_path = "/assets/blocky-partol/blocky3.png"

  return (
    <>
    <PageSectionName text={["Games"]}/>
    <PageTitle text={"Blocky Patrol"} />
    <PageLinkToContent link={"https://play.google.com/store/apps/details?id=com.MMK.BlockyPatrol"}>https://play.google.com/store/BlockyPatrol</PageLinkToContent>
    <PageContent>

      <div>
        <b>Blocky Patrol</b> is a colorful <b>Tower Defense</b> game available on <b>Google Play</b>.<br/> 
        Defend your base against waves of zombies using strategic tower placements — all in a fun low-poly world!
      </div>

      <div>Trailer</div>
      <div className='blocky-patrol-image-container' ><Video src={video1_path} controls={false} /></div>

      <div>Overview</div>
      Your mission: survive endless waves of enemies, upgrade your towers, and refine your 
      defensive strategy.  With its minimalistic voxel style and smooth gameplay, **Blocky Patrol** 
      offers a refreshing take on the tower defense genre — perfect for both casual and tactical players.
    
      <div>Screenshots</div>
      <div className='blocky-patrol-image-container' ><Image src={image1_path} height={200} /></div>
      <div className='blocky-patrol-image-container' ><Image src={image2_path} height={200} /></div>
      <div className='blocky-patrol-image-container' ><Image src={image3_path} height={200} /></div>

      <div>Technical Details</div>
      - Version: (33) 1.3.3  
      - Size: ~176 MB  
      - Platform: Android 7.0+  
      - Mode: Online 

    </PageContent>
    </>
  )
}

export default BlockyPatrol



// 🧟 Blocky Patrol: Tower Defense 🧱
// Prepare for non-stop action in this thrilling tower defense game where your mission is simple: stop the zombie invasion before it's too late!

// Set in a beautifully crafted low-poly world, Tower Defense: Zombie Survival combines minimalist design with intense gameplay. Build and upgrade powerful towers, plan your defense, and eliminate waves of the undead with clever strategy and quick thinking.

// Features:

// 🧠 Strategic Gameplay – Place towers, upgrade wisely, and adapt your tactics as enemy types evolve.

// 🎯 Challenging Levels – Face off against increasingly difficult waves of zombies across multiple environments.

// 🌍 Stylized Low-Poly Graphics – Clean, minimalist visuals that keep the focus on the action.

// 🛠️ Upgradeable Towers – Unlock new abilities and power-ups to boost your defenses.

// 🎮 Easy to Learn, Hard to Master – Jump right in, but only true strategists will survive the toughest waves.

// Can you hold the line and save humanity from the undead swarm?

// Download now and join the fight!
// Your towers. Your strategy. Their doom.