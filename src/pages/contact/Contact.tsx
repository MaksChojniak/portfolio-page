import PageTitle from './../../components/content/title/Title'
import PageContent from './../../components/content/content/Content'

import { IoLogoWhatsapp, IoLogoFacebook, IoLogoLinkedin, IoIosMail } from "react-icons/io";
import { IoLogoDiscord } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";

import './style/Contact.css'

interface DirectLinkProps {
  icon?: React.ReactNode
  link: string
  children: React.ReactNode
}
export const DirectLink = ( { icon, link, children } : DirectLinkProps ) => {
  return (
    <>
    <div className='contact-link-content'>
      <a className='contact-link' href={link}>
        <div className='contact-link-icon' >{icon}</div>{children}
      </a>
    </div>
    </>
  );
} 

const Contact = () => {

  return (
    <>
    <PageTitle text={"Contact"} />
    <PageContent>
      If you’d like to contact me, send me a message on one of the following apps.
      <div className='contact-links-container'>
        <DirectLink link="https://wa.me/48536597300" icon={<IoLogoWhatsapp/>} >Whatsapp</DirectLink>
        <DirectLink link="https://m.me/maksymilian.chojniak.1" icon={<IoLogoFacebook/>} >Facebook</DirectLink>
        <DirectLink link="https://www.instagram.com/direct/t/maksymilianchojniak" icon={<AiFillInstagram/>} >Instagram</DirectLink>
        <DirectLink link="https://www.linkedin.com/in/maks-chojniak-123433217/" icon={<IoLogoLinkedin/>} >Linkedin</DirectLink>
        <DirectLink link="mailto:maksgamedev@gmail.com" icon={<IoIosMail/>} >Mail</DirectLink>
        <DirectLink link="" icon={<IoLogoDiscord/>} >Discord</DirectLink>
      </div>
    </PageContent>
    </>
  )
}

export default Contact