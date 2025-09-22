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
  // function changePage(offset: number) {
  //   setPageNumber(pageNumber + offset);
  // }


  // const previous_page_button = (
  // <>
  // <button className='pdf-change-page' onClick={() => changePage(-1)}>
  //   Previous
  // </button>
  // </>
  // )
  // const next_page_button = (
  // <>
  // <button className='pdf-change-page' onClick={() => changePage(1)}>
  //   Next
  // </button>
  // </>
  // )

  return (
    <>
    {/* <Document className="pdf-preview-container" file={path} scale={1.35} onLoadSuccess={onDocumentLoadSuccess}> */}
    <Document className="pdf-preview-container" file={path} scale={1.35}>
      {/* <Page className="pdf-preview" pageNumber={pageNumber} renderAnnotationLayer={false} renderTextLayer={false}/> */}
      <Page className="pdf-preview" pageNumber={2} renderAnnotationLayer={false} renderTextLayer={false}/>
    </Document>
    {/* <div className='pdf-toolbar'>
      {pageNumber <= 1 ? <></> : previous_page_button}
      <div className='pdf-page-counter'>
        Page {pageNumber} of {numPages}
      </div>
      {numPages && pageNumber >= numPages ? <></> : next_page_button}
    </div> */}

    </>
  )
}

export default PDF