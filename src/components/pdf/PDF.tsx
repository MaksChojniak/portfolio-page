// import { useState } from 'react';
import { Document, Page  } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import './style/PDF.css'

interface PdfProps {
  path: string;
}

const PDF = ( {path} : PdfProps ) => {

  // const [numPages, setNumPages] = useState<number>();
  // const [pageNumber, setPageNumber] = useState<number>(1);

  // function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
  //   setNumPages(numPages);
  // }

  return (
    <>
    {/* <Document className="pdf-preview-container" file={path} scale={1.35} onLoadSuccess={onDocumentLoadSuccess}> */}
    <Document className="pdf-preview-container" file={path} scale={1.35}>
      {/* <Page className="pdf-preview" pageNumber={pageNumber} renderAnnotationLayer={false} renderTextLayer={false}/> */}
      <Page className="pdf-preview" pageNumber={1} renderAnnotationLayer={false} renderTextLayer={false}/>
    </Document>
    </>
  )
}

export default PDF