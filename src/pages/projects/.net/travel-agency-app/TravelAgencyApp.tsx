import Image from './../../../../components/video/Image'

import './../../style/style.css'

const TravelAgencyApp = () => {

    const diagram_path = "/assets/projects/dotnet/travel-agency/diagram.png"

    return (
    <>
        <div className='project-image-container' ><Image src={diagram_path} /></div>
    </>
    );
}

export default TravelAgencyApp