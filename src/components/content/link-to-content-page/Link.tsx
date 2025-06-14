import './style/Link.css'


interface LinkProps{
    link?: string;
}

type PageLinkToContentProps = LinkProps & { children?: React.ReactNode };

const base_link = "https://mirror-networking.gitbook.io/docs/manual/interest-management/team";
const Link = ( { children, link=base_link } : PageLinkToContentProps) => {

  return (
    <>
    <div className='link-container'>
        <a className="link-to-content-page" href={link}>{children}</a>
    </div>
    </>
  )
}

export default Link