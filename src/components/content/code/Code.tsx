import { useState, useEffect} from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

import './style/Code.css'


const ProgrammingLang =
{ 
  csharp: 'csharp', 
  python: 'python', 
  cpp: 'cpp', 
  css: 'css', 
  html: 'html', 
  js: 'javascript'
}
type ProgrammingLang = (typeof ProgrammingLang)[keyof typeof ProgrammingLang];
export { ProgrammingLang };


interface CodeProps{
    code?: string;
    children: React.ReactNode
    language: ProgrammingLang
}


function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(
    window.matchMedia(query).matches
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

const Code = ( { code, children, language } : CodeProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  if(code)
    children = (<>{code}</>)
  
  return (
    <>
    <SyntaxHighlighter language={language} style={vscDarkPlus} showLineNumbers codeTagProps={{style: { fontSize: !isMobile ? "1rem" : "0.85rem" }}}>
        {children}
    </SyntaxHighlighter>
    </>
  )
}

export default Code
