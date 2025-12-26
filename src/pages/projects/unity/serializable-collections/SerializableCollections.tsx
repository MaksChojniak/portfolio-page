import PageSectionName from '../../../../components/content/page-section/Section'
import PageTitle from '../../../../components/content/title/Title'
import PageLinkToContent from '../../../../components/content/link-to-content-page/Link'
import PageContent from '../../../../components/content/content/Content'

// import Image from '../../../../components/video/Image'

import './../../style/style.css'

const SerializableCollections = () => {

    // const diagram_path = "/assets/projects/dotnet/travel-agency/diagram.png"

    return (
    <>
        <PageSectionName text={["Projects", "Unity"]}/>
        <PageTitle text={"Serializable Collections"} />
        <PageLinkToContent link={"https://github.com/MaksChojniak/CDPR-RPG/tree/feature/collections"}>https://github.com/unity/collections</PageLinkToContent>
        <PageContent>
            <div className='project-container'>
                
                <div className='project-section'>
                    <div className='games-section-title'>Collections</div>
                    <div>

                    </div>
                </div>
            
            </div>
        </PageContent>
    </>
    );
}

export default SerializableCollections