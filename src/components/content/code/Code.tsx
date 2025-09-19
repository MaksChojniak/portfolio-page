import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

import './style/Code.css'


interface CodeProps{
    code: string;
}

const Code = ( { code } : CodeProps) => {

  return (
    <>
    <SyntaxHighlighter language="csharp" style={vscDarkPlus} showLineNumbers codeTagProps={{style: { fontSize: "1.1rem" }}}>
        {code}
    </SyntaxHighlighter>
    </>
  )
}

export default Code
