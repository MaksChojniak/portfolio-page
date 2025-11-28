import NavbarTitle from "./NavbarTitle";
import NavbarLink from "./NavbarLink";
import NavbarSection from "./NavbarSection";
import './style/Navbar.css'

interface NavbarProps {
  isOpen: boolean;
  closeNavbar: () => void;
}
    
const Navbar = ( {isOpen, closeNavbar} : NavbarProps) => {

  // const projects_unity_aimlagents_childs = [
  //   {text:"About", link:"/projects/unity/ai-ml-agents/about"}, 
  // ];
  const projects_unity_multiplayer_childs = [
    {text:"Host Migration", link:"/projects/unity/host-migration"}, 
    {text:"Lockstep Sync", link:"/projects/unity/lockstep-sync"}, 
  ];
  // const projects_unity_proceduralcitygenerator_childs = [
  //   {text:"About", link:"/projects/unity/procedural-cite-generator/about"}, 
  // ];

  // const projects_dotnet_multithreadedjobs_childs = [
  //   {text:"About", link:"/projects/dotnet-c#/multithreaded-jobs/about"}, 
  // ]; 
  
  // const projects_cpp_multithreadedjobs_childs = [
  //   {text:"About", link:"/projects/c++/multithreaded-jobs/about"}, 
  // ]; 

  // const projects_python__aimachinelearning_childs = [
  //   {text:"About", link:"/projects/python/ai-machine-learning/about"}
  // ]
  const projects_python__numerical_algorithms_childs = [
    {text:"Matrix Operations", link:"/projects/python/numerical-algorithms/matrix-operations"}, 
    {text:"Exact Methods", link:"/projects/python/numerical-algorithms/exact-methods"}, 
    {text:"Interpolation Methods", link:"/projects/python/numerical-algorithms/interpolation-methods"}, 
    {text:"Approximation Methods", link:"/projects/python/numerical-algorithms/approximation-methods"}, 
    {text:"Iterative Methods", link:"/projects/python/numerical-algorithms/iterative-methods"}, 
    {text:"Approximate Solution", link:"/projects/python/numerical-algorithms/approximate-solution"}, 
    {text:"Integration Methods", link:"/projects/python/numerical-algorithms/integration-methods"}, 
    {text:"Discrete Methods For Solving Diff", link:"/projects/python/numerical-algorithms/discrete-methods-for-solving-diff"}, 
  ]; 



  return (
    <>
    <nav className={`${isOpen ? 'open' : ''}`}>
      <div className="navbar-container">
        <ul>
            <NavbarLink closeNavbar={closeNavbar} text="Home" link="/" />
            <NavbarTitle text="Games" />
            <NavbarLink closeNavbar={closeNavbar} text="Iso Racer" link="/games/iso-racer" />
            <NavbarLink closeNavbar={closeNavbar} text="Blocky Patrol" link="/games/blocky-patrol" />
            <NavbarTitle text="Projects" />
            <NavbarSection text="Unity" >
              {/* <NavbarSection closeNavbar={closeNavbar} text="AI ML Agents" childs={projects_unity_aimlagents_childs} /> */}
              <NavbarSection closeNavbar={closeNavbar} text="Multiplayer" childs={projects_unity_multiplayer_childs} />
              {/* <NavbarSection closeNavbar={closeNavbar} text="City Generator" childs={projects_unity_proceduralcitygenerator_childs} />
              <NavbarLink closeNavbar={closeNavbar} text="Inventory System" link="/projects/unity/inventory-system" />
              <NavbarLink closeNavbar={closeNavbar} text="Console Pro" link="/projects/unity/console-pro" /> */}
            </NavbarSection>
            <NavbarSection text=".NET C#" >
              {/* <NavbarSection closeNavbar={closeNavbar} text="Multithreaded Jobs" childs={projects_dotnet_multithreadedjobs_childs} /> */}
              <NavbarLink closeNavbar={closeNavbar} text="Travel Agency App" link="/projects/dotnet/travel-agency" />
            </NavbarSection>
            {/* <NavbarSection text="Unreal Engine" >
              <NavbarLink closeNavbar={closeNavbar} text="" link="/projects/unreal-engine/" />
            </NavbarSection> */}
            {/* <NavbarSection text="C++" >
              <NavbarSection closeNavbar={closeNavbar} text="Multithreaded Jobs" childs={projects_cpp_multithreadedjobs_childs} />
              <NavbarLink closeNavbar={closeNavbar} text="Snake" link="/projects/c++/snake" />
              <NavbarLink closeNavbar={closeNavbar} text="Pathfinding" link="/projects/c++/pathfinding" />
            </NavbarSection> */}
            <NavbarSection text="Python" >
              {/* <NavbarSection closeNavbar={closeNavbar} text="AI Machine Learning" childs={projects_python__aimachinelearning_childs} /> */}
              <NavbarSection closeNavbar={closeNavbar} text="Numerical Algorithms" childs={projects_python__numerical_algorithms_childs} />
            </NavbarSection>
            <NavbarTitle text="Portfolio" />
            <NavbarLink closeNavbar={closeNavbar} text="Resume" link="/resume" />
            <div className="spacer"/>
            {/* <NavbarLink closeNavbar={closeNavbar} text="Donate" link="/donate" /> */}
            <NavbarLink closeNavbar={closeNavbar} text="Contact" link="/contact" />
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar

/*
<NavbarTitle/>
<NavbarLink closeNavbar={closeNavbar}/>
<NavbarLink closeNavbar={closeNavbar} text="error" link="error"/>
<NavbarLink closeNavbar={closeNavbar} text="error1" link="error1"/>
<NavbarSection closeNavbar={closeNavbar} childs={test_section_child} />
<NavbarLink closeNavbar={closeNavbar} text="Donate" link="donate"/>
*/