import React, { useState } from "react";
import { Page, Document, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import styles from "../styles/Home.module.css";

// pdfjs is a dependency of react-pdf that needs to be sourced from a cdn
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js`;

interface Props {
    file: string;
    numPages: number;
}

const PDFViewer: React.FC<Props> = ({ file, numPages }) => {
    const [pageNum, setPageNum] = useState(1);

    return (
        <div style={{ width: "min-content", position: "relative" }}>
            <Document file={file}>
                <Page pageNumber={pageNum} height={800} />
            </Document>
            <ChevronLeftIcon
                style={{ right: "51%" }}
                className={styles.pdfChevron}
                onClick={() => setPageNum((pageNum) => (pageNum > 1 ? pageNum - 1 : pageNum))}
            />
            <ChevronRightIcon
                style={{ left: "51%" }}
                className={styles.pdfChevron}
                onClick={() => setPageNum((pageNum) => (pageNum < numPages ? pageNum + 1 : pageNum))}
            />
        </div>
    );
};

export default PDFViewer;
