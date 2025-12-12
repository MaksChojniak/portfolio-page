import PageSectionName from './../../../../components/content/page-section/Section'
import PageTitle from './../../../../components/content/title/Title'
import PageLinkToContent from './../../../../components/content/link-to-content-page/Link'
import PageContent from './../../../../components/content/content/Content'

import Image from './../../../../components/video/Image'

import './../../style/style.css'
// import './../../../games/style/style.css'

const TravelAgencyApp = () => {

    const diagram_path = "/assets/projects/dotnet/travel-agency/diagram.png"

    return (
    <>
        <PageSectionName text={["Projects", ".NET"]}/>
        <PageTitle text={"Travel Agency App"} />
        <PageLinkToContent link={"https://github.com/MaksChojniak/TravelAgencySystem/tree/main"}>https://github.com/TravelAgencyApp/</PageLinkToContent>
        <PageContent>
            <div className='project-container'>
                
                <div className='project-section'>
                    <div className='games-section-title'>UML Class Diagram</div>
                    <div>

                    </div>
                    <div className='project-image-container' ><Image src={diagram_path} /></div>
                </div>
            
            </div>
        </PageContent>
    </>
    );
}

export default TravelAgencyApp