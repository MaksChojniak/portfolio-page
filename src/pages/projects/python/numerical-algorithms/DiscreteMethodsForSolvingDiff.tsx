import PageSectionName from './../../../../components/content/page-section/Section'
import PageTitle from './../../../../components/content/title/Title'
import PageLinkToContent from './../../../../components/content/link-to-content-page/Link'
import PageContent from './../../../../components/content/content/Content'

import './style/NumericalAlgorithms.css'

const DiscreteMethodsForSolvingDiff = () => {
  return (
    <>
    <PageSectionName text={["Python", "Numerical-Algorithms"]}/>
    <PageTitle text={"Discrete Methods for Solving Differential Equations"} />
    <PageLinkToContent link={"https://github.com/MaksChojniak/Discrete-Methods-For-Solving-Differential-Equations"}>https://github.com/Discrete-Methods-For-Solving-Differential-Equations</PageLinkToContent>
    <PageContent>
      Content
    </PageContent>
    </>
  )
}

export default DiscreteMethodsForSolvingDiff