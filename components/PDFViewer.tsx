import React, { useState } from "react";
import { Page, Document, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

// pdfjs is a dependency of react-pdf that needs to be sourced from a cdn
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js`;

interface Props {
    file: string;
    numPages: number;
}

const PDFViewer: React.FC<Props> = ({ file, numPages }) => {
    const [pageNum, setPageNum] = useState(1);
    return (
        <>
            <Document file={file}>
                <Page pageNumber={pageNum} />
            </Document>
            <ChevronLeftIcon onClick={() => setPageNum((pageNum) => (pageNum > 1 ? pageNum - 1 : pageNum))} />
            <ChevronRightIcon onClick={() => setPageNum((pageNum) => (pageNum < numPages ? pageNum + 1 : pageNum))} />
        </>
    );
};

export default PDFViewer;
