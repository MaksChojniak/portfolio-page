import { useEffect, useState } from "react";
import { useMermaid } from "react-x-mermaid";

import './style/Style.css'

interface DiagramProps{
    chart?:  string,
    filePath?:  string|any,
    config?: any
}
// "Your browser does not support the video tag."
const Diagram = ({ chart='', filePath = null, config = {theme: "dark"} }: DiagramProps) => {
    const [source, setSource] = useState<string>(chart);

    useEffect(() => {
        if(filePath != null || typeof(filePath) === 'string')
        {
            fetch(filePath)
                .then((res) => {
                    if (!res.ok) 
                        throw new Error(`Failed to load ${filePath}: ${res.status}`);
                    return res.text();
                })
                .then((text) => setSource(text))
                .catch((_) => setSource(chart));
        }
    }, [filePath, chart]);

    const { ref, error } = useMermaid(source, config);

    if (error) {
        return <div className="mermaid__error">{error}</div>;
    }

    return <div className="mermaid-renderer" ref={ref} />;
}

export default Diagram